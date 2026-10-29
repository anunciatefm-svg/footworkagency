#!/usr/bin/env python3
"""Valida roster, estructura y referencias a archivos estáticos (sin dependencias extra)."""
import json
from collections import Counter
from pathlib import Path

frontend = Path(__file__).resolve().parents[1] / "frontend"
players = json.loads((frontend / "src/data/players.json").read_text(encoding="utf-8"))
team = json.loads((frontend / "src/data/team.json").read_text(encoding="utf-8"))
errors = []

for label, records in [("jugador", players), ("integrante", team)]:
    ids = Counter(record["id"] for record in records)
    errors.extend(f"ID duplicado de {label}: {i}" for i, count in ids.items() if count > 1)

for player in players:
    paths = [player.get("photo_url"), *player.get("gallery", [])]
    paths += [report.get("url") for report in player.get("reports", [])]
    for path in paths:
        if path and path.startswith("/") and not (frontend / "public" / path.lstrip("/")).is_file():
            errors.append(f"Archivo ausente de {player['name']}: {path}")

for member in team:
    for document in member.get("documents", []):
        path = document["url"]
        if not (frontend / "public" / path.lstrip("/")).is_file():
            errors.append(f"Documento ausente de {member['name']}: {path}")

if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print(f"OK: {len(players)} jugadores, {len(team)} integrantes, todas las fotos y documentos enlazados existen.")
