# DESIGN REFERENCE

**Repository:** `bethrass-website`
**Purpose:** Quick reference for developers working inside the website repository.
**Source of truth (unchanged, lives in `bethrass-infrastructure/docs`):** `BETHRASS-DESIGN-SYSTEM.md`, `BETHRASS-VDS-003-v1.2.md`
**Status:** Active — Quick Reference (not a new visual standard)

> This document invents nothing. No new colors, no new rules — everything below is copied for convenience from the master documents. If a value here ever drifts from the source documents, this file is wrong and should be corrected against them.

---

## Brand Colors

| Token | Value |
|---|---|
| Page background | `#0A0A0A` |
| Surface | `#111111` |
| Cards | `#171717` |
| Primary accent | `#D4AF37` |
| Primary text | `#FFFFFF` |
| Secondary text | `#BDBDBD` |
| Borders | `rgba(255,255,255,0.08)` |

Full usage rules, layering logic, and CSS variable names: `BETHRASS-DESIGN-SYSTEM.md` §2.

---

## Typography

| Role | Reference |
|---|---|
| Headings | `BETHRASS-DESIGN-SYSTEM.md` §3 — H1 48–56px/32–36px, H2 32–36px/24–28px, H3 20–22px, bold/bold/medium |
| Body text | `BETHRASS-DESIGN-SYSTEM.md` §3 — 16–18px, regular, 1.6 line height |
| Spacing | `BETHRASS-DESIGN-SYSTEM.md` §4 — 8px base unit; all padding/margin values are multiples of 8 |

---

## Component Library

Do not build these locally — consume from the shared `packages/ui` per `BETHRASS-COPILOT-GUIDE.md` §5:

- Navbar
- Footer
- Buttons
- Cards
- Metric cards
- Dashboard cards
- Sidebars

---

## Asset Locations

```
public/
├── logos/           # bethrass-logo-original.svg, bethrass-logo-darkmode.svg, bethrass-symbol.svg, favicon.svg
├── icons/            # urs-icon.svg, lin-icon.svg, analytics-icon.svg, academy-icon.svg
├── illustrations/     # product hero illustrations + shared illustration system
└── mockups/          # dashboard mockups (desktop/tablet/mobile, per product)
```

Full asset inventory, prompts, and usage instructions: `BETHRASS-ASSET-SPECIFICATION.md`. Note the corporate logo (`bethrass-logo-original.svg`) stays orange + black — it is governed separately from the product dark/gold system; see `BETHRASS-BRAND-CONSTITUTION.md` §1 (Scope).

---

## Product Metaphors

| Product | Metaphor |
|---|---|
| URS | Shield + document + verification network |
| LIN | Map + parcels + coordinates |
| Analytics Studio | Dashboards + charts + pipelines |
| Academy | Knowledge path + digital classroom |

Full icon/illustration direction per product: `BETHRASS-VDS-003-v1.2.md`.

---

## Design Principles

- Premium
- Enterprise-grade
- Minimalist
- Trustworthy
- Futuristic but realistic

Full principle set and what to avoid: `BETHRASS-DESIGN-SYSTEM.md` §1, `BETHRASS-BRAND-CONSTITUTION.md` §2.

---

**Bethrass Solution Limited** · contact@bethrass.com · support@bethrass.com · https://bethrass.com
