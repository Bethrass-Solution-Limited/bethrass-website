import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Company | Bethrass",
  description: "Learn about Bethrass and its focus on trusted infrastructure, intelligence, and institutional systems.",
};

export default function CompanyPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Company</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Bethrass builds dependable systems for institutions that require clarity, accountability, and long-term trust.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              The company operates at the intersection of infrastructure, records, analytics, and capability-building. Its work is grounded in technical discipline and the belief that trusted systems must be designed with care.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
