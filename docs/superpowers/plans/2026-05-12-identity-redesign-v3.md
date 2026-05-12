# Identity Redesign v3 — Credibility Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition s2paganini.com as a credibility landing page — new typography system, stripped hero (tagline + topics + plain cycling stat), About copy compressed to 3 paragraphs, Stack section removed.

**Architecture:** Next.js 14 App Router. All changes are isolated to `src/` — no new routes, no new dependencies beyond font swap. The font swap (Task 1) must land before any visual component work so Fraunces renders correctly in dev.

**Spec reference:** `docs/superpowers/specs/2026-05-12-identity-redesign-v3.md`

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, `next/font/google`, CSS custom properties.

---

## File Structure

**Modified files:**
- `src/app/layout.tsx` — swap fonts (Task 1)
- `src/app/globals.css` — update CSS vars + hero CSS (Tasks 1, 4)
- `src/data/index.ts` — heroStats → `string[]`, remove IHeroStat import, remove techStacks, update About copy (Tasks 2, 5, 6)
- `src/types/index.d.ts` — remove IHeroStat, remove IStack (Tasks 2, 5)
- `src/components/HeroStats.tsx` — full rewrite: crossfade, string pool, no box (Task 3)
- `src/components/Hero.tsx` — remove eyebrows, add tagline + topics row, use new HeroStat (Task 4)
- `src/app/page.tsx` — remove StackSection import + usage (Task 5)

**Untouched:**
- `src/app/archive/page.tsx`
- `src/components/ArchiveCTA.tsx`
- `src/components/AwardsSection.tsx`
- `src/components/Footer.tsx`
- `src/components/About.tsx` *(component unchanged — only data changes)*
- `src/components/StackSection.tsx` *(no longer imported — leave file, don't delete)*

---

## Task 1: Font swap

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace layout.tsx fonts**

Replace the entire contents of `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
  description:
    'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM. 25 years of building — from creative technology to production AI.',
  keywords:
    'applied AI, LLM systems, RAG, agentic workflows, software engineering director, BCG X, enterprise AI, generative AI, creative technology, WebGL, three.js, React, Python, LangChain, FastAPI, MLOps, São Paulo',
  authors: [{ name: 'Silvio Paganini' }],
  openGraph: {
    title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
    description:
      'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM. 25 years of building — from creative technology to production AI.',
    url: 'https://s2paganini.com',
    siteName: 's2paganini.com',
    images: [{ url: 'https://static.fluuu.id/share2.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
    description:
      'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM.',
    images: ['https://static.fluuu.id/share2.png'],
  },
  icons: { icon: '/favicon.ico' },
  verification: { google: 'WpukxYhyFW_25sgpg_fPkc0ZJLHgc-EGXYtuItG3C-4' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Update CSS custom properties in globals.css**

In `src/app/globals.css`, find the `:root` block. Replace these two lines:

```css
  --font-mono:   var(--font-ibmplex), 'Courier New', monospace;
  --font-serif:  var(--font-dmserif), Georgia, serif;
```

With:

```css
  --font-mono:   var(--font-jetbrains), 'Courier New', monospace;
  --font-serif:  var(--font-fraunces), Georgia, serif;
  --font-sans:   var(--font-dmsans), system-ui, sans-serif;
```

- [ ] **Step 3: Update About body to use --font-sans**

In `src/app/globals.css`, find `.about__body` and add `font-family: var(--font-sans);` to it. If `.about__body` has no `font-family` rule, add it. If it inherits from `.section` or body, adding an explicit rule here is correct — About body text should render in DM Sans, not mono.

- [ ] **Step 4: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (no errors — font variables are CSS-only, TypeScript is unaffected).

- [ ] **Step 5: Verify fonts load in dev**

Run: `npm run dev`
Open: `http://localhost:3000`
Confirm: hero name renders in Fraunces italic (visibly different from DM Serif Display — more editorial, stronger optical weight), mono labels render in JetBrains Mono.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat(fonts): swap to Fraunces + JetBrains Mono + DM Sans"
```

---

## Task 2: Update heroStats to string[] and remove IHeroStat

**Files:**
- Modify: `src/data/index.ts`
- Modify: `src/types/index.d.ts`

- [ ] **Step 1: Remove IHeroStat from types**

In `src/types/index.d.ts`, delete the `IHeroStat` type entirely:

```ts
// DELETE this block:
export type IHeroStat = {
  num: string
  label: string
}
```

- [ ] **Step 2: Replace heroStats in data/index.ts**

In `src/data/index.ts`, replace the entire `heroStats` export (currently an `IHeroStat[]` at the bottom of the file) with:

```ts
export const heroStats: string[] = [
  '25 years building',
  '3× startup founder',
  '16× TheFWA',
  '5× Cannes Lions',
  '5× Awwwards',
  '3× Webby Awards',
  '2× Lovie Awards',
  '100+ projects shipped',
  '25+ agencies & studios',
  '65 countries visited',
  '10+ countries worked in',
  'TheFWA judge',
  'codedoodl.es — 8 years',
  'Guest Lecturer · Miami Ad School',
  'Founder · CTO · Technical Director',
  'BCG X · São Paulo',
]
```

- [ ] **Step 3: Remove IHeroStat from the import line**

In `src/data/index.ts` line 1, remove `IHeroStat` from the import:

```ts
// Before:
import { IContent, IProject, IStack, IContact, IHeroStat } from '../types'

// After:
import { IContent, IProject, IStack, IContact } from '../types'
```

- [ ] **Step 4: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: FAIL — `HeroStats.tsx` still imports `IHeroStat` and types `pool` as `IHeroStat[]`. This is expected and will be fixed in Task 3.

- [ ] **Step 5: Commit (will be broken until Task 3)**

Do NOT commit yet — wait until Task 3 passes typecheck.

---

## Task 3: Rewrite HeroStats.tsx — crossfade only, no box

**Files:**
- Modify: `src/components/HeroStats.tsx`

- [ ] **Step 1: Replace entire HeroStats.tsx**

Replace the entire contents of `src/components/HeroStats.tsx`:

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  pool: string[]
  intervalMs?: number
}

const FADE_MS = 300
const DEFAULT_INTERVAL_MS = 5000

export default function HeroStats({ pool, intervalMs = DEFAULT_INTERVAL_MS }: Props) {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function tick() {
      setVisible(false)
      timerRef.current = setTimeout(() => {
        setIdx(i => (i + 1) % pool.length)
        setVisible(true)
        timerRef.current = setTimeout(tick, intervalMs)
      }, FADE_MS)
    }
    timerRef.current = setTimeout(tick, intervalMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pool, intervalMs])

  return (
    <div className="hero__stat-wrap">
      <p className={`hero__stat-text${visible ? '' : ' hero__stat-text--hidden'}`}>
        — {pool[idx]}
      </p>
    </div>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS — `pool: string[]` now matches the updated `heroStats: string[]` in data. `IHeroStat` is gone from both.

- [ ] **Step 3: Commit Tasks 2 + 3 together**

```bash
git add src/types/index.d.ts src/data/index.ts src/components/HeroStats.tsx
git commit -m "feat(hero): update stat pool to string[], rewrite HeroStats as crossfade"
```

---

## Task 4: Rewrite Hero.tsx and update hero CSS

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace Hero.tsx**

Replace the entire contents of `src/components/Hero.tsx`:

```tsx
'use client'

import dynamic from 'next/dynamic'
import { heroStats } from '@/data'
import HeroStats from './HeroStats'

const WebGLBackground = dynamic(() => import('./WebGLBackground'), { ssr: false })

const TOPICS = [
  'Agentic Systems',
  'LLM in Production',
  'Agentic PDLC',
  'AI at Enterprise Scale',
  'DevSecOps for AI',
]

export default function Hero() {
  return (
    <section className="hero">
      <WebGLBackground />
      <div className="hero__grain" aria-hidden />
      <div className="hero__vignette" aria-hidden />

      <div className="hero__content">
        <h1 className="hero__name">
          <em>Silvio</em>
          <br />
          <em>Paganini</em>
        </h1>

        <div className="hero__role">
          <span className="hero__role-title">Director of Software Engineering</span>
          <span className="hero__role-at">at</span>
          <span className="hero__role-company">BCG X</span>
          <span className="hero__role-loc">São Paulo, Brazil</span>
        </div>

        <p className="hero__tagline">From pixels to production AI systems.</p>

        <p className="hero__topics">
          {TOPICS.map((t, i) => (
            <span key={t}>
              <span className="hero__topic">{t}</span>
              {i < TOPICS.length - 1 && (
                <span className="hero__topic-sep"> · </span>
              )}
            </span>
          ))}
        </p>

        <HeroStats pool={heroStats} />
      </div>

      <div className="hero__scroll" aria-hidden>
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Remove old hero CSS, add new CSS**

Open `src/app/globals.css`. Make the following changes to the hero section:

**Remove** these CSS rules entirely (they reference removed HTML elements or replaced component classes):
- `.hero__id` and `.hero__id-sep`
- `.hero__eyebrow` and `.hero__eyebrow-sep`
- `.hero__stats`, `.hero__stat`, `.hero__stat-num`, `.hero__stat-label`
- `.hero__stat-num, .hero__stat-label { transition: ... }` block
- `.hero__stat-num.is-morphing`, `.hero__stat-label.is-morphing`
- `.hero__stats--single`, `.hero__stats--single .hero__stat`, `.hero__stats--single .hero__stat-num`, `.hero__stats--single .hero__stat-label`
- `.hero__stat-sub`

**Add** these new rules anywhere in the hero section of globals.css:

```css
.hero__tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(0.95rem, 1.5vw, 1.15rem);
  color: var(--text);
  margin: 0.75rem 0 0.75rem;
  line-height: 1.4;
  opacity: 0;
  animation: fadeUp 0.6s var(--ease-out) 0.7s forwards;
}

.hero__topics {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
  line-height: 1.8;
  opacity: 0;
  animation: fadeUp 0.6s var(--ease-out) 0.8s forwards;
}

.hero__topic-sep {
  color: var(--border-med);
  user-select: none;
}

.hero__stat-wrap {
  opacity: 0;
  animation: fadeUp 0.6s var(--ease-out) 0.9s forwards;
}

.hero__stat-text {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  margin: 0;
  transition: opacity 300ms ease;
}

.hero__stat-text--hidden {
  opacity: 0;
}
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS. Both `/` and `/archive` in build output.

- [ ] **Step 4: Visual check in dev**

Run: `npm run dev`
Open: `http://localhost:3000`
Confirm:
- No eyebrow rows visible
- Name renders in Fraunces italic
- Tagline "From pixels to production AI systems." appears below the role row in lighter italic
- Topics row: `Agentic Systems · LLM in Production · Agentic PDLC · AI at Enterprise Scale · DevSecOps for AI` in small mono
- Stat cycles through the pool as plain text `— 25 years building` etc., fading smoothly, no box
- No console errors

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/app/globals.css
git commit -m "feat(hero): tagline + topics row, crossfade stat, remove eyebrows"
```

---

## Task 5: Remove StackSection from home page, clean up types and data

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/data/index.ts`
- Modify: `src/types/index.d.ts`

- [ ] **Step 1: Remove StackSection from page.tsx**

Replace the entire contents of `src/app/page.tsx`:

```tsx
import { contents, contacts } from '@/data'

import Hero from '@/components/Hero'
import About from '@/components/About'
import AwardsSection from '@/components/AwardsSection'
import ArchiveCTA from '@/components/ArchiveCTA'
import Footer from '@/components/Footer'

export default function Page() {
  const intro = contents.find(c => c.type === 'intro')!
  const awards = contents.find(c => c.type === 'awards')!
  const publications = contents.find(c => c.type === 'publications')!

  return (
    <>
      <Hero />
      <About content={intro} />
      <AwardsSection awards={awards} publications={publications} />
      <ArchiveCTA />
      <Footer contacts={contacts} />
    </>
  )
}
```

- [ ] **Step 2: Remove techStacks export from data/index.ts**

In `src/data/index.ts`, delete the entire `techStacks` export block:

```ts
// DELETE this entire block:
export const techStacks: IStack[] = [
  {
    title: 'AI Systems',
    statement: 'Production agentic platforms.',
    stack: `LangGraph · Bedrock · Azure OpenAI · pgvector · LLM evaluation`,
  },
  {
    title: 'Cloud & Platform',
    statement: 'Cloud-native systems at enterprise scale.',
    stack: `AWS · Azure · Terraform · Kubernetes · Observability`,
  },
  {
    title: 'Systems & Architecture',
    statement: 'Distributed systems built to last.',
    stack: `Python · FastAPI · Event-driven · PostgreSQL · API design`,
  },
  {
    title: 'Engineering Leadership',
    statement: 'Building teams and the systems they run.',
    stack: `Strategy · Org design · Architecture review · Mentorship`,
  },
]
```

- [ ] **Step 3: Remove IStack from types and data import**

In `src/types/index.d.ts`, delete the `IStack` type:

```ts
// DELETE this block:
export type IStack = {
  title: string
  statement: string
  stack: string
}
```

In `src/data/index.ts` line 1, remove `IStack` from the import:

```ts
// Before:
import { IContent, IProject, IStack, IContact } from '../types'

// After:
import { IContent, IProject, IContact } from '../types'
```

- [ ] **Step 4: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS. `StackSection.tsx` still exists on disk and references `IStack` — but since `StackSection` is not imported anywhere, TypeScript won't type-check it unless it's in the compilation scope. If it errors, add `// @ts-nocheck` at the top of `StackSection.tsx` or delete the file entirely.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/data/index.ts src/types/index.d.ts
git commit -m "feat(stack): remove stack section and cleanup IStack type"
```

---

## Task 6: Update About copy

**Files:**
- Modify: `src/data/index.ts`

> ⚠️ **STOP — review gate.** Show the user the proposed copy below and wait for approval before implementing. Do not commit this task until the user approves.

**Proposed copy** — replace the `content` field of the `intro` entry in `contents` in `src/data/index.ts`:

```
# Hello World
Director of Software Engineering at [BCG X](https://bcg.com/x), São Paulo — leading AI systems engineering across LATAM. Focused on the gap between working demo and production AI system: LLM architecture, RAG pipelines, agentic workflows, and the engineering discipline that makes AI safe to ship at scale.

Former founder, CTO, and Technical Director. 25 years building — from generative digital art and award-winning creative systems to enterprise platforms and agentic infrastructure. The arc runs from pixels to production.

Worked with [The Mill](https://themill.com), [Google Creative Lab](https://experiments.withgoogle.com/), [Huge](https://hugeinc.com), [Stinkdigital](https://stinkdigital.com), [UNIT9](https://www.unit9.com), [Jam3](https://www.jam3.com), [YOOX Net-a-Porter](https://www.ynap.com), [R/GA](https://rga.com), [North Kingdom](https://northkingdom.com), [Hi-ReS!](https://www.hi-res.net), and others across São Paulo, London, and New York. Founder of [FLUUUID](https://fluuu.id), CTO of [blkbx.](https://www.apptension.com/case-studies/blkbx-case-study), Technical Director of [mgxs.co](https://mgxs.co). Find me on [LinkedIn](https://www.linkedin.com/in/silviopaganini) or [GitHub](https://github.com/silviopaganini) — or [email](mailto:silvio@fluuu.id) me.
```

- [ ] **Step 1: (After user approval) Update intro content**

In `src/data/index.ts`, replace the `content` field of the first entry in `contents` (type `'intro'`) with the approved copy above.

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/index.ts
git commit -m "feat(about): compress to 3-paragraph credibility copy"
```

---

## Task 7: Smoke test

**Files:** none — verification only.

- [ ] **Step 1: Full production build**

Run: `npm run build`
Expected: clean build, both `/` and `/archive` in output, no TypeScript errors.

- [ ] **Step 2: Manual journey**

Run: `npm run dev`. In a browser:

1. Open `http://localhost:3000`
2. Confirm: name in Fraunces italic, role row, tagline italic, topics row in mono, cycling stat below with em-dash prefix
3. Confirm no eyebrow rows visible
4. Scroll: About → Awards → Archive CTA → Footer. No Stack section.
5. Click "The archive →" — confirm `/archive` loads with project grid intact
6. Return to `/` — no regressions

- [ ] **Step 3: Mark complete if all passes**

No commit needed for this task.

---

## Out of Scope

- Hero visual effects (terrain, wireframe, glitch distortion with noise) — planned as separate phase
- Writing/talks section
- SEO/metadata updates
- Mobile layout tuning
- `StackSection.tsx` file deletion (leave on disk)
