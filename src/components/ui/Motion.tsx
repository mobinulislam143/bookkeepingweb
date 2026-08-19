"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export interface RevealProps {
  as?: "div" | "li" | "section" | "span" | "figure";
  delay?: number;
  /** Travel distance in px. Negative x values slide in from the right. */
  y?: number;
  x?: number;
  duration?: number;
  amount?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * The one entrance in the system: a short, fast rise. 460ms, once, never a
 * slow fade. Under reduced motion the content is simply present.
 */
export function Reveal({
  as = "div",
  delay = 0,
  y = 18,
  x = 0,
  duration = 0.46,
  amount = 0.25,
  className,
  style,
  children,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} style={style}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/** Staggers its children with one shared viewport trigger. */
export function Stagger({
  step = 0.07,
  delay = 0,
  className,
  style,
  children,
}: {
  step?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: step, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.46, ease: EASE } },
};

/** A child of <Stagger>. */
export function StaggerItem({
  as = "div",
  className,
  style,
  children,
}: {
  as?: "div" | "li" | "span";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} style={style}>
        {children}
      </Plain>
    );
  }
  return (
    <Tag className={className} style={style} variants={staggerItem}>
      {children}
    </Tag>
  );
}

/**
 * Pointer parallax for the hero composition. Returns two spring-smoothed
 * values in the range −1…1, tracking the cursor across the given element.
 * Touch devices and reduced-motion users get a pair of constant zeros, so the
 * composition simply sits still.
 */
export function usePointerParallax<T extends HTMLElement>(): {
  ref: React.RefObject<T | null>;
  px: MotionValue<number>;
  py: MotionValue<number>;
} {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.4 });
  const py = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set(Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1)));
      rawY.set(Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1)));
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [rawX, rawY, reduced]);

  return { ref, px, py };
}

/**
 * True once the element has been scrolled into view. Sections use it to switch
 * a visual from its "before" state to its "after" state, which is how the
 * chaos → organization story is told without a scroll-jacking timeline.
 */
export function useActivated<T extends Element>(amount = 0.4) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount });
  return { ref, active: reduced ? true : inView };
}
