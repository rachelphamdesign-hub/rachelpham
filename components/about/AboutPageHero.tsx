"use client";

import { useState } from "react";
import type { AboutPose } from "@/components/about/aboutModelUrls";
import { About3DFigmaFrame } from "@/components/about/About3DFigmaFrame";
import { ScrollReveal } from "@/components/ScrollReveal";

const linkClass =
  "underline decoration-[var(--border-subtle)] decoration-[5%] underline-offset-[3px] transition-opacity hover:opacity-80";

export function AboutPageHero() {
  const [selectedPose, setSelectedPose] = useState<AboutPose>("stand");

  return (
    <section
      className="border-b px-6 pb-20 pt-[120px] sm:pb-24 sm:pt-[128px] lg:pb-28 lg:pt-[136px]"
      style={{
        background: "var(--bg-page)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:items-stretch lg:gap-14 xl:grid-cols-[minmax(300px,460px)_minmax(0,1fr)] xl:gap-16">
        {/* Left — Figma 443:1562 */}
        <ScrollReveal className="order-1" variant="media">
          <div className="flex min-h-[420px] w-full min-w-0 flex-col self-stretch sm:min-h-[460px] lg:min-h-[520px]">
            <About3DFigmaFrame
              selectedPose={selectedPose}
              onSelectPose={setSelectedPose}
            />
          </div>
        </ScrollReveal>

        {/* Right — Figma 443:1565, 1568, 1569, 1571, 1572, 1574, 1575 */}
        <div className="order-2 flex min-w-0 flex-col items-start gap-8 text-left lg:max-w-[min(720px,100%)] lg:justify-self-start xl:max-w-[min(760px,100%)]">
          <ScrollReveal delay={0.08} className="w-full">
            <div className="flex w-full flex-col gap-3 sm:gap-4">
            <h1 className="w-full text-pretty text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[var(--accent-blue)] sm:text-[32px] lg:text-[34px]">
              Hi there!{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>{" "}
              I&apos;m Rachel Pham
            </h1>

            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Today
            </p>

            <p className="text-[15px] font-normal leading-[1.65] tracking-[-0.01em] text-[var(--text-primary)] sm:text-[16px]">
              I&apos;m a Product and Graphic Designer based in Ontario.
            </p>

            <p className="text-[15px] font-normal leading-[1.65] tracking-[-0.01em] text-[var(--text-primary)] sm:text-[16px]">
              I currently work as a Graphic &amp; Web Designer with the Business Team at the{" "}
              <a
                className={linkClass}
                href="https://ideaworks.mohawkcollege.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applied Research Centre at Mohawk College.
              </a>{" "}
              Previously, I interned as both a graphic designer and UI/UX designer at{" "}
              <a
                className={linkClass}
                href="https://sunrisecreative.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunrise Creative
              </a>{" "}
              and{" "}
              <a
                className={linkClass}
                href="https://www.linkedin.com/company/shapetheweb/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Websters Shape the Web Inc.
              </a>
            </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16} className="w-full">
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Growth
              </span>
              <p className="text-[15px] font-normal leading-[1.65] text-[var(--text-primary)] sm:text-[16px]">
                I first got interested in UI/UX to see how design could make everyday experiences
                easier and more enjoyable. Over time, it became about understanding people, what they
                need, what frustrates them, and how to create solutions that feel simple, natural, and
                useful.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.24} className="w-full">
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Goal
              </span>
              <p className="text-[15px] font-normal leading-[1.65] text-[var(--text-primary)] sm:text-[16px]">
                I approach each project with a problem-solving mindset, balancing creativity with
                usability. I believe thoughtful design can create comfort, clarity, and accessibility,
                making sure what we build works for everyone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
