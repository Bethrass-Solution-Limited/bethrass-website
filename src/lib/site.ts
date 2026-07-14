/**
 * Central site configuration — single source of truth for identity,
 * canonical URL, and contact details used across metadata and pages.
 */
export const siteConfig = {
  name: "Bethrass",
  legalName: "Bethrass Solution Limited",
  tagline: "Enterprise infrastructure, engineered for trust.",
  description:
    "Bethrass builds enterprise software, AI, and data infrastructure — starting with the Unified Record System, a trusted verification layer for a person's lifelong academic and professional record.",
  // Canonical production URL. Overridable per environment for previews.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bethrass.com",
  contactEmail: "contact@bethrass.com",
  location: {
    locality: "Ilorin",
    region: "Kwara State",
    country: "Nigeria",
  },
} as const;

export type SiteConfig = typeof siteConfig;
