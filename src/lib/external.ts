/**
 * Links to future Bethrass applications (deployed SEPARATELY on AWS).
 *
 * This marketing website only ever *links out* to these products — it never
 * imports their code, shares their auth, or calls their APIs. Each URL is
 * supplied by an environment variable and inlined at build time. Until a
 * product is live, its link falls back to an on-site page, so launching a
 * product is a Vercel env-var change with NO code or architecture change.
 *
 * See docs/architecture.md §"Repository Independence".
 */

export type ExternalAppKey = "urs" | "lin" | "academy" | "docs";

type ExternalAppConfig = {
  /** Human-readable product name. */
  name: string;
  /** Live URL (AWS-hosted), or null until launched. */
  url: string | null;
  /** On-site fallback route shown while the product is not yet live. */
  fallback: string;
};

export const EXTERNAL_APPS: Record<ExternalAppKey, ExternalAppConfig> = {
  urs: {
    name: "URS — Unified Record System",
    url: process.env.NEXT_PUBLIC_URS_APP_URL || null,
    fallback: "/products/urs",
  },
  lin: {
    name: "LIN Platform",
    url: process.env.NEXT_PUBLIC_LIN_APP_URL || null,
    fallback: "/products",
  },
  academy: {
    name: "Bethrass Academy",
    url: process.env.NEXT_PUBLIC_ACADEMY_URL || null,
    fallback: "/products",
  },
  docs: {
    name: "Documentation",
    url: process.env.NEXT_PUBLIC_DOCS_URL || null,
    fallback: "/products/urs/how-it-works",
  },
};

export type AppLink = {
  /** Where the link should point right now. */
  href: string;
  /** True if the product is live (external AWS URL); false = on-site fallback. */
  isLive: boolean;
  /** True when the href leaves this site (open in new tab, add rel). */
  external: boolean;
};

/**
 * Resolve the correct link for a future product. When the product's env var
 * is set, returns the live external URL; otherwise returns the on-site fallback.
 */
export function appLink(key: ExternalAppKey): AppLink {
  const app = EXTERNAL_APPS[key];
  if (app.url) {
    return { href: app.url, isLive: true, external: true };
  }
  return { href: app.fallback, isLive: false, external: false };
}
