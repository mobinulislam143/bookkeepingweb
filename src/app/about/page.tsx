import type { Metadata } from "next";
import {
  Card,
  ContactRow,
  Icon,
  ImagePlaceholder,
  Photo,
  RatingBadge,
  Reveal,
  SectionHeading,
} from "@/components/ds";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the Practice",
  description:
    "Samadhan Bookkeeping & Tax is a local bookkeeping and tax practice on Midland Parkway in Jamaica, Queens, serving small businesses and individuals across New York.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Samadhan Bookkeeping & Tax",
    description: "A bookkeeping and tax practice on Midland Parkway in Jamaica, Queens.",
    url: "/about",
  },
};

const COMMITMENTS: [string, string][] = [
  ["Local service", "An office in the neighborhood, reachable by phone or in person."],
  ["Personalized support", "The same person handles your file and answers your questions."],
  ["Professional approach", "Careful records, consistent categorization, documented work."],
  ["Clear communication", "Specific requests, plain answers, no surprise jargon."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A bookkeeping practice on Midland Parkway"
        lede="Samadhan Bookkeeping & Tax is a local practice in Jamaica, Queens, helping small businesses and individuals keep their financial records organized and their filings straightforward."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "See services", href: "/services" }}
        aside={
          <Photo
            src={IMAGES.aboutPortrait.src}
            alt={IMAGES.aboutPortrait.alt}
            ratio="4/5"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            position="center 30%"
          />
        }
      />

      <Section tone="white">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.8fr) minmax(0,1.2fr)",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          <SectionHeading eyebrow="Approach" title="Organized first, everything else follows" />
          <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: "var(--measure-prose)" }}>
            <Reveal>
              <p
                style={{
                  fontSize: "var(--fs-body-lg)",
                  lineHeight: "var(--lh-body)",
                  color: "var(--text-body)",
                }}
              >
                The work starts with getting records in order. Once the information is current and
                consistent, the rest — reports, filings, decisions about the next few months —
                becomes ordinary instead of stressful.
              </p>
            </Reveal>
            <Reveal delay={70}>
              <p
                style={{
                  fontSize: "var(--fs-body)",
                  lineHeight: "var(--lh-body)",
                  color: "var(--text-muted)",
                }}
              >
                We work with local business owners, freelancers, and individuals across Queens. Most
                people come to us mid-problem: months behind, unsure what is deductible, or facing a
                filing deadline with records in three places. The first conversation is about where
                things actually stand, not where they should have been.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Photo
                src={IMAGES.aboutWorkspace.src}
                alt={IMAGES.aboutWorkspace.alt}
                ratio="16/9"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Reveal>
            <Reveal delay={210}>
              <Card tone="ivory" padding="md">
                <p
                  style={{
                    fontSize: "var(--fs-body-sm)",
                    color: "var(--text-muted)",
                    lineHeight: "var(--lh-body)",
                  }}
                >
                  Placeholder: owner background, credentials, and how long the practice has served
                  Queens will go here once confirmed. We are not filling this space with claims we
                  cannot back up.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div style={{ display: "grid", gap: "var(--space-7)" }}>
          <SectionHeading eyebrow="What guides the work" title="Four commitments" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "var(--space-4)",
            }}
          >
            {COMMITMENTS.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 4) * 70}>
                <Card padding="md" style={{ display: "grid", gap: 8, height: "100%", alignContent: "start" }}>
                  <h3 style={{ fontSize: "var(--fs-heading-3)" }}>{t}</h3>
                  <p
                    style={{
                      fontSize: "var(--fs-body-sm)",
                      color: "var(--text-muted)",
                      lineHeight: "var(--lh-body)",
                    }}
                  >
                    {b}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: "var(--space-8)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <SectionHeading
              eyebrow="Local"
              title="Serving Jamaica, Queens"
              lede="Midland Parkway, minutes from the Jamaica hub. Clients come from across Queens and the surrounding boroughs."
            />
            <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: 340 }}>
              <ContactRow
                icon={<Icon name="map-pin" size={16} />}
                label="Office"
                value={
                  <>
                    {BIZ.street}
                    <br />
                    {BIZ.cityLine}
                  </>
                }
              />
              <ContactRow
                icon={<Icon name="phone" size={16} />}
                label="Phone"
                value={BIZ.phone}
                href={BIZ.tel}
                note="Click to call"
              />
            </div>
            <RatingBadge rating={BIZ.rating} reviewCount={BIZ.reviews} style={{ justifySelf: "start" }} />
          </div>

          {/* No neighborhood photograph was supplied, so the slot states that
              plainly rather than substituting an unrelated interior shot. */}
          <ImagePlaceholder
            ratio="4/3"
            label="Jamaica / Queens neighborhood photo"
            note="Storefront, Midland Parkway, or the surrounding blocks — daylight, documentary. Drop the file into assets/image and swap this for <Photo />."
            alt="Neighborhood photograph of Jamaica, Queens, to be supplied"
          />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
