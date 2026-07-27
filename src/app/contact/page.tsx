import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Bethrass | Institutional Technology Enquiries",
  description:
    "Get in touch with Bethrass Solution Limited for enquiries about trusted infrastructure, analytics, and institutional technology.",
};

const pathways = [
  {
    title: "General enquiries",
    description:
      "For introductions, broad conversations, and initial discussions about Bethrass’s work and direction.",
    actionLabel: "Email Bethrass",
    href: `mailto:${siteConfig.contactEmail}`,
    icon: Mail,
  },
  {
    title: "Technology and product partnerships",
    description:
      "For conversations about institutional digital infrastructure, digital records, trusted systems, and related product collaboration.",
    actionLabel: "Explore the Unified Record System",
    href: "/solutions/urs",
    icon: Shield,
  },
  {
    title: "Institutional and enterprise conversations",
    description:
      "For organizations exploring secure data foundations, enterprise software direction, and intelligent systems initiatives.",
    actionLabel: "View the solutions overview",
    href: "/solutions",
    icon: MessageCircle,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-slate-900 bg-slate-950/40 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-amber-500">
              Contact Bethrass Solution Limited
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
              Partner with Bethrass on trusted digital infrastructure and institutional systems.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Organizations can reach out to Bethrass to discuss technology partnerships, institutional digital infrastructure, the Unified Record System, data and intelligent systems, and other relevant collaboration opportunities.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <div key={pathway.title} className="flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-950/40 p-8">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-amber-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-stone-200">{pathway.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400">{pathway.description}</p>
                  </div>

                  <Link
                    href={pathway.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900"
                  >
                    {pathway.actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                Direct contact
              </span>
              <h2 className="font-display text-3xl font-semibold text-stone-50">
                Reach Bethrass directly by email.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                For direct conversations and partnership enquiries, please contact {siteConfig.contactEmail}. The Unified Record System remains an active architecture and MVP-preparation effort, and discussions can be tailored accordingly.
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                Email {siteConfig.contactEmail}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
