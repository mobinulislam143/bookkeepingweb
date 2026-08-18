"use client";

import { useId, useState, type CSSProperties } from "react";

export interface AccordionItem {
  q: string;
  a: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  style?: CSSProperties;
}

export function Accordion({ items, defaultOpen = 0, style }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div style={{ display: "grid", ...style }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;
        return (
          <div
            key={item.q}
            style={{
              borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none",
              borderBottom: "1px solid var(--border-hairline)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit" }}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-5)",
                  background: "transparent",
                  border: "none",
                  padding: "var(--space-5) 0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-body)",
                  color: "var(--text-strong)",
                  fontSize: "var(--fs-body-lg)",
                  fontWeight: "var(--fw-medium)",
                  letterSpacing: "-0.01em",
                  lineHeight: "var(--lh-snug)",
                }}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  style={{
                    flex: "0 0 auto",
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    border: "1px solid var(--border-hairline)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--brass-700)",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform var(--dur-base) var(--ease-standard)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows var(--dur-base) var(--ease-standard)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    paddingBottom: "var(--space-5)",
                    maxWidth: "var(--measure-prose)",
                    fontSize: "var(--fs-body)",
                    lineHeight: "var(--lh-body)",
                    color: "var(--text-muted)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
