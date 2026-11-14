# 03 — Visual Language

## Concept: "Depth"

**Surface → Structure → System → Signal.**

The visual system should make one idea tangible: good product design is not the screen you see; it is the research, structure, system, and outcome underneath it.

The site looks like an editorial design journal crossed with a product workbench. Warm paper, precise type, real UI, and thin planes of interface floating in soft studio light. Restrained, tactile, confident.

### Keywords

Precise · Warm · Structural · Tactile · Quiet · Spatial · Editorial · Curious

### Anti-keywords

Neo-brutalist · Sticker-sheet · Neon · Glassmorphism · Cyber · Template · Gimmick · Loud

---

## Art direction

### In one line

**A warm editorial canvas with one electric accent, where real product layers float like printed paper and every detail is measured.**

### References (principles, not layouts)

- **Editorial:** Pentagram, Manual, Studio Freight, Basement Studio — type hierarchy, rules, captions.
- **Spatial:** Bruno Simon, Aristide Benoist, Dennis Snellenberg — restraint, depth, camera control.
- **Product clarity:** Linear, Raycast, Stripe, Vercel — UI presentation, density, states.
- **Scroll storytelling:** Apple product pages, Locomotive — pacing, sticky stages, outcome reveals.

### What makes it distinct

- The 3D is **paper**, not glass or chrome. It feels printed and physical, not sci-fi.
- The palette is **warm neutral**, not dark-mode neon.
- The type is **editorial**, not another geometric sans portfolio.
- The work is **real product UI**, not abstract 3D shapes.
- The motion is **slow and precise**, not bouncy or playful.

---

## Palette

| Token | Hex | Usage |
|---|---|---|
| Paper | `#F4F1EA` | Primary background |
| Paper deep | `#E9E5DB` | Secondary surfaces, captions |
| Ink | `#101010` | Primary text, dark sections |
| Graphite | `#5C5A54` | Secondary text, captions |
| Line | `rgba(16,16,16,0.14)` | Rules, borders, dividers |
| Cobalt | `#2547FF` | Primary accent: links, CTAs, active states |
| Acid | `#D8FF4F` | Signal accent: outcomes, key stats, highlights |
| Ember | `#FF5A2A` | Rare warning/attention accent (optional) |
| White | `#FFFFFF` | UI screens, cards on dark |

### Usage rules

- **70% neutral, 20% ink, 10% accent.** The page should feel warm and quiet, with color earning attention.
- **Cobalt is interaction.** Links, buttons, focus, active nav.
- **Acid is evidence.** Outcomes, metrics, one highlight per section. Not decoration.
- **Ember is rare.** Use only for a critical caveat or a single editorial moment.
- **No color-coding by section.** Color should mean something, not label a card.
- **Exception: the archetype case study.** Four archetypes may carry four functional accents inside that one project, because the color is the wayfinding system. Keep it to the case study and its diagrams; never leak it across the site.
- **Dark sections are punctuation.** One or two per page, not alternating stripes.

### Contrast

- Ink on Paper: ~16:1.
- Graphite on Paper: ~6.5:1.
- White on Cobalt: ~5.8:1 (check at final sizes).
- Ink on Acid: ~14:1.
- Never use accent color for body text.

---

## Typography

### Recommended pairing (paid)

| Role | Typeface | Why |
|---|---|---|
| Display | **Editorial New** (Pangram Pangram) or **GT Alpina** (Grilli Type) | High-contrast serif; editorial, human, memorable |
| Text | **Söhne** (Klim) or **Suisse Int'l** (Swiss Typefaces) | Neutral, precise, excellent at small sizes |
| Mono | **Söhne Mono** or **JetBrains Mono** | Metadata, labels, captions, code |

### Free fallback

| Role | Typeface |
|---|---|
| Display | **Instrument Serif** |
| Text | **General Sans** or **Inter Tight** |
| Mono | **JetBrains Mono** |

**Decision (Nov 2026):** ship v1 with the free pairing above. A paid display face is a later upgrade, not a dependency. The type system must be built on tokens so swapping the display face is a one-file change.

Optional later upgrades, in order of impact: **Editorial New** (display) → **Söhne** (text) → **Söhne Mono** (mono).

### Type scale

| Token | Size | Line height | Usage |
|---|---|---|---|
| Display XL | `clamp(4rem, 10vw, 9rem)` | 0.95 | Hero H1 |
| Display L | `clamp(3rem, 6.5vw, 6rem)` | 1.0 | Page titles |
| H1 | `clamp(2.5rem, 5vw, 4.5rem)` | 1.02 | Case study titles |
| H2 | `clamp(2rem, 3.5vw, 3.25rem)` | 1.05 | Section titles |
| H3 | `clamp(1.35rem, 2vw, 1.75rem)` | 1.15 | Sub-sections |
| Body L | `1.25rem` | 1.5 | Lede paragraphs |
| Body | `1.0625rem`–`1.125rem` | 1.6 | Prose |
| Small | `0.875rem` | 1.5 | Captions |
| Label | `0.75rem` | 1.2 | Mono labels, uppercase optional |
| Micro | `0.6875rem` | 1.2 | Rare, only for legal/colophon |

### Rules

- **Body minimum 17px**, labels minimum 12px. No 10px uppercase mono.
- **Display is sentence case**, not all caps. All caps only for short labels.
- **Max line length 68ch** for case study prose; 52ch for ledes.
- **Tracking:** `-0.02em` to `-0.04em` for display; `0` for body; `0.08em` for uppercase labels.
- **One display face, one text face, one mono.** No fourth family.
- **Numerals:** tabular for metrics; oldstyle optional for editorial.
- **Optical alignment:** hanging punctuation for quotes; align figures to the baseline grid.

---

## Grid and spacing

- **Columns:** 12 on desktop, 8 on tablet, 4 on mobile.
- **Gutter:** 24px desktop, 20px tablet, 16px mobile.
- **Margin:** `clamp(20px, 4vw, 72px)`.
- **Max width:** 1440px content; 1680px full-bleed media.
- **Baseline:** 8px.
- **Section spacing:** `clamp(96px, 12vw, 200px)`.
- **Text-to-media:** 32–48px.
- **Asymmetry:** 7/5 or 8/4 splits; avoid centered everything.
- **Full-bleed media:** allowed for hero and key case study images; captions align to the grid.

---

## Layout principles

1. **One focal point per section.** A headline, a screen, or a metric — not three.
2. **Let media breathe.** At least 48px of clear space around major visuals.
3. **Use rules, not boxes.** Thin lines and space instead of bordered cards.
4. **Anchor with a left column.** Section number + label on the left; content on the right.
5. **Break the grid once per page.** A full-bleed image or an off-grid annotation; not more.
6. **Keep the fold honest.** No giant 3D scene that hides the work.
7. **Captions are part of the design.** They tell the story; treat them with care.

---

## Components

### Wordmark

- Typographic: **Monalisha Chatterjee** in the display face, or a compact **MC** monogram.
- No sticker, no badge, no drop shadow.
- One color: ink or paper.
- Favicon: MC monogram, 32×32 and 180×180.

### Buttons

- **Primary:** ink fill, paper text, 48px height, 2px radius, arrow.
- **Secondary:** text link with a 1px underline that draws on hover.
- **Tertiary:** mono label with arrow.
- Hover: 2px lift, no shadow explosion.
- Focus: 2px cobalt outline, 3px offset.

### Project row

- Top rule; index + title left; outcome right; image below or beside.
- Hover: image scales 1.02, outcome underline draws.
- No card borders, no shadow.

### Outcome stat

- Acid background or acid underline; large number in display face; label in mono.
- One per section, maximum.

### Figure + caption

- Caption: 14px, graphite, max 60ch.
- Numbered figures for long case studies.
- Annotations: small numbered pins with a list below; never over the UI without a reason.

### Section header

- Left: `01` + label in mono.
- Right: H2 in display.
- Thin rule below.
- Sticky on desktop for case studies.

### Testimonial

- Quote in body L or H3; name/title in mono; no giant quotation mark.
- One lead quote, two supporting; not five.

### Nav

- Thin, sticky; wordmark left; links center; résumé + contact right.
- Active link: cobalt underline.
- Mobile: full-screen menu, large type, close X.

### Forms

- None in v1. Email + copy fallback.

---

## Imagery

### Product screens

- Use **real UI**, not mockups with fake data if avoidable.
- Show the screen in context: device frame only when it helps; otherwise full-bleed UI.
- Annotate the decision, not the obvious.
- Include states: empty, loading, error, success, edge cases.
- Use consistent device scale and shadow across a case study.
- Caption every image with what it shows and why it matters.

### Covers

- One system for all projects: a real screen + a 5–8 word outcome line.
- 16:10 or 4:3, 2000px wide minimum, AVIF/WebP.
- No Behance posters, no separate typography, no collage.
- Dark or light background per project is fine, but the composition must match.

### Portrait

- One strong editorial portrait, environmental not corporate.
- Warm neutral grade; no heavy filter.
- 4:5 and 1:1 crops.
- Caption with location and year.

### Research artifacts

- Real quotes, journey maps, affinity clusters, wireframes, usability clips.
- Clean them up, but do not over-polish away the evidence.
- Redact names and sensitive data.
- Pair every artifact with a one-line takeaway.

### 3D imagery

- Paper layers, not glass.
- Soft studio light, warm shadow, subtle grain.
- UI textures printed on the planes, slightly matte.
- Neutral environment; let the product colors lead.
- No floating blobs, no abstract spheres, no chrome.

---

## 3D visual language

| Element | Direction |
|---|---|
| Metaphor | A stack of printed interface layers |
| Material | Matte paper, 240gsm; subtle fiber texture |
| Light | Warm key, cool fill, soft shadow; baked ambient occlusion |
| Camera | 35–50mm, slow dolly, shallow depth of field |
| Color | Neutral paper environment; UI screens in real colors |
| Labels | DOM mono labels, not 3D text |
| Motion | Layers separate and reassemble; no chaotic explosion |
| Post | Subtle grain and vignette; no bloom |
| Scale | Layer thickness 2–4px; gap 24–48px in 3D space |

---

## Motion personality

- **Slow in, fast out.** 200ms for UI, 600–900ms for narrative reveals.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`; no bounce, no elastic.
- **Stagger:** 60–90ms for lists; 30ms for text lines.
- **Scroll:** camera scrub linear; content reveals subtle; no parallax on text.
- **Hover:** 2px lift, 1.02 scale, 120ms.
- **Page transition:** 500–700ms; shared element for project covers.
- **Reduced motion:** crossfade only; no camera, no parallax, no autoplay.

---

## Iconography

- 1.5px line icons, 20–24px.
- Custom arrow: simple 45° diagonal or right arrow.
- No icon fonts; inline SVG.
- No emoji in UI.
- External links: arrow + `rel="noopener"`; label with "opens in new tab" for screen readers.

---

## Do / Don't

### Do

- Let one thing be loud per screen.
- Use real product work as the hero.
- Use whitespace as a material.
- Keep labels at 12px minimum.
- Make the 3D explain a layer.
- Use color for meaning.
- Test on a phone before approving a desktop composition.

### Don't

- Put borders and shadows on everything.
- Use seven accent colors as decoration.
- Use all-caps for long titles.
- Use 10px mono labels.
- Use Behance posters as covers.
- Use glassmorphism or chrome 3D.
- Use a custom cursor or scroll hijack.
- Let 3D hide the content.
- Copy a reference layout.

---

## Accessibility of the visual system

- Body text 17px minimum; labels 12px minimum.
- Contrast: AA for all text; AAA for body where possible.
- Never rely on color alone (links are underlined; active states have weight/shape).
- Focus visible on every interactive element.
- Motion respects `prefers-reduced-motion`; no flashing; no autoplay sound.
- Images have descriptive alt text; decorative 3D is `aria-hidden`.
- Captions and transcripts for video.
- 200% zoom and 320px width must remain usable.
- Dark sections maintain contrast; test focus rings on ink.

---

## Visual quality bar

A section is ready only when:

- It has one focal point.
- The type scale is intentional, not default.
- Spacing is on the 8px grid.
- The media is high-resolution and correctly cropped.
- The caption adds meaning.
- It works at 390px.
- It works with reduced motion.
- It looks quiet next to the work.
