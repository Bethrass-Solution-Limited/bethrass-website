# BETHRASS BRAND CONSTITUTION

**Document ID:** BETHRASS-BC-001
**Classification:** Internal / Governance — the single immutable source of truth for brand decisions
**Version:** 1.1 — dark-first system confirmed and layered surface tokens locked
**Date Issued:** July 2026
**Status:** Active — Locked

> \\\*\\\*Purpose.\\\*\\\* Every other Bethrass document (`BETHRASS-PRODUCT-BIBLE.md`, `BETHRASS-DESIGN-SYSTEM.md`, `BETHRASS-COPILOT-GUIDE.md`, `BETHRASS-ASSET-SPECIFICATION.md`, `BETHRASS-TECHNICAL-ARCHITECTURE.md`, and every BCDS/VDS document) must defer to this file on the topics it covers. If any other document ever conflicts with this one, \\\*\\\*this document wins\\\*\\\*, and the other should be corrected. This exists so future edits, new team members, or new AI sessions can't accidentally drift the brand — they check here first.

\---

## 1\. Color System (Locked)

Bethrass is a **dark-first brand**. Black is the default page background across the entire ecosystem — the website, all four products, dashboards, and marketing surfaces — not a special/rare mode. Light mode may exist in the future as an option, but dark is the canonical Bethrass experience and the source of truth for every design decision.

### 1.1 Core Tokens

|Token|Value|Role|
|-|-|-|
|**Primary Background**|`#0A0A0A`|Default page background everywhere|
|**Section Background**|`#111111`|One layer up from the page — section-level surfaces|
|**Card / Surface Background**|`#171717`|One layer up from section — cards, panels, tiles|
|**Primary Text**|`#FFFFFF`|Headlines, primary content|
|**Secondary Text**|`#BDBDBD`|Supporting copy, labels, less critical content|
|**Muted Text**|`#666666`|Tertiary/inactive text, timestamps, disabled states|
|**Border**|`rgba(255,255,255,0.08)`|Hairlines, dividers, card borders — a soft white at low opacity, not a separate gray hex|
|**Primary Gold (accent)**|`#D4AF37`|The single accent color — CTAs, highlights, active states, one flagged metric|

**Layering principle:** never jump straight from page background to card background. Use the three-step layer (`#0A0A0A` → `#111111` → `#171717`) to imply elevation and depth without introducing new colors — this is what gives the system a Stripe/Linear/Notion/Vercel-grade "premium dark" feel rather than a flat, single-black look.

**Deprecated — must not appear anywhere:** `#111111` (as a *primary black/background* token — note it is now reused deliberately as the *Section Background* layer above, which is a different role, not a revival of the old primary black), `#B8912F`, `#1A1A1A` (old Secondary Gray), `#2A2A2A` (old Border Gray). Any reference to the old flat gray-on-white palette is out of date and should be corrected on next edit.

### 1.2 Usage Rules

* Black backgrounds are the default across **every** page and product surface — Home, Products, URS, LIN, Analytics Studio, Academy, Company, Contact, Privacy, Terms, Security, Careers — not just a subset.
* White is used for typography and primary content.
* Gold is used **only** for emphasis: CTAs, highlights, and active states — never as a large fill or background, and never exceeding roughly 10% of a composition's visual area.
* Avoid large gold sections, excessive gradients, neon cybersecurity effects, colorful/multi-hue dashboards, and gaming aesthetics.
* Prefer subtle shadows and soft lighting over hard edges or glow effects.

### 1.3 Product Consistency

All four products inherit the same dark foundation, differentiated only by motif (per §6, Product Hierarchy) — never by a different color system:

* **URS** → dark infrastructure aesthetic
* **LIN** → dark spatial and mapping aesthetic
* **Analytics Studio** → dark data and intelligence aesthetic
* **Academy** → dark learning aesthetic

### 1.4 Dashboard Rules

* Dark cards (`#171717`) on black/section backgrounds (`#0A0A0A` / `#111111`).
* White typography, secondary text in `#BDBDBD` where appropriate.
* Exactly one highlighted metric in gold per dashboard view.
* Charts use neutral (grayscale) tones for all series, with gold reserved for the single flagged data point or series — never a multi-color chart.

### 1.5 Light Mode

Light mode is a possible future addition, not a current requirement. Dark mode is canonical and every design decision in this ecosystem should be made against the dark system first; a light variant, if built later, should be treated as a derived theme rather than a co-equal default.

**Scope:** This palette governs all Bethrass product interfaces, websites, icons, illustrations, dashboards, mockups, marketing materials, pitch decks, and documentation. It does not govern the separate logo mark (orange icon + black wordmark) or the teal marketing-collateral palette used for social/flyer assets — those remain distinct systems by design, each serving a different asset category, per the original governance note in the product visual design work.

\---

## 2\. Design Principles (Locked)

Every Bethrass visual and product surface must read as:

* Premium
* Enterprise-grade
* Minimal
* Trustworthy
* Technical
* Futuristic but realistic

Never:

* Stock photography
* Cartoon illustrations
* Neon cybersecurity effects
* Gaming aesthetics
* Excessive gradients

\---

## 3\. Typography (Locked)

* Primary typeface: a modern grotesque sans-serif (e.g., Inter or an equivalent) across all product UI, marketing, and in-image text.
* No decorative, script, or condensed display faces — they undercut enterprise credibility.
* Weight hierarchy: Bold for headline claims, Medium for UI labels/eyebrows, Regular for supporting copy — never more than three weights in a single composition.
* Generous letter-spacing on all-caps labels (eyebrows, status tags); body copy set for readability, not density.

\---

## 4\. Spacing System (Locked)

* Base unit: 8px. All padding and margin values are multiples of 8 (8, 16, 24, 32, 48, 64, 96, 128).
* Section vertical padding: 96–128px desktop / 48–64px mobile.
* Card internal padding: 24–32px desktop / 16–24px mobile.
* Consistent 24px gap between grid items on desktop, 16px on mobile.

\---

## 5\. Icon Philosophy (Locked)

* Fixed grid: 24×24 (or 32×32), 1.5–2px stroke weight, consistent across every product.
* Two-tone maximum: black/charcoal line with a single gold accent on the one sub-element that matters.
* Never filled or fully colored — icons stay linear; illustrations carry the fuller color story.
* Every icon has a literal, recognizable metaphor — no abstract or overly clever concepts that need a caption.
* Consistent rounded corner radius across the whole set — engineered, not sharp; approachable, not soft.

\---

## 6\. Product Hierarchy (Locked)

|#|Product|Role|
|-|-|-|
|1|Unified Record System (URS)|Flagship — trusted infrastructure|
|2|Land Identification Number (LIN)|Infrastructure extension — spatial trust|
|3|Bethrass Analytics Studio|Insight arm — decision intelligence|
|4|Bethrass Academy|Growth arm — knowledge and capability|

New products join this table by extension only — never by introducing a new color palette, illustration style, or lighting model. Differentiation between products is achieved through motif and emphasis, never through a different brand system.

\---

## 7\. Product Maturity Framework (Locked)

Every product must be classified under exactly one of six stages:

**Research → Concept → Documentation → MVP → Beta → Production**

**Current classification:**

|Product|Stage|Status Text|
|-|-|-|
|URS|Documentation|Architecture and MVP preparation|
|LIN|Concept|—|
|Analytics Studio|Internal operations / productization|—|
|Academy|Concept|—|

Never state or imply a later stage than the one a product actually occupies, in any document, deck, or public-facing surface.

\---

## 8\. Tone of Voice (Locked)

Bethrass communication is always:

* Professional
* Technical
* Trustworthy
* Clear
* Honest
* Enterprise-oriented

Bethrass communication never uses:

* Hype
* False claims
* Exaggeration
* Buzzwords

\---

## 9\. Governing Principles (Locked)

1. Trust before scale.
2. Clarity before complexity.
3. Infrastructure before features.
4. Security before convenience.
5. Honesty before marketing.

\---

## 10\. Amendment Process

This document is the final word on the topics above — it is not meant to change casually. If a genuine change is needed (a new color, a new typeface, a new maturity stage), it should be:

1. Proposed explicitly, with the specific section and value being changed named.
2. Confirmed by Abe (or whoever holds brand authority) before being applied.
3. Propagated to every dependent document in the same pass — `BETHRASS-PRODUCT-BIBLE.md`, `BETHRASS-DESIGN-SYSTEM.md`, `BETHRASS-COPILOT-GUIDE.md`, `BETHRASS-ASSET-SPECIFICATION.md`, `BETHRASS-TECHNICAL-ARCHITECTURE.md`, and the BCDS/VDS library — so nothing drifts out of sync with this file.

\---

**Bethrass Solution Limited** · contact@bethrass.com · support@bethrass.com · https://bethrass.com

