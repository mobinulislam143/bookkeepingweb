"use client";

import { useActivated } from "@/components/ui";

/**
 * Section 10 — the neighbourhood, drawn.
 *
 * No street photograph of Jamaica, Queens was among the supplied assets, and
 * the brief rules out a generic embedded map as the section's main visual. So
 * the local section gets a geometric line system instead: the borough grid
 * abstracted to hairlines, the parkway cutting across it, and the office
 * marked. The lines draw themselves in when the section is reached.
 */

const STREETS = [
  "M 8 26 H 292",
  "M 8 62 H 292",
  "M 8 104 H 292",
  "M 8 146 H 292",
  "M 46 8 V 172",
  "M 106 8 V 172",
  "M 168 8 V 172",
  "M 236 8 V 172",
];

const PARKWAY = "M 8 172 L 92 118 L 176 128 L 292 74";

export function QueensLines() {
  const { ref, active } = useActivated<SVGSVGElement>(0.3);

  return (
    <svg
      ref={ref}
      className="queens"
      viewBox="0 0 300 180"
      role="img"
      aria-label="Abstract street grid of Jamaica, Queens with the office location marked"
    >
      {/* blocks */}
      <g fill="rgba(255,255,255,.045)">
        <rect x="46" y="26" width="60" height="36" />
        <rect x="168" y="62" width="68" height="42" />
        <rect x="106" y="104" width="62" height="42" />
      </g>

      {/* street grid */}
      <g stroke="rgba(255,255,255,.28)" strokeWidth="1" fill="none" strokeLinecap="round">
        {STREETS.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={active ? 0 : 1}
            style={{ transition: `stroke-dashoffset 900ms var(--ease-out) ${i * 70}ms` }}
          />
        ))}
      </g>

      {/* the parkway */}
      <path
        d={PARKWAY}
        stroke="var(--accent)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={active ? 0 : 1}
        style={{ transition: "stroke-dashoffset 1100ms var(--ease-out) 420ms" }}
      />

      {/* the office */}
      <g
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 500ms var(--ease) 1000ms",
        }}
      >
        <circle cx="168" cy="104" r="16" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.45" />
        <circle cx="168" cy="104" r="5.5" fill="var(--accent)" />
        <path d="M 168 104 H 258" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 4" />
        <text
          x="262"
          y="101"
          fill="var(--accent)"
          fontSize="8"
          letterSpacing="1.4"
          fontFamily="var(--font-mono)"
        >
          OFFICE
        </text>
      </g>
    </svg>
  );
}
