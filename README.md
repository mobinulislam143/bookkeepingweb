# Samadhan Bookkeeping & Tax

Marketing website for Samadhan Bookkeeping & Tax — 86-75 Midland Pkwy, Jamaica, NY 11432 · (347) 444-3222.

Built on Next.js 16 (App Router, Turbopack) with the **Samadhan Design System** ported from the
Claude Design project as the design authority.

```bash
npm install
npm run dev
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, trust band, services, problem→solution, why, who we help, process, reviews, CTA |
| `/services` | All four services side by side |
| `/bookkeeping` | Bookkeeping service page |
| `/tax-services` | Tax preparation service page |
| `/about` | Practice, approach, commitments, local positioning |
| `/faq` | Grouped questions with a scope disclaimer |
| `/contact` | Details, consultation form, map |
| `/privacy`, `/terms` | Legal placeholders — **must be replaced before launch** |

## Structure

```
src/
  app/              routes, metadata, sitemap, robots
    contact/
      actions.ts    server action for the consultation form
      form-state.ts shared form state (kept out of the "use server" module)
  components/
    ds/             design-system components (Button, Card, LedgerStack, …)
    site/           site-specific composition (Nav, Footer, PageHero, …)
  lib/
    business.ts     verified business facts — the single source of truth
    images.ts       supplied photography with alt text
  hooks/            media-query / scroll subscriptions
```

## Design system

Tokens live in `src/app/globals.css` and are also registered in Tailwind's `@theme`, so utility
classes emit design-system values rather than Tailwind's defaults. Components carry the authored
inline styles from the design system.

- **Colour** — warm ivory ground, graphite type, one brass accent, sage for positive states.
  Two backgrounds per page plus a single graphite band.
- **Type** — Schibsted Grotesk and Geist Mono, self-hosted via `next/font`.
- **Motion** — one entrance (`Reveal`), one hover, one press. `LedgerStack` is the signature
  CSS-3D visual (scattered → organized); no WebGL ships, so there is nothing to fall back from.
  Everything respects `prefers-reduced-motion`.

## Content rules

Copy follows the design system's honesty rule: **only verified facts are rendered.** No invented
years in business, credentials, awards, client counts, guarantees, or testimonials.

Unconfirmed information ships as a *visible* placeholder rather than an invention:

- Google review text (rating 5.0 and the count of 2 are real; the wording is not published)
- Business hours ("By appointment — exact hours to be confirmed")
- Owner background and credentials on `/about`
- The Jamaica/Queens neighborhood photo on `/about` (no such image was supplied)
- `/privacy` and `/terms`

Update `src/lib/business.ts` to change any business fact site-wide.

## Before launch

1. **Set the real domain** in `BIZ.siteUrl` (`src/lib/business.ts`) — canonicals, Open Graph, the
   sitemap, and `robots.txt` all derive from it.
2. **Wire form delivery.** `deliverConsultationRequest()` in `src/app/contact/actions.ts` is the
   only integration point; it currently logs the validated request server-side. Drop in an email
   service or CRM there and the rest of the form is unchanged.
3. **Replace the placeholders** listed above.
4. Add an Open Graph image (`opengraph-image.png` in `src/app/`).

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
```
