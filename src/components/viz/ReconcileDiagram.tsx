"use client";

import { useActivated } from "@/components/ui";

/**
 * Bookkeeping page — reconciliation, drawn.
 *
 * Two columns: what the bank says on the left, what your records say on the
 * right. The right column starts out of step; when the diagram is scrolled to,
 * the rows slide into line and the links between them draw themselves. It is
 * the one idea the whole service rests on — the two sides agreeing — and it is
 * shown rather than asserted. No amounts appear anywhere.
 */

const ROWS = [
  { label: "Deposit", offset: 26 },
  { label: "Card payment", offset: -18 },
  { label: "Transfer", offset: 34 },
  { label: "Invoice paid", offset: -28 },
  { label: "Expense", offset: 14 },
];

const ROW_H = 30;
const GAP = 14;
const TOP = 34;

export function ReconcileDiagram() {
  const { ref, active } = useActivated<SVGSVGElement>(0.45);
  const height = TOP + ROWS.length * (ROW_H + GAP) + 24;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 460 ${height}`}
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Diagram: bank activity on the left and your records on the right, moving into alignment and matching row for row"
    >
      <text x="8" y="16" className="num" fontSize="10" letterSpacing="1.6" fill="var(--ink-500)">
        BANK ACTIVITY
      </text>
      <text x="452" y="16" textAnchor="end" fontSize="10" letterSpacing="1.6" fill="var(--ink-500)">
        YOUR RECORDS
      </text>

      {ROWS.map((row, i) => {
        const y = TOP + i * (ROW_H + GAP);
        const mid = y + ROW_H / 2;
        const shift = active ? 0 : row.offset;
        return (
          <g key={row.label}>
            {/* bank side — fixed */}
            <rect
              x="8"
              y={y}
              width="170"
              height={ROW_H}
              rx="5"
              fill="var(--white)"
              stroke="var(--ink-200)"
            />
            <rect x="20" y={y + 12} width="86" height="6" rx="3" fill="var(--ink-100)" />
            <text x="20" y={y - 4} fontSize="8" letterSpacing="1.2" fill="var(--ink-400)">
              {row.label.toUpperCase()}
            </text>

            {/* the link, drawn only once the pair is in step */}
            <path
              d={`M 178 ${mid} C 212 ${mid}, 248 ${mid}, 282 ${mid}`}
              stroke={i === 2 ? "var(--accent)" : "var(--accent)"}
              strokeWidth="1.6"
              fill="none"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={active ? 0 : 1}
              style={{ transition: `stroke-dashoffset 520ms var(--ease-out) ${520 + i * 110}ms` }}
            />

            {/* your records — slides into line */}
            <g
              style={{
                transform: `translateY(${shift}px)`,
                transition: `transform 700ms var(--ease-out) ${i * 80}ms`,
              }}
            >
              <rect
                x="282"
                y={y}
                width="170"
                height={ROW_H}
                rx="5"
                fill={active ? "var(--accent-tint)" : "var(--white)"}
                stroke={active ? "var(--accent-soft)" : "var(--ink-200)"}
                style={{ transition: "fill 460ms var(--ease), stroke 460ms var(--ease)" }}
              />
              <rect
                x="294"
                y={y + 12}
                width="86"
                height="6"
                rx="3"
                fill={active ? "var(--accent)" : "var(--ink-100)"}
                style={{ transition: "fill 460ms var(--ease)" }}
              />
            </g>
          </g>
        );
      })}

      <text
        x="230"
        y={height - 4}
        textAnchor="middle"
        fontSize="10"
        letterSpacing="1.8"
        fill={active ? "var(--green-700)" : "var(--ink-400)"}
        style={{ transition: "fill 460ms var(--ease) 900ms" }}
      >
        {active ? "BALANCES AGREE" : "OUT OF STEP"}
      </text>
    </svg>
  );
}
