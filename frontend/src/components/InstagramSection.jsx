import { Instagram } from "lucide-react";
import { LINKS } from "../lib/constants";

const TILES = [
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1584940120505-117038d90b05?auto=format&fit=crop&w=500&q=60",
];

export default function InstagramSection() {
  return (
    <section data-testid="instagram-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Redes</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4 mb-6">
              Seguinos en <br />
              <span className="text-[#5BB6FF]">Instagram</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed font-light mb-8">
              Conocé las novedades, jugadores, convenios y el día a día de Footwork Agency desde nuestro Instagram oficial.
            </p>
            <a
              data-testid="instagram-cta-btn"
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Entrar a Instagram
            </a>
            <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
              @footworkagency
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-2">
              {TILES.map((src, i) => (
                <a
                  key={i}
                  data-testid={`instagram-tile-${i}`}
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group bg-[#0B1B2E]"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0066CC]/0 group-hover:bg-[#0066CC]/30 transition-all flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
