import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLayout } from "@/components/layout/ProductLayout";
import { PRODUCT_META, type ProductKey } from "@/constants/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_META[slug as ProductKey];

  if (!product) {
    return {
      title: "Product not found | Bethrass",
      description: "The requested Bethrass product could not be found.",
    };
  }

  return {
    title: `${product.name} | Bethrass`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCT_META[slug as ProductKey];

  if (!product) {
    notFound();
  }

  return (
    <ProductLayout
      product={product}
      hero={product.hero}
      problem={product.problem}
      solution={product.solution}
      features={product.features}
      architecture={product.architecture}
      status={product.statusSection}
      roadmap={product.roadmap}
      contact={product.contact}
    />
  );
}
