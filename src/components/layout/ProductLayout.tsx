import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductStatusBadge } from "@/components/ui/ProductStatusBadge";
import {
  type ProductArchitectureSection,
  type ProductContactSection,
  type ProductFeaturesSection,
  type ProductHeroSection,
  type ProductMeta,
  type ProductProblemSection,
  type ProductRoadmapSection,
  type ProductSolutionSection,
  type ProductStatusSection,
} from "@/constants/products";

export interface ProductLayoutProps {
  product: ProductMeta;
  hero: ProductHeroSection;
  problem: ProductProblemSection;
  solution: ProductSolutionSection;
  features: ProductFeaturesSection;
  architecture: ProductArchitectureSection;
  status: ProductStatusSection;
  roadmap: ProductRoadmapSection;
  contact: ProductContactSection;
}

export function ProductLayout({
  product,
  hero,
  problem,
  solution,
  features,
  architecture,
  status,
  roadmap,
  contact,
}: ProductLayoutProps) {
  return (
    <main className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] p-2">
                  <Image src={hero.iconImage} alt="" width={24} height={24} />
                </div>
                <span className="font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  {hero.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">{hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                >
                  {hero.secondaryCta.label}
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <Image
                src={hero.heroImage}
                alt={`${product.name} product illustration`}
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
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Problem statement
              </span>
              <h2 className="font-display text-3xl font-semibold text-white">{problem.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">{problem.body}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-8">
              <p className="text-sm leading-relaxed text-[#BDBDBD]">
                {product.description} Bethrass presents this product with clear maturity context so institutions can understand what is currently being built and what is still in design.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6">
              <Image
                src={solution.image}
                alt={`${product.name} dashboard mockup`}
                width={960}
                height={720}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Solution statement
              </span>
              <h2 className="font-display text-3xl font-semibold text-white">{solution.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">{solution.body}</p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#171717] text-[#D4AF37]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <span className="font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                {features.title}
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {features.items.map((feature) => (
                <div key={feature} className="rounded-xl border border-white/10 bg-[#171717] p-5">
                  <p className="text-sm leading-relaxed text-[#BDBDBD]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Technical architecture overview
              </span>
              <h2 className="font-display text-3xl font-semibold text-white">{architecture.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">{architecture.intro}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-8">
              <ul className="space-y-4 text-sm leading-relaxed text-[#BDBDBD]">
                {architecture.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#171717] text-[#D4AF37]">
                <Workflow className="h-5 w-5" />
              </div>
              <span className="font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                {status.title}
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <ProductStatusBadge stage={product.stage} status={product.status} />
                <p className="mt-4 text-base leading-relaxed text-[#BDBDBD]">
                  {product.status}. {status.availabilityMessage}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#171717] p-5 text-sm text-[#BDBDBD]">
                <div className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-4 w-4 text-[#D4AF37]" />
                  <span className="font-semibold">{status.introTitle}</span>
                </div>
                <p className="mt-3">{status.body}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-8 md:p-10">
            <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Roadmap
            </span>
            <h2 className="font-display text-3xl font-semibold text-white">{roadmap.title}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {roadmap.items.map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-[#111111] p-5">
                  <p className="font-mono-brand text-xs uppercase tracking-[0.25em] text-[#D4AF37]">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#BDBDBD]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-8 md:p-10">
            <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Contact / pilot section
            </span>
            <h2 className="font-display text-3xl font-semibold text-white">{contact.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#BDBDBD]">{contact.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={contact.cta.href}
                className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]"
              >
                {contact.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={contact.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
              >
                {contact.secondaryCta.label}
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-[#BDBDBD]">
            Interested in partnering with Bethrass? Contact us.
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ProductLayout;
