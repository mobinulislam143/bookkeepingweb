import type { Metadata } from "next";
import { DocPage } from "@/components/layout/DocPage";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms covering use of the ${BIZ.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <DocPage eyebrow="Legal" title="Terms of Use">
      <div className="notice notice--error" style={{ background: "var(--accent-tint)", borderColor: "var(--accent-soft)", color: "var(--accent-ink)" }}>
        <b>Draft notice.</b>
        <span>
          These terms have not been reviewed by counsel. Replace them with terms prepared for
          {" "}{BIZ.name} before the site goes live.
        </span>
      </div>
      <h2>About this site</h2>
      <p className="prose">
        The content here describes the services offered and is general information only. It is not
        tax or legal advice, and it does not create a client relationship. Your circumstances may
        change what applies.
      </p>
      <h2>Questions</h2>
      <p className="prose">Call {BIZ.phone}.</p>
    </DocPage>
  );
}
