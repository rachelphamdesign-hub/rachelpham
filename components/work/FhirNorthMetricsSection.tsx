/** Figma 326:24469 — Event Metrics (large numerals, dividers, captions). */
const METRICS = [
  { value: "300+", label: "attendees joined FHIR North 2025" },
  { value: "30+", label: "Expert Speakers and Panelists" },
  {
    value: "25+",
    label: "Sessions across two tracks CodeCamp & FHIR Academy",
  },
] as const;

export function FhirNorthMetricsSection() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:py-32" style={{ background: "var(--pill-badge-bg)" }}>
      <div className="mx-auto flex w-full max-w-[1096px] flex-col gap-16 lg:gap-16">
        <h2 className="text-[40px] font-bold leading-[48px] tracking-[-3px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[60px]">
          Event Metrics
        </h2>

        <div className="grid grid-cols-1 gap-14 sm:gap-16 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-0">
          {METRICS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-4 pb-7 text-center">
              <p className="w-full text-[64px] font-bold leading-none tracking-[-4.8px] text-[#0066CC] dark:text-[var(--accent-action)] sm:text-[80px] lg:text-[96px] lg:leading-[96px]">
                {value}
              </p>
              <div
                className="h-px w-12 shrink-0 bg-[var(--text-primary)] opacity-20 dark:opacity-30"
                aria-hidden
              />
              <p className="max-w-[280px] text-[18px] font-medium leading-7 tracking-[-0.45px] text-[var(--text-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
