"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export interface Step {
  n: string;
  title: string;
  body: string;
  /** Small right-hand annotation — what the reader actually gets at this stage. */
  note?: string;
}

/**
 * Section 08 — how it works.
 *
 * A vertical timeline, not three cards. The spine fills as the section
 * scrolls, and each step's marker fills as it comes into view, so the line
 * literally connects what has happened to what is next.
 */
function TimelineStep({ step }: { step: Step }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const on = reduced || inView;

  return (
    <li className="timeline__step" ref={ref} data-on={on}>
      <span className="timeline__marker" aria-hidden="true" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
          gap: "clamp(16px, 3vw, 48px)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: 12 }}>
          <span className="timeline__no">{step.n}</span>
          <h3 style={{ fontSize: "clamp(1.375rem, 2.4vw, 2rem)", letterSpacing: "-0.028em" }}>
            {step.title}
          </h3>
          <p className="prose">{step.body}</p>
        </div>
        {step.note ? (
          <p
            className="meta"
            style={{
              textTransform: "none",
              letterSpacing: "0.02em",
              lineHeight: 1.6,
              color: "var(--text-faint)",
              borderLeft: "1px solid var(--border)",
              paddingLeft: 18,
            }}
          >
            {step.note}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });

  return (
    <ol className="timeline" ref={ref} style={{ listStyle: "none", margin: 0 }}>
      <span className="timeline__spine" aria-hidden="true">
        <motion.span style={reduced ? { scaleY: 1 } : { scaleY: fill }} />
      </span>
      {steps.map((s) => (
        <TimelineStep key={s.n} step={s} />
      ))}
    </ol>
  );
}
