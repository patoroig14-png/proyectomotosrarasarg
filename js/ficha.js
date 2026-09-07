// 1. Leer el "id" que viene en la URL (ej: ?id=kymco-pleasure-125)
const parametros = new URLSearchParams(window.location.search);
const idBuscado = parametros.get("id");

// 2. Buscar, dentro del array "motos", la que tenga ese mismo id
const moto = motos.find(function(m) {
    return m.id === idBuscado;
});

// 3. Si no se encontró ninguna moto con ese id, avisar y frenar acá
if (!moto) {
    document.getElementById("nombre-moto").textContent = "Moto no encontrada";
} else {

    // 4. Completar el título de la pestaña, el h1 y la foto
    document.getElementById("titulo-pagina").textContent = moto.nombre + " - Ficha Técnica | Motos Raras Arg";
    document.getElementById("nombre-moto").textContent = moto.nombre;

    const foto = document.getElementById("foto-moto");
    foto.src = "../img/" + moto.foto;
    foto.alt = moto.nombre;

    // 5. Armar las secciones de datos técnicos automáticamente
    const contenedor = document.getElementById("contenido-ficha");

    for (const nombreSeccion in moto.datos) {
        const section = document.createElement("section");

        const h2 = document.createElement("h2");
        h2.textContent = nombreSeccion;
        section.appendChild(h2);

        const ul = document.createElement("ul");

        const items = moto.datos[nombreSeccion];
        for (const nombreDato in items) {
            const li = document.createElement("li");
            const strong = document.createElement("strong");
            strong.textContent = nombreDato + ": ";
            li.appendChild(strong);
            li.appendChild(document.createTextNode(items[nombreDato]));
            ul.appendChild(li);
        }

        section.appendChild(ul);
        contenedor.appendChild(section);
    }
}