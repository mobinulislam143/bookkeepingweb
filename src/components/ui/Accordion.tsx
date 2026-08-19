"use client";

import { useId, useState } from "react";
import { Icon } from "./Icon";

export interface AccordionItem {
  q: string;
  a: string;
}

/**
 * One open panel at a time. Answers stay in the DOM only while open, so the
 * heading outline a screen reader walks matches what is on screen.
 */
export function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" key={item.q}>
            <h3 style={{ margin: 0, font: "inherit" }}>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="acc__sign" aria-hidden="true">
                  <Icon name={isOpen ? "minus" : "plus"} size={14} />
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div className="acc__panel" id={`${id}-${i}`}>
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
