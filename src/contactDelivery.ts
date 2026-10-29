export const CONTACT_ENDPOINT = "https://formspree.io/f/moeelprg";
export type ContactField = "name" | "email" | "message";
export type DeliveryResult =
  | { ok: true }
  | {
      ok: false;
      message: string;
      fields: Partial<Record<ContactField, string>>;
    };

export async function deliverContact(
  data: FormData,
  signal: AbortSignal,
  transport: typeof fetch = fetch,
): Promise<DeliveryResult> {
  const response = await transport(CONTACT_ENDPOINT, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
    signal,
  });
  if (response.ok) return { ok: true };
  const fields: Partial<Record<ContactField, string>> = {};
  const payload: unknown = await response.json().catch(() => null);
  if (
    payload &&
    typeof payload === "object" &&
    "errors" in payload &&
    Array.isArray(payload.errors)
  ) {
    for (const error of payload.errors) {
      if (!error || typeof error !== "object") continue;
      if (error.field === "email")
        fields.email = "Please enter a valid email address.";
      if (error.field === "message")
        fields.message = "Please check your message and try again.";
      if (error.field === "name")
        fields.name = "Please check the name you entered.";
    }
  }
  return {
    ok: false,
    fields,
    message:
      response.status === 429
        ? "Too many attempts. Please wait a little before trying again."
        : Object.keys(fields).length
          ? "Please check the highlighted fields. Your message has not been sent."
          : "Your message could not be sent. Please try again later.",
  };
}
