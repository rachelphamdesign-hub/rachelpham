"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Figma node 448:1885 — horizontal scroll track (overflow-x + scroll-snap only).
 * Beyond the screen: no motion wrappers, no hover scale / transitions on media.
 */

type BeyondPhoto = {
  src: string;
  label: string;
  sublabel: string;
  imageStyle?: CSSProperties;
};

const photos: BeyondPhoto[] = [
  {
    src: "https://www.figma.com/api/mcp/asset/906119ef-bc8d-41f3-86d2-f37b7675b505",
    label: "Mountain Walks",
    sublabel: "Garibaldi Lake — where I enjoy quiet moments and nature.",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/fa5d0eb6-b668-4163-b2ee-eddae7f094b8",
    label: "Global Explore",
    sublabel: "Kyoto — exploring culture, details, and everyday beauty.",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a6b57624-a3ef-45ba-b009-e3d6edc30920",
    label: "Snow Time",
    sublabel: "Chicopee — a place I go to reset and stay active.",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/aae471a9-c913-4674-8680-398f38ed3d54",
    label: "Matcha Lover",
    sublabel: "Handmade matcha — I enjoy the calm, mindful process.",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/4895f408-42bc-4f13-b003-8eeff86890aa",
    label: "Handmade Crafts",
    sublabel: "Making keychains — small creations that bring me joy.",
    imageStyle: {
      width: "108.43%",
      height: "115.83%",
      left: "0%",
      top: "-8.4%",
    },
  },
];

export function AboutBeyondTheScreenSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  const target = useMemo(() => ({ x: 0, y: 0 }), []);
  const pos = useMemo(() => ({ x: 0, y: 0 }), []);

  const OFFSET_X = 18;
  const OFFSET_Y = -10;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onEnter = () => {
      setActive(true);
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };
    const onLeave = () => {
      setActive(false);
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
      // smooth follow
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      const bubble = el.querySelector<HTMLElement>("[data-beyond-cursor]");
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

  return (
    <section
      ref={sectionRef}
      className={`relative border-b py-20 sm:py-24 lg:py-28 ${active ? "cursor-none" : ""}`}
      style={{ borderColor: "var(--border-default)" }}
    >
      <div
        data-beyond-cursor
        className={`pointer-events-none fixed left-0 top-0 z-50 ${active ? "opacity-100" : "opacity-0"}`}
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
      <div className="mx-auto mb-10 flex w-full max-w-[1240px] flex-col gap-3 px-6 sm:mb-12">
        <span
          className="text-[12px] font-bold uppercase leading-[18px] tracking-[1.2px]"
          style={{ color: "var(--text-muted)" }}
        >
          Interests &amp; Inspiration
        </span>
        <h2
          className="max-w-[720px] text-[36px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[52px]"
          style={{ color: "var(--text-primary)" }}
        >
          Interests &amp; Inspiration
        </h2>
      </div>

      <div
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain px-6 pb-3 sm:px-10 lg:px-16 [scrollbar-width:thin]"
        style={{
          scrollbarColor: "var(--border-default) transparent",
        }}
      >
        {photos.map((photo) => (
          <article
            key={photo.label}
            className="relative h-[562px] w-[min(85vw,450px)] shrink-0 snap-start snap-always overflow-hidden rounded-[16px] border shadow-[0_1px_2px_rgba(0,0,0,0.12)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
            style={{ borderColor: "var(--border-default)" }}
          >
            <div className="relative h-full w-full">
              {photo.imageStyle ? (
                <>
                  {/* Figma crop for Handmade Crafts requires explicit % width/height; use absolute img, not next/image fill. */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- exact Figma crop percentages with absolute sizing */}
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="absolute max-w-none object-cover"
                    style={photo.imageStyle}
                    draggable={false}
                  />
                </>
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 450px"
                />
              )}
            </div>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(102,102,102,0) 42.844%)",
              }}
            />
            <div className="absolute inset-x-0 px-8 pb-9 pt-0" style={{ bottom: 0 }}>
              <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-white">
                {photo.label}
              </p>
              <p className="mt-2 text-[14px] leading-[21px] text-white/80">
                {photo.sublabel}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
