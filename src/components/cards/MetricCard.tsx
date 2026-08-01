import React from "react";
import { formatNumber } from "@/lib/format";

export interface MetricCardProps {
  label: string;
  value: number;
  delta?: number; // percent change
}

export function MetricCard({ label, value, delta }: MetricCardProps) {
  const isPositive = (delta ?? 0) >= 0;

  return (
    <div role="group" aria-label={label} className="card rounded-lg border border-transparent p-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-2xl font-semibold">{formatNumber(value)}</div>
          <div className="text-sm muted">{label}</div>
        </div>

        {typeof delta === 'number' && (
          <div className={`rounded-md px-2 py-1 text-sm font-medium ${isPositive ? 'bg-emerald-800 text-emerald-300' : 'bg-rose-900 text-rose-300'}`} aria-hidden>
            {isPositive ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}

export default MetricCard;
