# Samadhan Accounting & Advisory

A professional accounting and financial advisory website — built as a **reusable template** for
seven adjacent categories, currently pointed at *Accounting Firm*.

Positioning: **Accurate accounting. Clear financial insight. Better business decisions.**

```bash
npm install
npm run dev
```

## Re-pointing the template

Everything that defines the brand's *category* lives in one file: `src/lib/business.ts`. Change a
single line and the hero, the service order, the metadata and the footer follow. No layout,
component or route changes are needed.

```ts
// src/lib/business.ts
export const NICHE: Niche = "accounting-firm";
```

| Preset | Emphasis it produces |
| --- | --- |
| `accountant` | Professional accounting and financial management |
| `accounting` | Reliable accounting solutions |
| `accounting-firm` | Comprehensive services for businesses *(active)* |
| `cpa` | Accounting, tax and advisory, tax led |
| `chartered-accountant` | Accounting, reporting, tax and advisory, reporting led |
| `business-management-consultant` | Advisory and consulting led; operational insight |
| `financial-consultant` | Consulting and analysis led; decision support |

Each preset supplies the hero headline, supporting copy, the trust line, the service ordering, the
SEO phrase and the meta description. The six services themselves are defined once in `SERVICE_MAP`
and re-ordered per preset, so the numbering (`01`–`06`) always matches what is on screen.

Business facts — name, address, phone, rating — are separate, in `BIZ`. Swap those for a new
client and the whole site follows.

## Pages

| Route | Role |
| --- | --- |
| `/` | Hero, trust band, services, who we serve, value props, accuracy demo, about, process, before/after, proof, local, FAQ, CTA |
| `/services` | The six services as a full-width index, then how they combine |
| `/who-we-serve` | Four client stages, each with what it typically needs first |
| `/insights` | Financial reporting, consulting and advisory — the "what the numbers mean" half |
| `/bookkeeping` | Service detail: records, reconciliation diagram, what is included |
| `/tax-services` | Service detail on a warm tinted field: the four-stage filing pipeline |
| `/about` | The firm, its approach, four commitments |
| `/faq` | Sticky index rail beside grouped accordions |
| `/contact` | Details column beside the consultation form |
| `/privacy`, `/terms` | Plain documents. **Draft notices — replace before launch.** |

Navigation is About · Services · Who We Serve · Insights · Contact, with a **Get Started** CTA.
FAQ, bookkeeping and tax-services stay reachable from the footer and in-page links.

## Design system

White ground, warm ivory and cool gray surfaces, graphite ink, and **one restrained gold accent**.
Nothing is translucent or blurred; every border is a 1px hairline and every shadow is tight.

| Token | Value | Use |
| --- | --- | --- |
| `--white` | `#FFFFFF` | Primary ground |
| `--ivory` | `#FAF8F3` | Warm alternate surface |
| `--cool` | `#F6F8FA` | Cool alternate surface |
| `--ink-900` | `#16191F` | Type, and the two graphite sections |
| `--ink-600` | `#4D5663` | Secondary text |
| `--accent` | `#C9A227` | The gold mark — rules, marks, graphics |
| `--accent-ink` | `#7D6210` | Gold for **text**; `#C9A227` on white is only 2.3:1 |
| `--accent-tint` | `#FAF3DF` | The tinted field |
| `--action` | graphite | Primary buttons — gold stays a mark, not a button |

Gold is deliberately split by role. The brand tone is used for graphics and for text on dark
grounds; a darkened tone carries accent text on light grounds so it passes contrast. Measured on
the live site: accent text 5.79:1, body 7.43:1, headings 17.6:1, gold on graphite 7.28:1.

Only **two** dark sections appear on any page, and there are no heavy black backgrounds, gradients
or neon.

**Type**: Inter Tight for headlines, Inter for body, a mono face for figures and metadata so
numbers align in tables and statistics.

## Motion and 3D

Preserved from the existing build and re-coloured, not replaced. All of it is CSS 3D and Framer
Motion — no WebGL, no extra dependency, no fallback path.

| Component | Where | What it does |
| --- | --- | --- |
| `viz/DocumentSystem` | Hero | Four document surfaces assemble from off-axis, then tilt with the cursor at different depths |
| `viz/LedgerBoard` | Home, Insights | Record marks slide from jittered into alignment as each row is reached |
| `viz/ChaosOrder` | Home | Six documents driven directly by scroll — scattered pile to aligned column |
| `viz/ReconcileDiagram` | Bookkeeping | Bank activity and your records move into step; links draw |
| `viz/FilingPipeline` | Tax services | Four stages on one filling track; the paper stack squares up |
| `viz/QueensLines` | Local section | Street grid drawn as hairlines with the office marked |
| `sections/ClarityRail` | Insights | Organize → Record → Understand, activating on scroll |
| `sections/ProcessTimeline` | Home, Services | Vertical timeline whose spine fills with scroll |

One entrance (`Reveal`, 460ms, once), one stagger, and cursor parallax on the hero only.
`prefers-reduced-motion` collapses transitions to 1ms, pins scroll-driven visuals at their
finished state, and renders `Reveal` children as plain elements.

## Content rules

Only verified facts are published. **No invented statistics, credentials, certifications, awards,
client counts, years of experience or testimonials.**

- **The trust band carries no fabricated metrics.** Two of its four entries are real and flagged
  as verified (the Google rating and review count); the other two are statements about how the
  firm works, not numbers. `PROOF` in `business.ts` is the only place to change this — do not add
  figures without a source.
- **No testimonials are quoted.** The proof section uses the real rating and says plainly that the
  review wording belongs to the people who wrote it.
- **Team background, credentials and years in practice** are marked as to-be-supplied on `/about`
  rather than invented.
- **Tax scope** is stated on `/tax-services`: no refund estimates, no representation, no
  credentials claimed.
- **Social links** render only when `SOCIAL` in `business.ts` has real entries. It is empty.
- **No `newyorkqueensstreet` photograph** was among the supplied assets, so the local section uses
  the drawn street-grid system rather than an unrelated stock image or a Maps embed.

## SEO

Titles, descriptions and JSON-LD are generated from the active preset. The structured data is
`AccountingService` with a full `hasOfferCatalog` built from the six services, verified address
and phone, and an `aggregateRating` limited to what Google publishes. Broad targets: accounting
services, accounting firm, professional accounting services, bookkeeping services, financial
consulting, business advisory, CPA services, financial reporting.

## Structure

```
src/
  app/
    globals.css     design tokens + base + layout/type utilities
    ui.css          component layer (buttons, cards, nav, footer, forms, grids)
    viz.css         the 3D and diagram layer
    contact/
      actions.ts    server action behind the consultation form
      form-state.ts shared form state (kept out of the "use server" module)
  components/
    ui/             Button, Icon, Photo, Accordion, SectionHead, Motion primitives
    layout/         Nav, Footer, DocPage
    sections/       Blocks (services, stages, values, trust), ClarityRail,
                    ProcessTimeline, ContactForm, Shared (local/proof/CTA)
    viz/            the 3D and scroll-driven diagrams
  lib/
    business.ts     facts, positioning presets, services, shared content
    images.ts       supplied photography with alt text
  hooks/            media-query / hydration / scroll subscriptions
```

## Before launch

1. **Set the real domain** in `BIZ.siteUrl` — canonicals, Open Graph, the sitemap and
   `robots.txt` all derive from it.
2. **Pick the preset** in `NICHE`, and update `BIZ` for the client.
3. **Wire form delivery.** `deliverConsultationRequest()` in `src/app/contact/actions.ts` is the
   only integration point; it currently logs the validated request server-side.
4. **Replace the draft legal notices**, and supply team credentials if they are to be published.
5. Add an Open Graph image (`opengraph-image.png` in `src/app/`).

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
```
