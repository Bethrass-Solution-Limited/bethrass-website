# WEBSITE GUIDE

**Repository:** `bethrass-website`
**Purpose:** Implementation reference for the public Bethrass website team.
**Source of truth (unchanged, lives in `bethrass-infrastructure/docs`):** `BETHRASS-PRODUCT-BIBLE.md`, `BETHRASS-DESIGN-SYSTEM.md`, `BETHRASS-ASSET-SPECIFICATION.md`, `BETHRASS-COPILOT-GUIDE.md`, `BETHRASS-TECHNICAL-ARCHITECTURE.md`, `BETHRASS-VDS-003-v1.2.md`
**Status:** Active — Implementation Reference (not a strategy document)

> This document does not define new rules. Every requirement below is a pointer into the documents listed above. If anything here ever seems to conflict with the master docs, the master docs win — flag it and fix this file, not the other way around.

---

## Website Structure

```
Home
Products
  ├─ URS
  ├─ LIN
  ├─ Analytics Studio
  └─ Academy
Company
Contact
Privacy
Terms
Security
Careers
```

Per `BETHRASS-PRODUCT-BIBLE.md` §6.1 — URS is nested under Products (first, as flagship), not a duplicate top-level nav item.

---

## Product Page Structure

Every product page (`BETHRASS-PRODUCT-BIBLE.md` §6.2) must contain, in this order:

1. Hero section
2. Problem statement
3. Solution statement
4. Features
5. Technical architecture overview
6. Current status
7. Roadmap
8. Contact / pilot section

**"Current status" must pull the product's maturity stage from the shared metadata constant** (`BETHRASS-COPILOT-GUIDE.md` §5, `PRODUCT_META`) — never hardcoded per page. See `BETHRASS-PRODUCT-BIBLE.md` §4 for the current classification of each product.

---

## Required Routes

```
/
/products
/products/urs
/products/lin
/products/analytics
/products/academy
/company
/contact
/privacy
/terms
/security
/careers
```

---

## Technical Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

For repo/folder architecture, naming conventions, component architecture, state management, API conventions, and Git/testing conventions, defer entirely to `BETHRASS-COPILOT-GUIDE.md` §1–5, §14–23 — not restated here.

---

## SEO Requirements

- Per-page metadata (title, description) — no default/placeholder metadata on any shipped page.
- Open Graph tags on every page.
- Twitter card tags on every page.
- Sitemap covering all required routes above.
- `robots.txt` configured per standard Next.js conventions.

Full detail: `BETHRASS-COPILOT-GUIDE.md` §11.

---

## Accessibility Requirements

- WCAG AA contrast minimum for all text, checked against the actual background layer it sits on (page/section/card).
- Full keyboard navigation on every interactive element.
- Visible focus states (`focus-visible`) — not hover-only.
- Semantic HTML first; ARIA only to fill genuine gaps.

Full detail: `BETHRASS-COPILOT-GUIDE.md` §10.

---

## Performance Requirements

- Optimized images via `next/image`.
- Lazy loading for below-the-fold images and illustrations.
- Responsive design, mobile-first, per `BETHRASS-COPILOT-GUIDE.md` §13.

---

**Bethrass Solution Limited** · contact@bethrass.com · support@bethrass.com · https://bethrass.com
