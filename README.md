# Moonlight Protocol — Strawberry Dream

A personalized, interactive birthday website that blends a Persona 3 Reload-inspired
midnight interface language with a soft Strawberry Dream bakery aesthetic.

The experience is a five-screen journey:

1. **The Dark Hour** — opening transmission and invitation
2. **Birthday Mission** — objectives and progress
3. **Strawberry Hunt** — find five strawberries
4. **Cake of the Moonlight** — decorate a cake and make a wish
5. **The Secret Letter** — a personal birthday message

Target duration: 2–4 minutes.

## Project status

**Phase 2 — Asset acquisition and static scaffold: COMPLETE**

The repository now contains the licensed visual/audio assets, self-hosted fonts, the
design-system stylesheets, and a navigable static scaffold for all five screens. The
screen content is intentionally placeholder copy; the hunt, cake controls, final letter,
and recipient-specific copy are Phase 3 work.

See [`PROJECT_STATUS.md`](PROJECT_STATUS.md) for the authoritative phase state, QA
results, and pending inputs.

## Technical approach

- HTML5, CSS3, and vanilla JavaScript with ES modules
- No framework, backend, database, or build step
- Static hosting on GitHub Pages (`main` branch, repository root)
- Relative asset paths so the site works from a repository subpath
- All runtime assets and fonts are local — no CDN requests
- No AI-generated imagery; every external asset has verified provenance
- Audio is muted by default and never required for navigation

## Repository structure

```text
/
├── index.html
├── .nojekyll
├── css/
│   ├── fonts.css         self-hosted @font-face declarations
│   ├── tokens.css        color, type, spacing, layout, motion tokens
│   ├── base.css          reset, night scene, shell, typography, focus states
│   ├── components.css    buttons, panels, controls, asset frames, credits dialog
│   ├── screens.css       per-screen composition and responsive layouts
│   └── animations.css    motion primitives and reduced-motion overrides
├── js/
│   ├── main.js           screen controller, focus management, UI wiring
│   ├── state.js          in-memory experience state
│   ├── content.js        screen metadata and audio paths
│   └── audio.js          optional music/SFX controller with fallback
├── assets/
│   ├── images/           optimized background and illustration assets
│   ├── audio/            optional background music and UI SFX
│   └── fonts/            WOFF2 font files and OFL license texts
├── tools/
│   └── serve.mjs         dependency-free local preview server
├── PROJECT_STATUS.md
└── README.md
```

## Local preview

ES modules require an HTTP origin; opening `index.html` directly is not sufficient.

```powershell
node tools/serve.mjs
```

Then open <http://127.0.0.1:8080/> with the trailing slash. To use another port:

```powershell
$env:PORT = "8081"
node tools/serve.mjs
```

## Deployment

Planned and prepared for GitHub Pages: repository **Settings → Pages → Deploy from a
branch → `main` → `/(root)`**. The `.nojekyll` file is included so GitHub Pages serves
the static files directly. Deployment has not yet been verified.

## Credits and licenses

This is an unofficial personal gift. Required attributions are repeated in the in-page
credits dialog.

### Visual assets

| Asset | Creator | License | Source | Local file / notes |
|---|---|---|---|---|
| Background Night / Full Moon | Alekei | CC BY 3.0 | <https://opengameart.org/content/background-night> | `assets/images/bg-moonlit-sky.webp`, `-1280.webp`, `.jpg`; converted from PNG to WebP/JPEG. |
| City Skyline Silhouette | GDJ | Openclipart CC0 | <https://openclipart.org/detail/263163/city-skyline-silhouette> | `assets/images/skyline.svg`; used as a CSS mask. |
| Strawberry Birthday Cake | j4p4n | Openclipart CC0 | <https://openclipart.org/detail/304137/strawberry-birthday-cake> | `assets/images/cake.svg`; optimized, 7 candle groups, 9 berry groups, semantic group IDs/data roles. |
| Strawberry | zeimusu | Openclipart CC0 | <https://openclipart.org/detail/49213/strawberry> | `assets/images/strawberry.svg`; optimized. |
| Gift Box pink | monsterbraingames | Openclipart CC0 | <https://openclipart.org/detail/206057/gift-box-pink> | `assets/images/gift.svg`; optimized. |
| Pink Bow | Gigglish | Openclipart CC0 | <https://openclipart.org/detail/170156/pink-bow> | `assets/images/bow.svg`; optimized, reserved for Phase 3 accents. |
| Love Letter | mvolz | Openclipart CC0 | <https://openclipart.org/detail/296845/love-letter> | `assets/images/envelope.svg`; recolored to the project palette and optimized. |
| Open Envelope (reserve) | jhnri4 | Openclipart CC0 | <https://openclipart.org/detail/83875/open-envelope> | `assets/images/envelope-open.svg`; optional reserve, not used in the scaffold. |

The site-wide Openclipart public-domain/CC0 dedication is documented at
<https://openclipart.org/share>.

### Audio

| Asset | Creator | License | Source | Notes |
|---|---|---|---|---|
| Forgotten Lullaby — Music Box Loop | Mega Pixel Music Lab | CC BY 4.0 | <https://opengameart.org/content/forgotten-lullaby> | `assets/audio/forgotten-lullaby-music-box-loop.mp3`; 28.76 s loop. Required attribution: “Music by Mega Pixel Music Lab megapixelmusiclab.com”. |
| Kenney UI Audio | Kenney | CC0 | <https://kenney.nl/assets/ui-audio> | `assets/audio/ui/`; four selected cues converted from OGG to MP3. License text included. |

### Fonts

Rajdhani, Nunito Sans, and Playfair Display are self-hosted WOFF2 files licensed under
the **SIL Open Font License 1.1**. The full license texts are included at:

- `assets/fonts/OFL-Rajdhani.txt`
- `assets/fonts/OFL-NunitoSans.txt`
- `assets/fonts/OFL-PlayfairDisplay.txt`

## Accessibility and resilience

- Semantic landmarks, heading order, skip link, and visible `:focus-visible` states
- Keyboard and touch navigation; no hover-only or drag-only interaction
- `aria-live` screen announcements and sound-state feedback
- `prefers-reduced-motion` removes entrance, floating, and twinkle motion
- Audio is muted by default; if audio is unsupported or playback is blocked, screens
  remain fully usable and a text status is shown
- Body copy uses high-contrast moon-white/cyan on midnight navy; pink is reserved for
  accents and large text
- Background uses a WebP image with a JPEG fallback via `<picture>`

## Documentation

- [`PROJECT_STATUS.md`](PROJECT_STATUS.md) — authoritative project status and pending work

## Disclaimer

This is an unofficial personal gift. It is not affiliated with, endorsed by, or sponsored
by Atlus or SEGA. No proprietary game artwork, logos, characters, music, or extracted
assets are included.
