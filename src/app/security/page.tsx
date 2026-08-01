import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Security | Bethrass",
  description: "Bethrass security commitments and the principles behind its trusted infrastructure approach.",
};

export default function SecurityPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Security</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Security is treated as a design requirement and operational principle.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              Bethrass’s systems and product direction prioritize integrity, resilience, auditability, and responsible handling of institutional information.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
