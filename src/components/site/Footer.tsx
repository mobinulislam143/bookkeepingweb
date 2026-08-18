import Link from "next/link";
import { ContactRow, Icon } from "@/components/ds";
import { BIZ } from "@/lib/business";
import { Container } from "./Section";
import { Wordmark } from "./Wordmark";

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  // Labelled as a nav landmark rather than a heading: these are link groups,
  // and promoting them to <h2> would clutter the page's heading outline.
  return (
    <nav aria-label={title} style={{ display: "grid", gap: 10, alignContent: "start" }}>
      <span
        style={{
          font: "var(--text-style-eyebrow)",
          letterSpacing: "var(--ls-eyebrow)",
          textTransform: "uppercase",
          color: "var(--text-inverse-muted)",
        }}
      >
        {title}
      </span>
      {items.map(({ label, href }) =>
        href.startsWith("tel:") ? (
          <a
            key={label}
            href={href}
            style={{ fontSize: "var(--fs-body-sm)", color: "var(--ivory-100)", textDecoration: "none", opacity: 0.84 }}
          >
            {label}
          </a>
        ) : (
          <Link
            key={label}
            href={href}
            style={{ fontSize: "var(--fs-body-sm)", color: "var(--ivory-100)", textDecoration: "none", opacity: 0.84 }}
          >
            {label}
          </Link>
        )
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--graphite-800)",
        borderTop: "1px solid var(--border-inverse)",
        paddingBlock: "var(--space-8) var(--space-6)",
      }}
    >
      <Container style={{ display: "grid", gap: "var(--space-8)" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.4fr) repeat(3, minmax(0,.9fr))",
            gap: "var(--space-7)",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
            <Wordmark inverse />
            <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: 300 }}>
              <ContactRow
                tone="inverse"
                icon={<Icon name="map-pin" size={16} />}
                label="Office"
                value={
                  <>
                    {BIZ.street}
                    <br />
                    {BIZ.cityLine}
                  </>
                }
              />
              <ContactRow
                tone="inverse"
                icon={<Icon name="phone" size={16} />}
                label="Phone"
                value={BIZ.phone}
                href={BIZ.tel}
              />
            </div>
          </div>

          <FooterCol
            title="Pages"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "Bookkeeping", href: "/bookkeeping" },
              { label: "Tax Services", href: "/tax-services" },
              { label: "Accounting support", href: "/services" },
              { label: "Small business support", href: "/services" },
            ]}
          />
          <FooterCol
            title="Contact"
            items={[
              { label: "Request a consultation", href: "/contact" },
              { label: BIZ.phone, href: BIZ.tel },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-inverse)",
            paddingTop: "var(--space-5)",
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--space-5)",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-inverse-muted)" }}>
            © {new Date().getFullYear()} {BIZ.name}. Jamaica, Queens, New York.
          </span>
          <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-inverse-muted)" }}>
            Bookkeeping · Tax preparation · Accounting support
          </span>
        </div>
      </Container>
    </footer>
  );
}
