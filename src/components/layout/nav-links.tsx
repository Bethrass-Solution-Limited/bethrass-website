export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "URS", href: "/products/urs" },
    { label: "LIN", href: "/products/lin" },
    { label: "Analytics Studio", href: "/products/analytics" },
    { label: "Academy", href: "/products/academy" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Careers", href: "/careers" },
  ],
} as const;
