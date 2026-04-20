import Image from "next/image";

/** Figma 214:9523 — My Key Takeaways header icon */
const imgKeyTakeawaysIcon =
  "https://www.figma.com/api/mcp/asset/15c0ea9f-debf-4f18-8e4b-b7da2f7d8a5f";
/** Figma 214:9546 — Next Steps header icon */
const imgNextStepsIcon =
  "https://www.figma.com/api/mcp/asset/64b8226e-cf88-4f2d-987f-d32dc5c42ea9";

const STAT_CARDS = [
  {
    variant: "light" as const,
    value: "72%",
    label: "felt more secure with real-time tracking features",
  },
  {
    variant: "dark" as const,
    value: "80%",
    label: "of users said they would use this app",
  },
  {
    variant: "light" as const,
    value: "65%",
    label: "preferred instant alerts over traditional security systems",
  },
] as const;

const KEY_TAKEAWAYS = [
  "User needs drove the design, ensuring a simple and intuitive experience in high-stress situations",
  "Personas helped align features with real concerns like safety, speed, and control",
  "High-fidelity prototypes improved clarity and validated the full user journey",
  "High-fidelity prototypes improved clarity and validated the full user journey",
] as const;

const NEXT_STEPS = [
  "Conduct further user testing to refine usability and performance",
  "Explore AI-powered theft detection and predictive alerts",
  "Improve accessibility and visual clarity",
  "Expand features based on user feedback",
] as const;

const outcomeCardClass =
  "relative flex w-full min-w-0 flex-col gap-8 rounded-[40px] border border-solid p-10 sm:p-[41px]";

function StatCard({
  variant,
  value,
  label,
}: {
  variant: "light" | "dark";
  value: string;
  label: string;
}) {
  const isDark = variant === "dark";
  return (
    <article
      className="relative flex flex-col gap-2 rounded-[24px] border border-solid p-10 text-center sm:p-[41px]"
      style={{
        background: isDark ? "#1d1d1f" : "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
        boxShadow: "var(--shadow-card-soft)",
      }}
    >
      <p
        className={`text-[48px] font-bold leading-[48px] tracking-[-2.4px] ${
          isDark ? "text-white" : "text-[var(--text-primary)]"
        }`}
      >
        {value}
      </p>
      <p
        className={`text-[10px] font-semibold uppercase leading-4 tracking-[1px] ${
          isDark ? "text-[#ccc]" : "text-[var(--text-secondary)]"
        }`}
      >
        {label}
      </p>
    </article>
  );
}

function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((text, i) => (
        <li key={i} className="flex gap-4">
          <span className="w-7 shrink-0 text-left text-[16px] font-normal leading-6 text-[var(--link-bright)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="min-w-0 text-[14px] font-normal leading-[22.75px] text-[var(--text-primary)]">{text}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * Figma 214:9515 — Section 8 Impact & Reflection: Design Outcome (stats + My Key Takeaways + Next Steps).
 */
export function TrackGuardDesignOutcomeSection() {
  return (
    <section
      className="border-t border-solid border-[var(--border-subtle)] px-5 pb-14 pt-[86px] sm:px-6 sm:pb-16"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-col">
        <h2 className="w-full text-[36px] font-semibold leading-10 tracking-[-0.9px] text-[var(--text-primary)]">
          Design Outcome
        </h2>

        <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:mt-12 md:grid-cols-3 md:gap-8">
          {STAT_CARDS.map((card) => (
            <StatCard key={card.value} variant={card.variant} value={card.value} label={card.label} />
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-[940px] grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          <div
            className={outcomeCardClass}
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-surface)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-[17px] w-[22px] shrink-0">
                <Image
                  src={imgKeyTakeawaysIcon}
                  alt=""
                  width={22}
                  height={17}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-[20px] font-normal leading-7 text-[var(--text-primary)]">My Key Takeaways</p>
            </div>
            <NumberedList items={KEY_TAKEAWAYS} />
          </div>

          <div
            className={outcomeCardClass}
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-surface)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative size-[19px] shrink-0">
                <Image
                  src={imgNextStepsIcon}
                  alt=""
                  width={19}
                  height={19}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-[20px] font-normal leading-7 text-[var(--text-primary)]">Next Steps</p>
            </div>
            <NumberedList items={NEXT_STEPS} />
          </div>
        </div>
      </div>
    </section>
  );
}
