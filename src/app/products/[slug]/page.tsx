import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Workflow, Sparkles, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductStatusBadge } from "@/components/ui/ProductStatusBadge";
import { PRODUCT_META, type ProductKey, type ProductStage } from "@/constants/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const copyMap = {
  urs: {
    eyebrow: "Unified Record System",
    heroTitle: "Structured, verifiable institutional records for trusted decision-making.",
    heroLead:
      "URS is a working architecture concept for connecting identity, authority, and record integrity across institutional workflows.",
    problemTitle: "Fragmented records weaken trust and make accountability difficult to demonstrate.",
    problemBody:
      "Many organizations work with records spread across disconnected systems, making it difficult to know who acted, when, and under what authority.",
    solutionTitle: "A transparent record model that makes responsibility visible.",
    solutionBody:
      "URS is designed to help institutions represent records as durable, attributable artifacts rather than isolated transactions.",
    features: [
      "Verified institutional record handling",
      "Attribution for actors, organizations, and authority",
      "Traceable lifecycle management for critical records",
    ],
    architecture: [
      "Structured schema design for record lifecycle events",
      "Verification and attestation layers for institutional confidence",
      "Auditability through clear lineage and record history",
    ],
    roadmap: [
      "Finish architecture documentation and system model",
      "Prepare the MVP scope and integration boundaries",
      "Refine governance and verification requirements",
    ],
    heroImage: "/illustrations/verification-network.svg",
    dashboardImage: "/mockups/urs-dashboard.png",
    iconImage: "/icons/urs-icon.svg",
  },
  lin: {
    eyebrow: "Land Identification Number",
    heroTitle: "A spatial trust framework for land identity and parcel clarity.",
    heroLead:
      "LIN is a concept for linking geospatial references and institutional identity into a clearer, more accountable record structure.",
    problemTitle: "Land records often lack shared structure and durable references.",
    problemBody:
      "When location data, parcel history, and institutional ownership are not coordinated, trust and operational clarity suffer.",
    solutionTitle: "A shared framework for map-based identity and parcel references.",
    solutionBody:
      "LIN is intended to support clearer references for location, identity, and institutional responsibility across land-related processes.",
    features: [
      "Parcels and coordinates represented through shared structure",
      "Institutional references designed for verification and review",
      "A foundation for spatially anchored trust layers",
    ],
    architecture: [
      "Coordinate-aware reference model for parcel context",
      "Identity anchors that connect location to institutional ownership",
      "Structured review paths for traceable land-related records",
    ],
    roadmap: [
      "Develop the conceptual spatial framework",
      "Map key institutional and administrative use cases",
      "Refine the architecture for future implementation",
    ],
    heroImage: "/illustrations/lin-hero.svg",
    dashboardImage: "/mockups/lin-dashboard.png",
    iconImage: "/icons/lin-icon.svg",
  },
  analytics: {
    eyebrow: "Analytics Studio",
    heroTitle: "Operational intelligence designed for dependable institutional decisions.",
    heroLead:
      "Analytics Studio is a working internal analytics direction focused on decision support, operational visibility, and structured data workflows.",
    problemTitle: "Institutional teams need better visibility without adding noise.",
    problemBody:
      "Analytical work often becomes fragmented across dashboards, manual reporting, and disconnected operational data.",
    solutionTitle: "A clearer analytics surface for teams and leadership.",
    solutionBody:
      "The product direction focuses on presenting key operational signals in a concise, structured, and reviewable format.",
    features: [
      "Operational dashboards for high-signal reporting",
      "Structured pipelines for data review and analysis",
      "A practical interface for internal decision support",
    ],
    architecture: [
      "Data handling designed around operational clarity",
      "Dashboard views that make review and interpretation easier",
      "A future-ready foundation for more advanced analytics workflows",
    ],
    roadmap: [
      "Continue internal productization and workflow refinement",
      "Stabilize reporting flows and review patterns",
      "Prepare a broader product direction for future expansion",
    ],
    heroImage: "/illustrations/analytics-hero.svg",
    dashboardImage: "/mockups/analytics-dashboard.png",
    iconImage: "/icons/analytics-icon.svg",
  },
  academy: {
    eyebrow: "Academy",
    heroTitle: "A structured learning pathway for technical capability and strong systems practice.",
    heroLead:
      "Academy is an educational initiative in development, focused on practical knowledge for infrastructure, systems, and responsible digital operations.",
    problemTitle: "Teams need practical guidance that connects concepts to institutional delivery.",
    problemBody:
      "Knowledge is often fragmented, and teams need a clearer way to build capability around secure, dependable systems.",
    solutionTitle: "A focused learning path for systems thinking and engineering discipline.",
    solutionBody:
      "Academy is being shaped around structured learning modules that connect technical practice to real-world institutional needs.",
    features: [
      "Structured learning pathways for modern systems work",
      "Practical capability-building around infrastructure and operations",
      "A clear educational model for technical teams and stakeholders",
    ],
    architecture: [
      "Course structure designed around progressive capability building",
      "Content pathways linked to real system and delivery challenges",
      "A foundation for future learning experiences and facilitation",
    ],
    roadmap: [
      "Define curriculum structure and learning outcomes",
      "Refine content and delivery approach",
      "Prepare the initiative for broader rollout",
    ],
    heroImage: "/illustrations/academy-hero.svg",
    dashboardImage: "/mockups/academy-dashboard.png",
    iconImage: "/icons/academy-icon.svg",
  },
} as const;

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

  const copy = copyMap[slug as keyof typeof copyMap];

  if (!copy) {
    notFound();
  }

  const availabilityMessage = "Not yet available for production use.";

  return (
    <div className="flex flex-col gap-y-16 pb-24 pt-8 md:pt-12">
      <section className="border-b border-white/10 bg-[#111111]/70 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] p-2">
                  <Image src={copy.iconImage} alt="" width={24} height={24} />
                </div>
                <span className="font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  {copy.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#BDBDBD]">{copy.heroLead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]">
                  Contact Bethrass
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]">
                  Browse all products
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <Image src={copy.heroImage} alt={`${product.name} product illustration`} width={960} height={720} className="h-auto w-full rounded-xl object-cover" />
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
              <h2 className="font-display text-3xl font-semibold text-white">{copy.problemTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">{copy.problemBody}</p>
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
              <Image src={copy.dashboardImage} alt={`${product.name} dashboard mockup`} width={960} height={720} className="h-auto w-full rounded-xl object-cover" />
            </div>
            <div>
              <span className="mb-3 block font-mono-brand text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Solution statement
              </span>
              <h2 className="font-display text-3xl font-semibold text-white">{copy.solutionTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">{copy.solutionBody}</p>
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
                Key features
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.features.map((feature) => (
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
              <h2 className="font-display text-3xl font-semibold text-white">
                The architecture is built around clarity, trust, and disciplined implementation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#BDBDBD]">
                Bethrass is approaching each product with a manageable technical spine rather than an overbuilt feature set.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-8">
              <ul className="space-y-4 text-sm leading-relaxed text-[#BDBDBD]">
                {copy.architecture.map((item) => (
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
                Current status
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <ProductStatusBadge stage={product.stage} status={product.status} />
                <p className="mt-4 text-base leading-relaxed text-[#BDBDBD]">
                  {product.status}. {availabilityMessage}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#171717] p-5 text-sm text-[#BDBDBD]">
                <div className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-4 w-4 text-[#D4AF37]" />
                  <span className="font-semibold">Product maturity</span>
                </div>
                <p className="mt-3">This product is being presented with the appropriate maturity context and should not be treated as a deployed production service.</p>
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
            <h2 className="font-display text-3xl font-semibold text-white">Planned direction and next steps.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.roadmap.map((item, index) => (
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
            <h2 className="font-display text-3xl font-semibold text-white">
              Interested in partnering with Bethrass? Contact us.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#BDBDBD]">
              Bethrass welcomes conversations with institutions that want to understand product direction, discuss architecture, or explore future pilots.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#E0BE44]">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4AF37]/30 hover:text-[#D4AF37]">
                View all products
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
    </div>
  );
}
