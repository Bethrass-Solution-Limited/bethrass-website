export const NAV_LINKS = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: "Unified Record System", href: "/solutions/urs" },
    { label: "Enterprise AI", href: "/solutions/ai" },
    { label: "Data Infrastructure", href: "/solutions/data" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about#story" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Security", href: "/legal/security" },
  ],
} as const;
