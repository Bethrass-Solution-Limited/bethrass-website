import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binary, Database, Shield, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Bethrass Solutions | Trusted Infrastructure and Initiatives",
  description:
    "Explore Bethrass initiatives in trusted infrastructure, analytics, and institutional technology.",
};

const initiatives = [
  {
    title: "Unified Record System (URS)",
    eyebrow: "Flagship infrastructure",
    summary:
      "A trusted verification layer for lifelong academic, professional, and institutional records, designed to strengthen integrity and confidence in important credentials.",
    route: "/solutions/urs",
    accent: "amber",
    icon: Shield,
  },
  {
    title: "Land Identification Number (LIN)",
    eyebrow: "Registry architecture",
    summary:
      "A foundational framework for standardizing and resolving land-related identity and ownership references with greater structure, traceability, and clarity.",
    route: "/solutions",
    accent: "slate",
    icon: Database,
  },
  {
    title: "Bethrass Analytics Studio",
    eyebrow: "Intelligence and operations",
    summary:
      "A platform direction for operational analytics, structured insight, and data-driven decision support for complex institutional environments.",
    route: "/solutions",
    accent: "slate",
    icon: Binary,
  },
  {
    title: "Bethrass Academy",
    eyebrow: "Capacity and capability",
    summary:
      "A focused initiative for building technical capacity, strengthening engineering practice, and supporting teams in adopting secure and reliable systems.",
    route: "/solutions",
    accent: "slate",
    icon: Sparkles,
  },
] as const;

export default function SolutionsPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-slate-900 bg-slate-950/40 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
              Bethrass solutions
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
              A focused portfolio of initiatives for trusted institutional systems.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Bethrass develops a portfolio of initiatives that address the need for secure identity, reliable data handling, institutional trust, and clear operational intelligence.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div key={initiative.title} className="flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-950/40 p-8">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className={`rounded border px-2.5 py-1 font-mono-brand text-[10px] uppercase tracking-[0.2em] ${initiative.accent === "amber" ? "border-amber-500/20 bg-amber-500/5 text-amber-500" : "border-slate-800 bg-slate-900 text-stone-400"}`}>
                        {initiative.eyebrow}
                      </span>
                      <span className="font-mono-brand text-xs text-stone-600">SYS // {initiative.title.split(" ")[0].toUpperCase()}</span>
                    </div>

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-stone-50">{initiative.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-stone-400">{initiative.summary}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={initiative.route}
                      className={`inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${initiative.accent === "amber" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "border border-slate-700 bg-slate-900/50 text-stone-200 hover:bg-slate-900"}`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-slate-900 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900 p-8 md:p-10">
            <div className="max-w-3xl">
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                Delivery approach
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                Each initiative reflects Bethrass’s broader commitment to dependable systems.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                These efforts are presented as part of a long-term direction focused on trusted infrastructure, maintainable architecture, and clear operational intelligence. Some initiatives are more mature than others, and each is shaped by the same design principles: transparency, traceability, resilience, and practical institutional value.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
