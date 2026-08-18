import type { Metadata } from "next";
import { Button, Eyebrow, Icon } from "@/components/ds";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section tone="ivory" pad="clamp(72px,12vw,160px)" narrow>
      <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
        <Eyebrow rule>404</Eyebrow>
        <h1>This page isn’t here.</h1>
        <p
          style={{
            fontSize: "var(--fs-body-lg)",
            color: "var(--text-muted)",
            lineHeight: "var(--lh-body)",
            maxWidth: "var(--measure-lede)",
          }}
        >
          The link may be out of date. Start from the homepage, or call the office and we’ll point
          you to what you were looking for.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: "var(--space-3)" }}>
          <Button variant="accent" size="lg" href="/">
            Back to home
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={BIZ.tel}
            iconLeft={<Icon name="phone" size={17} />}
          >
            Call {BIZ.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
