"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, Icon, IconButton } from "@/components/ds";
import { useMediaQuery, useScrolledPast } from "@/hooks/useBrowserState";
import { BIZ, NAV } from "@/lib/business";
import { Container } from "./Section";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(8);
  const wide = useMediaQuery("(min-width: 1181px)");

  // The sheet remembers which route it was opened on, so navigating away or
  // growing past the breakpoint closes it without an effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname && !wide;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled || open ? "rgba(250,247,242,.86)" : "transparent",
        backdropFilter: scrolled || open ? "var(--blur-veil)" : "none",
        WebkitBackdropFilter: scrolled || open ? "var(--blur-veil)" : "none",
        borderBottom: `1px solid ${scrolled || open ? "var(--border-hairline)" : "transparent"}`,
        transition:
          "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-5)",
          height: 74,
        }}
      >
        <Wordmark />

        <nav aria-label="Primary" className="nav-links" style={{ display: "flex", gap: "var(--space-5)", alignItems: "center" }}>
          {NAV.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                style={{
                  fontSize: "var(--fs-body-sm)",
                  color: active ? "var(--text-strong)" : "var(--text-muted)",
                  textDecoration: "none",
                  paddingBottom: 3,
                  borderBottom: `1px solid ${active ? "var(--brass-500)" : "transparent"}`,
                  transition:
                    "color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href={BIZ.tel}
            className="nav-phone"
            style={{
              fontSize: "var(--fs-body-sm)",
              color: "var(--text-strong)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              whiteSpace: "nowrap",
            }}
          >
            <Icon name="phone" size={15} color="var(--brass-700)" />
            {BIZ.phone}
          </a>
          <span className="nav-cta">
            <Button variant="accent" size="sm" href="/contact">
              Schedule a Consultation
            </Button>
          </span>
          <span className="nav-toggle">
            <IconButton
              icon={<Icon name={open ? "x" : "menu"} size={18} />}
              label={open ? "Close menu" : "Open menu"}
              expanded={open}
              controls="mobile-nav"
              onClick={() => setOpenedAt(open ? null : pathname)}
            />
          </span>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          style={{ borderTop: "1px solid var(--border-hairline)", background: "var(--white)" }}
        >
          <Container style={{ display: "grid", gap: "var(--space-4)", paddingBlock: "var(--space-5)" }}>
            <nav aria-label="Mobile" style={{ display: "grid", gap: "var(--space-4)" }}>
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpenedAt(null)}
                  style={{
                    fontSize: "var(--fs-body-lg)",
                    color: "var(--text-strong)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "grid", gap: 10, paddingTop: "var(--space-3)" }}>
              <Button variant="accent" fullWidth href="/contact">
                Schedule a Consultation
              </Button>
              <Button
                variant="secondary"
                fullWidth
                href={BIZ.tel}
                iconLeft={<Icon name="phone" size={15} />}
              >
                Call {BIZ.phone}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
