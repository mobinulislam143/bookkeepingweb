import Link from "next/link";
import { BIZ } from "@/lib/business";

/**
 * No brand mark was supplied, so none was invented. The brand renders as a
 * two-line type lockup everywhere a logo would go.
 */
export function Wordmark({ inverse }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${BIZ.name} — home`}
      style={{ display: "grid", gap: 1, textDecoration: "none", justifyItems: "start" }}
    >
      <span
        style={{
          font: "var(--fw-semibold) 21px/1 var(--font-display)",
          letterSpacing: "-0.03em",
          color: inverse ? "var(--ivory-100)" : "var(--text-strong)",
        }}
      >
        {BIZ.shortName}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: inverse ? "var(--brass-400)" : "var(--text-accent)",
        }}
      >
        Bookkeeping &amp; Tax
      </span>
    </Link>
  );
}
