"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormState = {
  email: "",
  name: "",
};

type FormState = typeof initialFormState;
type FormStatus = "idle" | "submitting" | "success" | "error";
type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(values: FormState) {
  const errors: FormErrors = {};

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please use a valid email address.";
  }

  return errors;
}

export function NewsletterSection() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result && typeof result === "object" && "errors" in result && result.errors) {
          setErrors(result.errors as FormErrors);
          setStatus("error");
          setMessage("Please correct the highlighted fields and try again.");
          return;
        }

        const errorText = typeof result.error === "string" ? result.error : "Unable to submit. Please try again later.";
        throw new Error(errorText);
      }

      setStatus("success");
      setMessage("You’re subscribed. We’ll keep you informed with updates from Bethrass.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit. Please try again later.");
    }
  };

  return (
    <div className="rounded-3xl border border-slate-900 bg-[#111111] p-6 md:p-8 lg:max-w-xl">
      <div className="mb-6">
        <p className="font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Join the Bethrass newsletter
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Get institutional systems insight and updates.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BDBDBD]">
          Subscribe for occasional updates on trusted infrastructure, analytics, and enterprise systems.
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="space-y-3">
            <label htmlFor="newsletter-email" className="text-sm font-medium text-white">
              Email address <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "newsletter-email-error" : undefined}
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
            {errors.email ? (
              <p id="newsletter-email-error" className="text-sm text-[#BDBDBD]">
                {errors.email}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-full w-full items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E0BE44] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting…" : "Subscribe"}
          </button>
        </div>

        <div className="space-y-3">
          <div className="space-y-3">
            <label htmlFor="newsletter-name" className="text-sm font-medium text-white">
              Name <span className="text-[#BDBDBD]">(optional)</span>
            </label>
            <input
              id="newsletter-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          {message ? (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white"
                  : "border-white/10 bg-[#111111] text-[#BDBDBD]"
              }`}
            >
              {message}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
