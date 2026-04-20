/** Figma 260:20301 — Overview with mixed emphasis (#86868b / #1d1d1f). */
export function IdeasToImpactOverviewSection() {
  const d = "text-[var(--text-primary)]";

  return (
    <section
      className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-[172px] xl:pb-[161px] xl:pt-[131px]"
      style={{
        background: "var(--bg-surface)",
      }}
    >
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-[36px] font-semibold leading-[36px] tracking-[-0.6px] text-[var(--text-primary)]">
          Overview
        </h2>

        <div aria-hidden className="h-9 w-full shrink-0" />

        <p className="text-[20px] leading-[32.5px] text-[var(--text-secondary)]">
          After a five-year pause, <span className={d}>Ideas to Impact 2026</span> returns with{" "}
          <span className={d}>fresh energy</span> and a <span className={d}>renewed sense of purpose</span>. The
          event is all about <span className={d}>celebrating how Mohawk College</span>,{" "}
          <span className={d}>industry partners</span>, and <span className={d}>the community come together</span>{" "}
          to create <span className={d}>meaningful impact through applied research</span>. It highlights{" "}
          <span className={d}>five years of innovation</span>, <span className={d}>collaboration</span>, and{" "}
          <span className={d}>shared</span> <span className={d}>success</span>, while creating{" "}
          <span className={d}>space to connect</span>, reflect, and look ahead. At its core, Ideas to Impact is
          about{" "}
          <span className={d}>
            bringing people together and showing how great ideas can grow into real-world change.
          </span>
        </p>
      </div>
    </section>
  );
}
