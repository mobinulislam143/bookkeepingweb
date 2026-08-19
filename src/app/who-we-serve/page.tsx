import type { Metadata } from "next";
import Image from "next/image";
import { Button, Icon, Photo, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { ServicesSection } from "@/components/sections/Blocks";
import { FinalCta, Proof } from "@/components/sections/Shared";
import { BIZ, CLIENTS } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Who We Serve — Businesses at Every Stage",
  description:
    "Accounting and financial services structured around small businesses, growing companies, entrepreneurs and established organizations.",
  alternates: { canonical: "/who-we-serve" },
  openGraph: {
    title: `Who We Serve — ${BIZ.name}`,
    description:
      "Accounting support scoped to where a business actually is: small businesses, growing companies, entrepreneurs and established organizations.",
    url: "/who-we-serve",
  },
};

/** What each client stage typically needs first. Descriptive, not prescriptive. */
const DETAIL: Record<string, { need: string; focus: string[] }> = {
  "Small Businesses": {
    need: "Usually the first need is simply a reliable record — one place where income, expenses and statements agree.",
    focus: ["Clean monthly records", "Reconciled accounts", "Reporting you can read"],
  },
  "Growing Companies": {
    need: "As volume rises, the questions change: what a month actually cost, what a lender will ask for, what the next hire means.",
    focus: ["Month-end close", "Cash-flow visibility", "Reporting for lenders"],
  },
  Entrepreneurs: {
    need: "Early on, financial administration takes time the business cannot spare. The work is to take it off the founder's desk.",
    focus: ["Setup done correctly", "Record-keeping routines", "Year-round availability"],
  },
  "Established Businesses": {
    need: "The records exist; the gap is usually in what they are telling you and how quickly you can act on it.",
    focus: ["Reporting reviews", "Performance analysis", "Advisory support"],
  },
};

export default function WhoWeServePage() {
  return (
    <>
      <section className="section section--tight" aria-labelledby="wws-h">
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
              <p className="meta meta--accent">Who we serve</p>
              <p className="meta">Four stages</p>
            </div>
          </Reveal>

          <div className="split split--wide-left split--top" style={{ alignItems: "end" }}>
            <Reveal>
              <h1 id="wws-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)" }}>
                Financial Support
                <br />
                for Businesses at
                <br />
                Every Stage
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="stack" style={{ gap: 22 }}>
                <p className="lede">
                  The right level of support depends on where a business actually is. We scope the
                  work to that, rather than to a package you have to grow into.
                </p>
                <div className="row">
                  <Button href="/contact" iconRight={<Icon name="arrow-right" size={17} />}>
                    Get Started
                  </Button>
                  <Button href="/services" variant="outline">
                    See the services
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="band__figure" style={{ aspectRatio: "21/7" }}>
          <Image
            src={IMAGES.whoWeHelp.src}
            alt="Business owner reviewing financial reporting in their office"
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>
      </div>

      {/* Each stage gets a full row rather than a tile, so the differences read. */}
      <section className="section" aria-label="Client stages">
        <div className="container">
          <Stagger step={0.06}>
            {CLIENTS.map((c, i) => {
              const d = DETAIL[c.title];
              return (
                <StaggerItem key={c.title}>
                  <div className="stage-row">
                    <span className="num stage-row__no">{String(i + 1).padStart(2, "0")}</span>
                    <div className="stage-row__main">
                      <h2 className="stage-row__title">{c.title}</h2>
                      <p className="lede" style={{ maxWidth: "none" }}>
                        {c.body}
                      </p>
                      <p className="prose">{d.need}</p>
                    </div>
                    <ul className="stage-row__focus">
                      {d.focus.map((f) => (
                        <li key={f}>
                          <Icon name="check" size={15} strokeWidth={2.6} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section section--warm" aria-labelledby="wws-fit-h">
        <div className="container">
          <div className="split" style={{ gap: "clamp(32px, 5vw, 80px)" }}>
            <div className="stack">
              <Reveal as="span" y={10}>
                <p className="meta meta--accent">Fit</p>
              </Reveal>
              <Reveal>
                <h2 id="wws-fit-h" className="display">
                  We will tell you if it isn’t a fit.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="prose">
                  Not every business needs every service, and some situations call for something
                  outside our scope. The first conversation is partly about establishing which of
                  those you are in — and we would rather say so early than bill for the discovery.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button href="/contact" iconRight={<Icon name="arrow-right" size={17} />}>
                  Start the conversation
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.08} style={{ width: "100%" }}>
              <Photo
                src={IMAGES.clientRelationship.src}
                alt="Advisor and business owner reviewing financial documents together"
                ratio="4/3"
                position="center 40%"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesSection
        index="—"
        heading="The services behind each stage"
        lede="Every engagement is assembled from the same six services. What changes is the emphasis."
      />

      <Proof />
      <FinalCta />
    </>
  );
}
