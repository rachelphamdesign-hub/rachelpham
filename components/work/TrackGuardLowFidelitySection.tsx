"use client";

import Image from "next/image";
import { cashpayInsetX } from "@/lib/cashpaySpacing";

const LOW_FIDELITY_IMAGE_SRC = "https://www.figma.com/api/mcp/asset/8cbb1eac-6e5b-436b-940d-f8d104ea845c";

export function TrackGuardLowFidelitySection() {
  return (
    <section
      className="relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto w-full max-w-[1080px] ${cashpayInsetX}`}>
        <div className="mx-auto max-w-[980px]">
          <h3 className="text-[40px] font-semibold tracking-[-1px] text-[var(--text-primary)] sm:text-[44px] lg:text-[48px]">
            Low Fidelity
          </h3>
          <p className="mt-6 max-w-[900px] text-[17px] leading-[1.62] text-[var(--text-secondary)] sm:text-[18px] sm:leading-[1.625]">
            Our sketches prioritize a clean, user-friendly design with quick access to critical
            emergency features like &ldquo;Activate Alarm,&rdquo; &ldquo;Track My Car,&rdquo; and
            &ldquo;Lock/Unlock.&rdquo; Additional sections for alerts and reporting enhance functionality,
            ensuring users can navigate easily even in stressful situations.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[940px] sm:mt-14 lg:mt-16">
          <div className="relative w-full overflow-hidden rounded-[32px] sm:rounded-[52px] lg:rounded-[73px]">
            <Image
              src={LOW_FIDELITY_IMAGE_SRC}
              alt="Low-fidelity TrackGuard app sketches"
              width={940}
              height={667}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
