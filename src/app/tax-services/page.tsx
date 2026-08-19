import type { Metadata } from "next";
import { Accordion, Button, Icon, Photo, Reveal } from "@/components/ui";
import { FinalCta } from "@/components/sections/Shared";
import { FilingPipeline } from "@/components/viz/FilingPipeline";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tax Services — Preparation, Filing and Year-Round Readiness",
  description:
    "Professional tax support built on organized accounting records: preparation, filing, and a clear checklist of what to gather — with year-round readiness rather than a seasonal scramble.",
  alternates: { canonical: "/tax-services" },
  openGraph: {
    title: `Tax Services — ${BIZ.name}`,
    description:
      "Professional tax support built on organized accounting records, for businesses and individuals.",
    url: "/tax-services",
  },
};

const FAQ = [
  {
    q: "What should I prepare before a consultation?",
    a: "Last year’s return if you have it, income documents you have received, and a rough sense of your expenses. If you are not sure what applies, come as you are — the first conversation is partly about identifying that.",
  },
  {
    q: "What documents will I need?",
    a: "It depends on your situation, and we send a specific checklist before you start gathering. As a starting point: last year’s return, income documents such as W-2s or 1099s, and records of business expenses if you have them.",
  },
  {
    q: "Do you handle individual returns as well as business returns?",
    a: "Yes. Individual tax preparation is a core part of the practice, alongside small business work.",
  },
  {
    q: "Can you tell me what I will owe, or what my refund will be?",
    a: "Not reliably, and we will not guess. Once the information is complete, the numbers speak for themselves.",
  },
];

export default function TaxServicesPage() {
  return (
    <>
      {/* This page opens on colour — it is the one section of the practice that
          gets its own field, so the reader knows immediately they have moved. */}
      <section className="section section--tint" aria-labelledby="tax-h" style={{ paddingBlock: "clamp(48px, 6vw, 104px)" }}>
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                borderBottom: "1px solid var(--border)",
                paddingBottom: 16,
                marginBottom: "clamp(28px, 4vw, 52px)",
              }}
            >
              <p className="meta meta--accent">Tax Services</p>
              <p className="meta">Part of a broader accounting engagement</p>
            </div>
          </Reveal>

          <div className="split" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <div className="stack">
              <Reveal>
                <h1
                  id="tax-h"
                  className="mega"
                  style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)" }}
                >
                  Less confusion
                  <br />
                  at tax time
                  <span style={{ color: "var(--accent-ink)" }}>.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="lede">
                  Professional tax support designed to simplify tax responsibilities and help you
                  stay prepared throughout the year — built on records that are already accurate,
                  with a clear list of what to gather.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="row">
                  <Button href="/contact" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                    Get Started
                  </Button>
                  <Button href={BIZ.tel} variant="outline" size="lg" iconLeft={<Icon name="phone" size={17} />}>
                    {BIZ.phone}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} x={20} y={0} style={{ width: "100%" }}>
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--r-lg)",
                  padding: "clamp(12px, 1.6vw, 20px)",
                  boxShadow: "var(--shadow-4)",
                }}
              >
                <Photo
                  src={IMAGES.taxHero.src}
                  alt={IMAGES.taxHero.alt}
                  ratio="4/3"
                  position="center 55%"
                  radius="var(--r-sm)"
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    paddingTop: 14,
                  }}
                >
                  <span className="meta">Prepared from records we maintain</span>
                  <span className="tag tag--gold">Checklist first</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The pipeline. */}
      <section className="section" aria-labelledby="pipe-h">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: "clamp(24px, 3vw, 40px)",
            }}
          >
            <Reveal as="span" y={10}>
              <p className="meta meta--accent">The sequence</p>
            </Reveal>
            <p className="meta">04 stages</p>
          </div>

          <Reveal>
            <h2 id="pipe-h" className="display" style={{ marginBottom: "clamp(28px, 4vw, 56px)" }}>
              A stack of paper,
              <br />
              in four moves.
            </h2>
          </Reveal>

          <FilingPipeline />
        </div>
      </section>

      {/* Where the friction actually is. */}
      <section className="section section--alt" aria-labelledby="tax-why-h">
        <div className="container">
          <div className="split split--wide-right" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Why it gets stressful</p>
              </Reveal>
              <Reveal>
                <h2 id="tax-why-h" className="display">
                  Most tax stress is
                  <br />
                  a paperwork problem.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Filing goes smoothly when the information is complete and organized before anyone
                  starts on the return. The friction people feel at tax time is rarely the return
                  itself — it is hunting for documents and guessing what counts.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="checks">
                  {[
                    "A specific checklist, sent before you start gathering",
                    "Review of what you send, with gaps flagged rather than filed around",
                    "Individual and small business returns",
                    "Year-round bookkeeping so the next filing is a review",
                  ].map((c) => (
                    <li key={c}>
                      <Icon name="check" size={17} strokeWidth={2.4} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.08} x={20} y={0} style={{ width: "100%" }}>
              <Photo
                src={IMAGES.taxDetail.src}
                alt={IMAGES.taxDetail.alt}
                ratio="4/5"
                position="center 40%"
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scope, stated plainly rather than buried. */}
      <section className="section section--tight" aria-labelledby="scope-h">
        <div className="container">
          <Reveal>
            <div
              className="card card--gold"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, auto) minmax(0, 1fr)",
                gap: "clamp(20px, 4vw, 56px)",
                alignItems: "start",
                padding: "clamp(24px, 3.4vw, 44px)",
              }}
            >
              <h2 id="scope-h" className="meta" style={{ color: "var(--accent-ink)" }}>
                Scope
              </h2>
              <p style={{ fontSize: "var(--fs-body)", color: "var(--ink-800)", maxWidth: "68ch" }}>
                We prepare returns and organize the information behind them. We do not advertise
                credentials, representation, or specialized services that have not been confirmed,
                and we do not estimate refunds or savings to win the work. If your situation calls
                for something outside that scope, we will say so directly. Nothing on this page is
                tax or legal advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="tax-faq-h">
        <div className="container-tight">
          <Reveal>
            <p className="meta meta--accent" style={{ marginBottom: 14 }}>
              Questions
            </p>
            <h2 id="tax-faq-h" className="display" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
              Before the deadline.
            </h2>
          </Reveal>
          <Accordion items={FAQ} defaultOpen={0} />
        </div>
      </section>

      <FinalCta
        title="Get the checklist first."
        lede="Tell us your situation and we will send the specific list of what to gather."
      />
    </>
  );
}
