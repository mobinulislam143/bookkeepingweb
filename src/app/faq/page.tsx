import type { Metadata } from "next";
import { Accordion, Card, Eyebrow, type AccordionItem } from "@/components/ds";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "General answers about bookkeeping, tax preparation, consultations, and what to bring — for clients in Jamaica, Queens and across New York.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Samadhan Bookkeeping & Tax",
    description: "General answers about bookkeeping, tax preparation, and getting started.",
    url: "/faq",
  },
};

const GROUPS: { title: string; items: AccordionItem[] }[] = [
  {
    title: "Bookkeeping",
    items: [
      {
        q: "What does bookkeeping include?",
        a: "Generally: categorizing your income and expenses, reconciling bank and card activity against your records, and producing a monthly summary. The exact scope depends on how your business operates, and we confirm it before starting.",
      },
      {
        q: "Who is bookkeeping for?",
        a: "Small business owners, freelancers, and self-employed people who need a reliable record of their activity — especially anyone currently tracking things in a spreadsheet, an inbox, and a drawer at the same time.",
      },
      {
        q: "When should I organize my books?",
        a: "Sooner is easier. Monthly upkeep takes less time than annual reconstruction, and catching a discrepancy in March is simpler than finding it the following year.",
      },
    ],
  },
  {
    title: "Tax preparation",
    items: [
      {
        q: "Do you help individuals with taxes?",
        a: "Yes. Individual tax preparation is part of what we do, including returns with self-employment or multiple income sources.",
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
    title: "Working together",
    items: [
      {
        q: "What should I prepare before a consultation?",
        a: "Whatever you already have: recent bank or card statements, income documents, last year’s return if applicable, and a rough sense of your expenses. If you are unsure what matters, that is a normal starting point.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Yes — small businesses and new business owners are a large part of the practice, alongside individual clients.",
      },
      {
        q: "How do we get started?",
        a: "Call the office, or send the consultation form on the contact page. The first step is a short conversation about where your records stand and what is coming up.",
      },
    ],
  },
  {
    title: "Scope",
    items: [
      {
        q: "What is outside your scope?",
        a: "We do not advertise credentials, representation, or specialized services that have not been confirmed. If your situation calls for something beyond preparation and record-keeping, we will tell you directly.",
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
      <PageHero
        eyebrow="FAQ"
        title="Questions people actually ask"
        lede="General answers about bookkeeping and tax preparation. Anything specific to your situation is a conversation, not a web page."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "See services", href: "/services" }}
      />

      <Section tone="white" narrow>
        <div style={{ display: "grid", gap: "var(--space-8)" }}>
          {GROUPS.map((g, i) => (
            <div key={g.title} style={{ display: "grid", gap: "var(--space-5)" }}>
              <h2 style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit" }}>
                <Eyebrow rule>{g.title}</Eyebrow>
              </h2>
              <Accordion items={g.items} defaultOpen={i === 0 ? 0 : -1} />
            </div>
          ))}

          <Card tone="ivory" padding="md">
            <p
              style={{
                fontSize: "var(--fs-body-sm)",
                color: "var(--text-muted)",
                lineHeight: "var(--lh-body)",
              }}
            >
              These answers are general information about our services, not tax or legal advice. Your
              circumstances may change what applies.
            </p>
          </Card>
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        lede="Call, or send it through the form. A short answer beats guessing."
      />
    </>
  );
}
