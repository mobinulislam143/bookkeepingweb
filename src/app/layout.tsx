import type { Metadata, Viewport } from "next";
import { Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { Nav } from "@/components/site/Nav";
import { BIZ } from "@/lib/business";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-core",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BIZ.siteUrl),
  title: {
    default: `${BIZ.name} — Bookkeeping and Tax Preparation in Jamaica, Queens`,
    template: `%s | ${BIZ.name}`,
  },
  description:
    "Bookkeeping, tax preparation, and accounting support for small businesses and individuals in Jamaica, Queens. Rated 5.0 on Google. Call (347) 444-3222.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BIZ.name,
    title: `${BIZ.name} — Jamaica, Queens`,
    description:
      "Clear books. Confident decisions. Bookkeeping and tax preparation on Midland Parkway in Jamaica, NY.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} — Jamaica, Queens`,
    description:
      "Bookkeeping and tax preparation for small businesses and individuals in Jamaica, Queens.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
};

/** Verified facts only — no hours, no price range, no aggregate claims beyond Google's. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: BIZ.name,
  url: BIZ.siteUrl,
  telephone: BIZ.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: BIZ.city,
    addressRegion: BIZ.state,
    postalCode: BIZ.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "Jamaica, Queens" },
    { "@type": "Place", name: "Queens, New York" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BIZ.rating,
    reviewCount: BIZ.reviews,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibsted.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
