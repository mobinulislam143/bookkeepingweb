/**
 * Verified business information only.
 *
 * Nothing here may be added to without a confirmed source — no years in
 * business, no credentials, no awards, no client counts, no invented
 * statistics. The trust section reads from `PROOF` below and deliberately has
 * no numeric slots that could be filled with guesses.
 */
export const BIZ = {
  name: "Samadhan Accounting & Advisory",
  shortName: "Samadhan",
  /** Sits under the wordmark and in the footer. */
  discipline: "Accounting & Financial Services",
  street: "86-75 Midland Pkwy",
  city: "Jamaica",
  state: "NY",
  zip: "11432",
  cityLine: "Jamaica, NY 11432",
  phone: "(347) 444-3222",
  tel: "tel:+13474443222",
  /** Confirmed from the firm's Google Business Profile. */
  rating: 5.0,
  reviews: 2,
  /** Set this once the site is live so metadata and JSON-LD resolve absolute URLs. */
  siteUrl: "https://samadhanaccounting.com",
} as const;

/* ==========================================================================
   POSITIONING — the one file to edit when re-pointing this template

   The site is built to serve seven adjacent categories. Everything below is
   copy, not structure: swap the active preset and the hero, the service
   emphasis and the metadata follow. Nothing in the layout has to change.

   Supported: accountant · accounting · accounting-firm · cpa ·
   chartered-accountant · business-management-consultant · financial-consultant
   ========================================================================== */

export type Niche =
  | "accountant"
  | "accounting"
  | "accounting-firm"
  | "cpa"
  | "chartered-accountant"
  | "business-management-consultant"
  | "financial-consultant";

export interface Positioning {
  /** Category label shown in metadata and the footer description. */
  category: string;
  /** Hero headline, in three beats. */
  headline: [string, string, string];
  /** Hero supporting paragraph. */
  lede: string;
  /** One-line promise beside the hero CTAs. */
  assurance: string;
  /** Which service leads the list. Reorders the services grid only. */
  emphasis: ServiceId[];
  /** Page title suffix and the primary SEO phrase. */
  seoPhrase: string;
  metaDescription: string;
}

export type ServiceId =
  | "accounting"
  | "bookkeeping"
  | "tax"
  | "consulting"
  | "advisory"
  | "reporting";

const ALL: ServiceId[] = ["accounting", "bookkeeping", "tax", "consulting", "advisory", "reporting"];

export const PRESETS: Record<Niche, Positioning> = {
  accountant: {
    category: "Professional Accounting Services",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "Professional accounting and financial services designed to give businesses greater clarity, better control, and confidence in every financial decision.",
    assurance: "Accurate. Reliable. Business-Focused.",
    emphasis: ALL,
    seoPhrase: "Accounting Services",
    metaDescription:
      "Professional accounting, bookkeeping, tax support, financial reporting and business advisory services. Accurate records, clear reporting, and practical financial guidance.",
  },
  accounting: {
    category: "Accounting Services",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "Reliable accounting solutions that keep your financial records accurate, your reporting clear, and your business decisions well informed.",
    assurance: "Accurate. Reliable. Business-Focused.",
    emphasis: ALL,
    seoPhrase: "Accounting Services",
    metaDescription:
      "Reliable accounting solutions for businesses: accounting, bookkeeping, tax support, financial reporting, consulting and advisory.",
  },
  "accounting-firm": {
    category: "Accounting Firm",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "A full range of accounting and financial services for businesses that want accurate records, dependable reporting, and guidance they can act on.",
    assurance: "Accurate. Reliable. Business-Focused.",
    emphasis: ALL,
    seoPhrase: "Accounting Firm",
    metaDescription:
      "A professional accounting firm providing accounting, bookkeeping, tax, financial reporting, consulting and business advisory services.",
  },
  cpa: {
    category: "CPA & Advisory Services",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "Professional accounting, tax, and advisory services for businesses that need accurate financial records and dependable guidance throughout the year.",
    assurance: "Accurate. Reliable. Business-Focused.",
    emphasis: ["accounting", "tax", "reporting", "advisory", "bookkeeping", "consulting"],
    seoPhrase: "CPA Services",
    metaDescription:
      "CPA services covering accounting, tax support, financial reporting and business advisory for companies of every size.",
  },
  "chartered-accountant": {
    category: "Chartered Accounting & Advisory",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "Accounting, reporting, tax, and advisory services for businesses that expect precision in their financial records and clarity in their reporting.",
    assurance: "Accurate. Reliable. Business-Focused.",
    emphasis: ["accounting", "reporting", "tax", "advisory", "bookkeeping", "consulting"],
    seoPhrase: "Chartered Accounting Services",
    metaDescription:
      "Chartered accounting services covering accounting, financial reporting, tax support and business advisory.",
  },
  "business-management-consultant": {
    category: "Business Management Consulting",
    headline: ["Clear Numbers.", "Better Operations.", "Stronger Business."],
    lede: "Financial analysis, planning, and operational insight that help business owners understand performance and make decisions with confidence.",
    assurance: "Practical. Analytical. Business-Focused.",
    emphasis: ["advisory", "consulting", "reporting", "accounting", "bookkeeping", "tax"],
    seoPhrase: "Business Advisory",
    metaDescription:
      "Business management consulting: financial analysis, planning, reporting and operational insight, supported by accurate accounting.",
  },
  "financial-consultant": {
    category: "Financial Consulting",
    headline: ["Clear Numbers.", "Smarter Decisions.", "Stronger Business."],
    lede: "Financial analysis and strategic guidance that turn your numbers into a clear view of where the business stands and what to do next.",
    assurance: "Practical. Analytical. Business-Focused.",
    emphasis: ["consulting", "advisory", "reporting", "accounting", "tax", "bookkeeping"],
    seoPhrase: "Financial Consulting",
    metaDescription:
      "Financial consulting and business advisory services built on accurate accounting, clear reporting and practical guidance.",
  },
};

/** The active positioning. Change this line to re-point the whole site. */
export const NICHE: Niche = "accounting-firm";
export const POSITION = PRESETS[NICHE];

/* ==========================================================================
   Services
   ========================================================================== */

export interface Service {
  id: ServiceId;
  no: string;
  title: string;
  summary: string;
  /** Three concrete deliverables. Kept short — these are labels, not claims. */
  points: string[];
  /** Detail page, where one exists. */
  href: string;
  icon: "table" | "file-text" | "receipt" | "chart" | "compass" | "report";
}

const SERVICE_MAP: Record<ServiceId, Omit<Service, "no">> = {
  accounting: {
    id: "accounting",
    title: "Accounting Services",
    summary:
      "Accurate, organized accounting that gives you a clear view of your business finances and keeps your financial records working for you.",
    points: ["General ledger", "Account reconciliation", "Month-end close"],
    href: "/services",
    icon: "table",
  },
  bookkeeping: {
    id: "bookkeeping",
    title: "Bookkeeping",
    summary:
      "Reliable bookkeeping that keeps transactions, records, and financial activity organized and up to date.",
    points: ["Transaction categorization", "Records maintenance", "Catch-up and cleanup"],
    href: "/bookkeeping",
    icon: "file-text",
  },
  tax: {
    id: "tax",
    title: "Tax Services",
    summary:
      "Professional tax support designed to simplify tax responsibilities and help you stay prepared throughout the year.",
    points: ["Document preparation", "Business and individual returns", "Year-round readiness"],
    href: "/tax-services",
    icon: "receipt",
  },
  consulting: {
    id: "consulting",
    title: "Financial Consulting",
    summary:
      "Practical financial guidance to help you evaluate performance, identify opportunities, and make informed business decisions.",
    points: ["Performance review", "Cash-flow visibility", "Decision support"],
    href: "/insights",
    icon: "chart",
  },
  advisory: {
    id: "advisory",
    title: "Business Advisory",
    summary:
      "Clear financial insight and strategic guidance for businesses planning growth, improving operations, or navigating important decisions.",
    points: ["Growth planning", "Operational insight", "Scenario review"],
    href: "/insights",
    icon: "compass",
  },
  reporting: {
    id: "reporting",
    title: "Financial Reporting",
    summary:
      "Accurate, easy-to-understand financial reports that turn your numbers into useful business insights.",
    points: ["Monthly statements", "Custom reporting", "Reporting reviews"],
    href: "/insights",
    icon: "report",
  },
};

/** Services in the order the active positioning calls for, numbered in place. */
export const SERVICES: Service[] = POSITION.emphasis.map((id, i) => ({
  ...SERVICE_MAP[id],
  no: String(i + 1).padStart(2, "0"),
}));

/* ==========================================================================
   Shared content
   ========================================================================== */

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const CLIENTS = [
  {
    title: "Small Businesses",
    body: "Stay organized, understand your numbers, and build a stronger financial foundation.",
  },
  {
    title: "Growing Companies",
    body: "Get the accounting visibility and financial guidance needed to support sustainable growth.",
  },
  {
    title: "Entrepreneurs",
    body: "Spend less time worrying about financial administration and more time building the business.",
  },
  {
    title: "Established Businesses",
    body: "Improve financial visibility, reporting, and decision-making with dependable accounting support.",
  },
] as const;

export const VALUES = [
  { title: "Accuracy", body: "Reliable financial records built around precision and consistency." },
  { title: "Clarity", body: "Understand what your numbers actually mean for your business." },
  { title: "Reliability", body: "Dependable financial support you can count on when it matters." },
  { title: "Insight", body: "Turn financial information into better business decisions." },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Understand",
    body: "We learn about your business, your financial needs, and the challenges you are working through right now.",
    note: "A conversation, not a questionnaire.",
  },
  {
    n: "02",
    title: "Organize",
    body: "We establish a clear and reliable financial foundation, so every report that follows is built on records that agree.",
    note: "Scope confirmed before any work starts.",
  },
  {
    n: "03",
    title: "Analyze",
    body: "We turn financial information into useful insights — what changed, what it cost, and what it means for the months ahead.",
    note: "Reporting written to be read.",
  },
  {
    n: "04",
    title: "Advise",
    body: "We help you make informed decisions with greater confidence, and stay available through the year rather than at deadlines.",
    note: "Year-round access, not seasonal.",
  },
] as const;

/**
 * Trust signals. Only two figures here are real — the Google rating and its
 * review count — so the rest of the section is written as statements rather
 * than invented metrics. Do not add numbers to this list without a source.
 */
export const PROOF = [
  { label: "Rated on Google", value: `${BIZ.rating.toFixed(1)} / 5`, verified: true },
  { label: "Google reviews", value: String(BIZ.reviews), verified: true },
  { label: "Scope", value: "Confirmed before work begins", verified: false },
  { label: "Availability", value: "Year-round, not seasonal", verified: false },
] as const;

/**
 * Social profiles. Left empty because none were verified for this firm — the
 * footer renders the column only when there is something real to link to.
 * Add entries here and the markup follows.
 */
export const SOCIAL: { label: string; href: string }[] = [];

export const SERVICE_OPTIONS = [
  "Accounting services",
  "Bookkeeping",
  "Tax services",
  "Financial consulting",
  "Business advisory",
  "Financial reporting",
  "Not sure yet",
];
