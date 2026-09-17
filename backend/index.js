require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MercadoPagoConfig, Preference } = require("mercadopago");
const catalogo = require("./catalogo");

const app = express();
const PUERTO = process.env.PUERTO || 3000;

// Permitir que GitHub Pages hable con este backend
app.use(cors());
app.use(express.json());

// Cliente de Mercado Pago
const mpClient = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN
});

// Ruta de prueba: si entrás con el navegador, te dice que está vivo
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

        // Generamos un ID único para esta orden
        const orderId = Date.now() + "-" + Math.random().toString(36).substring(2, 8);

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
                }
            }
        });

        // Usamos sandbox_init_point para forzar el entorno de pruebas
        console.log("init_point:", resultado.init_point);
        console.log("sandbox_init_point:", resultado.sandbox_init_point);

        res.json({ init_point: resultado.sandbox_init_point || resultado.init_point });
    } catch (error) {
        console.error("Error al crear pago:", error);
        res.status(500).json({ error: "Error al crear el pago" });
    }
});

app.listen(PUERTO, function() {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});