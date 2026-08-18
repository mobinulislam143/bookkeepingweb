"use client";

import { useEffect } from "react";
import { Button, Eyebrow, Icon } from "@/components/ds";
import { Section } from "@/components/site/Section";
import { BIZ } from "@/lib/business";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section tone="ivory" pad="clamp(72px,12vw,160px)" narrow>
      <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
        <Eyebrow rule>Something went wrong</Eyebrow>
        <h1>This page didn’t load.</h1>
        <p
          style={{
            fontSize: "var(--fs-body-lg)",
            color: "var(--text-muted)",
            lineHeight: "var(--lh-body)",
            maxWidth: "var(--measure-lede)",
          }}
        >
          Try again in a moment. If it keeps happening, call the office — we can take your details
          over the phone.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: "var(--space-3)" }}>
          <Button variant="accent" size="lg" onClick={reset}>
            Try again
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
