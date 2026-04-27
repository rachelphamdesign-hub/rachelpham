"use client";

import Image from "next/image";
import { cashpayInsetX } from "@/lib/cashpaySpacing";

const STORYBOARD_IMAGE_SRC = "/media/image/trackguard/Screenshot%202024-06-20%20173954%203.png";

export function TrackGuardStoryboardSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto w-full max-w-[1080px] ${cashpayInsetX}`}>
        <div className="mx-auto max-w-[980px]">
          <h3 className="text-[40px] font-semibold tracking-[-1px] text-[var(--text-primary)] sm:text-[44px] lg:text-[48px]">
            Storyboard
          </h3>
          <p className="mt-6 max-w-[900px] text-[17px] leading-[1.62] text-[var(--text-secondary)] sm:text-[18px] sm:leading-[1.625]">
            The storyboard illustrate how TrackGuard effectively protects vehicles during a theft
            scenario. From sending alerts and activating alarms to capturing the thief&apos;s image and
            tracking the car&apos;s location, the app provides all the tools needed to deter theft, gather
            evidence, and support recovery. The process ensures user confidence and a successful
            resolution.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[940px] sm:mt-14 lg:mt-16">
          <div className="relative w-full overflow-hidden rounded-[32px] sm:rounded-[52px] lg:rounded-[73px]">
            <Image
              src={STORYBOARD_IMAGE_SRC}
              alt="TrackGuard storyboard illustrating theft detection and recovery flow"
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
