import type { Metadata } from "next";
import { Card, Eyebrow } from "@/components/ds";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BIZ.name} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section tone="ivory" narrow pad="clamp(64px,9vw,120px)">
      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Eyebrow rule>Legal</Eyebrow>
        <h1 style={{ fontSize: "var(--fs-heading-1)" }}>Privacy Policy</h1>

        <Card tone="paper" padding="md">
          <p
            style={{
              fontSize: "var(--fs-body-sm)",
              color: "var(--text-muted)",
              lineHeight: "var(--lh-body)",
            }}
          >
            Placeholder — this policy has not been drafted or reviewed yet. Replace this page with a
            policy prepared for {BIZ.name} before the site goes live. Nothing here should be treated
            as a binding statement.
          </p>
        </Card>

        <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: "var(--measure-prose)" }}>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
            The consultation form on this site collects the name, email address, phone number,
            selected service, and message you choose to provide. That information is used to respond
            to your request.
          </p>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
            To ask a question about information you have sent, call {BIZ.phone} or write to{" "}
            {BIZ.street}, {BIZ.cityLine}.
          </p>
        </div>
      </div>
    </Section>
  );
}
