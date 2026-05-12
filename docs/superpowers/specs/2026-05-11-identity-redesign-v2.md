# s2paganini.com — Identity Redesign Spec v2
**Date:** 2026-05-11
**Status:** Approved for implementation
**Supersedes:** `2026-05-11-identity-redesign.md`

---

## 0. Why v2

v1 framed the site as Creative Technologist → AI Systems Director. Direction holds. Execution did not match reality:

- Eyebrow gave creative tech equal billing with AI work — no longer accurate.
- Project grid assumed current AI work could be shown. It cannot. All BCG X work is under NDA.
- Stack was tag-dense — read as a skills inventory, not authority.

v2 fixes those three without abandoning the arc.

---

## 1. Identity & Narrative

**Direction:** The Arc — Creative Technologist → AI Systems Director.

The site is a professional presence for anyone who Googles Silvio Paganini. The story: 25 years of building things on the web — starting in creative technology, now designing agentic AI systems at BCG X. The creative past is not foregrounded. It is accessible via an archive link and referenced in the About copy, but the current chapter — agentic AI, engineering leadership — is the headline.

**What this is NOT:**
- Not a creative portfolio
- Not a CV
- Not a sales funnel
- Not a case study showcase (NDA blocks this)

**What this IS:**
- Authority signal: arc + role + stack + awards
- Honest about the NDA constraint — no fake case studies, no anonymised diagrams pretending to be proof
- A doorway to the archive for anyone curious about the back catalogue

---

## 2. Page Structure

```
HERO
ABOUT
STACK            (4 capability cards)
AWARDS
ARCHIVE CTA      ← new
FOOTER
```

Removed from v1:
- Projects grid
- Project modal
- `projects.config.json` toggle system (on `/` — moves to `/archive`)

Added in v2:
- `ArchiveCTA` section
- `/archive` route — old project grid + modal lifted here

---

## 3. Typography System

Unchanged from v1.

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Hero name | DM Serif Display | 400 | Italic |
| Stat numbers (hero + awards) | DM Serif Display | 400 | Italic |
| Archive CTA line | DM Serif Display | 400 | Italic |
| Everything else | IBM Plex Mono | 200–500 | Normal |

---

## 4. Colour Palette

Unchanged from v1.

```
--bg:          #060709
--surface:     #0B0C10
--surface-2:   #101318
--text:        #8891A0
--text-bright: #C8D2DC
--text-dim:    #343D4A
--text-faint:  #1E252F
--accent:      #00CFFF   (electric cyan)
--accent-2:    #567EA0
--accent-10:   rgba(0, 207, 255, 0.06)
--accent-20:   rgba(0, 207, 255, 0.14)
--border:      rgba(255, 255, 255, 0.05)
--border-med:  rgba(255, 255, 255, 0.09)
```

Accent usage rules unchanged: cyan is earned, not scattered. Section numbers, "BCG X" in role line, AI column number, hover states, flow field hubs, archive link arrow.

---

## 5. Hero Section

### Eyebrow (CHANGED from v1)
```
AI Systems — Engineering Leadership — Agentic Platforms
```
(v1 was: `AI Systems — Software Engineering — Creative Technology`)

### Everything else unchanged
- Hero ID: `S2PAGANINI · BCG X · SÃO PAULO`
- Name: `Silvio / Paganini` (DM Serif Display italic, massive)
- Role: `Director of Software Engineering · BCG X · São Paulo`
- Stats: 3-cell bordered grid
  - 25 / years building
  - 9 / countries
  - [X] / AI systems shipped *(placeholder — Silvio fills in)*
- Scroll indicator unchanged
- Flow field bg unchanged. Hub agents: faint cyan `rgba(0, 207, 255, alpha * 0.4)`

---

## 6. About Section

Unchanged from v1.

Copy direction (Silvio writes final):
- Italic lead paragraph — the hook, the arc
- Body — current BCG X work, what agentic AI means in practice, why the creative background informs the AI work
- Avoid: listing achievements, "passionate about", naming clients (NDA)

---

## 7. Stack Section (REWRITTEN from v1)

Four capability cards. Each = one declarative sentence + 4–5 proof items separated by `·`.

**Rules:**
- Capability statement: ≤6 words, period at end, declarative tone (no gerunds, no first-person)
- Proof: 4–5 items max, no nesting, no sub-clusters
- Column 01 (AI) gets cyan section number; otherwise visual weight equal across all four

```
01 — AI SYSTEMS
Production agentic platforms.
LangGraph · Bedrock · Azure OpenAI · pgvector · LLM evaluation

02 — CLOUD & PLATFORM
Cloud-native systems at enterprise scale.
AWS · Azure · Terraform · Kubernetes · Observability

03 — SYSTEMS & ARCHITECTURE
Distributed systems built to last.
Python · FastAPI · Event-driven · PostgreSQL · API design

04 — ENGINEERING LEADERSHIP
Building teams and the systems they run.
Strategy · Org design · Architecture review · Mentorship
```

**Rationale:** v1 stack read as inventory. Capability statement frames each card as a claim. Proof items become evidence, not menu. Silvio can tune copy without restructuring the section.

---

## 8. Awards Section

Unchanged from v1 structure. Stat numbers use DM Serif Display italic for consistency with hero.

---

## 9. Archive CTA (NEW)

Sits between Awards and Footer. Two-line block, centred, hairline border top + bottom.

```
─────────────────────────────────────────
        Before the agents, there were pixels.
              [ The archive → ]
─────────────────────────────────────────
```

**Style:**
- Line 1: DM Serif Display italic, muted (`--text` colour), medium size
- Line 2: IBM Plex Mono, link arrow uses `--accent` on hover
- Hairline borders top + bottom (`--border`)
- Vertical padding generous — this section should breathe
- Link: `/archive`

---

## 10. `/archive` Route (NEW)

Lifts the existing project grid + modal + `projects.config.json` system out of `/` and into `/archive`.

**Page structure:**
```
Back link → /
H1:  "Archive"
H2:  "2000 – 2024"
Subhead: "Things I made before the AI era."
[Project grid — current implementation]
```

**Reuse:**
- `ProjectGrid.tsx`
- `ProjectCard.tsx`
- `ProjectModal.tsx`
- `src/data/index.ts` projects data
- `projects.config.json`

**No new design work.** Visual treatment for `/archive` matches `/` palette and typography.

---

## 11. What Doesn't Change from v1

- Typography system
- Colour palette
- Hero name, role, stats grid, flow field
- About section direction
- Awards section
- Footer
- Section numbering and label component
- Overall dark palette

---

## 12. Files to Modify

| File | Change |
|------|--------|
| `src/app/page.tsx` | Remove `ProjectGrid`, `ProjectModal` imports + usage. Add `ArchiveCTA`. |
| `src/components/Hero.tsx` | Update eyebrow text + stat labels + placeholder number |
| `src/components/StackSection.tsx` | Rewrite — capability statement + proof format |
| `src/components/ArchiveCTA.tsx` | NEW — italic CTA line + link to `/archive` |
| `src/components/WebGLBackground.tsx` | Hub agent colour → faint cyan (already in v1 spec) |
| `src/data/index.ts` | Rewrite `techStacks` → 4 capability blocks (statement + proof) |
| `src/app/archive/page.tsx` | NEW — old project grid lives here |
| `src/app/archive/layout.tsx` | NEW (or share root layout) |
| `src/app/layout.tsx` | Font swap (already in v1 spec, may already be done in commit `4d30e9d`) |
| `src/app/globals.css` | Accent colour + `--font-dmserif` var (already done in `4d30e9d`) |

---

## 13. Out of Scope

- About section final copywriting (Silvio writes)
- Filling in `[X]` for AI systems shipped count (Silvio decides)
- Archive page final polish / copy beyond the spec'd header
- Writing/Notes section — explicitly deferred. No essays, no blog. Authority comes from arc + stack + awards in v2.
- SEO / metadata changes
- Any new sections beyond Archive CTA
