import type { Metadata } from "next";
import Image from "next/image";
import { Icon, Photo, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";
import { LocalSection } from "@/components/sections/Shared";
import { BIZ } from "@/lib/business";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact — Schedule a Consultation",
  description:
    "Schedule a consultation with our accounting and advisory team. Call (347) 444-3222 or send a short note about your business and financial needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${BIZ.name}`,
    description: "Schedule a consultation with our accounting and advisory team.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--tight" aria-labelledby="contact-h">
        <div className="container">
          <Reveal y={12}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                borderBottom: "2px solid var(--ink-900)",
                paddingBottom: 16,
                marginBottom: "clamp(26px, 3.4vw, 44px)",
              }}
            >
              <p className="meta meta--accent">Contact</p>
              <p className="meta">Reply within one business day</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 id="contact-h" className="mega" style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)", maxWidth: "15ch" }}>
              Let’s talk about your business
              <span style={{ color: "var(--accent-ink)" }}>.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Contact details and form">
        <div className="container contact-layout">
          <div style={{ display: "grid", gap: 28, minWidth: 0 }}>
            <Reveal>
              <p className="lede" style={{ maxWidth: "none" }}>
Tell us about your business and where your financial records stand. We will help
                determine which services make sense — and say so if none of them do.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <p className="meta meta--accent" style={{ marginBottom: 6 }}>
                  Details
                </p>
                <div className="detail-row">
                  <Icon name="map-pin" size={18} />
                  <span style={{ display: "grid", gap: 3 }}>
                    <span className="meta">Office</span>
                    <address style={{ fontStyle: "normal", color: "var(--ink-900)", lineHeight: 1.6 }}>
                      {BIZ.street}
                      <br />
                      {BIZ.cityLine}
                    </address>
                  </span>
                </div>
                <div className="detail-row">
                  <Icon name="phone" size={18} />
                  <span style={{ display: "grid", gap: 3 }}>
                    <span className="meta">Phone</span>
                    <a
                      href={BIZ.tel}
                      className="num"
                      style={{ color: "var(--ink-900)", fontSize: "var(--fs-lede)", fontWeight: 600 }}
                    >
                      {BIZ.phone}
                    </a>
                    <span className="field__hint">Click to call</span>
                  </span>
                </div>
                <div className="detail-row">
                  <Icon name="user" size={18} />
                  <span style={{ display: "grid", gap: 3 }}>
                    <span className="meta">Appointments</span>
                    <span style={{ color: "var(--ink-900)" }}>By appointment</span>
                    <span className="field__hint">Specific times confirmed when you book</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Photo
                src={IMAGES.process.src}
                alt={IMAGES.process.alt}
                ratio="4/3"
                position="center 40%"
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </Reveal>

            <Reveal delay={0.14}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 28 }}>
                <span className="stat">
                  <span className="stat__value" style={{ fontSize: "clamp(2rem, 3.4vw, 2.75rem)" }}>
                    {BIZ.rating.toFixed(1)}
                  </span>
                  <span className="meta">Google rating</span>
                </span>
                <span className="stat">
                  <span className="stars" style={{ fontSize: "0.95rem", marginBottom: 8 }}>
                    ★★★★★
                  </span>
                  <span className="meta">{BIZ.reviews} reviews</span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} x={16} y={0} style={{ width: "100%", minWidth: 0 }}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <div className="band">
        <div className="band__figure" style={{ aspectRatio: "21/7" }}>
          <Image
            src={IMAGES.whoWeHelp.src}
            alt="Business owner reviewing financial reporting in their office"
            fill
            sizes="100vw"
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center 45%" }}
          />
        </div>
      </div>

      <LocalSection />
    </>
  );
}
