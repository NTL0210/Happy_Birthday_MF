# PROJECT_STATUS — Moonlight Protocol: Strawberry Dream

- **Current phase:** Phase 1 — Research and asset discovery
- **Phase status:** Completed (research only; no implementation)
- **Last updated:** 2026-10-23 10:16 +07:00

## Project objective

Build a five-screen interactive birthday website that pairs a Persona 3 Reload-inspired
midnight interface with a cute Strawberry Dream bakery aesthetic: The Dark Hour →
Birthday Mission → Strawberry Hunt → Cake of the Moonlight → The Secret Letter.

## Phase state

- Phase 0 — Repository audit and project setup: complete, pushed, and verified.
- Phase 1 — Research and asset discovery: complete; findings recorded below.
- Phase 2 — Asset acquisition and static scaffold: not started; requires explicit
  authorization.
- Remote head remains `4b83c05` (`docs: record cleanup push`).
- Working tree contains only `.gitignore`, `README.md`, and this file. No `index.html`,
  `css/`, `js/`, `assets/`, application code, or downloaded assets are in the repo.
- Phase 1 research previews were inspected outside the repo in the temporary research
  folder; nothing was committed or pushed.

## Research conclusions

### Visual language

Reviewed the official Steam store presentation and screenshots for *Persona 3 Reload*
(app `2161700`) at a high level only. No screenshots, character art, logos, music, or
other proprietary assets were copied, downloaded into the repo, or are planned for use.

Useful, non-copyable cues:

- Royal-blue and navy fields cut by hard diagonals and angled panels
- White condensed/italic display text with strong scale contrast
- Cyan keylines with restrained strawberry-pink and warm-yellow accents
- High-contrast panels, speed-line motifs, and animated wipes
- Screens that feel like a stylish interface, not a generic centered card layout

The site should be an original composition. It must not reproduce a specific P3R
screen, character pose, logo, menu layout, or soundtrack.

### Art direction

- Painterly moonlit sky as the cinematic base, with a flat deep-blue city silhouette
  layered at the bottom.
- Flat, outlined, cute vector illustrations for the cake, gift, strawberry, bow, and
  letter. These sit inside hard-edged cyan/navy interface panels, creating a deliberate
  "midnight protocol + strawberry bakery" contrast.
- Recolor sourced SVGs to the project palette rather than mixing unrelated illustration
  styles. Keep line weight and shading consistent.
- Use handcrafted CSS/SVG only for interface geometry, stars, tiny flowers, glows,
  speed lines, and a wax-seal treatment. Major illustrations must come from the sourced
  assets.

### Palette and contrast

Provisional palette:

- Midnight Navy `#101A35`
- Deep Blue `#1C3159`
- Electric Cyan `#52D7F5`
- Moon White `#F2F5FF`
- Strawberry Red `#EF617B`
- Vanilla Cream `#FFEBD5`
- Soft Pink `#F4B9CB`
- Cocoa Brown `#634B4A`

Measured WCAG contrast notes:

- Moon White on Midnight Navy: 15.79:1
- Electric Cyan on Midnight Navy: 10.15:1
- Strawberry Red on Midnight Navy: 5.46:1
- Strawberry Red on Deep Blue: 4.08:1 (large text/accents only)
- Add a text-safe `Strawberry Light #FF8FA3` (5.95:1 on Deep Blue) for small pink text.
- Use Moon White or Electric Cyan for body copy on dark panels; use Cocoa Brown or navy
  text on cream/pink surfaces. Do not use Strawberry Red as small text on cream.

## Selected visual assets

All Openclipart items are covered by the site-wide public-domain/CC0 dedication at
<https://openclipart.org/share>. Each detail page was opened to verify creator, title,
description, and download availability.

| Asset | Creator | License | Source | Planned local file | Use |
|---|---|---|---|---|---|
| Background Night / Full Moon | Alekei | CC BY 3.0 | <https://opengameart.org/content/background-night> | `assets/images/bg-moonlit-sky.webp` | 1920×1080 painterly moon/cloud sky; cinematic base. Attribution required. |
| City Skyline Silhouette | GDJ | Openclipart CC0 | <https://openclipart.org/detail/263163/city-skyline-silhouette> | `assets/images/skyline.svg` | Generic skyline silhouette, recolored deep blue; layering over the moon sky. |
| Strawberry Birthday Cake | j4p4n | Openclipart CC0 | <https://openclipart.org/detail/304137/strawberry-birthday-cake> | `assets/images/cake.svg` | Cake hero and cake-screen base. SVG has separate layer/frosting paths, 7 candle groups, and 10 berry groups; supports candle-count and flavor variants. 523 KB pre-optimization. |
| Strawberry | zeimusu | Openclipart CC0 | <https://openclipart.org/detail/49213/strawberry> | `assets/images/strawberry.svg` | Flat strawberry for hunt targets, progress marks, and small accents. |
| Gift Box pink | monsterbraingames | Openclipart CC0 | <https://openclipart.org/detail/206057/gift-box-pink> | `assets/images/gift.svg` | Birthday Mission gift box; flat pink box with white ribbon. |
| Pink Bow | Gigglish | Openclipart CC0 | <https://openclipart.org/detail/170156/pink-bow> | `assets/images/bow.svg` | Gift/letter accent and decorative divider. |
| Love Letter | mvolz | Openclipart CC0 | <https://openclipart.org/detail/296845/love-letter> | `assets/images/envelope.svg` | Closed cream envelope with heart; recolor envelope to vanilla and heart to strawberry. Use a CSS/letter-card reveal for the opening moment. |
| Open Envelope (reserve) | jhnri4 | Openclipart CC0 | <https://openclipart.org/detail/83875/open-envelope> | `assets/images/envelope-open.svg` | Optional explicit open state; only if the CSS reveal does not read clearly. Style is plainer than the selected letter. |

### Visual assets considered but not selected

- **Parallax City - Night (4 Colors)** — FisherG, CC0. Pixel/Game Boy palette clashes
  with the cinematic sky and flat vector illustrations.
- **Strawberry Cake Platform Tileset** — lux_pp, CC0. Hand-painted side-view cake tiles
  are attractive but do not match the clean outlined vector family.
- **Neapolitan Dessert Game Kit + UI** — Darkvinter, CC BY 4.0 / 3.0. Cute and coherent,
  but adds another style and attribution burden; keep as a fallback only.
- **Gift Box** — Clint Bellanger, CC0. Only a `.blend` file plus a 3D-render preview;
  not a usable 2D illustration for this project.
- **Kawaii Letter And Envelope** — GDJ, CC0. Anthropomorphic face is too cartoonish for
  the emotional final letter.
- **Background Dark City** — gfx0, CC BY 3.0. Only 900×672 and sketchy; insufficient for
  a full-screen cinematic background.
- **City Night - Background** — andersen, CC0. Large, but hand-drawn and busy; would
  fight the interface and require heavy recoloring.
- **Kenney UI Pack** — Kenney, CC0. Generic rounded UI does not match the hard-edged,
  angled interface direction; interface geometry will be handcrafted.
- **Strawberries** — gogohop, CC0. Detailed group with shading; the single flat
  strawberry is more consistent at UI and hunt sizes.

## Typography

All three fonts are SIL Open Font License 1.1 and are planned for self-hosting as WOFF2.
No Google Fonts CDN or other runtime font request will be used.

| Font | Role | License source | Planned local files |
|---|---|---|---|
| Rajdhani | Display, labels, interface numerals | <https://raw.githubusercontent.com/google/fonts/main/ofl/rajdhani/OFL.txt> | `assets/fonts/rajdhani-*.woff2` |
| Nunito Sans | Body and supporting copy | <https://raw.githubusercontent.com/google/fonts/main/ofl/nunitosans/OFL.txt> | `assets/fonts/nunito-sans-*.woff2` |
| Playfair Display | Letter and romantic display lines | <https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/OFL.txt> | `assets/fonts/playfair-display-*.woff2` |

Playfair Display has a reserved font name; do not rename a modified derivative. Ship the
OFL text alongside the font files.

## Audio

Audio is optional. The site will start muted and expose a clear sound control; music must
not autoplay or be required for any interaction.

| Candidate | Creator | License | Source | Notes |
|---|---|---|---|---|
| Forgotten Lullaby — Music Box Loop | Mega Pixel Music Lab | CC BY 4.0 (also offered as CC BY 3.0 / CC BY-SA) | <https://opengameart.org/content/forgotten-lullaby> | Selected background candidate. 28 seconds, 613 KB MP3, explicitly loopable. Attribution: “Music by Mega Pixel Music Lab megapixelmusiclab.com”. |
| Kenney UI Audio | Kenney | CC0 | <https://kenney.nl/assets/ui-audio> | Selected SFX source. 50 interface sounds; use a restrained subset for hover/click/confirm/collect/complete. |
| Bedtime Music Box | Machine | CC BY 3.0 | <https://opengameart.org/content/bedtime-music-box> | Fallback if the selected loop feels too repetitive. 770 KB MP3. |
| Music Box Anthem ~ Wandering Hearts | Mid-Air Machine | CC BY 3.0 | <https://opengameart.org/content/music-box-anthem-wandering-hearts> | Fallback for a more melodic, wistful tone. 2 MB MP3. |

No Persona/Atlus/SEGA music will be used. The selected loop is 28 seconds, so it will be
kept at low volume and under a user-controlled mute toggle. Subjective auditioning was not
possible in this environment; duration and file metadata were checked, but final audio
approval remains a human listening decision.

## Screen and interaction direction

1. **The Dark Hour** — full-bleed moon sky and skyline, title, short transmission, and a
   single “Begin” action. Establish the midnight protocol and the strawberry-pink accent.
2. **Birthday Mission** — gift box opens into a mission panel with objectives and
   progress. Show that the experience is short and playful.
3. **Strawberry Hunt** — five strawberries hidden among the night scene; each is a
   focusable button, not pointer-only. Announce progress with `aria-live`.
4. **Cake of the Moonlight** — cake hero with three visible choices: cream flavor,
   decoration, and one candle vs. a group of candles. End with a wish confirmation.
5. **The Secret Letter** — envelope opens to a Playfair Display letter, followed by a
   replay action and small credits disclosure.

Accessibility and resilience requirements for implementation:

- Semantic landmarks, logical heading order, visible `:focus-visible` styles
- Keyboard and touch parity; no drag-only or hover-only interaction
- `prefers-reduced-motion` path removes parallax, floating, and shimmer
- Body text contrast at least 4.5:1; large text at least 3:1
- Audio muted by default; if playback fails, all screens still work and a text status is
  shown
- No external runtime dependencies; assets and fonts are local

## Gaps and risks

- The selected assets come from several creators. Palette recoloring, consistent
  outlines, shadows, and glow treatment must unify them; do not mix the hand-painted cake
  tileset with the flat vector cake.
- The cake SVG is 523 KB, Inkscape-heavy, and uses generic IDs. Phase 2 must strip
  metadata, optimize it, rename groups, and verify candle hiding and frosting recoloring
  in a browser before relying on it.
- The Love Letter is a closed envelope. The opening will be a CSS/letter-card reveal; the
  alternate open-envelope asset is only a reserve and needs a style test if used.
- CC BY assets require visible attribution: the moon background and music. Plan a compact
  credits disclosure on the final screen and in `README.md`.
- Recipient name/greeting, final letter copy, and whether to use music are still pending
  user input.
- No local preview server or browser QA has been set up yet; that belongs to Phase 2/3.
- `README.md` still describes the Phase 0 state. This file is authoritative; update the
  README when implementation begins.

## Phase 1 exit criteria

- [x] Reviewed P3R interface language at a high level without copying assets
- [x] Verified visual candidates in their original source pages
- [x] Verified licenses and provenance for selected assets
- [x] Verified OFL licenses for three font families
- [x] Identified optional background music and SFX sources
- [x] Confirmed cake SVG editability (7 candle groups, 10 berry groups, separate layers)
- [x] Documented style gaps, licensing obligations, and accessibility direction
- [x] Kept the repository free of application code and downloaded assets
- [ ] Human listening/approval of the selected music loop (pending)
- [ ] Recipient-specific name and final letter copy (pending user input)

## Next action

Wait for explicit authorization before Phase 2. Do not download assets into the repo,
add application code, commit, or push until that authorization is given.
