const STEPS = [
  {
    num: "01",
    title: "Research",
    items: ["Identifying Problems", "Factors contribution"],
  },
  {
    num: "02",
    title: "Synthesis",
    items: ["User Personas", "User Survey", "User Journey"],
  },
  {
    num: "03",
    title: "Ideation",
    items: ["Solution", "Storyboard", "Low Fidelity", "High Fidelity"],
  },
  {
    num: "04",
    title: "Final Designs",
    items: ["UI For Launch"],
  },
  {
    num: "05",
    title: "Reflections",
    items: ["Designs Outcome"],
  },
] as const;

function ProcessCard({
  num,
  title,
  items,
}: {
  num: string;
  title: string;
  items: readonly string[];
}) {
  return (
    <article
      className="flex h-full min-h-0 w-full flex-col gap-2 rounded-[24px] border border-solid p-6 sm:p-[25px]"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border-default)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <p
        className="w-full text-[14px] font-bold uppercase leading-[15px] tracking-[1px]"
        style={{ color: "var(--link-bright)" }}
      >
        {num}
      </p>
      <h3 className="pt-2 text-[16px] font-bold leading-5 text-[var(--text-primary)]">{title}</h3>
      <ul className="flex flex-col gap-2 pt-0.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className="size-1 shrink-0 rounded-full"
              style={{ background: "var(--link-bright)" }}
              aria-hidden
            />
            <span className="text-[11px] font-normal leading-[16.5px] text-[var(--text-secondary)]">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Figma 222:9748 (heading) + 222:10539 (five-step process row) — TrackGuard case study.
 */
export function TrackGuardProcessSection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 sm:gap-12">
        {/* Figma 222:9748 */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-[40px] font-semibold leading-none tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
            The Process
          </h2>
          <div className="h-[3px] w-20 shrink-0 rounded-full bg-[var(--text-primary)]" />
        </div>

        {/* Figma 222:10539 — cards only */}
        <div className="flex w-full flex-col items-stretch gap-4 xl:flex-row xl:items-stretch xl:justify-center xl:gap-3">
          {STEPS.map((step) => (
            <div key={step.num} className="w-full min-w-0 flex-1 xl:min-w-[140px]">
              <ProcessCard num={step.num} title={step.title} items={step.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
