# NEXT_SESSION — handoff

> Read this first, then `PROJECT_STATUS.md`, the latest entries in `PROJECT_LOG.md`,
> and inspect the actual repo before making changes.

## Current objective

Build **Moonlight Protocol — Strawberry Dream**, a five-screen interactive birthday
website with a Persona 3 Reload-inspired midnight interface and a cute Strawberry
Dream bakery aesthetic.

## Current phase

**Phase 0 — Repository audit and project setup: COMPLETE.**
No website implementation exists yet. Phase 1 has **not** been authorized or started.

## Actual repository state (verified 2026-10-22)

- Local path: `D:\project_B`
- Git repo on branch `main`, tracking `origin/main`.
- Phase 0 commit: `453410b` ("Phase 0: initialize repository and project tracking"),
  pushed and verified at `refs/heads/main`.
- Remote: `https://github.com/NTL0210/Happy_Birthday_MF.git`
- Remote started empty; GitHub confirmed "This repository is empty" before initialization.
- Tooling: Git 2.52.0, Node.js 22.21.1, npm 10.9.4. No `gh`, no Python.
- Files present: `.gitignore`, `README.md`, and the five project docs.
- No `index.html`, CSS, JS, images, fonts, or audio yet.

## Repository structure (planned)

```
/
├── index.html
├── css/{tokens,base,components,screens,animations}.css
├── js/{main,state,content,audio}.js
├── js/screens/*.js
├── assets/{images,audio,fonts}/
├── tools/                     # local preview helper, no runtime dependency
├── README.md
├── PROJECT_STATUS.md
├── PROJECT_LOG.md
├── NEXT_SESSION.md
├── ASSET_SOURCES.md
└── RESEARCH_NOTES.md
```

## Important design decisions

- Midnight navy base `#101A35`, deep blue `#1C3159`, electric cyan `#52D7F5`,
  moon white `#F2F5FF`, strawberry red `#EF617B`, vanilla cream `#FFEBD5`,
  soft pink `#F4B9CB`, cocoa brown `#634B4A` (provisional; refine against assets).
- Typography candidates: Rajdhani (display/interface), Inter or Nunito Sans (body),
  Playfair Display (letter) — all licenses still to be verified.
- No proprietary Persona artwork, logos, character portraits, or music.
- No AI-generated images. Handcrafted SVG is limited to interface geometry and small
  decorations; major elements (cake, strawberries, gift, scenery) need researched,
  licensed assets or a documented coherent fallback.
- Five screens: Dark Hour → Birthday Mission → Strawberry Hunt → Cake of the
  Moonlight → Secret Letter.
- Static, no build step, relative paths, GitHub Pages root deployment.
- Phase-gated workflow: work on exactly one phase per authorization, update docs,
  verify, then stop.

## Known issues / blockers

1. No `gh` CLI. Use `git` + HTTPS + Windows Credential Manager; the Phase 0 push
   authenticated successfully.
2. No Python; local preview must use Node (a server helper is planned).
3. No assets researched, verified, downloaded, or licensed.
4. Recipient name, music choice, letter copy, and deployment authorization need user
   input (see `PROJECT_STATUS.md` → Decisions requiring user approval).

## Commands

```powershell
# Inspect
git status --short --branch
git log --oneline -5
git remote -v

# Local preview (server helper not yet created; verify before relying on this)
npx --yes http-server . -p 8080 -c-1
# then open http://localhost:8080/

# Phase commit/push (only when a phase is complete and verified)
git add -A
git commit -m "Phase N: <summary>"
git push -u origin main
```

## Exact next task

**Phase 1 — Research and asset discovery.** Do not implement the site yet.

1. Research the general visual language of Persona 3 Reload (colors, geometry,
   typography, motion, menu composition) without copying proprietary assets.
2. Research license-safe illustrations/backgrounds for: nighttime cityscape and moon,
   strawberries, cake/bakery elements, gift box, ribbons/bows, stationery/letter.
3. Prefer coherent collections over many unrelated assets. Open original source pages,
   not search snippets.
4. Verify licenses and redistribution rights; record candidates in `ASSET_SOURCES.md`
   with creator, source URL, direct URL, license name/URL, attribution, restrictions,
   and verification status. Do not download unverified assets in bulk.
5. Research fonts (Rajdhani, Inter/Nunito Sans, Playfair Display) and optional quiet,
   legally usable audio. Never use Persona 3 Reload music.
6. Record references and decisions in `RESEARCH_NOTES.md`; report gaps honestly.
7. Stop after Phase 1 and request authorization for Phase 2.

## Files to inspect before editing

- `PROJECT_STATUS.md`
- `PROJECT_LOG.md` (Phase 0 entry)
- `README.md`
- `ASSET_SOURCES.md`
- `RESEARCH_NOTES.md`
- `git status`, `git log`, `git remote -v`

## Unfinished / blocked work

- Nothing in Phase 0 is unfinished.
- Phases 1–10 are not started.
- Phase 0 is pushed. Confirm the actual commit and push state with Git before trusting
  this note.
