"use client";

import Image from "next/image";
import { cashpayInsetX } from "@/lib/cashpaySpacing";

/** Figma 255:19548 — High Fidelity (heading, intro, presentation prototype board) */
const HIGH_FIDELITY_IMAGE_SRC =
  "https://www.figma.com/api/mcp/asset/ce86280c-936d-44bc-824b-0053ac52707b";

export function TrackGuardHighFidelitySection() {
  return (
    <section
      className="relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto w-full max-w-[1080px] ${cashpayInsetX}`}>
        <div className="mx-auto max-w-[980px]">
          <h3 className="text-[40px] font-semibold tracking-[-1px] text-[var(--text-primary)] sm:text-[44px] lg:text-[48px] lg:tracking-[-1.2px]">
            High Fidelity
          </h3>
          <p className="mt-6 max-w-[900px] text-[17px] leading-[1.62] text-[var(--text-secondary)] sm:text-[18px] sm:leading-[29.25px]">
            Our team designed high-fidelity wireframes and mapped a seamless user flow, leading to a
            polished presentation prototype in Figma that showcases the app&apos;s core functionality.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[940px] sm:mt-14 lg:mt-16">
          <div className="relative w-full overflow-hidden rounded-[32px] sm:rounded-[52px] lg:rounded-[73px]">
            <Image
              src={HIGH_FIDELITY_IMAGE_SRC}
              alt="TrackGuard high-fidelity screens and user flow prototype in Figma"
              width={1227}
              height={871}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
