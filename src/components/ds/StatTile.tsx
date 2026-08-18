"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

export interface StatTileProps {
  /** Verified facts only. A number without a source does not get rendered. */
  value: string;
  label: string;
  sub?: string;
  animate?: boolean;
  tone?: "default" | "inverse";
  style?: CSSProperties;
}

export function StatTile({
  value,
  label,
  sub,
  animate = true,
  tone = "default",
  style,
}: StatTileProps) {
  const numeric = parseFloat(String(value));
  const suffix = String(value).replace(/^[\d.]+/, "");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState(0);

  const shouldCount = animate && !reduce && !Number.isNaN(numeric);

  useEffect(() => {
    if (!shouldCount) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const start = performance.now();
          const dur = 900;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setCounted(numeric * (1 - Math.pow(1 - p, 3)));
            if (p < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }),
      { threshold: 0.4 }
    );
    io.observe(el);

    // Never leave a verified figure showing zero if the observer never fires.
    const safety = setTimeout(() => setCounted(numeric), 1400);

    return () => {
      clearTimeout(safety);
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [numeric, shouldCount]);

  const decimals = String(value).includes(".") ? 1 : 0;
  const inverse = tone === "inverse";
  const display = Number.isNaN(numeric)
    ? value
    : (shouldCount ? counted : numeric).toFixed(decimals) + suffix;

  return (
    <div ref={ref} style={{ display: "grid", gap: 6, ...style }}>
      <span
        className="ds-mono-num"
        style={{
          fontSize: "var(--fs-heading-1)",
          fontWeight: "var(--fw-medium)",
          color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
          letterSpacing: "-0.02em",
        }}
      >
        {display}
      </span>
      <span
        style={{
          fontSize: "var(--fs-body-sm)",
          color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
        }}
      >
        {label}
      </span>
      {sub ? (
        <span
          style={{
            fontSize: "var(--fs-caption)",
            color: inverse ? "var(--text-inverse-muted)" : "var(--text-faint)",
          }}
        >
          {sub}
        </span>
      ) : null}
    </div>
  );
}
