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

    const contenedor = document.getElementById("contenido-ficha");

    if (moto.descripcion && moto.descripcion.length > 0) {
        const historia = document.createElement("section");
        historia.className = "historia-moto";

        const etiqueta = document.createElement("p");
        etiqueta.className = "historia-etiqueta";
        etiqueta.textContent = "Experiencia y observaciones";
        historia.appendChild(etiqueta);

        const titulo = document.createElement("h2");
        titulo.textContent = "Conocerla más allá de la ficha";
        historia.appendChild(titulo);

        moto.descripcion.forEach(function(parrafoTexto) {
            const parrafo = document.createElement("p");
            parrafo.textContent = parrafoTexto;
            historia.appendChild(parrafo);
        });

        contenedor.appendChild(historia);
    }

    // Armar las secciones de datos técnicos automáticamente

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

    const manuales = document.createElement("section");
    manuales.className = "manuales-ficha";

    const tituloManuales = document.createElement("h2");
    tituloManuales.textContent = "Manuales";
    manuales.appendChild(tituloManuales);

    const botonesManuales = document.createElement("div");
    botonesManuales.className = "botones-manuales-ficha";

    const manualUsuario = crearEnlaceManual("Manual de usuario", "../manuales/" + moto.id + "-usuario.pdf", false);
    const manualDespiece = crearEnlaceManual(
        moto.manual ? "Comprar manual" : "Manual de despiece",
        moto.manual ? "../index.html#manual-" + moto.id : "../manuales/" + moto.id + "-despiece.pdf",
        Boolean(moto.manual)
    );

    botonesManuales.appendChild(manualUsuario);
    botonesManuales.appendChild(manualDespiece);
    manuales.appendChild(botonesManuales);
    contenedor.appendChild(manuales);
}

function crearEnlaceManual(texto, ruta, disponible) {
    const enlace = document.createElement("a");
    enlace.className = "boton-manual-ficha";
    enlace.textContent = texto;

    if (disponible) {
        enlace.href = ruta;
    } else {
        enlace.classList.add("manual-no-disponible");
        enlace.setAttribute("aria-disabled", "true");
        enlace.title = "Este manual todavía no está disponible";
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault();
        });
    }

    return enlace;
}