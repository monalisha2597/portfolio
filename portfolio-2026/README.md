# Portfolio 2026 — Working Title: "Depth"

Planning workspace for a new product design portfolio, built from scratch.

> **Status:** Planning. Direction confirmed (Nov 2026). No code, no visual design, no content production yet.
>
> **Thesis:** Build a benchmark portfolio that proves Monalisha can take complex B2B problems from research to shipped systems — and make the site itself the proof.

---

## The one-sentence brief

**Build a spatial, editorial product design portfolio that makes the work feel inevitable: every 3D moment explains a design decision, every case study proves judgment, and every interaction is fast, accessible, and self-contained.**

---

## Confirmed decisions (14 Nov 2026)

| # | Decision | Detail |
|---|---|---|
| 1 | **Positioning** | **Senior Product Designer.** The evidence must match the level: strategy, ambiguity, systems, influence, measurable outcomes. |
| 2 | **Projects** | The first three projects on [Behance](https://www.behance.net/monalishachatterjee), in profile order: **Designing for Engagement** (2026) → **Revolutionizing merchant's financial behaviour** (Jabu) → **Re-designing agent's dashboard** (Jabu CRM, 2023). |
| 3 | **3D approach** | Recommended "quietly cinematic" cut: three moments only — hero, project transition, case-study exploded view. Mobile gets a designed static/pre-rendered version. |
| 4 | **Type** | **Start with the free fallback** (Instrument Serif + General Sans + JetBrains Mono). Upgrade to a paid display face later if budget appears; the system must not depend on it. |
| 5 | **Deployment** | New branch in the GitHub repo, new Vercel project pointed at that branch. `monalisha.vercel.app` is **already taken**, so the target is **`monalisha-portfolio.vercel.app`**; confirm at deploy time and fall back to the nearest available name. |
| 6 | **Reuse** | Nothing from the old site: no visual system, copy, covers, or summary-level case studies. |

**What this changes in the plan:** the old placeholder "loyalty games" project is replaced by the real 2026 **archetype-driven engagement system** project, which is a stronger senior-level story (configurable IA + design system, not a game). It also comes with published outcomes — **+42% engagement, +67% point utilisation, +31% campaign participation, 3.2× reward redemption** — so the homepage can lead with evidence rather than ambition. The merchant wallet and agent dashboard remain the other two, both from Jabu. The case-study order follows Behance.

> **Metrics caveat:** these figures are as published on Behance. Confirm the measurement basis (relative vs absolute, aggregate vs per-client) and shareability before they go on the site. See [11 — Project Source Notes](./docs/11-project-source-notes.md).

---

## What "benchmark" means here

This is not "a nicer version of the current site." It is a new standard.

- **5-second clarity:** a hiring manager knows the role, the domain, the level, and the proof before scrolling.
- **2–3 deep case studies:** 800–1,200 words and 8–15 visuals each, with decisions, trade-offs, and outcomes.
- **Outcome-first:** the result appears before the process.
- **Distinct art direction:** editorial precision, spatial depth, real product work — not a template, not a trend skin.
- **3D as explanation, not decoration:** three deliberate moments, not a 3D scene everywhere.
- **Self-contained:** no Behance off-ramp, no "enter site" gate, no missing context.
- **2026 evidence:** AI-assisted workflow, systems thinking, collaboration, and measurable impact.
- **Craft you can audit:** 95+ Lighthouse, WCAG 2.2 AA, 60fps desktop, graceful mobile fallbacks.
- **Easy to act on:** résumé, email, availability, and location in one click.

Target benchmark score: **9.2 / 10** (see [Quality & Launch](./docs/09-quality-and-launch.md)).

---

## The experience in one paragraph

A warm, editorial portfolio built around a spatial **layer stack** metaphor. As you scroll, a real product interface separates into four layers — **Research → Structure → Interface → System** — then reassembles into a shipped outcome. The 3D appears in three moments only: the hero, the project transition, and one case-study moment per project — the exploded view, replaced in the lead project by "one core, four surfaces." Everything else is typography, real product imagery, annotated decisions, and evidence. The site should feel like looking at a designer's actual workbench, not a 3D demo reel.

---

## Non-negotiables

1. **New identity, new copy, new structure.** Nothing reused from the current site: no neo-brutalist skin, no Behance covers, no current headline, no summary-level case studies.
2. **3D is progressive enhancement.** Every word and every project must be available without WebGL, without motion, and without JavaScript.
3. **Case studies are the product.** The homepage exists to get someone into the work.
4. **Outcome before process.** A reviewer should see what changed before they see how.
5. **Performance and accessibility are design constraints,** not a cleanup phase.
6. **No scroll hijacking.** Native scroll. Cinematic, not captive.
7. **One conversion path:** résumé, email, LinkedIn, availability — always within reach.

---

## Document index

| Doc | Purpose |
|---|---|
| [00 — Brief](./docs/00-brief.md) | Problem, audience, goals, constraints, success metrics |
| [01 — Strategy](./docs/01-strategy.md) | Positioning, narrative, headlines, differentiation, voice |
| [02 — Experience Architecture](./docs/02-experience-architecture.md) | Sitemap, user journeys, page structures, scroll map |
| [03 — Visual Language](./docs/03-visual-language.md) | Art direction, palette, type, grid, components, imagery |
| [04 — 3D & Motion](./docs/04-3d-and-motion.md) | Scene-by-scene storyboard, choreography, fallbacks, performance |
| [05 — Case Study System](./docs/05-case-study-system.md) | Template, content checklist, outcome framework, quality bar |
| [06 — Content Plan](./docs/06-content-plan.md) | Page-by-page content, project inventory, assets, metrics |
| [07 — Technical Plan](./docs/07-technical-plan.md) | Stack, architecture, 3D pipeline, budgets, SEO, a11y, testing |
| [08 — Roadmap](./docs/08-roadmap.md) | Phases, gates, timeline, dependencies, risks |
| [09 — Quality & Launch](./docs/09-quality-and-launch.md) | Acceptance criteria, QA matrix, launch checklist, measurement |
| [10 — References & Open Questions](./docs/10-references-and-open-questions.md) | Benchmark references, anti-references, decisions needed |
| [11 — Project Source Notes](./docs/11-project-source-notes.md) | What was captured from Behance, what it proves, and what is still missing |

---

## Working assumptions

These are proposals, not decisions. Revisit before build.

- **Case studies:** 2 deep (**Designing for Engagement**, **merchant wallet**) + 1 medium (**agent dashboard**). The nursery and earlier student projects stay out of v1; a small "archive" link can point to Behance.
- **New page:** a `/systems` page covering the design system, FlutterFlow library, AI-assisted workflow, and design QA.
- **Stack:** Astro 5 + React 19 island for 3D + React Three Fiber + GSAP ScrollTrigger + MDX + Vercel. Revisit after the 3D proof-of-concept.
- **Content:** MDX in the repo first; add a CMS only if editing friction becomes real.
- **Type:** free fallback confirmed for v1; paid display face is an optional later upgrade.
- **Timeline:** 10 weeks full-time, 12–14 weeks part-time.
- **3D ambition:** "quietly cinematic" — paper layers, warm studio light, no glass, no chrome, no floating blobs.
- **URL:** `monalisha-portfolio.vercel.app` (the preferred `monalisha.vercel.app` is taken; `monalisha-portfolio` responded 404 on 14 Nov 2026). Reconfirm at deploy time.

---

## Decision log

| ID | Decision | Status | Notes |
|---|---|---|---|
| D1 | Concept: "Depth" — surface → system | Proposed | Core metaphor for 3D and case studies |
| D2 | 3D only in three moments | Locked | Hero, project transition, case-study exploded view |
| D3 | Astro over Next.js | Proposed | Revisit after 3D prototype and transition test |
| D4 | MDX over CMS | Proposed | Upgrade to Sanity only if needed |
| D5 | No scroll hijacking | Locked | Native scroll + GSAP scrub |
| D6 | No reuse of the old site | Locked | New identity, copy, assets, code |
| D7 | Target level: Senior Product Designer | **Decided** | Evidence must support senior scope, not just craft |
| D8 | Projects: first three on Behance | **Decided** | Engagement archetypes, merchant wallet, agent dashboard |
| D9 | 3D: quietly cinematic, three moments | **Decided** | Mobile static cut |
| D10 | Type: free fallback for v1 | **Decided** | Instrument Serif + General Sans + JetBrains Mono |
| D11 | Deployment: new branch + new Vercel project | **Decided** | Target `monalisha-portfolio.vercel.app`; preferred name is taken |
| D12 | Metric basis + permissions | Open | Figures captured; confirm relative/absolute and shareability |
| D13 | Contact details, résumé, portrait | Open | Needed before build |

---

## Next step

1. Confirm permissions, metric basis, and any factual corrections in [11 — Project Source Notes](./docs/11-project-source-notes.md).
2. Sign off [01 — Strategy](./docs/01-strategy.md) with the senior positioning in place.
3. Lock the case-study outlines in [05 — Case Study System](./docs/05-case-study-system.md) against real evidence.
4. Build the 3D proof-of-concept only after the narrative and content outline are stable.
