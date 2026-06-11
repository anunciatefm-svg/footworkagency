import { useEffect, useState, useMemo } from "react";
import { Calendar, ExternalLink, Info, Shield, Trophy } from "lucide-react";
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

function PlayerCard({ p, index }) {
  const hasInfo = Boolean(p.transfermarkt_url || p.info_url);
  const detailUrl = p.transfermarkt_url || p.info_url || LINKS.transfermarkt;
  return (
    <article
      data-testid={`player-card-${index}`}
      className="group relative bg-[#0B1B2E] border border-white/5 hover:border-[#5BB6FF]/40 transition-all duration-500 flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#102844] to-[#06121F]">
        {p.photo_url ? (
          <img
            src={fileUrl(p.photo_url)}
            alt={p.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
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
          {p.year && (
            <div>
              <span className="flex items-center gap-1.5 text-white/40 uppercase tracking-widest text-[10px] mb-1">
                <Calendar className="w-3 h-3 text-[#5BB6FF]/70" />
                Año
              </span>
              <span className="text-white/75 font-light leading-snug">{p.year}</span>
            </div>
          )}
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
          {hasInfo ? (
            <a
              data-testid={`player-card-${index}-detail-link`}
              href={detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white hover:text-[#5BB6FF] transition-colors"
            >
              {p.transfermarkt_url ? "Transfermarkt" : "Ver más"}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/40">
              <Info className="w-3 h-3" />
              Información próximamente
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
        [p.name, p.club, p.position, p.competition, p.year?.toString()]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(q))
      );
    }
    return list;
  }, [players, filter, search]);

  // Group by category, preserving PLAYER_CATEGORIES ordering (Primera → Sub-15).
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
            Ordenados desde Primera División hacia Sub-15 e incorporando jugadores OFI, con club, competencia y posición cuando está disponible en Transfermarkt.
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
            placeholder="Buscar nombre, club, año o posición..."
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
                    <PlayerCard key={p.id} p={p} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
