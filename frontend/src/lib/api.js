// Static data source (no backend). Edit JSON files at /src/data/ and push to GitHub
// → Vercel redeploys automatically.
import playersData from "../data/players.json";
import teamData from "../data/team.json";

export const fetchPlayers = async () => {
  // sort by order to honour the Primera → Sub-15 layout
  return [...playersData].sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const fetchTeam = async () => {
  return [...teamData].sort((a, b) => (a.order || 0) - (b.order || 0));
};

// kept for backwards compatibility with existing imports (Players.jsx, Team.jsx)
export const fileUrl = (urlOrPath) => {
  if (!urlOrPath || typeof urlOrPath !== "string") return "";
  return urlOrPath; // already an absolute path like /photos/xxx.jpg
};
