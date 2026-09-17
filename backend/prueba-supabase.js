require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

async function probar() {
    const { data, error } = await supabase.storage.from("manuales").list();

    if (error) {
        console.log("❌ ERROR:", error.message);
        return;
    }

    console.log("✅ Conexión OK. Archivos en el bucket:");
    data.forEach(function(archivo) {
        console.log("  - " + archivo.name);
    });
}

probar();