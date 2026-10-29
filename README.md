# Footwork Agency — Web oficial

Sitio web institucional desarrollado con React. El contenido de jugadores y equipo se guarda en archivos JSON: no requiere backend ni una base de datos. El repositorio incluye fotografías y documentos para servirlos desde el mismo dominio en Vercel.

## Actualización del 29 de octubre de 2026

Se incorporaron los pedidos de Emiliano Martínez del **9 y 11 de setiembre de 2026**:

- **Rodrigo Pintado** — Sportivo Bella Italia, Primera División C. Foto y enlace a Transfermarkt.
- **Fabricio Vidal** — Sportivo Bella Italia, Primera División C. Foto y enlace a Transfermarkt.
- **Emiliano Melo** — CSyD Paso de la Arena, Divisional D. Foto y enlace a Transfermarkt.
- **Agustín Linares** — CSyD Paso de la Arena, Divisional D. Foto; no se informó enlace a Transfermarkt.
- **Mauro Alonso** y **Fernando Flori** — sus tarjetas del equipo permiten abrir el perfil y consultar o descargar las licencias FIFA originales recibidas por WhatsApp.
- **Iván Amaya** — eliminado de la estructura.
- **Facundo Moreira** — se actualizó su imagen principal y el club a Deportivo Maldonado. Se conserva la fotografía anterior en la galería. Por su generación 2009 se muestra en Sub-17. La competencia actual precisa no fue indicada por el cliente y se dejó sin especificar.

Se corrigieron los enlaces a fotos inexistentes de Joaquín Parceriza, se eliminó una gran copia duplicada e innecesaria del listado de jugadores y se usa el logo local para no depender de un dominio externo. También se habilitó el cierre con la tecla Escape en fichas de jugadores y del equipo.

**Nota:** Las altas y cambios se basan en los mensajes escritos y archivos adjuntos del chat. Los mensajes de voz no fueron transcritos, por lo que cualquier instrucción exclusiva de los audios debe contrastarse con el cliente antes de publicar.

## Modificar el plantel

Archivo: `frontend/src/data/players.json`.

```json
{
  "id": "nombre-apellido",
  "name": "Nombre Apellido",
  "category": "Primera División",
  "order": 118,
  "position": null,
  "club": "Club",
  "competition": "Divisional",
  "photo_url": "/photos/gallery/nombre-apellido/01.jpg",
  "gallery": ["/photos/gallery/nombre-apellido/01.jpg"],
  "transfermarkt_url": null,
  "info_url": null
}
```

Categorías: `Primera División`, `Sub-19`, `Sub-17`, `Sub-16`, `Sub-15` y `Jugadores OFI`. La categoría se usa como agrupación de la web; la competición específica va en el campo `competition`. Si no tenés un dato, dejalo en `null` en lugar de inventarlo. Los archivos deben existir exactamente con la ruta declarada.

## Actualizar la estructura y los documentos

Archivo: `frontend/src/data/team.json`. Los perfiles con biografía, LinkedIn o documentos son clicables. Las licencias PDF están en `frontend/public/documents/`.

Para agregar documentos a un integrante:

```json
"documents": [
  {
    "title": "Nombre del documento",
    "url": "/documents/nombre-del-archivo.pdf",
    "type": "PDF"
  }
]
```

Las acreditaciones son documentos que remitió el cliente; mostrarlas no implica una comprobación en tiempo real de la vigencia del registro FIFA.

## Verificar el contenido

Desde la carpeta principal, con Python 3 disponible:

```bash
python scripts/check_content.py
```

Comprueba identificadores duplicados y rutas de imágenes e informes de jugadores y documentación del equipo.

## Ejecución local

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

Para compilar: `CI=false npm run build`.

## Publicar en Vercel

Importá el proyecto en Vercel utilizando el archivo `vercel.json` de la raíz. No hay variables de entorno obligatorias para los datos estáticos. Cada cambio publicado en el repositorio desplegado genera una nueva compilación.

## Contacto institucional

- WhatsApp: +598 93 354 131
- Correo: footworkag@gmail.com
- Instagram: https://www.instagram.com/footworkagency/
- LinkedIn: https://www.linkedin.com/company/footwork-agency/
