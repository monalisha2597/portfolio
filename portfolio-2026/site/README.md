# Portfolio 2026 — site

Astro 5 static site for Monalisha Chatterjee, Senior Product Designer.
Concept: **Depth** — interface → structure → system → signal.

Live: **https://monalisha-portfolio-2026.vercel.app**

`monalisha-portfolio.vercel.app` is owned by another Vercel account, so the
project published under `monalisha-portfolio-2026`. Update `site.url` in
`src/consts.ts`, `site` in `astro.config.mjs` and `public/robots.txt` if the
domain changes.

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

Node 18.17+ works; the pinned Astro version is 5.7.14 for that reason.

## Deploy

The Vercel project is `monalisha-portfolio` (team `monalisha1`), deployed from
this directory with the Vercel CLI:

```bash
npx vercel deploy --prod
```

The GitHub repo is **not** connected to this project: the repo root holds the
previous site and this app lives in a subdirectory. To switch to git-based
deploys, connect `monalisha2597/portfolio` in the Vercel dashboard, set
**Root Directory** to `portfolio-2026/site` and the **Production Branch** to
`portfolio-2026`. Do not connect it with the default root, or the old site at
the repo root will build instead.

## Structure

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Home: hero, work index, approach, systems, about |
| `src/pages/work/[slug].astro` | Case-study template driven by MDX |
| `src/content/projects/*.mdx` | The three case studies |
| `src/components/three/` | Hero layer-stack: `HeroIsland` gate + `HeroStack` scene |
| `src/components/StaticStack.astro` | Poster that stands in for the 3D scene |
| `src/components/Diagram.astro` | CSS/SVG diagrams used inside case studies |
| `src/styles/` | `tokens`, `base`, `components` |
| `docs/11-project-source-notes.md` | Source facts, caveats and fact-check list |

## Notes

- The 3D scene is an enhancement. It loads only on wide screens, after idle +
  1.5 s, with WebGL2, without save-data, and with motion enabled. Everything
  else gets the static poster.
- Case-study visuals are redrawn diagrams, captioned as such. No client
  screenshots are published.
- The merchant wallet case deliberately stops at MVP scope. No post-launch
  metrics are claimed.
