import type { CSSProperties, ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  level?: "h1" | "h2" | "h3";
  maxWidth?: string;
  style?: CSSProperties;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
  level = "h2",
  maxWidth,
  style,
}: SectionHeadingProps) {
  const H = level;
  const inverse = tone === "inverse";
  return (
    <header
      style={{
        display: "grid",
        gap: "var(--space-4)",
        justifyItems: align === "center" ? "center" : "start",
        textAlign: align,
        maxWidth: maxWidth || (align === "center" ? "var(--container-narrow)" : undefined),
        marginInline: align === "center" ? "auto" : undefined,
        ...style,
      }}
    >
      {eyebrow ? (
        <Eyebrow rule={align !== "center"} tone={inverse ? "inverse" : "accent"}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <H
        style={{
          margin: 0,
          fontSize: "var(--fs-heading-1)",
          color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
          letterSpacing: "var(--ls-heading)",
          lineHeight: "var(--lh-heading)",
        }}
      >
        {title}
      </H>
      {lede ? (
        <p
          style={{
            fontSize: "var(--fs-body-lg)",
            lineHeight: "var(--lh-body)",
            color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
            maxWidth: "var(--measure-lede)",
          }}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
