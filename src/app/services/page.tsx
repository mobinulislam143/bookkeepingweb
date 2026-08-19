import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Icon, Photo, Reveal, Stagger, StaggerItem, type IconName } from "@/components/ui";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCta, Proof } from "@/components/sections/Shared";
import { BIZ, POSITION, PROCESS, SERVICES } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services — Accounting, Tax, Reporting and Advisory",
  description:
    "Six services covering accounting, bookkeeping, tax support, financial consulting, business advisory and financial reporting — scoped to what your business needs.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${BIZ.name}`,
    description:
      "Accounting, bookkeeping, tax, consulting, advisory and reporting services for businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* A service index opens with a list, not a photograph. */}
      <section className="section section--tight" aria-labelledby="svc-h">
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 24,
                borderBottom: "2px solid var(--ink-900)",
                paddingBottom: 18,
                marginBottom: "clamp(28px, 4vw, 52px)",
              }}
            >
              <p className="meta meta--accent">Services · Index</p>
              <p className="meta">Six services</p>
            </div>
          </Reveal>

          <div className="split split--wide-left split--top" style={{ alignItems: "end" }}>
            <Reveal>
              <h1 id="svc-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)" }}>
                Financial Expertise
                <br />
                Built Around
                <br />
                Your Business
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="stack" style={{ gap: 22 }}>
                <p className="lede">
                  From day-to-day accounting to strategic financial guidance, we provide practical
                  solutions that help businesses stay organized, informed, and prepared for what
                  comes next.
                </p>
                <div className="row">
                  <Button href="/contact" iconRight={<Icon name="arrow-right" size={17} />}>
                    Get Started
                  </Button>
                  <Button href={BIZ.tel} variant="outline" iconLeft={<Icon name="phone" size={16} />}>
                    {BIZ.phone}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The index. Each row is a full-width entry rather than a tile. */}
      <section className="section section--tight" style={{ paddingTop: 0 }} aria-label="Service index">
        <div className="container">
          <Stagger step={0.05}>
            {SERVICES.map((s) => (
              <StaggerItem key={s.id}>
                <Link href={s.href} className="index-row">
                  <span className="index-row__no">{s.no}</span>
                  <span className="index-row__title">
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <Icon name={s.icon as IconName} size={19} color="var(--accent-ink)" />
                      {s.title}
                    </span>
                  </span>
                  <span className="index-row__desc" style={{ display: "grid", gap: 10 }}>
                    <span className="prose" style={{ fontSize: "var(--fs-sm)" }}>
                      {s.summary}
                    </span>
                    <span className="label-row">
                      {s.points.map((p) => (
                        <span className="meta" key={p} style={{ letterSpacing: "0.06em" }}>
                          {p}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="index-row__go link-arrow">
                    Learn more
                    <Icon name="arrow-right" size={16} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="band">
        <div className="band__figure" style={{ aspectRatio: "21/7" }}>
          <Image
            src={IMAGES.bookkeepingPaperwork.src}
            alt="Financial records being organized and categorized in an office"
            fill
            sizes="100vw"
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 45%" }}
          />
        </div>
      </div>

      {/* How the six combine in practice. */}
      <section className="section section--alt" aria-labelledby="svc-work-h">
        <div className="container">
          <div className="split" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">In practice</p>
              </Reveal>
              <Reveal>
                <h2 id="svc-work-h" className="display">
                  Most engagements
                  <br />
                  use more than one.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Accounting keeps the record accurate. Reporting makes it legible. Advisory turns
                  it into a decision. Bookkeeping and tax support sit underneath both — they are
                  available on their own, but they work better as part of the same system.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="checks">
                  {[
                    "Income and expenses categorized consistently",
                    "Bank and card activity matched to your records",
                    "Month-end close on a predictable schedule",
                    "Reporting reviewed with you, not just delivered",
                  ].map((c) => (
                    <li key={c}>
                      <Icon name="check" size={17} strokeWidth={2.4} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.14}>
                <Button
                  href="/who-we-serve"
                  variant="outline"
                  iconRight={<Icon name="arrow-up-right" size={17} />}
                >
                  How this maps to your stage
                </Button>
              </Reveal>
            </div>

            <Reveal
              delay={0.08}
              style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            >
              <Photo
                src={IMAGES.businessSupport.src}
                alt="Professional workspace with financial reporting open on a laptop"
                ratio="16/9"
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ gridColumn: "1 / -1" }}
              />
              <Photo
                src={IMAGES.clientRelationship.src}
                alt="Advisor and client reviewing a financial report together"
                ratio="1/1"
                sizes="(max-width: 900px) 50vw, 25vw"
              />
              <Photo
                src={IMAGES.individualSupport.src}
                alt="Business owner reviewing accounts on a laptop"
                ratio="1/1"
                sizes="(max-width: 900px) 50vw, 25vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="svc-proc-h">
        <div className="container">
          <div style={{ borderTop: "2px solid var(--ink-900)", paddingTop: 18, marginBottom: 28 }}>
            <p className="meta meta--accent">Getting started</p>
          </div>
          <Reveal>
            <h2 id="svc-proc-h" className="display" style={{ marginBottom: "clamp(28px, 4vw, 52px)" }}>
              However you start, it starts the same way.
            </h2>
          </Reveal>
          <ProcessTimeline steps={[...PROCESS]} />
        </div>
      </section>

      <Proof />
      <FinalCta
        title="Not sure which services you need?"
        lede={`Describe the situation and we will tell you which apply — or that none of them do. ${POSITION.assurance}`}
      />
    </>
  );
}
