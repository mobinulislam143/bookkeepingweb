"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export interface RevealProps {
  as?: "div" | "li" | "span" | "section";
  /** Stagger in ms. Multiples of 70, never more than four in a row. */
  delay?: number;
  distance?: number;
  once?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/**
 * The system's single entrance: 16px rise + fade, 760ms, once.
 * Under prefers-reduced-motion the content is simply shown — the reveal state
 * is derived rather than set from an effect, so there is no cascading render.
 */
export function Reveal({
  as = "div",
  delay = 0,
  distance = 16,
  once = true,
  children,
  style,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const reduce = useReducedMotion();
  const shown = seen || !!reduce;

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    // Hidden renders never fire IntersectionObserver — the safety timer makes
    // sure content can never be left permanently invisible.
    const safety = setTimeout(() => setSeen(true), 1200);
    if (typeof IntersectionObserver === "undefined") {
      return () => clearTimeout(safety);
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            clearTimeout(safety);
            setSeen(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setSeen(false);
          }
        }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );
    io.observe(el);

    return () => {
      clearTimeout(safety);
      io.disconnect();
    };
  }, [once, reduce]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${distance}px)`,
        transition: `opacity var(--dur-reveal) var(--ease-out-soft) ${delay}ms, transform var(--dur-reveal) var(--ease-out-soft) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
