export interface CompanyContentPage {
  slug: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  lastUpdated: string;
  body: string[];
  ctaLabel: string;
  ctaHref: string;
  illustration: string;
}

export const COMPANY_CONTENT = {
  company: {
    slug: "company",
    title: "Company | Bethrass",
    eyebrow: "Company",
    heroTitle: "Bethrass builds dependable systems for institutions that require clarity, accountability, and long-term trust.",
    heroBody: "The company operates at the intersection of infrastructure, records, analytics, and capability-building. Its work is grounded in technical discipline and the belief that trusted systems must be designed with care.",
    lastUpdated: "Last updated: August 2026",
    body: [
      "Bethrass is oriented around the long-term design of institutional systems that must function with accuracy, resilience, and accountability.",
      "The company’s work is rooted in practical engineering and a clear understanding of how trust is earned through dependable implementation.",
      "This foundation informs the company’s approach to product development, delivery standards, and engagement with institutions.",
    ],
    ctaLabel: "Contact Bethrass",
    ctaHref: "/contact",
    illustration: "/illustrations/cloud-infrastructure.svg",
  },
  privacy: {
    slug: "privacy",
    title: "Privacy | Bethrass",
    eyebrow: "Privacy",
    heroTitle: "Privacy is treated as a core part of system design and responsible operations.",
    heroBody: "Bethrass handles information with care, applies appropriate safeguards, and follows responsible data practices aligned to the trust model behind its products and services.",
    lastUpdated: "Last updated: August 2026",
    body: [
      "Bethrass approaches privacy as a design concern rather than an afterthought. The company’s operating model assumes that sensitive institutional information requires disciplined handling from the outset.",
      "Responsible data use, clear boundaries, and appropriate safeguards are part of the standard expectation for the company’s work.",
      "Where data is involved, the company is guided by principles of care, accountability, and the long-term integrity of institutional systems.",
    ],
    ctaLabel: "Contact Bethrass",
    ctaHref: "/contact",
    illustration: "/illustrations/enterprise-security.svg",
  },
  terms: {
    slug: "terms",
    title: "Terms | Bethrass",
    eyebrow: "Terms",
    heroTitle: "Bethrass website terms are structured around clarity, professionalism, and responsible use.",
    heroBody: "These terms govern the use of Bethrass’s public digital surfaces and the information presented through them.",
    lastUpdated: "Last updated: August 2026",
    body: [
      "The Bethrass website and its associated materials are provided for informational and institutional review purposes.",
      "Visitors are expected to engage with the site in a respectful and lawful manner while recognizing that content may evolve over time.",
      "Bethrass reserves the right to revise public materials, product descriptions, and policy language as its work advances.",
    ],
    ctaLabel: "Contact Bethrass",
    ctaHref: "/contact",
    illustration: "/illustrations/digital-transformation.svg",
  },
  security: {
    slug: "security",
    title: "Security | Bethrass",
    eyebrow: "Security",
    heroTitle: "Security is treated as a design requirement and operational principle.",
    heroBody: "Bethrass’s systems and product direction prioritize integrity, resilience, auditability, and responsible handling of institutional information.",
    lastUpdated: "Last updated: August 2026",
    body: [
      "Bethrass approaches security from the perspective of institutional trust. Secure systems begin with disciplined design and clear operational expectations.",
      "The company’s work emphasizes integrity, resilience, auditability, and careful control over sensitive information.",
      "Security is treated as an ongoing responsibility that shapes architecture, operations, and the company’s product posture.",
    ],
    ctaLabel: "Contact Bethrass",
    ctaHref: "/contact",
    illustration: "/illustrations/enterprise-security.svg",
  },
  careers: {
    slug: "careers",
    title: "Careers | Bethrass",
    eyebrow: "Careers",
    heroTitle: "Bethrass seeks people who are thoughtful, technical, and committed to building trustworthy systems.",
    heroBody: "The company values disciplined engineering, clear thinking, and a serious approach to institutional technology.",
    lastUpdated: "Last updated: August 2026",
    body: [
      "Bethrass is interested in people who can reason clearly, work carefully, and contribute to the development of systems that must be dependable over time.",
      "The company values technical discipline, professional judgment, and a grounded understanding of how institutions operate.",
      "Career conversations at Bethrass are shaped by long-term capability building, thoughtful execution, and the pursuit of durable outcomes.",
    ],
    ctaLabel: "Contact Bethrass",
    ctaHref: "/contact",
    illustration: "/illustrations/ai-network.svg",
  },
} as const satisfies Record<string, CompanyContentPage>;

export type CompanyContentKey = keyof typeof COMPANY_CONTENT;