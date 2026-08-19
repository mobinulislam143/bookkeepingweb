import type { Metadata } from "next";
import { Accordion, Button, Icon, Reveal, type AccordionItem } from "@/components/ui";
import { FinalCta } from "@/components/sections/Shared";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "General answers about our accounting, bookkeeping, tax, reporting and advisory services, how engagements are scoped, and how to get started.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ — ${BIZ.name}`,
    description: "General answers about our services, scope and how to get started.",
    url: "/faq",
  },
};

const GROUPS: { no: string; title: string; id: string; items: AccordionItem[] }[] = [
  {
    no: "01",
    title: "Services",
    id: "services",
    items: [
      {
        q: "What accounting services do you provide?",
        a: "We provide accounting, bookkeeping, financial reporting, tax support, financial consulting, and business advisory services tailored to each client’s needs.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Yes. Our services can be structured around the needs of small businesses, growing companies, entrepreneurs, and established organizations.",
      },
      {
        q: "Do you offer bookkeeping services?",
        a: "Yes. Bookkeeping can be part of a broader accounting solution or provided as a standalone service.",
      },
      {
        q: "Can you help with financial planning?",
        a: "We provide practical financial guidance designed to help businesses understand their financial position and make informed decisions.",
      },
    ],
  },
  {
    no: "02",
    title: "Tax and reporting",
    id: "tax",
    items: [
      {
        q: "What does tax support cover?",
        a: "Preparation and filing built on records that are already accurate, with a specific checklist of what to gather. It covers business and individual filings, including situations with self-employment or multiple income sources.",
      },
      {
        q: "What does a monthly financial report contain?",
        a: "At minimum: what came in, what went out, how the period compares to the last one, and anything unusual enough to raise. The exact format is agreed with you at the start.",
      },
      {
        q: "What documents will I need?",
        a: "It depends on your situation, and we send a specific checklist before you start gathering. As a starting point: last year’s return, income documents such as W-2s or 1099s, and records of business expenses if you have them.",
      },
      {
        q: "Can you tell me what my refund will be?",
        a: "Not before the information is complete, and we do not estimate outcomes to win the work. Once your documents are in, the numbers are what they are.",
      },
    ],
  },
  {
    no: "03",
    title: "Working together",
    id: "working",
    items: [
      {
        q: "How do I get started?",
        a: "Start with a conversation about your business and financial needs. We’ll help determine which services make the most sense for you.",
      },
      {
        q: "What should I prepare before a consultation?",
        a: "Whatever you already have: recent bank or card statements, income documents, last year’s filing if applicable, and a rough sense of your expenses. If you are unsure what matters, that is a normal starting point.",
      },
      {
        q: "How is the engagement scoped?",
        a: "We confirm what we will handle, what we need from you, and when — before any work begins. The scope is written down rather than assumed.",
      },
    ],
  },
  {
    no: "04",
    title: "Scope",
    id: "scope",
    items: [
      {
        q: "What is outside your scope?",
        a: "We do not advertise credentials, representation, or specialized services that have not been confirmed. If your situation calls for something beyond accounting, reporting, tax support and advisory, we will tell you directly.",
      },
      {
        q: "Do you meet in person?",
        a: "Yes, at the office on Midland Parkway in Jamaica. Plenty of clients handle everything by phone and email instead — both work.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="section section--tight" aria-labelledby="faq-h">
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
                marginBottom: "clamp(26px, 3.4vw, 44px)",
              }}
            >
              <p className="meta meta--accent">Frequently asked</p>
              <p className="meta">Services · Scope · Getting started</p>
            </div>
          </Reveal>

          <div className="split split--wide-left split--top" style={{ alignItems: "end" }}>
            <Reveal>
              <h1 id="faq-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.4vw, 5.25rem)" }}>
                Questions people
                <br />
                actually ask
                <span style={{ color: "var(--accent-ink)" }}>.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
General answers about how we work and what the services cover. Anything specific
                to your business is a conversation, not a web page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Index on the left, answers on the right. */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container faq-layout">
          <aside className="faq-aside">
            <nav aria-label="Question groups" style={{ display: "grid", gap: 2 }}>
              {GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 12,
                    alignItems: "baseline",
                    padding: "11px 0",
                    borderTop: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="num"
                    style={{ fontSize: "var(--fs-meta)", letterSpacing: "0.1em", color: "var(--accent-ink)" }}
                  >
                    {g.no}
                  </span>
                  <span style={{ fontSize: "var(--fs-body)" }}>{g.title}</span>
                </a>
              ))}
            </nav>

            <div className="card card--tint" style={{ marginTop: 28, display: "grid", gap: 14 }}>
              <p className="meta" style={{ color: "var(--accent-ink)" }}>
                Still not answered?
              </p>
              <p style={{ fontSize: "var(--fs-sm)", color: "var(--ink-800)" }}>
                A short answer beats guessing. Call the office or send it through the form.
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                <Button href={BIZ.tel} size="sm" iconLeft={<Icon name="phone" size={15} />}>
                  {BIZ.phone}
                </Button>
                <Button href="/contact" variant="outline" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </aside>

          <div style={{ display: "grid", gap: "clamp(36px, 5vw, 64px)", minWidth: 0 }}>
            {GROUPS.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} style={{ scrollMarginTop: 100 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    marginBottom: 8,
                  }}
                >
                  <span
                    className="num"
                    style={{ fontSize: "var(--fs-meta)", letterSpacing: "var(--ls-meta)", color: "var(--accent-ink)" }}
                  >
                    {g.no}
                  </span>
                  <h2 id={`${g.id}-h`} style={{ fontSize: "var(--fs-h3)" }}>
                    {g.title}
                  </h2>
                </div>
                <Accordion items={g.items} defaultOpen={0} />
              </section>
            ))}

            <p className="meta" style={{ textTransform: "none", letterSpacing: "0.01em", lineHeight: 1.65 }}>
              These answers are general information about our services, not tax or legal advice.
              Your circumstances may change what applies.
            </p>
          </div>
        </div>
      </section>

      <FinalCta title="Still have a question?" lede="Call, or send it through the form. A short answer beats guessing." />
    </>
  );
}
