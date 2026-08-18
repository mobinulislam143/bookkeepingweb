/**
 * Verified business information only.
 * Nothing here may be added to without a confirmed source — no years in
 * business, no credentials, no awards, no invented statistics.
 */
export const BIZ = {
  name: "Samadhan Bookkeeping & Tax",
  shortName: "Samadhan",
  street: "86-75 Midland Pkwy",
  city: "Jamaica",
  state: "NY",
  zip: "11432",
  cityLine: "Jamaica, NY 11432",
  phone: "(347) 444-3222",
  tel: "tel:+13474443222",
  rating: 5.0,
  reviews: 2,
  /** Set this once the site is live so metadata and JSON-LD resolve absolute URLs. */
  siteUrl: "https://samadhanbookkeeping.com",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/bookkeeping", label: "Bookkeeping" },
  { href: "/tax-services", label: "Tax Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_OPTIONS = [
  "Bookkeeping",
  "Tax preparation",
  "Accounting support",
  "Small business support",
  "Not sure yet",
];
