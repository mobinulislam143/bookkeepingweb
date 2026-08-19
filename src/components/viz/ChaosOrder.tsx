"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

/**
 * Section 06 — the transformation.
 *
 * Six documents, driven directly by the section's scroll progress: at 0 they
 * are a scattered pile on the left, at 1 they are an aligned column on the
 * right. The reader performs the change by scrolling, which is the point — this
 * is the business, stated as motion rather than as a claim.
 *
 * Reduced motion pins the progress at 1, so the organized state is what gets
 * painted and nothing moves.
 */

interface Doc {
  tag: string;
  /** x%, y%, rotation — scattered, then filed. */
  from: [number, number, number];
  to: [number, number, number];
  w: number;
  h: number;
}

const DOCS: Doc[] = [
  { tag: "Receipt", from: [2, 6, -13], to: [54, 2, 0], w: 40, h: 22 },
  { tag: "Invoice", from: [22, 30, 8], to: [54, 18, 0], w: 40, h: 22 },
  { tag: "Statement", from: [1, 52, 5], to: [54, 34, 0], w: 40, h: 22 },
  { tag: "Payroll", from: [26, 68, -9], to: [54, 50, 0], w: 40, h: 22 },
  { tag: "Bank record", from: [12, 20, 15], to: [54, 66, 0], w: 40, h: 22 },
  { tag: "Tax document", from: [30, 48, -5], to: [54, 82, 0], w: 40, h: 22 },
];

function Sheet({
  doc,
  progress,
  index,
}: {
  doc: Doc;
  progress: MotionValue<number>;
  index: number;
}) {
  const x = useTransform(progress, [0, 1], [`${doc.from[0]}%`, `${doc.to[0]}%`]);
  const y = useTransform(progress, [0, 1], [`${doc.from[1]}%`, `${doc.to[1]}%`]);
  const r = useTransform(progress, [0, 1], [doc.from[2], doc.to[2]]);
  const z = useTransform(progress, [0, 1], [(5 - index) * 22, index * 4]);

  return (
    <motion.div
      className="paper"
      style={{
        left: 0,
        top: 0,
        width: `${doc.w}%`,
        height: `${doc.h}%`,
        x,
        y,
        rotate: r,
        z,
      }}
    >
      <span className="paper__tag">{doc.tag}</span>
      <span className="paper__line" style={{ width: "88%" }} />
      <span className="paper__line" style={{ width: "62%" }} />
    </motion.div>
  );
}

export function ChaosOrder() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });
  // Both values are always created; only which one drives the sheets changes.
  const settled = useMotionValue(1);
  const progress = reduced ? settled : smooth;

  const scatterOpacity = useTransform(progress, [0, 0.45], [1, 0.3]);
  const orderOpacity = useTransform(progress, [0.5, 1], [0.3, 1]);
  const railScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          marginBottom: "clamp(20px, 3vw, 40px)",
        }}
      >
        <motion.p className="meta" style={{ opacity: scatterOpacity, color: "var(--ink-900)" }}>
          Scattered
        </motion.p>
        <div
          style={{
            flex: 1,
            height: 2,
            background: "var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <motion.span
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--accent-ink)",
              transformOrigin: "left center",
              scaleX: railScale,
            }}
          />
        </div>
        <motion.p className="meta meta--accent" style={{ opacity: orderOpacity }}>
          Organized
        </motion.p>
      </div>

      <div className="transform-stage" aria-hidden="true">
        <div className="transform-stage__plane">
          {DOCS.map((doc, i) => (
            <Sheet key={doc.tag} doc={doc} progress={progress} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
