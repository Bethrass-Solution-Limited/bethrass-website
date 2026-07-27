import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Blocks, Shield, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Selected Client Work | Bethrass",
  description:
    "Bethrass is building a disciplined record of verified client work, case studies, and delivered systems for institutional organizations.",
};

const engagementTypes = [
  "Verified client engagements",
  "Delivered business intelligence solutions",
  "Institutional digital infrastructure projects",
  "Analytics and decision-support implementations",
  "Software and data systems delivered for real organizations",
] as const;

const distinctionPoints = [
  {
    title: "Client delivery",
    description:
      "This section is reserved for work delivered for external organizations, with the presentation limited to verified and appropriately framed engagements.",
  },
  {
    title: "Bethrass initiatives",
    description:
      "Internal product directions and platform initiatives are presented separately through the company’s solutions and product narrative.",
  },
] as const;

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-slate-900 bg-slate-950/40 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Selected client work
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
                A company-facing section for verified client work, case studies, and delivered systems.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                Bethrass is building a disciplined record of client delivery across data, analytics, software, and institutional infrastructure. At this stage, the page is intentionally reserved for work that has been properly verified and presented with care.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/70 p-8">
              <p className="font-mono-brand text-xs uppercase tracking-[0.25em] text-stone-500">
                Current position
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-400">
                Case studies and client delivery examples will be published here as Bethrass develops and verifies new engagements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {engagementTypes.map((item) => (
              <div key={item} className="rounded-xl border border-slate-900 bg-slate-950/40 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-stone-400">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-8 md:p-10">
            <div className="max-w-3xl">
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Work in development
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                This section is intentionally reserved for verified delivery and documented client outcomes.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Bethrass does not present personal learning exercises, exploratory analyses, or internal product concepts as client case studies. The work published here will reflect real engagements, documented delivery, and clear professional context.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {distinctionPoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-slate-900 bg-slate-950/70 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                    {point.title === "Client delivery" ? (
                      <Shield className="h-5 w-5" />
                    ) : (
                      <Blocks className="h-5 w-5" />
                    )}
                  </div>
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
                Future client work
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl font-semibold text-stone-50">
              When verified, this section will document the work Bethrass delivers for organizations.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-400">
              The page is meant to support a clear and professional presentation of client engagements as Bethrass grows its delivery history and publishes case studies that are grounded in actual work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900"
              >
                View Bethrass initiatives
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
