import type { StaticImageData } from "next/image";
import {
  Accordion,
  Card,
  ContactRow,
  Eyebrow,
  Icon,
  Photo,
  ProcessStep,
  Reveal,
  SectionHeading,
  TiltCard,
  type AccordionItem,
} from "@/components/ds";
import { BIZ } from "@/lib/business";
import { CTASection } from "./CTASection";
import { PageHero } from "./PageHero";
import { Section } from "./Section";

export interface ServiceDetailContent {
  eyebrow: string;
  title: string;
  lede: string;
  why: { title: string; body: string[] };
  helps: [string, string][];
  forWho: string[];
  faq: AccordionItem[];
  /** Scope note, shown as a quiet card under the FAQ. */
  note?: string;
  whyImage: { src: StaticImageData; alt: string };
  forWhoImage: { src: StaticImageData; alt: string };
}

const STEPS: [string, string, string][] = [
  ["01", "Tell Us What You Need", "A short call or visit to understand your records and timing."],
  ["02", "Get a Clear Plan", "What we handle, what you send, and when."],
  ["03", "Stay Organized", "Records kept current so nothing has to be rebuilt."],
];

export function ServiceDetailPage({ content: d }: { content: ServiceDetailContent }) {
  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        lede={d.lede}
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "See all services", href: "/services" }}
        aside={
          <TiltCard>
            <Card padding="lg" style={{ display: "grid", gap: "var(--space-5)" }}>
              <Eyebrow rule>At a glance</Eyebrow>
              <div style={{ display: "grid", gap: "var(--space-4)" }}>
                {d.helps.slice(0, 3).map(([t, b]) => (
                  <div key={t} style={{ display: "grid", gap: 3 }}>
                    <strong
                      style={{
                        fontSize: "var(--fs-body)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--text-strong)",
                      }}
                    >
                      {t}
                    </strong>
                    <span
                      style={{
                        fontSize: "var(--fs-body-sm)",
                        color: "var(--text-muted)",
                        lineHeight: "var(--lh-body)",
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-4)" }}>
                <ContactRow
                  icon={<Icon name="phone" size={16} />}
                  label="Talk it through"
                  value={BIZ.phone}
                  href={BIZ.tel}
                  note="Jamaica, Queens · in person or by phone"
                />
              </div>
            </Card>
          </TiltCard>
        }
      />

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
          <SectionHeading eyebrow="Why it matters" title={d.why.title} />
          <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: "var(--measure-prose)" }}>
            {d.why.body.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 70}>
                <p
                  style={{
                    fontSize: "var(--fs-body-lg)",
                    lineHeight: "var(--lh-body)",
                    color: "var(--text-body)",
                  }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <Photo
                src={d.whyImage.src}
                alt={d.whyImage.alt}
                ratio="16/9"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div style={{ display: "grid", gap: "var(--space-7)" }}>
          <SectionHeading
            eyebrow="What we help with"
            title="The actual work"
            lede="No packages with invented names — this is what the service involves."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
              gap: "var(--space-4)",
            }}
          >
            {d.helps.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 3) * 70}>
                <Card padding="md" style={{ display: "grid", gap: 8, height: "100%", alignContent: "start" }}>
                  <span
                    className="ds-mono-num"
                    style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <SectionHeading eyebrow="Who it's for" title="You'll recognize yourself here" />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-3)" }}>
              {d.forWho.map((w, i) => (
                <Reveal
                  key={w}
                  as="li"
                  delay={(i % 4) * 70}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "18px 1fr",
                    gap: 12,
                    paddingBottom: "var(--space-3)",
                    borderBottom: "1px solid var(--border-hairline)",
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
            <Reveal delay={210}>
              <Photo
                src={d.forWhoImage.src}
                alt={d.forWhoImage.alt}
                ratio="16/9"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </Reveal>
          </div>

          <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
            <SectionHeading eyebrow="How it works" title="Getting started" />
            <div>
              {STEPS.map(([n, t, b], i) => (
                <Reveal key={n} delay={(i % 3) * 70}>
                  <ProcessStep number={n} title={t} description={b} last={i === STEPS.length - 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ivory" narrow>
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <SectionHeading
            eyebrow="Questions"
            title={`Common questions about ${d.eyebrow.toLowerCase()}`}
          />
          <Accordion items={d.faq} defaultOpen={-1} />
          {d.note ? (
            <Card tone="paper" padding="md">
              <p
                style={{
                  fontSize: "var(--fs-body-sm)",
                  color: "var(--text-muted)",
                  lineHeight: "var(--lh-body)",
                }}
              >
                {d.note}
              </p>
            </Card>
          ) : null}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
