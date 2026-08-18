import type { CSSProperties } from "react";

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  /** Hides the trailing connector on the final step. */
  last?: boolean;
  style?: CSSProperties;
}

export function ProcessStep({ number, title, description, last, style }: ProcessStepProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: "var(--space-5)",
        paddingBottom: last ? 0 : "var(--space-6)",
        position: "relative",
        ...style,
      }}
    >
      <div style={{ display: "grid", justifyItems: "center", gap: 10 }}>
        <span
          className="ds-mono-num"
          style={{
            width: 46,
            height: 46,
            borderRadius: 999,
            display: "grid",
            placeItems: "center",
            border: "1px solid var(--brass-200)",
            background: "var(--brass-100)",
            color: "var(--brass-700)",
            fontSize: "var(--fs-body-sm)",
          }}
        >
          {number}
        </span>
        {!last ? (
          <span
            aria-hidden="true"
            style={{
              width: 1,
              flex: 1,
              minHeight: 40,
              background: "linear-gradient(var(--brass-200), var(--border-soft))",
            }}
          />
        ) : null}
      </div>
      <div style={{ display: "grid", gap: 7, paddingTop: 8, alignContent: "start" }}>
        <h3 style={{ fontSize: "var(--fs-heading-3)" }}>{title}</h3>
        <p
          style={{
            fontSize: "var(--fs-body-sm)",
            lineHeight: "var(--lh-body)",
            color: "var(--text-muted)",
            maxWidth: "var(--measure-lede)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
