import type { Metadata } from "next";
import { Button, Icon } from "@/components/ui";
import { DocPage } from "@/components/layout/DocPage";
import { BIZ } from "@/lib/business";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <DocPage
      eyebrow="404"
      title="This page isn’t here."
      intro="The link may be out of date. Start from the homepage, or call the office and we’ll point you to what you were looking for."
      actions={
        <>
          <Button href="/" iconRight={<Icon name="arrow-right" size={17} />}>
            Back to home
          </Button>
          <Button href={BIZ.tel} variant="outline" iconLeft={<Icon name="phone" size={16} />}>
            {BIZ.phone}
          </Button>
        </>
      }
    />
  );
}
