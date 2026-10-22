# Moonlight Protocol — Strawberry Dream

A personalized, interactive birthday website that blends a Persona 3 Reload-inspired
midnight interface language with a soft Strawberry Dream bakery aesthetic.

The experience is a five-screen journey:

1. **The Dark Hour** — opening transmission and gift
2. **Birthday Mission** — objectives and progress
3. **Strawberry Hunt** — collect five strawberries
4. **Cake of the Moonlight** — customize a cake and make a wish
5. **The Secret Letter** — a personal birthday message

Target duration: 2–4 minutes.

## Project status

**Phase 0 — Repository audit and project setup: COMPLETE**

Only Phase 0 has been executed. No website implementation exists yet.
See [`PROJECT_STATUS.md`](PROJECT_STATUS.md) for the authoritative project status.

## Technical approach

- HTML5, CSS3, vanilla JavaScript with ES modules
- No framework, backend, database, or build step
- Static hosting on GitHub Pages (`main` branch, repository root)
- Relative asset paths so the site works from a repository subpath
- No AI-generated imagery; all external assets must be license-verified

## Planned repository structure

```
/
├── index.html
├── css/
│   ├── tokens.css        design tokens (color, type, spacing, motion)
│   ├── base.css          reset, typography, layout primitives
│   ├── components.css    buttons, panels, labels, focus states
│   ├── screens.css       per-screen composition
│   └── animations.css    reusable motion primitives
├── js/
│   ├── main.js           entry point, screen controller
│   ├── state.js          experience state and persistence
│   ├── content.js        editable copy (letter, birthday message)
│   ├── audio.js          optional audio controller
│   └── screens/          one module per screen
├── assets/
│   ├── images/           verified illustrations and backgrounds
│   ├── audio/            verified optional audio
│   └── fonts/            self-hosted font files when practical
├── tools/                local preview helpers (no runtime dependency)
└── PROJECT_STATUS.md
```

## Local preview

ES modules require an HTTP origin; opening `index.html` directly is not sufficient.
A local server will be added in Phase 3.

```powershell
# Placeholder command, verified when the server helper exists
npx --yes http-server . -p 8080 -c-1
```

Then open <http://localhost:8080/>.

## Deployment

Planned: GitHub → Repository → Settings → Pages → Deploy from a branch →
`main` → `/(root)`. Deployment is not configured or verified yet.

## Documentation

- [`PROJECT_STATUS.md`](PROJECT_STATUS.md) — authoritative project status

## Disclaimer

This is an unofficial personal gift. It is not affiliated with, endorsed by, or
sponsored by Atlus or SEGA. No proprietary game artwork, logos, music, or extracted
assets are included.
