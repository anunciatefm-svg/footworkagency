import { Trophy, Scale, Sparkles, Briefcase, Megaphone } from "lucide-react";
import { MODEL_360 } from "../lib/constants";

const ICONS = [Trophy, Scale, Sparkles, Briefcase, Megaphone];

export default function Model360() {
  return (
    <section id="modelo" data-testid="model360-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Modelo 360°</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Cinco áreas, <br />
              <span className="text-[#5BB6FF]">un solo equipo</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
            La estructura 360° de Footwork combina equipos especializados que trabajan en paralelo sobre la carrera del jugador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
          {MODEL_360.map((a, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={a.title}
                data-testid={`model360-area-${i}`}
                className="group bg-[#0B1B2E] hover:bg-[#102844] transition-colors p-7 lg:p-8 min-h-[230px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0066CC]/15 border border-[#5BB6FF]/30">
                    <Icon className="w-5 h-5 text-[#5BB6FF]" strokeWidth={1.6} />
                  </div>
                  <span className="font-display text-xs text-white/30 tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight text-white font-bold leading-tight mb-3">
                  {a.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
