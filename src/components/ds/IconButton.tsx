"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "secondary" | "ghost" | "inverse";

const sizes: Record<Size, number> = { sm: 32, md: 40, lg: 48 };

const tones: Record<Variant, CSSProperties> = {
  secondary: {
    background: "var(--white)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-hairline)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent",
  },
  inverse: {
    background: "rgba(255,255,255,.08)",
    color: "var(--ivory-100)",
    border: "1px solid var(--border-inverse)",
  },
};

export interface IconButtonProps {
  icon: ReactNode;
  /** Required — this is the one place an icon carries meaning on its own. */
  label: string;
  size?: Size;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  expanded?: boolean;
  controls?: string;
  style?: CSSProperties;
  className?: string;
}

export function IconButton({
  icon,
  label,
  size = "md",
  variant = "secondary",
  onClick,
  disabled,
  expanded,
  controls,
  style,
  className,
}: IconButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: sizes[size],
        height: sizes[size],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition:
          "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
        transform: hover && !disabled ? "translateY(var(--lift-hover))" : "none",
        ...tones[variant],
        ...(hover && !disabled && variant === "secondary"
          ? { borderColor: "var(--border-strong)" }
          : null),
        ...(hover && !disabled && variant === "ghost" ? { background: "var(--ivory-200)" } : null),
        ...style,
      }}
    >
      {icon}
    </button>
  );
}
