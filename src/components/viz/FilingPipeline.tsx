"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * Tax page — the filing pipeline.
 *
 * Four stages on one track. The track fills with the section's scroll, and each
 * stage lights as it is reached; the sheet glyph above each node gets squarer
 * from left to right, so the stack visibly tidies as the return comes together.
 */

const STAGES: { n: string; title: string; body: string; skew: number[] }[] = [
  {
    n: "01",
    title: "Documents",
    body: "Everything you already have, in whatever state it is in.",
    skew: [-7, 5, -4],
  },
  {
    n: "02",
    title: "Organize",
    body: "Sorted against a checklist, with gaps flagged early.",
    skew: [-4, 3, -2],
  },
  {
    n: "03",
    title: "Prepare",
    body: "The return built from records that agree with each other.",
    skew: [-2, 1, -1],
  },
  {
    n: "04",
    title: "Submit",
    body: "Filed, with a copy of what it was built from.",
    skew: [0, 0, 0],
  },
];

function Stage({ stage, index }: { stage: (typeof STAGES)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const on = reduced || inView;

  return (
    <li ref={ref} style={{ display: "grid", gap: 18, minWidth: 0 }}>
      {/* the stack of paper, squaring up stage by stage */}
      <span
        aria-hidden="true"
        style={{ position: "relative", height: 72, display: "block" }}
      >
        {stage.skew.map((deg, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${i * 6}px`,
              top: `${i * 7}px`,
              width: 62,
              height: 46,
              borderRadius: 4,
              background: on && i === stage.skew.length - 1 ? "var(--accent-tint)" : "var(--white)",
              border: `1px solid ${on ? "var(--accent-soft)" : "var(--border)"}`,
              boxShadow: "var(--shadow-2)",
              transform: `rotate(${on ? deg : deg * 2.4}deg)`,
              transition: `transform 620ms var(--ease-out) ${index * 90 + i * 60}ms, background 400ms var(--ease), border-color 400ms var(--ease)`,
            }}
          />
        ))}
      </span>

      <span
        style={{
          display: "grid",
          gap: 8,
          borderTop: `2px solid ${on ? "var(--accent-ink)" : "var(--border)"}`,
          paddingTop: 16,
          transition: "border-color 400ms var(--ease)",
        }}
      >
        <span
          className="num"
          style={{
            fontSize: "var(--fs-meta)",
            letterSpacing: "var(--ls-meta)",
            color: on ? "var(--accent-ink)" : "var(--text-faint)",
            transition: "color 400ms var(--ease)",
          }}
        >
          {stage.n}
        </span>
        <h3 style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.4rem)" }}>{stage.title}</h3>
        <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>{stage.body}</p>
      </span>
    </li>
  );
}

export function FilingPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.7"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });

  return (
    <div ref={ref}>
      <div
        aria-hidden="true"
        style={{
          height: 2,
          background: "var(--border)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "clamp(24px, 3vw, 40px)",
        }}
      >
        <motion.span
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--accent-ink)",
            transformOrigin: "left center",
            scaleX: reduced ? 1 : fill,
          }}
        />
      </div>

      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "clamp(24px, 3vw, 44px)",
        }}
      >
        {STAGES.map((s, i) => (
          <Stage key={s.n} stage={s} index={i} />
        ))}
      </ol>
    </div>
  );
}
