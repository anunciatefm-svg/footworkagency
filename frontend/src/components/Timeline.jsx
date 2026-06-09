import { TIMELINE } from "../lib/constants";

export default function Timeline() {
  return (
    <section id="crecimiento" data-testid="timeline-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Crecimiento</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Cuatro años, <br />
              <span className="text-white/30">una agencia consolidada</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
            Desde su creación en 2022, Footwork Agency multiplicó su cartera y profesionalizó cada área hasta llegar a Primera División y los mercados internacionales.
          </p>
        </div>

        <div className="relative">
          {/* vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5BB6FF]/40 to-transparent" />
          <ol className="space-y-10 lg:space-y-16">
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={t.year}
                  data-testid={`timeline-item-${t.year}`}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-start"
                >
                  {/* dot */}
                  <span className="hidden lg:block absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 bg-[#5BB6FF] ring-4 ring-[#06121F]" />
                  <div className={left ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}>
                    <div className="font-display text-5xl sm:text-6xl font-bold text-[#5BB6FF] leading-none">
                      {t.year}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white font-bold mt-3">
                      {t.title}
                    </h3>
                  </div>
                  <div className={left ? "lg:col-start-2 lg:pl-12 mt-4 lg:mt-0" : "lg:row-start-1 lg:pr-12 lg:text-right mt-4 lg:mt-0"}>
                    <ul className="space-y-2">
                      {t.points.map((p, j) => (
                        <li key={j} className="text-white/70 text-sm sm:text-base leading-relaxed font-light flex gap-3 lg:gap-2 lg:justify-start">
                          <span className="text-[#5BB6FF] mt-2 w-1.5 h-1.5 bg-[#5BB6FF] shrink-0 lg:order-none" />
                          <span className="flex-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
