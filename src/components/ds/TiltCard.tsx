"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

export interface TiltCardProps {
  /** Degrees of tilt at the far edge. The system caps this at 6. */
  max?: number;
  lift?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/** Pointer-driven perspective tilt for one or two cards per page. Snaps back on leave. */
export function TiltCard({ max = 6, lift = 6, children, style, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, active: false });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * max * 2, ry: px * max * 2, active: true });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0, active: false })}
      style={{ perspective: "var(--perspective)", ...style }}
    >
      <div
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateZ(0) translateY(${t.active ? -lift : 0}px)`,
          transformStyle: "preserve-3d",
          transition: t.active
            ? "transform var(--dur-fast) var(--ease-standard)"
            : "transform var(--dur-slow) var(--ease-out-soft)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
