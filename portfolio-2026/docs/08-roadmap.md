# 08 — Roadmap

## Shape of the project

**10 weeks full-time, 12–14 weeks part-time.**

The critical path is **content**, not code. The 3D is a proof-of-concept gate in week 3; if it fails the performance budget, the concept is simplified before page design begins.

```
Week 0  Decisions & content audit
Week 1  Strategy, narrative, IA
Week 2  Art direction, type, wireframes
Week 3  3D proof-of-concept + performance gate
Week 4  Design system + home design
Week 5  Case study + systems + about design
Week 6  Content production + visual assets
Week 7  Content lock + 3D asset production
Week 8  Build: foundation, pages, content
Week 9  Build: 3D, motion, transitions
Week 10 QA, launch, measurement
```

---

## Phases and deliverables

### Phase 0 — Decisions and audit (Week 0)

**Goal:** remove ambiguity before design.

**Deliverables:**
- ~~Answers to the open questions~~ → remaining unknowns tracked in [11 — Project Source Notes](./11-project-source-notes.md).
- ~~Target role and level decided~~ → **done: senior product designer.**
- ~~Three projects selected~~ → **done: first three on Behance.**
- ~~Type budget decision~~ → **done: free fallback for v1.**
- Metrics, permissions, and asset gaps documented.
- Domain/email plan.
- GitHub branch and Vercel project plan.
- Timeline confirmed.

**Gate G0:** no design work until the remaining evidence gaps (metrics, permissions, role/team) are either filled or given an honest fallback.

---

### Phase 1 — Strategy, narrative, IA (Week 1)

**Goal:** a clear story before any pixels.

**Deliverables:**
- Final positioning and headline.
- Messaging hierarchy.
- Sitemap and page structures.
- Case study outlines for three projects.
- Content inventory and gap list.
- Success metrics.

**Review:** one design lead and one non-designer read the strategy and explain it back.

**Gate G1:** strategy sign-off.

---

### Phase 2 — Art direction and wireframes (Week 2)

**Goal:** establish the visual world and the page skeleton.

**Deliverables:**
- Moodboard and 3 style frames (not 10).
- Palette, type pairing, grid, spacing.
- Home wireframe (desktop + mobile).
- Case study template wireframe.
- Systems/About wireframes.
- Motion principles.

**Review:** does it look like a benchmark, not a template? Does the work lead?

**Gate G2:** art direction sign-off before high-fidelity.

---

### Phase 3 — 3D proof-of-concept (Week 3)

**Goal:** prove the hero layer stack is feasible and worth it.

**Deliverables:**
- Hero scene with four layers and scroll separation.
- Poster/fallback.
- Performance test on MacBook Air, iPhone 12, mid-range Android.
- FPS, LCP, memory, and bundle measurements.
- Mobile static cut.
- Go/no-go recommendation.

**Gate G3 (critical):**
- 60fps desktop, 30fps mobile, LCP < 2.0s, no CLS.
- If it fails: simplify to CSS/2.5D or pre-rendered video. Do not proceed with a heavy scene.

---

### Phase 4 — Design system and home (Week 4)

**Goal:** design the home page and the reusable system.

**Deliverables:**
- Type scale, color tokens, spacing, components.
- Home high-fidelity desktop + mobile.
- Navigation, footer, buttons, project rows, outcome stats.
- 3D visual style frames with real UI textures.
- Accessibility annotations.

**Review:** one focal point per section; 390px pass; reduced-motion pass.

---

### Phase 5 — Case study, systems, about (Week 5)

**Goal:** design the pages that carry the evidence.

**Deliverables:**
- Case study template high-fidelity (desktop + mobile).
- Exploded-view layout and annotations.
- Decision log, outcome block, next-project block.
- Systems page design.
- About page design.
- 404 and résumé page.
- Contact section.

**Review:** a reviewer can complete the 90-second test on the prototype.

---

### Phase 6 — Content production (Weeks 6–7)

**Goal:** real content, real evidence, real assets.

**Deliverables:**
- Merchant wallet case study draft.
- Engagement-archetype case study draft.
- Agent dashboard case study draft.
- Systems page copy and artifacts.
- About, testimonials, résumé.
- 3 project covers.
- 30+ case study visuals.
- 3 short videos/GIFs.
- OG images.
- Permissions documented.

**Gate G4:** content lock. No brackets, no placeholders, no unsourced numbers.

---

### Phase 7 — Build foundation (Week 8)

**Goal:** a fast, accessible shell with all content.

**Deliverables:**
- Astro project, content collections, MDX schema.
- Design tokens and base CSS.
- Layout, nav, footer, skip link.
- Home, case studies, systems, about, notes, résumé, 404.
- Image pipeline and responsive images.
- SEO metadata, sitemap, robots, OG generation.
- Analytics events.
- Content rendered without JS.

**Review:** Lighthouse and axe on every page before 3D.

---

### Phase 8 — 3D, motion, transitions (Week 9)

**Goal:** add the spatial layer without breaking performance.

**Deliverables:**
- Hero scene integrated.
- Work transition.
- Case study exploded view.
- Contact card.
- View transitions with fallback.
- Reduced-motion and no-WebGL fallbacks.
- Performance monitoring and adaptive quality.
- Mobile static assets.

**Review:** performance budgets on real devices; 3D failure rate; content parity with canvas removed.

---

### Phase 9 — QA and launch (Week 10)

**Goal:** ship a benchmark.

**Deliverables:**
- Full QA matrix pass.
- Accessibility audit and fixes.
- Performance audit and fixes.
- SEO/OG/schema validation.
- Content proofread and fact-check.
- Cross-browser/device pass.
- Analytics verification.
- Launch checklist complete.
- Post-launch measurement plan.

**Gate G5:** launch. No known critical issues.

---

## Gates summary

| Gate | When | Decision |
|---|---|---|
| G0 | End of week 0 | Target role, projects, constraints confirmed |
| G1 | End of week 1 | Strategy and narrative approved |
| G2 | End of week 2 | Art direction approved |
| G3 | End of week 3 | 3D go/no-go based on performance |
| G4 | End of week 7 | Content locked, no placeholders |
| G5 | End of week 10 | Launch |

---

## Dependencies

| Dependency | Owner | Needed by |
|---|---|---|
| ~~Target role and level~~ | Monalisha | Done — senior |
| ~~Project selection~~ | Monalisha | Done — first three on Behance |
| ~~Type decision~~ | Monalisha | Done — free fallback |
| Role, team, timeline per project | Monalisha | Week 1 |
| Metrics and permissions | Monalisha / clients | Week 6 |
| Research artifacts and screens | Monalisha | Week 6 |
| Testimonials and photos | Monalisha | Week 6 |
| Résumé update | Monalisha | Week 6 |
| Portrait session | Monalisha / photographer | Week 6 |
| Domain and email | Monalisha | Week 8 |
| GitHub branch + Vercel project | Monalisha | Week 8 |
| 3D asset production | Designer/3D artist | Week 7 |
| Build support | Developer (if needed) | Week 8 |
| Review/critique | Mentor/peer | Weeks 1, 4, 9 |

---

## Resourcing

### Solo (recommended if experienced)

- Strategy, design, content, build, QA.
- 3D: keep it simple; use planes and baked textures.
- Risk: timeline slip; cut P2 (notes, extra videos).

### Designer + developer

- Designer: strategy, visual, content, 3D art direction.
- Developer: Astro, R3F, performance, QA.
- Faster, higher technical ceiling.
- Risk: coordination; define interfaces early.

### Designer + 3D artist + developer

- Best quality; highest cost.
- 3D artist: layer stack, textures, renders, mobile posters.
- Developer: integration, performance.
- Designer: narrative, UI, content, direction.

**Recommendation:** designer + developer for the build; bring in a 3D artist only if the hero proof is weak.

---

## Risks and mitigations

| Risk | Early signal | Mitigation |
|---|---|---|
| 3D is too heavy | Week 3 FPS/LCP fail | Simplify to 2.5D/video; keep metaphor |
| Content is thin | Week 6 drafts lack evidence | Collect artifacts in week 0; use qualitative fallbacks |
| Metrics unavailable | Week 6 worksheet empty | Directional/qualitative; label caveats |
| Scope creep | More than 3 projects/3D moments | Cut list; gates |
| Design drifts to trend | Moodboard looks like the old site | Reference principles; review against brief |
| Timeline slips | Week 5 design not done | Cut notes/videos; ship 2 deep case studies |
| Type license blocks | Week 2 | Free fallback pairing |
| Safari/WebGL bugs | Week 9 | Static fallback; test early |
| SEO weak | Week 8 | DOM-first; metadata; sitemap |
| Accessibility regressions | Week 9 | axe + manual; budgets |

---

## Cut list (in order)

If time runs short, cut in this order:

1. Notes/essays.
2. Agent dashboard full case study → shorter medium study.
3. Contact 3D card.
4. Work transition 3D → crossfade.
5. Extra videos.
6. Dark section variations.
7. Custom OG illustrations → generated typographic OG.

**Never cut:** case study evidence, résumé, mobile fallback, accessibility, performance.

---

## Weekly cadence

- **Monday:** plan the week; confirm dependencies.
- **Wednesday:** mid-week critique; unblock content.
- **Friday:** demo; update decision log; gate check if applicable.
- **End of phase:** written review; go/no-go.

### Review questions

1. Does this look like a benchmark, or a template?
2. Can a hiring manager explain the value in 5 seconds?
3. Can a design lead explain one decision and one outcome after 90 seconds?
4. Does it work on a phone, with reduced motion, without WebGL?
5. Is the work louder than the chrome?
6. Is anything unproven, inflated, or borrowed?
7. What can be cut without losing the thesis?

---

## Definition of done

- Strategy and content are locked.
- Three case studies meet the [case study quality bar](./05-case-study-system.md).
- Home passes the 5-second test.
- 3D passes the performance gate and has a designed fallback.
- Lighthouse and accessibility budgets met.
- Résumé, email, availability, and contact are one click away.
- Analytics and measurement are live.
- No placeholders, no broken links, no missing alt text.
- The site is live on the domain, with redirects and a 404.
