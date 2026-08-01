import Link from "next/link";
import React from "react";

export interface ProductCardProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  features?: string[];
}

export function ProductCard({ title, description, href, cta = "Learn more", features = [] }: ProductCardProps) {
  const Container: any = href ? Link : 'div';

  return (
    <article className="card rounded-xl border border-transparent p-6 shadow-sm" aria-labelledby={`product-${title}`}>
      <header className="mb-3">
        <h3 id={`product-${title}`} className="text-lg font-semibold">
          {title}
        </h3>
      </header>

      <p className="text-sm lead mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="mb-4 grid grid-cols-1 gap-2 text-sm text-stone-300">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        {href ? (
          <Link href={href} className="inline-block">
            <button className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-[var(--color-accent)] text-[#111111] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
              {cta}
            </button>
          </Link>
        ) : (
          <button className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-[var(--color-accent)] text-[#111111]" disabled>
            {cta}
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
