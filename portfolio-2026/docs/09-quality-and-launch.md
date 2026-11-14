# 09 — Quality & Launch

## Target benchmark scorecard

| Area | Target | How it is judged |
|---|---:|---|
| First impression & positioning | 9.5 | 5-second test with 3 strangers |
| Case study depth | 9.0 | 90-second test; decision log; evidence |
| Visual craft | 9.5 | Type, spacing, imagery, consistency |
| Evidence & impact | 9.0 | Metrics or credible qualitative signal |
| 2026 relevance | 9.0 | AI workflow, systems, collaboration |
| UX, accessibility, performance | 9.5 | Lighthouse, axe, keyboard, mobile |
| Conversion | 9.5 | Résumé and contact in one click |
| **Overall** | **9.2** | Benchmark, not "nice portfolio" |

---

## Acceptance criteria by page

### Home

- [ ] Name, role, location, availability visible in the first viewport.
- [ ] H1 is one clear idea; subhead explains the domain.
- [ ] Primary CTA to work; secondary CTA to résumé.
- [ ] Three project rows with one-line outcomes.
- [ ] Proof strip with factual claims.
- [ ] 3D explains the layer metaphor; content works without it.
- [ ] Work is louder than the chrome.
- [ ] 5-second test passes with 3 people.
- [ ] 390px layout is composed, not stacked leftovers.

### Case study

- [ ] Outcome in the first viewport.
- [ ] 30-second summary is true without the rest.
- [ ] Three research insights with evidence.
- [ ] Three decisions with options and trade-offs.
- [ ] Flow + 4–6 annotated screens.
- [ ] States and edge cases.
- [ ] System contribution.
- [ ] Build/QA notes.
- [ ] Outcome with source and caveat.
- [ ] Reflection.
- [ ] 8–15 visuals, all captioned and alt-texted.
- [ ] Next project is obvious.
- [ ] Works without the 3D exploded view.

### Systems

- [ ] Three proofs: design system, FlutterFlow, AI workflow.
- [ ] Numbers or artifacts for each.
- [ ] Clear distinction between tool use and judgment.
- [ ] Links to case studies.

### About

- [ ] Story, not résumé prose.
- [ ] Timeline, current role, availability.
- [ ] Three testimonials.
- [ ] Résumé download.
- [ ] Contact.

### 404

- [ ] Useful links.
- [ ] No dead end.
- [ ] On-brand, quiet.

---

## QA matrix

### Browsers

- Chrome (latest, latest−1)
- Safari (latest, latest−1)
- Firefox (latest)
- Edge (latest)

### Devices

- MacBook Air M1/M2
- Windows laptop
- iPhone 12/13/14
- Mid-range Android (e.g., Moto G)
- iPad

### Network

- Fast Wi-Fi
- 4G
- Throttled 3G
- Offline (service worker absent; graceful failure)

### Conditions

- Reduced motion
- No WebGL
- Low power / data saver
- 200% zoom
- 320px width
- Keyboard only
- Screen reader (VoiceOver, NVDA)
- High contrast / forced colors

### Checks

- [ ] No horizontal scroll.
- [ ] No layout shift.
- [ ] No console errors.
- [ ] No broken links.
- [ ] No 404s on assets.
- [ ] Menu opens/closes; Escape works; focus returns.
- [ ] Résumé downloads.
- [ ] Email link works; copy fallback works.
- [ ] Video plays, pauses, captions.
- [ ] 3D pauses offscreen.
- [ ] 3D fallback appears when disabled.
- [ ] Focus visible on all interactive elements.
- [ ] Alt text matches images.
- [ ] Headings are logical.
- [ ] Page title and meta description unique.

---

## Performance checklist

- [ ] LCP < 2.0s on 4G.
- [ ] INP < 200ms.
- [ ] CLS < 0.05.
- [ ] TBT < 200ms.
- [ ] Initial JS < 150KB gzip.
- [ ] 3D chunk < 300KB gzip.
- [ ] Hero image < 200KB.
- [ ] Fonts < 150KB.
- [ ] 60fps desktop, 30fps mobile.
- [ ] Canvas pauses offscreen.
- [ ] No long tasks > 50ms during scroll.
- [ ] Lighthouse 95+ performance.
- [ ] No render-blocking third parties.
- [ ] Images responsive with `srcset`.
- [ ] Video lazy-loaded with poster.
- [ ] Cache headers set.

---

## Accessibility checklist (WCAG 2.2 AA)

### Structure

- [ ] One H1 per page.
- [ ] Logical heading order.
- [ ] Landmarks: header, nav, main, footer.
- [ ] Skip link.
- [ ] Page language set.

### Keyboard

- [ ] All interactive elements reachable.
- [ ] Visible focus.
- [ ] No focus traps.
- [ ] Menu Escape closes; focus returns to trigger.
- [ ] 3D not focusable.
- [ ] 44×44px targets.

### Content

- [ ] Alt text for informative images.
- [ ] Decorative images `alt=""`.
- [ ] Captions/transcripts for video.
- [ ] No text baked into images without equivalent.
- [ ] Links descriptive.
- [ ] No color-only meaning.

### Motion

- [ ] `prefers-reduced-motion` respected.
- [ ] No autoplay sound.
- [ ] No flashing.
- [ ] No parallax on body text.
- [ ] Pause control for video.
- [ ] Static fallback for 3D.

### Visual

- [ ] AA contrast for all text.
- [ ] Focus ring visible on ink and paper.
- [ ] 200% zoom usable.
- [ ] 320px width usable.
- [ ] Forced-colors mode usable.

### Assistive tech

- [ ] VoiceOver + Safari pass.
- [ ] NVDA + Chrome pass.
- [ ] Canvas `aria-hidden`.
- [ ] Dynamic content announced.
- [ ] Menu state announced.

---

## SEO checklist

- [ ] Unique title and description per page.
- [ ] Canonical URL.
- [ ] OG and Twitter image per page.
- [ ] `og:type` correct (`website` / `article`).
- [ ] JSON-LD `Person`.
- [ ] JSON-LD `CreativeWork` for case studies.
- [ ] Sitemap.
- [ ] Robots.
- [ ] 404 page.
- [ ] Redirects from old URLs.
- [ ] Clean slugs.
- [ ] Internal links.
- [ ] Descriptive alt text.
- [ ] No content behind client-only rendering.
- [ ] RSS for notes (optional).
- [ ] Favicon and web manifest.
- [ ] Social preview tested (LinkedIn, X, Slack).

---

## Content QA

- [ ] No placeholders or brackets.
- [ ] Every number has a source and caveat.
- [ ] Every claim is defensible.
- [ ] Permissions documented.
- [ ] NDA labels present.
- [ ] Spelling consistent (US or UK).
- [ ] Dates and titles correct.
- [ ] Testimonial names/titles correct.
- [ ] Résumé matches the site.
- [ ] Contact details correct.
- [ ] No broken external links.
- [ ] Alt text matches images.
- [ ] Captions add meaning.

---

## Launch checklist

### Before launch

- [ ] Production URL resolves; custom domain (if any) and `www` redirect.
- [ ] HTTPS and HSTS.
- [ ] Email works; domain email active.
- [ ] Résumé PDF final.
- [ ] Analytics installed and verified.
- [ ] Sitemap submitted.
- [ ] Robots correct (allow indexing).
- [ ] OG debugger pass (LinkedIn, X, Slack).
- [ ] 404 live.
- [ ] Redirects live.
- [ ] Favicon and manifest.
- [ ] Security headers.
- [ ] Backups of content and assets.
- [ ] Decision log updated.

### Launch day

- [ ] Deploy production.
- [ ] Smoke test all routes.
- [ ] Test résumé, email, LinkedIn.
- [ ] Test on a real phone.
- [ ] Check analytics real-time.
- [ ] Check 3D fallback.
- [ ] Share with 3 reviewers.
- [ ] Update LinkedIn/Behance with the new URL.

### After launch

- [ ] 24-hour error check.
- [ ] 7-day analytics review.
- [ ] 30-day review: résumé downloads, case study depth, inbound.
- [ ] Fix top 3 friction points.
- [ ] Add notes/content if time allows.
- [ ] Re-run Lighthouse monthly.

---

## Measurement plan

### North star

**Qualified inbound conversations** — recruiter emails, design lead calls, founder inquiries.

### Leading indicators

- Résumé downloads.
- Email clicks.
- Case study opens.
- Case study outcome reach (75% scroll).
- Systems page views.
- Time on case study.
- Return visits.
- LinkedIn clicks.

### Quality indicators

- Lighthouse scores.
- Core Web Vitals.
- 3D fallback/error rate.
- Bounce on home.
- Mobile vs desktop completion.

### Targets (first 90 days)

| Metric | Target |
|---|---|
| Home → case study | 25%+ |
| Case study → outcome | 60%+ |
| Case study → résumé/contact | 10%+ |
| Résumé downloads | 15/month |
| Qualified inbound | 5 |
| Interview loops | 3 |
| Mobile case study completion | 50%+ of desktop |

### Review cadence

- **Week 1:** errors, broken links, analytics sanity.
- **Week 4:** first funnel review; fix the biggest drop-off.
- **Week 8:** content/positioning review; interview feedback.
- **Week 12:** decide what to add, cut, or rewrite.

---

## Post-launch iteration

### Likely fixes

- Home headline clarity.
- Case study length and scanability.
- Mobile metadata density.
- 3D performance on older devices.
- Résumé placement.
- Contact friction.

### What to add only if it earns its place

- A fourth case study.
- Notes/essays.
- A speaking/talks section.
- A newsletter.
- A dark mode.
- More 3D.

**Rule:** no new feature without a measured reason.

---

## Launch definition of done

- All acceptance criteria met.
- No critical or high-severity issues.
- Performance and accessibility budgets met.
- Content is final and true.
- Résumé and contact work.
- Analytics and measurement live.
- The site is live at the production URL.
- Three external reviewers have completed the 5-second and 90-second tests.

---

## The final test

Show the site to a design lead who has never seen it. Ask:

1. What does she do, and for whom?
2. What is one decision she made?
3. What changed because of her work?
4. Would you interview her?

If the answers are clear, the portfolio is done.
