import type { CSSProperties, ReactNode } from "react";

export interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  note?: string;
  tone?: "default" | "inverse";
  style?: CSSProperties;
}

export function ContactRow({
  icon,
  label,
  value,
  href,
  note,
  tone = "default",
  style,
}: ContactRowProps) {
  const inverse = tone === "inverse";
  const valueStyle: CSSProperties = {
    fontSize: "var(--fs-body)",
    color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
    textDecoration: "none",
    lineHeight: "var(--lh-snug)",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "38px 1fr",
        gap: "var(--space-4)",
        alignItems: "start",
        ...style,
      }}
    >
      <span
        style={{
          width: 38,
          height: 38,
          borderRadius: "var(--radius-sm)",
          display: "grid",
          placeItems: "center",
          background: inverse ? "rgba(255,255,255,.06)" : "var(--ivory-200)",
          border: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-soft)"}`,
          color: inverse ? "var(--brass-400)" : "var(--brass-700)",
        }}
      >
        {icon}
      </span>
      <span style={{ display: "grid", gap: 3 }}>
        <span
          style={{
            font: "var(--text-style-eyebrow)",
            letterSpacing: "var(--ls-eyebrow)",
            textTransform: "uppercase",
            color: inverse ? "var(--text-inverse-muted)" : "var(--text-faint)",
          }}
        >
          {label}
        </span>
        {href ? (
          <a href={href} style={valueStyle}>
            {value}
          </a>
        ) : (
          <span style={valueStyle}>{value}</span>
        )}
        {note ? (
          <span
            style={{
              fontSize: "var(--fs-caption)",
              color: inverse ? "var(--text-inverse-muted)" : "var(--text-faint)",
            }}
          >
            {note}
          </span>
        ) : null}
      </span>
    </div>
  );
}
