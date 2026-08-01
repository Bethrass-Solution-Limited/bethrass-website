import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export interface HeroSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  primaryCta?: { href: string; label: string };
}

export function HeroSection({ eyebrow, title, lead, primaryCta }: HeroSectionProps) {
  return (
    <header className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm uppercase muted mb-2">{eyebrow}</p>}

          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight">
            {title}
          </h1>

          {lead && <p className="mt-4 text-lg lead max-w-xl">{lead}</p>}

          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta ? (
              <Link href={primaryCta.href} className="inline-block">
                <Button variant="primary">{primaryCta.label}</Button>
              </Link>
            ) : (
              <Button variant="primary">Get started</Button>
            )}

            <Button variant="outline">Contact sales</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
