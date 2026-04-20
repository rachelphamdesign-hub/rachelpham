/** Figma 401:774 — Overview + Goal (case study copy). */
const GOAL_BODY =
  "The strategic and aesthetic objective was to authentically represent Vot's aim in order to grow. To boost product awareness, the colour scheme is based on coffee's hue. The logo is created from the image of a racket and coffee beans that are used to create a cup of Vietnamese tra da. The basis of brand awareness is built on consistency in strategy and creative.";

export function VotCoffeeOverviewGoalSection({ overview }: { overview: string }) {
  return (
    <section
      className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-[100px] xl:pb-[161px] xl:pt-[131px]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-[36px] font-semibold leading-[36px] tracking-[-0.6px] text-[var(--text-primary)]">
          Overview
        </h2>
        <div aria-hidden className="h-9 w-full shrink-0" />
        <p className="text-[20px] leading-[32.5px] text-[var(--text-secondary)]">{overview}</p>

        <div aria-hidden className="h-14 w-full shrink-0 sm:h-16" />

        <h2 className="text-[36px] font-semibold leading-[36px] tracking-[-0.6px] text-[var(--text-primary)]">
          Goal
        </h2>
        <div aria-hidden className="h-9 w-full shrink-0" />
        <p className="max-w-[1080px] text-[20px] leading-[32.5px] text-[var(--text-secondary)]">{GOAL_BODY}</p>
      </div>
    </section>
  );
}
