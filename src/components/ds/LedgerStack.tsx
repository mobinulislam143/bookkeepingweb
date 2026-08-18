"use client";

import { useEffect, useState, type CSSProperties } from "react";

const rows = [
  { label: "Receipts", tone: "var(--brass-400)" },
  { label: "Invoices", tone: "var(--sage-500)" },
  { label: "Bank statements", tone: "var(--gray-400)" },
  { label: "Payroll", tone: "var(--brass-600)" },
];

const scattered = [
  { x: -46, y: -26, r: -13, z: 0 },
  { x: 34, y: 14, r: 9, z: 30 },
  { x: -18, y: 52, r: -6, z: 60 },
  { x: 52, y: 84, r: 14, z: 90 },
];

export interface LedgerStackProps {
  /** Drive the state externally (scroll-linked). Omit to auto-play once on mount. */
  organized?: boolean;
  autoPlay?: boolean;
  height?: number;
  style?: CSSProperties;
}

/**
 * The brand's signature visual: four document cards on a rotated plane moving
 * from scattered to an aligned stack — financial mess to organized and under
 * control. Pure CSS 3D, no WebGL and no canvas, so there is nothing to fall
 * back from and nothing that can block the primary content.
 *
 * Under prefers-reduced-motion it renders in the organized state immediately.
 */
export function LedgerStack({
  organized: controlled,
  autoPlay = true,
  height = 420,
  style,
}: LedgerStackProps) {
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    if (!autoPlay || controlled !== undefined) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setAuto(true), reduce ? 0 : 700);
    return () => clearTimeout(t);
  }, [autoPlay, controlled]);

  const organized = controlled !== undefined ? controlled : auto;

  return (
    <div
      aria-hidden="true"
      className="ledger-stack"
      style={{ perspective: "1400px", height, display: "grid", placeItems: "center", ...style }}
    >
      <div
        style={{
          position: "relative",
          width: "min(100%, 400px)",
          height: height * 0.72,
          transformStyle: "preserve-3d",
          // The scattered cards sit up to 52px outside the plane, so the whole
          // composition scales down on narrow viewports instead of spilling
          // past the gutter and widening the page.
          transform: "rotateX(14deg) rotateZ(-8deg) scale(var(--ledger-scale, 1))",
        }}
      >
        {rows.map((row, i) => {
          const s = scattered[i];
          const tf = organized
            ? `translate3d(0px, ${i * 34 - 28}px, ${i * 18}px) rotate(0deg)`
            : `translate3d(${s.x}px, ${s.y - 28}px, ${s.z}px) rotate(${s.r}deg)`;
          return (
            <div
              key={row.label}
              style={{
                position: "absolute",
                inset: "0 0 auto 0",
                height: 108,
                padding: "16px 18px",
                background: "var(--white)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "var(--radius-md)",
                boxShadow: organized ? "var(--shadow-md)" : "var(--shadow-float)",
                transform: tf,
                transition: `transform 1100ms var(--ease-out-soft) ${i * 90}ms, box-shadow 900ms var(--ease-out-soft)`,
                willChange: "transform",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: row.tone }} />
                <span
                  style={{
                    font: "var(--text-style-eyebrow)",
                    letterSpacing: "var(--ls-eyebrow)",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {row.label}
                </span>
              </div>
              <div style={{ display: "grid", gap: 7 }}>
                {[92, 68, 78].map((w, k) => (
                  <span
                    key={k}
                    style={{
                      height: 6,
                      width: `${w}%`,
                      borderRadius: 999,
                      background: k === 0 ? "var(--gray-200)" : "var(--gray-100)",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
