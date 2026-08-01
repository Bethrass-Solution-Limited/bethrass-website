import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms | Bethrass",
  description: "Bethrass website terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Terms</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Bethrass website terms are structured around clarity, professionalism, and responsible use.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              These terms govern the use of Bethrass’s public digital surfaces and the information presented through them.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
