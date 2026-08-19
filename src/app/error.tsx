"use client";

import { useEffect } from "react";
import { Button, Icon } from "@/components/ui";
import { DocPage } from "@/components/layout/DocPage";
import { BIZ } from "@/lib/business";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <DocPage
      eyebrow="Something went wrong"
      title="This page didn’t load."
      intro="Try again in a moment. If it keeps happening, call the office — we can take your details over the phone."
      actions={
        <>
          <Button onClick={reset}>Try again</Button>
          <Button href={BIZ.tel} variant="outline" iconLeft={<Icon name="phone" size={16} />}>
            {BIZ.phone}
          </Button>
        </>
      }
    />
  );
}
