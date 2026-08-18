import type { CSSProperties, ReactNode } from "react";

type Tone = "ivory" | "white" | "sunken" | "graphite";

const tones: Record<Tone, CSSProperties> = {
  ivory: { background: "var(--ivory-100)" },
  white: {
    background: "var(--white)",
    borderTop: "1px solid var(--border-hairline)",
    borderBottom: "1px solid var(--border-hairline)",
  },
  sunken: { background: "var(--ivory-200)" },
  graphite: { background: "var(--graphite-900)", color: "var(--text-inverse-muted)" },
};

export function Container({
  narrow,
  children,
  style,
  className,
}: {
  narrow?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={narrow ? `ds-container-narrow ${className ?? ""}` : `ds-container ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

export function Section({
  tone = "ivory",
  narrow,
  pad = "var(--section-y)",
  id,
  labelledBy,
  children,
  style,
}: {
  tone?: Tone;
  narrow?: boolean;
  pad?: string;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      style={{ paddingBlock: pad, ...tones[tone], ...style }}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
