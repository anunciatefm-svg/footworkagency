export const LOGO_URL = "/icon.png";

// Phone in international format without +/spaces for wa.me
export const WHATSAPP_NUMBER = "59893354131";
export const CONTACT_PHONE_DISPLAY = "+598 93 354 131";
export const CONTACT_EMAIL = "footworkag@gmail.com";

export const LINKS = {
  instagram: "https://www.instagram.com/footworkagency/",
  transfermarkt: "https://www.transfermarkt.es/footwork-agency/beraterfirma/berater/11936",
  linkedin: "https://www.linkedin.com/company/footwork-agency",
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

export const OFFICE_ADDRESS = "Charrúa 2377, Montevideo";

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
