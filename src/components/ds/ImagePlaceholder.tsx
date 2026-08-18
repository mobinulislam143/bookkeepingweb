import type { CSSProperties } from "react";

export interface ImagePlaceholderProps {
  ratio?: string;
  label?: string;
  note?: string;
  alt?: string;
  tone?: "ivory" | "graphite";
  radius?: string;
  style?: CSSProperties;
}

const tones: Record<"ivory" | "graphite", CSSProperties> = {
  ivory: {
    background: "var(--surface-placeholder)",
    color: "var(--gray-600)",
    border: "1px solid var(--border-soft)",
  },
  graphite: {
    background: "var(--graphite-800)",
    color: "var(--text-inverse-muted)",
    border: "1px solid var(--border-inverse)",
  },
};

/**
 * Used only where no supplied photograph is appropriate. Carries the final
 * aspect ratio and art direction so the slot never looks broken, and states
 * plainly that the image is still to come.
 */
export function ImagePlaceholder({
  ratio = "4/3",
  label = "Photo to be supplied",
  note,
  alt = "",
  tone = "ivory",
  radius = "var(--radius-lg)",
  style,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt || label}
      style={{
        aspectRatio: ratio,
        width: "100%",
        borderRadius: radius,
        display: "grid",
        placeContent: "center",
        gap: 6,
        textAlign: "center",
        padding: "var(--space-5)",
        overflow: "hidden",
        ...tones[tone],
        ...style,
      }}
    >
      <span
        style={{
          font: "var(--text-style-eyebrow)",
          letterSpacing: "var(--ls-eyebrow)",
          textTransform: "uppercase",
          opacity: 0.8,
        }}
      >
        {label}
      </span>
      {note ? (
        <span style={{ fontSize: "var(--fs-caption)", opacity: 0.75, maxWidth: "32ch" }}>
          {note}
        </span>
      ) : null}
    </div>
  );
}
