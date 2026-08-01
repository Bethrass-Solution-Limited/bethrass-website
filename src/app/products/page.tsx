import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductStatusBadge } from "@/components/ui/ProductStatusBadge";
import { PRODUCT_META } from "@/constants/products";

export const metadata: Metadata = {
  title: "Products | Bethrass",
  description: "Explore Bethrass products and their current maturity across infrastructure, intelligence, and capability-building.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-y-20 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Products
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              A disciplined portfolio of trusted infrastructure, intelligence, and capability initiatives.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">
              Bethrass products are developed with clear maturity boundaries, enterprise-grade design, and a consistent emphasis on trust, verification, and practical institutional value.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {Object.values(PRODUCT_META).map((product) => (
              <article key={product.slug} className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#171717] p-8">
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-[#111111] px-3 py-1 font-mono-brand text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                      {product.name}
                    </span>
                    <span className="font-mono-brand text-xs uppercase tracking-[0.25em] text-[#666666]">
                      {product.slug.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-white">{product.name}</h2>
                  <p className="mt-4 text-base leading-relaxed text-[#BDBDBD]">{product.description}</p>
                  <div className="mt-6">
                    <ProductStatusBadge stage={product.stage} status={product.status} />
                  </div>
                </div>

                <div className="mt-8">
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]">
                    View product
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
