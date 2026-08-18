import { Button, Eyebrow, Icon, Reveal } from "@/components/ds";
import { BIZ } from "@/lib/business";
import { Section } from "./Section";

/** The single graphite band each page is allowed. */
export function CTASection({
  title = "Let's get your books in order.",
  lede = "Tell us where things stand. We'll tell you what it takes to get organized — no obligation.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <Section tone="graphite">
      <div style={{ display: "grid", gap: "var(--space-6)", justifyItems: "center", textAlign: "center" }}>
        <Reveal>
          <Eyebrow tone="inverse">Next step</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h2
            style={{
              color: "var(--ivory-100)",
              fontSize: "var(--fs-display-2)",
              letterSpacing: "var(--ls-display)",
              lineHeight: "var(--lh-display)",
              maxWidth: "18ch",
            }}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              color: "var(--text-inverse-muted)",
              fontSize: "var(--fs-body-lg)",
              maxWidth: "46ch",
              lineHeight: "var(--lh-body)",
            }}
          >
            {lede}
          </p>
        </Reveal>
        <Reveal
          delay={210}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
        >
          <Button variant="accent" size="lg" href="/contact">
            Schedule a Consultation
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={BIZ.tel}
            iconLeft={<Icon name="phone" size={17} />}
            style={{ color: "var(--ivory-100)", borderColor: "var(--border-inverse)" }}
          >
            Call {BIZ.phone}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
