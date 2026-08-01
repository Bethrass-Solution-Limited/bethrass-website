export type ProductStage =
  | "Research"
  | "Concept"
  | "Documentation"
  | "MVP"
  | "Beta"
  | "Production"
  | "Internal operations / productization";

export interface ProductMeta {
  slug: string;
  name: string;
  stage: ProductStage;
  status: string;
  description: string;
}

export const PRODUCT_META = {
  urs: {
    slug: "urs",
    name: "Unified Record System",
    stage: "Documentation",
    status: "Architecture and MVP preparation",
    description: "A trusted verification layer for lifelong academic, professional, and institutional records.",
  },
  lin: {
    slug: "lin",
    name: "Land Identification Number",
    stage: "Concept",
    status: "Research and conceptual design",
    description: "A foundational framework for standardizing and resolving land-related identity and ownership references.",
  },
  analytics: {
    slug: "analytics",
    name: "Analytics Studio",
    stage: "Internal operations / productization",
    status: "Internal analytics platform",
    description: "Operational intelligence and decision support for complex institutional environments.",
  },
  academy: {
    slug: "academy",
    name: "Academy",
    stage: "Concept",
    status: "Educational initiative under development",
    description: "A focused initiative for building technical capacity and supporting secure systems practice.",
  },
} as const satisfies Record<string, ProductMeta>;

export type ProductKey = keyof typeof PRODUCT_META;
