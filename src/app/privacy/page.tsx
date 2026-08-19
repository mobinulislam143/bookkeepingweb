import type { Metadata } from "next";
import { DocPage } from "@/components/layout/DocPage";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BIZ.name} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <DocPage eyebrow="Legal" title="Privacy Policy">
      <div className="notice notice--error" style={{ background: "var(--accent-tint)", borderColor: "var(--accent-soft)", color: "var(--accent-ink)" }}>
        <b>Draft notice.</b>
        <span>
          This policy has not been reviewed by counsel. Replace it with one prepared for
          {" "}{BIZ.name} before the site goes live. Nothing here is a binding statement.
        </span>
      </div>
      <h2>What the form collects</h2>
      <p className="prose">
        The consultation form on this site collects the name, email address, phone number, selected
        service, and message you choose to provide. That information is used to respond to your
        request.
      </p>
      <h2>Questions</h2>
      <p className="prose">
        To ask about information you have sent, call {BIZ.phone} or write to {BIZ.street},{" "}
        {BIZ.cityLine}.
      </p>
    </DocPage>
  );
}
