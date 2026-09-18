// ============================================================
// MERCADO PAGO - FRONTEND
// ============================================================

async function crearLinkPago(moto) {
    try {

        const respuesta = await fetch("http://localhost:3000/crear-pago", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                productId: moto.id
            })
        });

        const data = await respuesta.json();

        if (!respuesta.ok) {
            console.error("Error del backend:", data);
            return null;
        }

        return data.init_point;

    } catch (error) {

        console.error("Error conectando con el backend:", error);
        return null;
    }
}


function mostrarBotonCompra(moto, contenedor) {

    const boton = document.createElement("button");

    boton.type = "button";
    boton.className = "boton-comprar-manual";

    boton.textContent = `Comprar manual - $${moto.manual.precio}`;

    boton.addEventListener("click", async function() {

        const textoOriginal = boton.textContent;

        boton.textContent = "Preparando pago...";
        boton.disabled = true;

        const linkPago = await crearLinkPago(moto);

        if (linkPago) {

            window.location.href = linkPago;

        } else {

            alert(
                "No se pudo generar el pago. Revisá la conexión con el servidor."
            );

            boton.textContent = textoOriginal;
            boton.disabled = false;
        }

    });

    contenedor.appendChild(boton);
}