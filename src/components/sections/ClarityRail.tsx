"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Section 02 — the three moves.
 *
 * Not cards. Three full-width rows set in display type, greyed until the row
 * reaches the middle of the viewport, at which point the number turns cobalt,
 * the title comes up to full ink and a rule draws itself across the row.
 */

const CONCEPTS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Organize",
    body: "Statements, receipts and invoices gathered into one place, in one consistent order — so nothing has to be reconstructed later.",
  },
  {
    n: "02",
    title: "Record",
    body: "Income and expenses categorized the same way every month, and accounts reconciled until the balances agree.",
  },
  {
    n: "03",
    title: "Understand",
    body: "A short summary of what came in, what went out and what changed. Written to be read, not decoded.",
  },
];

function Row({ n, title, body }: { n: string; title: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const on = reduced || inView;

  return (
    <div className="rail__row" ref={ref} data-on={on}>
      <span className="rail__no">{n}</span>
      <h3 className="rail__title">{title}</h3>
      <p className="rail__body prose" style={{ fontSize: "var(--fs-sm)" }}>
        {body}
      </p>
    </div>
  );
}

export function ClarityRail() {
  return (
    <div className="rail">
      {CONCEPTS.map((c) => (
        <Row key={c.n} {...c} />
      ))}
    </div>
  );
}
