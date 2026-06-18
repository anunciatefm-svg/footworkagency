export const LOGO_URL = "https://customer-assets.emergentagent.com/job_8ef531de-b01d-42ec-96c3-cc4b64705736/artifacts/98x0g539_image.png";

// Phone in international format without +/spaces for wa.me
export const WHATSAPP_NUMBER = "59898681610";
export const CONTACT_EMAIL = "footworkag@gmail.com";

export const LINKS = {
  instagram: "https://www.instagram.com/footworkagency/",
  transfermarkt: "https://www.transfermarkt.es/footwork-agency/beraterfirma/berater/11936",
  linkedin: "https://uy.linkedin.com/in/emiliano-martinez-ab323820",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: `mailto:${CONTACT_EMAIL}`,
};

// Official player roster — categories ordered from Primera División → Sub-15 + OFI.
export const PLAYER_CATEGORIES = [
  "Primera División",
  "Sub-19",
  "Sub-17",
  "Sub-16",
  "Sub-15",
  "Jugadores OFI",
];

// Service blocks shown in section C
export const SERVICES = [
  { num: "01", title: "Captación de futbolistas", desc: "Detección temprana de talento con scouting profesional dedicado." },
  { num: "02", title: "Scouting nacional e internacional", desc: "Seguimiento deportivo continuo en Uruguay, Argentina y el exterior." },
  { num: "03", title: "Representación e intermediación", desc: "Acompañamiento contractual y deportivo durante toda la carrera." },
  { num: "04", title: "Inserción en clubes profesionales", desc: "Oportunidades en clubes nacionales e internacionales según el perfil." },
  { num: "05", title: "Negociación de contratos", desc: "Defensa de intereses deportivos y económicos del jugador." },
  { num: "06", title: "Planificación de carrera", desc: "Plan individual: corto, mediano y largo plazo." },
  { num: "07", title: "Nutrición y salud", desc: "Seguimiento integral para sostener el rendimiento físico." },
  { num: "08", title: "Psicología deportiva / Neurocoaching", desc: "Mentalidad competitiva, foco y herramientas de alto rendimiento." },
  { num: "09", title: "Recuperación y prevención de lesiones", desc: "Trabajo conjunto con Clínica Aurum y kinesiología." },
  { num: "10", title: "Asesoramiento jurídico-deportivo", desc: "Contratos, mandatos, negociaciones y derecho deportivo." },
  { num: "11", title: "Protección de derechos de imagen", desc: "Resguardo y monetización profesional de la imagen del jugador." },
  { num: "12", title: "Marketing y gestión de imagen", desc: "Comunicación, redes y posicionamiento personal del futbolista." },
  { num: "13", title: "Planificación financiera", desc: "Inversiones, estructuras y proyección económica del deportista." },
  { num: "14", title: "Convenios estratégicos", desc: "Alianzas con clínicas, gimnasios, academias y scouts." },
];

// Modelo 360° — Section D
export const MODEL_360 = [
  { title: "Área Deportiva", desc: "Captación, scouting, evaluación técnica, física y mental e inserción en clubes." },
  { title: "Área Legal y Contractual", desc: "Contratos, mandatos, negociaciones y defensa de intereses deportivos." },
  { title: "Desarrollo Integral", desc: "Nutrición, psicología, kinesiología y acompañamiento académico." },
  { title: "Comercial e Institucional", desc: "Convenios, alianzas estratégicas y expansión nacional e internacional." },
  { title: "Comunicación y Marca", desc: "Imagen institucional, redes y posicionamiento personal del jugador." },
];

// Growth Timeline — Section G
export const TIMELINE = [
  { year: "2022", title: "Inicio del proyecto", points: ["Creación de la agencia", "Base en Las Piedras, Canelones"] },
  { year: "2023", title: "Primeros jugadores en AUF", points: ["10 jugadores en actividad AUF", "Proyección de profesionales y consultorio deportivo"] },
  { year: "2024", title: "Profesionalización", points: ["20 jugadores en actividad AUF", "2 jugadores U17 en plantel de Primera", "Procesos de Selección AUF", "Compra del local de la Clínica"] },
  { year: "2025", title: "Consolidación deportiva", points: ["42 jugadores en actividad AUF", "10 jugadores U17 en plantel de Primera", "11 jugadores en proceso de Selección AUF", "Apertura de Clínica Aurum"] },
  { year: "2026", title: "Expansión internacional", points: ["51 jugadores en actividad AUF", "Representación de cuerpos técnicos", "Presencia en fútbol femenino", "Jugadores de Primera División", "Mercados internacionales"] },
];

// Residencia — Section H
export const RESIDENCIA = {
  address: "Enrique Turini 949, Prado, Montevideo",
  services: [
    "Alojamiento seguro y ordenado",
    "Cuatro comidas diarias (desayuno, almuerzo, merienda y cena)",
    "Servicio de lavandería",
    "Conexión Wi-Fi",
    "Régimen de convivencia organizado",
    "Acompañamiento diario en hábitos saludables",
  ],
};

// Clínica Aurum — Section I
export const AURUM = {
  address: "Charrúa 2379, Montevideo",
  services: [
    "Prevención de lesiones",
    "Recuperación física integral",
    "Biometría · composición corporal (Inbody)",
    "Plataforma SLIM · tonificación y reducción localizada",
    "Tratamientos con plasma y células madre",
    "Tecnología E-Energy · optimización del rendimiento",
    "Ecografías musculares y articulares",
    "Examen epigenético para alto rendimiento",
  ],
};

// Fallback when backend is offline — same official players (no inventions).
const buildFallback = (names, category, startOrder) =>
  names.map((n, i) => ({
    id: `${category}-${i}`.toLowerCase().replace(/\s+/g, "-"),
    name: n, category, order: startOrder + i,
    position: null, club: null, photo_url: null, transfermarkt_url: null, info_url: null,
  }));

export const FALLBACK_PLAYERS = [
  {
    "id": "alvaro-san-emeterio",
    "name": "Alvaro San Emeterio",
    "category": "Primera División",
    "order": 100,
    "position": "Defensa central",
    "club": "Tacuarembo",
    "photo_url": "/photos/gallery/alvaro-san-emeterio/01.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/alvaro-san-emeterio/profil/spieler/1178893",
    "info_url": null,
    "competition": "Segunda División",
    "year": 1997,
    "height": "1,84 mts",
    "age": "28 años",
    "strong_foot": "Derecha",
    "nationality": "Argentino",
    "current_club": "Tacuarembó FC (Uruguay)",
    "agent": "Footwork Agency",
    "profile": "Defensor central argentino formado en las inferiores de Talleres de Córdoba, con recorrido por Tacuarembó FC, Cerrito y Club Universitario de Córdoba. Su perfil combina solidez aérea, agresividad en el duelo y lectura de juego para anticipar situaciones de riesgo. En posesión aporta criterio en la distribución larga y presencia activa cuando el juego lo requiere.",
    "stats_highlights": [
      "6° en duelos aéreos ganados [35] en Segunda División Uruguaya 2026",
      "18° en despejes de balón [30] en Segunda División Uruguaya 2026",
      "Referente defensivo de Tacuarembó FC en el tramo analizado"
    ],
    "career_history": [
      "Talleres (inferiores) · Argentina",
      "Instituto (inferiores) · Argentina",
      "Tacuarembó FC · Uruguay",
      "Cerrito · Uruguay",
      "Club Universitario de Córdoba · Argentina",
      "Tacuarembó FC · Uruguay · Club actual"
    ],
    "gallery": [
      "/photos/gallery/alvaro-san-emeterio/01.jpg",
      "/photos/gallery/alvaro-san-emeterio/02.jpg",
      "/photos/gallery/alvaro-san-emeterio/03.jpg",
      "/photos/gallery/alvaro-san-emeterio/04.jpg",
      "/photos/gallery/alvaro-san-emeterio/05.jpg"
    ],
    "videos": [
      {
        "title": "Video de seguimiento / highlights",
        "url": "https://www.youtube.com/watch?v=Pkmsxk7THCY"
      }
    ],
    "reports": [
      {
        "title": "Informe CelesteStats x Footwork Agency",
        "url": "/reports/alvaro-san-emeterio-informe-celestestats-footworkagency.pdf"
      }
    ]
  },
  {
    "id": "maximiliano-camargo",
    "name": "Maximiliano Camargo",
    "category": "Primera División",
    "order": 101,
    "position": "Defensa central",
    "club": "Tacuarembo",
    "photo_url": "/photos/gallery/maximiliano-camargo/01.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/maximiliano-camargo/profil/spieler/1531208",
    "info_url": null,
    "competition": "Segunda División",
    "age": "24 años",
    "nationality": "Uruguayo",
    "current_club": "Tacuarembó FC",
    "gallery": [
      "/photos/gallery/maximiliano-camargo/01.jpg",
      "/photos/gallery/maximiliano-camargo/02.jpg",
      "/photos/gallery/maximiliano-camargo/03.jpg"
    ],
    "profile": "Maximiliano Camargo integra la nómina de jugadores representados por Footwork Agency. Se desempeña como defensa central. Actualmente está vinculado a Tacuarembó FC. Competencia: Segunda División. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Tacuarembó FC",
      "Posición: Defensa central",
      "Categoría: Primera División",
      "Competencia: Segunda División"
    ],
    "career_history": [
      "Tacuarembó FC · Club actual",
      "Segunda División · Competencia"
    ]
  },
  {
    "id": "lautaro-izquierdo",
    "name": "Lautaro Izquierdo",
    "category": "Primera División",
    "order": 102,
    "position": null,
    "club": "Olimpia de Ita",
    "photo_url": "/photos/gallery/lautaro-izquierdo/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera División B",
    "gallery": [
      "/photos/gallery/lautaro-izquierdo/01.jpg"
    ],
    "profile": "Lautaro Izquierdo integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Olimpia de Ita. Competencia: Primera División B. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Olimpia de Ita",
      "Categoría: Primera División",
      "Competencia: Primera División B"
    ],
    "career_history": [
      "Olimpia de Ita · Club actual",
      "Primera División B · Competencia"
    ]
  },
  {
    "id": "facundo-de-cuadro",
    "name": "Facundo De Cuadro",
    "category": "Primera División",
    "order": 103,
    "position": "Mediocentro",
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/facundo-de-cuadro/01.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/facundo-de-cuadro/profil/spieler/1382933",
    "info_url": null,
    "competition": "Primera Divisional C",
    "age": "25 años",
    "nationality": "Uruguayo",
    "current_club": "CA Bella Vista",
    "gallery": [
      "/photos/gallery/facundo-de-cuadro/01.jpg",
      "/photos/gallery/facundo-de-cuadro/02.jpg",
      "/photos/gallery/facundo-de-cuadro/03.jpg",
      "/photos/gallery/facundo-de-cuadro/04.jpg",
      "/photos/gallery/facundo-de-cuadro/05.jpg",
      "/photos/gallery/facundo-de-cuadro/06.jpg",
      "/photos/gallery/facundo-de-cuadro/07.jpg",
      "/photos/gallery/facundo-de-cuadro/08.jpg",
      "/photos/gallery/facundo-de-cuadro/09.jpg",
      "/photos/gallery/facundo-de-cuadro/10.jpg",
      "/photos/gallery/facundo-de-cuadro/11.jpg"
    ],
    "profile": "Facundo De Cuadro integra la nómina de jugadores representados por Footwork Agency. Se desempeña como mediocentro. Actualmente está vinculado a CA Bella Vista. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: CA Bella Vista",
      "Posición: Mediocentro",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "CA Bella Vista · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "gustavo-bortoli",
    "name": "Gustavo Bortoli",
    "category": "Primera División",
    "order": 104,
    "position": "Delantero centro",
    "club": "Salto",
    "photo_url": "/photos/gallery/gustavo-bortoli/01.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/gustavo-bortoli/profil/spieler/1065193",
    "info_url": null,
    "competition": "Primera Divisional C",
    "age": "26 años",
    "nationality": "Uruguayo",
    "current_club": "Salto F.C.",
    "gallery": [
      "/photos/gallery/gustavo-bortoli/01.jpg",
      "/photos/gallery/gustavo-bortoli/02.jpg",
      "/photos/gallery/gustavo-bortoli/03.jpg",
      "/photos/gallery/gustavo-bortoli/04.jpg",
      "/photos/gallery/gustavo-bortoli/05.jpg",
      "/photos/gallery/gustavo-bortoli/06.jpg"
    ],
    "profile": "Gustavo Bortoli integra la nómina de jugadores representados por Footwork Agency. Se desempeña como delantero centro. Actualmente está vinculado a Salto F.C.. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Salto F.C.",
      "Posición: Delantero centro",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "Salto F.C. · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "brian-sanchez",
    "name": "Brian Sanchez",
    "category": "Primera División",
    "order": 105,
    "position": null,
    "club": "Sportivo Bella Italia",
    "photo_url": "/photos/gallery/brian-sanchez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C",
    "gallery": [
      "/photos/gallery/brian-sanchez/01.jpg",
      "/photos/gallery/brian-sanchez/02.jpg",
      "/photos/gallery/brian-sanchez/03.jpg",
      "/photos/gallery/brian-sanchez/04.jpg",
      "/photos/gallery/brian-sanchez/05.jpg",
      "/photos/gallery/brian-sanchez/06.jpg",
      "/photos/gallery/brian-sanchez/07.jpg",
      "/photos/gallery/brian-sanchez/08.jpg",
      "/photos/gallery/brian-sanchez/09.jpg",
      "/photos/gallery/brian-sanchez/10.jpg",
      "/photos/gallery/brian-sanchez/11.jpg",
      "/photos/gallery/brian-sanchez/12.jpg",
      "/photos/gallery/brian-sanchez/13.jpg",
      "/photos/gallery/brian-sanchez/14.jpg",
      "/photos/gallery/brian-sanchez/15.jpg",
      "/photos/gallery/brian-sanchez/16.jpg",
      "/photos/gallery/brian-sanchez/17.jpg",
      "/photos/gallery/brian-sanchez/18.jpg"
    ],
    "profile": "Brian Sanchez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Sportivo Bella Italia. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Sportivo Bella Italia",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "Sportivo Bella Italia · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "diego-nunez",
    "name": "Diego Nuñez",
    "category": "Primera División",
    "order": 106,
    "position": null,
    "club": "Sportivo Bella Italia",
    "photo_url": "/photos/gallery/diego-nunez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C",
    "gallery": [
      "/photos/gallery/diego-nunez/01.jpg",
      "/photos/gallery/diego-nunez/02.jpg",
      "/photos/gallery/diego-nunez/03.jpg",
      "/photos/gallery/diego-nunez/04.jpg",
      "/photos/gallery/diego-nunez/05.jpg",
      "/photos/gallery/diego-nunez/06.jpg",
      "/photos/gallery/diego-nunez/07.jpg",
      "/photos/gallery/diego-nunez/08.jpg",
      "/photos/gallery/diego-nunez/09.jpg",
      "/photos/gallery/diego-nunez/10.jpg"
    ],
    "profile": "Diego Nuñez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Sportivo Bella Italia. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Sportivo Bella Italia",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "Sportivo Bella Italia · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "nahuel-rosano",
    "name": "Nahuel Rosano",
    "category": "Primera División",
    "order": 107,
    "position": null,
    "club": "Villa Teresa",
    "photo_url": "/photos/gallery/nahuel-rosano/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C",
    "gallery": [
      "/photos/gallery/nahuel-rosano/01.jpg",
      "/photos/gallery/nahuel-rosano/02.jpg"
    ],
    "profile": "Nahuel Rosano integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Villa Teresa. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Villa Teresa",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "Villa Teresa · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "lucas-cisneros",
    "name": "Lucas Cisneros",
    "category": "Primera División",
    "order": 108,
    "position": null,
    "club": "Platense",
    "photo_url": "/photos/gallery/lucas-cisneros/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C",
    "gallery": [
      "/photos/gallery/lucas-cisneros/01.jpg",
      "/photos/gallery/lucas-cisneros/02.jpg",
      "/photos/gallery/lucas-cisneros/03.jpg",
      "/photos/gallery/lucas-cisneros/04.jpg",
      "/photos/gallery/lucas-cisneros/05.jpg",
      "/photos/gallery/lucas-cisneros/06.jpg",
      "/photos/gallery/lucas-cisneros/07.jpg",
      "/photos/gallery/lucas-cisneros/08.jpg"
    ],
    "profile": "Lucas Cisneros integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Platense. Competencia: Primera Divisional C. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Platense",
      "Categoría: Primera División",
      "Competencia: Primera Divisional C"
    ],
    "career_history": [
      "Platense · Club actual",
      "Primera Divisional C · Competencia"
    ]
  },
  {
    "id": "sofia-olivera",
    "name": "Sofia Olivera",
    "category": "Primera División",
    "order": 109,
    "position": null,
    "club": "Nacional",
    "photo_url": "/photos/gallery/sofia-olivera/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Fútbol femenino",
    "gallery": [
      "/photos/gallery/sofia-olivera/01.jpg",
      "/photos/gallery/sofia-olivera/02.jpg",
      "/photos/gallery/sofia-olivera/03.jpg",
      "/photos/gallery/sofia-olivera/04.jpg",
      "/photos/gallery/sofia-olivera/05.jpg",
      "/photos/gallery/sofia-olivera/06.jpg"
    ],
    "profile": "Sofia Olivera integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Nacional. Competencia: Fútbol femenino. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Nacional",
      "Categoría: Primera División",
      "Competencia: Fútbol femenino"
    ],
    "career_history": [
      "Nacional · Club actual",
      "Fútbol femenino · Competencia"
    ]
  },
  {
    "id": "julio-gadea",
    "name": "Julio Gadea",
    "category": "Sub-19",
    "order": 200,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/gallery/julio-gadea/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/julio-gadea/01.jpg",
      "/photos/gallery/julio-gadea/02.jpg",
      "/photos/gallery/julio-gadea/03.jpg",
      "/photos/gallery/julio-gadea/04.jpg",
      "/photos/gallery/julio-gadea/05.jpg",
      "/photos/gallery/julio-gadea/06.jpg",
      "/photos/gallery/julio-gadea/07.jpg",
      "/photos/gallery/julio-gadea/08.jpg",
      "/photos/gallery/julio-gadea/09.jpg"
    ],
    "profile": "Julio Gadea integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Juventud. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Juventud",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Juventud · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "emanuel-sainz",
    "name": "Emanuel Sainz",
    "category": "Sub-19",
    "order": 201,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/gallery/emanuel-sainz/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/emanuel-sainz/01.jpg",
      "/photos/gallery/emanuel-sainz/02.jpg",
      "/photos/gallery/emanuel-sainz/03.jpg",
      "/photos/gallery/emanuel-sainz/04.jpg",
      "/photos/gallery/emanuel-sainz/05.jpg",
      "/photos/gallery/emanuel-sainz/06.jpg",
      "/photos/gallery/emanuel-sainz/07.jpg",
      "/photos/gallery/emanuel-sainz/08.jpg",
      "/photos/gallery/emanuel-sainz/09.jpg",
      "/photos/gallery/emanuel-sainz/10.jpg",
      "/photos/gallery/emanuel-sainz/11.jpg"
    ],
    "profile": "Emanuel Sainz integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Juventud. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Juventud",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Juventud · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "thiago-rodriguez",
    "name": "Thiago Rodriguez",
    "category": "Sub-19",
    "order": 202,
    "position": null,
    "club": "Plaza Colonia",
    "photo_url": "/photos/gallery/thiago-rodriguez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional B1",
    "gallery": [
      "/photos/gallery/thiago-rodriguez/01.jpg",
      "/photos/gallery/thiago-rodriguez/02.jpg",
      "/photos/gallery/thiago-rodriguez/03.jpg",
      "/photos/gallery/thiago-rodriguez/04.jpg",
      "/photos/gallery/thiago-rodriguez/05.jpg",
      "/photos/gallery/thiago-rodriguez/06.jpg",
      "/photos/gallery/thiago-rodriguez/07.jpg",
      "/photos/gallery/thiago-rodriguez/08.jpg"
    ],
    "profile": "Thiago Rodriguez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Plaza Colonia. Competencia: Torneo Apertura - Divisional B1. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Plaza Colonia",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional B1"
    ],
    "career_history": [
      "Plaza Colonia · Club actual",
      "Torneo Apertura - Divisional B1 · Competencia"
    ]
  },
  {
    "id": "tomas-rodriguez",
    "name": "Tomás Rodriguez",
    "category": "Sub-19",
    "order": 203,
    "position": "Interior derecho",
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/tomas-rodriguez/01.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/tomas-rodriguez/profil/spieler/1450963",
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "age": "18 años",
    "nationality": "Uruguayo",
    "current_club": "CA Bella Vista U19",
    "gallery": [
      "/photos/gallery/tomas-rodriguez/01.jpg",
      "/photos/gallery/tomas-rodriguez/02.jpg",
      "/photos/gallery/tomas-rodriguez/03.jpg",
      "/photos/gallery/tomas-rodriguez/04.jpg",
      "/photos/gallery/tomas-rodriguez/05.jpg",
      "/photos/gallery/tomas-rodriguez/06.jpg",
      "/photos/gallery/tomas-rodriguez/07.jpg",
      "/photos/gallery/tomas-rodriguez/08.jpg",
      "/photos/gallery/tomas-rodriguez/09.jpg",
      "/photos/gallery/tomas-rodriguez/10.jpg",
      "/photos/gallery/tomas-rodriguez/11.jpg",
      "/photos/gallery/tomas-rodriguez/12.jpg"
    ],
    "profile": "Tomás Rodriguez integra la nómina de jugadores representados por Footwork Agency. Se desempeña como interior derecho. Actualmente está vinculado a CA Bella Vista U19. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: CA Bella Vista U19",
      "Posición: Interior derecho",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "CA Bella Vista U19 · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "santiago-prieto",
    "name": "Santiago Prieto",
    "category": "Sub-19",
    "order": 204,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/santiago-prieto/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/santiago-prieto/01.jpg",
      "/photos/gallery/santiago-prieto/02.jpg",
      "/photos/gallery/santiago-prieto/03.jpg",
      "/photos/gallery/santiago-prieto/04.jpg",
      "/photos/gallery/santiago-prieto/05.jpg",
      "/photos/gallery/santiago-prieto/06.jpg",
      "/photos/gallery/santiago-prieto/07.jpg",
      "/photos/gallery/santiago-prieto/08.jpg",
      "/photos/gallery/santiago-prieto/09.jpg",
      "/photos/gallery/santiago-prieto/10.jpg",
      "/photos/gallery/santiago-prieto/11.jpg",
      "/photos/gallery/santiago-prieto/12.jpg",
      "/photos/gallery/santiago-prieto/13.jpg"
    ],
    "profile": "Santiago Prieto integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "lucas-ferreira",
    "name": "Lucas Ferreira",
    "category": "Sub-19",
    "order": 205,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/lucas-ferreira/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/lucas-ferreira/01.jpg",
      "/photos/gallery/lucas-ferreira/02.jpg",
      "/photos/gallery/lucas-ferreira/03.jpg",
      "/photos/gallery/lucas-ferreira/04.jpg",
      "/photos/gallery/lucas-ferreira/05.jpg",
      "/photos/gallery/lucas-ferreira/06.jpg",
      "/photos/gallery/lucas-ferreira/07.jpg",
      "/photos/gallery/lucas-ferreira/08.jpg"
    ],
    "profile": "Lucas Ferreira integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "felipe-sosa",
    "name": "Felipe Sosa",
    "category": "Sub-19",
    "order": 206,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/felipe-sosa/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/felipe-sosa/01.jpg",
      "/photos/gallery/felipe-sosa/02.jpg",
      "/photos/gallery/felipe-sosa/03.jpg",
      "/photos/gallery/felipe-sosa/04.jpg",
      "/photos/gallery/felipe-sosa/05.jpg",
      "/photos/gallery/felipe-sosa/06.jpg",
      "/photos/gallery/felipe-sosa/07.jpg",
      "/photos/gallery/felipe-sosa/08.jpg",
      "/photos/gallery/felipe-sosa/09.jpg",
      "/photos/gallery/felipe-sosa/10.jpg",
      "/photos/gallery/felipe-sosa/11.jpg",
      "/photos/gallery/felipe-sosa/12.jpg",
      "/photos/gallery/felipe-sosa/13.jpg",
      "/photos/gallery/felipe-sosa/14.jpg",
      "/photos/gallery/felipe-sosa/15.jpg",
      "/photos/gallery/felipe-sosa/16.jpg",
      "/photos/gallery/felipe-sosa/17.jpg"
    ],
    "profile": "Felipe Sosa integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "matias-lescano",
    "name": "Matias Lescano",
    "category": "Sub-19",
    "order": 208,
    "position": null,
    "club": "Salto",
    "photo_url": "/photos/gallery/matias-lescano/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1",
    "gallery": [
      "/photos/gallery/matias-lescano/01.jpg",
      "/photos/gallery/matias-lescano/02.jpg",
      "/photos/gallery/matias-lescano/03.jpg",
      "/photos/gallery/matias-lescano/04.jpg"
    ],
    "profile": "Matias Lescano integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Salto. Competencia: Copa Oro B1. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Salto",
      "Categoría: Sub-19",
      "Competencia: Copa Oro B1"
    ],
    "career_history": [
      "Salto · Club actual",
      "Copa Oro B1 · Competencia"
    ]
  },
  {
    "id": "dilan-ilarraz",
    "name": "Dilan Ilarraz",
    "category": "Sub-19",
    "order": 209,
    "position": null,
    "club": "Tacuarembo",
    "photo_url": "/photos/gallery/dilan-ilarraz/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1",
    "gallery": [
      "/photos/gallery/dilan-ilarraz/01.jpg",
      "/photos/gallery/dilan-ilarraz/02.jpg",
      "/photos/gallery/dilan-ilarraz/03.jpg",
      "/photos/gallery/dilan-ilarraz/04.jpg",
      "/photos/gallery/dilan-ilarraz/05.jpg",
      "/photos/gallery/dilan-ilarraz/06.jpg",
      "/photos/gallery/dilan-ilarraz/07.jpg",
      "/photos/gallery/dilan-ilarraz/08.jpg",
      "/photos/gallery/dilan-ilarraz/09.jpg",
      "/photos/gallery/dilan-ilarraz/10.jpg"
    ],
    "profile": "Dilan Ilarraz integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Tacuarembo. Competencia: Copa Oro B1. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Tacuarembo",
      "Categoría: Sub-19",
      "Competencia: Copa Oro B1"
    ],
    "career_history": [
      "Tacuarembo · Club actual",
      "Copa Oro B1 · Competencia"
    ]
  },
  {
    "id": "facundo-almeida",
    "name": "Facundo Almeida",
    "category": "Sub-19",
    "order": 210,
    "position": null,
    "club": "Tacuarembo",
    "photo_url": "/photos/gallery/facundo-almeida/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1",
    "gallery": [
      "/photos/gallery/facundo-almeida/01.jpg",
      "/photos/gallery/facundo-almeida/02.jpg",
      "/photos/gallery/facundo-almeida/03.jpg"
    ],
    "profile": "Facundo Almeida integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Tacuarembo. Competencia: Copa Oro B1. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Tacuarembo",
      "Categoría: Sub-19",
      "Competencia: Copa Oro B1"
    ],
    "career_history": [
      "Tacuarembo · Club actual",
      "Copa Oro B1 · Competencia"
    ]
  },
  {
    "id": "joaquin-parceriza",
    "name": "Joaquin Parceriza",
    "category": "Sub-19",
    "order": 211,
    "position": null,
    "club": "LSM",
    "photo_url": "/photos/gallery/joaquin-parceriza/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa de Oro B2",
    "gallery": [
      "/photos/gallery/joaquin-parceriza/01.jpg",
      "/photos/gallery/joaquin-parceriza/02.jpg",
      "/photos/gallery/joaquin-parceriza/03.jpg",
      "/photos/gallery/joaquin-parceriza/04.jpg",
      "/photos/gallery/joaquin-parceriza/05.jpg",
      "/photos/gallery/joaquin-parceriza/06.jpg",
      "/photos/gallery/joaquin-parceriza/07.jpg",
      "/photos/gallery/joaquin-parceriza/08.jpg",
      "/photos/gallery/joaquin-parceriza/09.jpg",
      "/photos/gallery/joaquin-parceriza/10.jpg",
      "/photos/gallery/joaquin-parceriza/11.jpg",
      "/photos/gallery/joaquin-parceriza/12.jpg",
      "/photos/gallery/joaquin-parceriza/13.jpg",
      "/photos/gallery/joaquin-parceriza/14.jpg",
      "/photos/gallery/joaquin-parceriza/15.jpg",
      "/photos/gallery/joaquin-parceriza/16.jpg",
      "/photos/gallery/joaquin-parceriza/17.jpg",
      "/photos/gallery/joaquin-parceriza/18.jpg",
      "/photos/gallery/joaquin-parceriza/19.jpg",
      "/photos/gallery/joaquin-parceriza/20.jpg",
      "/photos/gallery/joaquin-parceriza/21.jpg",
      "/photos/gallery/joaquin-parceriza/22.jpg",
      "/photos/gallery/joaquin-parceriza/23.jpg",
      "/photos/gallery/joaquin-parceriza/24.jpg",
      "/photos/gallery/joaquin-parceriza/25.jpg",
      "/photos/gallery/joaquin-parceriza/26.jpg",
      "/photos/gallery/joaquin-parceriza/27.jpg",
      "/photos/gallery/joaquin-parceriza/28.jpg"
    ],
    "profile": "Joaquin Parceriza integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a LSM. Competencia: Copa de Oro B2. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: LSM",
      "Categoría: Sub-19",
      "Competencia: Copa de Oro B2"
    ],
    "career_history": [
      "LSM · Club actual",
      "Copa de Oro B2 · Competencia"
    ]
  },
  {
    "id": "santiago-borges",
    "name": "Santiago Borges",
    "category": "Sub-19",
    "order": 212,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/gallery/santiago-borges/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/santiago-borges/01.jpg",
      "/photos/gallery/santiago-borges/02.jpg",
      "/photos/gallery/santiago-borges/03.jpg",
      "/photos/gallery/santiago-borges/04.jpg",
      "/photos/gallery/santiago-borges/05.jpg",
      "/photos/gallery/santiago-borges/06.jpg",
      "/photos/gallery/santiago-borges/07.jpg",
      "/photos/gallery/santiago-borges/08.jpg",
      "/photos/gallery/santiago-borges/09.jpg",
      "/photos/gallery/santiago-borges/10.jpg",
      "/photos/gallery/santiago-borges/11.jpg",
      "/photos/gallery/santiago-borges/12.jpg",
      "/photos/gallery/santiago-borges/13.jpg",
      "/photos/gallery/santiago-borges/14.jpg"
    ],
    "profile": "Santiago Borges integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Racing. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Racing",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Racing · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "kevin-hernandez",
    "name": "Kevin Hernandez",
    "category": "Sub-19",
    "order": 213,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/gallery/kevin-hernandez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/kevin-hernandez/01.jpg",
      "/photos/gallery/kevin-hernandez/02.jpg",
      "/photos/gallery/kevin-hernandez/03.jpg",
      "/photos/gallery/kevin-hernandez/04.jpg",
      "/photos/gallery/kevin-hernandez/05.jpg",
      "/photos/gallery/kevin-hernandez/06.jpg",
      "/photos/gallery/kevin-hernandez/07.jpg",
      "/photos/gallery/kevin-hernandez/08.jpg",
      "/photos/gallery/kevin-hernandez/09.jpg",
      "/photos/gallery/kevin-hernandez/10.jpg",
      "/photos/gallery/kevin-hernandez/11.jpg",
      "/photos/gallery/kevin-hernandez/12.jpg",
      "/photos/gallery/kevin-hernandez/13.jpg",
      "/photos/gallery/kevin-hernandez/14.jpg",
      "/photos/gallery/kevin-hernandez/15.jpg",
      "/photos/gallery/kevin-hernandez/16.jpg",
      "/photos/gallery/kevin-hernandez/17.jpg",
      "/photos/gallery/kevin-hernandez/18.jpg",
      "/photos/gallery/kevin-hernandez/19.jpg",
      "/photos/gallery/kevin-hernandez/20.jpg",
      "/photos/gallery/kevin-hernandez/21.jpg",
      "/photos/gallery/kevin-hernandez/22.jpg",
      "/photos/gallery/kevin-hernandez/23.jpg",
      "/photos/gallery/kevin-hernandez/24.jpg",
      "/photos/gallery/kevin-hernandez/25.jpg",
      "/photos/gallery/kevin-hernandez/26.jpg"
    ],
    "profile": "Kevin Hernandez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Racing. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Racing",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Racing · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "lautaro-silva",
    "name": "Lautaro Silva",
    "category": "Sub-19",
    "order": 214,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/lautaro-silva/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/lautaro-silva/01.jpg",
      "/photos/gallery/lautaro-silva/02.jpg",
      "/photos/gallery/lautaro-silva/03.jpg",
      "/photos/gallery/lautaro-silva/04.jpg",
      "/photos/gallery/lautaro-silva/05.jpg",
      "/photos/gallery/lautaro-silva/06.jpg"
    ],
    "profile": "Lautaro Silva integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "felipe-suhr",
    "name": "Felipe Suhr",
    "category": "Sub-19",
    "order": 215,
    "position": null,
    "club": "Montevideo City Torque",
    "photo_url": "/photos/gallery/felipe-suhr/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/felipe-suhr/01.jpg",
      "/photos/gallery/felipe-suhr/02.jpg",
      "/photos/gallery/felipe-suhr/03.jpg",
      "/photos/gallery/felipe-suhr/04.jpg",
      "/photos/gallery/felipe-suhr/05.jpg",
      "/photos/gallery/felipe-suhr/06.jpg"
    ],
    "profile": "Felipe Suhr integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Montevideo City Torque. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Montevideo City Torque",
      "Categoría: Sub-19",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Montevideo City Torque · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "agustina-alvez",
    "name": "Agustina Alvez",
    "category": "Sub-19",
    "order": 216,
    "position": null,
    "club": "Nacional",
    "photo_url": "/photos/gallery/agustina-alvez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Fútbol femenino",
    "gallery": [
      "/photos/gallery/agustina-alvez/01.jpg",
      "/photos/gallery/agustina-alvez/02.jpg",
      "/photos/gallery/agustina-alvez/03.jpg",
      "/photos/gallery/agustina-alvez/04.jpg",
      "/photos/gallery/agustina-alvez/05.jpg"
    ],
    "profile": "Agustina Alvez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Nacional. Competencia: Fútbol femenino. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Nacional",
      "Categoría: Sub-19",
      "Competencia: Fútbol femenino"
    ],
    "career_history": [
      "Nacional · Club actual",
      "Fútbol femenino · Competencia"
    ]
  },
  {
    "id": "enzo-espinel",
    "name": "Enzo Espinel",
    "category": "Sub-17",
    "order": 400,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/gallery/enzo-espinel/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/enzo-espinel/01.jpg"
    ],
    "profile": "Enzo Espinel integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Juventud. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Juventud",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Juventud · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "felipe-ramirez",
    "name": "Felipe Ramirez",
    "category": "Sub-17",
    "order": 401,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/felipe-ramirez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/felipe-ramirez/01.jpg",
      "/photos/gallery/felipe-ramirez/02.jpg",
      "/photos/gallery/felipe-ramirez/03.jpg",
      "/photos/gallery/felipe-ramirez/04.jpg",
      "/photos/gallery/felipe-ramirez/05.jpg",
      "/photos/gallery/felipe-ramirez/06.jpg",
      "/photos/gallery/felipe-ramirez/07.jpg",
      "/photos/gallery/felipe-ramirez/08.jpg"
    ],
    "profile": "Felipe Ramirez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "augusto-suarez",
    "name": "Augusto Suarez",
    "category": "Sub-17",
    "order": 402,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/augusto-suarez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/augusto-suarez/01.jpg",
      "/photos/gallery/augusto-suarez/02.jpg",
      "/photos/gallery/augusto-suarez/03.jpg",
      "/photos/gallery/augusto-suarez/04.jpg",
      "/photos/gallery/augusto-suarez/05.jpg",
      "/photos/gallery/augusto-suarez/06.jpg",
      "/photos/gallery/augusto-suarez/07.jpg",
      "/photos/gallery/augusto-suarez/08.jpg",
      "/photos/gallery/augusto-suarez/09.jpg",
      "/photos/gallery/augusto-suarez/10.jpg",
      "/photos/gallery/augusto-suarez/11.jpg",
      "/photos/gallery/augusto-suarez/12.jpg",
      "/photos/gallery/augusto-suarez/13.jpg",
      "/photos/gallery/augusto-suarez/14.jpg",
      "/photos/gallery/augusto-suarez/15.jpg",
      "/photos/gallery/augusto-suarez/16.jpg"
    ],
    "profile": "Augusto Suarez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "franco-lasalvia",
    "name": "Franco Lasalvia",
    "category": "Sub-17",
    "order": 403,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/franco-lasalvia/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/franco-lasalvia/01.jpg",
      "/photos/gallery/franco-lasalvia/02.jpg",
      "/photos/gallery/franco-lasalvia/03.jpg",
      "/photos/gallery/franco-lasalvia/04.jpg",
      "/photos/gallery/franco-lasalvia/05.jpg",
      "/photos/gallery/franco-lasalvia/06.jpg",
      "/photos/gallery/franco-lasalvia/07.jpg",
      "/photos/gallery/franco-lasalvia/08.jpg",
      "/photos/gallery/franco-lasalvia/09.jpg",
      "/photos/gallery/franco-lasalvia/10.jpg",
      "/photos/gallery/franco-lasalvia/11.jpg",
      "/photos/gallery/franco-lasalvia/12.jpg",
      "/photos/gallery/franco-lasalvia/13.jpg",
      "/photos/gallery/franco-lasalvia/14.jpg",
      "/photos/gallery/franco-lasalvia/15.jpg",
      "/photos/gallery/franco-lasalvia/16.jpg",
      "/photos/gallery/franco-lasalvia/17.jpg"
    ],
    "profile": "Franco Lasalvia integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "mateo-ramos",
    "name": "Mateo Ramos",
    "category": "Sub-17",
    "order": 404,
    "position": null,
    "club": "Boston",
    "photo_url": "/photos/gallery/mateo-ramos/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/mateo-ramos/01.jpg",
      "/photos/gallery/mateo-ramos/02.jpg",
      "/photos/gallery/mateo-ramos/03.jpg",
      "/photos/gallery/mateo-ramos/04.jpg",
      "/photos/gallery/mateo-ramos/05.jpg"
    ],
    "profile": "Mateo Ramos integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Boston. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Boston",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Boston · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "fabricio-resende",
    "name": "Fabricio Resende",
    "category": "Sub-17",
    "order": 405,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/fabricio-resende/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/fabricio-resende/01.jpg",
      "/photos/gallery/fabricio-resende/02.jpg",
      "/photos/gallery/fabricio-resende/03.jpg",
      "/photos/gallery/fabricio-resende/04.jpg",
      "/photos/gallery/fabricio-resende/05.jpg",
      "/photos/gallery/fabricio-resende/06.jpg",
      "/photos/gallery/fabricio-resende/07.jpg"
    ],
    "profile": "Fabricio Resende integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-17",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "lautaro-alberro",
    "name": "Lautaro Alberro",
    "category": "Sub-16",
    "order": 500,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/gallery/lautaro-alberro/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/lautaro-alberro/01.jpg",
      "/photos/gallery/lautaro-alberro/02.jpg",
      "/photos/gallery/lautaro-alberro/03.jpg",
      "/photos/gallery/lautaro-alberro/04.jpg",
      "/photos/gallery/lautaro-alberro/05.jpg",
      "/photos/gallery/lautaro-alberro/06.jpg",
      "/photos/gallery/lautaro-alberro/07.jpg",
      "/photos/gallery/lautaro-alberro/08.jpg",
      "/photos/gallery/lautaro-alberro/09.jpg",
      "/photos/gallery/lautaro-alberro/10.jpg",
      "/photos/gallery/lautaro-alberro/11.jpg",
      "/photos/gallery/lautaro-alberro/12.jpg",
      "/photos/gallery/lautaro-alberro/13.jpg",
      "/photos/gallery/lautaro-alberro/14.jpg",
      "/photos/gallery/lautaro-alberro/15.jpg",
      "/photos/gallery/lautaro-alberro/16.jpg",
      "/photos/gallery/lautaro-alberro/17.jpg",
      "/photos/gallery/lautaro-alberro/18.jpg",
      "/photos/gallery/lautaro-alberro/19.jpg",
      "/photos/gallery/lautaro-alberro/20.jpg",
      "/photos/gallery/lautaro-alberro/21.jpg",
      "/photos/gallery/lautaro-alberro/22.jpg",
      "/photos/gallery/lautaro-alberro/23.jpg",
      "/photos/gallery/lautaro-alberro/24.jpg",
      "/photos/gallery/lautaro-alberro/25.jpg",
      "/photos/gallery/lautaro-alberro/26.jpg",
      "/photos/gallery/lautaro-alberro/27.jpg",
      "/photos/gallery/lautaro-alberro/28.jpg",
      "/photos/gallery/lautaro-alberro/29.jpg",
      "/photos/gallery/lautaro-alberro/30.jpg"
    ],
    "profile": "Lautaro Alberro integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Bella Vista. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Bella Vista",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Bella Vista · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "faustino-piaggio",
    "name": "Faustino Piaggio",
    "category": "Sub-16",
    "order": 501,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/gallery/faustino-piaggio/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/faustino-piaggio/01.jpg"
    ],
    "profile": "Faustino Piaggio integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Racing. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Racing",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Racing · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "gonzalo-fernandez",
    "name": "Gonzalo Fernandez",
    "category": "Sub-16",
    "order": 502,
    "position": null,
    "club": "Racing",
    "photo_url": null,
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "profile": "Gonzalo Fernandez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Racing. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Racing",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Racing · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "valentin-fernandez",
    "name": "Valentin Fernandez",
    "category": "Sub-16",
    "order": 503,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/valentin-fernandez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/valentin-fernandez/01.jpg",
      "/photos/gallery/valentin-fernandez/02.jpg",
      "/photos/gallery/valentin-fernandez/03.jpg",
      "/photos/gallery/valentin-fernandez/04.jpg",
      "/photos/gallery/valentin-fernandez/05.jpg",
      "/photos/gallery/valentin-fernandez/06.jpg",
      "/photos/gallery/valentin-fernandez/07.jpg"
    ],
    "profile": "Valentin Fernandez integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "tomas-brolio",
    "name": "Tomas Brolio",
    "category": "Sub-16",
    "order": 504,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/tomas-brolio/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/tomas-brolio/01.jpg",
      "/photos/gallery/tomas-brolio/02.jpg",
      "/photos/gallery/tomas-brolio/03.jpg",
      "/photos/gallery/tomas-brolio/04.jpg",
      "/photos/gallery/tomas-brolio/05.jpg",
      "/photos/gallery/tomas-brolio/06.jpg",
      "/photos/gallery/tomas-brolio/07.jpg",
      "/photos/gallery/tomas-brolio/08.jpg",
      "/photos/gallery/tomas-brolio/09.jpg",
      "/photos/gallery/tomas-brolio/10.jpg",
      "/photos/gallery/tomas-brolio/11.jpg",
      "/photos/gallery/tomas-brolio/12.jpg",
      "/photos/gallery/tomas-brolio/13.jpg",
      "/photos/gallery/tomas-brolio/14.jpg",
      "/photos/gallery/tomas-brolio/15.jpg",
      "/photos/gallery/tomas-brolio/16.jpg",
      "/photos/gallery/tomas-brolio/17.jpg",
      "/photos/gallery/tomas-brolio/18.jpg",
      "/photos/gallery/tomas-brolio/19.jpg",
      "/photos/gallery/tomas-brolio/20.jpg",
      "/photos/gallery/tomas-brolio/21.jpg"
    ],
    "profile": "Tomas Brolio integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "dhiyago-duran",
    "name": "Dhiyago Duran",
    "category": "Sub-16",
    "order": 505,
    "position": null,
    "club": "Deportivo Maldonado",
    "photo_url": "/photos/gallery/dhiyago-duran/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/dhiyago-duran/01.jpg"
    ],
    "profile": "Dhiyago Duran integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Deportivo Maldonado. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Deportivo Maldonado",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Deportivo Maldonado · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "juan-manuel-brito",
    "name": "Juan Manuel Brito",
    "category": "Sub-16",
    "order": 506,
    "position": null,
    "club": "Deportivo Maldonado",
    "photo_url": "/photos/gallery/juan-manuel-brito/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/juan-manuel-brito/01.jpg",
      "/photos/gallery/juan-manuel-brito/02.jpg",
      "/photos/gallery/juan-manuel-brito/03.jpg",
      "/photos/gallery/juan-manuel-brito/04.jpg",
      "/photos/gallery/juan-manuel-brito/05.jpg",
      "/photos/gallery/juan-manuel-brito/06.jpg",
      "/photos/gallery/juan-manuel-brito/07.jpg"
    ],
    "profile": "Juan Manuel Brito integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Deportivo Maldonado. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Deportivo Maldonado",
      "Categoría: Sub-16",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Deportivo Maldonado · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "ignacio-benero",
    "name": "Ignacio Benero",
    "category": "Sub-15",
    "order": 600,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/gallery/ignacio-benero/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/ignacio-benero/01.jpg",
      "/photos/gallery/ignacio-benero/02.jpg",
      "/photos/gallery/ignacio-benero/03.jpg"
    ],
    "profile": "Ignacio Benero integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Albion. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Albion",
      "Categoría: Sub-15",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Albion · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "ramiro-mombrum",
    "name": "Ramiro Mombrum",
    "category": "Sub-15",
    "order": 601,
    "position": null,
    "club": "Danubio",
    "photo_url": "/photos/gallery/ramiro-mombrum/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A",
    "gallery": [
      "/photos/gallery/ramiro-mombrum/01.jpg",
      "/photos/gallery/ramiro-mombrum/02.jpg",
      "/photos/gallery/ramiro-mombrum/03.jpg",
      "/photos/gallery/ramiro-mombrum/04.jpg",
      "/photos/gallery/ramiro-mombrum/05.jpg",
      "/photos/gallery/ramiro-mombrum/06.jpg"
    ],
    "profile": "Ramiro Mombrum integra la nómina de jugadores representados por Footwork Agency. Actualmente está vinculado a Danubio. Competencia: Torneo Apertura - Divisional A. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Danubio",
      "Categoría: Sub-15",
      "Competencia: Torneo Apertura - Divisional A"
    ],
    "career_history": [
      "Danubio · Club actual",
      "Torneo Apertura - Divisional A · Competencia"
    ]
  },
  {
    "id": "leonel-araujo",
    "name": "Leonel Araujo",
    "category": "Jugadores OFI",
    "order": 700,
    "position": "Extremo / enganche",
    "club": "Club Ceibal de Salto",
    "photo_url": "/photos/gallery/leonel-araujo/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2010,
    "gallery": [
      "/photos/gallery/leonel-araujo/01.jpg"
    ],
    "profile": "Leonel Araujo integra la nómina de jugadores representados por Footwork Agency. Se desempeña como extremo / enganche. Actualmente está vinculado a Club Ceibal de Salto. Competencia: OFI. Generación 2010. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Club Ceibal de Salto",
      "Posición: Extremo / enganche",
      "Categoría: Jugadores OFI · 2010",
      "Competencia: OFI"
    ],
    "career_history": [
      "Club Ceibal de Salto · Club actual",
      "OFI · Competencia"
    ]
  },
  {
    "id": "tiziano-ganicoche",
    "name": "Tiziano Ganicoche",
    "category": "Jugadores OFI",
    "order": 701,
    "position": "Volante central",
    "club": "Club Ceibal de Salto",
    "photo_url": "/photos/gallery/tiziano-ganicoche/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2010,
    "gallery": [
      "/photos/gallery/tiziano-ganicoche/01.jpg"
    ],
    "profile": "Tiziano Ganicoche integra la nómina de jugadores representados por Footwork Agency. Se desempeña como volante central. Actualmente está vinculado a Club Ceibal de Salto. Competencia: OFI. Generación 2010. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Club Ceibal de Salto",
      "Posición: Volante central",
      "Categoría: Jugadores OFI · 2010",
      "Competencia: OFI"
    ],
    "career_history": [
      "Club Ceibal de Salto · Club actual",
      "OFI · Competencia"
    ]
  },
  {
    "id": "franco-bortoluzzi",
    "name": "Franco Bortoluzzi",
    "category": "Jugadores OFI",
    "order": 702,
    "position": "Delantero centro",
    "club": "Club Atlético Higueritas",
    "photo_url": "/photos/gallery/franco-bortoluzzi/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "gallery": [
      "/photos/gallery/franco-bortoluzzi/01.jpg"
    ],
    "profile": "Franco Bortoluzzi integra la nómina de jugadores representados por Footwork Agency. Se desempeña como delantero centro. Actualmente está vinculado a Club Atlético Higueritas. Competencia: OFI. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Club Atlético Higueritas",
      "Posición: Delantero centro",
      "Categoría: Jugadores OFI",
      "Competencia: OFI"
    ],
    "career_history": [
      "Club Atlético Higueritas · Club actual",
      "OFI · Competencia"
    ]
  },
  {
    "id": "facundo-moreira",
    "name": "Facundo Moreira",
    "category": "Jugadores OFI",
    "order": 703,
    "position": "Defensa central",
    "club": "Club Atlético Fernandino",
    "photo_url": "/photos/gallery/facundo-moreira/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2009,
    "gallery": [
      "/photos/gallery/facundo-moreira/01.jpg"
    ],
    "profile": "Facundo Moreira integra la nómina de jugadores representados por Footwork Agency. Se desempeña como defensa central. Actualmente está vinculado a Club Atlético Fernandino. Competencia: OFI. Generación 2009. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Club Atlético Fernandino",
      "Posición: Defensa central",
      "Categoría: Jugadores OFI · 2009",
      "Competencia: OFI"
    ],
    "career_history": [
      "Club Atlético Fernandino · Club actual",
      "OFI · Competencia"
    ]
  },
  {
    "id": "facundo-martinez",
    "name": "Facundo Martinez",
    "category": "Jugadores OFI",
    "order": 704,
    "position": "Lateral izquierdo",
    "club": "Porvenir de Melo",
    "photo_url": "/photos/gallery/facundo-martinez/01.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2008,
    "gallery": [
      "/photos/gallery/facundo-martinez/01.jpg"
    ],
    "profile": "Facundo Martinez integra la nómina de jugadores representados por Footwork Agency. Se desempeña como lateral izquierdo. Actualmente está vinculado a Porvenir de Melo. Competencia: OFI. Generación 2008. La ficha queda preparada para sumar videos, informes, fotos adicionales y material de seguimiento cuando la agencia lo requiera.",
    "stats_highlights": [
      "Club: Porvenir de Melo",
      "Posición: Lateral izquierdo",
      "Categoría: Jugadores OFI · 2008",
      "Competencia: OFI"
    ],
    "career_history": [
      "Porvenir de Melo · Club actual",
      "OFI · Competencia"
    ]
  }
];
