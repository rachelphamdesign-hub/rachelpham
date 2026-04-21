"use client";

import Link from "next/link";
import { useState } from "react";
import { RevealCopy, RevealMedia } from "@/components/ProjectCardScrollReveal";
import { LazyVideo } from "@/components/LazyVideo";
import type { ProjectCardCursorBubbleApi } from "@/components/useProjectCardCursorBubble";

type Props = {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  titleClass: string;
  subtitleClass: string;
  mediaSrc: string;
  areaClass: string;
  heightClass: string;
  cursorBubble: ProjectCardCursorBubbleApi;
  fillParent?: boolean;
};

/** Ideas to Impact — video muted until hover (Figma 16:1546). */
export function FeaturedIdeasVideoCard({
  slug,
  title,
  subtitle,
  label,
  titleClass,
  subtitleClass,
  mediaSrc,
  areaClass,
  heightClass,
  cursorBubble,
  fillParent = false,
}: Props) {
  const [muted, setMuted] = useState(true);
  const sizing = fillParent
    ? "h-full min-h-0 w-full"
    : `${areaClass} ${heightClass}`.trim();

  return (
    <Link
      href={`/work/${slug}`}
      className={`group relative block min-h-0 min-w-0 overflow-hidden rounded-[16px] border shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-action)] ${sizing}`}
      style={{
        background: "var(--featured-card-bg)",
        borderColor: "var(--featured-card-border)",
      }}
      onMouseEnter={(e) => {
        cursorBubble.onMouseEnter(e);
        setMuted(false);
      }}
      onMouseMove={cursorBubble.onMouseMove}
      onMouseLeave={() => {
        cursorBubble.onMouseLeave();
        setMuted(true);
      }}
    >
      <RevealMedia className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" aria-hidden />
        <LazyVideo
          src={mediaSrc}
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted={muted}
          loop
          playsInline
          aria-label={`${title} background video`}
        />
        <div
          className="absolute inset-0 z-[2] bg-black/40 mix-blend-saturation"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
          aria-hidden
        />
      </RevealMedia>
      <RevealCopy
        className="absolute inset-x-0 bottom-0 z-[4] flex flex-col gap-4 px-8 pb-7 pt-[28%] sm:px-9 sm:pb-8"
        delay={0.14}
      >
        <div className="flex flex-col gap-2">
          <p
            className="mb-0 text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] sm:text-[12px] sm:tracking-[1.2px]"
            style={{ color: "var(--featured-meta)" }}
          >
            {label}
          </p>
          <h3
            className={`text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.55)] ${titleClass}`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`max-w-[min(100%,28rem)] font-light opacity-[0.92] text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
          style={{ color: "var(--featured-body)" }}
        >
          {subtitle}
        </p>
      </RevealCopy>
      {cursorBubble.bubble}
    </Link>
  );
}
