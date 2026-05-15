/** Overview — same layout and emphasis pattern as FHIR North. */
const em = "text-[var(--text-primary)]";
const overviewLink =
  "text-[var(--text-primary)] underline decoration-[var(--border-subtle)] underline-offset-[3px] transition-opacity hover:opacity-85";

const IDEAWORKS_RANKINGS_URL =
  "https://ideaworks.mohawkcollege.ca/mohawk-college-ranked-2nd-nationally-1st-provincially-in-applied-research/" as const;

export function ResearchInfosourceOverviewSection() {
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
            <span>I supported the </span>
            <span className={em}>rebranding</span>
            <span> and </span>
            <span className={em}>visual design</span>
            <span> for a celebratory event recognizing </span>
            <a
              href={IDEAWORKS_RANKINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={overviewLink}
            >
              Mohawk College IDEAWORKS&apos; achievement of ranking 2nd nationally and 1st
              provincially in applied research
            </a>
            <span>.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>My role focused on developing a </span>
            <span className={em}>cohesive</span>
            <span> and </span>
            <span className={em}>engaging visual identity</span>
            <span> applied across </span>
            <span className={em}>multiple touchpoints</span>
            <span>, including </span>
            <span className={em}>event graphics</span>
            <span>, </span>
            <span className={em}>presentation design</span>
            <span>, and </span>
            <span className={em}>social media content</span>
            <span>.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>In addition to design work, I contributed to the </span>
            <span className={em}>overall event experience</span>
            <span> by assisting with </span>
            <span className={em}>on-site logistics</span>
            <span> and </span>
            <span className={em}>coordination</span>
            <span>
              , helping ensure the celebration ran smoothly for guests and stakeholders. I also{" "}
            </span>
            <span className={em}>captured</span>
            <span> and </span>
            <span className={em}>edited video content</span>
            <span> to document the event and support post-event communications.</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            <span>Through this project, I strengthened my skills in maintaining </span>
            <span className={em}>brand consistency</span>
            <span>, working under </span>
            <span className={em}>fast-paced production timelines</span>
            <span>, and </span>
            <span className={em}>collaborating across teams</span>
            <span> to deliver a unified event presence.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
