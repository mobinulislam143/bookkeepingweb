"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
import { usePointerParallax } from "@/components/ui/Motion";
import { BIZ } from "@/lib/business";

/**
 * The hero's financial composition.
 *
 * Four document surfaces plus two status chips, filed against a faint grid in
 * real perspective. They assemble on load — each piece arrives from an
 * off-axis, rotated position and settles into the arrangement — which states
 * the site's argument before a word is read: scattered paperwork becomes an
 * organized system.
 *
 * On a fine pointer the plane tilts with the cursor and the layers separate,
 * because they sit at different depths. Touch devices get the assembly and then
 * stillness; reduced motion gets the finished arrangement with no assembly.
 *
 * Nothing here states a financial figure. Rows are ruled marks and bars are
 * unlabelled; the only real number on screen is the verified Google rating.
 */

interface Piece {
  /** Resting position and size, in % of the stage. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Depth in px — what makes the cursor parallax separate the layers. */
  z: number;
  /** Where the piece travels in from as it assembles. */
  fromX: number;
  fromY: number;
  fromR: number;
}

const PIECES = {
  statement: { x: 31, y: 2, w: 55, h: 39, z: -90, fromX: 26, fromY: -20, fromR: 9 },
  ledger: { x: 3, y: 24, w: 59, h: 43, z: 0, fromX: -30, fromY: 12, fromR: -8 },
  receipt: { x: 71, y: 45, w: 21, h: 45, z: 70, fromX: 34, fromY: 26, fromR: 14 },
  rating: { x: 21, y: 72, w: 45, h: 19, z: 130, fromX: -18, fromY: 34, fromR: -11 },
} satisfies Record<string, Piece>;

const EASE = [0.16, 1, 0.3, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 62, damping: 16, mass: 0.9 };

export function DocumentSystem() {
  const { ref, px, py } = usePointerParallax<HTMLDivElement>();
  const reduced = useReducedMotion();

  const rotateY = useTransform(px, [-1, 1], [9, -9]);
  const rotateX = useTransform(py, [-1, 1], [-6, 6]);

  /** Position, size and depth. Framer folds `z` into the same transform it
      animates x/y/rotate on, so the two never fight over the property. */
  const place = (p: Piece) => ({
    left: `${p.x}%`,
    top: `${p.y}%`,
    width: `${p.w}%`,
    height: `${p.h}%`,
    z: p.z,
  });

  const enter = (p: Piece, delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, x: `${p.fromX}%`, y: `${p.fromY}%`, rotate: p.fromR },
          animate: { opacity: 1, x: "0%", y: "0%", rotate: 0 },
          transition: { ...SPRING, delay },
        };

  const chip = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, scale: 0.94 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.34, ease: EASE, delay },
        };

  return (
    <div className="doc3d" ref={ref} aria-hidden="true">
      <motion.div className="doc3d__plane" style={{ rotateX, rotateY }}>
        <span className="doc3d__grid" />

        {/* Back layer — a statement, with record volume shown as unlabelled bars. */}
        <motion.div
          className="doc3d__item"
          style={place(PIECES.statement)}
          {...enter(PIECES.statement, 0.1)}
        >
          <div className="sheet" style={{ inset: 0 }}>
            <span className="sheet__label">
              <span className="dot" style={{ background: "var(--ink-300)" }} />
              Statement
            </span>
            <span className="sheet__bars">
              {[38, 62, 47, 78, 55, 88, 70].map((h, i) => (
                <span
                  key={i}
                  className={`sheet__bar${i === 5 ? " sheet__bar--gold" : ""}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </span>
            <span className="sheet__lines">
              <span className="sheet__line sheet__line--key" style={{ width: "62%" }} />
              <span className="sheet__line" style={{ width: "88%" }} />
            </span>
          </div>
        </motion.div>

        {/* The ledger — the one cobalt object in the composition. */}
        <motion.div className="doc3d__item" style={place(PIECES.ledger)} {...enter(PIECES.ledger, 0)}>
          <div className="sheet sheet--accent" style={{ inset: 0 }}>
            <span className="sheet__label">
              <span className="dot" style={{ background: "var(--white)" }} />
              General ledger
            </span>
            <span className="sheet__lines">
              {[96, 72, 84, 60, 90, 68].map((w, i) => (
                <span
                  key={i}
                  className={`sheet__line${i === 0 ? " sheet__line--key" : ""}`}
                  style={{ width: `${w}%` }}
                />
              ))}
            </span>
          </div>
        </motion.div>

        {/* A receipt, cut narrow, standing closest to the viewer. */}
        <motion.div
          className="doc3d__item"
          style={place(PIECES.receipt)}
          {...enter(PIECES.receipt, 0.2)}
        >
          <div className="sheet" style={{ inset: 0, padding: "10% 12%", gap: "12%" }}>
            <span className="sheet__label" style={{ letterSpacing: "0.1em" }}>
              Receipt
            </span>
            <span className="sheet__lines" style={{ gap: 6 }}>
              {[80, 56, 92, 44, 68].map((w, i) => (
                <span key={i} className="sheet__line" style={{ width: `${w}%`, height: 4 }} />
              ))}
            </span>
          </div>
        </motion.div>

        {/* The verified rating, given the composition's single gold highlight. */}
        <motion.div
          className="doc3d__item"
          style={place(PIECES.rating)}
          {...enter(PIECES.rating, 0.3)}
        >
          <div
            className="sheet"
            style={{
              inset: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "6%",
              padding: "0 7%",
            }}
          >
            <span style={{ display: "grid", gap: 3 }}>
              <span className="sheet__label">Google rating</span>
              <span
                className="num"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.9rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "var(--ink-900)",
                }}
              >
                {BIZ.rating.toFixed(1)}
              </span>
            </span>
            <span className="stars" style={{ fontSize: "clamp(0.7rem, 1.05vw, 0.95rem)" }}>
              ★★★★★
            </span>
          </div>
        </motion.div>

        {/* Status chips, the highest layer — visibly interface, not a claim. */}
        <motion.span
          className="doc3d__chip"
          style={{ left: "59%", top: "26%", z: 190 }}
          {...chip(0.5)}
        >
          <span className="dot" style={{ background: "var(--green-700)" }} />
          Reconciled
        </motion.span>

        <motion.span
          className="doc3d__chip"
          style={{ left: "1%", top: "8%", z: 150 }}
          {...chip(0.62)}
        >
          <span className="dot" style={{ background: "var(--accent)" }} />
          Monthly records
        </motion.span>
      </motion.div>
    </div>
  );
}
