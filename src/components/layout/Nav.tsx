"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, Icon } from "@/components/ui";
import { BIZ, NAV } from "@/lib/business";

/**
 * Solid white bar with a hairline rule — no translucency, no backdrop blur.
 * The mobile sheet remembers the route it opened on, so navigating away closes
 * it without needing an effect.
 */
export function Nav() {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="wordmark" aria-label={`${BIZ.name} — home`}>
          <b>SAMADHAN</b>
          <span>{BIZ.discipline}</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav__link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__phone" href={BIZ.tel}>
            <Icon name="phone" size={15} color="var(--accent-ink)" />
            <span className="num">{BIZ.phone}</span>
          </a>
          <span className="nav__cta">
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </span>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenedAt(open ? null : pathname)}
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav__sheet" id="nav-sheet">
          <div className="container nav__sheet-inner">
            <nav aria-label="Mobile" style={{ display: "grid" }}>
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpenedAt(null)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "grid", gap: 10, paddingTop: 18 }}>
              <Button   href="/contact" className="text-white" block>
                Get Started
              </Button>
              <Button
                href={BIZ.tel}
                variant="outline"
                block
                iconLeft={<Icon name="phone" size={16} />}
              >
                {BIZ.phone}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
