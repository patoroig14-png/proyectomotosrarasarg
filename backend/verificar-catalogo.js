require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const catalogo = require("./catalogo");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

async function verificar() {
    const { data, error } = await supabase.storage.from("manuales").list();

    if (error) {
        console.log("❌ Error al listar Supabase:", error.message);
        return;
    }

    const archivosEnSupabase = data.map(function(a) { return a.name; });
    const archivosEnCatalogo = Object.values(catalogo).map(function(m) { return m.archivo; });

    console.log("Archivos en Supabase:", archivosEnSupabase.length);
    console.log("Archivos en el catálogo:", archivosEnCatalogo.length);
    console.log("");

    let todoBien = true;

    // Verificar que cada archivo del catálogo exista en Supabase
    archivosEnCatalogo.forEach(function(archivo) {
        if (archivosEnSupabase.includes(archivo)) {
            console.log("✅ " + archivo);
        } else {
            console.log("❌ FALTA EN SUPABASE: " + archivo);
            todoBien = false;
        }
    });

    // Verificar que no haya archivos en Supabase que no estén en el catálogo
    archivosEnSupabase.forEach(function(archivo) {
        if (!archivosEnCatalogo.includes(archivo)) {
            console.log("⚠️  Está en Supabase pero no en el catálogo: " + archivo);
        }
    });

    console.log("");
    if (todoBien) {
        console.log("🎉 TODO BIEN. El catálogo coincide con Supabase.");
    } else {
        console.log("⚠️  Hay errores. Revisá los ❌ de arriba.");
    }
}

verificar();