# HiGarden

Premium landscaping & garden design studio website for HiGarden (Kerala,
India) — Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion,
GSAP, Lenis smooth scroll, and shadcn/ui (Base UI primitives).

## Stack

- **Framework:** Next.js 16 (App Router, React 19), fully statically
  generated (SSG) — no server runtime is required for content
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config in
  `app/globals.css`, no `tailwind.config.js`)
- **UI primitives:** shadcn/ui on Base UI (`components/ui`)
- **Motion:** Framer Motion for reveals/hover/stagger, GSAP + ScrollTrigger
  for the hero parallax only, Lenis for inertial smooth scroll
- **Icons:** lucide-react (UI) + react-icons (brand/social glyphs)
- **Images:** `next/image`, remote-loaded from Unsplash during development
  (see [Replacing placeholder images](#replacing-placeholder-images))

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command       | Description                              |
| ------------- | ----------------------------------------- |
| `pnpm dev`    | Start the dev server (Turbopack)          |
| `pnpm build`  | Production build, statically generates every route |
| `pnpm start`  | Serve the production build locally        |
| `pnpm lint`   | ESLint                                    |

Type-check with `pnpm exec tsc --noEmit` (there's no separate `typecheck`
script; `pnpm build` already runs the TypeScript check).

## Project structure

```
app/            Routes (App Router) — one folder per page, plus
                sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx
components/
  layout/       Navbar, Footer, SmoothScrollProvider, ScrollProgress,
                CursorEffect, BackToTop
  home/         Section components used only on the homepage
  shared/       Cross-page building blocks (cards, grids, lightbox, etc.)
  contact/      Contact form, CTAs, map embed
  ui/           shadcn-generated primitives
hooks/          useLenis, useMagnetic, useScrollProgress, useMediaQuery,
                usePrefersReducedMotion, useLightbox
lib/            cn() helper, framer-motion variants, SEO/JSON-LD builders,
                the Unsplash URL helper
constants/      All copy and structured content (services, projects,
                gallery, testimonials, FAQ, stats, process, blog posts,
                site/business info)
types/          Shared TypeScript types
```

## Business info & content

**Every placeholder value lives in [`constants/site.ts`](constants/site.ts)**
— phone, WhatsApp, email, address, domain, and social links are all marked
`// TODO`. Update that one file before launch; nothing else needs to change.

Copy, service descriptions, project/gallery entries, testimonials, FAQ and
blog posts are all in `constants/*.ts` as typed data — edit them directly,
no CMS is wired up.

## Replacing placeholder images

Every image call site in this project loads from `images.unsplash.com`
through the `unsplash()` helper in [`lib/unsplash.ts`](lib/unsplash.ts), and
every image object also carries a `recommendedFilename` — the filename real
photography should use once it's ready, e.g.
`higarden-service-tropical-landscaping.jpg`.

To swap in real photography:

1. Drop the licensed images into `public/images/`.
2. Replace the corresponding `unsplash(...)` call with the local path
   (`/images/<recommendedFilename>`).
3. Remove `images.unsplash.com` from `remotePatterns` in `next.config.ts`
   once no Unsplash URLs remain.

## Logo

The attached HiGarden logo couldn't be exported as a file during this build,
so the mark is rebuilt as SVG in
[`components/shared/LogoMark.tsx`](components/shared/LogoMark.tsx) and
[`app/icon.svg`](app/icon.svg) (favicon). Once you have an exported brand
asset, swap the `<svg>` markup in those two files.

## Deployment

The site builds as a standard Next.js app (not `output: export`), so
`next/image` optimization keeps working on every platform below.

### Vercel

Zero-config. Import the repo at [vercel.com/new](https://vercel.com/new) —
build command `pnpm build`, output is detected automatically.

### Netlify

Install the [Next Runtime](https://docs.netlify.com/frameworks/next-js/overview/)
(auto-detected for Next.js repos) and set:

- Build command: `pnpm build`
- Publish directory: `.next`

### Cloudflare Pages

Use Cloudflare's native Next.js build ("Framework preset: Next.js"):

- Build command: `pnpm build`
- Build output directory: `.next`

All three platforms need `NODE_VERSION`/`node` set to 20+ (see
`package.json` engines if you add one) and will pick up `pnpm-lock.yaml`
automatically.

## Before going live

- [ ] Replace every `// TODO` in `constants/site.ts`
- [ ] Swap Unsplash placeholders for licensed photography (see above)
- [ ] Swap the SVG logo for the real exported brand asset
- [ ] Update `site.mapEmbedSrc` in `constants/site.ts` with the exact studio
      location
- [ ] Wire `components/contact/ContactForm.tsx`'s submit handler to a real
      backend (API route, Formspree, or Netlify Forms — it's stubbed with a
      `// TODO` and a working success/error UI already in place)
- [ ] Run Lighthouse against the production build and confirm 100s across
      Performance / Accessibility / Best Practices / SEO
