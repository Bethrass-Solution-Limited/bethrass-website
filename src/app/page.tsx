/*
 * Phase 0 interim home — replaced by the full HomePage in Phase 1.
 * Kept minimal and on-brand so the scaffold builds and deploys cleanly.
 */
export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="font-mono-brand mb-4 text-xs tracking-widest text-amber-600">
        REGISTRY // BETHRASS-CORE-01
      </p>
      <h1 className="font-display mb-6 text-4xl font-semibold leading-tight text-stone-50 md:text-5xl">
        Enterprise infrastructure,{" "}
        <span className="text-amber-500">engineered for trust.</span>
      </h1>
      <p className="font-body max-w-xl text-lg text-slate-300">
        Bethrass Solution Limited — foundation scaffolded. Full site coming online
        across the next build phases.
      </p>
    </section>
  );
}
