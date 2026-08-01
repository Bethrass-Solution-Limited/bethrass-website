import type { ProductStage } from "@/constants/products";

export interface ProductStatusBadgeProps {
  stage: ProductStage;
  status?: string;
  compact?: boolean;
}

const stageStyles: Record<ProductStage, string> = {
  Research: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  Concept: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  Documentation: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  MVP: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  Beta: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  Production: "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
  "Internal operations / productization": "border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]",
};

export function ProductStatusBadge({
  stage,
  status,
  compact = false,
}: ProductStatusBadgeProps) {
  return (
    <div
      className="inline-flex flex-col gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-left"
      aria-label={`Product stage ${stage}${status ? `: ${status}` : ""}`}
    >
      <span
        className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${stageStyles[stage]}`}
      >
        {stage}
      </span>

      {!compact && status ? (
        <span className="text-sm text-[#BDBDBD]">{status}</span>
      ) : null}
    </div>
  );
}

export default ProductStatusBadge;
