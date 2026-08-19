import type { Metadata } from "next";
import Image from "next/image";
import { Accordion, Button, Icon, Photo, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { FinalCta } from "@/components/sections/Shared";
import { ReconcileDiagram } from "@/components/viz/ReconcileDiagram";
import { BIZ, SERVICES } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bookkeeping Services — Accurate, Up-to-Date Records",
  description:
    "Reliable bookkeeping that keeps transactions, records and financial activity organized and up to date — as a standalone service or part of a broader accounting engagement.",
  alternates: { canonical: "/bookkeeping" },
  openGraph: {
    title: `Bookkeeping Services — ${BIZ.name}`,
    description:
      "Reliable bookkeeping that keeps records organized and up to date, on its own or inside a broader accounting engagement.",
    url: "/bookkeeping",
  },
};

const INCLUDED: { title: string; body: string; wide?: boolean; tone?: "tint" | "gold" }[] = [
  {
    title: "Transaction categorization",
    body: "Income and expenses sorted the same way every month, so month-to-month comparisons actually mean something.",
    wide: true,
  },
  {
    title: "Account reconciliation",
    body: "Bank and card activity matched to your records until the balances agree.",
    tone: "tint",
  },
  {
    title: "Monthly summaries",
    body: "A short read on what came in, what went out, and what changed.",
  },
  {
    title: "Catch-up and cleanup",
    body: "Past months brought current before they turn into a bigger project.",
  },
  {
    title: "Records ready for reporting and tax",
    body: "The documents your reporting and filings are built from, gathered as the year goes rather than reconstructed at a deadline.",
    wide: true,
    tone: "gold",
  },
];

const FAQ = [
  {
    q: "How often would we work together?",
    a: "Most bookkeeping work runs monthly, so records never get more than a few weeks out of date. Quarterly or one-time cleanup arrangements are also possible.",
  },
  {
    q: "What do you need from me to start?",
    a: "Usually access to your bank and card statements, any invoices or receipts you keep, and a short conversation about how your business operates. We will give you a specific list before you start gathering anything.",
  },
  {
    q: "My books are months behind. Is that a problem?",
    a: "It is common. We start by getting the past periods current, then keep them that way going forward.",
  },
];

export default function BookkeepingPage() {
  return (
    <>
      {/* Opening: the number is the page's identity, and the photograph runs to the edge. */}
      <section aria-labelledby="bk-h" style={{ paddingTop: "clamp(32px, 4vw, 60px)" }}>
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                borderBottom: "1px solid var(--border)",
                paddingBottom: 14,
              }}
            >
              <p className="meta meta--accent">Bookkeeping</p>
              <p className="meta">Standalone, or part of a broader engagement</p>
            </div>
          </Reveal>
        </div>

        <div
          className="container"
          style={{ paddingTop: "clamp(28px, 4vw, 56px)", paddingBottom: "clamp(36px, 5vw, 72px)" }}
        >
          <div className="split split--wide-left" style={{ alignItems: "center" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="section-no section-no--accent">
                  {SERVICES.find((s) => s.id === "bookkeeping")?.no ?? "02"}
                </p>
              </Reveal>
              <Reveal>
                <h1 id="bk-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.4vw, 5.5rem)" }}>
                  Records that
                  <br />
                  stay current
                  <span style={{ color: "var(--accent-ink)" }}>.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="lede">
                  Reliable bookkeeping that keeps transactions, records, and financial activity
                  organized and up to date — so every report built on top of it starts from
                  something accurate.
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
              <Photo
                src={IMAGES.bookkeepingDetail.src}
                alt={IMAGES.bookkeepingDetail.alt}
                ratio="4/5"
                position="center 50%"
                sizes="(max-width: 900px) 100vw, 44vw"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="band__figure">
          <Image
            src={IMAGES.bookkeepingHero.src}
            alt={IMAGES.bookkeepingHero.alt}
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
      </div>

      {/* The one idea the service rests on. */}
      <section className="section section--alt" aria-labelledby="rec-h">
        <div className="container">
          <div className="split split--wide-right split--top" style={{ alignItems: "center" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Reconciliation</p>
              </Reveal>
              <Reveal>
                <h2 id="rec-h" className="display">
                  Two sides,
                  <br />
                  one answer.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Reconciliation is the part that makes everything else trustworthy: every line the
                  bank shows is matched against a line in your records, until the two agree. When
                  they do not, that is a question worth asking early — a duplicate, a missing
                  receipt, a payment recorded twice.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="prose" style={{ fontSize: "var(--fs-sm)" }}>
                  Catching a discrepancy in March is simpler than finding it the following year.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08} style={{ width: "100%" }}>
              <div className="card" style={{ padding: "clamp(20px, 3vw, 40px)" }}>
                <ReconcileDiagram />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deliberately uneven grid — the cards are not interchangeable tiles. */}
      <section className="section" aria-labelledby="inc-h">
        <div className="container">
          <div
            style={{
              borderTop: "2px solid var(--ink-900)",
              paddingTop: 18,
              marginBottom: "clamp(24px, 3vw, 40px)",
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              alignItems: "baseline",
            }}
          >
            <p className="meta meta--accent">What is included</p>
            <p className="meta">05 items</p>
          </div>

          <Reveal>
            <h2 id="inc-h" className="display" style={{ marginBottom: "clamp(28px, 3.4vw, 48px)" }}>
              The monthly work.
            </h2>
          </Reveal>

          <Stagger
            step={0.06}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {INCLUDED.map((item) => (
              <StaggerItem
                key={item.title}
                className={`card card--lift${item.tone ? ` card--${item.tone}` : ""}`}
                style={item.wide ? { gridColumn: "span 2", minWidth: 0 } : undefined}
              >
                <div style={{ display: "grid", gap: 10 }}>
                  <h3 style={{ fontSize: "var(--fs-h4)" }}>{item.title}</h3>
                  <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it is for, over the working photograph. */}
      <section className="section section--alt" aria-labelledby="bk-for-h">
        <div className="container">
          <div className="split" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <Reveal style={{ width: "100%" }}>
              <Photo
                src={IMAGES.bookkeepingPaperwork.src}
                alt={IMAGES.bookkeepingPaperwork.alt}
                ratio="1/1"
                position="center 45%"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </Reveal>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Who it is for</p>
              </Reveal>
              <Reveal>
                <h2 id="bk-for-h" className="display">
                  Where most
                  <br />
                  engagements begin.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <ul className="checks">
                  {[
                    "Businesses keeping their own records and falling behind",
                    "Companies with personal and business activity still mixed together",
                    "New businesses setting up record-keeping for the first time",
                    "Firms whose reporting is only as current as the last cleanup",
                  ].map((c) => (
                    <li key={c}>
                      <Icon name="check" size={17} strokeWidth={2.4} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="bk-faq-h">
        <div className="container-tight">
          <Reveal>
            <p className="meta meta--accent" style={{ marginBottom: 14 }}>
              Questions
            </p>
            <h2 id="bk-faq-h" className="display" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
              Before you call.
            </h2>
          </Reveal>
          <Accordion items={FAQ} defaultOpen={0} />
        </div>
      </section>

      <FinalCta
        title="Let’s get this month recorded."
        lede="Accurate records are where every useful report starts."
      />
    </>
  );
}
