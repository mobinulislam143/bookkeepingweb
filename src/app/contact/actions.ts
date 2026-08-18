"use server";

import { SERVICE_OPTIONS } from "@/lib/business";
import type { ConsultationState } from "./form-state";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * INTEGRATION POINT — this is the only place delivery needs wiring.
 *
 * Right now a validated request is recorded in the server log so nothing is
 * silently dropped. Replace the body with your email service, CRM, or database
 * write (Resend, Postmark, a Vercel Marketplace integration, etc.) and the rest
 * of the form keeps working unchanged.
 */
async function deliverConsultationRequest(payload: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  okToText: boolean;
}) {
  console.info("[consultation request]", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });
}

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const okToText = formData.get("text") === "on";

  const values = { name, email, phone, service, message, text: okToText };
  const errors: ConsultationState["errors"] = {};

  if (!name) errors.name = "Enter your name so we know who we are calling.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (phone && phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a 10-digit phone number, or leave it blank.";
  }
  if (!service) errors.service = "Pick the closest service — we can adjust later.";
  else if (!SERVICE_OPTIONS.includes(service)) errors.service = "Pick one of the listed services.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  await deliverConsultationRequest({ name, email, phone, service, message, okToText });

  return { status: "success", errors: {}, contact: { email, phone } };
}
