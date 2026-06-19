import { useEffect, useState, useMemo } from "react";
import {
  ExternalLink,
  Info,
  Shield,
  Trophy,
  X,
  PlayCircle,
  FileText,
  Download,
  User,
  Ruler,
  Flag,
  Building2,
  Calendar,
  Image as ImageIcon,
} from "lucide-react";
import { fetchPlayers, fileUrl } from "../lib/api";
import { LINKS, PLAYER_CATEGORIES } from "../lib/constants";

const FILTERS = [{ label: "Todos", value: "all" }, ...PLAYER_CATEGORIES.map((c) => ({ label: c, value: c }))];

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

const initialColor = (name) => {
  const palette = ["#0066CC", "#1e90ff", "#3a8ddc", "#0a4a8a", "#5BB6FF"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
};


const getPrimaryPhoto = (p) => {
  // Prioridad: usar siempre la galería subida a /public/photos/gallery.
  // Esto evita depender de /photos/covers y mantiene una sola fuente de fotos.
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery[0];
  return p.photo_url || null;
};

function GalleryImage({ src, alt, onClick }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#06121F] hover:border-[#5BB6FF]/60 transition-colors"
    >
      <img
        src={fileUrl(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </button>
  );
}
const hasPlayerDetails = (p) =>
  Boolean(
    p.profile ||
      p.height ||
      p.age ||
      p.strong_foot ||
      p.nationality ||
      p.current_club ||
      p.agent ||
      p.year ||
      p.videos?.length ||
      p.reports?.length ||
      p.gallery?.length ||
      p.stats_highlights?.length ||
      p.career_history?.length ||
      p.transfermarkt_url ||
      p.info_url
  );

function DetailItem({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="border border-white/10 bg-white/[0.03] p-3">
      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/40 mb-1">
        <Icon className="w-3 h-3 text-[#5BB6FF]" />
        {label}
      </span>
      <span className="block text-sm text-white font-medium leading-snug">{value}</span>
    </div>
  );
}

function PlayerCard({ p, index, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imagePosition = p.photo_position || "center top";
  const primaryPhoto = getPrimaryPhoto(p);

  return (
    <article
      data-testid={`player-card-${index}`}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(p);
        }
      }}
      className="group relative bg-[#0B1B2E] border border-white/5 hover:border-[#5BB6FF]/40 transition-all duration-500 flex flex-col cursor-pointer focus:outline-none focus:border-[#5BB6FF] focus:ring-2 focus:ring-[#5BB6FF]/20"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#102844] to-[#06121F]">
        {primaryPhoto && !imageFailed ? (
          <img
            src={fileUrl(primaryPhoto)}
            alt={p.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            style={{ objectPosition: imagePosition }}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `radial-gradient(circle at center, ${initialColor(p.name)}30, transparent 70%)` }}
          >
            <span className="font-display text-6xl text-white/25 group-hover:text-white/45 transition-colors duration-500">
              {initials(p.name)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06121F] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-[#0066CC] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            {p.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {p.position && (
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[#5BB6FF] font-medium mb-1">
              {p.position}
            </span>
          )}
          <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight text-white font-bold leading-tight">
            {p.name}
          </h3>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 flex-1 flex flex-col">
        <div className="space-y-3 text-xs mb-4">
          <div>
            <span className="flex items-center gap-1.5 text-white/40 uppercase tracking-widest text-[10px] mb-1">
              <Shield className="w-3 h-3 text-[#5BB6FF]/70" />
              Club
            </span>
            <span className="text-white font-medium">{p.club || "Información próximamente"}</span>
          </div>
          {p.competition && (
            <div>
              <span className="flex items-center gap-1.5 text-white/40 uppercase tracking-widest text-[10px] mb-1">
                <Trophy className="w-3 h-3 text-[#5BB6FF]/70" />
                Competencia
              </span>
              <span className="text-white/75 font-light leading-snug">{p.competition}</span>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-[#5BB6FF] transition-colors">
            {hasPlayerDetails(p) ? "Ver ficha completa" : "Ver ficha"}
            <Info className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}

function PlayerModal({ player, onClose }) {
  const [heroImageFailed, setHeroImageFailed] = useState(false);

  useEffect(() => {
    setHeroImageFailed(false);
  }, [player?.id]);

  useEffect(() => {
    if (!player) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [player]);

  if (!player) return null;

  const detailUrl = player.transfermarkt_url || player.info_url || null;
  const primaryPhoto = getPrimaryPhoto(player);
  const rawGallery = player.gallery?.length ? player.gallery : primaryPhoto ? [primaryPhoto] : [];
  const gallery = Array.from(new Set(rawGallery.filter(Boolean)));
  const heroImagePosition = player.photo_position || "center top";

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#020912]/90 backdrop-blur-sm flex items-center justify-center px-4 py-6"
      onClick={onClose}
    >
      <div
        data-testid="player-detail-modal"
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#071625] border border-[#5BB6FF]/25 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-10 h-10 border border-white/10 bg-black/30 hover:bg-[#0066CC] text-white flex items-center justify-center transition-colors"
          aria-label="Cerrar ficha"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px] bg-[#06121F]">
            {primaryPhoto && !heroImageFailed ? (
              <img
                src={fileUrl(primaryPhoto)}
                alt={player.name}
                onError={() => setHeroImageFailed(true)}
                style={{ objectPosition: heroImagePosition }}
                className="w-full h-full max-h-[720px] object-cover"
              />
            ) : (
              <div
                className="min-h-[420px] flex items-center justify-center"
                style={{ background: `radial-gradient(circle at center, ${initialColor(player.name)}40, transparent 70%)` }}
              >
                <span className="font-display text-7xl text-white/25">{initials(player.name)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071625] via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 right-5">
              <span className="inline-block bg-[#0066CC] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3">
                {player.category}
              </span>
              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white font-bold leading-none">
                {player.name}
              </h3>
              {player.position && (
                <p className="text-[#5BB6FF] uppercase tracking-[0.25em] text-xs mt-3 font-medium">{player.position}</p>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">Ficha del jugador</span>
              <h4 className="font-display text-2xl sm:text-3xl uppercase text-white font-bold mt-2">Información ampliada</h4>
              <p className="text-white/55 text-sm mt-3 max-w-2xl">
                Datos principales, material de análisis, enlaces útiles y recursos para seguimiento deportivo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <DetailItem icon={Building2} label="Club" value={player.current_club || player.club} />
              <DetailItem icon={Trophy} label="Competencia" value={player.competition} />
              <DetailItem icon={User} label="Categoría / generación" value={player.year ? `${player.category} · ${player.year}` : player.category} />
              <DetailItem icon={Shield} label="Posición" value={player.position} />
              <DetailItem icon={Ruler} label="Altura" value={player.height} />
              <DetailItem icon={Calendar} label="Edad" value={player.age} />
              <DetailItem icon={Info} label="Pierna hábil" value={player.strong_foot} />
              <DetailItem icon={Flag} label="Nacionalidad" value={player.nationality} />
            </div>

            {player.profile ? (
              <section>
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Perfil del jugador</h5>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">{player.profile}</p>
              </section>
            ) : (
              <section className="border border-white/10 p-4 bg-white/[0.02]">
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Perfil del jugador</h5>
                <p className="text-white/55 text-sm font-light">
                  Información ampliada próximamente. Esta ficha ya queda preparada para cargar descripción, videos, informes, audio y más fotos.
                </p>
              </section>
            )}

            {player.stats_highlights?.length > 0 && (
              <section>
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Datos destacados</h5>
                <div className="grid sm:grid-cols-3 gap-3">
                  {player.stats_highlights.map((item) => (
                    <div key={item} className="border border-[#5BB6FF]/20 bg-[#0066CC]/10 p-4 text-white/75 text-sm leading-snug">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {gallery.length > 0 && (
              <section>
                <h5 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs mb-3">
                  <ImageIcon className="w-4 h-4 text-[#5BB6FF]" />
                  Fotos
                </h5>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {gallery.map((photo) => (
                    <a key={photo} href={fileUrl(photo)} target="_blank" rel="noopener noreferrer" title="Abrir foto">
                      <img
                        src={fileUrl(photo)}
                        alt={`${player.name} galería`}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="aspect-square w-full object-cover object-top border border-white/10 hover:border-[#5BB6FF]/60 transition-colors"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {player.career_history?.length > 0 && (
              <section>
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Trayectoria</h5>
                <div className="grid sm:grid-cols-2 gap-2">
                  {player.career_history.map((item) => (
                    <div key={item} className="text-white/65 text-sm border border-white/10 bg-white/[0.02] px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Material disponible</h5>
              <div className="flex flex-wrap gap-3">
                {player.videos?.map((video) => (
                  <a
                    key={video.url}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0055aa] text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    <PlayCircle className="w-4 h-4" />
                    {video.title || "Ver video"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}

                {player.reports?.map((report) => (
                  <a
                    key={report.url}
                    href={fileUrl(report.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#5BB6FF]/40 hover:border-[#5BB6FF] text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#5BB6FF]" />
                    {report.title || "Ver informe"}
                    <Download className="w-3 h-3" />
                  </a>
                ))}

                {detailUrl && (
                  <a
                    href={detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-[#5BB6FF] text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    {player.transfermarkt_url ? "Transfermarkt" : "Enlace externo"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {!player.videos?.length && !player.reports?.length && !detailUrl && (
                  <span className="inline-flex items-center gap-2 text-white/45 border border-white/10 px-4 py-3 text-xs uppercase tracking-widest">
                    <Info className="w-4 h-4" />
                    Material próximamente
                  </span>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetchPlayers()
      .then((data) => setPlayers(data))
      .catch(() => setPlayers([]))
      .finally(() => setLoading(false));
  }, []);

  // Filter list
  const filtered = useMemo(() => {
    let list = players;
    if (filter !== "all") list = list.filter((p) => p.category === filter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) =>
        [p.name, p.club, p.position, p.competition, p.nationality, p.current_club]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(q))
      );
    }
    return list;
  }, [players, filter, search]);

  // Group by category, preserving PLAYER_CATEGORIES ordering (Primera → Sub-15 → OFI).
  const grouped = useMemo(() => {
    const map = new Map(PLAYER_CATEGORIES.map((c) => [c, []]));
    filtered.forEach((p) => {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push(p);
    });
    // sort inside each group by order
    for (const arr of map.values()) {
      arr.sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    return Array.from(map.entries()).filter(([, arr]) => arr.length > 0);
  }, [filtered]);

  return (
    <section id="jugadores" data-testid="players-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Roster</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4">
              Jugadores <br />
              <span className="text-white/30">Representados</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
            Ordenados desde Primera División hacia Sub-15 y OFI, con club, competencia, posición y ficha ampliada cuando está disponible.
          </p>
        </div>

        <div data-testid="players-filters" className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2 flex-1">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                data-testid={`filter-${f.value}-btn`}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${
                  filter === f.value
                    ? "bg-[#0066CC] text-white"
                    : "bg-transparent text-white/65 border border-white/10 hover:border-[#5BB6FF]/60 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            data-testid="players-search-input"
            type="search"
            placeholder="Buscar nombre, club o posición..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border border-white/10 focus:border-[#5BB6FF] outline-none px-4 py-2.5 text-sm text-white placeholder:text-white/40 w-full md:w-64"
          />
        </div>

        {loading ? (
          <div className="text-white/50 text-center py-20">Cargando jugadores...</div>
        ) : grouped.length === 0 ? (
          <div data-testid="players-empty" className="text-white/50 text-center py-20 border border-white/5">
            No hay jugadores en esta categoría.
          </div>
        ) : (
          <div className="space-y-14">
            {grouped.map(([cat, arr]) => (
              <div key={cat} data-testid={`players-group-${cat}`}>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-3 mb-6">
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white font-bold">
                    <span className="text-[#5BB6FF] mr-2">·</span>
                    {cat}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">
                    {arr.length} {arr.length === 1 ? "jugador" : "jugadores"}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {arr.map((p, i) => (
                    <PlayerCard key={p.id} p={p} index={i} onSelect={setSelectedPlayer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </section>
  );
}

