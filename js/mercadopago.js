// ============================================================
// MERCADO PAGO - FRONTEND
// Las credenciales viven en el backend (backend/.env)
// Este archivo solo conecta el botón con el backend
// ============================================================

async function crearLinkPago(moto) {
    try {
        const respuesta = await fetch("http://localhost:3000/crear-pago", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(moto)
        });

        const data = await respuesta.json();
        return data.linkPago;

    } catch (error) {
        console.error("Error conectando con el backend:", error);
        return null;
    }
}

function mostrarBotonCompra(moto, contenedor) {
    const boton = document.createElement("a");
    boton.className = "boton-comprar-manual";
    boton.textContent = `Comprar manual - $${moto.manual.precio}`;
    boton.href = "#";

    boton.addEventListener("click", async (e) => {
        e.preventDefault();
        const textoOriginal = boton.textContent;
        boton.textContent = "Preparando pago...";
        boton.style.opacity = "0.5";
        boton.style.pointerEvents = "none";

        const linkPago = await crearLinkPago(moto);

        if (linkPago) {
            window.location.href = linkPago;
        } else {
            alert("Error al procesar el pago. Por favor, intenta más tarde.");
            boton.textContent = textoOriginal;
            boton.style.opacity = "1";
            boton.style.pointerEvents = "auto";
        }
    });

    contenedor.appendChild(boton);
}