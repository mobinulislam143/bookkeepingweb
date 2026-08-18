"use client";

import Link from "next/link";
import {
  useState,
  type CSSProperties,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

type Tone = "paper" | "ivory" | "inverse" | "outline";
type Padding = "none" | "sm" | "md" | "lg";

const pads: Record<Padding, string | number> = {
  none: 0,
  sm: "var(--space-5)",
  md: "var(--space-6)",
  lg: "var(--space-7)",
};

const tones: Record<Tone, CSSProperties> = {
  paper: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-hairline)",
    color: "var(--text-body)",
  },
  ivory: {
    background: "var(--ivory-200)",
    border: "1px solid var(--border-soft)",
    color: "var(--text-body)",
  },
  inverse: {
    background: "var(--surface-inverse)",
    border: "1px solid var(--border-inverse)",
    color: "var(--text-inverse-muted)",
  },
  outline: {
    background: "transparent",
    border: "1px solid var(--border-hairline)",
    color: "var(--text-body)",
  },
};

export interface CardProps {
  tone?: Tone;
  padding?: Padding;
  /** Lifts 3px to shadow-lg on hover. Shadow is a hover signal, never decoration. */
  interactive?: boolean;
  as?: "div" | "article" | "li" | "form" | "a";
  href?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
  /** Only meaningful with as="form". */
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  action?: string | ((formData: FormData) => void | Promise<void>);
  noValidate?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export function Card({
  tone = "paper",
  padding = "md",
  interactive,
  as = "div",
  href,
  children,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  onSubmit,
  action,
  noValidate,
  ...rest
}: CardProps) {
  const [hover, setHover] = useState(false);

  const resolved: CSSProperties = {
    borderRadius: "var(--radius-lg)",
    padding: pads[padding],
    boxShadow: "var(--shadow-xs)",
    transition:
      "transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard)",
    ...tones[tone],
    ...(hover
      ? {
          transform: "translateY(-3px)",
          boxShadow: "var(--shadow-lg)",
          borderColor: "var(--border-strong)",
        }
      : null),
    ...style,
  };

  const handlers = {
    onMouseEnter: () => {
      if (interactive) setHover(true);
      onMouseEnter?.();
    },
    onMouseLeave: () => {
      if (interactive) setHover(false);
      onMouseLeave?.();
    },
  };

  if (as === "a" && href) {
    return (
      <Link href={href} style={resolved} className={className} {...handlers} {...rest}>
        {children}
      </Link>
    );
  }

  if (as === "form") {
    return (
      <form
        onSubmit={onSubmit}
        action={action}
        noValidate={noValidate}
        style={resolved}
        className={className}
        {...handlers}
        {...rest}
      >
        {children}
      </form>
    );
  }

  const Tag = as as "div";
  return (
    <Tag style={resolved} className={className} {...handlers} {...rest}>
      {children}
    </Tag>
  );
}
