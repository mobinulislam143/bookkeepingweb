import { Button, Icon } from "@/components/ds";
import { BIZ } from "@/lib/business";

/** Fixed Call + Schedule bar, shown under 720px. Hidden above by CSS. */
export function MobileBar() {
  return (
    <div className="mobile-bar" aria-label="Quick actions">
      <Button
        variant="secondary"
        href={BIZ.tel}
        iconLeft={<Icon name="phone" size={16} />}
        style={{ flex: 1, background: "var(--white)" }}
      >
        Call
      </Button>
      <Button variant="accent" href="/contact" style={{ flex: 1.4 }}>
        Schedule
      </Button>
    </div>
  );
}
