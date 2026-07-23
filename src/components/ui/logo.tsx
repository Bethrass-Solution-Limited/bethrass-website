import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* Outer Ring — Rotating Seal Mark (Spec §2.3) */}
        <svg
          viewBox="0 0 100 100"
          className="seal-ring absolute h-full w-full fill-none stroke-amber-600 stroke-[1.5]"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="48" strokeDasharray="4 8" />
          <circle cx="50" cy="50" r="42" strokeDasharray="1 10" />
        </svg>
        
        {/* Inner Static B — Brand Glyph */}
        <span className="font-display text-xl font-bold text-stone-50 transition-colors group-hover:text-amber-500">
          B
        </span>
      </div>
      <span className="font-display text-xl font-semibold tracking-tight text-stone-50 sm:block">
        {siteConfig.name}
      </span>
    </Link>
  );
}
