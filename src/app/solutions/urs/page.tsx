import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Unified Record System | Bethrass",
  description:
    "Explore Bethrass’s Unified Record System concept for structured, verifiable institutional records and accountability.",
};

const architecturePoints = [
  "Identity and actor attribution",
  "Organization-level ownership and responsibility",
  "Verification and attestation",
  "Auditability and traceability",
  "Structured record lifecycle",
  "Secure data foundations",
] as const;

const distinctionPoints = [
  {
    title: "Who performed the action",
    description:
      "The individual or system actor responsible for initiating or completing the action.",
  },
  {
    title: "Which organization the action was performed for",
    description:
      "The institutional or organizational context in which the action was taken.",
  },
  {
    title: "What authority the actor had at the time",
    description:
      "The role or authority associated with the actor at the relevant point in time.",
  },
  {
    title: "Which institution bears responsibility",
    description:
      "The organization ultimately accountable for the record and its governance.",
  },
] as const;

const flowSteps = [
  "Identity",
  "Authority",
  "Action",
  "Verification",
  "Record",
  "Auditability",
] as const;

export default function UrsPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-slate-900 bg-slate-950/40 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Unified Record System
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
                A trusted digital record and data platform concept for institutional accountability.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                URS is Bethrass’s flagship product concept for structured, traceable, and verifiable institutional records. It is designed to help organizations manage records with greater clarity, stronger accountability, and more reliable verification.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/70 p-8">
              <p className="font-mono-brand text-xs uppercase tracking-[0.25em] text-stone-500">
                Product focus
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-400">
                The platform is conceived around connected identity, organizational attribution, verification, and auditability so records can be understood as durable institutional artifacts rather than isolated transactions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                The institutional problem
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                Fragmented records weaken trust and make accountability hard to demonstrate.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Many institutions struggle with records that are spread across disconnected systems, difficult to verify, and weakly linked to the people, roles, and organizations that gave them meaning. This creates uncertainty around history, integrity, and responsibility.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-8">
              <ul className="space-y-4 text-sm leading-relaxed text-stone-400">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  Fragmented records across multiple systems and processes
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  Limited traceability over how records were created or changed
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  Unclear accountability when institutional decisions are disputed
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  Difficulty verifying the integrity of important institutional history
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="max-w-3xl">
            <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
              Core architectural ideas
            </span>
            <h2 className="font-display text-3xl font-semibold text-stone-50">
              URS is designed around structured record integrity, not just storage.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-400">
              The architecture is intended to support the reliable representation of important institutional facts across the full record lifecycle. It centers on how records are created, attributed, verified, and retained with clear responsibility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {architecturePoints.map((point) => (
              <div key={point} className="rounded-xl border border-slate-900 bg-slate-950/40 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-stone-400">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-8 md:p-10">
            <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
              Accountability model
            </span>
            <h2 className="font-display text-3xl font-semibold text-stone-50">
              Distinguishing actor identity from organizational responsibility.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-400">
              A core requirement for the platform is to distinguish clearly between the person or system acting, the institution for which the action was taken, the authority the actor had at the time, and the organization that ultimately bears accountability. The current architecture has historically represented actor identity and organization attribution. Authority-at-time-of-action is an identified architectural gap under review and is not presented here as an already-implemented capability.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {distinctionPoints.map((point) => (
                <div key={point.title} className="rounded-lg border border-slate-900 bg-slate-950/70 p-5">
                  <h3 className="font-display text-lg font-semibold text-stone-200">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-slate-900 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                <Workflow className="h-5 w-5" />
              </div>
              <span className="font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Conceptual workflow
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl font-semibold text-stone-50">
              Identity → Authority → Action → Verification → Record → Auditability
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-400">
              This flow reflects the intended conceptual model for how institutional actions are represented, validated, preserved, and reviewed over time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {flowSteps.map((step, index) => (
                <div key={step} className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-stone-300">
                  {step}
                  {index < flowSteps.length - 1 ? <span className="ml-2 text-stone-500">→</span> : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Current status
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                URS remains in architecture, documentation, and MVP preparation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                URS is currently positioned as a platform concept and an active architecture and documentation effort, with MVP preparation underway. It is not presented here as a fully deployed production system, and no customer, deployment, certification, partnership, or performance claims are included.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-8">
              <p className="text-sm leading-relaxed text-stone-400">
                Bethrass is continuing to develop the architectural foundation for trusted institutional records and the operating principles that support them.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900"
              >
                Learn about Bethrass
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
