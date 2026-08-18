"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  Button,
  Card,
  Checkbox,
  Field,
  FormStatus,
  Input,
  Select,
  Textarea,
} from "@/components/ds";
import { submitConsultation } from "@/app/contact/actions";
import { EMPTY_STATE, type ConsultationState } from "@/app/contact/form-state";
import { BIZ, SERVICE_OPTIONS } from "@/lib/business";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="accent" size="lg" type="submit" fullWidth disabled={pending}>
      {pending ? "Sending…" : "Request a Consultation"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ConsultationState, FormData>(
    submitConsultation,
    EMPTY_STATE
  );
  const errorRef = useRef<HTMLDivElement>(null);

  // Text fields are uncontrolled: with JS the browser keeps what was typed
  // across a failed submit, and without JS the server's echoed values supply
  // defaultValue on the fresh render. Either way nothing is retyped.
  const echoed = state.values;

  // The checkbox needs state because its box is custom-painted.
  const [okToText, setOkToText] = useState(echoed?.text ?? false);

  // Move focus to the error summary so a failure is announced, not just shown.
  useEffect(() => {
    if (state.status === "error") errorRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <Card padding="lg" style={{ display: "grid", gap: "var(--space-5)" }}>
        <FormStatus
          state="success"
          title="Request received."
          message={`We'll follow up at ${state.contact?.email}${
            state.contact?.phone ? ` or ${state.contact.phone}` : ""
          } within one business day. If it is urgent, call ${BIZ.phone}.`}
        />
        <div style={{ display: "grid", gap: 8 }}>
          <h3 style={{ fontSize: "var(--fs-heading-3)" }}>What happens next</h3>
          <p
            style={{
              fontSize: "var(--fs-body-sm)",
              color: "var(--text-muted)",
              lineHeight: "var(--lh-body)",
            }}
          >
            A short conversation about your records and timing, then a specific list of what to
            gather. Nothing to prepare before then.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card
      padding="lg"
      as="form"
      action={formAction}
      noValidate
      style={{ display: "grid", gap: "var(--space-5)" }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <h2 style={{ fontSize: "var(--fs-heading-2)" }}>Request a consultation</h2>
        <p style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>
          Tell us where things stand. Required fields are marked.
        </p>
      </div>

      <div ref={errorRef} tabIndex={-1} style={{ outline: "none" }}>
        {state.status === "error" ? (
          <FormStatus
            state="error"
            title="Check the highlighted fields."
            message="Nothing was sent yet."
          />
        ) : null}
      </div>

      <div
        className="form-row"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}
      >
        <Field label="Name" htmlFor="c-name" required error={state.errors.name}>
          <Input
            id="c-name"
            name="name"
            defaultValue={echoed?.name ?? ""}
            invalid={!!state.errors.name}
            describedBy={state.errors.name ? "c-name-error" : undefined}
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Email" htmlFor="c-email" required error={state.errors.email}>
          <Input
            id="c-email"
            name="email"
            type="email"
            defaultValue={echoed?.email ?? ""}
            invalid={!!state.errors.email}
            describedBy={state.errors.email ? "c-email-error" : undefined}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>

        <Field
          label="Phone"
          htmlFor="c-phone"
          hint="Optional, but faster."
          error={state.errors.phone}
        >
          <Input
            id="c-phone"
            name="phone"
            type="tel"
            defaultValue={echoed?.phone ?? ""}
            invalid={!!state.errors.phone}
            describedBy={state.errors.phone ? "c-phone-error" : "c-phone-hint"}
            placeholder="(347) 000-0000"
            autoComplete="tel"
          />
        </Field>

        <Field label="Service needed" htmlFor="c-service" required error={state.errors.service}>
          <Select
            id="c-service"
            name="service"
            defaultValue={echoed?.service ?? ""}
            invalid={!!state.errors.service}
            describedBy={state.errors.service ? "c-service-error" : undefined}
            placeholder="Select a service"
            options={SERVICE_OPTIONS}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="c-message" hint="A sentence or two is plenty.">
        <Textarea
          id="c-message"
          name="message"
          rows={5}
          defaultValue={echoed?.message ?? ""}
          describedBy="c-message-hint"
          placeholder="Where do your records stand right now?"
        />
      </Field>

      <Checkbox
        id="c-text"
        name="text"
        label="It’s OK to text me at this number"
        checked={okToText}
        onChange={(e) => setOkToText(e.target.checked)}
      />

      <div style={{ display: "grid", gap: 12 }}>
        <SubmitButton />
        <p style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)", textAlign: "center" }}>
          Prefer to talk? Call <a href={BIZ.tel}>{BIZ.phone}</a>.
        </p>
      </div>
    </Card>
  );
}
