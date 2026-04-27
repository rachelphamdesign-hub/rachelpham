import Image from "next/image";

/** Figma 244:16575 — Google Forms “Responses” mockup */
const imgSurveyResponses = "/media/image/trackguard/survey%203.png";

/** Figma 244:16570 — Survey Results heading + responses mockup */
export function TrackGuardSurveyResultsSection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-10 md:gap-12">
        <h2 className="w-full text-left text-[40px] font-semibold leading-9 tracking-[-0.6px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[36px]">
          Survey Results
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl shadow-[var(--shadow-card-soft)]">
            <div className="relative aspect-[520/339] w-full">
              <Image
                src={imgSurveyResponses}
                alt=""
                fill
                className="object-contain object-center"
                sizes="(max-width: 520px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
