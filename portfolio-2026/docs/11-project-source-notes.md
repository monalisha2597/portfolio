# 11 — Project Source Notes

Working notes from the three Behance projects that will become the case studies. This is the factual base for [05 — Case Study System](./05-case-study-system.md) and [06 — Content Plan](./06-content-plan.md).

> **Status:** Captured 14 Nov 2026. Facts are extracted from the public project pages and their images. Anything not visible is marked **unknown** and must not be invented.

---

## How these were captured

| Attempt | Result |
|---|---|
| Direct `curl` to a project page | **403 Forbidden** |
| `webfetch` on the project page | **403 Forbidden** |
| Profile page `https://www.behance.net/monalishachatterjee` | Succeeded |
| Project pages through the Jina reader (`https://r.jina.ai/<url>`) | **Succeeded** |

**Caveat:** Behance galleries are largely image-based. The project pages expose titles, tags, dates, module counts, and image URLs — not body copy. The detail below comes from reading the published images. Any copy written from it must be checked against the original files and Monalisha's memory before launch.

Local reference images are stored in `research/behance/` (gitignored; not for publication).

---

## Profile order (the "first three")

| # | Project | URL | Published | Modules |
|---|---|---|---|---:|
| 1 | **Designing for Engagement** | `/gallery/255795573/Designing-for-Engagement` | 16 Sep 2026 | 7 |
| 2 | **Revolutionizing merchant's financial behaviour** | `/gallery/193015809/Revolutionizing-merchants-financial-behaviour` | 2024 (asset timestamps Feb–May 2024; exact date unknown) | ~28 |
| 3 | **Re-designing agent's dashboard** | `/gallery/184598561/Re-designing-agents-dashboard` | 15 Nov 2023 | 6 |

Other public work, not in v1: DIY subscription management system, Nursery e-commerce app, IRCTC Rail Connect redesign. The nursery is a student/concept piece and must be labelled as such if it ever appears.

**Order on the new site:** follow Behance (most recent first). It also happens to be the strongest narrative order: system-level product thinking → financial inclusion → operational tooling.

---

## 1. Designing for Engagement

**Published subtitle:** "How Archetype-Driven Landing Pages Transformed a Loyalty Platform and Drove Engagement & Business Impact"

**Tags:** engagement, loyalty, user experience, mobile app, landing page.

**What it actually is:** A configurable loyalty-homepage system for a B2B loyalty platform serving telecom, banking, retail, and travel clients. Instead of one homepage for every client, the platform ships **four engagement archetypes** that can be selected or combined per client.

### Extracted facts

**The challenge (verbatim from the project):**

> "One platform, many industries. No single homepage fits all."

- Telecom users want to burn points fast.
- Banking customers respond to progress milestones.
- Travel users hunt for premium rewards.
- Most loyalty solutions force a one-size-fits-all approach, leading to low engagement, underutilised points, and frustrated end users.
- The opportunity: "a platform that flexes to each client's engagement model without rebuilding from scratch every time."

**The four archetypes:**

| Archetype | Model | Design emphasis (from the project) | Industries |
|---|---|---|---|
| **Point Utilization** | Direct redemption focused | Points balance as hero; quick-action grid; cashback and streak modules; games and challenges drive exploratory engagement | Telecom, Retail |
| **Progress Driven** | Milestone & streak based narrative | Journey map and level progression as central narrative; ongoing loyalty records; play-and-win modules; personalised reward suggestions by journey stage | Banking, Fitness |
| **Reward Driven** | Aspirational & experience focused | Promotional banner leads with aspirational experiences; recent redemption history builds confidence; monthly curated reward catalog; VIP tier creates exclusivity | Travel, Hospitality |
| **Balanced Hybrid** | Modular, for diverse user bases | Smart points with badges and transfers on equal footing; "Continue Journey" and "Make the Most" as co-existents; modular card system allows client-specific customisation; serves platforms with mixed motivations | Super apps, Multi-vertical |

**Research scale (from the project):**

- Industry analysis: engagement models mapped across **6 industries**.
- User behaviour study: **500+ user sessions** analysed.
- Market benchmarking: **25+ loyalty platforms** globally.
- Key discovery: the research revealed four distinct engagement archetypes that could serve any industry combination.

**Measured outcomes (from the project):**

| Metric | Result | Definition |
|---|---|---|
| User engagement | **+42%** | Average daily active sessions per user across all archetype variants |
| Point utilisation | **+67%** | Points redeemed within 30 days of earning, up from a **38% baseline** |

> **Check before publishing:** confirm whether +67% is a relative lift or percentage points, and whether the 38% baseline is shareable. The other three figures should also be confirmed as relative vs absolute and as aggregate vs per-client.
| Campaign participation | **+31%** | Users engaging with challenges, games, and promotional modules |
| Reward redemption | **3.2×** | Monthly reward redemptions per active user |

**Rollout:** archetype-driven landing pages deployed across **8 B2B clients over 6 months**. The four archetypes now serve **12+ industries**.

**Key takeaways (verbatim from the project):**

1. *Research-led frameworks scale.* Investing upfront in cross-industry research gave a reusable system instead of one-off solutions.
2. *Motivation models matter more than features.* Users engage with motivations, not features; mapping UI hierarchy to behavioural drivers was the unlock.
3. *Flexibility is not complexity.* A modular archetype system is simpler to maintain than bespoke builds; clients onboard faster and the design team ships updates once for all.

**System claim visible in the work:** the four archetypes share a modular card system; the difference is composition and emphasis, not four separate products. This is the core senior-level argument.

### Why it earns the lead slot

- It is the most recent work (2026) and the most senior in scope: a platform-level IA and configuration model, not a screen.
- It shows strategy (segment → archetype), systems (modular cards, shared components), and product judgment (when not to build four products).
- It has a natural 3D expression: **one system core, four interface surfaces**. This is a better case-study 3D moment than a generic exploded screen.

### Proposed case-study framing

- **Title:** *One platform, four kinds of loyalty*
- **Subtitle:** How a configurable archetype system let one loyalty platform fit telecom, banking, retail, and travel without four separate products.
- **Outcome:** **+42% engagement, +67% point utilisation, +31% campaign participation, 3.2× reward redemption; 8 B2B clients in 6 months.** These are strong enough to lead the portfolio. Caveat: confirm the measurement window and that the baseline (38%) is shareable.
- **Decisions to document:**
  1. Four archetypes vs one adaptive homepage vs per-client bespoke builds.
  2. Balance-first vs journey-first vs promotion-first hero.
  3. Shared module library vs archetype-specific components.
  4. How far clients can customise before the system stops being a system.
- **Research/evidence to show:** 6-industry analysis, 500+ sessions, 25+ platform benchmark, the archetype matrix, annotated screens per archetype, the shared card inventory.
- **Gaps:** written permission to publish the metrics and to name the platform/clients; the measurement window; whether the numbers are aggregate or per-client.

**Caution:** The project page does not name the employer or clients. Confirm before writing "Perx" or naming telecom/banking clients.

---

## 2. Revolutionizing merchant's financial behaviour

**Cover title:** "Designing for Impact: Revolutionizing merchant's financial behaviour"
**Label:** UX/UI CASE STUDY
**Client:** Jabu (visible logo and product UI).

**What it actually is:** A merchant wallet and cash-digitisation ecosystem for small retailers in Sub-Saharan Africa, plus the agent-side tools Jabu needs to collect and reconcile cash.

### Extracted facts

**Problem statement (from the project):**

- **For small retailers:** Sub-Saharan Africa faces banking-infrastructure challenges; **65% of the population is unbanked** and relies heavily on cash. Small shops depend on cash for daily operations, exposing them to theft and fraud. Unbanked individuals use less secure informal saving methods.
- **For Jabu as last-mile distributor:** collecting cash payments is difficult — delays in payments and order processing, daily cash counting, and low spending power affecting basket size.
- **The need:** "an ecosystem where small retailers no longer rely on cash for operations. They can save money directly into the app to earn interest without needing a bank. The aim is also to digitize the collection process of Jabu, moving away from cash dependency and streamlining the payment landscape into a cashless one."

**Three products, three users (from the project):**

| User | Product | Job |
|---|---|---|
| **Merchants** | Merchant's app | Order stock, hold and save money, pay bills, earn interest, refer other merchants |
| **Agents** | Agent's app | Help merchants bank with Jabu, fund wallets, digitise cash transactions |
| **Admins** | Admin's web app | Track, manage, and visualise JWallet activity; KYC, roles, approvals, fees |

**Product scope visible in the work:**

- Wallet: send, request, cash in, cash out, pay bills.
- Savings: 32-, 48-, and 72-day cash-out accounts at **1.5%, 2.5%, and 3.5% monthly interest**; deposit, estimated return, success, total savings, recent transactions.
- Rails: cash with agent, bank account, bank card, mobile money.
- Admin: user and merchant lists, KYC document checks, roles and permissions (create/edit/view/delete customer, top-up, savings, withdrawals, referrals), savings-product approvals (draft, pending, published, disapproved), investment totals, transaction fees and super-agent commission, referral programs.
- Referral: "Refer & Earn" campaigns with reward rules.

**Research method (from the project):**

A multi-stage **Jabu Ambassador Program** using existing Jabu customers as research participants:

1. Kickoff meeting — research goals, ambassador role, feedback guidelines.
2. User persona interview — demographics, business context, common characteristics and pain points.
3. User interviews — technology awareness, financial background, challenges, concerns.
4. User testing — task-based MVP prototypes, verbal and non-verbal feedback, testing-led iteration.

**Visible artifacts:**

- A full product flow map covering **Send, Request, Cash in, Cash out, Savings, Pay bills**, with separate rails for **cash with agent, bank account, bank card, mobile money**, including OTP, limits, fees, reversals, and failure branches.
- Onboarding branches: new user → OTP → PIN; existing user; forgot PIN.
- Product screens for wallet, savings, transfers, and transaction states.
- Isometric illustrations of a small shop and a Jabu delivery van used to explain the two-sided problem.

**Why it earns a deep case study**

- It is a genuine multi-sided platform problem: merchant trust, agent operations, and Jabu's cash reconciliation.
- The flow map is unusually rigorous for a portfolio: it shows state design, money movement, and failure handling.
- The finance background is directly relevant: interest, float, reconciliation, risk.
- It has a strong human opening (65% unbanked; cash as a survival tool).

### Proposed case-study framing

- **Title:** *Designing trust for cash-first merchants*
- **Subtitle:** A wallet for people whose money has always been physical — where trust is earned in the first thirty seconds and proven at every failed transfer.
- **Outcome:** **Unknown.** No post-launch metric is visible in the published project. Fallback: three shipped products (merchant, agent, admin), the full money rail set, and the ambassador research program. Ask Monalisha for adoption or support-load data before claiming impact.
- **Decisions to document:**
  1. Cash-first mental model vs a conventional fintech wallet.
  2. Agent-assisted rails vs pure self-serve.
  3. Savings and interest inside the app vs a separate product.
  4. How to represent pending, failed, and reversed money without losing trust.
  5. One product vs three surfaces (merchant, agent, admin) — and what stays shared.
- **Research/evidence to show:** the 65% unbanked frame, the two-sided problem, the three user types, the ambassador research stages, the full flow map, the admin/KYC scope, the failure states.
- **Gaps:** the research sample; exact role and team; timeline; which flows shipped; any metric; permission to publish screens, logos, and the 65% source.

**Caution:** The 65% figure needs a citation before it appears on the site. Cite the original source, not the Behance page.

---

## 3. Re-designing agent's dashboard

**Published:** 15 Nov 2023. **Tool:** Figma. **Field:** Product Design.

**What it actually is:** A redesign of the Jabu CRM dashboard used by agents who handle customer calls, orders, callbacks, and follow-ups. The project is a research → information architecture → UI story.

### Extracted facts

**Analysis phase (from the project):**

> "Hotjar was used to closely monitor the agents' current usage behaviour, which provided valuable insights into most and least utilized features. Additionally, through conversations with the agents, we gained an understanding of enhancements they believe could significantly boost their efficiency and productivity if integrated into the dashboard."

**Agent insights (verbatim list, condensed):**

- Agents needed a **filtering function** to search for specific groups or types of customers.
- Too much initial information caused a **lengthy scroll** and made specific sections hard to locate.
- Agents wanted a **separate space for their own performance**, with a full-screen view of customer data for focus.
- A **logic tree for call results** would help collect data for customer retention.
- The **fixed customer-information frame** at the top left minimal space for other content.
- Agents wanted **customer offers directly on the dashboard**, instead of switching to the mobile app.

**Information architecture work:**

The dashboard was broken down and reorganised into three broad categories:

1. **Stats** — orders, GMV, basket size, SKUs, last order.
2. **Call-related** — last interaction, product requests during a call, call result.
3. **General info** — customer details, previous orders, recommended products.

The artifact shows three states side by side: old dashboard → information shown in the dashboard → broad categorisation. This is strong evidence of IA thinking, not just restyling.

**Usability testing (from the project):**

- **5 agents** from **Namibia and Zambia**, remote sessions over Google Meet, **15–20 minutes** each.
- Figma prototype, screen recording, Notion for notes.
- **75% completed the assigned task independently.**
- Positives: easy to navigate; the call log was seen as convenient; "a wealth of information" reachable in 1–2 clicks.
- Problems: most users struggled to find the daily-target drawer; some did not understand the campaign wording; agents wanted a way to mark a customer as removed, non-existent, or duplicate so they stop appearing in the call list.

**Execution decisions visible in the work:**

- A **non-scrollable board** with segregated information zones.
- **Cognitive demand** managed by hiding the call-outcome section until a call is active.
- **Visual hints** and colour blocking for navigation.
- **Customer tag** derived from purchase behaviour: New, Retention, Lost, Recover, Current.
- A **design library** covering colour tokens (Lucky blue, Jabu purple, neutrals, success, error, progress), typography, and components (buttons, checkboxes, dropdowns, text fields).

**Final dashboard scope:** tabs for My Board, My Performance, My Customers, Orders, Zones, Dashboards; customer card with incoming call; lifetime GMV, basket size, SKUs, order count; last order; last call; promotional offers; recommended products; daily-target drawer (calls, orders, revenue).

**Visible surface:** `jabu CRM` with tabs for Dashboard, Incoming Call, Callbacks, My Performance, Dashboards; a customer panel; a call-result panel; product requests; previous orders.

### Why it earns a place

- It is the clearest research-to-IA story of the three: Hotjar behaviour data + agent conversations → categories → layout.
- It shows operational empathy: the agent's day is a queue, not a feature list.
- It supports the `/systems` story: dashboard components, states, and a reusable CRM pattern.
- It is medium depth, which keeps the site from being three 1,200-word monoliths.

### Proposed case-study framing

- **Title:** *A queue, not a feature list*
- **Subtitle:** Rebuilding an agent dashboard around the call, not the record — and cutting the information that made the day harder.
- **Outcome:** **75% task completion in usability testing (5 agents), plus the shipped dashboard.** No post-launch metric is visible. Do not inflate this into "75% faster"; it is completion, not speed.
- **Decisions to document:**
  1. Queue-first vs record-first.
  2. Fixed customer frame vs collapsible context.
  3. One dense board vs tabs and dedicated performance view.
  4. Filtering model and call-result logic tree.
  5. How to mark removed/duplicate customers without a support ticket.
- **Research/evidence to show:** Hotjar behaviour signal, the six agent insights, the old→new IA comparison, the 5-agent test and its findings, the design library.
- **Gaps:** sample size for the Hotjar data; what shipped and when; permission to publish the CRM screens; whether the 75% figure can be shared.

---

## Cross-project narrative

Read together, the three projects say something specific:

1. **Engagement archetypes** — design a system that adapts to different user motivations. *Strategy + systems.*
2. **Merchant wallet** — design for trust when money and literacy are constrained. *Research + complex flows.*
3. **Agent dashboard** — design for operators whose day is a queue. *Research + IA + operational tooling.*

That is a senior product designer's range: consumer engagement, financial inclusion, and internal operations — all B2B, all systems, all shipped.

**The through-line for the site:** *the screen is the surface; the system underneath is the work.* The archetype project makes this literal, the wallet makes it high-stakes, the dashboard makes it operational.

---

## Evidence still needed

| Project | Metric / proof | Owner | Status |
|---|---|---|---|
| Engagement archetypes | +42% engagement, +67% point utilisation, +31% campaign participation, 3.2× redemption, 8 clients, 12+ industries | Monalisha | **Captured**; confirm window and shareability |
| Engagement archetypes | Permission to name the platform and clients | Monalisha | Unknown |
| Merchant wallet | First top-up completion; support load; adoption; agent collection time | Monalisha | Unknown |
| Merchant wallet | Source for the 65% unbanked figure | Monalisha | Unknown |
| Merchant wallet | Permission for Jabu screens and logo | Monalisha | Unknown |
| Agent dashboard | 75% task completion in a 5-agent test | Monalisha | **Captured** |
| Agent dashboard | Post-launch task time, misroutes, adoption | Monalisha | Unknown |
| Agent dashboard | Permission for Jabu CRM screens | Monalisha | Unknown |
| All | Role, team size, timeline, what shipped | Monalisha | Unknown |
| All | Testimonials from PM/engineer/lead | Monalisha | Unknown |

**Rule:** no metric goes on the site without a source, a window, and a caveat. If a number cannot be defended, use the highest honest rung from [05 — Case Study System](./05-case-study-system.md).

---

## Fact-check list before copy lock

- [ ] Project 1: employer, client names, launch date, which archetypes shipped, number of clients.
- [ ] Project 1: measurement window and whether the four outcomes are aggregate or per-client.
- [ ] Project 1: whether "archetype" is the internal term or an editorial framing.
- [ ] Project 2: exact published date; role; team; timeline; which rails shipped.
- [ ] Project 2: the 65% figure's original source and year.
- [ ] Project 3: research sample and dates; what changed after the redesign.
- [ ] All: any screen that must be redacted or rebuilt with fictional data.
- [ ] All: written permission for logos, screens, and quotes.
