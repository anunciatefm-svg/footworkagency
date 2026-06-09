# Footwork Agency — Web oficial

Sitio web institucional 100 % estático. Sin backend, sin base de datos, sin servicios externos. Todo se edita desde GitHub y Vercel publica solo.

---

## ✏️ Cómo editar contenido

### Cambiar jugadores
Editá [`frontend/src/data/players.json`](frontend/src/data/players.json). Estructura por jugador:

```json
{
  "id": "alvaro-san-emeterio",
  "name": "Alvaro San Emeterio",
  "category": "Primera División",
  "order": 100,
  "position": "Defensa central",
  "club": "Club X",
  "photo_url": "/photos/alvaro-san-emeterio.jpg",
  "transfermarkt_url": "https://www.transfermarkt.es/...",
  "info_url": null
}
```

- **Agregar jugador:** copiá un objeto del JSON, cambialo, ponele un `order` mayor en su categoría.
- **Cambiar categoría:** una de `Primera División`, `Sub-19`, `Sub-18`, `Sub-17`, `Sub-16`, `Sub-15`.
- **Borrar jugador:** eliminás el objeto del JSON.

### Sumar foto nueva
1. Subí el archivo a `frontend/public/photos/` (formato `.jpg`, ideal 800 × 1000 px, < 200 KB).
2. Llamalo igual que el `id` del jugador: `juan-perez.jpg`.
3. En el JSON, completá `"photo_url": "/photos/juan-perez.jpg"`.

### Cambiar el equipo / estructura
Editá [`frontend/src/data/team.json`](frontend/src/data/team.json). Mismo principio.

### Cambiar textos de servicios, timeline, residencia, etc.
Están en [`frontend/src/lib/constants.js`](frontend/src/lib/constants.js).

---

## 🚀 Deploy en Vercel

1. Importá este repo en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta `vercel.json` y configura todo solo. Si te pregunta:
   - Framework Preset: **Other**
   - Install Command: `cd frontend && npm install --legacy-peer-deps`
   - Build Command: `cd frontend && CI=false npm run build`
   - Output Directory: `frontend/build`
3. **No requiere variables de entorno** — todo el contenido es estático.
4. Click en Deploy. En 1–2 minutos está online.

Cada `git push` redeploya automáticamente. Las fotos viven en la CDN de Vercel (carga instantánea).

---

## 🛠️ Correr localmente

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

Abre `http://localhost:3000`.

---

## 📞 Datos institucionales

- **WhatsApp:** +598 98 681 610
- **Email:** footworkag@gmail.com
- **Instagram:** [@footworkagency](https://www.instagram.com/footworkagency/)
- **Transfermarkt:** [Perfil oficial](https://www.transfermarkt.es/footwork-agency/beraterfirma/berater/11936)
- **Residencia:** Enrique Turini 949, Prado, Montevideo
- **Clínica Aurum:** Charrúa 2379, Montevideo
