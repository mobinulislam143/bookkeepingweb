"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@/components/ui";

/**
 * Section 04 — the ledger.
 *
 * Five record categories. Each row's marks start jittered and unaligned; when
 * the row scrolls into view they slide onto a shared rhythm, the track turns
 * cobalt and the status flips to reconciled. It reads as a set of records being
 * put in order, which is the service — not as a dashboard, because there are no
 * figures, no charts and no controls.
 */

interface Mark {
  /** Left offset and width, in % of the track. */
  from: [number, number];
  to: [number, number];
  gold?: boolean;
}

interface Row {
  name: string;
  note: string;
  marks: Mark[];
}

/** Six evenly spaced marks: 14% wide on a 17% pitch. */
const tidy = (i: number): [number, number] => [i * 17, 14];

const ROWS: Row[] = [
  {
    name: "Revenue",
    note: "Income recorded as it comes in",
    marks: [
      { from: [4, 9], to: tidy(0) },
      { from: [21, 19], to: tidy(1) },
      { from: [46, 8], to: tidy(2) },
      { from: [58, 22], to: tidy(3) },
      { from: [77, 11], to: tidy(4) },
      { from: [90, 9], to: tidy(5) },
    ],
  },
  {
    name: "Expenses",
    note: "Categorized the same way each month",
    marks: [
      { from: [0, 16], to: tidy(0) },
      { from: [26, 7], to: tidy(1) },
      { from: [38, 21], to: tidy(2) },
      { from: [66, 10], to: tidy(3) },
      { from: [80, 18], to: tidy(4) },
      { from: [92, 7], to: tidy(5) },
    ],
  },
  {
    name: "Records",
    note: "Statements, receipts and invoices in one place",
    marks: [
      { from: [7, 12], to: tidy(0) },
      { from: [24, 10], to: tidy(1) },
      { from: [41, 17], to: tidy(2) },
      { from: [63, 9], to: tidy(3), gold: true },
      { from: [75, 14], to: tidy(4) },
      { from: [93, 6], to: tidy(5) },
    ],
  },
  {
    name: "Tax",
    note: "The documents a return is built from",
    marks: [
      { from: [2, 20], to: tidy(0) },
      { from: [30, 8], to: tidy(1) },
      { from: [44, 13], to: tidy(2) },
      { from: [61, 19], to: tidy(3) },
      { from: [84, 9], to: tidy(4) },
      { from: [95, 5], to: tidy(5) },
    ],
  },
  {
    name: "Reporting",
    note: "A monthly summary written to be read",
    marks: [
      { from: [9, 11], to: tidy(0) },
      { from: [27, 15], to: tidy(1) },
      { from: [49, 9], to: tidy(2) },
      { from: [64, 12], to: tidy(3) },
      { from: [79, 16], to: tidy(4) },
      { from: [97, 4], to: tidy(5) },
    ],
  },
];

function LedgerRow({ row, index }: { row: Row; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.85 });
  const on = reduced || inView;

  return (
    <div className="ledger__row" ref={ref} data-on={on}>
      <span className="num" style={{ fontSize: "var(--fs-meta)", color: "var(--text-faint)" }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <span style={{ display: "grid", gap: 2, minWidth: 0 }}>
        <span className="ledger__name">{row.name}</span>
        <span className="meta" style={{ letterSpacing: "0.04em", textTransform: "none" }}>
          {row.note}
        </span>
      </span>

      <span className="ledger__track" aria-hidden="true">
        {row.marks.map((m, i) => {
          const [x, w] = on ? m.to : m.from;
          return (
            <span
              key={i}
              className={`ledger__mark${m.gold ? " ledger__mark--gold" : ""}`}
              style={{
                left: 0,
                width: `${w}%`,
                transform: `translate(${(x / w) * 100}%, -50%)`,
                transitionDelay: `${i * 55}ms`,
              }}
            />
          );
        })}
      </span>

      <span className="ledger__status">
        <span className="ledger__check">
          <Icon name="check" size={12} strokeWidth={3} />
        </span>
        {on ? "Reconciled" : "Unsorted"}
      </span>
    </div>
  );
}

export function LedgerBoard() {
  return (
    <div className="ledger">
      <div className="ledger__head" aria-hidden="true">
        <span className="meta">No.</span>
        <span className="meta">Category</span>
        <span className="meta">Records</span>
        <span className="meta">Status</span>
      </div>
      {ROWS.map((row, i) => (
        <LedgerRow key={row.name} row={row} index={i} />
      ))}
    </div>
  );
}
