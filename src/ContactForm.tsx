import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { CONTACT_ENDPOINT, deliverContact } from "./contactDelivery";
import type { ContactField } from "./contactDelivery";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Partial<Record<ContactField, string>>>(
    {},
  );
  const inFlight = useRef(false);
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => request.current?.abort(), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    inFlight.current = true;
    const controller = new AbortController();
    request.current = controller;
    setStatus("sending");
    setFields({});
    setError("");
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 20000);
    try {
      const result = await deliverContact(data, controller.signal);
      if (controller.signal.aborted) return;
      if (result.ok) {
        form.reset();
        setStatus("success");
      } else {
        setFields(result.fields);
        setError(result.message);
        setStatus("error");
      }
    } catch {
      // A network failure may occur after delivery; never automatically resend.
      if (!controller.signal.aborted || timedOut) {
        setError(
          "We couldn’t confirm delivery. Your message is still here. Please check your connection and try again later.",
        );
        setStatus("error");
      }
    } finally {
      window.clearTimeout(timeout);
      request.current = null;
      inFlight.current = false;
    }
  }
  function clearField(field: ContactField) {
    if (fields[field])
      setFields((previous) => ({ ...previous, [field]: undefined }));
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <span>Start a conversation</span>
        <ArrowUpRight size={23} aria-hidden="true" />
      </div>
      {status === "success" ? (
        <div className="contact-success">
          <div role="status">
            <span className="contact-success-icon" aria-hidden="true">
              <Check size={24} />
            </span>
            <h3>Message received.</h3>
            <p>
              Thanks for reaching out to Maestral. We’ll reply to the email
              address you provided.
            </p>
          </div>
          <button
            type="button"
            className="contact-send"
            onClick={() => setStatus("idle")}
          >
            Send another message <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <form
          action={CONTACT_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-title"
          aria-busy={status === "sending"}
        >
          <h3 id="contact-form-title">What are you working on?</h3>
          <fieldset disabled={status === "sending"} className="contact-fields">
            <legend className="sr-only">
              Your contact details and message
            </legend>
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name <span>(optional)</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Your name"
                  aria-invalid={Boolean(fields.name)}
                  aria-describedby={
                    fields.name ? "contact-name-error" : undefined
                  }
                  onChange={() => clearField("name")}
                />
                {fields.name && (
                  <p id="contact-name-error" className="contact-field-error">
                    {fields.name}
                  </p>
                )}
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email <span>(required)</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                  aria-invalid={Boolean(fields.email)}
                  aria-describedby={
                    fields.email ? "contact-email-error" : undefined
                  }
                  onChange={() => clearField("email")}
                />
                {fields.email && (
                  <p id="contact-email-error" className="contact-field-error">
                    {fields.email}
                  </p>
                )}
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">
                Message <span>(required)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={5000}
                placeholder="Tell us about your idea, project, or question…"
                aria-invalid={Boolean(fields.message)}
                aria-describedby={
                  fields.message
                    ? "contact-message-hint contact-message-error"
                    : "contact-message-hint"
                }
                onChange={() => clearField("message")}
              />
              <p id="contact-message-hint" className="contact-field-hint">
                10–5,000 characters. Please leave out passwords, payment
                details, and sensitive information.
              </p>
              {fields.message && (
                <p id="contact-message-error" className="contact-field-error">
                  {fields.message}
                </p>
              )}
            </div>
            <input
              type="hidden"
              name="_subject"
              value="Maestral Technologies — website inquiry"
            />
          </fieldset>
          {status === "error" && (
            <p className="contact-form-error" role="alert">
              {error}
            </p>
          )}
          <p className="contact-privacy-note">
            We use your details to respond to your inquiry. Messages are
            processed via Formspree.{" "}
            <a href="#privacy-policy" target="_blank" rel="noreferrer">
              Privacy Policy
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="contact-send"
          >
            {status === "sending" ? (
              <>
                Sending…{" "}
                <LoaderCircle
                  size={18}
                  className="contact-spinner"
                  aria-hidden="true"
                />
              </>
            ) : (
              <>
                Send message <ArrowUpRight size={18} aria-hidden="true" />
              </>
            )}
          </button>
          <span className="sr-only" role="status">
            {status === "sending" ? "Sending your message. Please wait." : ""}
          </span>
        </form>
      )}
    </div>
  );
}
