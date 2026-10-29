import { SERVICES } from "../lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" data-testid="services-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Servicios</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Servicios <br />
              <span className="text-white/30">Profesionales</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
            Un servicio integral para que cada profesional se concentre en su rendimiento en el campo. El resto lo gestiona Footwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              data-testid={`service-card-${i}`}
              className="group bg-[#06121F] hover:bg-[#0B1B2E] transition-colors p-7 sm:p-8 min-h-[230px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl text-white/10 group-hover:text-[#5BB6FF] transition-colors">
                  {s.num}
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#5BB6FF] group-hover:rotate-45 transition-all duration-300" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg uppercase tracking-tight text-white font-semibold leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
