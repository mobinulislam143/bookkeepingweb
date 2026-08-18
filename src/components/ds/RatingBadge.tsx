import type { CSSProperties } from "react";

export interface RatingBadgeProps {
  rating?: number;
  reviewCount?: number;
  source?: string;
  tone?: "default" | "inverse";
  style?: CSSProperties;
}

/**
 * Rating and review count only — no quoted review text is ever fabricated.
 * The star is the single hand-drawn path in the system (Lucide's star cannot
 * be half-filled reliably).
 */
export function RatingBadge({
  rating = 5.0,
  reviewCount = 2,
  source = "Google",
  tone = "default",
  style,
}: RatingBadgeProps) {
  const inverse = tone === "inverse";
  const full = Math.floor(rating);
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "8px 14px 8px 12px",
        borderRadius: "var(--radius-pill)",
        background: inverse ? "rgba(255,255,255,.06)" : "var(--white)",
        border: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-hairline)"}`,
        boxShadow: inverse ? "none" : "var(--shadow-xs)",
        ...style,
      }}
    >
      <span style={{ display: "inline-flex", gap: 2 }} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill={i < full ? "var(--brass-500)" : "none"}
            stroke="var(--brass-500)"
            strokeWidth="1.6"
          >
            <polygon points="12 2 15.09 8.5 22 9.3 17 14.1 18.2 21 12 17.6 5.8 21 7 14.1 2 9.3 8.91 8.5 12 2" />
          </svg>
        ))}
      </span>
      <span
        className="ds-mono-num"
        style={{
          fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-medium)",
          color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
        }}
      >
        {rating.toFixed(1)}
      </span>
      <span
        aria-hidden="true"
        style={{
          width: 1,
          height: 14,
          background: inverse ? "var(--border-inverse)" : "var(--border-hairline)",
        }}
      />
      <span
        style={{
          fontSize: "var(--fs-caption)",
          color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
        }}
      >
        {reviewCount} {source} review{reviewCount === 1 ? "" : "s"}
      </span>
    </div>
  );
}
