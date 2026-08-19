import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type Variant = "primary" | "ink" | "outline" | "invert" | "ghost-invert";
type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  /** Renders an anchor. Internal paths route through next/link. */
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  block?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "aria-label"?: string;
}

/** Styling lives in ui.css so hover, focus and active states are real CSS. */
export function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  block,
  disabled,
  type = "button",
  onClick,
  className,
  style,
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    "btn",
    `btn--${variant}`,
    size !== "md" ? `btn--${size}` : "",
    block ? "btn--block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (href && !disabled) {
    const external =
      href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={cls} style={style} onClick={onClick} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style} onClick={onClick} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {inner}
    </button>
  );
}
