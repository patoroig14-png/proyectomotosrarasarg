const express = require("express");
const app = express();
const PUERTO = 3000;

app.get("/", function(req, res) {
    res.send("Hola mundo, este es mi backend funcionando!");
});

app.listen(PUERTO, function() {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});