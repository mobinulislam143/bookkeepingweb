import type { ReactNode } from "react";
import { Button, Eyebrow, Reveal } from "@/components/ds";
import { Section } from "./Section";

export interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  meta?: ReactNode;
  aside?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  meta,
  aside,
}: PageHeroProps) {
  return (
    <Section tone="ivory" pad="clamp(48px,7vw,96px)">
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: aside ? "minmax(0,1.05fr) minmax(0,.95fr)" : "1fr",
          gap: "var(--space-8)",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: 640 }}>
          <Reveal>
            <Eyebrow rule>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h1
              style={{
                fontSize: "var(--fs-display-2)",
                letterSpacing: "var(--ls-display)",
                lineHeight: "var(--lh-display)",
              }}
            >
              {title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: "var(--lh-body)",
                color: "var(--text-muted)",
                maxWidth: "var(--measure-lede)",
              }}
            >
              {lede}
            </p>
          </Reveal>
          {primary || secondary ? (
            <Reveal
              delay={210}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}
            >
              {primary ? (
                <Button variant="accent" size="lg" href={primary.href}>
                  {primary.label}
                </Button>
              ) : null}
              {secondary ? (
                <Button variant="secondary" size="lg" href={secondary.href}>
                  {secondary.label}
                </Button>
              ) : null}
            </Reveal>
          ) : null}
          {meta ? <Reveal delay={280}>{meta}</Reveal> : null}
        </div>
        {aside ? <Reveal delay={140}>{aside}</Reveal> : null}
      </div>
    </Section>
  );
}
