"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const POSTS = "/media/l2t_port/L2G%20Program%20-%20Updated%20Posts";

const CAROUSEL_IMGS = [
  {
    src: `${POSTS}/5.png`,
    alt: "Learning 2Gether social post — program overview for student-caregivers",
  },
  {
    src: `${POSTS}/6.png`,
    alt: "Learning 2Gether social post — Mohawk College and Terryberry Library schedule",
  },
  {
    src: `${POSTS}/L2G%20Program%20-%20Updated%20Posts.png`,
    alt: "Learning 2Gether social post — Discover the Learning 2Gether Program",
  },
  {
    src: `${POSTS}/LinkedIn.png`,
    alt: "Learning 2Gether LinkedIn post — tutoring and programming for families",
  },
] as const;

export function Learning2GetherSocialMediaDesignSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const carouselCursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);

  const target = useMemo(() => ({ x: 0, y: 0 }), []);
  const pos = useMemo(() => ({ x: 0, y: 0 }), []);

  const OFFSET_X = 18;
  const OFFSET_Y = -10;

  useEffect(() => {
    const el = carouselCursorRef.current;
    if (!el) return;

    const onEnter = () => {
      setCursorActive(true);
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };
    const onLeave = () => {
      setCursorActive(false);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX + OFFSET_X;
      target.y = e.clientY + OFFSET_Y;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      const bubble = el.querySelector<HTMLElement>("[data-l2g-drag-cursor]");
      if (bubble) bubble.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pos, target, OFFSET_X, OFFSET_Y]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.min(el.clientWidth * 0.85, 474);
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--bg-surface)] pb-24 pt-[89px] sm:pb-32 lg:pb-[192px]">
      <div className="mx-auto mb-6 flex w-full max-w-[1050px] flex-col gap-6 px-6 sm:mb-10 sm:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="flex max-w-[616px] flex-col gap-4">
            <h2 className="text-[36px] font-bold leading-10 tracking-[-0.9px] text-[var(--text-primary)]">
              Social Media Design
            </h2>
            <p className="text-[18px] leading-7 tracking-[-0.24px] text-[var(--text-muted)]">
              Designed social content to share updates and connect with the audience.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous slides"
              className="flex size-12 items-center justify-center rounded-full bg-[var(--pill-badge-bg)] text-[var(--text-primary)] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] transition-opacity hover:opacity-90 dark:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.35),0px_1px_4px_0px_rgba(0,0,0,0.15)]"
              onClick={() => scrollByDir(-1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slides"
              className="flex size-12 items-center justify-center rounded-full bg-[var(--pill-badge-bg)] text-[var(--text-primary)] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] transition-opacity hover:opacity-90 dark:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.35),0px_1px_4px_0px_rgba(0,0,0,0.15)]"
              onClick={() => scrollByDir(1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselCursorRef}
        className={`relative ${cursorActive ? "cursor-none" : ""}`}
      >
        <div
          data-l2g-drag-cursor
          className={`pointer-events-none fixed left-0 top-0 z-50 ${cursorActive ? "opacity-100" : "opacity-0"}`}
          style={{ transform: "translate3d(0px, 0px, 0)", transition: "opacity 120ms ease" }}
          aria-hidden
        >
          <div
            className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{
              background: "color-mix(in oklab, var(--bg-surface) 86%, transparent)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-default)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            Swipe for more →
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pb-4 pl-6 pt-[59px] [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-10 lg:pl-16 [&::-webkit-scrollbar]:hidden"
        >
          {CAROUSEL_IMGS.map(({ src, alt }) => (
            <div
              key={src}
              className="w-[min(450px,85vw)] shrink-0 snap-start overflow-hidden rounded-[16px] shadow-sm"
            >
              <div className="relative aspect-[450/439] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={alt}
                  src={src}
                  className="pointer-events-none absolute inset-0 size-full object-cover select-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
