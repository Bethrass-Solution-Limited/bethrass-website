import React from "react";
import Button from "@/components/ui/Button";

export interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: { label: string; href: string };
}

export function CTASection({ title, description, primaryAction }: CTASectionProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="card rounded-2xl px-8 py-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          {description && <p className="text-sm muted mb-6">{description}</p>}

          <div className="flex justify-center">
            <a href={primaryAction.href} aria-label={primaryAction.label}>
              <Button variant="primary">{primaryAction.label}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
