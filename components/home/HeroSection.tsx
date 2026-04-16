import Link from "next/link";
import { Hero3DModel } from "@/components/Hero3DModel";
import { ChatBox } from "@/components/ChatBox";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Above-the-fold home hero — kept separate from below-fold so it ships in the
 * initial page bundle and hydrates before Featured Projects (lazy chunk).
 */
export function HeroSection() {
  return (
    <section className="px-6 pb-6 pt-[130px] sm:pb-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[1fr_560px]">
          <div className="relative flex flex-col items-start">
            <ScrollReveal variant="media" className="mb-7 w-full max-w-[540px]">
              <Hero3DModel className="shadow-[0_14px_46px_rgba(0,0,0,0.08)]" />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <h1
                className="text-[47px] font-extrabold leading-[1.04] tracking-[-0.042em]"
                style={{ color: "var(--text-primary)" }}
              >
                Hello, I&apos;m Rachel.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p
                className="mt-1 text-[47px] font-extrabold leading-[1.04] tracking-[-0.02em]"
                style={{ color: "var(--text-subtle)" }}
              >
                A Product designer
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.36} className="mt-7 flex items-center gap-3">
              <Link
                href="/#work"
                className="inline-flex h-[48px] items-center gap-2 rounded-[24px] px-8 text-[14px] font-medium transition-opacity duration-500 hover:opacity-90"
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
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal
            delay={0.14}
            className="relative w-full max-w-[560px] justify-self-center lg:justify-self-end"
          >
            <ChatBox />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
