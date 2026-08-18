import type { Metadata } from "next";
import {
  ServiceDetailPage,
  type ServiceDetailContent,
} from "@/components/site/ServiceDetailPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bookkeeping Services in Jamaica, Queens",
  description:
    "Monthly bookkeeping for small businesses and self-employed people in Jamaica, Queens. Transactions categorized, accounts reconciled, and summaries you can read.",
  alternates: { canonical: "/bookkeeping" },
  openGraph: {
    title: "Bookkeeping that stays current — Samadhan Bookkeeping & Tax",
    description:
      "Monthly bookkeeping for small businesses and self-employed people in Jamaica, Queens.",
    url: "/bookkeeping",
  },
};

const content: ServiceDetailContent = {
  eyebrow: "Bookkeeping",
  title: "Books that stay current",
  lede: "Monthly bookkeeping for small businesses and self-employed people in Jamaica, Queens. Records categorized, accounts reconciled, and summaries you can actually read.",
  why: {
    title: "Why organized bookkeeping matters",
    body: [
      "Bookkeeping is the record of what actually happened in your business. When it is current, everything downstream gets easier: you can see the month, answer a lender’s question, and hand over a clean set of numbers at tax time.",
      "When it slips, the work does not disappear — it just piles up, usually into the least convenient week of the year.",
    ],
  },
  helps: [
    ["Transaction categorization", "Income and expenses sorted consistently, month after month."],
    ["Account reconciliation", "Bank and card activity matched to your records so the balances agree."],
    ["Monthly summaries", "A short read on what came in, what went out, and what changed."],
    ["Catch-up and cleanup", "Past months brought current before they turn into a bigger project."],
    ["Records organized for tax time", "The documents your return needs, gathered as the year goes."],
    ["Questions answered", "A person to ask when you are not sure how to record something."],
  ],
  forWho: [
    "Small business owners doing their own books and falling behind",
    "Freelancers and self-employed professionals with mixed personal and business activity",
    "New businesses setting up record-keeping for the first time",
    "Anyone who dreads opening the shoebox in March",
  ],
  faq: [
    {
      q: "How often would we work together?",
      a: "Most bookkeeping work runs monthly, so records never get more than a few weeks out of date. Quarterly or one-time cleanup arrangements are also possible.",
    },
    {
      q: "What do you need from me to start?",
      a: "Usually access to your bank and card statements, any invoices or receipts you keep, and a short conversation about how your business operates. We will give you a specific list before you start gathering anything.",
    },
    {
      q: "My books are months behind. Is that a problem?",
      a: "It is common. We start by getting the past periods current, then keep them that way going forward.",
    },
  ],
  whyImage: IMAGES.bookkeepingDetail,
  forWhoImage: IMAGES.bookkeepingHero,
};

export default function BookkeepingPage() {
  return <ServiceDetailPage content={content} />;
}
