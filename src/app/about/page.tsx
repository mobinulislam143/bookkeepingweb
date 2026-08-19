import type { Metadata } from "next";
import Image from "next/image";
import { Button, Icon, Photo, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { FinalCta, LocalSection, Proof } from "@/components/sections/Shared";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "An accounting and financial advisory firm on Midland Parkway in Jamaica, Queens, serving businesses across New York with accounting, reporting, tax and advisory services.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${BIZ.name}`,
    description: "An accounting and financial advisory firm in Jamaica, Queens.",
    url: "/about",
  },
};

const COMMITMENTS: [string, string][] = [
  ["Local", "An office on Midland Parkway, not a call center. Meet in person or handle it by phone."],
  ["Personal", "You deal with the same person who knows your file."],
  ["Clear", "Specific asks, plain answers, and no jargon for its own sake."],
  ["Careful", "Small discrepancies get caught while they are still small."],
];

export default function AboutPage() {
  return (
    <>
      {/* A statement, set large, with the practice named underneath it. */}
      <section className="section section--tight" aria-labelledby="about-h">
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                borderBottom: "2px solid var(--ink-900)",
                paddingBottom: 16,
                marginBottom: "clamp(28px, 4vw, 56px)",
              }}
            >
              <p className="meta meta--accent">About the firm</p>
              <p className="meta">Jamaica, Queens · New York</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 id="about-h" className="mega" style={{ maxWidth: "17ch" }}>
              Accounting Expertise With a Business-Minded Approach
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="split"
              style={{ marginTop: "clamp(32px, 4vw, 56px)", alignItems: "start", gap: "clamp(28px, 5vw, 80px)" }}
            >
              <p className="lede" style={{ maxWidth: "none" }}>
                We believe accounting should do more than record what happened. It should help you
                understand where your business stands, where it is going, and what decisions can
                move it forward.
              </p>
              <p className="prose">
                Our approach combines accurate financial management with practical business
                insight, giving clients the clarity they need to operate confidently and plan for
                sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed portrait band. */}
      <div className="band">
        <div className="band__figure" style={{ aspectRatio: "21/8" }}>
          <Image
            src={IMAGES.aboutPortrait.src}
            alt={IMAGES.aboutPortrait.alt}
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 32%" }}
          />
        </div>
      </div>

      {/* Approach, set as a wide editorial column with a photograph beside it. */}
      <section className="section" aria-labelledby="approach-h">
        <div className="container">
          <div className="split split--wide-left split--top" style={{ gap: "clamp(32px, 5vw, 88px)" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Approach</p>
              </Reveal>
              <Reveal>
                <h2 id="approach-h" className="display">
                  Accurate first.
                  <br />
                  Useful second.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Most clients come to us mid-problem: months behind, unsure what a number
                  represents, or facing a deadline with records in three places. The first
                  conversation is about where things actually stand, not where they should have
                  been.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="prose">
                  From there the work is unglamorous and cumulative — statements matched to
                  records, expenses categorized the same way each month, a report at the end of it
                  that gets read rather than filed. Done consistently, that is what makes a
                  business legible to a lender, to a filing, and to the person running it.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div
                  className="card"
                  style={{ background: "var(--cool)", borderStyle: "dashed", width: "100%" }}
                >
                  <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
                    <b style={{ color: "var(--ink-900)" }}>To be supplied.</b> Team background,
                    professional credentials and years in practice belong here once confirmed. We
                    do not publish claims we cannot back up, so the space stays empty until the
                    firm supplies them.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} style={{ width: "100%", display: "grid", gap: 20 }}>
              <Photo
                src={IMAGES.aboutWorkspace.src}
                alt={IMAGES.aboutWorkspace.alt}
                ratio="4/5"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <Photo
                src={IMAGES.clientRelationship.src}
                alt={IMAGES.clientRelationship.alt}
                ratio="4/3"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commitments as oversized numbered rows, not a card grid. */}
      <section className="section section--alt" aria-labelledby="commit-h">
        <div className="container">
          <div style={{ borderTop: "2px solid var(--ink-900)", paddingTop: 18, marginBottom: 28 }}>
            <p className="meta meta--accent">What guides the work</p>
          </div>
          <Reveal>
            <h2 id="commit-h" className="display" style={{ marginBottom: "clamp(24px, 3vw, 44px)" }}>
              Four commitments.
            </h2>
          </Reveal>

          <Stagger step={0.06}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--border)" }}>
              {COMMITMENTS.map(([title, body], i) => (
                <StaggerItem
                  as="li"
                  key={title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 64px) minmax(0, 1fr) minmax(0, 1.4fr)",
                    gap: "clamp(14px, 3vw, 44px)",
                    alignItems: "baseline",
                    padding: "clamp(18px, 2.4vw, 30px) 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="num"
                    style={{ fontSize: "var(--fs-meta)", letterSpacing: "var(--ls-meta)", color: "var(--accent-ink)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(1.375rem, 2.6vw, 2rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      color: "var(--ink-900)",
                    }}
                  >
                    {title}
                  </span>
                  <span className="prose" style={{ fontSize: "var(--fs-sm)" }}>
                    {body}
                  </span>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>

          <Reveal delay={0.1}>
            <div className="row" style={{ marginTop: "clamp(28px, 3.4vw, 44px)" }}>
              <Button href="/services" iconRight={<Icon name="arrow-right" size={17} />}>
                Explore Our Services
              </Button>
              <Button href={BIZ.tel} variant="outline" iconLeft={<Icon name="phone" size={16} />}>
                {BIZ.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <LocalSection />
      <Proof />
      <FinalCta />
    </>
  );
}
