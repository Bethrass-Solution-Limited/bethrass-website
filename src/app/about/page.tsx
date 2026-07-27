import Link from "next/link";
import { ArrowRight, Cpu, Database, Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    title: "Trusted digital infrastructure",
    description:
      "We build systems that support identity, verification, and accountability with strong architectural discipline and clear operational integrity.",
    icon: Shield,
  },
  {
    title: "Enterprise software",
    description:
      "We design resilient software for complex organizations, focusing on maintainability, governance, and dependable delivery.",
    icon: Cpu,
  },
  {
    title: "Secure intelligent systems",
    description:
      "We apply careful systems thinking to data, analytics, and automation so institutions can operate with greater clarity and control.",
    icon: Database,
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-slate-900 bg-slate-950/40 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
                About Bethrass Solution Limited
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
                Building trusted systems for institutions that must operate with confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
                {siteConfig.legalName} exists to help organizations move from fragmented digital processes to dependable, transparent, and secure operating environments.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <p className="font-mono-brand text-xs uppercase tracking-[0.25em] text-stone-500">
                Our purpose
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-400">
                We combine engineering discipline, secure architecture, and practical delivery to support institutions that need resilient digital infrastructure.
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
                Who we are
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                A technology partner for modern institutional delivery.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Bethrass Solution Limited brings together engineering discipline, secure systems thinking, and practical implementation strategy. We support organizations that need resilient digital infrastructure and dependable operating models as they scale.
              </p>
            </div>

            <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-8">
              <p className="text-sm leading-relaxed text-stone-400">
                Our work is grounded in the belief that trustworthy technology must be built on strong foundations: clear process design, rigorous validation, secure data handling, and a long-term view of system integrity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="max-w-3xl">
            <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
              The problem we solve
            </span>
            <h2 className="font-display text-3xl font-semibold text-stone-50">
              Institutions need systems that are secure, auditable, and ready for growth.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-400">
              Many organizations face a tension between operational urgency and architectural discipline. Legacy processes, disconnected tools, and unclear data flows can make essential work slower, less transparent, and harder to trust. Bethrass works to reduce that friction by designing systems that are dependable from the start.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-xl border border-slate-900 bg-slate-950/40 p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-200">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{pillar.description}</p>
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
                Our direction
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                A long-term commitment to trusted infrastructure and intelligent systems.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Bethrass is building toward a future where institutions can rely on secure digital records, practical intelligence, and resilient data systems as part of everyday operations. Our current initiatives include the Unified Record System, the Land Identification Number framework, Bethrass Analytics Studio, and Bethrass Academy, each reflecting the same commitment to trust, clarity, and dependable execution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/solutions/urs"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                Explore the Unified Record System
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900"
              >
                View our initiatives
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
