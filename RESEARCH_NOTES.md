# RESEARCH_NOTES — Moonlight Protocol: Strawberry Dream

Research is **not yet conducted** beyond the Phase 0 repository audit. This file
records the research plan, known constraints, and questions to resolve.

## Phase 0 findings

- Remote repository <https://github.com/NTL0210/Happy_Birthday_MF> was empty when
  audited on 2026-10-22. No existing design, code, or assets to preserve.
- Local environment is Windows with Git 2.52.0 and Node.js 22.21.1. GitHub CLI and
  Python are unavailable.
- GitHub Pages is the intended host; deployment has not been configured or tested.

## Visual references to investigate (Phase 1)

- Persona 3 Reload's general design language: midnight blue atmosphere, electric cyan
  accents, strong condensed typography, angled/geometric framing, animated menu
  transitions, high-contrast labels, restrained glow.
- JRPG menu systems with clear hierarchy, numbered/lettered navigation, and status
  panels.
- Nighttime cityscapes, full moons, clouds, and window light — license-safe sources.
- Strawberry shortcake, bakery counters, whipped cream, ribbons, envelopes, wax seals,
  and small candles — coherent, preferably hand-drawn or paper-craft style.
- Letter/stationery layouts that feel warm without becoming a generic greeting card.

## Technical documentation to consult (Phase 1–3)

- MDN: ES modules, `prefers-reduced-motion`, `<dialog>`/focus management, Web Audio or
  `<audio>` behavior, CSS custom properties, container/media queries.
- GitHub Pages: deploying from a branch, repository subpaths, `.nojekyll`.
- Google Fonts licensing and self-hosting options (SIL Open Font License).
- Asset licenses: CC0, CC BY, CC BY-SA, OFL, and any asset-specific terms.

## Design constraints (from the project brief)

- Five screens, 2–4 minute experience: Dark Hour → Birthday Mission → Strawberry Hunt
  → Cake of the Moonlight → Secret Letter.
- Emotional arc: mystery → curiosity → playfulness → warmth → personal connection.
- Avoid SaaS layouts, excess glassmorphism, random floating decoration, neon overload,
  inconsistent illustration styles, fake buttons, and placeholder assets.
- Work without prior Persona knowledge.
- Keyboard, mouse, and touch support; visible focus; semantic HTML; alt text;
  non-color-only states; reduced-motion support.
- No microphone access. No personal data collection.
- No AI-generated images and no proprietary Atlus/SEGA assets.
- Everything must work from a GitHub Pages repository subpath with relative paths.

## Working palette (provisional, Phase 0)

| Token | Value | Role |
|---|---|---|
| Midnight Navy | `#101A35` | Base background |
| Deep Blue | `#1C3159` | Panels, depth |
| Electric Cyan | `#52D7F5` | Primary accent, focus, UI lines |
| Moon White | `#F2F5FF` | Primary text |
| Strawberry Red | `#EF617B` | Strawberry/key action accent |
| Vanilla Cream | `#FFEBD5` | Letter, warm surfaces |
| Soft Pink | `#F4B9CB` | Cute secondary accent |
| Cocoa Brown | `#634B4A` | Letter text, warm shadows |

These are unvalidated against real assets and must be checked for contrast in Phase 2/3.

## Typography hypotheses (unverified)

- **Rajdhani** — condensed, technical display face for screen titles and labels.
- **Inter** or **Nunito Sans** — readable body/interface text; Nunito Sans is softer.
- **Playfair Display** — letter headline/serif warmth. Do not use serif everywhere.

Verify licenses before shipping. Prefer self-hosted WOFF2 with `font-display: swap`
and system-font fallbacks.

## Asset research questions

1. Is there a single cohesive, license-safe illustration set covering berries, cake,
   bakery items, and stationery? If not, what is the smallest coherent combination?
2. Which source provides a nighttime city/moon background that supports cyan UI without
   competing with it?
3. Can major elements be sourced under CC0 or a permissive license that allows
   redistribution in a public GitHub repository?
4. If attribution is required, where will it live so it does not damage the experience?
5. If no suitable cake/gift art is found, what non-AI fallback is visually coherent
   (e.g. a carefully art-directed paper-cut SVG set), and how is that documented?
6. Is there a quiet, legally usable instrumental (piano/music box) under 2 MB that
   loops acceptably? If not, ship with music disabled.

## Audio constraints

- No Persona 3 Reload music, with or without credit.
- Prefer CC0 or clearly permissive tracks; verify the original license page.
- Quiet by default, user-initiated playback, visible mute control, graceful failure.
- No unexpected loud sounds, no overlapping one-shots.

## Unresolved questions

- Recipient's preferred name/greeting (must not be invented).
- Whether the sender wants music at all.
- Whether the public GitHub Pages URL is acceptable for sharing.
- Final letter copy and sign-off.
- Whether an attribution footer is acceptable or a dedicated credits panel is preferred.

## Research status

**NOT STARTED.** Phase 1 will fill this file with actual sources, observations, and
license findings. Nothing here should be treated as verified research.
