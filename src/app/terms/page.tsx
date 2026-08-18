import type { Metadata } from "next";
import { Card, Eyebrow } from "@/components/ds";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms covering use of the ${BIZ.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section tone="ivory" narrow pad="clamp(64px,9vw,120px)">
      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Eyebrow rule>Legal</Eyebrow>
        <h1 style={{ fontSize: "var(--fs-heading-1)" }}>Terms of Use</h1>

        <Card tone="paper" padding="md">
          <p
            style={{
              fontSize: "var(--fs-body-sm)",
              color: "var(--text-muted)",
              lineHeight: "var(--lh-body)",
            }}
          >
            Placeholder — these terms have not been drafted or reviewed yet. Replace this page with
            terms prepared for {BIZ.name} before the site goes live.
          </p>
        </Card>

        <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: "var(--measure-prose)" }}>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
            The content on this site describes the services offered and is general information only.
            It is not tax or legal advice, and it does not create a client relationship. Your
            circumstances may change what applies.
          </p>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
            Questions about these terms: call {BIZ.phone}.
          </p>
        </div>
      </div>
    </Section>
  );
}
