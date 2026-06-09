import { ArrowRight, Instagram, ArrowDown, MessageCircle } from "lucide-react";
import { LOGO_URL, LINKS } from "../lib/constants";

const HERO_BG = "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1920&q=70";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#06121F]"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06121F] via-[#06121F]/85 to-[#06121F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06121F] via-transparent to-[#06121F]/70" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#1e90ff]/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0066CC]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium" style={{ writingMode: "vertical-rl" }}>
          Footwork Agency · Uruguay
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-[#5BB6FF] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:pl-24 pt-28 pb-24 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center gap-5 mb-10 animate-fade-up" style={{ animationDelay: "0.05s", animationFillMode: "both" }}>
            <img
              src={LOGO_URL}
              alt="Footwork Agency"
              className="h-24 w-24 sm:h-28 sm:w-28 object-contain drop-shadow-[0_0_30px_rgba(91,182,255,0.6)]"
              fetchPriority="high"
            />
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5BB6FF] animate-pulse" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#5BB6FF] font-bold">
                  Gestión 360° del Futbolista
                </span>
              </div>
              <span className="font-display text-xl sm:text-2xl uppercase tracking-[0.2em] text-white font-bold">
                Footwork Agency
              </span>
            </div>
          </div>

          <h1
            data-testid="hero-title"
            className="font-display uppercase font-bold text-white mb-6 animate-fade-up"
            style={{
              animationDelay: "0.15s",
              animationFillMode: "both",
              fontSize: "clamp(2.25rem, 5.5vw, 5.25rem)",
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
            }}
          >
            Potenciamos el <span className="text-[#5BB6FF]">talento</span>,
            <br />
            construimos{" "}
            <span className="relative inline-block">
              futuro
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <path d="M 0 4 Q 75 1 150 4 T 300 4" stroke="#5BB6FF" strokeWidth="3" fill="none" />
              </svg>
            </span>
            .
          </h1>

          <p
            data-testid="hero-subtitle"
            className="text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed mb-10 font-light animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            Gestión 360° para el futbolista profesional moderno. Representación, scouting,
            desarrollo deportivo, salud, derecho y marca — todo bajo un mismo equipo.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            <button
              data-testid="hero-ver-jugadores-btn"
              onClick={() => scrollTo("jugadores")}
              className="group relative inline-flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Ver jugadores</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button
              data-testid="hero-contact-btn"
              onClick={() => scrollTo("contacto")}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#5BB6FF]/40 hover:bg-[#5BB6FF]/10 hover:border-[#5BB6FF] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all"
            >
              Contactar a la agencia
            </button>
            <a
              data-testid="hero-whatsapp-btn"
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#5BB6FF] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              data-testid="hero-instagram-btn"
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#5BB6FF] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 max-w-4xl animate-fade-up"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <Stat value="51" label="Jugadores en AUF (2026)" />
            <Stat value="10+" label="U17 en plantel de Primera" />
            <Stat value="360°" label="Modelo integral" />
            <Stat value="2022" label="Desde" />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("nosotros")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-[#06121F]/85 backdrop-blur-sm p-5">
      <div className="font-display text-3xl sm:text-4xl font-bold text-white leading-none mb-2">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
        {label}
      </div>
    </div>
  );
}
