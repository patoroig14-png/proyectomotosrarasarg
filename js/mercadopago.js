require("dotenv").config();
const express = require("express");
const app = express();
const PUERTO = 3000;

app.use(express.json());

// Endpoint para crear un link de pago
app.post("/crear-pago", async function(req, res) {
    const moto = req.body;

    try {
        const respuesta = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.MP_ACCESS_TOKEN
            },
            body: JSON.stringify({
                items: [
                    {
                        title: moto.manual.titulo,
                        quantity: 1,
                        unit_price: moto.manual.precio,
                        currency_id: "ARS"
                    }
                ],
                external_reference: moto.id
            })
        });

        const data = await respuesta.json();
        res.json({ linkPago: data.init_point });

    } catch (error) {
        console.error("Error creando el pago:", error);
        res.status(500).json({ error: "No se pudo crear el link de pago" });
    }
});

app.listen(PUERTO, function() {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});