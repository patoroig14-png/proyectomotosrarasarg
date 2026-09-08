// Mostrar las cuatro motos agregadas más recientemente como destacadas
document.addEventListener("DOMContentLoaded", function() {
    const gridDestacadas = document.getElementById("grid-destacadas");
    
    if (gridDestacadas && motos.length > 0) {
        const cantidadDestacadas = 4;
        const motosDestacadas = motos.slice(-cantidadDestacadas);
        
        motosDestacadas.forEach(function(moto) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta-destacada";
            
            // Imagen
            const imagenDiv = document.createElement("div");
            imagenDiv.className = "tarjeta-destacada-imagen";
            const img = document.createElement("img");
            img.src = "img/" + moto.foto;
            img.alt = moto.nombre;
            img.onerror = function() {
                this.style.display = "none";
            };
            imagenDiv.appendChild(img);
            
            // Contenido
            const contenido = document.createElement("div");
            contenido.className = "tarjeta-destacada-contenido";
            
            const titulo = document.createElement("h3");
            titulo.textContent = moto.nombre;
            
            const descripcion = document.createElement("p");
            descripcion.textContent = moto.nota || "Ficha técnica completa disponible";
            
            contenido.appendChild(titulo);
            contenido.appendChild(descripcion);
            
            tarjeta.appendChild(imagenDiv);
            tarjeta.appendChild(contenido);
            
            // Click para ir a la ficha
            tarjeta.addEventListener("click", function() {
                window.location.href = "fichas/ficha.html?id=" + moto.id;
            });
            
            gridDestacadas.appendChild(tarjeta);
        });
    }
});
