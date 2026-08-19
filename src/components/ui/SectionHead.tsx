import type { ReactNode } from "react";
import { Reveal } from "./Motion";

export interface SectionHeadProps {
  /** Oversized index, e.g. "03". Rendered flush and quiet. */
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Buttons or links pinned to the opposite end on wide screens. */
  aside?: ReactNode;
  invert?: boolean;
  align?: "start" | "end";
}

/**
 * The section opener. It deliberately does not centre anything: the whole
 * system is set flush left against a horizontal rule.
 */
export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  aside,
  invert = false,
  align = "start",
}: SectionHeadProps) {
  return (
    <div style={{ display: "grid", gap: "clamp(20px, 2.4vw, 32px)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          borderTop: `2px solid ${invert ? "rgba(255,255,255,.32)" : "var(--ink-900)"}`,
          paddingTop: 14,
        }}
      >
        {eyebrow ? (
          <Reveal as="span" y={10}>
            <p className={`meta ${invert ? "meta--invert" : "meta--accent"}`}>{eyebrow}</p>
          </Reveal>
        ) : (
          <span />
        )}
        {index ? (
          <span
            className="num"
            aria-hidden="true"
            style={{
              fontSize: "var(--fs-meta)",
              letterSpacing: "var(--ls-meta)",
              color: invert ? "rgba(255,255,255,.6)" : "var(--text-faint)",
            }}
          >
            {index}
          </span>
        ) : null}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: aside ? "minmax(0,1fr) auto" : "minmax(0,1fr)",
          gap: "clamp(20px, 3vw, 48px)",
          alignItems: align === "end" ? "end" : "start",
        }}
      >
        <div style={{ display: "grid", gap: "clamp(14px, 1.6vw, 22px)" }}>
          <Reveal>
            <h2 className="display">{title}</h2>
          </Reveal>
          {lede ? (
            <Reveal delay={0.06}>
              <p className="lede" style={invert ? { color: "var(--text-invert-muted)" } : undefined}>
                {lede}
              </p>
            </Reveal>
          ) : null}
        </div>
        {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
      </div>
    </div>
  );
}
