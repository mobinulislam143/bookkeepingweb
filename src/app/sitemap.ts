import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/business";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/bookkeeping", priority: 0.9 },
  { path: "/tax-services", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BIZ.siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
