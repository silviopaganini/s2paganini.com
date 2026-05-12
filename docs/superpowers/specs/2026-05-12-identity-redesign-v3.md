# Identity Redesign v3 — Credibility Landing

> Brainstormed 2026-05-12. Builds on v2 (already merged to `2026` branch).

## Goal

Reposition s2paganini.com from portfolio/developer-showcase to **credibility landing page** for an engineering leader who speaks and publishes on AI systems. Primary audiences: peers, talent, clients who Google you before a meeting. No selling. No CTAs.

## What Doesn't Change

- `/archive` route and ArchiveCTA — untouched
- Awards section — untouched
- Footer — untouched
- WebGL background, grain, vignette — untouched
- Overall dark aesthetic and CSS custom property system

---

## Section 1: Typography — unified design system

### Switch

| Role | Old | New |
|------|-----|-----|
| Display / serif | DM Serif Display | **Fraunces** (variable, Google Fonts) |
| Mono / chrome | IBM Plex Mono | **JetBrains Mono** (Google Fonts) |
| Body | *(none — mono used everywhere)* | **DM Sans** (Google Fonts, grotesque) |

Fraunces and JetBrains Mono match the existing slide deck (`Agentic Workflows for the Full PDLC`), creating a coherent design system across speaking materials and web presence.

### Implementation notes

- Replace `DM_Serif_Display` with `Fraunces` in `src/app/layout.tsx`. Fraunces is a variable font — load with `weight: ['100', '900']` and `style: ['normal', 'italic']`.
- Replace `IBM_Plex_Mono` with `JetBrains_Mono` in `src/app/layout.tsx`.
- Add `DM_Sans` as third font in `src/app/layout.tsx` for body text.
- Update CSS variable names in `globals.css`: `--font-serif` (Fraunces), `--font-mono` (JetBrains Mono), add `--font-sans` (DM Sans).
- The About section body text switches from `--font-serif` to `--font-sans`.
- Hero name stays `--font-serif` italic — Fraunces italic is more editorial and variable than DM Serif Display.

---

## Section 2: Hero — stripped, repositioned

### Remove

- `hero__id` row (`S2PAGANINI · BCG X · SÃO PAULO`) — remove entirely
- `hero__eyebrow` row (`AI SYSTEMS — ENGINEERING LEADERSHIP — AGENTIC PLATFORMS`) — remove entirely
- `hero__stats` container with its border box — remove box/border, keep cycling text concept (see below)

### Add

**Tagline** — sits between the role row and the stat, in Fraunces italic:

```
From pixels to production AI systems.
```

CSS: `font-family: var(--font-serif)`, italic, ~1.1–1.3rem, `color: var(--text)` (not bright — quiet, not a heading).

**Topics row** — speaking topics as quiet monospace tags, no box, no border-container:

```
Agentic Systems  ·  LLM in Production  ·  Agentic PDLC  ·  AI at Enterprise Scale  ·  DevSecOps for AI
```

Rendered as `<span>` tags separated by `·` — or as small individual pill-style `<span>` elements with subtle border. JetBrains Mono, ~0.65rem, letter-spaced, `color: var(--text-dim)`. No interactive state.

**Cycling stat** (redesigned from glitch-morph) — single line of plain text, no border box, simple crossfade:

```
25 years building
```

→ fades to next stat → repeats. Sits below the topics row. JetBrains Mono, ~0.75rem, `color: var(--text-dim)`. Prefixed with a quiet em-dash: `— 25 years building`.

Transition: opacity fade only (300ms out, swap text, 300ms in). No scramble, no glitch. Interval: ~5s.

### Hero layout order (after changes)

```
[hero__id — REMOVED]
[hero__eyebrow — REMOVED]
[hero__name]          Silvio / Paganini  (Fraunces italic, large)
[hero__role]          Director of Software Engineering at BCG X · São Paulo, Brazil
[hero__tagline]       From pixels to production AI systems.  (Fraunces italic, quiet)
[hero__topics]        Agentic Systems · LLM in Production · Agentic PDLC · ...  (mono tags)
[hero__stat]          — 25 years building  (mono, plain text, cycling)
```

### Stat pool (16 items)

```
25 years building
3× startup founder
16× TheFWA
5× Cannes Lions
5× Awwwards
3× Webby Awards
2× Lovie Awards
100+ projects shipped
25+ agencies & studios
65 countries visited
10+ countries worked in
TheFWA judge
codedoodl.es — 8 years
Guest Lecturer · Miami Ad School
Former founder · CTO · Technical Director
BCG X · São Paulo
```

---

## Section 3: Stack section — removed entirely

The capability card section (`StackSection.tsx`, `techStacks` data, `IStack` type) is **removed**. It reads junior for a credibility landing and is not replaced with another section.

Topics already appear in the hero topics row — a dedicated Topics section would be redundant. The home page structure becomes:

```
Hero → About → Awards → Archive CTA → Footer
```

The Awards section number label (`05`) can stay as-is or be renumbered to `04` — implementation decision, not a design constraint.

---

## Section 4: About — compressed

Current: 5 long paragraphs (too much for a credibility landing — people don't read).

Replace with 3 short paragraphs:

**Paragraph 1 — current focus:**
Director of Software Engineering at BCG X, São Paulo — leading AI systems engineering across LATAM. Focused on the gap between working demo and production AI system: LLM architecture, RAG pipelines, agentic workflows, and the engineering discipline that makes AI safe to ship at scale.

**Paragraph 2 — the arc:**
Former former founder, CTO, and Technical Director. 25 years building — from generative digital art and award-winning creative systems to enterprise platforms and agentic infrastructure. The arc runs from pixels to production.

**Paragraph 3 — past companies:**
Worked with The Mill, Google Creative Lab, Huge, Stinkdigital, UNIT9, Jam3, YOOX Net-a-Porter, R/GA, North Kingdom, Hi-ReS!, and others across São Paulo, London, and New York. Former founder of FLUUUID, CTO of blkbx., Technical Director of mgxs.co.

> **Review gate:** User must approve this copy before it goes to code.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Swap fonts: Fraunces + JetBrains Mono + DM Sans |
| `src/app/globals.css` | Update `--font-serif`/`--font-mono`, add `--font-sans`; remove `hero__id`/`hero__eyebrow`/`hero__stats` box styles; add `hero__tagline`, `hero__topics`, `hero__stat` (plain) styles |
| `src/components/Hero.tsx` | Remove eyebrow rows; add tagline; add topics row; replace `<HeroStats>` with new plain cycling stat |
| `src/components/HeroStats.tsx` | Rewrite: single stat, crossfade only (no glitch), no wrapper border |
| `src/data/index.ts` | Update `heroStats` pool to 16-item list above |
| `src/app/page.tsx` | Remove `<StackSection>` import and usage |
| `src/components/About.tsx` | Replace body content with 3-paragraph version (after copy approval) |

## Files to Remove / Deprecate

- `src/components/StackSection.tsx` — remove from home page. Keep file (still imported nowhere; can delete or archive).
- `techStacks` export in `src/data/index.ts` — can be removed once `StackSection` is gone.
- `IStack` type in `src/types/index.d.ts` — can be removed once `techStacks` is gone.

## Out of Scope

- New writing/talks section (future phase)
- Photo or headshot
- SEO/metadata
- Mobile-specific layout tuning beyond what's already in globals.css
- `/archive` route changes
