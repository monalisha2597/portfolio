# Portfolio Review — Monalisha Chatterjee

**Reviewed:** 14 November 2026  
**Scope:** Local production build of the portfolio (all five routes), desktop at 1440px, mobile at 390px, source review, and a Lighthouse 11 audit.  
**Reviewer lens:** A 2026 product design hiring manager / design lead evaluating whether to interview.

---

## Verdict

# 6.5 / 10

**The frame is an 8.5. The evidence is a 4.5. That gap is the whole story.**

Visually, this is one of the stronger designer sites I've reviewed: distinctive, confident, well-built, and clearly authored. As a *product design* portfolio in 2026, it is held back by case studies that read like captions for work that lives somewhere else.

| Context | Likely outcome |
|---|---|
| Early-stage startup, freelance, or design-generalist role | ~7.5 / 10 — strong enough to get a call |
| Senior product design role at a product-led company | ~5.5–6 / 10 — filtered out before the first call |
| Product design role where craft and brand matter heavily | ~7.5 / 10 — the visual system does a lot of work |

**The overall score is not a mathematical average.** It is weighted toward case-study depth and evidence, because that is what product-design hiring actually evaluates. The dimension scores below are diagnostic.

---

## Scorecard

| Area | Score | What's working | What's missing |
|---|---:|---|---|
| Positioning & narrative | 8.5 | Clear POV, specific voice, strong career story | Target role is broad; "product designer" could mean many things |
| Visual identity & craft | 8.5 | Cohesive neo-brutalist system, strong type, good rhythm, mobile holds up | Visual chrome sometimes louder than the work itself |
| Case study depth | 4.0 | Consistent structure, metadata, NDA note, next-project link | No research, flows, screens, states, trade-offs, or build notes |
| Evidence of impact | 3.5 | Outcomes are stated honestly | No metrics, before/after, or "what changed because of you" |
| UX / IA / conversion | 8.0 | Clear flow, good nav, contact is easy, copy-to-email is thoughtful | No résumé, no prototype links, case studies offload to Behance |
| 2026 relevance | 5.0 | Modern stack, fast site, explicit tools list | AI and systems work are tags, not evidence; leadership is asserted |
| Technical quality | 8.0 | Lighthouse 92/100/100/100, CLS 0, semantic, reduced motion | Unoptimized images, missing SEO files, several real bugs |

---

## What's genuinely strong

1. **The first screen does its job.** Role, location, years, employers, availability, and a memorable line: *"Give me the whole problem."* A hiring manager knows who you are in five seconds.
2. **The identity is not a template.** Grid paper, offset shadows, chunky display type, and mono labels are consistent across every section and breakpoint. It looks authored, not assembled.
3. **The writing has a pulse.** "Cash-first," "the awkward QA pass three days before release," "a queue of customers, not a list of features." Better than most portfolio copy.
4. **The journey timeline is a differentiator.** The finance-to-design pivot, the "Promoted" tag, and the sole-designer thread create a coherent story.
5. **Credibility signals are smart.** Real client names, a clear NDA note, verifiable LinkedIn recommendations, and "lightly edited for length" build trust.
6. **The technical baseline is strong.** Fast, accessible, zero layout shift, reduced-motion support, keyboard focus styling, semantic HTML. It proves you care about the last 10%.

---

## The 30-second test

A hiring manager sees a strong headline, a good portrait, and four Behance covers. They click one. They get three text blocks and a link to Behance. They leave without seeing a screen, a flow, or a number.

**That is the gap.** The site proves taste. It does not yet prove judgment, craft in product context, or impact.

---

## What's costing you interviews

### 1. The case studies are summaries, not case studies

Each case study page is **one cover image and roughly 200 words** across three blocks: brief, what I did, outcome.

There is no research evidence, no flows, no key screens, no states or edge cases, no rejected directions, no trade-offs, and no build/QA notes. "Ran research and interviews" and "Mapped end-to-end flows" describe activity; they do not show how you think.

A reviewer leaves without seeing a single product screen. The **"View the full case study on Behance"** button is an off-ramp — most won't take it. The portfolio should be self-contained.

**Why it matters:** Case studies are the product. In 2026, hiring managers evaluate how you frame ambiguity, make decisions, collaborate, and measure outcomes. Right now the site shows the outcome of the *portfolio*, not the outcome of the *product work*.

### 2. Outcomes are outputs

Current outcome language:

- "The first designed versions of both games were delivered into the product."
- "The wallet moved from research to a defined, prototyped product experience."
- "The CRM shipped as a working web application."
- "Published as a self-initiated case study on Behance."

These say what you produced, not what changed. There is no adoption, engagement, retention, efficiency, error-rate, support-load, or before/after.

Even under NDA, directional results are better than activity statements:

- "First top-up completion improved; balance-related support questions fell."
- "The prototype became the build spec; 3 of 4 flows shipped unchanged."
- "The research and handoff pattern was reused in two later Jabu products."

**Rule of thumb:** an output is something you made. An outcome is something that changed after you made it.

### 3. The visual proof fights the story

- The first cover says *"How archetype-driven landing pages transformed loyalty platform"* — but the case study is about two games: Claw Machine and Bubble Pop.
- The merchant cover is a portrait, not the wallet interface.
- Three of four alt texts describe screens that are not in the image.
- The covers are 808×632 Behance thumbnails rendered at ~1,267px wide, so they are soft even at 1× and roughly 3× short at 2×.

This is the fastest way to lose trust. The images suggest the work was not finished — or that the covers were placeholders.

**Fix:** replace all four covers with real product imagery, use one consistent cover system, export at 1600×1250 or larger in WebP/AVIF, and rewrite alt text to describe the actual UI.

### 4. "Shipped, not concepts" is contradicted by project 04

The work section says:

> "Loyalty, CRM, commerce and fintech, shipped product work, not concepts."

But project 04 is explicitly **self-initiated**, and the practice list is concepts from 2021.

**Fix:** say "Three shipped products and one self-initiated concept." The honest version is still strong, and it protects the credibility of the other three.

### 5. Recruiters cannot take the next step

- **No résumé link**, even though `Profile.pdf` (60KB) is sitting in the repo root.
- **No prototype or video walkthrough.**
- **No target-role line** ("Product designer, B2B SaaS/fintech, 0→1").
- **Gmail address** on a custom-domain site (`mona.chatterjee25@gmail.com`).
- **No clear seniority signal.** Four years is solid, but the site does not say what level or scope you want next.

These are small frictions that compound when someone is deciding whether to email you.

### 6. The 2026 signals are tags, not evidence

- **"Figma AI"** is a chip.
- **"Design systems"** and **"FlutterFlow"** are tags.
- **"Accessibility"** is a chip, but no audit, fix, or principle is shown.
- **Collaboration and leadership** are asserted ("peer critique sessions," "design QA"), but not evidenced with artifacts or outcomes.

In 2026, the differentiator is not "I can make screens." It is judgment with AI, systems that scale, and influence across a team. Show one thing you can honestly claim:

- an AI-assisted research or prototyping workflow, with before/after;
- an AI feature you designed, with the interaction model and guardrails;
- the FlutterFlow component library with adoption/usage;
- a design-system contribution with before/after component count or ship speed.

Do not claim what you cannot show.

---

## The 2026 context

The bar has moved. A strong 2026 product design portfolio typically has:

- **Fewer, deeper case studies** — 2–3 at 800–1,200 words with 8–15 visuals each, not 4 at 200 words.
- **Evidence of judgment** — the decision, the trade-off, the thing you rejected, and why.
- **Measurable impact** — a metric, a directional signal, or a credible qualitative outcome.
- **AI fluency** — not tool names, but how AI changed your process or the product.
- **Systems thinking** — components, states, edge cases, governance, adoption.
- **Proof of collaboration** — how you worked with PMs, engineers, and stakeholders.
- **A self-contained narrative** — the reviewer should not need Behance, LinkedIn, or a call to understand the work.

Your site has the taste and the build quality. It does not yet have the evidence layer.

---

## Priority plan

| Priority | Action | Impact | Effort |
|---|---|---|---|
| P0 | Rebuild two case studies at depth | Very high | 2–3 days each |
| P0 | Add a "what changed" strip at the top of each case study | High | 2 hours |
| P0 | Replace covers with real product imagery + accurate alt text | High | 1 day |
| P1 | Publish and link the résumé | High | 30 minutes |
| P1 | Add a target-role line and domain email | Medium | 1 hour |
| P1 | Add interaction proof (prototype video/GIF) | High | 1–2 days |
| P1 | Add one honest 2026 signal (AI or systems) | High | 1 day |
| P2 | Tighten copy, certifications, testimonials, practice list | Medium | 3–4 hours |
| P2 | Fix technical/a11y/SEO bugs | Medium | 3–4 hours |
| P2 | Raise micro-type and improve readability | Medium | 1 hour |

### P0 — the biggest score lift

- [ ] **Rebuild two case studies properly.** Pick the merchant wallet and the games (or the CRM). Take each to 800–1,200 words with 8–15 visuals: context and constraints, 3 research insights with evidence, the bet and success metrics, 2–3 directions with trade-offs, key flows and screens with annotations, states/edge cases, build/QA notes, outcome, and what you would do next.
- [ ] **Add a "what changed" strip at the top of each case study.** One line of outcome, plus role, team, duration, and constraint. Put the result before the process.
- [ ] **Replace all four covers with real product imagery.** One consistent system: a real screen, a short outcome line, 1600×1250+, WebP/AVIF. For "Designing for engagement," show the Claw Machine and Bubble Pop.
- [ ] **Rewrite alt text to match the images.** Describe the actual interface, not the case study you wish were there.
- [ ] **Fix the engagement cover mismatch.** The current cover story and the case study content are about different projects.

### P1 — next

- [ ] **Publish the résumé.** Move `Profile.pdf` into `public/` and link it in the nav and contact section.
- [ ] **Add a target-role line** near the hero, e.g. "Product designer for B2B SaaS and fintech, research to ship."
- [ ] **Replace Gmail with a domain email** once the domain is live, e.g. `hello@monalishachatterjee.com`.
- [ ] **Add interaction proof.** A 20–40 second prototype walkthrough or embedded video for one project.
- [ ] **Add one honest 2026 signal.** AI-assisted workflow, AI feature, or the component library with adoption.
- [ ] **Add "Team" and "Duration" to case study metadata.** Reviewers want scope, not just role.

### P2 — polish

- [ ] **Collapse the four 2021 Coursera certifications** into one line or move them to LinkedIn. They read junior for 4+ years.
- [ ] **Cut testimonials to three** and choose quotes about design judgment, collaboration, or impact, not only speed and organization.
- [ ] **Link practice items individually** or remove the block. All four currently point to the Behance root.
- [ ] **Reduce repetition.** "Available for work" appears three times; "sole designer" appears across multiple sections.
- [ ] **Run a copy consistency pass.** Pick one spelling convention (US or UK), check the "four years" claim against 2021–2026, and name the markets instead of "Africa" if comfortable.
- [ ] **Raise the micro-type.** Many labels are 0.62–0.72rem (10–11.5px) uppercase mono. Set a 12px floor and shorten long strings.

---

## A case study structure that would fix this

Use this for two projects. Two deep case studies will outperform four shallow ones.

1. **Header** — outcome + role/team/timeline/constraint
2. **01 Context** — business problem, user problem, why now
3. **02 Research** — three insights with quotes or evidence
4. **03 The bet** — hypothesis and success metrics
5. **04 Explore** — two or three directions, trade-offs, what you rejected
6. **05 Design** — flows, key screens, states, edge cases, annotations
7. **06 Build** — collaboration, QA, compromises
8. **07 Outcome** — what shipped, the signal, what you would do next
9. **08 Appendix** — full visuals and prototype link

**Target:** 800–1,200 words + 8–15 visuals. No more than 2–3 case studies at this depth.

### Definition of done

After 90 seconds on the case study, a reviewer should be able to explain:

- the problem and why it mattered;
- your specific bet or approach;
- one trade-off you made;
- one thing that changed because of the work.

If they cannot, the page is still a summary.

### Rewrite example

Replace brackets only with true numbers.

> **Current:** "The wallet moved from research to a defined, prototyped product experience, with flows and decisions documented for the team to build against."
>
> **Better:** "Shipped the MVP wallet to [N] merchants in [market]. [X]% completed their first top-up without support, and the research patterns were reused in two later Jabu products. Scope: [N] flows, [N] screens, [N] weeks; team: 1 PM, 3 engineers."

---

## Cover image system

Right now the four covers look like four different portfolio eras: a dark Behance poster, a blue-toned portrait, a lavender dashboard cover, and a plant illustration. They do not read as one body of work.

**Recommended system:**

- **Format:** 16:10 or 4:3, minimum 1600×1250, WebP/AVIF, under 200KB.
- **Content:** one real product screen as the hero, with a short outcome line (5–8 words).
- **Type:** use the site's own type system, not Behance poster typography.
- **Consistency:** same framing, same label placement, same crop logic.
- **Alt text:** describe the actual UI. Example: "Claw Machine game screen with a prize grid, timer, and play button."

This single change will make the work section feel ten times more credible before anyone clicks.

---

## Technical, accessibility, and SEO audit

### Lighthouse 11 (local production build)

| Category | Score |
|---|---:|
| Performance | 92 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

**Metrics:** FCP 1.2s · LCP 3.3s · CLS 0 · TBT 0ms · Speed Index 2.0s

LCP 3.3s is the main drag. The hero portrait and unoptimized PNG covers are the likely causes.

### Bugs and fixes

| Issue | Evidence | Fix |
|---|---|---|
| Mobile menu close icon renders as `>` instead of `X` | The two bars are ~20px apart but translate only ±3.7px, so they never meet | Absolutely position the bars or translate ±10px |
| Footer "Top ↑" is broken on case study pages | It targets `#top`, which only exists on the homepage | Add `id="top"` to `<main>` or hide the link on case studies |
| Rohan's testimonial photo is missing | `public/img/people/rohan-kalra.jpg` does not exist; initials fallback saves it | Add the photo or use initials for all testimonials |
| Alt text describes images that are not there | 3 of 4 case study covers | Rewrite alt text after replacing covers |
| Inconsistent spelling | "Revolutionizing" (US) vs "behaviour" (UK) | Pick one convention |
| No `sitemap.xml`, `robots.txt`, or branded 404 | `dist/` contains none | Add `@astrojs/sitemap`, `public/robots.txt`, `src/pages/404.astro` |
| OG image is always the portrait | `Base.astro` hardcodes `/img/monalisha.jpg`; `og:type` stays `website` | Pass the project cover and use `article` |
| Content is invisible without JS | `[data-reveal]` starts at `opacity: 0` | Add a `<noscript>` fallback or scope reveal to a `.js` class |
| Tiny micro-type | Labels at 0.62–0.72rem (10–11.5px) | Set a 12px floor |
| Unused assets | `instrument-*` fonts, `archivo.woff2`, unused `link` fields | Remove or use them |
| Domain did not resolve at review time | `monalishachatterjee.com` returned no DNS record | Verify DNS before sharing the URL |

### Content and credibility checks

- [ ] Confirm the "four years" claim. 2021–2026 is five calendar years; "4+ years in product design" may be accurate depending on start date, but the site repeats "four years."
- [ ] Fix the "shipped, not concepts" contradiction.
- [ ] Make sure every alt text matches the image.
- [ ] Check every external link (Behance galleries, LinkedIn).
- [ ] Decide whether "Open to work" and "Available for work" are both needed.
- [ ] Consider "Tap to copy" instead of "Click to copy" on mobile.
- [ ] Remove or qualify "Figma AI" unless you can show the work.

---

## What not to change

These are working. Do not lose them in the rewrite.

- **The headline and voice.** "Give me the whole problem" is memorable and specific. Keep it.
- **The visual system.** The grid, borders, shadows, color, and typography are cohesive. Do not sand off the personality.
- **The journey section.** The finance-to-design pivot is a genuine differentiator.
- **The social proof.** Real names, real roles, verifiable recommendations. Keep the transparency.
- **The NDA note.** It is honest and protects the work.
- **The performance and accessibility baseline.** 92/100/100/100 with CLS 0 is rare. Preserve it.
- **The contact experience.** Copy-to-email with a fallback is thoughtful.

---

## Suggested two-week sequence

**Week 1**

1. Rebuild the merchant wallet case study (layout + visuals + outcome strip).
2. Rebuild the engagement games case study (layout + visuals + outcome strip).
3. Create the four-cover system and replace the current images.
4. Publish and link the résumé; add the target-role line.

**Week 2**

5. Add interaction proof to one project.
6. Add one 2026 signal (AI or systems).
7. Copy pass: remove contradictions, tighten certifications/testimonials, fix spelling.
8. Technical pass: menu icon, `#top`, missing photo, OG images, sitemap/robots/404, micro-type.
9. Re-run Lighthouse and a mobile pass.
10. Ask one designer and one non-designer to complete the 90-second test.

---

## Bottom line

You have the hard part: taste, a point of view, and the ability to build a site that feels like a person. What is missing is the part hiring managers actually evaluate: **evidence of how you think and what changed because of you.**

Fix the two case studies and the covers, and this moves to roughly **8.5 / 10** without touching the visual system.

---

*Review conducted on the local production build. Scores are a hiring-lens judgment, not a claim of objectivity. The repository was not modified during the review.*
