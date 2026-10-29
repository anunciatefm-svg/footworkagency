import { BarChart3, PlayCircle, Target, Video } from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "Seguimiento individual",
    desc: "Análisis centrado en cada futbolista representado, con foco en toma de decisiones, acciones técnicas y evolución competitiva.",
  },
  {
    icon: BarChart3,
    title: "Informes de rendimiento",
    desc: "Lecturas claras del partido y del entrenamiento para convertir el video en información útil para el desarrollo del jugador.",
  },
  {
    icon: PlayCircle,
    title: "Material para clubes",
    desc: "Selección de clips y reportes para mostrar virtudes, progreso y perfil deportivo de nuestros jugadores.",
  },
];

export default function VideoAnalysis() {
  return (
    <section id="videoanalisis" data-testid="videoanalysis-section" className="relative py-24 md:py-32 bg-[#081827] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-[#0066CC]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#5BB6FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Próxima área</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Videoanálisis <br />
              <span className="text-white/30">de jugadores</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed max-w-xl font-light mt-6">
              Tendremos un área de videoanálisis concentrada en nuestros jugadores, pensada para potenciar su desarrollo, ordenar información deportiva y mostrar su rendimiento con mayor precisión.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-white/10 bg-[#06121F]/70 p-6 sm:p-8">
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#5BB6FF] via-transparent to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#0066CC]/20 border border-[#5BB6FF]/30 flex items-center justify-center">
                  <Video className="w-7 h-7 text-[#5BB6FF]" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white font-bold">Análisis propio</h3>
                  <p className="text-white/45 text-sm font-light">Información deportiva aplicada al crecimiento individual.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-px bg-white/5">
                {ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} data-testid={`videoanalysis-card-${i}`} className="bg-[#081827] p-5 min-h-[210px] flex flex-col">
                      <Icon className="w-6 h-6 text-[#5BB6FF] mb-6" />
                      <h4 className="font-display text-sm uppercase tracking-tight text-white font-semibold mb-3">{item.title}</h4>
                      <p className="text-white/55 text-xs leading-relaxed font-light">{item.desc}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
