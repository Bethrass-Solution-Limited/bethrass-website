import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { type CompanyContentPage } from "@/constants/company";

export interface ContentPageLayoutProps {
  content: CompanyContentPage;
}

export function ContentPageLayout({ content }: ContentPageLayoutProps) {
  return (
    <main className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                {content.eyebrow}
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">{content.heroBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={content.ctaHref}
                  className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]"
                >
                  {content.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <Image
                src={content.illustration}
                alt={`${content.eyebrow} illustration`}
                width={960}
                height={720}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">{content.lastUpdated}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#BDBDBD]">
              {content.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#171717] p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">Interested in partnering with Bethrass?</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#BDBDBD]">
              Bethrass welcomes thoughtful conversations with institutions, partners, and people who care about dependable systems.
            </p>
            <div className="mt-8">
              <Link
                href={content.ctaHref}
                className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]"
              >
                {content.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ContentPageLayout;