require("dotenv").config();
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");
const { createClient } = require("@supabase/supabase-js");
const catalogo = require("./catalogo");

const app = express();
const PUERTO = process.env.PUERTO || 3000;

app.use(cors());
app.use(express.json());

// Cliente de Mercado Pago
const mpClient = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN
});

// Cliente de Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

// Base de datos temporal en memoria para las órdenes y tokens
// En producción real esto debería ir en una base de datos
const ordenes = {};
const tokens = {};

// Configuración del email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Ruta de prueba
app.get("/", function(req, res) {
    res.send("Backend de Motos Raras Arg funcionando ✅");
});

// Endpoint que el frontend llama cuando alguien hace clic en "Comprar manual"
app.post("/crear-pago", async function(req, res) {
    try {
        const productId = req.body.productId;
        const producto = catalogo[productId];

        if (!producto) {
            return res.status(400).json({ error: "Producto no encontrado" });
        }

        const orderId = Date.now() + "-" + Math.random().toString(36).substring(2, 8);
        ordenes[orderId] = { productId: productId, status: "pending" };

        const preference = new Preference(mpClient);
        const resultado = await preference.create({
            body: {
                items: [
                    {
                        title: producto.titulo,
                        quantity: 1,
                        unit_price: producto.precio,
                        currency_id: "ARS"
                    }
                ],
                external_reference: productId + "|" + orderId,
                back_urls: {
                    success: "https://patoroig14-png.github.io/proyectomotosrarasarg/",
                    pending: "https://patoroig14-png.github.io/proyectomotosrarasarg/",
                    failure: "https://patoroig14-png.github.io/proyectomotosrarasarg/"
                },
                notification_url: "https://backend-misty-sky-5888.fly.dev/webhooks/mercadopago"
            }
        });

        console.log("init_point:", resultado.init_point);
        res.json({ init_point: resultado.init_point });
    } catch (error) {
        console.error("Error al crear pago:", error);
        res.status(500).json({ error: "Error al crear el pago" });
    }
});

// Webhook: Mercado Pago avisa acá cuando hay un pago
app.post("/webhooks/mercadopago", async function(req, res) {
    try {
        const { type, data } = req.body;

        if (type === "payment" && data && data.id) {
            const payment = new Payment(mpClient);
            const pago = await payment.get({ id: data.id });

            if (pago.status === "approved" && pago.external_reference) {
                const [productId, orderId] = pago.external_reference.split("|");
                const producto = catalogo[productId];

                if (producto && orderId) {
                    // Marcar orden como pagada
                    if (ordenes[orderId]) {
                        ordenes[orderId].status = "approved";
                    }

                    // Generar token de descarga (válido por 48 horas)
                    const token = crypto.randomBytes(32).toString("hex");
                    tokens[token] = {
                        productId: productId,
                        orderId: orderId,
                        createdAt: Date.now(),
                        used: false
                    };

                    // Enviar email con el link de descarga
                    const emailCliente = pago.payer && pago.payer.email ? pago.payer.email : null;
                    if (emailCliente) {
                        const linkDescarga = `https://backend-misty-sky-5888.fly.dev/descargar?token=${token}`;
                        await transporter.sendMail({
                            from: `"Motos Raras Arg" <${process.env.EMAIL_USER}>`,
                            to: emailCliente,
                            subject: `Tu manual: ${producto.titulo}`,
                            html: `
                                <h2>¡Gracias por tu compra!</h2>
                                <p>Aquí está tu manual: <strong>${producto.titulo}</strong></p>
                                <p>Hacé clic en el siguiente link para descargarlo:</p>
                                <p><a href="${linkDescarga}">${linkDescarga}</a></p>
                                <p>Este link es válido por 48 horas.</p>
                            `
                        });
                    }
                }
            }
        }

        res.sendStatus(200);
    } catch (error) {
        console.error("Error en webhook:", error);
        res.sendStatus(500);
    }
});

// Endpoint de descarga
app.get("/descargar", async function(req, res) {
    try {
        const token = req.query.token;

        if (!token || !tokens[token]) {
            return res.status(401).send("Token inválido o expirado");
        }

        const info = tokens[token];

        // Verificar si el token ya fue usado
        if (info.used) {
            return res.status(401).send("Este link ya fue utilizado");
        }

        // Verificar si el token expiró (48 horas)
        const horas48 = 48 * 60 * 60 * 1000;
        if (Date.now() - info.createdAt > horas48) {
            delete tokens[token];
            return res.status(401).send("Este link ha expirado");
        }

        const producto = catalogo[info.productId];
        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }

        // Descargar el PDF desde Supabase
        const { data, error } = await supabase.storage
            .from("manuales")
            .download(producto.archivo);

        if (error) {
            console.error("Error al descargar de Supabase:", error);
            return res.status(500).send("Error al obtener el archivo");
        }

        // Marcar el token como usado
        info.used = true;

        // Enviar el PDF al cliente
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="${producto.archivo}"`);
        res.send(Buffer.from(await data.arrayBuffer()));
    } catch (error) {
        console.error("Error en descarga:", error);
        res.status(500).send("Error al descargar el archivo");
    }
});

app.listen(PUERTO, "0.0.0.0", function() {
    console.log("Servidor corriendo en el puerto " + PUERTO);
});