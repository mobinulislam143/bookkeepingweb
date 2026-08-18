import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import {
  Button,
  Card,
  Eyebrow,
  Icon,
  Photo,
  Reveal,
  type IconName,
} from "@/components/ds";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bookkeeping and Tax Services",
  description:
    "Bookkeeping, tax preparation, business financial support, and individual tax support for clients in Jamaica, Queens and across New York.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Samadhan Bookkeeping & Tax",
    description:
      "Bookkeeping, tax preparation, business financial support, and individual tax support in Jamaica, Queens.",
    url: "/services",
  },
};

type ServiceRow = {
  key: string;
  title: string;
  icon: IconName;
  body: string;
  forWho: string;
  benefits: string[];
  href: string;
  ctaLabel: string;
  image: { src: StaticImageData; alt: string };
};

const SERVICES: ServiceRow[] = [
  {
    key: "bookkeeping",
    title: "Bookkeeping",
    icon: "book-open",
    body: "Monthly record-keeping that stays current: categorized transactions, reconciled accounts, and a monthly summary.",
    forWho: "Small businesses, freelancers, and anyone whose records have drifted out of date.",
    benefits: ["Know where the month stands", "Fewer surprises at filing time", "One organized set of records"],
    href: "/bookkeeping",
    ctaLabel: "See bookkeeping",
    image: IMAGES.bookkeepingPaperwork,
  },
  {
    key: "tax",
    title: "Tax Preparation",
    icon: "receipt-text",
    body: "Individual and business returns prepared from organized information, with a checklist up front.",
    forWho: "Individuals and small business owners who want the paperwork handled carefully.",
    benefits: ["A specific document checklist", "Questions raised before filing", "Plain answers about forms"],
    href: "/tax-services",
    ctaLabel: "See tax services",
    image: IMAGES.taxHero,
  },
  {
    key: "business",
    title: "Business Financial Support",
    icon: "store",
    body: "Practical help for new and growing businesses: setting up records correctly and keeping a routine that holds.",
    forWho: "New business owners and local entrepreneurs building their first system.",
    benefits: ["Records set up correctly", "A routine you can maintain", "Someone local to ask"],
    href: "/contact",
    ctaLabel: "Request a consultation",
    image: IMAGES.businessSupport,
  },
  {
    key: "individual",
    title: "Individual Tax Support",
    icon: "user-round",
    body: "Personal tax preparation and organization for individuals and households, including self-employment income.",
    forWho: "Employees, freelancers, and households with more than one income source.",
    benefits: ["Documents organized in one place", "Clear questions, clear answers", "No jargon"],
    href: "/tax-services",
    ctaLabel: "See tax services",
    image: IMAGES.individualSupport,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Bookkeeping, taxes, and the organizing in between"
        lede="Four services, described in plain terms. If you are not sure which one you need, start with a conversation."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: `Call ${BIZ.phone}`, href: BIZ.tel }}
      />

      <Section tone="white">
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 70}>
              <Card
                padding="lg"
                className="svc-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr) auto",
                  gap: "var(--space-7)",
                  alignItems: "start",
                }}
              >
                <div style={{ display: "grid", gap: "var(--space-4)", alignContent: "start" }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "var(--radius-md)",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--brass-100)",
                      color: "var(--brass-700)",
                      border: "1px solid var(--brass-200)",
                    }}
                  >
                    <Icon name={s.icon} size={19} />
                  </span>
                  <h2 style={{ fontSize: "var(--fs-heading-2)" }}>{s.title}</h2>
                  <p
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "var(--text-muted)",
                      lineHeight: "var(--lh-body)",
                    }}
                  >
                    {s.body}
                  </p>
                  <Photo
                    src={s.image.src}
                    alt={s.image.alt}
                    ratio="16/9"
                    radius="var(--radius-md)"
                    sizes="(max-width: 1180px) 100vw, 30vw"
                  />
                </div>

                <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
                  <div style={{ display: "grid", gap: 6 }}>
                    <Eyebrow tone="muted">Who it&apos;s for</Eyebrow>
                    <p
                      style={{
                        fontSize: "var(--fs-body-sm)",
                        color: "var(--text-body)",
                        lineHeight: "var(--lh-body)",
                      }}
                    >
                      {s.forWho}
                    </p>
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    <Eyebrow tone="muted">What you get</Eyebrow>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 7 }}>
                      {s.benefits.map((b) => (
                        <li
                          key={b}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "16px 1fr",
                            gap: 10,
                            fontSize: "var(--fs-body-sm)",
                            color: "var(--text-body)",
                          }}
                        >
                          <span style={{ marginTop: 3, color: "var(--sage-500)" }}>
                            <Icon name="check" size={14} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10, minWidth: 190, alignContent: "start" }}>
                  <Button variant="primary" href={s.href} fullWidth>
                    {s.ctaLabel}
                  </Button>
                  <Button
                    variant="secondary"
                    href={BIZ.tel}
                    fullWidth
                    iconLeft={<Icon name="phone" size={15} />}
                  >
                    Call
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure which service fits?"
        lede="Describe your situation in a sentence or two. We'll tell you what we would start with."
      />
    </>
  );
}
