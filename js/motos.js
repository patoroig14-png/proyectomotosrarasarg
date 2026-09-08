const motos = [
    {
        id: "kymco-pleasure-125",
        nombre: "Kymco Pleasure 125",
        foto: "kymco-pleasure-125.jpg",
        nota: "Ficha técnica completa disponible",
        descripcion: [
            "La Kymco Pleasure 125 es una moto de estilo chopper que fue comercializada en el mercado argentino entre 2008 y 2011. Estéticamente es muy similar a una GN125 y a sus clones, como la Mundial HD 125 o la IMSA Trophy 125. Sin embargo, su motorización es un 156FMI varillero, clon del conocido CG 125, fabricado por Kymco.",
            "Esto es beneficioso porque muchos repuestos son compatibles o fácilmente adaptables. Sin embargo, algunos componentes específicos, como la tobera de admisión del carburador, son difíciles, por no decir imposibles, de conseguir.",
            "Ergonómicamente es una moto muy cómoda, sobre todo para personas de baja estatura. El asiento del acompañante es amplio, aunque queda un poquito corto en la parte trasera. Esto se compensa por completo si se instala el baúl original que la moto traía de fábrica: es grande y de excelente calidad.",
            "Para viajes largos, la postura resulta cómoda, aunque por encima de los 80 o 85 km/h aparecen algunas vibraciones perceptibles en los pedalines y el manillar. Uno de los problemas más frecuentes era el juego que solían tomar los bujes de dirección, algo que a veces podía ser difícil de solucionar.",
            "Tuve una modelo 2011 y, varios años después de su fabricación, seguía sin transpirar ni una gota de aceite. Es una moto muy noble, con los defectos típicos de cualquier motor varillero basado en un diseño de los años setenta."
        ],
        datos: {
            "Motor y mecánica": {
                "Tipo de motor": "Monocilíndrico 4 tiempos, OHV (varillero), refrigerado por aire",
                "Cilindrada": "124.1 cc",
                "Potencia máxima": "7.2 kW (~9.5 cv) a 9000 rpm",
                "Torque máximo": "8.3 Nm a 7500 rpm",
                "Alimentación": "Carburador",
                "Encendido": "CDI",
                "Arranque": "Eléctrico y a patada",
                "Transmisión": "5 velocidades"
            },
            "Suspensión y frenos": {
                "Suspensión delantera": "Telescópica, amortiguada por aceite",
                "Suspensión trasera": "Brazo oscilante, doble amortiguador ajustable en 5 posiciones",
                "Freno delantero": "Disco",
                "Freno trasero": "Tambor",
                "Neumático delantero": "2.75-18",
                "Neumático trasero": "3.50-16"
            },
            "Medidas y peso": {
                "Largo": "1945 mm",
                "Ancho": "815 mm",
                "Alto": "1110 mm",
                "Altura de asiento": "740 mm",
                "Peso": "105-107 kg",
                "Capacidad de tanque": "10.3 L"
            }
        }
    },
    {
        id: "daelim-liberty-50",
        nombre: "Daelim Liberty 50",
        foto: "daelim-liberty-50.jpg",
        manual: {
            titulo: "Manual de Despiece - Daelim Liberty 50",
            precio: 25000,
            archivo: "manuales/daelim-liberty-50.pdf"
        },
        descripcion: [
            "La Daelim Liberty 50 es una moto clásica de la casa surcoreana Daelim. Fue un modelo vendido a nivel global por la marca, aunque con distintos nombres según el mercado. En Argentina fue comercializada directamente por Daelim durante la apertura importadora de los años 90.",
            "Tuve una modelo 1994, y pasar de la Zanella a eso me hizo amar más a las motos.",
            "Frente a su clásico rival, la Zanella 50, la Liberty se muestra superior en casi todos sus aspectos. La amortiguación es muchísimo más decente que la de la Zanella, y lo mismo puede decirse de los frenos, la iluminación, la velocidad y la potencia.",
            "Sin dudas, uno de sus rasgos más característicos eran sus dos marchas automáticas por variador. La sensación de enganchar la segunda marcha y ver cómo subía la velocidad era única. Su equipamiento de fábrica incluía arranque eléctrico y, en algunas versiones, un baúl sobre el tanque muy difícil de conseguir, que le cambiaba totalmente el aspecto.",
            "Es una moto plenamente urbana, que llegaba con facilidad a los 70 km/h. Sus repuestos son difíciles de conseguir, ya que los genéricos no siempre le entran bien. Sin embargo, hay varios casos de personas que han adaptado motores Minarelli al cuadro de la Daelim."
        ],
        datos: {
            "Motor y mecánica": {
                "Tipo de motor": "Monocilíndrico 2 tiempos, refrigerado por aire",
                "Cilindrada": "49.6 cc",
                "Diámetro x carrera": "40 x 39.5 mm",
                "Relación de compresión": "6.5:1",
                "Potencia máxima": "3 HP a 6000 rpm",
                "Torque máximo": "0.36 kgf·m a 6000 rpm",
                "Alimentación": "Carburador Mikuni VM 13",
                "Encendido": "Electrónico (sin platinos)",
                "Arranque": "Eléctrico y a patada",
                "Transmisión": "Automática, 2 velocidades (variador)"
            },
            "Suspensión y frenos": {
                "Suspensión delantera": "Telescópica",
                "Suspensión trasera": "Brazo oscilante, amortiguada por aceite",
                "Freno delantero": "Freno tambor",
                "Freno trasero": "Freno tambor",
                "Neumático delantero": "2,75/17",
                "Neumático trasero": "2,75/17"
            },
            "Medidas y peso": {
                "Largo": "1745 mm",
                "Ancho": "680 mm",
                "Alto": "1030 mm",
                "Base de rueda (entre ejes)": "1150 mm",
                "Altura de asiento": "750 mm",
                "Peso en seco": "64 kg",
                "Capacidad de tanque (nafta)": "5.4 L",
                "Capacidad depósito de aceite (mezcla)": "1.2 L"
            }
        }
    },
    {
        id: "motomel-go-vintage-125",
        nombre: "Motomel Go Vintage 125",
        foto: "motomel-go-vintage-125.jpg",
        descripcion: [
            "La Motomel Go Vintage 125 es una copia —no un clon— de la mítica Honda Econo Power C90. Su motor, sin embargo, es un monocilíndrico chino de 125 cc, cuatro tiempos y distribución OHC. Nada que ver con el original, pero cumple.",
            "Los repuestos estéticos pueden ser algo difíciles de conseguir, al haber sido una moto de producción reducida. Se calcula que se fabricaron apenas unos pocos miles de unidades entre 2015 y 2018. El hecho de que sea un modelo relativamente reciente ayuda un poco, pero no del todo: otras motos similares, como la Zanella Motoneta o la Guerrero Econo, no son iguales. Parecen, pero no son.",
            "La moto tiene una salida increíble. Al tener un motor de 125 cc y pesar poco, en primera sale con muchísima —tal vez demasiada— fuerza. Es ideal para ir cargado o de a dos. Pero da la sensación de que la relación corona/piñón queda muy corta arriba: no levanta tanta velocidad y, cuando está arriba, vibra mucho y se siente demasiado forzada. Un cambio de corona y piñón tal vez mejoraría esto si uno busca andar solo o hacer viajes un poco más largos.",
            "La moto es hermosa estéticamente. Entiendo por qué a la gente le gusta tanto: tiene ese estilo clásico que pocas motos nacionales lograron tener. Sus plásticos se ven un poco mejor que los de una 110 genérica, pero la tornillería y los detalles son, como mínimo, poco nobles.",
            "Es una linda moto para pasear el fin de semana, cargar el termo e ir a un parque."
        ],
        datos: {
            "Motor y mecánica": {
                "Tipo de motor": "Monocilíndrico, 4 tiempos, OHC",
                "Cilindrada": "125 cc",
                "Diámetro x carrera": "55.5 mm × 52.4 mm",
                "Potencia máxima": "5.2 kW a 8000 ± 500 rpm",
                "Refrigeración": "Por aire",
                "Alimentación": "Carburador",
                "Encendido": "CDI",
                "Arranque": "Eléctrico y a patada",
                "Embrague": "Aceite multiplaca / Automático",
                "Transmisión": "4 velocidades",
                "Capacidad de aceite": "0.8 L",
                "Batería": "12V 5A.h."
            },
            "Suspensión y frenos": {
                "Suspensión delantera": "Horquilla hidráulica / telescópica",
                "Suspensión trasera": "Doble amortiguador",
                "Freno delantero": "Tambor",
                "Freno trasero": "Tambor",
                "Neumático delantero": "2.50-17",
                "Neumático trasero": "2.75-17",
                "Llantas": "De rayos"
            },
            "Medidas y peso": {
                "Largo": "1845 mm",
                "Ancho": "675 mm",
                "Alto": "1110 mm",
                "Distancia entre ejes": "1200 mm",
                "Altura de asiento": "dato no confirmado",
                "Peso en seco": "81 kg",
                "Capacidad de tanque": "2.9 L (algunas fuentes indican 3.8 L)",
                "Capacidad de carga": "150 kg (aprox.)"
            }
        }
    },
    {
        id: "kymco-quannon-125",
        nombre: "Kymco Quannon 125",
        foto: "kymco-quannon-125.jpg",
        manual: {
            titulo: "Manual de Despiece - Kymco Quannon 125",
            precio: 500,
            archivo: "manuales/kymco-quannon-125.pdf"
        },
        datos: {
            "Motor y mecánica": {
                "Tipo de motor": "Monocilíndrico 4 tiempos, SOHC, 4 válvulas, refrigerado por aire y aceite",
                "Cilindrada": "124.1 cc",
                "Diámetro x carrera": "56.5 x 49.5 mm",
                "Relación de compresión": "10.6:1",
                "Potencia máxima": "12.9 CV a 10.000 rpm",
                "Torque máximo": "10.29 Nm a 8.250 rpm",
                "Alimentación": "Carburador Keihin por depresión con TPS y Power Jet",
                "Encendido": "Electrónico CDI",
                "Arranque": "Eléctrico",
                "Embrague": "Multidisco en baño de aceite",
                "Transmisión": "5 velocidades, secundaria por cadena"
            },
            "Suspensión y frenos": {
                "Suspensión delantera": "Horquilla telescópica 33 mm, recorrido 125 mm",
                "Suspensión trasera": "Monoamortiguador anclado al basculante, recorrido 100 mm",
                "Freno delantero": "Disco 276 mm con pinza de doble pistón",
                "Freno trasero": "Disco 220 mm con pinza de doble pistón",
                "Neumático delantero": "110/80-17",
                "Neumático trasero": "140/70-17"
            },
            "Medidas y peso": {
                "Largo": "2057 mm",
                "Ancho": "680 mm",
                "Alto": "1174 mm",
                "Distancia entre ejes": "1355 mm",
                "Altura de asiento": "800 mm",
                "Peso en seco": "141 kg",
                "Capacidad de tanque": "11.5 L"
            }
        }
    },
    {
        id: "daelim-roadwin-250",
        nombre: "Daelim Roadwin 250",
        foto: "daelim-roadwin-250.jpg",
        nota: "Ficha técnica completa disponible",
        manual: {
            titulo: "Manual del Propietario - Daelim Roadwin 250",
            precio: 500,
            archivo: "manuales/daelim-roadwin-250.pdf"
        },
        datos: {
            "Motor y mecánica": {
                "Tipo de motor": "4 tiempos, SOHC, refrigerado por aire",
                "Cilindrada": "124.1 cc",
                "Diámetro x carrera": "56.5 x 49.5 mm",
                "Sistema de arranque": "Motor de arranque eléctrico",
                "Encendido": "DC-CDI",
                "Transmisión": "5 velocidades",
                "Batería": "12V 10Ah (tipo MF)",
                "Bujía": "CR8EH-9",
                "Fusible": "15A",
                "Capacidad de aceite": "1.1 L"
            },
            "Suspensión y frenos": {
                "Suspensión delantera": "Telescópica",
                "Suspensión trasera": "Brazo único",
                "Freno delantero": "Disco hidráulico",
                "Freno trasero": "Disco hidráulico",
                "Neumático delantero": "110/70-17 54P",
                "Neumático trasero": "140/60-17 69P"
            },
            "Medidas y peso": {
                "Largo x Ancho x Alto": "2010 x 740 x 1040 mm",
                "Distancia entre ejes": "1380 mm",
                "Distancia mínima al suelo": "150 mm",
                "Altura de asiento": "780 mm",
                "Peso en seco": "130 kg",
                "Capacidad de tanque": "16 L",
                "Carga máxima": "30 kg (equipaje)"
            }
        }
    }
];
