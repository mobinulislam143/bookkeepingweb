import type { Metadata } from "next";
import {
  ServiceDetailPage,
  type ServiceDetailContent,
} from "@/components/site/ServiceDetailPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tax Preparation in Jamaica, Queens",
  description:
    "Individual and small business tax preparation in Jamaica, Queens — built on organized records, with a clear checklist of what to gather before we start.",
  alternates: { canonical: "/tax-services" },
  openGraph: {
    title: "Tax preparation without the scramble — Samadhan Bookkeeping & Tax",
    description:
      "Individual and small business tax preparation in Jamaica, Queens, built on organized records.",
    url: "/tax-services",
  },
};

const content: ServiceDetailContent = {
  eyebrow: "Tax Services",
  title: "Tax preparation without the scramble",
  lede: "Individual and business tax preparation built on organized records — with a clear list of what to gather and plain answers about the paperwork.",
  why: {
    title: "Most tax stress is a paperwork problem",
    body: [
      "Filing goes smoothly when the information is complete and organized before anyone starts on the return. Most of the friction people feel at tax time is not the return itself — it is hunting for documents and guessing what counts.",
      "We tell you what to gather, review what you send, and prepare the return from records that agree with each other.",
    ],
  },
  helps: [
    ["Individual tax preparation", "Returns prepared from the documents you provide, with questions raised early."],
    ["Small business tax preparation", "Business returns built on your books for the year."],
    ["Document checklist", "A specific list of what to gather, sent before you start."],
    ["Review of what you send", "We flag what appears to be missing rather than filing around a gap."],
    ["Clear communication", "What the numbers on the form mean, in plain language."],
    ["Year-round organization", "Bookkeeping through the year so next filing is a review."],
  ],
  forWho: [
    "Individuals who want their return prepared carefully rather than quickly",
    "Small business owners filing business and personal returns",
    "Freelancers with 1099 income and business expenses to sort out",
    "Anyone who has filed late or with incomplete records before",
  ],
  faq: [
    {
      q: "What should I prepare before a consultation?",
      a: "Last year’s return if you have it, income documents you have received, and a rough sense of your expenses. If you are not sure what applies, come as you are — the first conversation is partly about identifying that.",
    },
    {
      q: "Do you handle individual returns as well as business returns?",
      a: "Yes. Individual tax preparation is a core part of the practice, alongside small business work.",
    },
    {
      q: "Can you tell me what I will owe before we start?",
      a: "Not reliably, and we will not guess. Once the information is complete, the numbers speak for themselves.",
    },
  ],
  note: "We prepare returns and organize the information behind them. We do not advertise credentials, representation, or outcomes that have not been confirmed — if you need something outside that scope, we will say so directly. Nothing on this page is tax or legal advice.",
  whyImage: IMAGES.taxDetail,
  forWhoImage: IMAGES.taxHero,
};

export default function TaxServicesPage() {
  return <ServiceDetailPage content={content} />;
}
