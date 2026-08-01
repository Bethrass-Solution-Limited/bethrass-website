import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy | Bethrass",
  description: "Bethrass privacy commitments and information handling principles.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Privacy</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Privacy is treated as a core part of system design and responsible operations.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              Bethrass handles information with care, applies appropriate safeguards, and follows responsible data practices aligned to the trust model behind its products and services.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
