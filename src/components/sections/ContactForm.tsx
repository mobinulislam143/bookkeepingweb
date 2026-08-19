"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button, Icon } from "@/components/ui";
import { submitConsultation } from "@/app/contact/actions";
import { EMPTY_STATE, type ConsultationState } from "@/app/contact/form-state";
import { BIZ, SERVICE_OPTIONS } from "@/lib/business";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      block
      disabled={pending}
      iconRight={pending ? undefined : <Icon name="arrow-right" size={18} />}
    >
      {pending ? "Sending…" : "Request a consultation"}
    </Button>
  );
}

/**
 * Text fields are uncontrolled: with JavaScript the browser keeps what was
 * typed across a failed submit, and without it the server's echoed values
 * supply defaultValue on the fresh render. Either way nothing is retyped.
 */
export function ContactForm() {
  const [state, formAction] = useActionState<ConsultationState, FormData>(
    submitConsultation,
    EMPTY_STATE
  );
  const alertRef = useRef<HTMLDivElement>(null);
  const echoed = state.values;

  useEffect(() => {
    if (state.status === "error") alertRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="card" style={{ display: "grid", gap: 20, boxShadow: "var(--shadow-3)" }}>
        <div className="notice notice--success">
          <b>Request received.</b>
          <span>
            We’ll follow up at {state.contact?.email}
            {state.contact?.phone ? ` or ${state.contact.phone}` : ""} within one business day. If
            it is urgent, call <a href={BIZ.tel}>{BIZ.phone}</a>.
          </span>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <h3 style={{ fontSize: "var(--fs-h4)" }}>What happens next</h3>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
            A short conversation about your records and timing, then a specific list of what to
            gather. Nothing to prepare before then.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="card"
      style={{ display: "grid", gap: 22, boxShadow: "var(--shadow-3)" }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <h2 style={{ fontSize: "var(--fs-h3)" }}>Request a consultation</h2>
        <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>
          Tell us where things stand. Required fields are marked.
        </p>
      </div>

      <div ref={alertRef} tabIndex={-1} style={{ outline: "none" }}>
        {state.status === "error" ? (
          <div className="notice notice--error" role="alert">
            <b>Check the highlighted fields.</b>
            <span>Nothing was sent yet.</span>
          </div>
        ) : null}
      </div>

      <div className="form-grid">
        <p className="field">
          <label htmlFor="c-name">Name *</label>
          <input
            id="c-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            defaultValue={echoed?.name ?? ""}
            aria-invalid={state.errors.name ? true : undefined}
            aria-describedby={state.errors.name ? "c-name-err" : undefined}
          />
          {state.errors.name ? (
            <span id="c-name-err" className="field__err">
              {state.errors.name}
            </span>
          ) : null}
        </p>

        <p className="field">
          <label htmlFor="c-email">Email *</label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            defaultValue={echoed?.email ?? ""}
            aria-invalid={state.errors.email ? true : undefined}
            aria-describedby={state.errors.email ? "c-email-err" : undefined}
          />
          {state.errors.email ? (
            <span id="c-email-err" className="field__err">
              {state.errors.email}
            </span>
          ) : null}
        </p>

        <p className="field">
          <label htmlFor="c-phone">Phone</label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(347) 000-0000"
            defaultValue={echoed?.phone ?? ""}
            aria-invalid={state.errors.phone ? true : undefined}
            aria-describedby={state.errors.phone ? "c-phone-err" : "c-phone-hint"}
          />
          {state.errors.phone ? (
            <span id="c-phone-err" className="field__err">
              {state.errors.phone}
            </span>
          ) : (
            <span id="c-phone-hint" className="field__hint">
              Optional, but faster.
            </span>
          )}
        </p>

        <p className="field">
          <label htmlFor="c-service">Service needed *</label>
          <select
            id="c-service"
            name="service"
            defaultValue={echoed?.service ?? ""}
            aria-invalid={state.errors.service ? true : undefined}
            aria-describedby={state.errors.service ? "c-service-err" : undefined}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {state.errors.service ? (
            <span id="c-service-err" className="field__err">
              {state.errors.service}
            </span>
          ) : null}
        </p>
      </div>

      <p className="field">
        <label htmlFor="c-message">Message</label>
        <textarea
          id="c-message"
          name="message"
          rows={4}
          placeholder="Where do your records stand right now?"
          defaultValue={echoed?.message ?? ""}
          aria-describedby="c-message-hint"
        />
        <span id="c-message-hint" className="field__hint">
          A sentence or two is plenty.
        </span>
      </p>

      <label className="checkbox" htmlFor="c-text">
        <input id="c-text" name="text" type="checkbox" defaultChecked={echoed?.text ?? false} />
        <span>It’s OK to text me at this number</span>
      </label>

      <div style={{ display: "grid", gap: 12 }}>
        <SubmitButton />
        <p style={{ fontSize: "var(--fs-xs)", color: "var(--text-faint)", textAlign: "center" }}>
          Prefer to talk? Call <a href={BIZ.tel}>{BIZ.phone}</a>.
        </p>
      </div>
    </form>
  );
}
