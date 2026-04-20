"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Figma 275:21145 — Social Media Design header + carousel + full-bleed media (local final video) */
const FINAL_VIDEO_SRC = "/media/ideas-to-impact-final.mp4";

const CHEVRON_LEFT =
  "https://www.figma.com/api/mcp/asset/1c9478f3-d561-4af9-9d29-922239d7b182";
const CHEVRON_RIGHT =
  "https://www.figma.com/api/mcp/asset/e7819ba2-b6e1-479a-a670-106c6d5a23ee";

const CAROUSEL_IMGS = [
  {
    src: "https://www.figma.com/api/mcp/asset/eaa4900a-0c11-4696-8e01-331fe7bb2687",
    alt: "Ideas to Impact 2026 social graphic — registration and event details",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/26ba2d7d-71d8-411b-a1bd-815b4c48cc48",
    alt: "Speaker lineup social card for applied research session",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/eb429601-461f-4ba3-8115-3c38f3a62aae",
    alt: "Ideas to Impact social post — sponsors and partners",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/f34e635c-51d0-433b-ad88-72406c142083",
    alt: "Ideas to Impact social graphic variant",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/2b0da256-1993-4c15-85ee-20ea6c3e02ec",
    alt: "Ideas to Impact social graphic variant",
  },
] as const;

export function IdeasToImpactSocialMediaDesignSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const carouselCursorRef = useRef<HTMLDivElement | null>(null);
  const finalVideoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  /** Un-mute only while pointer is over the final video (default: silent / autoplay-friendly) */
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
      const bubble = el.querySelector<HTMLElement>("[data-ideas-impact-drag-cursor]");
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
              className="flex size-12 items-center justify-center rounded-full bg-[var(--pill-badge-bg)] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] transition-opacity hover:opacity-90 dark:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.35),0px_1px_4px_0px_rgba(0,0,0,0.15)]"
              onClick={() => scrollByDir(-1)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={CHEVRON_LEFT} className="size-[10px]" />
            </button>
            <button
              type="button"
              aria-label="Next slides"
              className="flex size-12 items-center justify-center rounded-full bg-[var(--pill-badge-bg)] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] transition-opacity hover:opacity-90 dark:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.35),0px_1px_4px_0px_rgba(0,0,0,0.15)]"
              onClick={() => scrollByDir(1)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={CHEVRON_RIGHT} className="size-[10px]" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselCursorRef}
        className={`relative ${cursorActive ? "cursor-none" : ""}`}
      >
        <div
          data-ideas-impact-drag-cursor
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
            drag to view more
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
          Closing video for Ideas to Impact — plays automatically without sound; move the pointer over the video to hear audio.
        </p>
        <video
          ref={finalVideoRef}
          src={FINAL_VIDEO_SRC}
          className="mx-auto block h-auto max-h-[85vh] w-full max-w-[min(100%,1920px)] object-contain object-center"
          autoPlay
          loop
          muted={!hoverAudio}
          playsInline
          preload="metadata"
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
