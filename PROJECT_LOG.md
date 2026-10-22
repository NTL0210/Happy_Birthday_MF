# PROJECT_LOG — Moonlight Protocol: Strawberry Dream

Chronological record. Entries are appended; failures are recorded as they happened
and are not rewritten to look successful. All times are local (+07:00 unless noted).

---

## Phase 0 — Repository audit and project setup

**Date/time:** 2026-10-22 22:26–22:28 (+07:00)
**Status:** COMPLETE

### Context

The project directory `D:\project_B` was expected to contain an existing repository
for <https://github.com/NTL0210/Happy_Birthday_MF>. It contained no files at all and
was not a Git repository.

### Files created

- `.gitignore`
- `README.md`
- `PROJECT_STATUS.md`
- `PROJECT_LOG.md` (this file)
- `NEXT_SESSION.md`
- `ASSET_SOURCES.md`
- `RESEARCH_NOTES.md`

### Files modified

- None (greenfield initialization; no existing files existed).

### Files deleted

- None.

### Commands executed and actual results

| Command / action | Result |
|---|---|
| `Get-ChildItem -Force` in `D:\project_B` | No entries; directory empty |
| `git rev-parse --is-inside-work-tree` | Failed: not a Git repository (expected) |
| `gh --version`, `gh auth status` | `gh` not installed; cannot use GitHub CLI |
| `node --version` | `v22.21.1` |
| `npm --version` | `10.9.4` |
| `python --version` | Not available (Microsoft Store alias error) |
| `git config --global user.name` | `NTL0210` |
| `git config --global user.email` | `02102004ntl@gmail.com` |
| `git config --global credential.helper` | `manager` |
| Fetched `https://github.com/NTL0210/Happy_Birthday_MF` | Page loads; GitHub reports **"This repository is empty."** |
| `git init -b main` | Initialized empty repository on `main` |
| `git remote add origin https://github.com/NTL0210/Happy_Birthday_MF.git` | Added |
| `git remote -v` | `origin` fetch/push URLs correct |
| `git ls-remote --heads origin` (first attempt) | Failed: `'origin' does not appear to be a git repository` |
| `git ls-remote --heads origin` (re-run) | Succeeded with no output; remote had no branch heads (empty repo) |
| `git status --short --branch` | `## No commits yet on main` |
| `git add -A` + `git commit` | Commit `453410b` — 7 files, 651 insertions |
| `git push -u origin main` | Created remote `main`; PowerShell surfaced Git's stderr as a non-zero exit, but the branch was created |
| `git ls-remote --heads origin` (post-push) | `453410b83318f630d8e99e24e6ed2e68900ea30d refs/heads/main` |
| GitHub commits page | Shows commit `453410b` on `main` |

### Important decisions

- **Static, dependency-free architecture.** HTML5 + CSS3 + vanilla ES modules,
  hosted from the repository root on GitHub Pages. No build step, framework, backend,
  database, authentication, or runtime package dependency.
- **Planned structure** documented in `README.md`: `index.html`, `css/`, `js/`,
  `assets/{images,audio,fonts}`, `tools/`.
- **Root-relative deployment paths avoided.** All runtime asset references will be
  relative (e.g. `./assets/images/...`) so the site works from the
  `/Happy_Birthday_MF/` repository subpath.
- **Git workflow.** Work proceeds phase by phase; a commit/push happens only when a
  phase is complete and verified, per user instruction. No force operations.
- **Documentation-first.** Phase 0 intentionally contains no website code; the next
  phase is research and asset discovery, not implementation.
- **Asset policy.** No AI-generated images. Every external asset must be traced to an
  original source, have its license verified, and be recorded in `ASSET_SOURCES.md`.

### Failures and fixes

1. **Git remote race.** `git ls-remote` was launched in parallel with `git remote add`
   and ran before the remote existed. Re-running after the remote was configured
   succeeded. No repository damage.
2. **GitHub CLI unavailable.** Chose `git` over HTTPS with Windows Credential Manager.
   The first push authenticated successfully.
3. **PowerShell false-negative on push.** `git push` wrote progress to stderr, which
   PowerShell surfaced as a `NativeCommandError` with exit code 1. The push itself
   succeeded, confirmed independently by `git ls-remote` and the GitHub commits page.

### Actual test results

- No application tests exist yet.
- All seven documentation files were written and listed on disk before commit.
- Commit `453410b` exists locally and remotely; local `HEAD`, `origin/main`, and the
  GitHub commit page agree.
- No build, browser, or accessibility test has been run (no website exists).

### Remaining risks

- No local web server helper exists yet (Node is available; Python is not).
- All visual/audio assets and their licenses remain unselected.

### Next step

Request user authorization, then execute **Phase 1 — Research and asset discovery**
only.
