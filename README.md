# s2paganini.com

Personal website for Silvio Paganini — Director of Software Engineering at BCG X, focused on applied AI, LLM systems, and enterprise engineering across LATAM.

Live at [s2paganini.com](https://s2paganini.com)

## Stack

- **Next.js 14** — static export (`output: 'export'`)
- **TypeScript** + React 18
- **Three.js** — WebGL canvas background
- **Google Fonts** — Fraunces, JetBrains Mono, DM Sans

## OG Image

The OpenGraph image (`public/og.png`, 1200×630) is generated via Playwright:

```bash
node scripts/generate-og.js
```

Requires Playwright to be installed globally or at `/opt/node22/lib/node_modules/playwright`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

## Deployment

Static export deployed via Vercel. The `out/` directory is the build artifact.
