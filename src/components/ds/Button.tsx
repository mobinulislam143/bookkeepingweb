"use client";

import Link from "next/link";
import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, CSSProperties> = {
  sm: { padding: "8px 14px", fontSize: "0.875rem", gap: 6 },
  md: { padding: "12px 20px", fontSize: "0.9375rem", gap: 8 },
  lg: { padding: "16px 28px", fontSize: "1.0625rem", gap: 10 },
};

const variants: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--graphite-900)",
    color: "var(--ivory-100)",
    border: "1px solid var(--graphite-900)",
  },
  accent: {
    background: "var(--brass-600)",
    color: "#fff",
    border: "1px solid var(--brass-600)",
  },
  secondary: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid transparent",
  },
  link: {
    background: "transparent",
    color: "var(--text-accent)",
    border: "1px solid transparent",
    padding: 0,
  },
};

const hovers: Record<Variant, CSSProperties> = {
  primary: { background: "var(--graphite-700)", borderColor: "var(--graphite-700)" },
  accent: { background: "var(--brass-700)", borderColor: "var(--brass-700)" },
  secondary: { background: "var(--white)", borderColor: "var(--graphite-900)" },
  ghost: { background: "var(--ivory-200)" },
  link: { color: "var(--graphite-900)" },
};

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  /** Renders an anchor. Internal paths route through next/link. */
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  className,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const base: CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-medium)",
    letterSpacing: "-0.005em",
    lineHeight: 1.1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    transform: press
      ? "scale(var(--press-scale))"
      : hover && !disabled
        ? "translateY(var(--lift-hover))"
        : "none",
    boxShadow:
      hover && !disabled && variant !== "link" && variant !== "ghost"
        ? "var(--shadow-md)"
        : "none",
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style,
  };
  if (variant === "link") base.padding = 0;

  const interaction = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
  };

  const inner = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (href) {
    const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
    if (external) {
      return (
        <a href={href} onClick={onClick} style={base} className={className} {...interaction} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} style={base} className={className} {...interaction} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      style={base}
      className={className}
      {...interaction}
      {...rest}
    >
      {inner}
    </button>
  );
}
