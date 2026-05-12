# Identity Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Swap fonts (DM Serif Display + IBM Plex Mono), apply electric cyan accent, rewrite hero stats, add stack group-header support, rewrite stack content, and tint flow-field hub agents.

**Architecture:** Five targeted file changes across layout, styles, data, and components. No new files needed. The stack group-header feature requires a one-line parser change in StackSection.tsx plus a small CSS addition before the data rewrite can be verified visually.

**Tech Stack:** Next.js 14 App Router, CSS custom properties, TypeScript, Google Fonts via `next/font/google`, Canvas 2D for the flow field.

---

## Task 1: Swap font from Cormorant Garamond to DM Serif Display

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace the font import and variable**

Open `src/app/layout.tsx`. Replace the entire `cormorant` block:

```tsx
// BEFORE
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})
```

```tsx
// AFTER
import { DM_Serif_Display, IBM_Plex_Mono } from 'next/font/google'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dmserif',
  display: 'swap',
})
```

- [ ] **Step 2: Update the html className**

```tsx
// BEFORE
<html lang="en" className={`${cormorant.variable} ${ibmPlexMono.variable}`}>

// AFTER
<html lang="en" className={`${dmSerif.variable} ${ibmPlexMono.variable}`}>
```

- [ ] **Step 3: Verify TypeScript — no errors**

```bash
cd /Users/paganinisilvio/Workspace/personal/s2paganini.com/s2paganini.com
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: swap Cormorant Garamond for DM Serif Display"
```

---

## Task 2: Apply electric cyan accent and update CSS font variable

**Files:**
- Modify: `src/app/globals.css`

This task has four sub-changes: (a) update font variable name, (b) change accent to cyan, (c) fix stat number colour to text-bright, (d) move section numbers to cyan.

- [ ] **Step 1: Update `--font-serif` to point to `--font-dmserif`**

In `src/app/globals.css`, find the `:root` block. Change:

```css
/* BEFORE */
--font-mono:   var(--font-ibmplex), 'Courier New', monospace;
--font-serif:  var(--font-cormorant), Georgia, serif;
```

```css
/* AFTER */
--font-mono:   var(--font-ibmplex), 'Courier New', monospace;
--font-serif:  var(--font-dmserif), Georgia, serif;
```

- [ ] **Step 2: Change accent to electric cyan**

In the same `:root` block, replace the accent lines:

```css
/* BEFORE */
--accent:      #C8D2DC;      /* near-white — precision highlight */
--accent-2:    #567EA0;      /* muted steel blue — system color */
--accent-10:   rgba(86, 126, 160, 0.06);
--accent-20:   rgba(86, 126, 160, 0.14);
```

```css
/* AFTER */
--accent:      #00CFFF;      /* electric cyan — single vibrant hit */
--accent-2:    #567EA0;      /* muted steel blue — secondary system colour */
--accent-10:   rgba(0, 207, 255, 0.06);
--accent-20:   rgba(0, 207, 255, 0.14);
```

- [ ] **Step 3: Hero stat numbers → `--text-bright` (not accent)**

Cyan is reserved for section labels and "BCG X" — not the stat numbers. Find `.hero__stat-num` and change its `color`:

```css
/* BEFORE */
.hero__stat-num {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 300;
  font-style: italic;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 4px;
}
```

```css
/* AFTER */
.hero__stat-num {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 300;
  font-style: italic;
  color: var(--text-bright);
  line-height: 1;
  margin-bottom: 4px;
}
```

- [ ] **Step 4: Section numbers → cyan (was `--accent-2`)**

Find `.section-label__num` and change its `color`:

```css
/* BEFORE */
.section-label__num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--accent-2);
  flex-shrink: 0;
}
```

```css
/* AFTER */
.section-label__num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--accent);
  flex-shrink: 0;
}
```

- [ ] **Step 5: Verify TypeScript — no errors**

```bash
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 6: Verify browser**

Check `http://localhost:3000`. You should see:
- Section number "02" etc. now glows cyan
- "BCG X" in the hero role line is cyan
- Hero stat numbers (25, 9, etc.) are cool near-white, not cyan
- Name "Silvio Paganini" is in DM Serif Display italic

- [ ] **Step 7: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: electric cyan accent, DM Serif Display CSS variable"
```

---

## Task 3: Add group-header support to StackSection

The AI & Machine Learning column uses visual sub-clusters (Foundation, Agentic Systems, Models & Platforms). The parser needs to recognise lines starting with `## ` as group headers.

**Files:**
- Modify: `src/components/StackSection.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update `parseStackItems` to detect group headers**

In `src/components/StackSection.tsx`, replace the entire `parseStackItems` function:

```tsx
// BEFORE
function parseStackItems(raw: string) {
  const lines = raw.split('\n').filter(l => l.trim())
  return lines.map(line => {
    const trimmed = line.trim()
    const isSub = line.startsWith('  ')
    return {
      label: trimmed.replace(/^\*\s*/, '').trim(),
      sub: isSub,
    }
  })
}
```

```tsx
// AFTER
function parseStackItems(raw: string) {
  const lines = raw.split('\n').filter(l => l.trim())
  return lines.map(line => {
    const trimmed = line.trim()
    const isHeader = trimmed.startsWith('## ')
    const isSub = !isHeader && line.startsWith('  ')
    return {
      label: isHeader
        ? trimmed.replace(/^##\s*/, '').trim()
        : trimmed.replace(/^\*\s*/, '').trim(),
      sub: isSub,
      isHeader,
    }
  })
}
```

- [ ] **Step 2: Update the render to use the new `isHeader` flag**

In the same file, replace the `<li>` render:

```tsx
// BEFORE
{parseStackItems(col.stack).map((item, i) => (
  <li
    key={i}
    className={`stack-col__item${item.sub ? ' stack-col__item--sub' : ''}`}
  >
    {item.label}
  </li>
))}
```

```tsx
// AFTER
{parseStackItems(col.stack).map((item, i) =>
  item.isHeader ? (
    <li key={i} className="stack-col__group">
      {item.label}
    </li>
  ) : (
    <li
      key={i}
      className={`stack-col__item${item.sub ? ' stack-col__item--sub' : ''}`}
    >
      {item.label}
    </li>
  )
)}
```

- [ ] **Step 3: Add `.stack-col__group` CSS**

In `src/app/globals.css`, after the `.stack-col__item--sub::before` rule, add:

```css
.stack-col__group {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-2);
  padding: 14px 0 6px;
  margin-top: 6px;
  border-top: 1px solid var(--border);
  list-style: none;
  break-inside: avoid;
}

.stack-col__group:first-child {
  padding-top: 0;
  margin-top: 0;
  border-top: none;
}
```

- [ ] **Step 4: Verify TypeScript — no errors**

```bash
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 5: Commit**

```bash
git add src/components/StackSection.tsx src/app/globals.css
git commit -m "feat: add group-header support to StackSection"
```

---

## Task 4: Rewrite techStacks with capability clusters

**Files:**
- Modify: `src/data/index.ts`

- [ ] **Step 1: Replace the entire `techStacks` export**

In `src/data/index.ts`, find the `export const techStacks: IStack[] = [` block (lines ~899–967) and replace it entirely:

```typescript
export const techStacks: IStack[] = [
  {
    title: 'AI & Machine Learning',
    stack: `## Foundation
* LLM Architecture & RAG Systems
* Prompt Engineering & Evaluation
* Retrieval-Augmented Generation
* Responsible AI & Safety
## Agentic Systems
* Multi-Agent Design & Orchestration
* Tool Use & Function Calling
* Agent Memory & State Management
* LangChain / LangGraph / LlamaIndex
## Models & Platforms
* OpenAI API / Azure OpenAI / Bedrock
* AWS SageMaker / Azure AI Studio
* Hugging Face / PEFT / LoRA
* Stable Diffusion / ComfyUI`,
  },
  {
    title: 'Cloud & Infrastructure',
    stack: `## AWS
* EC2, ECS/EKS, Lambda
* S3, CloudFront, WAF
* Bedrock, SageMaker
* API Gateway, CloudFormation
## Azure
* Azure OpenAI, AI Studio
* App Services, Functions
## GCP
## Platform
* Terraform / IaC
* Docker / Kubernetes
* CI/CD (GitHub Actions, CircleCI)
* Observability & Cost Optimisation`,
  },
  {
    title: 'Systems & Architecture',
    stack: `* Distributed Systems Design
* API Design (REST, GraphQL)
* Event-Driven / Microservices
* Python / FastAPI
* Node.js / TypeScript
* PostgreSQL / pgvector
* Redis / MongoDB
* Data Pipelines & ETL
* Performance Engineering`,
  },
  {
    title: 'Engineering Leadership',
    stack: `* Technical Strategy & Roadmap
* Engineering Org Design & Scaling
* Architecture Review & Governance
* Hiring, Mentoring, Growing Engineers
* Agile Delivery / OKRs
* Stakeholder & Partner Management
* P&L Accountability
* Cross-functional Collaboration`,
  },
]
```

- [ ] **Step 2: Verify TypeScript — no errors**

```bash
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 3: Verify browser — stack section**

Open `http://localhost:3000`, scroll to the Stack section. You should see:
- AI & Machine Learning hero column with three visible group headers: **Foundation**, **Agentic Systems**, **Models & Platforms** — each in small steel-blue all-caps
- Cloud & Infrastructure with **AWS**, **Azure**, **GCP**, **Platform** group headers
- Systems & Architecture and Engineering Leadership with no headers (flat lists — intentional)

- [ ] **Step 4: Commit**

```bash
git add src/data/index.ts
git commit -m "feat: rewrite techStacks with capability clusters"
```

---

## Task 5: Update hero stats — 3 cells, no emoji, correct labels

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace the stats block**

In `src/components/Hero.tsx`, replace the entire `hero__stats` div:

```tsx
// BEFORE
<div className="hero__stats">
  <div className="hero__stat">
    <span className="hero__stat-num">25</span>
    <span className="hero__stat-label">years of craft</span>
  </div>
  <div className="hero__stat">
    <span className="hero__stat-num">200+</span>
    <span className="hero__stat-label">engineers led</span>
  </div>
  <div className="hero__stat">
    <span className="hero__stat-num">9</span>
    <span className="hero__stat-label">countries</span>
    <span className="hero__stat-sub">🇳🇴 🇺🇸 🇫🇷 🇮🇹 🇬🇧 🇧🇷 🇮🇩 🇹🇭 🇦🇪</span>
  </div>
  <div className="hero__stat">
    <span className="hero__stat-num">5×</span>
    <span className="hero__stat-label">Cannes Lions</span>
  </div>
</div>
```

```tsx
// AFTER
<div className="hero__stats">
  <div className="hero__stat">
    <span className="hero__stat-num">25</span>
    <span className="hero__stat-label">years building</span>
  </div>
  <div className="hero__stat">
    <span className="hero__stat-num">9</span>
    <span className="hero__stat-label">countries</span>
  </div>
  <div className="hero__stat">
    <span className="hero__stat-num">12+</span>
    <span className="hero__stat-label">AI systems shipped</span>
  </div>
</div>
```

Note: `12+` is a placeholder — Silvio replaces this with the real number before deploying.

- [ ] **Step 2: Verify TypeScript — no errors**

```bash
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 3: Verify browser — hero stats**

Open `http://localhost:3000`. The stats row should show exactly 3 cells:
- `25 / years building`
- `9 / countries` (no flags)
- `12+ / AI systems shipped`

Numbers in DM Serif italic, labels in tiny IBM Plex Mono all-caps.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: 3-stat hero block — years building, countries, AI systems shipped"
```

---

## Task 6: Tint flow-field hub agents with faint cyan

**Files:**
- Modify: `src/components/WebGLBackground.tsx`

- [ ] **Step 1: Change hub agent stroke colour**

In `src/components/WebGLBackground.tsx`, find the `if (a.kind === 'hub')` branch in the `draw` function and change one line:

```tsx
// BEFORE
ctx.strokeStyle = `rgba(86,126,160,${alpha * 0.7})`

// AFTER
ctx.strokeStyle = `rgba(0,207,255,${alpha * 0.4})`
```

The alpha multiplier drops from `0.7` to `0.4` so the cyan doesn't overpower the silver traces — it's a subtle tint, not a colour accent.

- [ ] **Step 2: Verify TypeScript — no errors**

```bash
npx tsc --noEmit 2>&1
```

Expected: `TypeScript: No errors found`

- [ ] **Step 3: Verify browser — flow field**

Open `http://localhost:3000` and watch the hero for ~10 seconds. You should occasionally see very faint cyan threads among the silver traces — not dominant, just a hint. If it looks too bright, lower the multiplier further (`0.3` or `0.25`).

- [ ] **Step 4: Commit**

```bash
git add src/components/WebGLBackground.tsx
git commit -m "feat: faint cyan tint on flow-field hub agents"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|---|---|
| DM Serif Display replaces Cormorant | Task 1 |
| IBM Plex Mono unchanged | Task 1 (not touched) |
| `--font-serif` → `--font-dmserif` | Task 2 |
| `--accent` → `#00CFFF` | Task 2 |
| `--accent-10/20` → cyan | Task 2 |
| Stat numbers use `--text-bright` | Task 2 |
| Section numbers use cyan (`--accent`) | Task 2 |
| Stack group headers rendered | Task 3 |
| Stack content rewritten | Task 4 |
| Hero stats: 3 cells, no emoji | Task 5 |
| "years building" / "countries" / "AI systems shipped" | Task 5 |
| Hub agents → `rgba(0,207,255, alpha * 0.4)` | Task 6 |
| `hero__role-company` (BCG X) stays cyan | Inherits from `--accent` — no change needed |
| `award-stat__num` → DM Serif | Inherits from `--font-serif` after Task 2 |
| `about__body` → Cormorant → DM Serif | Inherits from `--font-serif` after Task 2 |

**Placeholder scan:** No TBDs. `12+` stat is an explicit placeholder with a note for Silvio.

**Type consistency:** `isHeader: boolean` added to `parseStackItems` return type in Task 3 and used in the same task's render step. No cross-task type drift.
