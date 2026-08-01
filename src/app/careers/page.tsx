import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Careers | Bethrass",
  description: "Explore Bethrass career opportunities and the kind of technical work the company values.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Careers</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Bethrass seeks people who are thoughtful, technical, and committed to building trustworthy systems.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              The company values disciplined engineering, clear thinking, and a serious approach to institutional technology.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
