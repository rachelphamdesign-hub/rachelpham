import { Hero3DModel } from "@/components/Hero3DModel";
import { ChatBox } from "@/components/ChatBox";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ViewShowcaseLink } from "@/components/home/ViewShowcaseLink";

/**
 * Above-the-fold home hero — kept separate from below-fold so it ships in the
 * initial page bundle and hydrates before Featured Projects (lazy chunk).
 */
const heroTitleClass =
  "max-w-full text-[clamp(1.6875rem,1rem+4.25vw,2.9375rem)] font-extrabold leading-[1.06] tracking-[-0.035em] sm:leading-[1.04] sm:tracking-[-0.042em]";

export function HeroSection() {
  return (
    <section className="overflow-x-clip px-4 pb-20 pt-32 sm:px-6 sm:pb-32 sm:pt-[130px] lg:pb-40">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[1fr_560px] lg:gap-[30px]">
          <div className="relative flex min-w-0 flex-col items-stretch sm:items-start">
            <ScrollReveal variant="media" className="mb-5 w-full max-w-[540px] sm:mb-7">
              <Hero3DModel className="shadow-[0_14px_46px_rgba(0,0,0,0.08)]" />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <h1 className={heroTitleClass} style={{ color: "var(--text-primary)" }}>
                Hello, I&apos;m Rachel.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p
                className={`mt-0.5 sm:mt-1 ${heroTitleClass}`}
                style={{ color: "var(--text-subtle)" }}
              >
                A Product designer
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.36} className="mt-6 w-full sm:mt-7 sm:w-auto">
              <ViewShowcaseLink
                className="inline-flex h-12 w-full min-h-12 touch-manipulation items-center justify-center gap-2 rounded-[24px] px-6 text-[14px] font-medium transition-opacity duration-500 hover:opacity-90 active:opacity-90 sm:w-auto sm:px-8"
                style={{
                  background: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                View Showcase
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M1 11L11 1M11 1H4M11 1V8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ViewShowcaseLink>
            </ScrollReveal>
          </div>

          <ScrollReveal
            delay={0.14}
            className="relative w-full min-w-0 max-w-[560px] justify-self-stretch sm:justify-self-center lg:justify-self-end"
          >
            <ChatBox />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
