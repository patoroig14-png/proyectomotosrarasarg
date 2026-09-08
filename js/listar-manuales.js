const manualesAdicionales = [
    {
        id: "en125",
        manual: {
            titulo: "Manual de servicio - Suzuki EN125",
            precio: 500,
            archivo: "manuales/EN125-YES.pdf"
        }
    },
    {
        id: "suzuki-ax-100",
        manual: {
            titulo: "Manual de reparacion - Suzuki AX 100",
            precio: 500,
            archivo: "manuales/suzuki-ax-100-manual-de-reparacion.pdf"
        }
    },
    {
        id: "yamaha-sr-250",
        manual: {
            titulo: "Manual de despiece - Yamaha SR 250 Special",
            precio: 500,
            archivo: "manuales/yamahasr250special-manualdedespiece.pdf"
        }
    },
];

// Esperar a que el DOM este listo
document.addEventListener("DOMContentLoaded", function() {
    const contenedorManuales = document.getElementById("manuales-disponibles");

    if (contenedorManuales) {
        const manuales = motos.filter(function(moto) {
            return moto.manual;
        }).concat(manualesAdicionales);

        manuales.forEach(function(moto) {
                const div = document.createElement("div");
                div.className = "manual-item";
                div.id = "manual-" + moto.id;
                
                const infoDiv = document.createElement("div");
                infoDiv.className = "manual-info";
                
                const titulo = document.createElement("h3");
                const enlaceFicha = document.createElement("a");
                enlaceFicha.href = "fichas/ficha.html?id=" + moto.id;
                enlaceFicha.textContent = moto.manual.titulo;
                titulo.appendChild(enlaceFicha);
                
                const precio = document.createElement("p");
                precio.className = "precio-manual";
                precio.textContent = `$${moto.manual.precio.toLocaleString("es-AR")} ARS`;
                
                infoDiv.appendChild(titulo);
                infoDiv.appendChild(precio);
                
                div.appendChild(infoDiv);
                
                mostrarBotonCompra(moto, div);
                contenedorManuales.appendChild(div);
        });
    }
});

function mostrarBotonCompra(moto, contenedor) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "boton-comprar-manual";
    boton.textContent = "Comprar manual";
    boton.addEventListener("click", function() {
        alert("La compra online estará disponible próximamente.");
    });
    contenedor.appendChild(boton);
}
