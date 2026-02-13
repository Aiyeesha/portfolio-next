# portfolio-next (next16)

This is the "clean" package set:

- Next.js upgraded to a patched release line (security advisory CVE-2025-66478).
- next-intl correctly wired (plugin + i18n/request.ts).
- ESLint 9 flat config (supported with Next 15+).

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open:

- http://localhost:3000/en
- http://localhost:3000/fr

## PDFs

Replace placeholders:

- `public/cv.pdf`
- `public/docs/ltp-requirements.pdf`

## Stage 3 UI

- Active nav highlight on scroll
- Reveal animations
- Accordion (Experience/Certifications)
- Testimonials section (i18n)

## Stage 4 UI

- Scroll progress bar
- Hash sync (replaceState)
- Improved scroll-spy
- Staggered reveal animations
- i18n for section headings

## Stage 5

- Navbar animated pill indicator
- Premium project details page
- Real contact form (API route + honeypot)

## Stage 6

- Formspree forwarding via /api/contact (env FORMSPREE_ENDPOINT)
- Calendly + email quick cards (env NEXT_PUBLIC_CALENDLY_URL / NEXT_PUBLIC_CONTACT_EMAIL)
- i18n for contact form
- Navbar pill constrained to nav container

## Stage 7

- Calendly embedded modal (iframe)
- Contact API rate-limit (in-memory)
- Improved Formspree error mapping + i18n messages

## Stage 8

- Project detail pages are data-driven (content/projectDetails.ts)
- Gallery component (local images under /public/projects/<slug>/)

## Stage 9

- Blog/Tutorial section on homepage + /[locale]/blog routes
- MDX posts under content/blog/posts
- MDX enabled via @next/mdx

### Stage 9 fixes

- Fixed server error by removing MDX imports from registry and rendering MDX behind a client boundary.

## Stage 10

- Blog frontmatter via gray-matter
- Tag filter on /blog (query param)
- Latest posts on homepage via /api/blog/latest

## Stage 11

- Blog SEO: generateMetadata for blog index + posts (OpenGraph/Twitter)
- MDX code blocks: copy button + improved styling via MDX components map
- Default OG image: /public/og-default.png

## Stage 12

- Server-side MDX rendering for blog posts (next-mdx-remote/rsc)
- Automatic Table of Contents (TOC) from headings (##, ###)
- Headings auto-generate ids for anchor links
- Server-friendly code blocks with a small client Copy button

### Stage 12 note

This stage opts out of Turbopack for stability with server-side MDX in development:

- dev: `next dev --webpack`
- build: `next build --webpack`

## Stage 12 FIX 2

- Replaces next-mdx-remote/rsc with official @next/mdx pipeline to avoid dev-mode SSR crash.
- Adds required mdx-components.tsx for App Router.
- Blog posts are rendered via dynamic import of local MDX files.

## Stage 12 FIX 3

- Restores next-intl plugin in next.config.mjs while keeping @next/mdx.
- Prevents runtime error: "Couldn't find next-intl config file".

## Stage 13

- Blog pagination (page size 6) + tag filter preserved
- Tags page /blog/tags
- Prev/Next navigation on blog posts
- Sitemap + robots via Next metadata routes
- Adds NEXT_PUBLIC_SITE_URL and metadataBase
