export const NAV_LINKS = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: "Unified Record System", href: "/solutions/urs" },
    { label: "Enterprise AI", href: "/solutions" },
    { label: "Data Infrastructure", href: "/solutions" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Careers", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Security", href: "/contact" },
  ],
} as const;
