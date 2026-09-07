// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    const contenedorManuales = document.getElementById("manuales-disponibles");

    if (contenedorManuales) {
        motos.forEach(function(moto) {
            if (moto.manual) {
                const div = document.createElement("div");
                div.className = "manual-item";
                
                const infoDiv = document.createElement("div");
                infoDiv.className = "manual-info";
                
                const titulo = document.createElement("h3");
                titulo.textContent = moto.manual.titulo;
                
                const precio = document.createElement("p");
                precio.className = "precio-manual";
                precio.textContent = `$${moto.manual.precio} ARS`;
                
                infoDiv.appendChild(titulo);
                infoDiv.appendChild(precio);
                
                div.appendChild(infoDiv);
                
                mostrarBotonCompra(moto, div);
                contenedorManuales.appendChild(div);
            }
        });
    }
});
