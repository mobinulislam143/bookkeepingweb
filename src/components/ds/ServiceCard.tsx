"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  index?: string;
  title: string;
  description: string;
  bullets?: string[];
  href?: string;
  ctaLabel?: string;
  style?: CSSProperties;
}

export function ServiceCard({
  icon,
  index,
  title,
  description,
  bullets = [],
  href,
  ctaLabel = "Learn more",
  style,
}: ServiceCardProps) {
  const [hover, setHover] = useState(false);

  const cardStyle: CSSProperties = {
    display: "grid",
    gap: "var(--space-4)",
    alignContent: "start",
    textDecoration: "none",
    height: "100%",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-7)",
    background: "var(--surface-card)",
    border: "1px solid var(--border-hairline)",
    color: "var(--text-body)",
    boxShadow: hover && href ? "var(--shadow-lg)" : "var(--shadow-xs)",
    transform: hover && href ? "translateY(-3px)" : "none",
    borderColor: hover && href ? "var(--border-strong)" : "var(--border-hairline)",
    transition:
      "transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard)",
    ...style,
  };

  const body = (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            width: 42,
            height: 42,
            borderRadius: "var(--radius-md)",
            display: "grid",
            placeItems: "center",
            background: "var(--brass-100)",
            color: "var(--brass-700)",
            border: "1px solid var(--brass-200)",
          }}
        >
          {icon}
        </span>
        {index ? (
          <span
            className="ds-mono-num"
            style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}
          >
            {index}
          </span>
        ) : null}
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <h3 style={{ fontSize: "var(--fs-heading-3)", letterSpacing: "var(--ls-heading)" }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "var(--fs-body-sm)",
            lineHeight: "var(--lh-body)",
            color: "var(--text-muted)",
          }}
        >
          {description}
        </p>
      </div>

      {bullets.length ? (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gap: 7,
            borderTop: "1px solid var(--border-hairline)",
            paddingTop: "var(--space-4)",
          }}
        >
          {bullets.map((b) => (
            <li
              key={b}
              style={{
                display: "grid",
                gridTemplateColumns: "14px 1fr",
                gap: 10,
                fontSize: "var(--fs-body-sm)",
                color: "var(--text-body)",
              }}
            >
              <span aria-hidden="true" style={{ marginTop: 9, height: 1, background: "var(--brass-400)" }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {href ? (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: "var(--fs-body-sm)",
            fontWeight: "var(--fw-medium)",
            color: "var(--text-accent)",
          }}
        >
          {ctaLabel}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              transform: hover ? "translateX(4px)" : "none",
              transition: "transform var(--dur-fast) var(--ease-standard)",
            }}
          >
            →
          </span>
        </span>
      ) : null}
    </>
  );

  if (!href) return <div style={cardStyle}>{body}</div>;

  return (
    <Link
      href={href}
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {body}
    </Link>
  );
}
