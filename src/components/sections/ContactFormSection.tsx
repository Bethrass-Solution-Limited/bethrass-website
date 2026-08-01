"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, CircleAlert, LoaderCircle, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const initialFormState = {
  fullName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  _gotcha: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";
type FormState = typeof initialFormState;
type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(values: FormState) {
  const errors: FormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 5) {
    errors.subject = "Please provide a subject with at least 5 characters.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share at least 20 characters so we can understand your enquiry.";
  }

  return errors;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setFeedback("Please correct the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
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
          setFeedback("Please correct the highlighted fields and try again.");
          return;
        }

        const serverError = typeof result.error === "string" ? result.error : "Submission failed. Please try again.";
        throw new Error(serverError);
      }

      setStatus("success");
      setFeedback("Thank you. Your enquiry has been sent successfully.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "There was an issue sending your enquiry. Please try again later."
      );
    }
  };

  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Contact Bethrass Solution Limited
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Partner with Bethrass on trusted digital infrastructure and institutional systems.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
                Use the form below for product, partnership, or institutional enquiries. Each message is reviewed by the Bethrass team with care and context.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <Image
                src="/illustrations/enterprise-security.svg"
                alt="Bethrass security and infrastructure illustration"
                width={960}
                height={720}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#171717] p-8 md:p-10"
            >
              <div className="sr-only">
                <label htmlFor="_gotcha">Leave this field blank</label>
                <input
                  id="_gotcha"
                  name="_gotcha"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  value={formData._gotcha}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#111111] text-[#D4AF37]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white">Send a message</h2>
                  <p className="text-sm text-[#BDBDBD]">We will review your enquiry and follow up as appropriate.</p>
                </div>
              </div>

              {feedback ? (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-6 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white"
                      : "border-white/10 bg-[#111111] text-[#BDBDBD]"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  ) : (
                    <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  )}
                  <span>{feedback}</span>
                </div>
              ) : null}

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white">
                    Full name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    aria-required="true"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className="w-full rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.fullName ? (
                    <p id="fullName-error" className="mt-2 text-sm text-[#BDBDBD]">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    Email address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-sm text-[#BDBDBD]">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="organization" className="mb-2 block text-sm font-medium text-white">
                    Organization <span className="text-sm text-[#BDBDBD]">(optional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company or institution"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                    Subject <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Tell us what you’re enquiring about"
                    required
                    aria-required="true"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className="w-full rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.subject ? (
                    <p id="subject-error" className="mt-2 text-sm text-[#BDBDBD]">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    Message <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Describe your enquiry, project, or partnership interest"
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-2 text-sm text-[#BDBDBD]">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[#BDBDBD]">Required fields are marked with an asterisk.</p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Sending enquiry
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">
                <h3 className="font-display text-xl font-semibold text-white">Company contact information</h3>
                <dl className="mt-6 space-y-4 text-sm text-[#BDBDBD]">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${siteConfig.contactEmail}`} className="text-white transition-colors hover:text-[#D4AF37]">
                        {siteConfig.contactEmail}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Location</dt>
                    <dd className="mt-1">{siteConfig.location.locality}, {siteConfig.location.region}, {siteConfig.location.country}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Primary focus</dt>
                    <dd className="mt-1">Trusted infrastructure, records, analytics, and responsible institutional systems.</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#171717] p-8">
                <h3 className="font-display text-xl font-semibold text-white">Frequently asked questions</h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#BDBDBD]">
                  <div>
                    <h4 className="font-semibold text-white">What kinds of enquiries do you accept?</h4>
                    <p className="mt-1">Product discussions, partnerships, institutional planning, and early-stage collaboration conversations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">How quickly will we respond?</h4>
                    <p className="mt-1">Most enquiries are reviewed within a standard business response window.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Is the contact form the only option?</h4>
                    <p className="mt-1">You may also email the Bethrass team directly at {siteConfig.contactEmail}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">Partner with Bethrass</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#BDBDBD]">
              Bethrass welcomes thoughtful conversations with institutions, technology leaders, and organizations planning durable digital infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]">
                Explore products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]">
                Email Bethrass
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
