import Link from "next/link";
import { Icon, Reveal, SectionHead, Stagger, StaggerItem, type IconName } from "@/components/ui";
import { CLIENTS, PROOF, SERVICES, VALUES, type Service } from "@/lib/business";

/* ==========================================================================
   Services
   ========================================================================== */

/** One card. The icon is a quiet mark, not a decoration competing with the type. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="svc" aria-label={`${service.title} — learn more`}>
      <span className="svc__icon" aria-hidden="true">
        <Icon name={service.icon as IconName} size={20} />
      </span>
      <span className="svc__no num">{service.no}</span>
      <h3 className="svc__title">{service.title}</h3>
      <p className="svc__body">{service.summary}</p>
      <span className="svc__points">
        {service.points.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </span>
      <span className="svc__more">
        Learn more
        <Icon name="arrow-right" size={15} />
      </span>
    </Link>
  );
}

export function ServicesSection({
  heading = "Financial Expertise Built Around Your Business",
  lede = "From day-to-day accounting to strategic financial guidance, we provide practical solutions that help businesses stay organized, informed, and prepared for what comes next.",
  index = "02",
}: {
  heading?: string;
  lede?: string;
  index?: string;
}) {
  return (
    <section className="section" aria-labelledby="services-h">
      <div className="container">
        <SectionHead
          index={index}
          eyebrow="What we do"
          title={<span id="services-h">{heading}</span>}
          lede={lede}
        />
        <Stagger step={0.05} className="svc-grid" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          {SERVICES.map((s) => (
            <StaggerItem key={s.id}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ==========================================================================
   Who we serve
   ========================================================================== */

export function WhoWeServe({ index = "03" }: { index?: string }) {
  return (
    <section className="section section--warm" aria-labelledby="who-h">
      <div className="container">
        <SectionHead
          index={index}
          eyebrow="Who we serve"
          title={<span id="who-h">Financial Support for Businesses at Every Stage</span>}
          lede="The work is scoped to where a business actually is — not to a package it has to grow into."
        />
        <Stagger
          step={0.06}
          style={{
            marginTop: "clamp(32px, 4vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(20px, 2.4vw, 32px)",
          }}
        >
          {CLIENTS.map((c, i) => (
            <StaggerItem key={c.title} className="stage-card">
              <span className="num stage-card__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="stage-card__title">{c.title}</h3>
              <p className="stage-card__body">{c.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ==========================================================================
   Value proposition
   ========================================================================== */

export function ValueProps({ index = "04" }: { index?: string }) {
  return (
    <section className="section" aria-labelledby="value-h">
      <div className="container">
        <div className="split split--wide-left split--top" style={{ alignItems: "start" }}>
          <div className="stack">
            <Reveal as="span" y={10}>
              <p className="meta meta--accent">{index} — Why us</p>
            </Reveal>
            <Reveal>
              <h2 id="value-h" className="display">
                More Than Numbers.
                <br />
                Financial Clarity.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="prose">
                Accounting earns its keep when it changes what you do next. Everything below is
                what that requires in practice — and what we hold ourselves to.
              </p>
            </Reveal>
          </div>

          <Stagger step={0.06} className="value-grid" style={{ width: "100%" }}>
            {VALUES.map((v, i) => (
              <StaggerItem key={v.title} className="value-item">
                <span className="num value-item__no">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="value-item__title">{v.title}</h3>
                <p className="value-item__body">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Trust band — statements, not invented metrics
   ========================================================================== */

export function TrustBand() {
  return (
    <section className="section section--tight" aria-label="Working with the firm">
      <div className="container">
        <Stagger step={0.05} className="trust-band">
          {PROOF.map((p) => (
            <StaggerItem key={p.label} className="trust-band__item">
              <span className="trust-band__value">{p.value}</span>
              <span className="meta">{p.label}</span>
              {p.verified ? (
                <span className="trust-band__flag">
                  <Icon name="check" size={12} strokeWidth={3} />
                  Verified on Google
                </span>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
