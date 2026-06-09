import { useEffect, useState } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { fetchTeam, fileUrl } from "../lib/api";

const initials = (name) =>
  name.split(" ").slice(0, 2).map((s) => s[0]).join("").toUpperCase();

function MemberCard({ m, index, featured }) {
  if (featured) {
    return (
      <article
        data-testid="team-featured-card"
        className="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-[#0F2641] to-[#06121F] border border-[#5BB6FF]/30 p-8 sm:p-10 min-h-[320px] flex flex-col justify-between"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#5BB6FF]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Liderazgo</span>
          <div className="flex items-center gap-5 mt-6">
            <div className="w-20 h-20 bg-[#0066CC]/20 border border-[#5BB6FF]/40 flex items-center justify-center overflow-hidden">
              {m.photo_url ? (
                <img src={fileUrl(m.photo_url)} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <span className="font-display text-3xl font-bold text-white">{initials(m.name)}</span>
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white leading-tight">{m.name}</h3>
              <span className="text-sm text-[#5BB6FF] uppercase tracking-widest font-medium">{m.role}</span>
            </div>
          </div>
        </div>
        <div className="relative mt-6">
          <p className="text-white/75 leading-relaxed font-light">
            {m.bio || "Lidera la planificación, gestión y desarrollo del área deportiva, trabajando en la construcción de oportunidades y el acompañamiento integral de futbolistas."}
          </p>
          {m.linkedin_url && (
            <a
              data-testid="team-featured-linkedin"
              href={m.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Ver LinkedIn
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      data-testid={`team-card-${index}`}
      className="group bg-[#0B1B2E] hover:bg-[#102844] border border-white/5 hover:border-[#5BB6FF]/30 p-5 transition-all duration-300 flex flex-col justify-between min-h-[150px]"
    >
      <div>
        <div className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:border-[#5BB6FF]/40 transition-colors overflow-hidden">
          {m.photo_url ? (
            <img src={fileUrl(m.photo_url)} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <span className="font-display text-base font-bold text-white">{initials(m.name)}</span>
          )}
        </div>
        <h3 className="font-display text-sm sm:text-base uppercase tracking-tight font-semibold text-white leading-tight">
          {m.name}
        </h3>
      </div>
      <div className="flex items-start justify-between gap-2 mt-3">
        <span className="text-[10px] uppercase tracking-widest text-white/55 font-medium leading-snug">{m.role}</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#5BB6FF] group-hover:rotate-45 transition-all shrink-0 mt-0.5" />
      </div>
    </article>
  );
}

export default function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam()
      .then(setMembers)
      .catch(() => setMembers([]))
      .finally(() => setLoading(false));
  }, []);

  const featured = members.find((m) => m.featured);
  const others = members.filter((m) => !m.featured);

  return (
    <section id="equipo" data-testid="team-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Estructura</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Estructura <br />
              <span className="text-white/30">de la agencia</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
            Un equipo multidisciplinario que cubre las cinco áreas del modelo 360°: deportiva, legal, desarrollo integral, comercial y comunicación.
          </p>
        </div>

        {loading ? (
          <div className="text-white/50 text-center py-20">Cargando equipo...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {featured && <MemberCard m={featured} featured />}
            {others.map((m, i) => (
              <MemberCard key={m.id} m={m} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
