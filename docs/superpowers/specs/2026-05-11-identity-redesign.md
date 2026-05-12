# s2paganini.com — Identity Redesign Spec
**Date:** 2026-05-11  
**Status:** Approved for implementation

---

## 1. Identity & Narrative

**Direction:** The Arc — Creative Technologist → AI Systems Director.

The site is a professional presence for anyone who Googles Silvio Paganini. The story it tells: 25 years of building things on the web — starting with creative technology, now designing agentic AI systems for global enterprises at BCG X. The creative past is not hidden; it is the origin story that explains why his AI systems work has taste and perspective.

**Tagline framing (About section lead):**  
Something like: *"Started building interactive things in 2000. Now I design the systems that think."*  
The about copy should arc from creative roots → current AI focus without being nostalgic. The creative work explains the sensibility; the AI work is the headline.

**What this is NOT:**
- Not a creative portfolio ("look at my creative work")
- Not a CV ("here are all my skills")
- Not a sales funnel ("hire me")
- It is a signal: authoritative, precise, grounded

---

## 2. Typography System

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Hero name | DM Serif Display | 400 | Italic |
| Stat numbers (hero + awards) | DM Serif Display | 400 | Italic |
| Everything else | IBM Plex Mono | 200–500 | Normal |

**Rationale:** DM Serif Display italic has authority without the antique fragility of Cormorant Garamond. IBM Plex Mono as the single engineering voice for all UI, labels, body-adjacent text — disciplined, precise, zero decoration.

**Font import changes:**
- Remove: `Cormorant_Garamond`, `IBM_Plex_Mono` (already there)
- Add: `DM_Serif_Display`
- Keep: `IBM_Plex_Mono`
- CSS variable: `--font-serif` → points to `--font-dmserif`

---

## 3. Colour Palette

```
--bg:          #060709   (near-pure black, faint cool tint)
--surface:     #0B0C10
--surface-2:   #101318
--text:        #8891A0   (cool silver grey)
--text-bright: #C8D2DC   (cool near-white)
--text-dim:    #343D4A
--text-faint:  #1E252F
--accent:      #00CFFF   (electric cyan — THE single vibrant hit)
--accent-2:    #567EA0   (muted steel blue — secondary system colour)
--accent-10:   rgba(0, 207, 255, 0.06)
--accent-20:   rgba(0, 207, 255, 0.14)
--border:      rgba(255, 255, 255, 0.05)
--border-med:  rgba(255, 255, 255, 0.09)
```

**Accent usage rules — cyan is earned, not scattered:**
- Section numbers (01, 02, 03…)
- "BCG X" in the hero role line
- Stack hero column title (AI & Machine Learning)
- Interactive hover states on links/buttons
- Flow field hub agents (subtle, low alpha)

**Everything else** stays in the silver-grey hierarchy. No amber, no navy.

---

## 4. Hero Section

### Structure (HTML unchanged except one small addition)
```
hero__id       → "S2PAGANINI · BCG X · SÃO PAULO"  (barely visible)
hero__eyebrow  → "AI Systems — Software Engineering — Creative Technology"
hero__name     → "Silvio / Paganini"  (DM Serif Display italic, massive)
hero__role     → "Director of Software Engineering · BCG X · São Paulo"
hero__stats    → 3-cell bordered grid (see below)
hero__scroll   → vertical "scroll" + line indicator
```

### Stats block — 3 cells, no emoji
| Number | Label |
|--------|-------|
| 25 | years building |
| 9 | countries |
| [X] | AI systems shipped |

*[X] = placeholder; Silvio to fill in actual count.*

Stat numbers use DM Serif Display italic to match the name — creates typographic continuity. Labels in IBM Plex Mono, ultra-small, all-caps.

### Flow field adjustments
- Hub agents: `rgba(0, 207, 255, alpha * 0.4)` — faint cyan tint to echo the accent
- Signal agents: unchanged silver-grey
- Pulse agents: unchanged near-white sparks
- Background trail: `rgba(6, 7, 9, 0.022)` unchanged

---

## 5. Stack Section

Four columns, each with a distinct logic. **Not a tag dump — grouped by capability cluster.**

### Column 1: AI & Machine Learning (hero, full-width)
Three sub-clusters rendered as visual groups:

**Foundation**
- LLM Architecture & RAG Systems
- Prompt Engineering & Evaluation
- Retrieval-Augmented Generation
- Responsible AI & Safety

**Agentic Systems** ← the primary focus
- Multi-Agent Design & Orchestration
- Tool Use & Function Calling
- Agent Memory & State Management
- LangChain / LangGraph / LlamaIndex

**Models & Platforms**
- OpenAI API / Azure OpenAI / Bedrock
- AWS SageMaker / Azure AI Studio
- Hugging Face / PEFT / LoRA
- Stable Diffusion / ComfyUI ← the bridge: generative art → generative AI

The Stable Diffusion / ComfyUI entry is intentional — it references the creative tech past feeding into current generative AI work without being nostalgic.

### Column 2: Cloud & Infrastructure
Organized by provider, not a flat list:

**AWS** (primary)
- EC2, ECS/EKS, Lambda
- S3, CloudFront, WAF
- Bedrock, SageMaker
- API Gateway, CloudFormation

**Azure** (BCG context)
- Azure OpenAI, AI Studio
- App Services, Functions

**GCP** (secondary)

**Platform**
- Terraform / IaC
- Docker / Kubernetes
- CI/CD (GitHub Actions, CircleCI)
- Observability & Cost Optimisation

### Column 3: Systems & Architecture
Organized around *how* to build, not what:

- Distributed Systems Design
- API Design (REST, GraphQL)
- Event-Driven / Microservices
- Python / FastAPI ← primary language now
- Node.js / TypeScript
- PostgreSQL / pgvector
- Redis / MongoDB
- Data Pipelines & ETL
- Performance Engineering

### Column 4: Engineering Leadership
Capabilities, not tools — reads like what you bring to a room:

- Technical Strategy & Roadmap
- Engineering Org Design & Scaling
- Architecture Review & Governance
- Hiring, Mentoring, Growing Engineers
- Agile Delivery / OKRs
- Stakeholder & Partner Management
- P&L Accountability
- Cross-functional Collaboration

---

## 6. About Section

Copy direction (not final copy — for reference):

Lead paragraph in italic (the hook): Opens with the arc. Creative roots → AI systems. Should feel like a person speaking, not a LinkedIn summary.

Body: Expands on the current work at BCG X. What agentic AI systems means in practice. Why the creative background is an asset in this work — building systems that interact with humans requires more than engineering.

Avoid: Listing achievements. Saying "I'm passionate about." Mentioning specific clients (NDA).

---

## 7. What Doesn't Change

- Project grid layout and card hover behaviour
- Modal (project case study / experiment iframe embed)
- Footer
- Awards section structure (stat numbers → DM Serif italic for consistency)
- Publications section
- `projects.config.json` toggle system
- Section numbering and label component
- Overall dark palette / near-black base

---

## 8. Files to Modify

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Replace `Cormorant_Garamond` with `DM_Serif_Display` |
| `src/app/globals.css` | New accent `#00CFFF`, `--font-dmserif` variable, minor hero stat CSS |
| `src/components/Hero.tsx` | Update stat labels and placeholder number |
| `src/components/WebGLBackground.tsx` | Hub agent colour → faint cyan |
| `src/data/index.ts` | Rewrite `techStacks` with new stack content |

---

## 9. Out of Scope

- About section final copywriting (Silvio writes this)
- Filling in the AI systems shipped count (Silvio decides)
- Any new sections or page structure changes
- SEO / metadata changes
