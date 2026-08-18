/**
 * Shared shape for the consultation form. Kept out of actions.ts because a
 * "use server" module may only export async functions — exporting a plain
 * constant from there yields `undefined` on the client.
 */
export type ConsultationState = {
  status: "idle" | "success" | "error";
  errors: Partial<Record<"name" | "email" | "phone" | "service", string>>;
  /** Echoed back so the success panel can name where we will follow up. */
  contact?: { email: string; phone: string };
  values?: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    text: boolean;
  };
};

export const EMPTY_STATE: ConsultationState = { status: "idle", errors: {} };
