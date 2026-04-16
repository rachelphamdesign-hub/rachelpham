"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cashpayBlockGapL, cashpayInsetX, cashpayTitleToBody } from "@/lib/cashpaySpacing";

type FeatureItem = {
  title: string;
  description: string[];
  videoSrc: string;
};

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "01. Real-Time Notifications",
    description: [
      "Receive instant notifications for every card transaction.",
      "Choose to add transactions manually or let the CashPay app do it automatically.",
      "For cash transactions, take a photo of the bill through the app, add the details automatically or manually.",
    ],
    videoSrc: "/media/cashpay-key-feature-1.mp4",
  },
  {
    title: "02. Budget Tracking",
    description: [
      "Easily track all your budgets.",
      "Access detailed data and charts on a daily, monthly, and yearly basis.",
    ],
    videoSrc: "/media/cashpay-key-feature-2.mp4",
  },
  {
    title: "03. Card Management",
    description: [
      "Manage all your credit and debit cards in one place.",
      "Quickly check balances across all cards.",
      "Effortlessly keep track of all bills and financial goals associated with each card.",
    ],
    videoSrc: "/media/cashpay-key-feature-3.mp4",
  },
];

const WHEEL_THRESHOLD = 90;
const STEP_COOLDOWN_MS = 620;
const TRANSITION_MS = 600;

export function CashpayKeyFeatures() {
  const rootRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const activeIndexRef = useRef(0);
  const stepLockRef = useRef(false);
  const wheelAccRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartY = useRef<number | null>(null);

  const features = useMemo(() => FEATURE_ITEMS, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.muted = true;
        void video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const goToIndex = useCallback((next: number) => {
    if (stepLockRef.current) return;
    setActiveIndex((prev) => {
      if (next === prev || next < 0 || next > features.length - 1) return prev;
      stepLockRef.current = true;
      window.setTimeout(() => {
        stepLockRef.current = false;
      }, STEP_COOLDOWN_MS);
      return next;
    });
  }, [features.length]);

  const tryStep = useCallback(
    (direction: 1 | -1) => {
      const idx = activeIndexRef.current;
      goToIndex(idx + direction);
    },
    [goToIndex],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onWheel = (e: WheelEvent) => {
      const rect = root.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
      if (!inView) return;

      const idx = activeIndexRef.current;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if (goingDown && idx >= features.length - 1) return;
      if (goingUp && idx <= 0) return;

      wheelAccRef.current += e.deltaY;
      if (Math.abs(wheelAccRef.current) < WHEEL_THRESHOLD) {
        e.preventDefault();
        return;
      }

      const direction = wheelAccRef.current > 0 ? 1 : -1;
      wheelAccRef.current = 0;

      if (direction === 1 && idx < features.length - 1) {
        e.preventDefault();
        tryStep(1);
      } else if (direction === -1 && idx > 0) {
        e.preventDefault();
        tryStep(-1);
      }
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [features.length, tryStep]);

  return (
    <section
      ref={rootRef}
      className="relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 py-12 text-[var(--text-primary)] lg:py-14"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className={`mx-auto min-h-[min(80vh,820px)] w-full max-w-[1080px] overflow-hidden ${cashpayInsetX}`}>
        <h3 className="text-[36px] font-semibold tracking-[-0.6px] text-[var(--text-primary)]">Key Features</h3>

        <div className={cashpayTitleToBody}>
        <div className={`grid grid-cols-1 items-center lg:grid-cols-12 ${cashpayBlockGapL}`}>
          <div className="relative lg:col-span-7">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-visible bg-transparent">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={feature.videoSrc}
                    className={`absolute inset-0 transition-all ease-out ${
                      isActive
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={feature.videoSrc}
                      className="h-full w-full object-contain"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="flex flex-col gap-8 lg:col-span-5"
            onTouchStart={(e) => {
              touchStartY.current = e.touches[0]?.clientY ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchStartY.current;
              touchStartY.current = null;
              if (start == null) return;
              const end = e.changedTouches[0]?.clientY ?? start;
              const dy = start - end;
              if (Math.abs(dy) < 48) return;
              if (dy > 0) tryStep(1);
              else tryStep(-1);
            }}
          >
            <div className="flex flex-col gap-0">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => goToIndex(idx)}
                    className="w-full border-b border-[var(--border-default)] py-6 text-left last:border-b-0"
                  >
                    <div
                      className="border-l-2 pl-5 transition-all ease-out"
                      style={{
                        transitionDuration: `${TRANSITION_MS}ms`,
                        borderColor: isActive
                          ? "var(--cashpay-keyfeature-border-active)"
                          : "var(--cashpay-keyfeature-border-idle)",
                      }}
                    >
                      <p
                        className={`text-[13px] font-semibold uppercase tracking-[0.325px] transition-all ease-out sm:text-[14px] ${
                          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                        }`}
                        style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                      >
                        {feature.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[200px]">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={`${feature.title}-body`}
                    className={`transition-all ease-out ${
                      isActive
                        ? "relative translate-y-0 opacity-100"
                        : "pointer-events-none absolute inset-0 translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                    aria-hidden={!isActive}
                  >
                    {isActive ? (
                      <ul className="list-disc space-y-3 pl-5 text-[16px] leading-[1.75] text-[var(--text-secondary)] sm:text-[17px]">
                        {feature.description.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
