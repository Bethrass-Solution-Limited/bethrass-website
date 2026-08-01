import React from "react";

export interface DashboardCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function DashboardCard({ title, description, children }: DashboardCardProps) {
  return (
    <section className="card rounded-xl border border-transparent p-4" aria-labelledby={title ? `dashboard-${title}` : undefined}>
      {title && (
        <header className="mb-3">
          <h4 id={`dashboard-${title}`} className="text-sm font-semibold">
            {title}
          </h4>
          {description && <p className="text-xs muted">{description}</p>}
        </header>
      )}

      <div className="min-h-[120px]">{children}</div>
    </section>
  );
}

export default DashboardCard;
