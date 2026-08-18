import type { Metadata } from "next";
import {
  Button,
  Card,
  Icon,
  LedgerStack,
  Photo,
  ProcessStep,
  RatingBadge,
  Reveal,
  SectionHeading,
  ServiceCard,
  StatTile,
  type IconName,
} from "@/components/ds";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: `${BIZ.name} — Bookkeeping and Tax Preparation in Jamaica, Queens`,
  description:
    "Bookkeeping, tax preparation, and accounting support for small businesses and individuals in Jamaica, Queens. Rated 5.0 on Google. Call (347) 444-3222.",
  alternates: { canonical: "/" },
};

const SERVICES: {
  index: string;
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
  href: string;
}[] = [
  {
    index: "01",
    icon: "book-open",
    title: "Bookkeeping",
    description:
      "Your records kept current and categorized, month after month, so nothing has to be reconstructed later.",
    bullets: ["Transaction categorization", "Account reconciliation", "Monthly summaries"],
    href: "/bookkeeping",
  },
  {
    index: "02",
    icon: "receipt-text",
    title: "Tax Preparation",
    description:
      "Returns prepared from organized records, with a clear list of what to gather before we start.",
    bullets: ["Document checklist", "Individual and business returns", "Straight answers on paperwork"],
    href: "/tax-services",
  },
  {
    index: "03",
    icon: "calculator",
    title: "Accounting Support",
    description:
      "Help reading your own numbers — what changed this month, and what it means for next month.",
    bullets: ["Reports you can read", "Cleanup of past periods", "Ongoing questions answered"],
    href: "/services",
  },
  {
    index: "04",
    icon: "store",
    title: "Small Business Support",
    description:
      "Practical setup and record-keeping help for new and growing businesses in the neighborhood.",
    bullets: ["Getting set up correctly", "Record-keeping routines", "Year-round availability"],
    href: "/services",
  },
];

const WHY: [string, string][] = [
  ["Local", "An office on Midland Parkway, not a call center. Meet in person or handle it by phone."],
  ["Personal", "You deal with the same person who knows your records."],
  ["Clear communication", "Plain language, specific asks, no jargon for its own sake."],
  ["Detail-oriented", "Small discrepancies get caught while they are still small."],
];

const WHO_WE_HELP: string[] = [
  "Small business owners on Hillside, Jamaica Avenue, and across Queens",
  "Freelancers and self-employed people with 1099 income to sort out",
  "New businesses setting up record-keeping for the first time",
  "Individuals and households who want their return prepared carefully",
];

const PROCESS: [string, string, string][] = [
  [
    "01",
    "Tell Us What You Need",
    "A short conversation about your records, your business, and what is coming up — tax season, a cleanup, or ongoing monthly work.",
  ],
  [
    "02",
    "Get a Clear Plan",
    "We lay out what we will handle, what we need from you, and when. No paperwork mystery.",
  ],
  [
    "03",
    "Stay Organized",
    "Records stay current through the year, so tax time is a review instead of a rebuild.",
  ],
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Bookkeeping & Tax · Jamaica, Queens"
        title={
          <>
            Clear books.
            <br />
            Confident decisions.
          </>
        }
        lede="Bookkeeping, tax preparation, and accounting support for small businesses and individuals in Jamaica, Queens — organized month to month, not rebuilt every April."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
        meta={
          <div
            style={{
              display: "flex",
              gap: "var(--space-5)",
              flexWrap: "wrap",
              alignItems: "center",
              paddingTop: "var(--space-3)",
            }}
          >
            <RatingBadge rating={BIZ.rating} reviewCount={BIZ.reviews} />
            <a
              href={BIZ.tel}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "var(--fs-body)",
                color: "var(--text-strong)",
                textDecoration: "none",
              }}
            >
              <Icon name="phone" size={16} color="var(--brass-700)" />
              {BIZ.phone}
            </a>
          </div>
        }
        aside={<LedgerStack height={460} />}
      />

      {/* Hero photograph, given its own editorial band rather than crowding the 3D. */}
      <Section tone="ivory" pad="0">
        <Photo
          src={IMAGES.homeHero.src}
          alt={IMAGES.homeHero.alt}
          ratio="21/9"
          priority
          sizes="(max-width: 1240px) 100vw, 1240px"
          position="center 40%"
        />
      </Section>

      <Section tone="white" pad="var(--space-7)">
        <div
          className="trust-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: "var(--space-6)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <StatTile value="5.0" label="Google rating" sub="Based on 2 reviews" />
          </Reveal>
          <Reveal delay={70}>
            <StatTile value="2" label="Google reviews" sub="Verified on Google" />
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-strong)" }}>
                Jamaica, Queens
              </span>
              <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>
                {BIZ.street} · In person or by phone
              </span>
            </div>
          </Reveal>
          <Reveal delay={210} className="trust-cta" style={{ justifySelf: "end" }}>
            <Button variant="primary" href={BIZ.tel} iconLeft={<Icon name="phone" size={15} />}>
              Call {BIZ.phone}
            </Button>
          </Reveal>
        </div>
      </Section>

      <Section tone="ivory">
        <div style={{ display: "grid", gap: "var(--space-7)" }}>
          <SectionHeading
            eyebrow="Services"
            title="Four ways we help"
            lede="Straightforward services, described plainly. Start with what you need now — the rest can wait."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
              gap: "var(--space-4)",
            }}
          >
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 70} style={{ display: "grid" }}>
                <ServiceCard
                  index={s.index}
                  title={s.title}
                  description={s.description}
                  bullets={s.bullets}
                  href={s.href}
                  ctaLabel="Learn more"
                  icon={<Icon name={s.icon} size={19} />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ProblemSolution />

      <Section tone="white">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-6)", alignContent: "start" }}>
            <SectionHeading
              eyebrow="Why Samadhan"
              title="A local partner, not a portal"
              lede="A small practice in Jamaica, Queens that answers the phone and knows your file."
            />
            <Reveal delay={140}>
              <Photo
                src={IMAGES.clientRelationship.src}
                alt={IMAGES.clientRelationship.alt}
                ratio="4/3"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
          <div
            className="why-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}
          >
            {WHY.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 4) * 70}>
                <Card tone="ivory" padding="md" style={{ display: "grid", gap: 8, height: "100%" }}>
                  <h3 style={{ fontSize: "var(--fs-heading-3)" }}>{t}</h3>
                  <p
                    style={{
                      fontSize: "var(--fs-body-sm)",
                      color: "var(--text-muted)",
                      lineHeight: "var(--lh-body)",
                    }}
                  >
                    {d}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: "var(--space-8)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <Photo
              src={IMAGES.whoWeHelp.src}
              alt={IMAGES.whoWeHelp.alt}
              ratio="4/3"
              position="center 35%"
            />
          </Reveal>
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <SectionHeading
              eyebrow="Who we help"
              title="Neighborhood businesses and the people running them"
              lede="Most of our clients are within a few miles of the office. Some we see in person, some we never meet — both work."
            />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-3)" }}>
              {WHO_WE_HELP.map((w, i) => (
                <Reveal
                  key={w}
                  as="li"
                  delay={(i % 4) * 70}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "18px 1fr",
                    gap: 12,
                    paddingBottom: "var(--space-3)",
                    borderBottom: "1px solid var(--border-soft)",
                    fontSize: "var(--fs-body)",
                    color: "var(--text-body)",
                  }}
                >
                  <span style={{ marginTop: 4, color: "var(--brass-600)" }}>
                    <Icon name="arrow-right" size={15} />
                  </span>
                  {w}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            <SectionHeading
              eyebrow="Process"
              title="Three steps, no surprises"
              lede="You tell us where things stand. We handle the organizing and tell you what we need."
            />
            <Reveal delay={140}>
              <Photo
                src={IMAGES.process.src}
                alt={IMAGES.process.alt}
                ratio="4/3"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
          <div>
            {PROCESS.map(([n, t, d], i) => (
              <Reveal key={n} delay={(i % 3) * 70}>
                <ProcessStep number={n} title={t} description={d} last={i === PROCESS.length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.8fr) minmax(0,1.2fr)",
            gap: "var(--space-8)",
          }}
        >
          <SectionHeading
            eyebrow="Reviews"
            title="Rated 5.0 on Google"
            lede="Two reviews so far, both five stars. We'd rather show you the real ones than write our own."
          />
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <RatingBadge rating={BIZ.rating} reviewCount={BIZ.reviews} style={{ justifySelf: "start" }} />
            {[1, 2].map((i) => (
              <Reveal key={i} delay={i * 70}>
                <Card tone="paper" padding="md" style={{ display: "grid", gap: 10 }}>
                  <span
                    style={{
                      font: "var(--text-style-eyebrow)",
                      letterSpacing: "var(--ls-eyebrow)",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                    }}
                  >
                    Google review {i} — text to be added
                  </span>
                  <p
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "var(--text-faint)",
                      lineHeight: "var(--lh-body)",
                    }}
                  >
                    Placeholder: paste the exact review text and reviewer first name here. Nothing is
                    quoted until the real wording is supplied.
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
