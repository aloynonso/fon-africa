# Father of Nations · `fon.africa`

> A Pan-African industrial group. Energy. Agro. Technology.

Production-grade Next.js 14 platform for Father of Nations (FON) — built with the App Router,
TypeScript, Tailwind CSS, and Framer Motion. Designed to feel like a sovereign-scale African
industrial and investment institution.

---

## Stack

| Layer       | Tooling                                        |
| ----------- | ---------------------------------------------- |
| Framework   | **Next.js 14** (App Router) · React 18 · TS 5  |
| Styling     | **Tailwind CSS 3** + CSS variables             |
| Motion      | **Framer Motion 11**                           |
| Icons       | **Lucide React**                               |
| Fonts       | Fraunces · Inter · JetBrains Mono              |

---

## Quickstart

```bash
# 1. Install
npm install         # or pnpm / yarn / bun

# 2. Env
cp .env.example .env.local

# 3. Run
npm run dev         # → http://localhost:3000

# 4. Build
npm run build && npm start
```

Type-check: `npm run type-check`

---

## Architecture

```
app/
├── layout.tsx              # Root layout · global Header / Footer / metadata
├── page.tsx                # Group homepage
├── globals.css             # Theme tokens (CSS vars) + utilities
│
├── about/                  # The Group · principles · ESG
├── energy/                 # FON Energy (data-theme="energy")
├── agro/                   # FON Agro    (data-theme="agro")
├── technologies/           # FON Tech    (data-theme="tech")
├── projects/               # Cross-division portfolio
├── investors/              # Capital partnership
├── partners/               # Strategic collaboration
├── media/                  # Reports · press
└── contact/                # Contact form

components/
├── layout/                 # Header · Footer  (shared shell)
├── sections/               # MetricsGrid · CapabilitiesGrid · ProjectsGrid
└── ui/                     # MetricsCounter · Ticker · SectionLabel · Breadcrumb

lib/
├── content/                # CMS-ready content registries
│   ├── divisions.ts        #   division metadata
│   ├── projects.ts         #   live project portfolio
│   ├── capabilities.ts     #   capability cards (+ icon registry)
│   ├── ventures.ts         #   FON Technologies venture portfolio
│   ├── metrics.ts          #   group + division metrics
│   └── navigation.ts       #   primary + footer nav
├── motion/presets.ts       # Reusable motion variants
└── utils.ts                # cn() classname helper
```

---

## Theme Token System

A single CSS variable surface drives all division theming. Each division route wraps its content
in a `<div data-theme="energy|agro|tech">` — the variables in `app/globals.css` re-bind:

| Token              | Group (default) | Energy   | Agro     | Tech     |
| ------------------ | --------------- | -------- | -------- | -------- |
| `--ink`            | `#0a0a0a`       | `#050810`| `#0c0f08`| `#050608`|
| `--bone`           | `#f4efe6`       | `#eaf2ff`| `#f2ede1`| `#e8eef5`|
| `--accent`         | `#c9a449` gold  | electric blue | ochre + forest | neon cyan |
| `--accent-bright`  | `#e8c46b`       | `#5fc8ff`| `#4a8a5c`| `#5fe7ff`|

Build new sections with `var(--accent)` etc. and they'll automatically theme per division.

---

## CMS-Ready

All content is centralized in `lib/content/`. To wire up a headless CMS (Sanity, Contentful,
Strapi, Payload), replace the static exports with async fetchers in those files — the consuming
components don't need to change.

---

## Motion Presets

Use the variants in `lib/motion/presets.ts` for visual consistency:

```tsx
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/lib/motion/presets';

<motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
  …
</motion.div>
```

---

## SEO

- Full metadata in `app/layout.tsx` (OpenGraph, Twitter card, robots)
- Per-route `metadata` exports on every page (title template `%s · FON`)
- `metadataBase` set for absolute social card URLs
- Update `metadataBase` + `NEXT_PUBLIC_SITE_URL` for non-prod environments

---

## Accessibility

- Respects `prefers-reduced-motion` (animations down-shifted to 0.01ms)
- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, `section`)
- Mobile menu uses `aria-label`
- Form inputs labelled

---

## Deploy

Optimized for **Vercel** out of the box:

```bash
vercel --prod
```

Also works on any Node host (`npm run build && npm start`) or static export
(`output: 'export'` in `next.config.js` if no runtime APIs are added).

---

## License

© Father of Nations Holdings. All rights reserved.
