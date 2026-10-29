import { useEffect, useRef, useState } from "react";
import { Linkedin, ArrowUpRight, FileText, Download, X, ExternalLink } from "lucide-react";
import { fetchTeam, fileUrl } from "../lib/api";

const initials = (name) =>
  name.split(" ").slice(0, 2).map((s) => s[0]).join("").toUpperCase();

const hasProfile = (member) => Boolean(
  member.bio || member.linkedin_url || member.documents?.length,
);

function MemberAvatar({ member, large = false }) {
  return (
    <div className={`${large ? "w-20 h-20" : "w-11 h-11"} bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0`}>
      {member.photo_url ? (
        <img src={fileUrl(member.photo_url)} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <span className={`font-display ${large ? "text-3xl" : "text-base"} font-bold text-white`}>
          {initials(member.name)}
        </span>
      )}
    </div>
  );
}

function MemberCard({ member, index, featured, onSelect }) {
  const interactive = hasProfile(member);
  const select = () => interactive && onSelect(member);
  const content = featured ? (
    <>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#5BB6FF]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Liderazgo</span>
        <div className="flex items-center gap-5 mt-6">
          <MemberAvatar member={member} large />
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white leading-tight">{member.name}</h3>
            <span className="text-sm text-[#5BB6FF] uppercase tracking-widest font-medium">{member.role}</span>
          </div>
        </div>
      </div>
      <div className="relative mt-6">
        {member.bio && <p className="text-white/75 leading-relaxed font-light">{member.bio}</p>}
        {interactive && <span className="inline-flex items-center gap-2 mt-5 text-xs font-bold uppercase tracking-widest text-[#5BB6FF]">Ver perfil <ArrowUpRight className="w-4 h-4" /></span>}
      </div>
    </>
  ) : (
    <>
      <div>
        <MemberAvatar member={member} />
        <h3 className="font-display text-sm sm:text-base uppercase tracking-tight font-semibold text-white leading-tight mt-3">{member.name}</h3>
      </div>
      <div className="flex items-start justify-between gap-2 mt-3">
        <span className="text-[10px] uppercase tracking-widest text-white/55 font-medium leading-snug">{member.role}</span>
        {interactive && <ArrowUpRight className="w-4 h-4 text-[#5BB6FF] shrink-0" />}
      </div>
      {member.documents?.length > 0 && (
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#5BB6FF] mt-3">
          <FileText className="w-3.5 h-3.5" /> Ver acreditación FIFA
        </span>
      )}
    </>
  );

  const classes = featured
    ? "sm:col-span-2 lg:row-span-2 relative bg-gradient-to-br from-[#0F2641] to-[#06121F] border border-[#5BB6FF]/30 p-8 sm:p-10 min-h-[320px] flex flex-col justify-between overflow-hidden"
    : "bg-[#0B1B2E] border border-white/5 p-5 transition-colors flex flex-col justify-between min-h-[150px]";

  if (!interactive) {
    return <article data-testid={`team-card-${index}`} className={classes}>{content}</article>;
  }

  return (
    <button
      type="button"
      data-testid={featured ? "team-featured-card" : `team-card-${index}`}
      onClick={select}
      aria-label={`Ver perfil de ${member.name}${member.documents?.length ? " y documentación" : ""}`}
      className={`${classes} text-left w-full cursor-pointer hover:border-[#5BB6FF]/60 hover:bg-[#102844] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BB6FF]`}
    >
      {content}
    </button>
  );
}

function MemberModal({ member, onClose }) {
  const closeButton = useRef(null);
  useEffect(() => {
    if (!member) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const keydown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", keydown);
      previousFocus?.focus?.();
    };
  }, [member, onClose]);

  if (!member) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-[#020912]/90 backdrop-blur-sm flex items-center justify-center p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="team-modal-title" className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#5BB6FF]/30 bg-[#071625] shadow-2xl shadow-black/60 p-6 sm:p-10">
        <button ref={closeButton} type="button" onClick={onClose} className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center bg-white/5 text-white hover:bg-[#0066CC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BB6FF]" aria-label="Cerrar perfil">
          <X className="w-5 h-5" />
        </button>
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#5BB6FF]">Equipo Footwork Agency</span>
        <div className="flex items-center gap-5 mt-6 pr-8">
          <MemberAvatar member={member} large />
          <div>
            <h3 id="team-modal-title" className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">{member.name}</h3>
            <p className="text-[#5BB6FF] uppercase tracking-widest text-xs mt-2">{member.role}</p>
          </div>
        </div>
        {member.bio && <p className="text-white/70 leading-relaxed mt-8">{member.bio}</p>}
        {member.documents?.length > 0 && (
          <div className="mt-9">
            <h4 className="text-sm uppercase tracking-[0.15em] text-white font-bold mb-4">Acreditaciones y documentos</h4>
            <div className="space-y-3">
              {member.documents.map((doc) => (
                <div key={doc.url} className="border border-[#5BB6FF]/25 bg-[#0F2641]/70 p-4 sm:p-5">
                  <div className="flex gap-3 items-center">
                    <FileText className="w-7 h-7 shrink-0 text-[#5BB6FF]" />
                    <div>
                      <span className="block text-white font-semibold leading-snug">{doc.title}</span>
                      <span className="text-white/45 text-xs uppercase tracking-widest">Documento original · PDF</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href={fileUrl(doc.url)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BB6FF]">
                      <ExternalLink className="w-4 h-4" /> Ver documento
                    </a>
                    <a href={fileUrl(doc.url)} download className="inline-flex items-center gap-2 border border-white/25 hover:border-[#5BB6FF] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BB6FF]">
                      <Download className="w-4 h-4" /> Descargar PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {member.linkedin_url && (
          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[#5BB6FF] hover:text-white font-semibold text-sm">
            <Linkedin className="w-4 h-4" /> LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </section>
    </div>
  );
}

export default function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
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
              Estructura <br /><span className="text-white/30">de la agencia</span>
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
            {featured && <MemberCard member={featured} featured onSelect={setSelectedMember} />}
            {others.map((m, i) => <MemberCard key={m.id} member={m} index={i} onSelect={setSelectedMember} />)}
          </div>
        )}
      </div>
      {selectedMember && <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </section>
  );
}
