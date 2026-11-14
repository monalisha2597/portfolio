# 00 — Brief

## Background

The current portfolio has strong visual craft and a clear voice, but it stops at the summary level: four case studies with one cover image and roughly 200 words each. A hiring manager can see taste; they cannot see how Monalisha thinks, what she decided, or what changed.

This project starts from zero. New identity, new structure, new copy, new assets, new code. The current site is a lesson, not a source.

## The problem

A product design portfolio is judged in three questions:

1. **Can she do the work?** — evidence of craft, systems, research, and shipped product.
2. **How does she think?** — decisions, trade-offs, collaboration, and judgment.
3. **What changed because of her?** — outcomes, metrics, or credible signals.

The current site answers question one visually and questions two and three barely at all. The new site must answer all three before the first scroll ends.

## The brief

**Build a benchmark product design portfolio that proves Monalisha can take complex, ambiguous B2B problems from research to shipped systems — using a spatial, editorial experience that is itself evidence of craft.**

## Audience

| Audience | What they need | What they do |
|---|---|---|
| Design hiring manager / design lead | Proof of thinking, craft, collaboration, and impact | Skims home, opens one case study, checks résumé |
| Recruiter / talent partner | Role fit, level, location, availability, easy contact | Scans headline, downloads résumé, sends email |
| Founder / startup lead | Range, ownership, speed, business literacy | Reads the story, looks for 0→1 proof, contacts |
| Peer designer | Taste, systems, craft, references | Explores details, motion, and build quality |

## Jobs to be done

- "Help me understand who she is and what she's for in five seconds."
- "Show me how she thinks, not just what the screens look like."
- "Give me evidence that the work shipped and changed something."
- "Let me verify the claims without leaving the site."
- "Make it easy to download her résumé and contact her."
- "Show me craft in the site itself — speed, accessibility, detail."

## Goals

1. Position Monalisha as a **senior product designer** for complex B2B products: fintech, loyalty, CRM, 0→1.
2. Make two case studies genuinely deep: context, research, decisions, system, build, outcome, reflection.
3. Create a distinctive visual and spatial identity that is memorable without becoming a gimmick.
4. Use 3D scroll as a narrative device that explains product thinking.
5. Add 2026 evidence: AI-assisted workflow, systems at scale, collaboration, and measurable impact.
6. Remove every conversion friction: résumé, email, availability, location, timezone.
7. Set a technical bar: fast, accessible, resilient, and maintainable.

## Non-goals

- Not a 3D demo reel or an Awwwards experiment that sacrifices clarity.
- Not a visual/brand designer portfolio; product work must lead.
- Not a blog-first site; notes are optional and secondary.
- Not a redesign of the current site; no inherited visual system.
- Not a four-case-study archive; depth over breadth.
- Not a custom CMS or a complex app; content should be easy to maintain.
- Not a horizontal-scroll experience; vertical, native, predictable.

## Constraints

- **NDA:** client work needs permission and redaction; some screens may be blurred or rebuilt.
- **Metrics:** exact numbers may be unavailable; directional and qualitative evidence is acceptable if labelled.
- **Solo build:** one designer, limited time; the experience must be scoped to what can be maintained.
- **Performance:** 3D must not compromise LCP, INP, or mobile usability.
- **Accessibility:** WCAG 2.2 AA; content must work without WebGL, motion, or JavaScript.
- **Timeline:** 10 weeks full-time, 12–14 weeks part-time.
- **Budget:** type licenses, 3D assets, and tooling need a small budget; free fallbacks must exist.

## Assumptions

- 2 deep case studies + 1 medium case study, all three from the first three Behance projects.
- The site is positioned at **Senior Product Designer** level, with senior evidence: strategy, systems, influence, and outcomes.
- A `/systems` page is the strongest 2026 differentiator.
- The site is statically generated, with one React island for 3D.
- Content lives in MDX; a CMS is optional.
- The domain and domain email will be set up before launch.
- Monalisha can supply research artifacts, screens, and at least directional outcomes.

## Success metrics

### Hiring outcomes

- 3+ qualified interview loops within 60 days of launch.
- 5+ recruiter or founder inbound conversations within 90 days.
- 60%+ of visitors who open a case study reach the outcome section.
- 25%+ of homepage visitors open a case study.
- 10%+ of case study readers download the résumé or contact.

### Quality outcomes

- Benchmark score: 9.2/10.
- Lighthouse: 95+ performance, 100 accessibility, 100 best practices, 100 SEO.
- Core Web Vitals: LCP < 2.0s, INP < 200ms, CLS < 0.05.
- 60fps desktop, 30fps minimum on mid-range mobile.
- Zero critical axe issues; full keyboard and screen-reader pass.
- No broken links, no placeholder copy, no missing alt text.

### Content outcomes

- 2 case studies at 800–1,200 words with 8–15 visuals each.
- The lead case study shows the measured outcomes (+42% engagement, +67% point utilisation, +31% campaign participation, 3.2× redemption) with a caveat and source.
- 1 systems page with three proofs: design system, FlutterFlow, AI workflow.
- 1 about page with story, timeline, testimonials, résumé.
- 3 testimonial quotes focused on judgment, collaboration, or impact.
- 1 downloadable résumé, kept current.

## Scope

### In scope

- New brand identity and wordmark.
- Home, work index, 3 case studies, systems, about, contact, 404.
- Optional notes (3 essays) if time allows.
- 3D hero, project transition, and case-study exploded view.
- Motion system and scroll choreography.
- Content strategy, copywriting, and visual asset production.
- Performance, accessibility, SEO, analytics, and launch.

### Out of scope for v1

- User accounts, comments, newsletter, or a custom CMS.
- A full blog with frequent publishing.
- Multi-language support.
- Experimental WebGPU-only features.
- Audio, custom cursors, or a "enter site" gate.

## Stakeholders

- **Monalisha** — subject, designer, decision-maker, content owner.
- **Reviewer / mentor** — critique at strategy, design, and pre-launch.
- **Developer** — build partner if the 3D scope exceeds solo capacity.
- **Clients / managers** — permissions for work, quotes, and metrics.

## Definition of success

A design lead opens the site, understands the positioning in five seconds, opens one case study, and after 90 seconds can explain:

- the problem and why it mattered;
- Monalisha's specific bet;
- one trade-off she made;
- one thing that changed because of the work.

Then they download the résumé or email her. That is the brief.
