export type ProductStage =
  | "Research"
  | "Concept"
  | "Documentation"
  | "MVP"
  | "Beta"
  | "Production"
  | "Internal operations / productization";

export interface ProductHeroSection {
  eyebrow: string;
  title: string;
  lead: string;
  iconImage: string;
  heroImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface ProductProblemSection {
  title: string;
  body: string;
}

export interface ProductSolutionSection {
  title: string;
  body: string;
  image: string;
}

export interface ProductFeaturesSection {
  title: string;
  items: string[];
}

export interface ProductArchitectureSection {
  title: string;
  intro: string;
  items: string[];
}

export interface ProductStatusSection {
  title: string;
  availabilityMessage: string;
  introTitle: string;
  body: string;
}

export interface ProductRoadmapSection {
  title: string;
  items: string[];
}

export interface ProductContactSection {
  title: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface ProductMeta {
  slug: string;
  name: string;
  stage: ProductStage;
  status: string;
  description: string;
  hero: ProductHeroSection;
  problem: ProductProblemSection;
  solution: ProductSolutionSection;
  features: ProductFeaturesSection;
  architecture: ProductArchitectureSection;
  statusSection: ProductStatusSection;
  roadmap: ProductRoadmapSection;
  contact: ProductContactSection;
}

export const PRODUCT_META = {
  urs: {
    slug: "urs",
    name: "Unified Record System",
    stage: "Documentation",
    status: "Architecture and MVP preparation",
    description: "A trusted verification layer for lifelong academic, professional, and institutional records.",
    hero: {
      eyebrow: "Unified Record System",
      title: "Structured, verifiable institutional records for trusted decision-making.",
      lead: "URS is a working architecture concept for connecting identity, authority, and record integrity across institutional workflows.",
      iconImage: "/icons/urs-icon.svg",
      heroImage: "/illustrations/verification-network.svg",
      primaryCta: { label: "Contact Bethrass", href: "/contact" },
      secondaryCta: { label: "Browse all products", href: "/products" },
    },
    problem: {
      title: "Fragmented records weaken trust and make accountability difficult to demonstrate.",
      body: "Many organizations work with records spread across disconnected systems, making it difficult to know who acted, when, and under what authority.",
    },
    solution: {
      title: "A transparent record model that makes responsibility visible.",
      body: "URS is designed to help institutions represent records as durable, attributable artifacts rather than isolated transactions.",
      image: "/mockups/urs-dashboard.png",
    },
    features: {
      title: "Key features",
      items: [
        "Verified institutional record handling",
        "Attribution for actors, organizations, and authority",
        "Traceable lifecycle management for critical records",
      ],
    },
    architecture: {
      title: "The architecture is built around clarity, trust, and disciplined implementation.",
      intro: "Bethrass is approaching each product with a manageable technical spine rather than an overbuilt feature set.",
      items: [
        "Structured schema design for record lifecycle events",
        "Verification and attestation layers for institutional confidence",
        "Auditability through clear lineage and record history",
      ],
    },
    statusSection: {
      title: "Current status",
      availabilityMessage: "Not yet available for production use.",
      introTitle: "Product maturity",
      body: "This product is being presented with the appropriate maturity context and should not be treated as a deployed production service.",
    },
    roadmap: {
      title: "Planned direction and next steps.",
      items: [
        "Finish architecture documentation and system model",
        "Prepare the MVP scope and integration boundaries",
        "Refine governance and verification requirements",
      ],
    },
    contact: {
      title: "Interested in partnering with Bethrass? Contact us.",
      body: "Bethrass welcomes conversations with institutions that want to understand product direction, discuss architecture, or explore future pilots.",
      cta: { label: "Start a conversation", href: "/contact" },
      secondaryCta: { label: "View all products", href: "/products" },
    },
  },
  lin: {
    slug: "lin",
    name: "Land Identification Number",
    stage: "Concept",
    status: "Research and conceptual design",
    description: "A foundational framework for standardizing and resolving land-related identity and ownership references.",
    hero: {
      eyebrow: "Land Identification Number",
      title: "A spatial trust framework for land identity and parcel clarity.",
      lead: "LIN is a concept for linking geospatial references and institutional identity into a clearer, more accountable record structure.",
      iconImage: "/icons/lin-icon.svg",
      heroImage: "/illustrations/lin-hero.svg",
      primaryCta: { label: "Contact Bethrass", href: "/contact" },
      secondaryCta: { label: "Browse all products", href: "/products" },
    },
    problem: {
      title: "Land records often lack shared structure and durable references.",
      body: "When location data, parcel history, and institutional ownership are not coordinated, trust and operational clarity suffer.",
    },
    solution: {
      title: "A shared framework for map-based identity and parcel references.",
      body: "LIN is intended to support clearer references for location, identity, and institutional responsibility across land-related processes.",
      image: "/mockups/lin-dashboard.png",
    },
    features: {
      title: "Key features",
      items: [
        "Parcels and coordinates represented through shared structure",
        "Institutional references designed for verification and review",
        "A foundation for spatially anchored trust layers",
      ],
    },
    architecture: {
      title: "The architecture is built around clarity, trust, and disciplined implementation.",
      intro: "Bethrass is approaching each product with a manageable technical spine rather than an overbuilt feature set.",
      items: [
        "Coordinate-aware reference model for parcel context",
        "Identity anchors that connect location to institutional ownership",
        "Structured review paths for traceable land-related records",
      ],
    },
    statusSection: {
      title: "Current status",
      availabilityMessage: "Not yet available for production use.",
      introTitle: "Product maturity",
      body: "This product is being presented with the appropriate maturity context and should not be treated as a deployed production service.",
    },
    roadmap: {
      title: "Planned direction and next steps.",
      items: [
        "Develop the conceptual spatial framework",
        "Map key institutional and administrative use cases",
        "Refine the architecture for future implementation",
      ],
    },
    contact: {
      title: "Interested in partnering with Bethrass? Contact us.",
      body: "Bethrass welcomes conversations with institutions that want to understand product direction, discuss architecture, or explore future pilots.",
      cta: { label: "Start a conversation", href: "/contact" },
      secondaryCta: { label: "View all products", href: "/products" },
    },
  },
  analytics: {
    slug: "analytics",
    name: "Analytics Studio",
    stage: "Internal operations / productization",
    status: "Internal analytics platform",
    description: "Operational intelligence and decision support for complex institutional environments.",
    hero: {
      eyebrow: "Analytics Studio",
      title: "Operational intelligence designed for dependable institutional decisions.",
      lead: "Analytics Studio is a working internal analytics direction focused on decision support, operational visibility, and structured data workflows.",
      iconImage: "/icons/analytics-icon.svg",
      heroImage: "/illustrations/analytics-hero.svg",
      primaryCta: { label: "Contact Bethrass", href: "/contact" },
      secondaryCta: { label: "Browse all products", href: "/products" },
    },
    problem: {
      title: "Institutional teams need better visibility without adding noise.",
      body: "Analytical work often becomes fragmented across dashboards, manual reporting, and disconnected operational data.",
    },
    solution: {
      title: "A clearer analytics surface for teams and leadership.",
      body: "The product direction focuses on presenting key operational signals in a concise, structured, and reviewable format.",
      image: "/mockups/analytics-dashboard.png",
    },
    features: {
      title: "Key features",
      items: [
        "Operational dashboards for high-signal reporting",
        "Structured pipelines for data review and analysis",
        "A practical interface for internal decision support",
      ],
    },
    architecture: {
      title: "The architecture is built around clarity, trust, and disciplined implementation.",
      intro: "Bethrass is approaching each product with a manageable technical spine rather than an overbuilt feature set.",
      items: [
        "Data handling designed around operational clarity",
        "Dashboard views that make review and interpretation easier",
        "A future-ready foundation for more advanced analytics workflows",
      ],
    },
    statusSection: {
      title: "Current status",
      availabilityMessage: "Not yet available for production use.",
      introTitle: "Product maturity",
      body: "This product is being presented with the appropriate maturity context and should not be treated as a deployed production service.",
    },
    roadmap: {
      title: "Planned direction and next steps.",
      items: [
        "Continue internal productization and workflow refinement",
        "Stabilize reporting flows and review patterns",
        "Prepare a broader product direction for future expansion",
      ],
    },
    contact: {
      title: "Interested in partnering with Bethrass? Contact us.",
      body: "Bethrass welcomes conversations with institutions that want to understand product direction, discuss architecture, or explore future pilots.",
      cta: { label: "Start a conversation", href: "/contact" },
      secondaryCta: { label: "View all products", href: "/products" },
    },
  },
  academy: {
    slug: "academy",
    name: "Academy",
    stage: "Concept",
    status: "Educational initiative under development",
    description: "A focused initiative for building technical capacity and supporting secure systems practice.",
    hero: {
      eyebrow: "Academy",
      title: "A structured learning pathway for technical capability and strong systems practice.",
      lead: "Academy is an educational initiative in development, focused on practical knowledge for infrastructure, systems, and responsible digital operations.",
      iconImage: "/icons/academy-icon.svg",
      heroImage: "/illustrations/academy-hero.svg",
      primaryCta: { label: "Contact Bethrass", href: "/contact" },
      secondaryCta: { label: "Browse all products", href: "/products" },
    },
    problem: {
      title: "Teams need practical guidance that connects concepts to institutional delivery.",
      body: "Knowledge is often fragmented, and teams need a clearer way to build capability around secure, dependable systems.",
    },
    solution: {
      title: "A focused learning path for systems thinking and engineering discipline.",
      body: "Academy is being shaped around structured learning modules that connect technical practice to real-world institutional needs.",
      image: "/mockups/academy-dashboard.png",
    },
    features: {
      title: "Key features",
      items: [
        "Structured learning pathways for modern systems work",
        "Practical capability-building around infrastructure and operations",
        "A clear educational model for technical teams and stakeholders",
      ],
    },
    architecture: {
      title: "The architecture is built around clarity, trust, and disciplined implementation.",
      intro: "Bethrass is approaching each product with a manageable technical spine rather than an overbuilt feature set.",
      items: [
        "Course structure designed around progressive capability building",
        "Content pathways linked to real system and delivery challenges",
        "A foundation for future learning experiences and facilitation",
      ],
    },
    statusSection: {
      title: "Current status",
      availabilityMessage: "Not yet available for production use.",
      introTitle: "Product maturity",
      body: "This product is being presented with the appropriate maturity context and should not be treated as a deployed production service.",
    },
    roadmap: {
      title: "Planned direction and next steps.",
      items: [
        "Define curriculum structure and learning outcomes",
        "Refine content and delivery approach",
        "Prepare the initiative for broader rollout",
      ],
    },
    contact: {
      title: "Interested in partnering with Bethrass? Contact us.",
      body: "Bethrass welcomes conversations with institutions that want to understand product direction, discuss architecture, or explore future pilots.",
      cta: { label: "Start a conversation", href: "/contact" },
      secondaryCta: { label: "View all products", href: "/products" },
    },
  },
} as const satisfies Record<string, ProductMeta>;

export type ProductKey = keyof typeof PRODUCT_META;
