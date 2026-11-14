# 07 — Technical Plan

## Recommendation

**Astro 5 + React 19 island + React Three Fiber + GSAP ScrollTrigger + MDX + Vercel.**

- **Astro** for static generation, content collections, image optimization, and minimal baseline JS.
- **React island** only for the 3D scenes; the rest of the site is HTML/CSS.
- **R3F + drei + three** for the layer stack; **GSAP ScrollTrigger** for camera and layer choreography.
- **MDX** for case studies and notes; typed frontmatter via Zod.
- **Vercel** for preview deployments, image CDN, analytics, and edge caching.

### Why not Next.js

Next.js is excellent if the site is app-like or needs a persistent canvas across routes. This portfolio is content-first with three isolated 3D moments. Astro ships less JS, generates faster pages, and keeps the content model simple. Revisit Next only if the 3D transition proof requires a shared canvas across routes and Astro's islands cannot deliver it.

### Alternatives

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| Astro + React island | Minimal JS, content-first, fast | Cross-route 3D needs care | **Recommended** |
| Next.js App Router | Shared canvas, app-like transitions | Heavier baseline, more complexity | Fallback if 3D continuity demands it |
| SvelteKit + Threlte | Small runtime, elegant | Smaller 3D ecosystem, less familiar | Not recommended for this scope |
| Webflow + custom 3D | Fast to edit | Limited control, performance risk | No |

### Libraries

| Need | Library |
|---|---|
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` |
| Scroll | `gsap`, `ScrollTrigger` |
| Postprocessing | `@react-three/postprocessing` (desktop only, optional) |
| Images | Astro `<Image>` / `<Picture>` (sharp) |
| Content | Astro Content Collections + MDX |
| Sitemap | `@astrojs/sitemap` |
| OG images | Satori / `@vercel/og` at build |
| Analytics | Vercel Analytics + Speed Insights, or Plausible |
| Testing | Playwright, axe-core, Lighthouse CI |

**No Lenis.** Native scroll is smoother, more accessible, and avoids hijack bugs. GSAP scrub is enough.

---

## Architecture

```
src/
├── content/
│   ├── projects/
│   │   ├── engagement-archetypes.mdx
│   │   ├── merchant-wallet.mdx
│   │   └── agent-dashboard.mdx
│   └── notes/
├── components/
│   ├── layout/        # nav, footer, skip link, status
│   ├── editorial/     # project row, figure, caption, stat, quote
│   ├── case-study/    # section nav, decision log, outcome, next
│   └── three/         # canvas, scene, fallback, loader
├── layouts/
├── pages/
│   ├── index.astro
│   ├── work/[slug].astro
│   ├── systems.astro
│   ├── about.astro
│   ├── notes/[slug].astro
│   ├── resume.astro
│   └── 404.astro
├── styles/
│   ├── tokens.css
│   ├── base.css
│   └── components.css
└── lib/
    ├── seo.ts
    ├── og.ts
    └── analytics.ts
```

### Rendering strategy

- **Static generation** for every page.
- **No client-side data fetching** for content.
- **3D island:** hydrated on idle or when in view; poster renders first.
- **View transitions** for project navigation; fallback to crossfade.
- **Content collections** validate frontmatter at build; a bad metric or missing alt text fails the build where possible.

### Content model

Each project MDX frontmatter:

- `title`, `subtitle`, `slug`, `order`
- `outcome` (label, value, caveat)
- `role`, `team`, `timeline`, `platform`, `constraint`
- `cover`, `coverAlt`, `ogImage`
- `theme` (paper/ink), `accent` (cobalt/acid)
- `permissions` (client-approved, NDA note)
- `metrics[]` (claim, value, source, caveat)
- `sections[]` (optional ordering)
- `next` (slug)

**Validation:** required fields, alt text non-empty, metric caveat present, no placeholder brackets.

---

## 3D pipeline

1. **Design:** layer elevations in Figma; define the four layers and their UI textures.
2. **Model:** simple planes/rounded boxes in Blender; keep geometry under 50k triangles.
3. **Texture:** render each layer's UI at 2048×1280; compress to KTX2/Basis; mipmaps.
4. **Light:** bake ambient occlusion and soft shadow into the texture or a lightmap; no real-time shadows.
5. **Export:** GLB with Draco; target < 250KB per scene.
6. **Integrate:** `useGLTF` + `Suspense`; preload the hero only.
7. **Fallback:** render a poster PNG/AVIF and a short muted loop for mobile.
8. **Test:** MacBook Air, iPhone 12, mid-range Android, Safari, Chrome, Firefox.
9. **Monitor:** log 3D failures and FPS drops; never block content.

### Scene budget

| Metric | Desktop | Mobile |
|---|---:|---:|
| Draw calls | < 50 | < 20 |
| Triangles | < 50k | < 15k |
| Texture memory | < 80MB | < 40MB |
| DPR | 1.75 max | 1.5 max |
| Postprocessing | Optional DOF/grain | Off |
| Target FPS | 60 | 30 |

### Fallback logic

```text
if (prefers-reduced-motion || no WebGL2 || data-saver || low-memory) {
  render poster / static layers
} else {
  lazy-load 3D island after LCP
  if (fps < threshold) downgrade DPR, then disable post, then static
}
```

The fallback must be designed, not an error state.

---

## Media pipeline

### Images

- AVIF first, WebP fallback; `<picture>` with `srcset`.
- Hero: 2000px wide max; case study figures: 1600–2000px.
- Responsive widths: 480, 800, 1200, 1600, 2000.
- LQIP or dominant color placeholder.
- Explicit width/height to prevent CLS.
- Alt text required; decorative images `alt=""`.
- No text baked into images without an HTML equivalent.

### Video

- 20–40s max, muted, loop, no autoplay sound.
- AV1/WebM + H.264 MP4 fallback.
- Poster frame; `preload="metadata"`; lazy load.
- Captions/transcript for narrated clips.
- Pause control; respect reduced motion.

### Fonts

- Self-hosted WOFF2, subset to Latin.
- 2–3 families max; 2 weights per family.
- `font-display: swap`; preload the display and text faces.
- Variable fonts if the license allows; avoid 5 static weights.

---

## Performance budgets

| Metric | Budget |
|---|---|
| HTML | < 30KB gzip |
| CSS | < 40KB gzip |
| Initial JS | < 150KB gzip |
| 3D chunk | < 300KB gzip |
| Fonts | < 150KB total |
| Hero image | < 200KB |
| Total first view | < 700KB |
| LCP | < 2.0s on 4G |
| INP | < 200ms |
| CLS | < 0.05 |
| TBT | < 200ms |
| Lighthouse | 95+ performance, 100 a11y/BP/SEO |
| Desktop FPS | 60 |
| Mobile FPS | 30 minimum |

### Enforcement

- Lighthouse CI on every PR; fail under budget.
- Bundle analyzer; no accidental library imports.
- Image size check in CI.
- WebPageTest on a mid-tier Android profile.
- Real-device test before launch.

---

## Accessibility

**Standard:** WCAG 2.2 AA.

- Semantic landmarks: header, nav, main, footer.
- One H1 per page; logical heading order.
- Skip link; visible focus; 44×44px targets.
- Keyboard: all links, buttons, menus; Escape closes menu; no focus traps.
- Canvas: `aria-hidden`; all content in DOM.
- Reduced motion: static fallbacks; no autoplay; no parallax on text.
- Captions/transcripts for video.
- Alt text: describes the interface, not the case study.
- Contrast: AA for all text; test focus on ink sections.
- 200% zoom and 320px width.
- Screen reader pass: VoiceOver + Safari, NVDA + Chrome.
- No color-only meaning.

### Testing tools

- axe-core / Playwright.
- Manual keyboard pass.
- VoiceOver and NVDA.
- Lighthouse accessibility.
- Color contrast checker.
- Reduced-motion emulation.
- No-WebGL emulation.

---

## SEO

- Per-page title and meta description.
- Canonical URLs.
- OG/Twitter images generated per page (1200×630).
- JSON-LD: `Person`, `CreativeWork` for case studies, `Article` for notes.
- Sitemap and robots at build.
- Clean URLs; redirects from old URLs.
- Descriptive alt text and captions.
- Internal links: home → case studies → systems → about → contact.
- RSS for notes.
- 404 page with useful links.
- No content behind canvas or client-only rendering.

### Title patterns

- Home: `Monalisha Chatterjee — Product Designer, Bengaluru`
- Case study: `Designing for Engagement — Monalisha Chatterjee`
- Systems: `Systems — Monalisha Chatterjee`
- About: `About — Monalisha Chatterjee`
- Notes: `[Title] — Monalisha Chatterjee`

### Meta description patterns

- Case study: outcome + role + domain. Example: "Designing for Engagement: a four-archetype loyalty system that lifted point utilisation by 67% across 8 B2B clients."
- Systems: "The design system, FlutterFlow library, and AI-assisted workflow behind the work."

---

## Analytics

### Tool

- Vercel Analytics + Speed Insights (privacy-friendly), or Plausible.
- No Google Analytics unless required.
- Cookie-free if possible; no banner.

### Events

| Event | Why |
|---|---|
| `resume_download` | Primary conversion |
| `email_click` | Contact intent |
| `linkedin_click` | Secondary conversion |
| `project_open` | Work interest |
| `case_study_50` | Engagement depth |
| `case_study_outcome` | Reached the outcome |
| `systems_view` | 2026 signal interest |
| `3d_fallback` | Performance/robustness |
| `3d_error` | Quality |
| `video_play` | Interaction proof |
| `outbound_click` | Behance/portfolio links |

### Privacy

- No personal data.
- No cross-site tracking.
- Document analytics in the footer/privacy line.

---

## Testing

### Automated

- Playwright: navigation, links, menu, résumé download, 404.
- axe-core: zero critical issues.
- Lighthouse CI: budgets.
- Link checker: internal + external.
- HTML validation.
- Image alt check.
- Metadata/OG check.

### Manual

- Chrome, Safari, Firefox, Edge.
- macOS, Windows, iOS, Android.
- iPhone 12/13, mid-range Android.
- 4G and throttled 3G.
- Reduced motion.
- No WebGL.
- Keyboard only.
- VoiceOver + Safari; NVDA + Chrome.
- 200% zoom; 320px width.
- Dark section focus rings.
- Slow CPU (4× throttle).

### Content QA

- No brackets/placeholders.
- Numbers have sources and caveats.
- Permissions documented.
- Alt text matches images.
- Captions/transcripts present.
- Spelling consistent (US or UK).
- Links resolve.

---

## Deployment

- **Repository:** the existing GitHub repo. Implementation lives on a **new branch** (suggested: `portfolio-2026`), not `main`.
- **Vercel:** a **new Vercel project**, with the new branch as the production branch. Do not reuse the old project's settings or `.vercel/project.json`.
- **Production URL:** **`monalisha-portfolio.vercel.app`**. The preferred `monalisha.vercel.app` is already serving another project, and the old portfolio is at `monalishachatterjee.vercel.app`. Reconfirm availability when the new project is created; if taken, use the nearest available name and record it.
- **Preview:** every push to the branch gets a preview URL; verify there before promoting.
- **Domain:** add a custom domain later if one is confirmed; keep the `vercel.app` URL as the canonical fallback until then.
- Production domain + `www` redirect.
- HTTPS, HSTS.
- Cache headers: immutable for fonts/3D; revalidate HTML.
- Image CDN via Astro/Vercel.
- Environment variables for analytics/OG.
- Error monitoring: Sentry (optional) for 3D/runtime errors.
- Rollback: previous deployment one click.

### Security headers

- `Content-Security-Policy` (allow self, analytics, fonts).
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` minimal.
- No third-party scripts beyond analytics.

---

## Browser support

- Last 2 versions of Chrome, Safari, Firefox, Edge.
- iOS Safari 16+.
- Android Chrome 110+.
- WebGL2 required for full 3D; WebGL1 simplified; no WebGL static.
- View Transitions progressive; fallback crossfade.
- `prefers-reduced-motion` supported everywhere.

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| 3D tanks mobile performance | Medium | High | Static mobile cut; budgets; proof-of-concept gate |
| Cross-route 3D transition is janky | Medium | Medium | Isolate 3D; crossfade fallback; don't force shared canvas |
| Content/metrics unavailable | High | High | Directional/qualitative evidence; label clearly; collect early |
| Scope creep in 3D | High | High | Three moments only; cut list; design gate |
| Type licensing cost | Medium | Low | Free fallback pairing |
| MDX editing friction | Low | Medium | Simple schema; optional CMS later |
| Safari WebGL quirks | Medium | Medium | Test matrix; static fallback |
| SEO lost behind canvas | Low | High | DOM-first; SSR; metadata |
| Motion sickness | Low | High | No hijack; reduced motion; short moves |
| Build time slips | Medium | Medium | Phased plan; content-first; cut P2 |

---

## Technical definition of done

- Every page is static HTML with content visible before JS.
- 3D is an enhancement with a designed fallback.
- Lighthouse budgets met on mobile.
- WCAG 2.2 AA pass.
- No CLS from canvas, fonts, or images.
- All links, metadata, OG images, and sitemap valid.
- Analytics events firing.
- 3D failure rate < 1% and monitored.
- Deploy is reproducible; content is editable without touching 3D code.
