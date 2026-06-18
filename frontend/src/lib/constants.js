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
    "photo_url": "/photos/alvaro-san-emeterio.jpg",
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
      "/photos/alvaro-san-emeterio.jpg"
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
    "photo_url": "/photos/maximiliano-camargo.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/maximiliano-camargo/profil/spieler/1531208",
    "info_url": null,
    "competition": "Segunda División"
  },
  {
    "id": "lautaro-izquierdo",
    "name": "Lautaro Izquierdo",
    "category": "Primera División",
    "order": 102,
    "position": null,
    "club": "Olimpia de Ita",
    "photo_url": "/photos/lautaro-izquierdo.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera División B"
  },
  {
    "id": "facundo-de-cuadro",
    "name": "Facundo De Cuadro",
    "category": "Primera División",
    "order": 103,
    "position": "Mediocentro",
    "club": "Bella Vista",
    "photo_url": "/photos/facundo-de-cuadro.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/facundo-de-cuadro/profil/spieler/1382933",
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "gustavo-bortoli",
    "name": "Gustavo Bortoli",
    "category": "Primera División",
    "order": 104,
    "position": "Delantero centro",
    "club": "Salto",
    "photo_url": "/photos/gustavo-bortoli.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/gustavo-bortoli/profil/spieler/1065193",
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "brian-sanchez",
    "name": "Brian Sanchez",
    "category": "Primera División",
    "order": 105,
    "position": null,
    "club": "Sportivo Bella Italia",
    "photo_url": "/photos/brian-sanchez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "diego-nunez",
    "name": "Diego Nuñez",
    "category": "Primera División",
    "order": 106,
    "position": null,
    "club": "Sportivo Bella Italia",
    "photo_url": "/photos/diego-nunez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "nahuel-rosano",
    "name": "Nahuel Rosano",
    "category": "Primera División",
    "order": 107,
    "position": null,
    "club": "Villa Teresa",
    "photo_url": "/photos/nahuel-rosano.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "lucas-cisneros",
    "name": "Lucas Cisneros",
    "category": "Primera División",
    "order": 108,
    "position": null,
    "club": "Platense",
    "photo_url": "/photos/lucas-cisneros.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Primera Divisional C"
  },
  {
    "id": "sofia-olivera",
    "name": "Sofia Olivera",
    "category": "Primera División",
    "order": 109,
    "position": null,
    "club": "Nacional",
    "photo_url": "/photos/sofia-olivera.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Fútbol femenino"
  },
  {
    "id": "julio-gadea",
    "name": "Julio Gadea",
    "category": "Sub-19",
    "order": 200,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/julio-gadea.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "emanuel-sainz",
    "name": "Emanuel Sainz",
    "category": "Sub-19",
    "order": 201,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/emanuel-sainz.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "thiago-rodriguez",
    "name": "Thiago Rodriguez",
    "category": "Sub-19",
    "order": 202,
    "position": null,
    "club": "Plaza Colonia",
    "photo_url": "/photos/thiago-rodriguez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional B1"
  },
  {
    "id": "tomas-rodriguez",
    "name": "Tomás Rodriguez",
    "category": "Sub-19",
    "order": 203,
    "position": "Centrocampista",
    "club": "Bella Vista",
    "photo_url": "/photos/tomas-rodriguez.jpg",
    "transfermarkt_url": "https://www.transfermarkt.es/tomas-rodriguez/profil/spieler/1450963",
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "santiago-prieto",
    "name": "Santiago Prieto",
    "category": "Sub-19",
    "order": 204,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/santiago-prieto.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "lucas-ferreira",
    "name": "Lucas Ferreira",
    "category": "Sub-19",
    "order": 205,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/lucas-ferreira.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "felipe-sosa",
    "name": "Felipe Sosa",
    "category": "Sub-19",
    "order": 206,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/felipe-sosa.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "matias-lescano",
    "name": "Matias Lescano",
    "category": "Sub-19",
    "order": 208,
    "position": null,
    "club": "Salto",
    "photo_url": "/photos/matias-lescano.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1"
  },
  {
    "id": "dilan-ilarraz",
    "name": "Dilan Ilarraz",
    "category": "Sub-19",
    "order": 209,
    "position": null,
    "club": "Tacuarembo",
    "photo_url": "/photos/dilan-ilarraz.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1"
  },
  {
    "id": "facundo-almeida",
    "name": "Facundo Almeida",
    "category": "Sub-19",
    "order": 210,
    "position": null,
    "club": "Tacuarembo",
    "photo_url": "/photos/facundo-almeida.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa Oro B1"
  },
  {
    "id": "joaquin-parceriza",
    "name": "Joaquin Parceriza",
    "category": "Sub-19",
    "order": 211,
    "position": null,
    "club": "LSM",
    "photo_url": "/photos/joaquin-parceriza.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Copa de Oro B2"
  },
  {
    "id": "santiago-borges",
    "name": "Santiago Borges",
    "category": "Sub-19",
    "order": 212,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/santiago-borges.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "kevin-hernandez",
    "name": "Kevin Hernandez",
    "category": "Sub-19",
    "order": 213,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/kevin-hernandez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "lautaro-silva",
    "name": "Lautaro Silva",
    "category": "Sub-19",
    "order": 214,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/lautaro-silva.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "felipe-suhr",
    "name": "Felipe Suhr",
    "category": "Sub-19",
    "order": 215,
    "position": null,
    "club": "Montevideo City Torque",
    "photo_url": "/photos/felipe-suhr.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "agustina-alvez",
    "name": "Agustina Alvez",
    "category": "Sub-19",
    "order": 216,
    "position": null,
    "club": "Nacional",
    "photo_url": "/photos/agustina-alvez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Fútbol femenino"
  },
  {
    "id": "enzo-espinel",
    "name": "Enzo Espinel",
    "category": "Sub-17",
    "order": 400,
    "position": null,
    "club": "Juventud",
    "photo_url": "/photos/enzo-espinel.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "felipe-ramirez",
    "name": "Felipe Ramirez",
    "category": "Sub-17",
    "order": 401,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/felipe-ramirez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "augusto-suarez",
    "name": "Augusto Suarez",
    "category": "Sub-17",
    "order": 402,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/augusto-suarez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "franco-lasalvia",
    "name": "Franco Lasalvia",
    "category": "Sub-17",
    "order": 403,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/franco-lasalvia.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "mateo-ramos",
    "name": "Mateo Ramos",
    "category": "Sub-17",
    "order": 404,
    "position": null,
    "club": "Boston",
    "photo_url": "/photos/mateo-ramos.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "fabricio-resende",
    "name": "Fabricio Resende",
    "category": "Sub-17",
    "order": 405,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/fabricio-resende.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "lautaro-alberro",
    "name": "Lautaro Alberro",
    "category": "Sub-16",
    "order": 500,
    "position": null,
    "club": "Bella Vista",
    "photo_url": "/photos/lautaro-alberro.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "faustino-piaggio",
    "name": "Faustino Piaggio",
    "category": "Sub-16",
    "order": 501,
    "position": null,
    "club": "Racing",
    "photo_url": "/photos/faustino-piaggio.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
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
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "valentin-fernandez",
    "name": "Valentin Fernandez",
    "category": "Sub-16",
    "order": 503,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/valentin-fernandez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "tomas-brolio",
    "name": "Tomas Brolio",
    "category": "Sub-16",
    "order": 504,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/tomas-brolio.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "dhiyago-duran",
    "name": "Dhiyago Duran",
    "category": "Sub-16",
    "order": 505,
    "position": null,
    "club": "Deportivo Maldonado",
    "photo_url": "/photos/dhiyago-duran.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "juan-manuel-brito",
    "name": "Juan Manuel Brito",
    "category": "Sub-16",
    "order": 506,
    "position": null,
    "club": "Deportivo Maldonado",
    "photo_url": "/photos/juan-manuel-brito.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "ignacio-benero",
    "name": "Ignacio Benero",
    "category": "Sub-15",
    "order": 600,
    "position": null,
    "club": "Albion",
    "photo_url": "/photos/ignacio-benero.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "ramiro-mombrum",
    "name": "Ramiro Mombrum",
    "category": "Sub-15",
    "order": 601,
    "position": null,
    "club": "Danubio",
    "photo_url": "/photos/ramiro-mombrum.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "Torneo Apertura - Divisional A"
  },
  {
    "id": "leonel-araujo",
    "name": "Leonel Araujo",
    "category": "Jugadores OFI",
    "order": 700,
    "position": "Extremo / enganche",
    "club": "Club Ceibal de Salto",
    "photo_url": "/photos/leonel-araujo.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2010
  },
  {
    "id": "tiziano-ganicoche",
    "name": "Tiziano Ganicoche",
    "category": "Jugadores OFI",
    "order": 701,
    "position": "Volante central",
    "club": "Club Ceibal de Salto",
    "photo_url": "/photos/tiziano-ganicoche.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2010
  },
  {
    "id": "franco-bortoluzzi",
    "name": "Franco Bortoluzzi",
    "category": "Jugadores OFI",
    "order": 702,
    "position": "Delantero centro",
    "club": "Club Atlético Higueritas",
    "photo_url": "/photos/franco-bortoluzzi.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI"
  },
  {
    "id": "facundo-moreira",
    "name": "Facundo Moreira",
    "category": "Jugadores OFI",
    "order": 703,
    "position": "Defensa central",
    "club": "Club Atlético Fernandino",
    "photo_url": "/photos/facundo-moreira.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2009
  },
  {
    "id": "facundo-martinez",
    "name": "Facundo Martinez",
    "category": "Jugadores OFI",
    "order": 704,
    "position": "Lateral izquierdo",
    "club": "Porvenir de Melo",
    "photo_url": "/photos/facundo-martinez.jpg",
    "transfermarkt_url": null,
    "info_url": null,
    "competition": "OFI",
    "year": 2008
  }
];

export const FALLBACK_TEAM = [
  { id: "emiliano", name: "Emiliano Martínez", role: "Director Ejecutivo", bio: "Lidera la planificación, gestión y desarrollo del área deportiva, trabajando en la construcción de oportunidades y el acompañamiento integral de futbolistas.", linkedin_url: "https://uy.linkedin.com/in/emiliano-martinez-ab323820", featured: false, order: 1 },
  { id: "mauro", name: "Mauro Alonso", role: "Subdirector General · Agente FIFA Argentina · Dirección Operativa", featured: false, order: 2 },
  { id: "fernando", name: "Fernando Flori", role: "Agente FIFA · Socio Estratégico Argentina", featured: false, order: 3 },
];
