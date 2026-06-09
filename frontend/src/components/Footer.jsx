import { Instagram, Linkedin, ExternalLink, MessageCircle, Mail } from "lucide-react";
import { LOGO_URL, LINKS, CONTACT_EMAIL } from "../lib/constants";

const QUICK = [
  { label: "Inicio", id: "inicio" },
  { label: "Agencia", id: "nosotros" },
  { label: "Servicios", id: "servicios" },
  { label: "Modelo 360°", id: "modelo" },
  { label: "Jugadores", id: "jugadores" },
  { label: "Equipo", id: "equipo" },
  { label: "Crecimiento", id: "crecimiento" },
  { label: "Residencia", id: "residencia" },
  { label: "Aurum", id: "aurum" },
  { label: "Contacto", id: "contacto" },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="site-footer" className="relative bg-[#040A14] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="Footwork Agency" className="h-14 w-14 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-xl tracking-wider uppercase">Footwork</span>
                <span className="font-display text-[10px] text-[#5BB6FF] tracking-[0.3em] uppercase">Agency</span>
              </div>
            </div>
            <p className="text-white/65 text-base max-w-sm font-light leading-relaxed">
              Potenciamos el talento, construimos futuro. Gestión 360° para el futbolista profesional moderno.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5BB6FF] font-medium block mb-4">Navegación</span>
            <ul className="space-y-2">
              {QUICK.map((q) => (
                <li key={q.id}>
                  <button
                    data-testid={`footer-nav-${q.id}`}
                    onClick={() => scrollTo(q.id)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5BB6FF] font-medium block mb-4">Contacto y redes</span>
            <div className="flex flex-col gap-3">
              <a data-testid="footer-whatsapp-link" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm">+598 98 681 610</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a data-testid="footer-email-link" href={LINKS.email} className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#5BB6FF]" />
                <span className="text-sm">{CONTACT_EMAIL}</span>
              </a>
              <a data-testid="footer-instagram-link" href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group">
                <Instagram className="w-4 h-4 text-[#5BB6FF]" />
                <span className="text-sm">@footworkagency</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a data-testid="footer-linkedin-link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group">
                <Linkedin className="w-4 h-4 text-[#5BB6FF]" />
                <span className="text-sm">LinkedIn — Emiliano Martínez</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a data-testid="footer-transfermarkt-link" href={LINKS.transfermarkt} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-[#5BB6FF]" />
                <span className="text-sm">Perfil oficial en Transfermarkt</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Footwork Agency. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            Potenciamos el talento, construimos futuro.
          </p>
        </div>
      </div>
    </footer>
  );
}
