"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cashpayBlockGapL, cashpayInsetX, cashpayTitleToBody } from "@/lib/cashpaySpacing";

type FeatureItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "01. Location-Based Notifications",
    description:
      "TrackGuard sends alerts based on the location of the car and its owner to keep you informed of any suspicious activity.",
    imageSrc: "https://www.figma.com/api/mcp/asset/9578fd4a-f8b3-4558-940e-8c1a1a00f98c",
    imageAlt: "TrackGuard app showing location-based notifications",
  },
  {
    title: "02. Emergency Alert Activation",
    description:
      "When you receive a notification, you can activate an alert with a unique TrackGuard sound. This loud sound ensures people nearby can hear it, helping to alert authorities like the police.",
    imageSrc: "https://www.figma.com/api/mcp/asset/234c47a9-312c-46ad-82e8-7b1ccf4b1046",
    imageAlt: "TrackGuard app showing emergency alert activation",
  },
  {
    title: "03. Automatic Picture Capture",
    description:
      "If a thief moves the car, TrackGuard automatically takes pictures of the surroundings. These images can help identify the car's location, even if the GPS has been disabled by the thief.",
    imageSrc: "https://www.figma.com/api/mcp/asset/02502760-5c66-486a-b2f0-e04875b39d94",
    imageAlt: "TrackGuard app showing automatic picture capture",
  },
];

const WHEEL_THRESHOLD = 90;
const STEP_COOLDOWN_MS = 620;
const TRANSITION_MS = 600;

export function TrackGuardKeyFeatures() {
  const rootRef = useRef<HTMLElement | null>(null);
  const activeIndexRef = useRef(0);
  const stepLockRef = useRef(false);
  const wheelAccRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartY = useRef<number | null>(null);

  const features = useMemo(() => FEATURE_ITEMS, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
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
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto min-h-[min(80vh,820px)] w-full max-w-[1080px] overflow-hidden ${cashpayInsetX}`}>
        <h3 className="text-[36px] font-semibold tracking-[-0.6px] text-[var(--text-primary)]">Key Features</h3>

        <div className={cashpayTitleToBody}>
          <div className={`grid grid-cols-1 items-center lg:grid-cols-12 ${cashpayBlockGapL}`}>
            <div className="relative lg:col-span-8">
              <div className="relative mx-auto aspect-square w-full max-w-[610px] overflow-hidden rounded-[40px] bg-transparent">
                {features.map((feature, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={feature.imageSrc}
                      className={`absolute inset-0 transition-all ease-out ${
                        isActive
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                    >
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 610px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="flex flex-col gap-8 lg:col-span-4"
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
                        className={`border-l-2 pl-5 transition-all ease-out ${
                          isActive
                            ? "border-[rgba(0,102,204,0.4)] dark:border-[rgba(100,181,255,0.45)]"
                            : "border-[var(--border-default)]"
                        }`}
                        style={{ transitionDuration: `${TRANSITION_MS}ms` }}
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

              <div className="relative min-h-[120px]">
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
                        <p className="border-l-2 border-[rgba(0,102,204,0.4)] pl-5 text-[12px] font-normal leading-[19.5px] text-[var(--text-secondary)] dark:border-[rgba(100,181,255,0.45)] sm:text-[13px]">
                          {feature.description}
                        </p>
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
