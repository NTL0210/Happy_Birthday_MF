# PROJECT_STATUS — Moonlight Protocol: Strawberry Dream

- **Current phase:** Phase 2 — Asset acquisition and static scaffold
- **Phase status:** Complete; final git verification pending
- **Last updated:** 2026-10-23 11:29 +07:00
- **Repository:** <https://github.com/NTL0210/Happy_Birthday_MF>

## Project objective

Build a five-screen interactive birthday website that pairs a Persona 3 Reload-inspired
midnight interface with a cute Strawberry Dream bakery aesthetic: The Dark Hour →
Birthday Mission → Strawberry Hunt → Cake of the Moonlight → The Secret Letter.

## Phase state

- **Phase 0 — Repository audit and project setup:** complete, pushed, and verified.
- **Phase 1 — Research and asset discovery:** complete; research commit `44ea171`.
- **Phase 2 — Asset acquisition and static scaffold:** complete; assets optimized,
  scaffold built, and browser QA passed. Commit/push verification is the only remaining
  bookkeeping step.
- **Phase 3 — Full five-screen implementation:** not started. Requires explicit
  authorization.
- Remote head before the Phase 2 push: `4b83c05` (`docs: record cleanup push`).

## Phase 2 deliverables

### Visual assets

All assets were downloaded from their original source pages, optimized locally, and
stored under `assets/images/`. No AI-generated imagery is used.

| Local file | Source / license | Phase 2 changes |
|---|---|---|
| `bg-moonlit-sky.webp` (20,796 B) | Background Night / Full Moon, Alekei, CC BY 3.0 | Converted from 1,112,684 B PNG to WebP; 1920×1080. |
| `bg-moonlit-sky-1280.webp` (10,032 B) | Same source | 1280-wide WebP for smaller viewports. |
| `bg-moonlit-sky.jpg` (52,422 B) | Same source | JPEG fallback via `<picture>`. |
| `skyline.svg` (9,954 B) | City Skyline Silhouette, GDJ, CC0 | Optimized; used as a CSS mask. |
| `cake.svg` (177,138 B) | Strawberry Birthday Cake, j4p4n, CC0 | Optimized from 522,979 B. Verified **7 candle groups, 9 berry groups, 1 plaque group**. Renamed groups to `cake-candle-*`, `cake-berry-*`, and `cake-plaque`; added `data-cake-role` attributes for Phase 3. |
| `strawberry.svg` (4,939 B) | Strawberry, zeimusu, CC0 | Optimized from 7,683 B. |
| `gift.svg` (2,753 B) | Gift Box pink, monsterbraingames, CC0 | Optimized from 6,835 B. |
| `bow.svg` (5,667 B) | Pink Bow, Gigglish, CC0 | Optimized from 12,525 B; reserved for Phase 3 accents. |
| `envelope.svg` (4,061 B) | Love Letter, mvolz, CC0 | Optimized; recolored to Vanilla Cream, Strawberry Red, and Cocoa Brown; added `data-letter-role` attributes. |
| `envelope-open.svg` (2,067 B) | Open Envelope, jhnri4, CC0 | Optimized reserve asset; not used in the scaffold. |

The cake inventory correction is important: Phase 1 recorded 10 berry groups, but the
actual optimized source contains **9**. Phase 3 should not assume 10 collectible berries
from the illustration.

### Fonts

Self-hosted WOFF2 files in `assets/fonts/`; no Google Fonts CDN or other runtime font
requests.

- Rajdhani: Latin 500, 600, 700
- Nunito Sans: Latin variable 400–700
- Playfair Display: Latin variable 500–600 and italic 500
- OFL license texts: `OFL-Rajdhani.txt`, `OFL-NunitoSans.txt`, `OFL-PlayfairDisplay.txt`

### Audio

- `assets/audio/forgotten-lullaby-music-box-loop.mp3` — 613,424 B, 28.76 s loop;
  Mega Pixel Music Lab, CC BY 4.0. Attribution required.
- `assets/audio/ui/click.mp3`, `toggle.mp3`, `collect.mp3`, `confirm.mp3` — selected
  Kenney UI Audio cues converted from OGG to MP3; CC0. License text included.
- Audio is muted by default and starts only after a user action.

### Static scaffold

- `index.html` contains semantic structure for all five screens, the ambient
  moon/skyline scene, progress display, sound toggle, skip link, credits dialog, and
  disclaimer.
- `css/fonts.css`, `tokens.css`, `base.css`, `components.css`, `screens.css`, and
  `animations.css` establish the design system and responsive layouts.
- `js/main.js` provides screen navigation, focus management, progress updates,
  document-title updates, sound toggle wiring, and credits dialog behavior.
- `js/state.js`, `content.js`, and `audio.js` keep state, metadata, and optional audio
  separate for Phase 3.
- `tools/serve.mjs` is a dependency-free local preview server; `.nojekyll` is included
  for GitHub Pages.
- `README.md` documents the structure, local preview, deployment, credits, and licenses.

The scaffold’s five screens are navigable with placeholder copy. The actual strawberry
hunt, cake customization, wish confirmation, final letter, and recipient-specific copy
remain Phase 3 work.

## Design direction retained

- Painterly moonlit sky with a deep-blue city silhouette and hard-edged cyan/navy panels.
- White condensed italic display text, cyan keylines, strawberry-pink accents, and
  vanilla/cocoa surfaces.
- Original composition only; no proprietary Atlus/SEGA artwork, logos, characters,
  screenshots, or music.

Palette:

- Midnight Navy `#101A35`
- Deep Blue `#1C3159`
- Electric Cyan `#52D7F5`
- Moon White `#F2F5FF`
- Strawberry Red `#EF617B`
- Strawberry Light `#FF8FA3` (small pink text on dark panels)
- Vanilla Cream `#FFEBD5`
- Soft Pink `#F4B9CB`
- Cocoa Brown `#634B4A`

Measured contrast references from Phase 1:

- Moon White on Midnight Navy: 15.79:1
- Electric Cyan on Midnight Navy: 10.15:1
- Strawberry Red on Midnight Navy: 5.46:1
- Strawberry Red on Deep Blue: 4.08:1 (large text/accents only)
- Strawberry Light on Deep Blue: 5.95:1

## Verification

Browser QA was run against `http://127.0.0.1:8080/` with a real Chromium session.

- Clean desktop and mobile loads: **0 console errors/warnings**, **0 failed requests**.
- All five screens switch correctly; progress updates from `01` to `05`; document title
  and `aria-live` announcements update.
- Focus moves to each screen heading after navigation; skip link moves focus to `main`;
  keyboard focus shows a visible 3 px outline.
- Credits dialog opens, traps interaction via native `showModal`, closes, and returns
  focus to the triggering button.
- Sound toggle updates `aria-pressed` and label; background music and UI cues load when
  enabled. With `window.Audio` unavailable, the control is disabled and reads
  “Sound unavailable” while all screens remain usable.
- `prefers-reduced-motion: reduce`: screen, panel, star, and target animations are
  disabled.
- No duplicate IDs.
- No horizontal overflow at 320, 390, 768, 1024, 1280, or 1920 px across all five
  screens. The two-column layouts switch to a single column at 1240 px to protect the
  hero title from overlapping the protocol panel.
- All image, font, and audio asset URLs returned HTTP 200; Playfair Display loads before
  the letter screen is displayed.

## Phase 2 exit criteria

- [x] Acquired every selected visual asset from its verified source
- [x] Optimized SVGs and converted the background to WebP/JPEG
- [x] Verified cake structure and added semantic group hooks
- [x] Recolored the love letter to the project palette
- [x] Self-hosted three OFL font families with license texts
- [x] Added the selected music loop and Kenney UI cues with license text
- [x] Built the design-system stylesheets and five-screen static scaffold
- [x] Added local preview server and `.nojekyll`
- [x] Added visible credits dialog and README attribution
- [x] Verified keyboard navigation, focus management, reduced motion, audio fallback,
      responsive layouts, console output, and network requests
- [x] Documented remaining Phase 3 work and pending human inputs

## Pending inputs and next work

- Human listening/approval of the selected music loop.
- Recipient name/greeting and final letter copy.
- Phase 3: real hunt targets and progress, cake flavor/decoration/candle controls, wish
  confirmation, letter reveal, final copy, and any screen-specific modules.
- GitHub Pages deployment has not yet been verified; the repository is prepared for
  `main` / root deployment.

## Next action

Commit and push Phase 2, verify the remote head, then stop. Do not begin Phase 3 or add
final personalized copy until the user explicitly authorizes it.
