const listaMotos = document.getElementById("lista-motos");
const botonMostrarMotos = document.getElementById("boton-mostrar-motos");
const cantidadInicial = 4;
let listaExpandida = false;

function crearElementoMoto(moto, indice) {
    const li = document.createElement("li");
    li.hidden = indice >= cantidadInicial;
    
    // Imagen miniatura
    const imagenDiv = document.createElement("div");
    imagenDiv.className = "moto-imagen-mini";
    const img = document.createElement("img");
    img.src = "img/" + moto.foto;
    img.alt = moto.nombre;
    img.onerror = function() {
        this.style.display = "none";
    };
    imagenDiv.appendChild(img);
    
    // Link
    const a = document.createElement("a");
    a.href = "fichas/ficha.html?id=" + moto.id;
    a.textContent = moto.nombre;
    
    li.appendChild(imagenDiv);
    li.appendChild(a);
    listaMotos.appendChild(li);
}

motos.forEach(crearElementoMoto);

if (botonMostrarMotos && motos.length > cantidadInicial) {
    botonMostrarMotos.hidden = false;
    botonMostrarMotos.addEventListener("click", function() {
        listaExpandida = !listaExpandida;

        listaMotos.querySelectorAll("li").forEach(function(li, indice) {
            li.hidden = !listaExpandida && indice >= cantidadInicial;
        });

        botonMostrarMotos.textContent = listaExpandida ? "Mostrar menos" : "Mostrar más motos";
    });
}
