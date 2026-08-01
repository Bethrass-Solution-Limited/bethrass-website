import React from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  title?: string;
  features: Feature[];
}

export function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <section className="py-12" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-6">
        {title && <h2 id="features-title" className="text-2xl font-semibold mb-6">{title}</h2>}

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.id} className="card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm muted">{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturesSection;
