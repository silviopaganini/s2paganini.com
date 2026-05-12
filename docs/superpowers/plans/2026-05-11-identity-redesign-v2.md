# Identity Redesign v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor s2paganini.com to reflect the AI/engineering-leader chapter while preserving the creative past in an archive route. Replace project grid on `/` with a clean authority signal (hero + about + stack + awards + archive CTA). Add rotating stats and rewrite stack as capability cards.

**Architecture:** Next.js App Router (current). All client components stay client. Old projects/experiments grid + modal lifted unchanged to a new `/archive` route. Home page becomes authority-signal layout. New `HeroStats` component owns rotating-stats logic. Data lives in `src/data/index.ts` with new `heroStats` array and rewritten `techStacks`.

**Tech Stack:** Next.js 14+ App Router, React 18 client components, TypeScript, CSS modules / globals.

**Spec reference:** `docs/superpowers/specs/2026-05-11-identity-redesign-v2.md`

---

## File Structure

**New files:**
- `src/app/archive/page.tsx` — Archive route, lifts old grid + modal
- `src/components/HeroStats.tsx` — 3-slot rotating stats with crossfade
- `src/components/ArchiveCTA.tsx` — Italic CTA + link to `/archive`

**Modified files:**
- `src/types/index.d.ts` — Add `IHeroStat` type
- `src/data/index.ts` — Add `heroStats` pool. Rewrite `techStacks` to 4 capability blocks (statement + proof).
- `src/components/Hero.tsx` — New eyebrow text. Replace hardcoded stats with `<HeroStats />`.
- `src/components/StackSection.tsx` — Rewrite render: capability statement (h3-equivalent) + proof items separated by `·`. Remove sub-cluster nesting logic.
- `src/app/page.tsx` — Remove `ProjectGrid`, `ProjectModal`. Add `ArchiveCTA`. Drop project state.

**Untouched (verified):**
- `src/components/ProjectGrid.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/ProjectModal.tsx`
- `src/data/projects.config.json`
- `src/app/layout.tsx`
- `src/app/globals.css` (already has cyan accent + DM Serif var from `4d30e9d`)
- `src/components/WebGLBackground.tsx` (hub cyan tint already in `4d30e9d`)
- `src/components/About.tsx`
- `src/components/AwardsSection.tsx`
- `src/components/Footer.tsx`

---

## Task 1: Add `IHeroStat` type

**Files:**
- Modify: `src/types/index.d.ts`

- [ ] **Step 1: Add type to types file**

Edit `src/types/index.d.ts` — add after the existing `IStack` type:

```ts
export type IHeroStat = {
  num: string
  label: string
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (no new errors).

- [ ] **Step 3: Commit**

```bash
git add src/types/index.d.ts
git commit -m "feat(types): add IHeroStat type for rotating hero stats"
```

---

## Task 2: Add `heroStats` pool to data

**Files:**
- Modify: `src/data/index.ts`

- [ ] **Step 1: Add import and pool**

In `src/data/index.ts`, update the type import at the top:

```ts
import { IContent, IProject, IStack, IContact, IHeroStat } from '../types'
```

Then add this export at the bottom of the file, after the `contacts` export:

```ts
export const heroStats: IHeroStat[] = [
  { num: '25', label: 'years building' },
  { num: '[X]', label: 'AI systems shipped' },
  { num: '9', label: 'countries' },
  { num: '∞', label: 'lines of code written' },
  { num: '16×', label: 'TheFWA awards' },
  { num: '5×', label: 'Cannes Lions' },
  { num: '100+', label: 'projects shipped' },
  { num: '25+', label: 'agencies & studios' },
]
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/index.ts
git commit -m "feat(data): add heroStats pool for rotating hero stats"
```

---

## Task 3: Rewrite `techStacks` to capability-card format

**Files:**
- Modify: `src/data/index.ts`

- [ ] **Step 1: Replace `techStacks` block**

Replace the entire `techStacks` export in `src/data/index.ts` with this. Note: the new shape adds a `statement` field to each entry — the type will be updated in Task 4.

```ts
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

**Do not run typecheck yet** — it will fail until Task 4 updates the type. Move directly to Task 4 and commit Tasks 3+4 together.

---

## Task 4: Update `IStack` type to include `statement`

**Files:**
- Modify: `src/types/index.d.ts`

- [ ] **Step 1: Edit `IStack`**

In `src/types/index.d.ts`, replace the existing `IStack` type:

```ts
export type IStack = {
  title: string
  statement: string
  stack: string
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS. (Note: `StackSection.tsx` parses `stack` as multi-line markdown today — it will still typecheck since the field is still `string`. We rewrite the parser in Task 5.)

- [ ] **Step 3: Commit Tasks 3 + 4 together**

```bash
git add src/types/index.d.ts src/data/index.ts
git commit -m "feat(stack): rewrite stack data as capability cards (statement + proof)"
```

---

## Task 5: Rewrite `StackSection.tsx` for new format

**Files:**
- Modify: `src/components/StackSection.tsx`

- [ ] **Step 1: Replace component body**

Replace the entire contents of `src/components/StackSection.tsx`:

```tsx
'use client'

import { IStack } from '@/types'

type Props = { stacks: IStack[] }

export default function StackSection({ stacks }: Props) {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">04</span>
          <span className="section-label__title">Stack</span>
          <div className="section-label__line" />
        </div>
        <div className="stack-grid">
          {stacks.map((col, idx) => (
            <div
              key={col.title}
              className={`stack-col${idx === 0 ? ' stack-col--hero' : ''}`}
            >
              <div className="stack-col__num">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="stack-col__title">{col.title}</div>
              <p className="stack-col__statement">{col.statement}</p>
              <p className="stack-col__proof">{col.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add basic styles for new elements**

Open `src/app/globals.css`. Find the existing `.stack-col` block. Add these new classes anywhere inside the same stylesheet (group them near the existing `.stack-col` rules):

```css
.stack-col__num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  margin-bottom: 0.5rem;
}

.stack-col--hero .stack-col__num {
  color: var(--accent);
}

.stack-col__statement {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  line-height: 1.4;
  color: var(--text-bright);
  margin: 0.25rem 0 1rem;
  max-width: 24ch;
}

.stack-col__proof {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text);
  margin: 0;
}
```

If `.stack-col__items` / `.stack-col__item` / `.stack-col__item--sub` classes still exist in `globals.css`, leave them — they are no longer referenced but removing them is out of scope for this task.

- [ ] **Step 3: Verify build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS.

- [ ] **Step 4: Manual visual check**

Run: `npm run dev`
Open: `http://localhost:3000`
Scroll to Stack section. Confirm:
- 4 cards in a grid
- Card 01 = "AI Systems" with cyan number "01", statement on next line, proof items below
- Other cards have grey numbers
- No bullet lists, no nesting

- [ ] **Step 5: Commit**

```bash
git add src/components/StackSection.tsx src/app/globals.css
git commit -m "feat(stack): render capability cards (statement + proof)"
```

---

## Task 6: Build `HeroStats` rotating component

**Files:**
- Create: `src/components/HeroStats.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/HeroStats.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { IHeroStat } from '@/types'

type Props = {
  pool: IHeroStat[]
  slotCount?: number
  intervalMs?: number
}

const DEFAULT_SLOTS = 3
const DEFAULT_INTERVAL_MS = 4000
const FADE_MS = 350

type Slot = {
  current: IHeroStat
  next: IHeroStat | null
  isFading: boolean
}

function pickDifferent(pool: IHeroStat[], exclude: IHeroStat[]): IHeroStat {
  const candidates = pool.filter(p => !exclude.includes(p))
  const fromList = candidates.length > 0 ? candidates : pool
  return fromList[Math.floor(Math.random() * fromList.length)]
}

export default function HeroStats({
  pool,
  slotCount = DEFAULT_SLOTS,
  intervalMs = DEFAULT_INTERVAL_MS,
}: Props) {
  const initial: Slot[] = Array.from({ length: slotCount }, (_, i) => ({
    current: pool[i % pool.length],
    next: null,
    isFading: false,
  }))

  const [slots, setSlots] = useState<Slot[]>(initial)

  useEffect(() => {
    if (pool.length <= slotCount) return

    const timers: ReturnType<typeof setTimeout>[] = []

    const scheduleSlot = (slotIdx: number, delay: number) => {
      const t = setTimeout(function tick() {
        setSlots(prev => {
          const visible = prev.map(s => s.current)
          const next = pickDifferent(pool, visible)
          const updated = [...prev]
          updated[slotIdx] = { ...updated[slotIdx], next, isFading: true }
          return updated
        })

        const swap = setTimeout(() => {
          setSlots(prev => {
            const updated = [...prev]
            const s = updated[slotIdx]
            if (s.next) {
              updated[slotIdx] = { current: s.next, next: null, isFading: false }
            }
            return updated
          })
        }, FADE_MS)
        timers.push(swap)

        const nextTick = setTimeout(tick, intervalMs)
        timers.push(nextTick)
      }, delay)
      timers.push(t)
    }

    for (let i = 0; i < slotCount; i++) {
      scheduleSlot(i, intervalMs + i * (intervalMs / slotCount))
    }

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [pool, slotCount, intervalMs])

  return (
    <div className="hero__stats">
      {slots.map((slot, i) => (
        <div className="hero__stat" key={i}>
          <span
            className={`hero__stat-num${slot.isFading ? ' is-fading' : ''}`}
          >
            {slot.isFading && slot.next ? slot.next.num : slot.current.num}
          </span>
          <span
            className={`hero__stat-label${slot.isFading ? ' is-fading' : ''}`}
          >
            {slot.isFading && slot.next ? slot.next.label : slot.current.label}
          </span>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Add fade CSS**

Open `src/app/globals.css`. Find the existing `.hero__stat-num` and `.hero__stat-label` rules. Add these new transition rules near them:

```css
.hero__stat-num,
.hero__stat-label {
  transition: opacity 350ms ease;
}

.hero__stat-num.is-fading,
.hero__stat-label.is-fading {
  opacity: 0;
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroStats.tsx src/app/globals.css
git commit -m "feat(hero): add rotating HeroStats component with crossfade"
```

---

## Task 7: Update `Hero.tsx` — eyebrow + integrate `HeroStats`

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace component**

Replace the entire contents of `src/components/Hero.tsx`:

```tsx
'use client'

import dynamic from 'next/dynamic'
import { heroStats } from '@/data'
import HeroStats from './HeroStats'

const WebGLBackground = dynamic(() => import('./WebGLBackground'), { ssr: false })

export default function Hero() {
  return (
    <section className="hero">
      <WebGLBackground />
      <div className="hero__grain" aria-hidden />
      <div className="hero__vignette" aria-hidden />

      <div className="hero__content">
        <p className="hero__id" aria-hidden>
          <span>S2PAGANINI</span>
          <span className="hero__id-sep">·</span>
          <span>BCG X · SÃO PAULO</span>
        </p>

        <p className="hero__eyebrow">
          <span>AI Systems</span>
          <span className="hero__eyebrow-sep">—</span>
          <span>Engineering Leadership</span>
          <span className="hero__eyebrow-sep">—</span>
          <span>Agentic Platforms</span>
        </p>

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

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev`
Open: `http://localhost:3000`
Confirm:
- Eyebrow reads: `AI Systems — Engineering Leadership — Agentic Platforms`
- 3 stat cells visible (not 4)
- After ~4 seconds, stat values fade out and switch to new values
- No console errors
- Country flag emojis are gone

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(hero): new eyebrow text, rotating stats via HeroStats"
```

---

## Task 8: Build `ArchiveCTA` component

**Files:**
- Create: `src/components/ArchiveCTA.tsx`

- [ ] **Step 1: Create component**

Create `src/components/ArchiveCTA.tsx`:

```tsx
import Link from 'next/link'

export default function ArchiveCTA() {
  return (
    <section className="archive-cta">
      <div className="container archive-cta__inner">
        <p className="archive-cta__line">
          <em>Before the agents, there were pixels.</em>
        </p>
        <Link href="/archive" className="archive-cta__link">
          The archive <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add styles**

Open `src/app/globals.css` and add this block near the bottom (after existing section styles):

```css
.archive-cta {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 6rem 0;
  text-align: center;
}

.archive-cta__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.archive-cta__line {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
  letter-spacing: 0.01em;
}

.archive-cta__line em {
  font-style: italic;
}

.archive-cta__link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-bright);
  text-decoration: none;
  border: 1px solid var(--border-med);
  padding: 0.75rem 1.25rem;
  transition: color 200ms ease, border-color 200ms ease;
}

.archive-cta__link:hover {
  color: var(--accent);
  border-color: var(--accent);
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/ArchiveCTA.tsx src/app/globals.css
git commit -m "feat(archive): add ArchiveCTA section component"
```

---

## Task 9: Create `/archive` route

**Files:**
- Create: `src/app/archive/page.tsx`

- [ ] **Step 1: Create route**

Create `src/app/archive/page.tsx`:

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IProject } from '@/types'
import { projects, experiments } from '@/data'

import ProjectGrid from '@/components/ProjectGrid'
import ProjectModal from '@/components/ProjectModal'
import Footer from '@/components/Footer'
import { contacts } from '@/data'

export default function ArchivePage() {
  const [activeProject, setActiveProject] = useState<IProject | null>(null)
  const [activeIsExperiment, setActiveIsExperiment] = useState(false)

  const selectProject = (p: IProject) => {
    setActiveProject(p)
    setActiveIsExperiment(false)
  }
  const selectExperiment = (p: IProject) => {
    setActiveProject(p)
    setActiveIsExperiment(true)
  }

  return (
    <>
      <section className="archive-header">
        <div className="container">
          <Link href="/" className="archive-header__back">
            ← back
          </Link>
          <h1 className="archive-header__title">Archive</h1>
          <p className="archive-header__subhead">
            2000 – 2024. Things I made before the AI era.
          </p>
        </div>
      </section>

      <ProjectGrid
        num="01"
        title="Featured Work"
        projects={projects}
        onSelect={selectProject}
      />

      <ProjectGrid
        num="02"
        title="Experiments"
        projects={experiments}
        onSelect={selectExperiment}
        small
      />

      <Footer contacts={contacts} />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          isExperiment={activeIsExperiment}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
```

- [ ] **Step 2: Add archive header styles**

Open `src/app/globals.css` and add at the bottom:

```css
.archive-header {
  padding: 8rem 0 4rem;
}

.archive-header__back {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
}

.archive-header__back:hover {
  color: var(--accent);
}

.archive-header__title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--text-bright);
  margin: 0 0 1rem;
  line-height: 1;
}

.archive-header__subhead {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--text);
  margin: 0;
  max-width: 40ch;
}
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS. (Both `/` and `/archive` routes should appear in the build output.)

- [ ] **Step 4: Manual visual check**

Run: `npm run dev`
Open: `http://localhost:3000/archive`
Confirm:
- Page renders with header + back link + title "Archive" + subhead
- Project grid renders with same projects as the old `/` page
- Experiments grid renders below
- Clicking a project card opens the modal
- Modal closes on dismiss
- Back link returns to `/`

- [ ] **Step 5: Commit**

```bash
git add src/app/archive/page.tsx src/app/globals.css
git commit -m "feat(archive): add /archive route with old project grid + modal"
```

---

## Task 10: Strip project grid from `/` and add `ArchiveCTA`

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page**

Replace the entire contents of `src/app/page.tsx`:

```tsx
import { contents, techStacks, contacts } from '@/data'

import Hero from '@/components/Hero'
import About from '@/components/About'
import StackSection from '@/components/StackSection'
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
      <StackSection stacks={techStacks} />
      <AwardsSection awards={awards} publications={publications} />
      <ArchiveCTA />
      <Footer contacts={contacts} />
    </>
  )
}
```

Note: removed `'use client'`, removed `useState`, removed project/experiment state. Page is now a server component. If any child component breaks because of that, leave the `'use client'` directive and remove only the state imports — verify in next step.

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS. If build fails due to client-only hooks in a top-level boundary, re-add `'use client'` to `src/app/page.tsx` (children like `Hero`, `StackSection` already declare it themselves; should be fine to remove from the parent).

- [ ] **Step 3: Manual visual check**

Run: `npm run dev`
Open: `http://localhost:3000`
Confirm:
- Hero loads with new eyebrow + 3 rotating stats
- About section follows
- Stack section shows 4 capability cards (no nested lists)
- Awards section follows
- Archive CTA appears between Awards and Footer with cyan-hover link
- Footer follows
- No `ProjectGrid` or `ProjectModal` visible on home page
- No console errors

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(page): strip project grid from home, add ArchiveCTA"
```

---

## Task 11: Smoke test full flow

**Files:** none — verification only.

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: clean build, both `/` and `/archive` listed.

- [ ] **Step 2: Manual journey test**

Run: `npm run dev`. In a browser:

1. Open `http://localhost:3000`
2. Confirm hero stats rotate (wait ~10s, watch for fade transitions)
3. Scroll through: Hero → About → Stack → Awards → ArchiveCTA → Footer
4. Click "The archive →" link
5. Confirm `/archive` loads with project grid
6. Click a project card → modal opens with project content
7. Close modal
8. Click "back" → returns to `/`
9. Confirm no console errors at any step

- [ ] **Step 3: If all passes, no commit needed**

This task is verification only. Mark complete only if every check passes.

---

## Out of Scope (do not implement)

- About section final copy rewrite
- Filling in `[X]` for AI systems shipped count
- Removing unused `.stack-col__items` / `.stack-col__item` CSS classes (leave for a later cleanup)
- Writing/Notes section
- SEO/metadata updates
- Accessibility audit beyond what already exists
- Replacing emoji flags in the About text body (only the hero flag row is removed)
