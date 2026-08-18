import type { CSSProperties, ReactNode } from "react";

type Tone = "accent" | "muted" | "inverse";

const colors: Record<Tone, string> = {
  accent: "var(--text-accent)",
  muted: "var(--text-faint)",
  inverse: "var(--text-inverse-muted)",
};

export interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  /** Adds the 24px leading hairline. */
  rule?: boolean;
  style?: CSSProperties;
}

export function Eyebrow({ children, tone = "accent", rule, style }: EyebrowProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        font: "var(--text-style-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: colors[tone],
        ...style,
      }}
    >
      {rule ? (
        <span
          aria-hidden="true"
          style={{ width: 24, height: 1, background: "currentColor", opacity: 0.5 }}
        />
      ) : null}
      {children}
    </span>
  );
}
