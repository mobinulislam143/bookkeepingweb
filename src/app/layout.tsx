import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import "./viz.css";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { BIZ, POSITION, SERVICES } from "@/lib/business";

/* Inter Tight sets the headlines — tighter apertures and a narrower set width
   carry large display sizes better than a text face. Inter carries body copy. */
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-face",
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
    default: `${BIZ.name} — ${POSITION.seoPhrase} for Businesses`,
    template: `%s | ${BIZ.name}`,
  },
  description: POSITION.metaDescription,
  keywords: [
    "accounting services",
    "accounting firm",
    "professional accounting services",
    "bookkeeping services",
    "financial consulting",
    "business advisory",
    "CPA services",
    "financial reporting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BIZ.name,
    title: `${BIZ.name} — ${POSITION.category}`,
    description: POSITION.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} — ${POSITION.category}`,
    description: POSITION.metaDescription,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

/**
 * Verified facts only — no hours, no price range, no credentials, and no
 * aggregate claims beyond what Google publishes.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: BIZ.name,
  description: POSITION.metaDescription,
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
    { "@type": "Place", name: "New York" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting and financial services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.summary },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BIZ.rating,
    reviewCount: BIZ.reviews,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
