# 05 — Case Study System

## Why this is the most important document

The homepage gets attention. The case study earns the interview.

A 2026 case study is not a gallery of screens. It is a **decision record**: the problem, the constraints, the bet, the evidence, the trade-offs, the build, and the outcome. The reader should finish it knowing how you think — not just what you made.

### The standard

After 90 seconds, a reviewer should be able to explain:

1. The problem and why it mattered.
2. Your specific bet or approach.
3. One trade-off you made.
4. One thing that changed because of the work.

If they cannot, the case study is still a summary.

---

## Template

Each case study is 800–1,200 words and 8–15 visuals. Two deep case studies minimum; one medium.

| Section | Purpose | Words | Visuals |
|---|---|---:|---:|
| Hero | Title, subtitle, outcome, metadata | 40–60 | 1 hero image |
| 30-second summary | Problem, bet, outcome, 3 bullets | 60–90 | 0–1 |
| 01 Context | Business problem, user problem, why now | 100–150 | 1–2 |
| 02 Research | 3 insights with evidence | 150–200 | 2–3 |
| 03 The bet | Hypothesis, success metrics, scope | 80–120 | 1 |
| 04 Decisions | 3 key decisions with options and trade-offs | 150–200 | 2–3 |
| 05 Design | Flows, key screens, states, edge cases | 150–200 | 4–6 |
| 06 System | Components, tokens, rules, documentation | 80–120 | 1–2 |
| 07 Build | Collaboration, handoff, QA, compromises | 80–120 | 1 |
| 08 Outcome | What shipped, signal, caveat, next | 80–120 | 1–2 |
| 09 Reflection | What I would do differently | 50–80 | 0 |
| Appendix | Full visuals, prototype, artifacts | — | Optional |

**Total:** ~1,000–1,200 words, 12–18 images. If it runs long, cut context, not evidence.

---

## Section-by-section

### Hero

- **Title:** the problem, not the deliverable. "Designing trust for cash-first merchants" beats "Merchant Wallet Redesign."
- **Subtitle:** one sentence that frames the tension.
- **Outcome:** one number or a directional signal, with a caveat if needed.
- **Metadata:** role, team, timeline, platform, constraint. Example: "Lead designer · 1 PM, 3 engineers · 8 weeks · Mobile web · NDA."
- **Hero visual:** the strongest real screen, not a poster.

### 30-second summary

A boxed summary at the top:

- **Problem:** one sentence.
- **Bet:** one sentence.
- **Outcome:** one sentence.
- **Three bullets:** what you did, what changed, what you learned.

This is for the skimmer. It must be true without the rest of the page.

### 01 Context

- Business goal: activation, retention, trust, support load, revenue.
- User problem: who, when, what they are trying to do, what gets in the way.
- Why now: the trigger for the project.
- Constraints: time, team, tech, compliance, NDA.
- One quote or artifact that makes the problem human.

**Avoid:** company boilerplate, "the client wanted a redesign," a long market overview.

### 02 Research

- Three insights, each with evidence: a quote, a behavior, a data point, or an observation.
- Show the artifact: interview notes, affinity map, journey map, usability clip.
- Explain what the insight changed.
- Include one surprise or contradiction.

**Avoid:** "We conducted 12 interviews" with no findings. The number is not the insight.

### 03 The bet

- The hypothesis: "If we do X, then Y will change because Z."
- Success metrics: what you would measure, baseline, target.
- Scope: what was in, what was out, and why.
- The risk: what could make this wrong.

**Avoid:** a feature list disguised as strategy.

### 04 Decisions

The heart of the case study. Three decisions, each with:

- The question.
- The options considered.
- The trade-off.
- The choice and the rationale.
- The evidence or principle behind it.
- What you would do differently.

Use a simple decision log:

| Decision | Options | Trade-off | Choice | Why |
|---|---|---|---|---|
| Trust cue placement | Balance first / actions first | Confidence vs task speed | Actions first, balance persistent | Research showed merchants checked balance repeatedly; persistent balance reduced anxiety without blocking the task |

**Avoid:** presenting the final design as inevitable. Show the fork.

### 05 Design

- The flow: one diagram, annotated.
- The key screens: 4–6, each with a caption that explains a decision.
- States: empty, loading, error, success, edge cases.
- Interaction: one short video or prototype clip.
- Annotations: numbered pins with a list; never rely on the image alone.

**Avoid:** a wall of screens with no hierarchy. Every image needs a reason.

### 06 System

- Components and tokens used or created.
- Rules and documentation.
- How the system scaled beyond this project.
- Adoption evidence if available.

**Avoid:** a Figma component screenshot with no explanation of the rule.

### 07 Build

- How you worked with PM and engineering.
- Handoff artifacts.
- Design QA: what you checked, what broke, what you fixed.
- Compromises: what shipped differently and why.
- One conflict or difficult conversation, handled honestly.

**Avoid:** "Collaborated with cross-functional teams." Show the artifact or the moment.

### 08 Outcome

- What shipped.
- The signal: metric, directional change, qualitative evidence, or adoption.
- The caveat: what you cannot claim, and why.
- What happened next.
- A quote from a user, PM, or engineer if available.

**Metric format:**

> Baseline → change → evidence → caveat.
> Example: "First top-up completion moved from [X]% to [Y]% over [N] weeks. The sample was small and the release overlapped a pricing change, so treat it as directional."

If metrics are unavailable:

> "The prototype became the build spec; 3 of 4 flows shipped unchanged. The fourth failed usability twice and was cut. The research pattern was reused in two later products."

**Avoid:** "Delivered a delightful experience." It says nothing.

### 09 Reflection

- What you would do differently.
- What you would keep.
- What you learned about the domain, the team, or yourself.
- One sentence of advice for a designer facing the same problem.

This is where senior judgment shows. Do not skip it.

### Appendix

- Full screens, flows, research artifacts, prototype link.
- Label what is NDA-redacted.
- Keep the main narrative clean; put the archive at the end.

---

## Outcome framework

### Evidence ladder

Use the highest rung available. Be explicit about the rung.

1. **Measured business/user outcome** — retention, conversion, activation, support load, error rate.
2. **Measured product behavior** — task completion, time on task, drop-off, adoption.
3. **Qualitative signal** — usability findings, quotes, stakeholder feedback.
4. **Shipped artifact** — what went live, what was reused, what was cut.
5. **Process evidence** — prototype, decision record, system contribution.

Rung 5 is still evidence if it is honest. What is not evidence: "the team was happy," "the design was well received," "it looked great."

### Metric worksheet

| Field | Prompt |
|---|---|
| Claim | What changed? |
| Metric | Which number or behavior? |
| Baseline | What was it before? |
| After | What was it after? |
| Window | Over what period? |
| Source | Analytics, research, support, PM? |
| Permission | Can this be shared? |
| Caveat | What else changed? |
| Fallback | If no number, what is the honest signal? |

### NDA handling

- Label the project: "Client work, shared with permission. Some screens redacted."
- Replace sensitive numbers with indexes or ranges: "~2× faster," "reduced by roughly a third."
- Rebuild screens with fictional data if needed; say so.
- Never imply a metric you cannot defend.
- Get written permission for logos, screens, and quotes.

---

## Visual checklist

A deep case study must include:

- [ ] 1 hero screen or composition.
- [ ] 1 context artifact (photo, quote, journey, before state).
- [ ] 3 research artifacts or evidence visuals.
- [ ] 1 flow diagram.
- [ ] 4–6 key screens, each annotated.
- [ ] 2 states or edge cases.
- [ ] 1 system/component visual.
- [ ] 1 build/QA artifact.
- [ ] 1 outcome visual (metric, before/after, quote).
- [ ] 1 reflection or "what's next" visual.

### Image rules

- 2000px wide minimum; AVIF/WebP; responsive `srcset`.
- Consistent device scale, shadow, and background within a project.
- Captions: what it is, why it matters.
- Annotations: numbered, with a list below.
- Redact names, emails, account numbers.
- No Behance posters; no fake UI; no stock photos.
- Alt text describes the actual interface, not the case study.

---

## Writing rules

### Structure

- One idea per paragraph. 2–4 sentences.
- Start with the problem, not the company.
- Use verbs: decided, cut, tested, shipped, changed.
- Name the trade-off. If there was no trade-off, it wasn't a decision.
- Put the outcome in the first viewport and repeat it at the end.
- Use captions to carry the story; many readers only scan images.

### Tone

- First person, past tense.
- Confident, not triumphant.
- Credit the team; own your decisions.
- Admit what failed.
- No jargon, no buzzwords, no "passionate."

### Numbers

- Use real numbers where possible.
- Round for readability: "~35%" not "34.7%."
- State the window and the source.
- Add a caveat if the sample is small or confounded.

### Accessibility

- Descriptive alt text for every image.
- Captions and transcripts for video.
- No text baked into images without an HTML equivalent.
- Color is never the only carrier of meaning.

---

## Case study outline 1 (lead): Designing for Engagement

*Evidence from the published project. Anything in `[ ]` must be confirmed before copy lock. See [11 — Project Source Notes](./11-project-source-notes.md).*

**Title:** One platform, four kinds of loyalty
**Subtitle:** How a configurable archetype system let one loyalty platform fit telecom, banking, retail, and travel — without building four products.
**Outcome:** **+42% engagement, +67% point utilisation, +31% campaign participation, 3.2× reward redemption** across 8 B2B clients in 6 months; the four archetypes now serve 12+ industries.

**Metadata:** [Role] · [team] · [timeline] · Mobile app / white-label platform · [permission status].

**30-second summary:**
- Problem: one loyalty homepage cannot serve telecom, banking, retail, and travel at once.
- Bet: four configurable engagement archetypes built from one modular card system.
- Outcome: [metric or shipped adoption].
- Learned: personalisation at platform scale is an information-architecture problem before it is a visual one.

**01 Context:** The platform serves clients in four industries with different engagement drivers. Telecom users want to burn points fast; banking customers respond to progress milestones; travel users hunt premium rewards. A one-size-fits-all homepage produced low engagement, underutilised points, and frustrated users. Rebuilding per client was too slow.

**02 Research:** Three artifacts: engagement models across **6 industries**, **500+ user sessions**, and **25+ loyalty platforms** benchmarked. Three insights:
1. The motivation differs by industry, not by demographic.
2. A single hero module forces the wrong first action for at least three of the four segments.
3. Clients want differentiation without a new build.

**03 The bet:** Define four archetypes — Point Utilization, Progress Driven, Reward Driven, Balanced Hybrid — and compose each from shared modules. Success: engagement/utilisation, client adoption, time to launch a new client.

**04 Decisions (candidate, confirm):**
- Four archetypes vs one adaptive homepage vs per-client bespoke.
- Balance-first vs journey-first vs promotion-first hero.
- Shared module library vs archetype-specific components.
- How much client customisation the system allows before it stops being a system.

**05 Design:** Four annotated homepages, module inventory, composition rules, states, and the hybrid case where motivations are mixed.

**06 System:** The modular card system, naming, token/theming rules, and the "same modules, different emphasis" principle.

**07 Build:** Handoff, theming constraints, QA across client brands, what was cut.

**08 Outcome:** [metric / adoption / qualitative signal], caveat, what shipped.

**09 Reflection:** What to test earlier; how far to take configurability.

**3D moment:** "One core, four surfaces" — the archetype variant of the exploded view. See [04 — 3D & Motion](./04-3d-and-motion.md).

---

## Case study outline 2: Revolutionizing merchant's financial behaviour

**Title:** Designing trust for cash-first merchants
**Subtitle:** A wallet for people whose money has always been physical — where trust is earned in the first thirty seconds and tested at every failed transfer.
**Outcome:** **No post-launch metric is visible.** Use the shipped scope as the honest signal: three products (merchant app, agent app, admin platform), the full money-rail set, savings and KYC. Ask for adoption before claiming more.

**Metadata:** [Role] · [team] · [timeline] · Mobile app + agent tooling · Jabu, shared with permission.

**30-second summary:**
- Problem: 65% of the population is unbanked; merchants run on cash and absorb the risk.
- Bet: a wallet plus agent-assisted rails that digitise savings and collections without pretending cash does not exist.
- Outcome: [metric or shipped signal].
- Learned: trust is a flow property, not a marketing claim.

**01 Context:** Sub-Saharan Africa's banking infrastructure leaves most people unbanked. Small retailers depend on cash, exposing them to theft and fraud, and use informal saving methods. Jabu's own last-mile collection suffers delays, daily cash counting, and lower basket size. The project is three-sided: merchants, agents, and admins.

**02 Research:** A four-stage **Jabu Ambassador Program** with existing customers: kickoff, persona interviews, user interviews, and task-based user testing. Three insights to evidence:
1. Cash is not a habit; it is the only trusted rail.
2. A failed transfer feels like losing cash, not a software error.
3. Agents are the trust proxy between the app and the merchant.

**03 The bet:** Let merchants save in-app and earn interest without a bank, while digitising Jabu's collection. Scope across Send, Request, Cash in, Cash out, Savings, and Pay bills — plus the agent and admin surfaces that make it operable.

**04 Decisions (candidate, confirm):**
- Cash-first mental model vs a conventional fintech wallet.
- Agent-assisted rails vs self-serve only.
- Savings/interest inside the wallet vs a separate product.
- How to represent pending, failed, and reversed money without eroding trust.

**05 Design:** Onboarding, wallet, savings, transfer, cash-in/out, pay bills, and the failure/reversal states. The full flow map is the centrepiece artifact.

**06 System:** Money-movement components, status language, limits/fees/OTP patterns, reusable transaction states.

**07 Build:** Handoff, agent alignment, QA on money states, what shipped differently.

**08 Outcome:** [metric / adoption / qualitative signal], caveat.

**09 Reflection:** What to validate earlier; what to simplify.

**3D moment:** The exploded view, using the money rails as layers: merchant surface → agent rail → bank/mobile-money rail → reconciliation.

---

## Case study outline 3 (medium): Re-designing agent's dashboard

**Title:** A queue, not a feature list
**Subtitle:** Rebuilding an agent dashboard around the call, not the record — and cutting the information that made the day harder.
**Outcome:** **75% completed the assigned task independently** in a 5-agent usability test; the redesigned board shipped. This is task completion, not speed — do not convert it into a performance claim.

**Metadata:** [Role] · [team] · [timeline] · Desktop web · Jabu CRM, shared with permission.

**30-second summary:**
- Problem: the dashboard showed everything at once, so agents scrolled instead of working.
- Bet: reorganise around the call and split the board into Stats, Call-related, and General info.
- Outcome: 75% independent task completion in testing; the board shipped.
- Learned: in operational tools, hierarchy is the feature.

**01 Context:** Agents handle calls, orders, callbacks, and follow-ups. The old board fixed customer information at the top, left little room for the call, and buried performance data. The cost is time per call and missed context.

**02 Research:** Hotjar usage monitoring plus agent conversations. Six findings from the project:
1. No filtering by customer group or type.
2. Too much initial information caused a long scroll.
3. Agents wanted a dedicated performance view.
4. A call-result logic tree would improve retention data.
5. The fixed customer frame consumed the board.
6. Offers should be visible in the dashboard, not a separate mobile app.

Then a **5-agent usability test** (Namibia and Zambia, remote, 15–20 minutes) found that 75% completed the task independently, but most struggled to find the daily-target drawer and wanted a way to mark removed or duplicate customers.

**03 The bet:** Rebuild the information architecture before the UI: Stats, Call-related, General info.

**04 Decisions (candidate, confirm):**
- Queue-first vs record-first.
- Fixed customer context vs collapsible context.
- One dense board vs tabs plus a performance view.
- Filtering model and call-result logic tree.

**05 Design:** Old dashboard → reorganised information → broad categorisation → final board, with states for empty queue, incoming call, callback, and follow-up.

**06 System:** Dashboard components, data-density rules, status patterns, documentation.

**07 Build:** Engineering partnership, design QA, what shipped differently.

**08 Outcome:** [metric / adoption / qualitative signal], caveat.

**09 Reflection:** What to measure earlier; what to change in the system.

**3D moment:** Optional static exploded view — the same dashboard split into stats, call context, and customer record. Keep it light; this is the medium case study.

---

## Quality checklist

A case study is ready only when:

- [ ] The outcome is in the first viewport.
- [ ] The 30-second summary is true without the rest.
- [ ] Three research insights have evidence.
- [ ] Three decisions show options and trade-offs.
- [ ] The flow is visible.
- [ ] 4–6 screens are annotated.
- [ ] States and edge cases are shown.
- [ ] The system is explained.
- [ ] Build/QA is documented.
- [ ] The outcome has a source and a caveat.
- [ ] The reflection is honest.
- [ ] Every image has a caption and alt text.
- [ ] No placeholder text, no fake numbers.
- [ ] It works at 390px.
- [ ] It works with reduced motion.
- [ ] It is self-contained; no external link required.

---

## Common mistakes to avoid

1. **The gallery.** Screens with no decisions.
2. **The process parade.** Double diamond diagrams with no specifics.
3. **The hero shot.** A beautiful cover, no evidence.
4. **The "we."** Hiding your role behind the team.
5. **The fake metric.** A number with no source or caveat.
6. **The off-ramp.** "See the full case study on Behance."
7. **The feature list.** "We designed onboarding, dashboard, settings…"
8. **The happy path.** No errors, no edge cases, no failure.
9. **The missing outcome.** "Delivered" is not a result.
10. **The missing reflection.** No learning, no judgment.
