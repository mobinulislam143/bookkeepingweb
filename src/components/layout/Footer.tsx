import Link from "next/link";
import { BIZ, POSITION, SERVICES, SOCIAL } from "@/lib/business";

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Who we serve", href: "/who-we-serve" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <span style={{ display: "grid", gap: 2, marginBottom: 4 }}>
              <b style={{ color: "var(--white)", fontSize: "1.0625rem", letterSpacing: "0.02em" }}>
                SAMADHAN
              </b>
              <span className="meta meta--invert">{BIZ.discipline}</span>
            </span>
            <p style={{ fontSize: "var(--fs-sm)", maxWidth: "34ch", lineHeight: 1.65 }}>
              {POSITION.category} for businesses that want accurate records, clear reporting, and
              guidance they can act on.
            </p>
            <address style={{ fontStyle: "normal", fontSize: "var(--fs-sm)", lineHeight: 1.7 }}>
              {BIZ.street}
              <br />
              {BIZ.cityLine}
            </address>
            <a href={BIZ.tel} className="num" style={{ fontSize: "var(--fs-body)" }}>
              {BIZ.phone}
            </a>
          </div>

          <nav className="footer__col" aria-label="Services">
            <span className="meta meta--invert">Services</span>
            {SERVICES.map((s) => (
              <Link key={s.id} href={s.href}>
                {s.title}
              </Link>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Company">
            <span className="meta meta--invert">Company</span>
            {COMPANY.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Contact and legal">
            <span className="meta meta--invert">Contact</span>
            <Link href="/contact">Get started</Link>
            <a href={BIZ.tel}>{BIZ.phone}</a>
            {/* Rendered only when real profiles exist — see SOCIAL in lib/business.ts */}
            {SOCIAL.length > 0 ? (
              <>
                <span className="meta meta--invert" style={{ marginTop: 12 }}>
                  Follow
                </span>
                {SOCIAL.map((s) => (
                  <a key={s.href} href={s.href} rel="noreferrer noopener" target="_blank">
                    {s.label}
                  </a>
                ))}
              </>
            ) : null}
            <span className="meta meta--invert" style={{ marginTop: 12 }}>
              Legal
            </span>
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {BIZ.name}. {BIZ.cityLine}.
          </span>
          <span>Accounting · Bookkeeping · Tax · Reporting · Advisory</span>
        </div>
      </div>
    </footer>
  );
}
