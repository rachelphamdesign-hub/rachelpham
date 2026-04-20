/** Figma 291:23813 — Overview with mixed emphasis (primary / secondary). */
const em = "text-[var(--text-primary)]";

export function FhirNorthOverviewSection() {
  return (
    <section
      className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-[172px] xl:pb-[161px] xl:pt-[131px]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-[36px] font-semibold leading-[36px] tracking-[-0.6px] text-[var(--text-primary)]">
          Overview
        </h2>
        <div aria-hidden className="h-9 w-full shrink-0" />

        <div className="text-[20px] leading-[32.5px] text-[var(--text-secondary)]">
          <p className="mb-0">
            <span>I had a wonderful time being part of </span>
            <span className={em}>For FHIR North 2025</span>
            <span> — Canada&apos;s only digital health conference dedicated to </span>
            <span className={em}>advancing HL7® FHIR interoperability</span>
            <span>.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>I </span>
            <span className={em}>worked across multiple areas of design and creative production</span>
            <span>, including </span>
            <span className={em}>
              UX and product flows, motion design, website updates, marketing assets, and event video editing
            </span>
            <span>. Being involved from planning to execution allowed me to see the full event process from </span>
            <span className={em}>researching target attendees to supporting event management on-site.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>I&apos;m especially grateful for the chance to work closely with the </span>
            <span className={em}>Business Development team.</span>
            <span> I learned </span>
            <span className={em}>how design connects with strategy, partnerships, and overall business goals.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            <span>Through this experience, </span>
            <span className={em}>
              I strengthened my skills in UX thinking, cross-functional collaboration
            </span>
            <span>, </span>
            <span className={em}>audience research, stakeholder communication</span>
            <span>, and </span>
            <span className={em}>working under tight deadlines</span>
            <span> in a fast-paced environment.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
