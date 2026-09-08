// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    const contenedorManuales = document.getElementById("manuales-disponibles");

    if (contenedorManuales) {
        motos.forEach(function(moto) {
            if (moto.manual) {
                const div = document.createElement("div");
                div.className = "manual-item";
                div.id = "manual-" + moto.id;
                
                const infoDiv = document.createElement("div");
                infoDiv.className = "manual-info";
                
                const titulo = document.createElement("h3");
                titulo.textContent = moto.manual.titulo;
                
                const precio = document.createElement("p");
                precio.className = "precio-manual";
                precio.textContent = `$${moto.manual.precio.toLocaleString("es-AR")} ARS`;
                
                infoDiv.appendChild(titulo);
                infoDiv.appendChild(precio);
                
                div.appendChild(infoDiv);
                
                mostrarBotonCompra(moto, div);
                contenedorManuales.appendChild(div);
            }
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
