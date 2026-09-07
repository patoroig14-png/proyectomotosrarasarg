const listaMotos = document.getElementById("lista-motos");

motos.forEach(function(moto) {
    const li = document.createElement("li");
    
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
});
