import type { Metadata } from "next";
import { Button, ContactRow, Eyebrow, Icon, RatingBadge, SectionHeading } from "@/components/ds";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact — Schedule a Consultation",
  description:
    "Call (347) 444-3222 or request a consultation. Samadhan Bookkeeping & Tax is at 86-75 Midland Pkwy, Jamaica, NY 11432.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Samadhan Bookkeeping & Tax",
    description: "Call (347) 444-3222 or request a consultation in Jamaica, Queens.",
    url: "/contact",
  },
};

const MAP_QUERY = encodeURIComponent(`${BIZ.street}, ${BIZ.cityLine}`);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your books"
        lede="Call, or send a short note about your situation. We are on Midland Parkway in Jamaica, Queens, and we work with clients in person and by phone."
        meta={
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button
              variant="accent"
              size="lg"
              href={BIZ.tel}
              iconLeft={<Icon name="phone" size={17} />}
            >
              Call {BIZ.phone}
            </Button>
            <Button variant="secondary" size="lg" href="#form">
              Use the form
            </Button>
          </div>
        }
      />

      <Section tone="white">
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.75fr) minmax(0,1.25fr)",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
            <h2 style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit" }}>
              <Eyebrow rule>Details</Eyebrow>
            </h2>
            <strong
              style={{
                fontSize: "var(--fs-body-lg)",
                fontWeight: "var(--fw-medium)",
                color: "var(--text-strong)",
              }}
            >
              {BIZ.name}
            </strong>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <ContactRow
                icon={<Icon name="map-pin" size={16} />}
                label="Address"
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
              <ContactRow
                icon={<Icon name="clock" size={16} />}
                label="Hours"
                value="By appointment"
                note="Exact hours to be confirmed — placeholder"
              />
            </div>
            <RatingBadge rating={BIZ.rating} reviewCount={BIZ.reviews} style={{ justifySelf: "start" }} />
          </div>

          <div id="form" style={{ scrollMarginTop: 90 }}>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div style={{ display: "grid", gap: "var(--space-5)" }}>
          <SectionHeading
            eyebrow="Getting here"
            title={`${BIZ.street}, ${BIZ.cityLine}`}
            lede="Street parking on Midland Parkway; a short drive from the Jamaica transit hub."
          />
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-soft)",
              background: "var(--ivory-200)",
            }}
          >
            <iframe
              title={`Map showing ${BIZ.name} at ${BIZ.street}, ${BIZ.cityLine}`}
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ display: "block", width: "100%", aspectRatio: "21/9", border: 0 }}
            />
            <div
              style={{
                position: "absolute",
                left: "var(--space-5)",
                bottom: "var(--space-5)",
                background: "var(--white)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-hairline)",
                boxShadow: "var(--shadow-md)",
                padding: "var(--space-4) var(--space-5)",
                display: "grid",
                gap: 4,
                maxWidth: "calc(100% - var(--space-8))",
              }}
            >
              <span
                style={{
                  font: "var(--text-style-eyebrow)",
                  letterSpacing: "var(--ls-eyebrow)",
                  textTransform: "uppercase",
                  color: "var(--text-accent)",
                }}
              >
                Office
              </span>
              <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-strong)" }}>
                {BIZ.street}, {BIZ.cityLine}
              </span>
              <a href={BIZ.tel} style={{ fontSize: "var(--fs-body-sm)" }}>
                {BIZ.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
