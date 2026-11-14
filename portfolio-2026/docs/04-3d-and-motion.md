# 04 — 3D & Motion

## The role of 3D

3D is not the concept. **Depth is the concept; 3D is how depth becomes visible.**

The spatial layer stack exists to explain one thing: a product interface is the top layer of a much deeper system. Research, structure, interface, system, and outcome. If a 3D moment does not make that idea clearer, it gets cut.

### Rules

1. **Three moments only.** Hero, project transition, case-study exploded view.
2. **Content first.** Every label, caption, and project remains in the DOM.
3. **No scroll hijacking.** Native vertical scroll; the camera follows.
4. **No 3D text.** Labels are DOM; the canvas is aria-hidden.
5. **One material story.** Printed paper layers, not glass, chrome, or abstract blobs.
6. **Mobile gets a different cut.** Static or pre-rendered, not a degraded desktop camera.
7. **Performance is a gate.** If the 3D proof does not hit budget, the concept changes — not the budget.

---

## The metaphor: a stack of printed interface layers

A real product screen is printed on a thin sheet of paper. Under it:

| Layer | Represents | Visual |
|---|---|---|
| **Surface** | What users see | The final UI screen |
| **Structure** | Flows, IA, states | Wireframes, flow lines, state maps |
| **System** | Components, rules, tokens | Grid, components, tokens, documentation |
| **Signal** | Research, evidence, outcome | Quotes, insights, metrics, before/after |

The stack separates on scroll, then reassembles into the shipped product. The final state is not "a beautiful 3D render"; it is "the work, explained."

---

## Scene-by-scene storyboard

### Scene A — Hero: "The stack"

**Stage:** 100vh sticky canvas behind/next to the hero copy. Total scroll length: 150vh (1.5 viewports). Never more.

| Scroll | Camera | Layer state | DOM overlay |
|---|---|---|---|
| 0% | z = 6, 35mm, centered | Closed stack, surface only | H1, subhead, CTAs |
| 15% | z = 7, tilt 4° | Surface lifts 8px | Eyebrow, status |
| 35% | z = 8.5, tilt 6° | Layers separate: System, Interface, Structure, Research | Layer labels fade in |
| 55% | z = 9, 4° orbit | Stack fans 24–48px apart | Labels: Research, Structure, Interface, System |
| 75% | z = 8, settle | Stack holds, subtle float | Proof line: 3 shipped products |
| 100% | z = 7.5 | Stack collapses slightly, ready to exit | Scroll cue → work |

**Composition:** Text left (columns 1–6), canvas right (7–12). On scroll, the canvas expands to full-bleed for the layer separation, then contracts back.

**Why it works:** The headline says "design that holds up when you look closer." The scroll literally looks closer. The metaphor and the copy reinforce each other.

**Do not:** spin the stack, orbit 360°, use bloom, or hide the headline behind the canvas.

---

### Scene B — Work: "The shelf"

**Stage:** One-viewport transition, not a pinned 3D section. Total scroll: 100vh.

| Scroll | Camera | Object state | DOM |
|---|---|---|---|
| 0% | Stack centered | Four layers | Last layer label |
| 35% | Pull back | Layers collapse into 3 project plates | Work section title |
| 65% | Pan right | Plates align like a shelf | Project rows begin |
| 100% | Exit | Plates become the project covers | First row in view |

**Then:** the work index is 2D. Real editorial rows, real screens, fast. The 3D is the transition, not the reading experience.

**Why:** A 3D project grid is harder to scan, worse for accessibility, and slower. Use 3D to move between states, then get out of the way.

---

### Scene C — Project transition: "The drawer"

**Trigger:** click/focus a project row.

**Sequence:**

1. The project cover lifts 8px and scales 1.02 (200ms).
2. A shared-element transition expands the cover into the case study hero (500–700ms).
3. The 3D stack reforms in the case study hero, closed.
4. The case study title and outcome fade in.

**Fallback:** if View Transitions are unsupported, a crossfade + scroll-to-top. No jank.

**Why:** Continuity makes the site feel authored. It also signals that the project is a physical object in the archive.

---

### Scene D — Case study: "The exploded view"

**Stage:** A sticky 3D block after the 30-second summary. Total scroll: 200vh (2 viewports), then release.

| Scroll | Camera | Layer state | Content |
|---|---|---|---|
| 0% | Stack closed | Surface | "The brief" |
| 25% | Pull back | Research layer separates | Insight 1–3 with quotes |
| 50% | Tilt 8° | Structure layer separates | Flows, IA, states |
| 75% | Tilt 10° | System layer separates | Components, tokens, rules |
| 100% | Reassemble | All layers close into shipped screen | Outcome metric |

**DOM:** The active layer's content is in a column beside/below the canvas; annotations are numbered pins with a caption list. The 3D never contains text.

**Important:** This is the only long sticky section. It must release before the reader gets tired. After it, the rest of the case study is normal editorial scrolling.

**Why:** The exploded view is the case study's thesis: the screen is the surface; the decisions are the layers. It gives the reader a spatial memory of the argument.

#### Scene D variant — "One core, four surfaces" (lead case study only)

The 2026 engagement project should not use the generic exploded screen. It has a better spatial argument: **one system core, four interface surfaces**.

| Scroll | Camera | Object state | Content |
|---|---|---|---|
| 0% | Core closed, one surface facing camera | A single loyalty homepage | "One platform" |
| 25% | Pull back | The surface splits into four thin interface planes arranged around the core | Telecom, banking, retail, travel needs |
| 50% | Slow arc, 12° | Each plane shows a different archetype: points, progress, rewards, hybrid | Archetype names + one-line model |
| 75% | Settle | The four planes share the same module cards behind them | "Same system, different composition" |
| 100% | Reassemble | Planes fold back into one platform | Outcome / what shipped |

**Why it is the strongest 3D moment in the portfolio:** it makes the case-study thesis physical. The visitor sees that the four homepages are not four products — they are four arrangements of one system. That is the senior argument, made without a paragraph.

**Constraint:** this is a replacement for Scene D in that one case study, not an extra scene. Keep it to 200vh and reuse the hero asset pipeline. If it fails the performance gate, the static version is four labelled planes around a core — still communicates the idea.

---

### Scene E — Contact: "The card"

**Stage:** 100vh, no pin.

| Scroll | Camera | Object state | DOM |
|---|---|---|---|
| 0% | Stack centered | Layers close | "Let's make something useful." |
| 50% | Pull back | Stack folds into a single card | Email, résumé |
| 100% | Settle | Card floats, subtle shadow | Contact CTAs |

**Why:** The stack resolves into a single object — the portfolio as a calling card. It closes the narrative.

---

## Mobile adaptation

**Do not** run the desktop camera on a phone.

| Scene | Mobile |
|---|---|
| Hero | Static layered composition, 2–3 layers, CSS parallax at most; or a 6-second muted loop |
| Work | 2D editorial rows; no 3D shelf |
| Project transition | Crossfade + scroll to top |
| Case study exploded view | Static exploded diagram with numbered annotations; optional 4-second loop on tap |
| Contact | Static card |

- Poster image first; video/3D only on Wi-Fi or after idle.
- No postprocessing, no shadows, no DOF.
- 30fps minimum; if not, fall back to static.
- Touch targets 44×44px.
- Respect data saver and reduced motion.

---

## Motion specification

### Durations

| Interaction | Duration |
|---|---|
| Hover | 120–160ms |
| Button press | 90ms |
| Text reveal | 400–600ms |
| Image reveal | 500–700ms |
| Page transition | 500–700ms |
| Camera scrub | tied to scroll, `scrub: 1` |
| Layer separation | tied to scroll, linear |

### Easing

- UI: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Narrative: `cubic-bezier(0.16, 1, 0.3, 1)`
- No bounce, no elastic, no spring overshoot.

### Stagger

- Text lines: 30ms.
- List items: 60ms.
- Project rows: 80ms.
- Maximum total stagger: 300ms.

### Scroll behavior

- Native scroll only. No Lenis, no scroll hijack, no forced snap.
- GSAP ScrollTrigger with `scrub: 1` for camera and layer positions.
- `invalidateOnRefresh` for resize.
- Pause the render loop when the canvas is offscreen.
- Do not animate `top`, `left`, `width`, or `height`; use transforms and opacity.

### Motion principles

- **Slow in, fast out.** The camera moves less than you think.
- **One move per moment.** Don't combine camera, layer, text, and color animations at once.
- **Motion explains.** If it doesn't clarify a layer or a transition, remove it.
- **Quiet UI.** The work should move more than the chrome.

---

## Interaction model

- **Hover:** project rows lift 2px; image scales 1.02; outcome underline draws.
- **Focus:** visible 2px cobalt outline; same state as hover for keyboard users.
- **Click:** shared-element transition; no ripple, no sound.
- **Drag:** none. No 3D orbit controls; the camera is authored, not user-controlled.
- **Cursor:** default. No custom cursor, no magnetic buttons.
- **Audio:** none. No autoplay sound, no mute toggle.

---

## Performance strategy

### Budgets

| Metric | Target |
|---|---|
| Initial JS (gzip) | < 150KB |
| 3D chunk (gzip) | < 300KB |
| GLB payload | < 250KB |
| Texture memory | < 80MB desktop, < 40MB mobile |
| Draw calls | < 50 |
| Triangles | < 50k |
| Desktop FPS | 60 |
| Mobile FPS | 30 minimum |
| LCP | < 2.0s |
| INP | < 200ms |
| CLS | < 0.05 |

### Techniques

- **R3F + drei** with `frameloop="demand"`; render only when scrolling or interacting.
- **Adaptive DPR:** `dpr={[1, 1.75]}`; drop to 1 on low-power devices.
- **PerformanceMonitor:** downgrade quality if FPS drops.
- **Lazy load:** dynamic import the 3D island; preload only the hero GLB.
- **Pause offscreen:** IntersectionObserver; stop the loop when the canvas leaves the viewport.
- **Baked lighting:** no real-time shadows; ambient occlusion baked into textures.
- **No postprocessing on mobile:** use a CSS grain/vignette overlay instead.
- **Compressed assets:** Draco for geometry, KTX2/Basis for textures.
- **LOD:** desktop high, tablet medium, mobile static.
- **No HDRI download** unless small and necessary; bake the environment into the scene.
- **Error boundary:** if 3D fails, show the poster; never block content.

### Loading

- Poster image is the LCP element, not the canvas.
- Show the poster immediately; fade in the 3D when ready.
- No fake progress bars. If loading takes >2s, keep the poster and skip the 3D.
- Preload the hero GLB after fonts and poster.

---

## Fallback matrix

| Condition | Experience |
|---|---|
| WebGL2, good GPU | Full 3D, 60fps |
| WebGL1 / older GPU | Simplified 3D, lower DPR, no post |
| No WebGL | Static hero poster + optional video loop |
| Reduced motion | Static frames, crossfade only |
| Data saver / slow network | Poster first; 3D skipped |
| Low battery / low memory | 2D experience |
| Mobile | Static layered hero + static exploded view |
| Screen reader | DOM content; canvas `aria-hidden` |
| Keyboard only | All content reachable; 3D not focusable |

---

## Accessibility and motion safety

- Canvas is decorative: `aria-hidden="true"`, no focusable content.
- All labels and annotations are DOM text.
- No rapid camera movement; no FOV changes > 10°; no spinning.
- No parallax on body text.
- Respect `prefers-reduced-motion` at the OS level and via a visible "Reduce motion" toggle in the footer.
- Video: muted, no autoplay with sound, captions, pause control.
- No flashing; no strobing.
- If motion causes discomfort, the static fallback is one click away.

---

## Technical notes

- **Stack:** React Three Fiber + drei + three; GSAP ScrollTrigger; Astro island.
- **Scene:** orthographic or 35mm perspective; camera authored, not orbit-controlled.
- **Materials:** `MeshStandardMaterial` with paper texture; no transmission, no clearcoat.
- **Lighting:** 1 key + 1 fill + baked AO; no shadow maps.
- **Textures:** UI screens rendered at 2048×1280; KTX2; mipmaps.
- **Geometry:** planes and rounded boxes; no imported character/object models.
- **View transitions:** native View Transitions API where supported; GSAP fallback.
- **Error handling:** React error boundary; static fallback; analytics event on 3D failure.

### 3D asset pipeline

1. Design the layer stack in Figma (flat elevations).
2. Build simple planes in Blender; apply UI textures.
3. Bake lighting/AO; export GLB with Draco.
4. Compress textures to KTX2.
5. Test in the browser at target DPR.
6. Record a static poster and a short loop for mobile.
7. Version assets in `/public/3d/` with a manifest.

---

## What not to do

- 3D everywhere; a canvas on every section.
- Orbiting camera controls or drag-to-rotate.
- 3D text or 3D logos.
- Glassmorphism, chrome, liquid metal, or abstract blobs.
- Heavy bloom, chromatic aberration, or film grain over the whole page.
- Scroll hijacking, forced snap, or horizontal scroll.
- A 5-second loader before any content.
- Autoplay sound or a mute button.
- A custom cursor or magnetic buttons.
- A 3D experience that hides the work.
- A mobile "lite" version that removes content instead of simplifying visuals.

---

## Definition of done for the 3D layer

- The hero explains the layer metaphor in under 10 seconds of scrolling.
- A reviewer can name the four layers after one pass.
- The 3D runs at 60fps on a MacBook Air and 30fps on an iPhone 12.
- The page is fully usable with the canvas removed.
- The static fallback is good enough to ship on its own.
- No layout shift when the canvas loads.
- The 3D failure rate is < 1% and tracked.
