"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LazyVideo } from "@/components/LazyVideo";

/** Figma 291:23888 — Social Media Design + carousel + full-bleed finale (local After Effects export). */
const FINAL_VIDEO_SRC = "/media/fhir-north-social-finale.mp4";

const CAROUSEL_IMGS = [
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/FINAL%20-%20save%20the%20date%20-%20May%2027th%20Post.jpg",
    alt: "FHIR North 2025 social graphic — Automating interoperability with event dates",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/FHIR%20North%202025%20by%20the%20Numbers%20%281%29.png",
    alt: "FHIR North 2025 social post — attendees, speakers, and sessions metrics",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/Call%20For%20Speakers.jpg",
    alt: "FHIR North 2025 — call for speakers announcement",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/Call%20for%20Sponsors.jpg",
    alt: "FHIR North conference social graphic",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/FHIR%20Community%20Panel%20%20Personal%20SM%20%20FN25.png",
    alt: "FHIR North 2025 social campaign asset",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/Panelists%20-%20FHIR%20and%20AI.jpg",
    alt: "FHIR North digital health conference social graphic",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/Speaker%20Announcement.jpg",
    alt: "FHIR North marketing social graphic",
  },
  {
    src: "/media/image/fhir/FHIR%20North%202025%20SM%20Posts/Sponsor%20Announcement%20v3.jpg",
    alt: "FHIR North Mohawk IDEAWORKS social graphic",
  },
] as const;

export function FhirNorthSocialMediaDesignSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const carouselCursorRef = useRef<HTMLDivElement | null>(null);
  const finalVideoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  /** Un-mute only while pointer is over the finale video (default: silent / autoplay-friendly). */
  const [hoverAudio, setHoverAudio] = useState(false);

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
      const bubble = el.querySelector<HTMLElement>("[data-fhir-north-drag-cursor]");
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

  useEffect(() => {
    const v = finalVideoRef.current;
    if (!v || !hoverAudio) return;
    void v.play().catch(() => {
      /* Playback may fail until user gesture on strict browsers */
    });
  }, [hoverAudio]);

  const scrollByDir = (dir: -1 | 1) => {
    const scrollEl = scrollerRef.current;
    if (!scrollEl) return;
    const delta = Math.min(scrollEl.clientWidth * 0.85, 474);
    scrollEl.scrollBy({ left: dir * delta, behavior: "smooth" });
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
          data-fhir-north-drag-cursor
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

      <div
        className="group relative mt-12 flex w-full cursor-default items-center justify-center overflow-hidden py-6 sm:mt-16 sm:py-8 lg:mt-20"
        onPointerEnter={() => setHoverAudio(true)}
        onPointerLeave={() => setHoverAudio(false)}
      >
        <p className="sr-only">
          Closing motion piece for FHIR North social — plays automatically without sound; move the pointer over the video to hear audio.
        </p>
        <LazyVideo
          ref={finalVideoRef}
          src={FINAL_VIDEO_SRC}
          className="mx-auto block h-auto max-h-[85vh] w-full max-w-[min(100%,1920px)] object-contain object-center"
          autoPlay
          loop
          muted={!hoverAudio}
          playsInline
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-5 left-5 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-white opacity-100 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0 sm:left-8"
          aria-hidden
        >
          Hover for sound
        </span>
      </div>
    </section>
  );
}
