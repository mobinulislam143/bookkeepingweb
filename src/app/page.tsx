import type { Metadata } from "next";
import Image from "next/image";
import { Accordion, Button, Icon, Photo, Reveal, SectionHead } from "@/components/ui";
import { ServicesSection, TrustBand, ValueProps, WhoWeServe } from "@/components/sections/Blocks";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCta, LocalSection, Proof } from "@/components/sections/Shared";
import { ChaosOrder } from "@/components/viz/ChaosOrder";
import { DocumentSystem } from "@/components/viz/DocumentSystem";
import { LedgerBoard } from "@/components/viz/LedgerBoard";
import { BIZ, POSITION, PROCESS } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: `${BIZ.name} — ${POSITION.seoPhrase} for Businesses`,
  description: POSITION.metaDescription,
  alternates: { canonical: "/" },
};

const FAQ = [
  {
    q: "What accounting services do you provide?",
    a: "We provide accounting, bookkeeping, financial reporting, tax support, financial consulting, and business advisory services tailored to each client’s needs.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. Our services can be structured around the needs of small businesses, growing companies, entrepreneurs, and established organizations.",
  },
  {
    q: "Can you help with financial planning?",
    a: "We provide practical financial guidance designed to help businesses understand their financial position and make informed decisions.",
  },
  {
    q: "Do you offer bookkeeping services?",
    a: "Yes. Bookkeeping can be part of a broader accounting solution or provided as a standalone service.",
  },
  {
    q: "How do I get started?",
    a: "Start with a conversation about your business and financial needs. We’ll help determine which services make the most sense for you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="container hero__grid">
          <div>
            <Reveal y={12} className="hero__eyebrow">
              <p className="meta meta--accent">{POSITION.category}</p>
              <p className="meta">{BIZ.cityLine} · Serving businesses across New York</p>
            </Reveal>

            <Reveal>
              <h1 id="hero-h" className="display">
                {POSITION.headline[0]}
                <br />
                {POSITION.headline[1]}
                <br />
                {POSITION.headline[2]}
              </h1>
            </Reveal>

            <Reveal delay={0.07}>
              <p className="lede" style={{ marginTop: "clamp(18px, 2vw, 26px)" }}>
                {POSITION.lede}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="row" style={{ marginTop: "clamp(26px, 3vw, 38px)", gap: 14 }}>
                <Button href="/contact" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                  Get Started
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p
                className="meta"
                style={{ marginTop: 20, color: "var(--accent-ink)", letterSpacing: "0.1em" }}
              >
                {POSITION.assurance}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="row"
                style={{
                  marginTop: "clamp(24px, 3vw, 38px)",
                  paddingTop: 22,
                  borderTop: "1px solid var(--border)",
                  gap: "clamp(20px, 3vw, 40px)",
                }}
              >
                <a
                  href={BIZ.tel}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--ink-900)",
                    fontSize: "var(--fs-lede)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <Icon name="phone" size={18} color="var(--accent-ink)" />
                  <span className="num">{BIZ.phone}</span>
                </a>
                <span className="meta">{BIZ.street}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} x={16} y={0} className="hero__panel">
            <DocumentSystem />
          </Reveal>
        </div>
      </section>

      <TrustBand />

      <ServicesSection index="02" />

      <WhoWeServe index="03" />

      <ValueProps index="04" />

      {/* ── 05 — accuracy, demonstrated rather than claimed ───────────────── */}
      <section className="section section--alt" aria-labelledby="records-h">
        <div className="container">
          <SectionHead
            index="05"
            eyebrow="Accuracy in practice"
            title={<span id="records-h">Records that agree with each other.</span>}
            lede="Every report a business relies on is only as good as the records underneath it. This is what putting those records in order looks like."
          />
          <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
            <LedgerBoard />
          </div>
        </div>
      </section>

      {/* ── 06 — about ───────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="about-h">
        <div className="container">
          <div className="split" style={{ gap: "clamp(36px, 5vw, 88px)" }}>
            <Reveal style={{ width: "100%" }}>
              <Photo
                src={IMAGES.aboutPortrait.src}
                alt="Accountant reviewing client financial records at the firm's office"
                ratio="4/5"
                position="center 30%"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </Reveal>

            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">06 — About the firm</p>
              </Reveal>
              <Reveal>
                <h2 id="about-h" className="display">
                  Accounting Expertise With a Business-Minded Approach
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  We believe accounting should do more than record what happened. It should help
                  you understand where your business stands, where it is going, and what decisions
                  can move it forward.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="prose">
                  Our approach combines accurate financial management with practical business
                  insight, giving clients the clarity they need to operate confidently and plan for
                  sustainable growth.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <Button
                  href="/about"
                  variant="outline"
                  iconRight={<Icon name="arrow-up-right" size={17} />}
                >
                  About the Firm
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="band__figure">
          <Image
            src={IMAGES.homeHero.src}
            alt="Financial records and reporting reviewed at a working desk"
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 38%" }}
          />
        </div>
      </div>

      {/* ── 07 — process ─────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <SectionHead
            index="07"
            eyebrow="How we work"
            title={<span id="process-h">A Simpler Approach to Your Finances</span>}
            aside={
              <Button href="/contact" iconRight={<Icon name="arrow-right" size={17} />}>
                Start With Step One
              </Button>
            }
            align="end"
          />
          <div style={{ marginTop: "clamp(32px, 4vw, 60px)" }}>
            <ProcessTimeline steps={[...PROCESS]} />
          </div>
        </div>
      </section>

      {/* ── 08 — before and after ────────────────────────────────────────── */}
      {/* <section className="section section--warm" aria-labelledby="transform-h">
        <div className="container">
          <SectionHead
            index="08"
            eyebrow="Before and after"
            title={<span id="transform-h">What changes when the records are in order.</span>}
            lede="The same documents, given somewhere to go. Scroll, and the pile becomes a record you can report from."
          />
          <div style={{ marginTop: "clamp(36px, 5vw, 72px)" }}>
            <ChaosOrder />
          </div>
        </div>
      </section> */}

      <Proof />
      <LocalSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-h">
        <div className="container-tight">
          <Reveal>
            <p className="meta meta--accent" style={{ marginBottom: 14 }}>
              Common questions
            </p>
            <h2 id="faq-h" className="display" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
              Questions we hear first.
            </h2>
          </Reveal>
          <Accordion items={FAQ} defaultOpen={0} />
          <Reveal delay={0.06}>
            <p style={{ marginTop: 28, fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
              More detail on the{" "}
              <a href="/faq" style={{ color: "var(--ink-900)", textDecoration: "underline" }}>
                full FAQ
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
