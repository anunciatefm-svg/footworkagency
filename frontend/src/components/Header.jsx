import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { LOGO_URL, LINKS } from "../lib/constants";

const NAV = [
  { label: "Inicio", id: "inicio" },
  { label: "Agencia", id: "nosotros" },
  { label: "Servicios", id: "servicios" },
  { label: "Modelo 360°", id: "modelo" },
  { label: "Videoanálisis", id: "videoanalisis" },
  { label: "Jugadores", id: "jugadores" },
  { label: "Equipo", id: "equipo" },
  { label: "Crecimiento", id: "crecimiento" },
  { label: "Aurum", id: "aurum" },
  { label: "Contacto", id: "contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#06121F]/92 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        <button
          data-testid="logo-home-link"
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-3 group shrink-0"
        >
          <img src={LOGO_URL} alt="Footwork Agency" className="h-12 w-12 rounded-full object-cover bg-[#06121F] ring-1 ring-white/10" />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="font-display font-bold text-white text-lg tracking-wider uppercase">Footwork</span>
            <span className="font-display text-[10px] text-[#5BB6FF] tracking-[0.3em] uppercase">Agency</span>
          </div>
        </button>

        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}-link`}
              onClick={() => scrollTo(n.id)}
              className="px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors font-medium"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
            <a data-testid="header-instagram-link" href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-[#5BB6FF] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a data-testid="header-linkedin-link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-[#5BB6FF] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            data-testid="header-whatsapp-btn"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-bold uppercase tracking-widest px-4 py-3 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 text-white"
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="xl:hidden bg-[#06121F] border-t border-white/10 px-6 py-6 space-y-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`mobile-nav-${n.id}-link`}
              onClick={() => scrollTo(n.id)}
              className="block w-full text-left py-3 text-white/80 uppercase text-sm tracking-widest font-medium border-b border-white/5"
            >
              {n.label}
            </button>
          ))}
          <div className="flex gap-4 pt-4">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70"><Instagram className="w-5 h-5" /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70"><Linkedin className="w-5 h-5" /></a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/70"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </header>
  );
}
