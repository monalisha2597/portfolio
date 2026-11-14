# 02 — Experience Architecture

## Experience principles

1. **Content first, canvas second.** Every important idea exists in the DOM. 3D is an enhancement, never the source of truth.
2. **One idea per viewport.** The scroll should feel composed, not like a long PDF.
3. **Outcome before process.** The result earns attention for the method.
4. **Native scroll.** No hijacking, no forced snap, no horizontal traps.
5. **Quiet navigation.** The work is the loudest thing on the page.
6. **One next action per moment.** See work, open project, download résumé, contact.
7. **Mobile is a first-class cut.** Simplified 3D, same content, faster.

---

## Sitemap

```
/
├── work/
│   ├── engagement-archetypes/    (deep case study — 2026, lead)
│   ├── merchant-wallet/          (deep case study)
│   └── agent-dashboard/          (medium case study)
├── systems/                      (design system + FlutterFlow + AI workflow + QA)
├── about/                        (story, timeline, testimonials, résumé)
├── notes/                        (optional: 3 essays)
│   └── [slug]/
├── resume/                       (PDF download or viewer)
├── contact/                      (or #contact on home)
└── 404/
```

**Recommendation:** Home is the primary index. A separate `/work` page is optional; if there are only three case studies, the home page can hold them. Add `/work` only if a fourth project or lab item needs a home.

---

## Navigation

### Desktop

- Left: wordmark.
- Center: Work, Systems, About.
- Right: availability indicator + "Résumé" + "Contact" (one solid button).
- Sticky, thin, transparent over the hero, solid after the first section.
- A subtle scroll progress line for case studies.

### Mobile

- Wordmark + menu button.
- Full-screen menu with large type: Work, Systems, About, Résumé, Contact.
- Close button must be an actual X, with 44×44px target.
- Menu opens with a 240ms fade/slide; closes on Escape and link tap.
- No CTA hidden entirely; keep "Résumé" accessible from the menu.

### Project navigation

- Previous / next project at the end of each case study.
- Sticky case-study section nav on desktop (Context, Research, Decisions, Design, System, Build, Outcome, Reflection).
- On mobile, a thin progress bar and a "Jump to" menu.

---

## User journeys

### Journey A — The recruiter (60 seconds)

1. Lands on home.
2. Reads name, role, location, availability, headline.
3. Scans three project rows and one proof strip.
4. Clicks "Résumé" (primary conversion).
5. Optionally opens LinkedIn.

**Design implications:** résumé above the fold or one click away; availability explicit; no long intro; no 3D gate.

### Journey B — The design lead (5 minutes)

1. Lands on home.
2. Reads the positioning and proof strip.
3. Opens the strongest case study.
4. Checks the 30-second summary, then scans research, decisions, screens, outcome.
5. Checks About for level and collaboration.
6. Downloads résumé or emails.

**Design implications:** outcome-first case study; scannable section headers; decision log; real artifacts; easy next project; About supports the level claim.

### Journey C — The founder (2 minutes)

1. Lands on home.
2. Looks for range, ownership, speed, business literacy.
3. Opens the merchant wallet or CRM case study.
4. Reads the story and the outcome.
5. Contacts directly.

**Design implications:** finance background surfaced early; ownership and scope visible; no jargon; direct email.

### Journey D — The peer designer (10 minutes)

1. Lands on home.
2. Notices the type, motion, and 3D.
3. Explores the systems page and case study details.
4. Checks the build quality and accessibility.
5. Shares or bookmarks.

**Design implications:** craft in details; no gimmicks; accessible motion; colophon or "how this was built" note.

---

## Page structures

### Home

1. **Hero** — name/role/status, headline, subhead, primary CTA (See the work), secondary CTA (Résumé), 3D layer stack.
2. **Selected work** — three editorial rows, in Behance order: **Designing for Engagement** (one platform, four archetypes), **Revolutionizing merchant's financial behaviour** (cash-first wallet), **Re-designing agent's dashboard** (queue-first CRM). Each row: project name, one-line problem, one-line outcome, role/year, hero visual. No card grid.
3. **Proof strip** — 4–6 facts: years, domains, shipped products, systems, languages? Keep it factual.
4. **Approach** — 3 principles with artifacts, not generic process steps.
5. **Systems teaser** — one visual + three proofs, link to `/systems`.
6. **About teaser** — portrait, 2 short paragraphs, link to About.
7. **Testimonials** — 3 quotes, compact.
8. **Contact** — big statement, email, résumé, LinkedIn, availability, timezone.
9. **Footer** — wordmark, local time, copyright, colophon.

### Work index (optional)

- A clean list of the 3 case studies.
- Filters not needed at this scale.
- Each row: index, title, domain, year, outcome, visual.
- Same editorial rhythm as home, less narrative.

### Case study

1. **Top bar** — project name, section progress, next project.
2. **Hero** — title, subtitle, outcome metric, metadata (role, team, timeline, platform, constraint), hero visual.
3. **30-second summary** — problem, bet, outcome, three bullets.
4. **01 Context** — business problem, user problem, why now.
5. **02 Research** — 3 insights with evidence.
6. **03 The bet** — hypothesis, success metrics, scope.
7. **04 Decisions** — 3 key decisions with options, trade-offs, and rationale.
8. **05 Design** — flows, key screens, states, edge cases, annotations.
9. **06 System** — components, tokens, rules, documentation.
10. **07 Build** — collaboration, handoff, QA, compromises.
11. **08 Outcome** — what shipped, signal, caveat, next.
12. **09 Reflection** — what I would do differently.
13. **Appendix** — full visuals, prototype, artifacts.
14. **Next project** — large, visual, one click.

### Systems

1. **Hero** — "The system behind the screens."
2. **Design system** — tokens, components, documentation, adoption.
3. **FlutterFlow library** — before/after, component count, ship speed.
4. **AI workflow** — research synthesis, prototyping, QA, guardrails, what changed.
5. **Design QA** — checklist, process, outcome.
6. **Proof** — numbers, screenshots, artifacts.
7. **CTA** — see it in the case studies.

### About

1. **Portrait + intro** — who, what, why.
2. **The story** — finance to design, small teams, complex products.
3. **Timeline** — 2021–now, condensed.
4. **Principles** — 3–4 beliefs with evidence.
5. **Testimonials** — 3 quotes.
6. **Résumé** — download + experience summary.
7. **Availability** — role, location, timezone, start date.
8. **Contact** — email, LinkedIn.

### Notes (optional)

- 3 essays, 600–900 words each.
- Topics: trust in cash-first fintech; what a component library actually changes; using AI without outsourcing judgment.
- Purpose: thought leadership and SEO, not volume.

### 404

- A quiet, useful page: "This page doesn't exist. Here's the work." Links to home, work, résumé.

---

## Scroll narrative map

| Scroll region | Visual state | Content state | Purpose |
|---|---|---|---|
| 0–100vh | Single product plane, floating | Hero headline, status, CTAs | Establish identity |
| 100–180vh | Plane separates into 4 layers | Layer labels: Research, Structure, Interface, System | Explain the metaphor |
| 180–260vh | Layers settle into a rail | Selected work rows appear | Transition to proof |
| Work section | Project plates, hover/focus | Three outcomes | Choose a project |
| Project transition | Plate expands into a stack | Case study hero | Continuity |
| Case study | Sticky exploded view | Sections highlight layers | Explain decisions |
| Case study end | Layers reassemble | Outcome + next project | Resolution |
| Contact | Stack folds into a card | Email, résumé | Convert |

**Rule:** no pinned section longer than two viewports. Use sticky stages with normal scroll; release the pin before fatigue.

---

## Mobile experience

- **Hero:** static layered composition instead of a live 3D camera; CSS parallax at most; same headline and CTAs.
- **Work:** full-width editorial rows; outcome first; no hover reliance.
- **Case study:** static exploded diagram, or a short muted loop; section nav as a progress bar; 12px label floor.
- **Systems:** horizontally scrollable component gallery with snap, or a vertical list.
- **Motion:** 200–300ms transitions; no camera scrubs; reduced motion respected.
- **Performance:** no postprocessing; low-res textures; lazy load below fold.
- **Touch:** 44×44px targets; no hover-only affordances.

---

## Conversion paths

| Moment | Primary action | Secondary action |
|---|---|---|
| Hero | See the work | Download résumé |
| Work row | Open case study | — |
| Case study mid | Next section | Download résumé |
| Case study end | Next project | Contact |
| About | Download résumé | Contact |
| Footer | Email | LinkedIn |

**Rules:**

- Résumé is always one click away.
- Email is a direct `mailto:` with copy fallback.
- No contact form in v1; email is faster and more personal.
- Availability and timezone are explicit.
- Every external link opens in a new tab and is labelled.

---

## URL and SEO structure

| Page | URL | Title pattern |
|---|---|---|
| Home | `/` | Monalisha Chatterjee — Product Designer, Bengaluru |
| Case study | `/work/engagement-archetypes` | Designing for Engagement — Monalisha Chatterjee |
| Case study | `/work/merchant-wallet` | Merchant Wallet — Monalisha Chatterjee |
| Case study | `/work/agent-dashboard` | Agent Dashboard — Monalisha Chatterjee |
| Systems | `/systems` | Systems — Monalisha Chatterjee |
| About | `/about` | About — Monalisha Chatterjee |
| Notes | `/notes/[slug]` | [Title] — Monalisha Chatterjee |
| Résumé | `/resume` | Résumé — Monalisha Chatterjee |
| 404 | `/404` | Page not found — Monalisha Chatterjee |

- Clean, lowercase, hyphenated slugs.
- Canonical URLs on every page.
- Per-page OG images generated from the case study hero and outcome.
- JSON-LD: `Person`, `CreativeWork` for case studies, `Article` for notes.
- Sitemap and robots generated at build.
- Redirects from the old site's URLs if the domain is reused.

---

## Wireframe descriptions (text)

### Home hero

- 12-column grid; text spans columns 1–6, 3D stage spans 7–12.
- Eyebrow at top; H1 3 lines max; subhead 2–3 lines; two CTAs.
- Status line bottom-left; scroll cue bottom-center.
- On mobile: text first, 3D stage below, CTA above fold.

### Work row

- Full-width row; 8px top rule.
- Left: index, project name, domain/year.
- Middle: one-line problem and one-line outcome.
- Right: image, 5:4 or 16:10.
- Hover: image lifts 4px, outcome underline draws in; no color explosion.
- Mobile: image first, then text; outcome visible before the fold.

### Case study hero

- Title spans 8 columns; metadata row below; outcome metric large on the right.
- Hero visual full-bleed below, with caption.
- On mobile: title, outcome metric, metadata as a 2×2 grid, visual.

### Section block

- Sticky left column: section number + label.
- Right column: prose max 68ch + figure.
- Figure captions 14px, muted.
- Annotations as small numbered pins with a caption list.

### Contact

- Full-bleed ink section; large statement; email as a link; résumé and LinkedIn as secondary.
- Availability and timezone in a small status block.
- No form; no social icons row.
