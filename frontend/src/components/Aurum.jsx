import { MapPin, Activity, HeartPulse, Dumbbell, Microscope, Zap, Stethoscope, Apple } from "lucide-react";
import { AURUM } from "../lib/constants";

const ICONS = [Activity, HeartPulse, Microscope, Dumbbell, Stethoscope, Zap, Microscope, Apple];

export default function Aurum() {
  return (
    <section id="aurum" data-testid="aurum-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5 overflow-hidden">
      <div className="absolute -top-32 -right-40 w-[500px] h-[500px] bg-[#5BB6FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Clínica Aurum</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4 mb-6">
              Recuperación, <br />
              <span className="text-[#5BB6FF]">prevención</span> y <br />
              alto rendimiento
            </h2>
            <p className="text-white/70 text-base leading-relaxed font-light mb-6">
              Clínica Aurum es el espacio propio de Footwork Agency dedicado al cuidado integral del jugador. Incorpora tecnología de última generación para prevenir lesiones, acelerar la recuperación y optimizar el rendimiento.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#0B1B2E] border border-white/10 px-5 py-4">
              <MapPin className="w-4 h-4 text-[#5BB6FF]" />
              <span className="text-white text-sm">{AURUM.address}</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {AURUM.services.map((s, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div
                    key={i}
                    data-testid={`aurum-service-${i}`}
                    className="bg-[#0B1B2E] hover:bg-[#102844] transition-colors p-6 sm:p-7 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0066CC]/15 border border-[#5BB6FF]/30">
                      <Icon className="w-4 h-4 text-[#5BB6FF]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium leading-snug">{s}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
