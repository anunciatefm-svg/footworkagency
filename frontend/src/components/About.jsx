import { Target, Users, TrendingUp, Heart, Handshake, Globe } from "lucide-react";

const PILLARS = [
  { icon: Users, title: "Representación", desc: "Jugadores, cuerpos técnicos y directores deportivos." },
  { icon: Target, title: "Scouting", desc: "Detección y seguimiento en Uruguay y el exterior." },
  { icon: Heart, title: "Desarrollo Integral", desc: "Salud, nutrición, psicología y kinesiología." },
  { icon: TrendingUp, title: "Plan de carrera", desc: "Hoja de ruta individual a corto, mediano y largo plazo." },
  { icon: Handshake, title: "Negociación", desc: "Contratos y defensa de intereses deportivos y económicos." },
  { icon: Globe, title: "Proyección internacional", desc: "Convenios y relacionamiento con clubes y mercados." },
];

export default function About() {
  return (
    <section id="nosotros" data-testid="about-section" className="relative py-24 md:py-32 bg-[#06121F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Sobre la agencia</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4 mb-8">
                Una agencia <br />
                <span className="text-[#5BB6FF]">360°</span> para el <br />
                futbolista moderno
              </h2>
              <p className="text-white/75 text-lg leading-relaxed font-light">
                Footwork Agency es una agencia de representación y gestión integral para{" "}
                <span className="text-white font-medium">jugadores, cuerpos técnicos y directores deportivos</span>.
              </p>
              <p className="text-white/65 text-base leading-relaxed mt-5 font-light">
                Acompañamos al futbolista <span className="text-white">dentro y fuera de la cancha</span>: captación, scouting, negociación, planificación de carrera, salud, derecho deportivo, marketing y proyección internacional. Cada profesional tiene un proyecto único — nosotros lo construimos con su familia y un equipo multidisciplinario.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    data-testid={`pillar-card-${i}`}
                    className="group bg-[#06121F] hover:bg-[#0B1B2E] transition-colors p-8 sm:p-10 relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="w-7 h-7 text-[#5BB6FF]" strokeWidth={1.5} />
                      <span className="font-display text-xs text-white/30 tracking-widest">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-xl uppercase tracking-tight text-white font-semibold leading-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">{p.desc}</p>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#5BB6FF] group-hover:w-full transition-all duration-500" />
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
