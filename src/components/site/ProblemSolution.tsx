"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, Icon, LedgerStack } from "@/components/ds";
import { Container } from "./Section";

const PROBLEMS: [string, string][] = [
  ["Disorganized records", "Receipts in three places, statements unopened."],
  ["Unclear numbers", "No reliable read on what came in or went out."],
  ["Tax-time stress", "A month of catch-up compressed into a weekend."],
];

const SOLUTIONS: [string, string][] = [
  ["Organized books", "One current set of records, reconciled monthly."],
  ["A clear financial picture", "Reports that answer questions without decoding."],
  ["More confidence", "Decisions and deadlines stop being guesswork."],
];

/**
 * Scroll-driven storytelling, used once per site (the other scroll-linked
 * moment is the hero LedgerStack). A tall sticky section drives the ledger from
 * scattered to organized as you pass through it.
 *
 * Under prefers-reduced-motion the section collapses to a normal-height block
 * showing the organized state — no sticky scroll hijack, no motion.
 */
export function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [organized, setOrganized] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setOrganized(v > 0.45);
  });

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const rows = organized || reduce ? SOLUTIONS : PROBLEMS;
  const settled = organized || !!reduce;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        minHeight: reduce ? undefined : "190vh",
        background: "var(--ivory-100)",
      }}
    >
      <div
        style={{
          position: reduce ? "static" : "sticky",
          top: 74,
          paddingBlock: "clamp(40px,6vw,80px)",
        }}
      >
        <Container>
          <div
            className="ps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)",
              gap: "var(--space-8)",
              alignItems: "center",
            }}
          >
            <div style={{ display: "grid", gap: "var(--space-5)" }}>
              <Eyebrow rule>From mess to method</Eyebrow>
              <h2 style={{ maxWidth: "18ch" }}>
                {settled ? "Organized, and staying that way." : "Most books don’t fall apart all at once."}
              </h2>

              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {rows.map(([t, d]) => (
                  <div
                    key={t}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "20px 1fr",
                      gap: "var(--space-4)",
                      padding: "var(--space-4) 0",
                      borderTop: "1px solid var(--border-soft)",
                      transition: "opacity var(--dur-slow) var(--ease-out-soft)",
                    }}
                  >
                    <span
                      style={{
                        marginTop: 7,
                        color: settled ? "var(--sage-500)" : "var(--gray-400)",
                      }}
                    >
                      <Icon name={settled ? "check" : "minus"} size={16} />
                    </span>
                    <span style={{ display: "grid", gap: 3 }}>
                      <strong
                        style={{
                          fontSize: "var(--fs-body)",
                          fontWeight: "var(--fw-medium)",
                          color: "var(--text-strong)",
                        }}
                      >
                        {t}
                      </strong>
                      <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>
                        {d}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 4 }}>
                <span
                  aria-hidden="true"
                  style={{
                    height: 2,
                    width: 160,
                    background: "var(--border-soft)",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <motion.span
                    style={{
                      display: "block",
                      height: "100%",
                      width: reduce ? "100%" : barWidth,
                      background: "var(--brass-500)",
                    }}
                  />
                </span>
                <span
                  className="ds-mono-num"
                  style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}
                >
                  {settled ? "In order" : "Scattered"}
                </span>
              </div>
            </div>

            <LedgerStack organized={settled} autoPlay={false} height={440} />
          </div>
        </Container>
      </div>
    </div>
  );
}
