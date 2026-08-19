import type { Metadata } from "next";
import { Accordion, Button, Icon, Photo, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { ClarityRail } from "@/components/sections/ClarityRail";
import { FinalCta } from "@/components/sections/Shared";
import { LedgerBoard } from "@/components/viz/LedgerBoard";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights — Financial Reporting, Consulting and Business Advisory",
  description:
    "Financial reporting, consulting and business advisory services: reports you can read, performance you can evaluate, and guidance you can act on.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: `Insights — ${BIZ.name}`,
    description:
      "Financial reporting, consulting and business advisory: turning accurate records into decisions.",
    url: "/insights",
  },
};

const OUTPUTS: { title: string; body: string; items: string[] }[] = [
  {
    title: "Financial Reporting",
    body: "Accurate, easy-to-understand reports that turn your numbers into useful business insights — produced on a schedule, not on request.",
    items: [
      "Monthly financial statements",
      "Custom reporting built around what you actually track",
      "Reporting reviews, so the numbers get explained",
    ],
  },
  {
    title: "Financial Consulting",
    body: "Practical guidance to help you evaluate performance, identify opportunities, and make informed business decisions.",
    items: [
      "Performance review against prior periods",
      "Cash-flow visibility and timing",
      "Decision support when the question is specific",
    ],
  },
  {
    title: "Business Advisory",
    body: "Clear financial insight and strategic guidance for businesses planning growth, improving operations, or working through an important decision.",
    items: [
      "Growth and hiring scenarios",
      "Operational insight from the numbers",
      "Preparation for lenders and stakeholders",
    ],
  },
];

const FAQ = [
  {
    q: "What does a monthly report actually contain?",
    a: "At minimum: what came in, what went out, how the period compares to the last one, and anything that looks unusual enough to raise. The exact format is set with you at the start, because a report nobody reads is not reporting.",
  },
  {
    q: "Is consulting separate from accounting?",
    a: "It can be either. For clients whose records we already maintain, the analysis is built on numbers we know are current. For everyone else, we start by establishing that foundation.",
  },
  {
    q: "Can you help us prepare for a lender or investor conversation?",
    a: "We can assemble and explain the financial information those conversations require. We do not represent you in them, and we will say plainly where our scope ends.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="section section--tight" aria-labelledby="ins-h">
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 24,
                borderBottom: "2px solid var(--ink-900)",
                paddingBottom: 18,
                marginBottom: "clamp(28px, 4vw, 52px)",
              }}
            >
              <p className="meta meta--accent">Insights</p>
              <p className="meta">Reporting · Consulting · Advisory</p>
            </div>
          </Reveal>

          <div className="split split--wide-left split--top" style={{ alignItems: "end" }}>
            <Reveal>
              <h1 id="ins-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)" }}>
                Numbers are
                <br />
                the input.
                <br />
                Decisions are
                <br />
                the output.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="stack" style={{ gap: 22 }}>
                <p className="lede">
                  Accurate records are where the work starts, not where it ends. This is the part
                  of the practice concerned with what the numbers mean and what to do about them.
                </p>
                <div className="row">
                  <Button href="/contact" iconRight={<Icon name="arrow-right" size={17} />}>
                    Get Started
                  </Button>
                  <Button href="/services" variant="outline">
                    All services
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Understand → Record → Report, reused from the design system. */}
      <section className="section section--alt" aria-labelledby="ins-rail-h">
        <div className="container">
          <Reveal>
            <p className="meta meta--accent" style={{ marginBottom: 14 }}>
              How insight gets produced
            </p>
            <h2 id="ins-rail-h" className="display" style={{ marginBottom: "clamp(28px, 4vw, 52px)" }}>
              Three passes over the same month.
            </h2>
          </Reveal>
          <ClarityRail />
        </div>
      </section>

      {/* What clients actually receive. */}
      <section className="section" aria-labelledby="ins-out-h">
        <div className="container">
          <Reveal>
            <p className="meta meta--accent" style={{ marginBottom: 14 }}>
              What you receive
            </p>
            <h2 id="ins-out-h" className="display" style={{ marginBottom: "clamp(28px, 4vw, 48px)" }}>
              Three services, one purpose.
            </h2>
          </Reveal>

          <Stagger step={0.06}>
            {OUTPUTS.map((o, i) => (
              <StaggerItem key={o.title}>
                <div className="stage-row">
                  <span className="num stage-row__no">{String(i + 1).padStart(2, "0")}</span>
                  <div className="stage-row__main">
                    <h3 className="stage-row__title">{o.title}</h3>
                    <p className="prose">{o.body}</p>
                  </div>
                  <ul className="stage-row__focus">
                    {o.items.map((it) => (
                      <li key={it}>
                        <Icon name="check" size={15} strokeWidth={2.6} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The records the reporting is built from. */}
      <section className="section section--warm" aria-labelledby="ins-src-h">
        <div className="container">
          <div className="split split--wide-right split--top" style={{ alignItems: "center" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">The source</p>
              </Reveal>
              <Reveal>
                <h2 id="ins-src-h" className="display">
                  Reporting is only
                  <br />
                  as good as the
                  <br />
                  records under it.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Analysis built on records that do not agree produces confident answers to the
                  wrong question. That is why the accounting and the advisory sit in the same
                  practice — the reports are drawn from records we know are current.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button
                  href="/services"
                  variant="outline"
                  iconRight={<Icon name="arrow-up-right" size={17} />}
                >
                  How the records are kept
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.08} style={{ width: "100%" }}>
              <LedgerBoard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ins-photo-h">
        <div className="container">
          <div className="split" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <Reveal style={{ width: "100%" }}>
              <Photo
                src={IMAGES.businessSupport.src}
                alt="Financial reporting reviewed on a laptop alongside supporting records"
                ratio="4/3"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </Reveal>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Questions</p>
              </Reveal>
              <Reveal>
                <h2 id="ins-photo-h" className="display" style={{ fontSize: "var(--fs-h2)" }}>
                  Before you ask.
                </h2>
              </Reveal>
              <Reveal delay={0.06} style={{ width: "100%" }}>
                <Accordion items={FAQ} defaultOpen={0} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Let’s look at what your numbers are telling you."
        lede="Reporting, analysis and guidance built on records that agree."
      />
    </>
  );
}
