import { Button, Icon, Reveal } from "@/components/ui";
import { QueensLines } from "@/components/viz/QueensLines";
import { BIZ } from "@/lib/business";

/* ==========================================================================
   Section 10 — local identity
   ========================================================================== */

export function LocalSection() {
  return (
    <section className="section section--ink" aria-labelledby="local-h">
      <div className="container">
        <div
          className="split split--wide-right split--top"
          style={{ alignItems: "center", gap: "clamp(36px, 6vw, 96px)" }}
        >
          <div className="stack" style={{ gap: "clamp(20px, 2.4vw, 32px)" }}>
            <Reveal as="span" y={10}>
              <p className="meta" style={{ color: "var(--accent)" }}>
                Where we work
              </p>
            </Reveal>

            <Reveal>
              <h2
                id="local-h"
                className="mega"
                style={{ color: "var(--white)", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Jamaica,
                <br />
                Queens
                <span style={{ color: "var(--accent)" }}>.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="lede" style={{ color: "var(--text-invert-muted)" }}>
Our office is on Midland Parkway in Jamaica, Queens. We work with businesses across
                New York — in person when that helps, and entirely by phone and email when it does
                not.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gap: 20,
                  paddingTop: 8,
                  borderTop: "1px solid var(--border-invert)",
                  width: "100%",
                }}
              >
                <div style={{ display: "grid", gap: 6, paddingTop: 20 }}>
                  <span className="meta meta--invert">Office</span>
                  <address
                    style={{
                      fontStyle: "normal",
                      color: "var(--white)",
                      fontSize: "var(--fs-lede)",
                      lineHeight: 1.55,
                    }}
                  >
                    {BIZ.street}
                    <br />
                    {BIZ.cityLine}
                  </address>
                </div>
                <div style={{ display: "grid", gap: 6 }}>
                  <span className="meta meta--invert">Phone</span>
                  <a
                    className="num"
                    href={BIZ.tel}
                    style={{ color: "var(--white)", fontSize: "var(--fs-lede)" }}
                  >
                    {BIZ.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} style={{ width: "100%" }}>
            <QueensLines />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Section 11 — social proof, typography only
   ========================================================================== */

export function Proof() {
  return (
    <section className="section section--tight" aria-labelledby="proof-h">
      <div className="container">
        <div
          style={{
            gap: "clamp(28px, 6vw, 96px)",
            alignItems: "center",
            borderTop: "2px solid var(--ink-900)",
            paddingTop: "clamp(28px, 3.6vw, 48px)",
          }}
          className="proof-grid"
        >
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(24px, 4vw, 56px)" }}>
              <span className="stat">
                <span
                  className="stat__value"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", letterSpacing: "-0.05em" }}
                >
                  {BIZ.rating.toFixed(1)}
                </span>
                <span className="meta">Google rating</span>
              </span>
              <span className="stat">
                <span className="stars" style={{ fontSize: "1.125rem", marginBottom: 10 }}>
                  ★★★★★
                </span>
                <span className="stat__value" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  {BIZ.reviews}
                </span>
                <span className="meta">Reviews</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="stack" style={{ gap: 16 }}>
              <h2 id="proof-h" className="display" style={{ fontSize: "var(--fs-h2)" }}>
                Trusted by Businesses That Value Financial Clarity
              </h2>
              <p className="prose">
                Professional financial support should make business easier, not more complicated.
                The rating and review count above are what Google publishes; the wording of those
                reviews belongs to the people who wrote it, so it is not reprinted here.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Final CTA
   ========================================================================== */

export function FinalCta({
  title = "Let’s Make Your Numbers Work Harder.",
  lede = "Get the financial clarity and professional support you need to make better business decisions.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="section section--ink" aria-labelledby="cta-h">
      <div className="container">
        <div
          className="split split--wide-left"
          style={{ alignItems: "end", gap: "clamp(32px, 5vw, 80px)" }}
        >
          <div className="stack" style={{ gap: "clamp(18px, 2.4vw, 28px)" }}>
            <Reveal as="span" y={10}>
              <p className="meta" style={{ color: "var(--accent)" }}>
                Start here
              </p>
            </Reveal>
            <Reveal>
              <h2 id="cta-h" className="display" style={{ color: "var(--white)" }}>
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lede" style={{ color: "var(--text-invert-muted)" }}>
                {lede}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} style={{ width: "100%" }}>
            <div style={{ display: "grid", gap: 14, justifyItems: "stretch" }}>
              <Button
                href="/contact"
                variant="invert"
                size="lg"
                iconRight={<Icon name="arrow-right" size={18} />}
              >
                Schedule a Consultation
              </Button>
              <Button href="/contact" variant="ghost-invert" size="lg">
                Contact Us
              </Button>
              <a
                href={BIZ.tel}
                className="num"
                style={{
                  color: "var(--white)",
                  fontSize: "var(--fs-lede)",
                  fontWeight: 600,
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                {BIZ.phone}
              </a>
              <p className="meta meta--invert" style={{ marginTop: 8 }}>
                {BIZ.street} · {BIZ.cityLine}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
