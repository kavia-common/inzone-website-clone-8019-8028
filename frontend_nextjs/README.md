# InZone.ae Static Clone (Next.js 14 App Router)

This repository contains a high‑fidelity, static clone of https://www.inzone.ae/ built with Next.js 14 App Router. It follows the Ocean Professional theme, WCAG 2.1 AA accessibility, SEO best practices, and is fully configured for Static Site Generation (SSG) export.

Key features:
- Pixel-accurate multi-page structure based on design notes in /assets
- Mobile-first responsive layout using CSS Grid/Flex
- Accessible navigation with keyboard support, ARIA, focus management
- SEO meta, Open Graph, Twitter Cards, JSON-LD structured data
- Static export ready (out/), sitemap.xml and robots.txt included
- Ocean Professional theme via CSS variables and utilities
- Optimized images using Next.js Image and static assets
- TypeScript, ESLint, PostCSS
- Ready for CI/CD (Vercel/Netlify/Static hosting)

Quick start:
- npm i
- npm run dev
- npm run build && npm run export (outputs to /out)

Environment variables:
- No secrets required for static build. For canonical domain, set NEXT_PUBLIC_SITE_URL in .env (example in .env.example).

Project structure:
- src/app: App Router with pages and routes
- src/components: Layout, navigation, footer, UI components
- src/lib: SEO/metadata utilities, constants, schema helpers
- public/assets: Project images (copied from /assets/img at build time by repo management; ensure images exist here)

Accessibility and SEO:
- All interactive elements are keyboard navigable
- Focus styles are visible and meet contrast
- alt text is descriptive; decorative images are aria-hidden
- Landmarks (header/nav/main/aside/footer) used with aria-label
- Head metadata via generateMetadata with per-page overrides
- Structured data JSON-LD for website, org, breadcrumbs, and articles

Build/Export:
- npm run build (Next.js production build)
- npm run export (static export to /out)
- Serve /out on any static hosting (Netlify, Vercel static, S3, etc.)

Testing (recommended):
- Add Playwright or Cypress for E2E
- Add Jest/RTL for unit/integration tests
- Run Lighthouse/Axe for performance and accessibility

Deployment:
- Vercel: push to main (configure project). No server required.
- Netlify: build command `npm run build && npm run export`, publish directory `out`.
- S3/CloudFront: sync /out to bucket.

Notes:
- This clone uses content based on provided design notes. Update content in page files and components per the latest requirements.

License:
- For internal evaluation and cloning purposes. Verify licensing of assets before public deployment.
