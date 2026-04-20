"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FeaturedIdeasVideoCard } from "@/components/FeaturedIdeasVideoCard";
import { RevealCopy, RevealMedia } from "@/components/ProjectCardScrollReveal";
import { useProjectCardCursorBubble } from "@/components/useProjectCardCursorBubble";

/** Figma 11:199 — image positions inside overflow-hidden frame (percent of container) */
const FIGMA_IMAGE: Record<
  "trackguard" | "cashpay" | "applied",
  Pick<CSSProperties, "left" | "top" | "width" | "height">
> = {
  /** Figma 11:200 — TrackGuard phones (composition anchored bottom, centered) */
  trackguard: {
    left: "-9.06%",
    top: "58.21%",
    width: "110.69%",
    height: "181.94%",
  },
  cashpay: {
    left: "26.72%",
    top: "-10.03%",
    width: "108.92%",
    height: "137.47%",
  },
  applied: {
    left: "27.86%",
    top: "7.69%",
    width: "95.49%",
    height: "142.27%",
  },
};

type FeaturedLayout =
  | "hero"
  | "trackguard"
  | "cashpay"
  | "cashpayCenter"
  | "applied"
  | "ideasVideo"
  | "fhirVideo"
  | "votPhoto";

export type FeaturedProjectProps = {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  layout: FeaturedLayout;
  areaClass: string;
  heightClass: string;
  titleClass: string;
  subtitleClass: string;
  mediaType?: "image" | "video";
  mediaSrc: string;
  /** When true, card fills a positioned parent (e.g. constrained layout wrapper). */
  fillParent?: boolean;
};

function FigmaPlacedImage({
  src,
  alt,
  placement,
}: {
  src: string;
  alt: string;
  placement: keyof typeof FIGMA_IMAGE;
}) {
  const s = FIGMA_IMAGE[placement];
  /* TrackGuard: tall placement box + object-cover defaults to vertical center crop — clips phone tops */
  const objectClass =
    placement === "trackguard"
      ? "absolute max-w-none object-cover object-[center_top]"
      : "absolute max-w-none object-cover";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {/* eslint-disable-next-line @next/next/no-img-element -- Figma-exact % positioning */}
      <img
        src={src}
        alt={alt}
        className={objectClass}
        style={{
          ...s,
          maxWidth: "none",
        }}
        draggable={false}
      />
    </div>
  );
}

export function FeaturedProject({
  slug,
  title,
  subtitle,
  label,
  layout,
  areaClass,
  heightClass,
  titleClass,
  subtitleClass,
  mediaSrc,
  mediaType = "image",
  fillParent = false,
}: FeaturedProjectProps) {
  const cursor = useProjectCardCursorBubble();
  const ch = {
    onMouseEnter: cursor.onMouseEnter,
    onMouseMove: cursor.onMouseMove,
    onMouseLeave: cursor.onMouseLeave,
  };

  const gridSizing = fillParent
    ? "h-full w-full min-h-0"
    : `${areaClass} ${heightClass}`;

  if (layout === "ideasVideo") {
    return (
      <FeaturedIdeasVideoCard
        slug={slug}
        title={title}
        subtitle={subtitle}
        label={label}
        titleClass={titleClass}
        subtitleClass={subtitleClass}
        mediaSrc={mediaSrc}
        areaClass={fillParent ? "" : areaClass}
        heightClass={fillParent ? "" : heightClass}
        cursorBubble={cursor}
        fillParent={fillParent}
      />
    );
  }

  const cardBase =
    "group relative block min-h-0 min-w-0 overflow-hidden border shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-action)]";

  const surface = {
    background: "var(--featured-card-bg)",
    borderColor: "var(--featured-card-border)",
  } as const;

  const titleShade =
    "[text-shadow:0_2px_14px_rgba(0,0,0,0.55)]";

  const subtitleBase =
    "max-w-[min(100%,28rem)] font-light opacity-[0.92]";

  const meta = (
    <p
      className="mb-0 text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] sm:text-[12px] sm:tracking-[1.2px]"
      style={{ color: "var(--featured-meta)" }}
    >
      {label}
    </p>
  );

  if (layout === "fhirVideo") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} relative rounded-[16px] ${gridSizing}`}
        style={surface}
      >
        <RevealMedia className="pointer-events-none absolute inset-0">
          <video
            src={mediaSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${title} background video`}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
            aria-hidden
          />
        </RevealMedia>
        <RevealCopy
          className="absolute inset-0 flex flex-col justify-end gap-5 px-8 pb-10 pt-[26%] sm:gap-6 sm:px-10 sm:pb-11"
          delay={0.14}
        >
          <div className="flex flex-col gap-2">
            {meta}
            <h3
              className={`text-white ${titleShade} ${titleClass}`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${subtitleBase} text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
            style={{ color: "var(--featured-body)" }}
          >
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  /** Events grid — full-bleed packaging photo (#595952 fallback), copy overlaid top-left (unchanged strings). */
  if (layout === "votPhoto") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} relative min-h-0 overflow-hidden rounded-[24px] ${gridSizing}`}
        style={{
          ...surface,
          background: "#595952",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <RevealMedia className="pointer-events-none absolute inset-0">
          <Image
            src={mediaSrc}
            alt={`${title} — kraft bag and takeaway packaging mockup`}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 400px, 100vw"
            unoptimized
          />
          {/* Keep label / title / subtitle legible over the photo */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/15 to-transparent"
            aria-hidden
          />
        </RevealMedia>
        <RevealCopy
          className="relative z-10 flex max-w-[min(100%,20rem)] flex-col items-start gap-2 px-8 pb-8 pt-8 text-left sm:gap-[10px] sm:px-9 sm:pb-9 sm:pt-9"
          delay={0.14}
        >
          <p className="mb-0 text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] text-white sm:text-[12px] sm:tracking-[1.2px]">
            {label}
          </p>
          <h3 className={`text-white ${titleShade} ${titleClass}`}>
            {title}
          </h3>
          <p className={`${subtitleBase} lowercase leading-[1.45] text-white ${subtitleClass}`}>
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  if (layout === "hero") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} rounded-[16px] ${gridSizing}`}
        style={surface}
      >
        <RevealMedia className="pointer-events-none absolute inset-0 relative overflow-hidden rounded-[inherit]">
          {mediaType === "video" ? (
            <video
              src={mediaSrc}
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${title} preview video`}
            />
          ) : (
            <Image
              src={mediaSrc}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 720px, 100vw"
              unoptimized
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[rgba(0,0,0,0.82)]"
            aria-hidden
          />
        </RevealMedia>
        <RevealCopy
          className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-8 pb-7 pt-[28%] sm:px-9 sm:pb-8"
          delay={0.14}
        >
          <div className="flex flex-col gap-2">
            {meta}
            <h3
              className={`text-white ${titleShade} ${titleClass}`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${subtitleBase} text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
            style={{ color: "var(--featured-body)" }}
          >
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  if (layout === "trackguard") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} flex flex-col justify-between rounded-[24px] ${gridSizing}`}
        style={surface}
      >
        <div className="absolute inset-0 rounded-[24px] bg-black" aria-hidden />
        <RevealMedia className="absolute inset-0 rounded-[inherit]" delay={0.14}>
          <FigmaPlacedImage src={mediaSrc} alt="" placement="trackguard" />
        </RevealMedia>
        <RevealCopy className="relative z-10 flex flex-col gap-3 px-10 pb-10 pt-[39px]">
          <div className="flex flex-col gap-2">
            {meta}
            <h3
              className={`text-white ${titleShade} ${titleClass}`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${subtitleBase} max-w-[20rem] leading-[1.45] ${subtitleClass}`}
            style={{ color: "var(--featured-track-desc)" }}
          >
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  if (layout === "cashpay") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} relative rounded-[16px] ${gridSizing}`}
        style={surface}
      >
        <div className="absolute inset-0 rounded-[16px] bg-black" aria-hidden />
        <RevealMedia className="absolute inset-0 rounded-[inherit]">
          <FigmaPlacedImage src={mediaSrc} alt="" placement="cashpay" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
            aria-hidden
          />
        </RevealMedia>
        <RevealCopy
          className="absolute inset-0 flex flex-col justify-end gap-4 px-8 pb-7 pt-[48%] sm:px-9 sm:pb-8"
          delay={0.14}
        >
          <div className="flex flex-col gap-2">
            {meta}
            <h3
              className={`text-white ${titleShade} ${titleClass}`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${subtitleBase} text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
            style={{ color: "var(--featured-body)" }}
          >
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  /* Sweet Sunset — full-bleed cover, centered focal point (no letterboxing) */
  if (layout === "cashpayCenter") {
    return (
      <Link
        href={`/work/${slug}`}
        {...ch}
        className={`${cardBase} relative rounded-[16px] ${gridSizing}`}
        style={surface}
      >
        <div className="absolute inset-0 rounded-[16px] bg-black" aria-hidden />
        <RevealMedia className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mediaSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
            aria-hidden
          />
        </RevealMedia>
        <RevealCopy
          className="absolute inset-0 flex flex-col justify-end gap-4 px-8 pb-7 pt-[48%] sm:px-9 sm:pb-8"
          delay={0.14}
        >
          <div className="flex flex-col gap-2">
            {meta}
            <h3
              className={`text-white ${titleShade} ${titleClass}`}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${subtitleBase} text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
            style={{ color: "var(--featured-body)" }}
          >
            {subtitle}
          </p>
        </RevealCopy>
        {cursor.bubble}
      </Link>
    );
  }

  /* Applied Research 11:251 — mockup right; copy bottom-left (Figma inset + justify-end) */
  return (
    <Link
      href={`/work/${slug}`}
      {...ch}
      className={`${cardBase} relative rounded-[16px] ${gridSizing}`}
      style={surface}
    >
      <div className="absolute inset-0 rounded-[16px] bg-black" aria-hidden />
      <RevealMedia className="pointer-events-none absolute inset-0 overflow-hidden rounded-[16px]">
        <div className="absolute inset-0 bg-white mix-blend-saturation" aria-hidden />
        <FigmaPlacedImage src={mediaSrc} alt="" placement="applied" />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
          aria-hidden
        />
      </RevealMedia>
      <RevealCopy
        className="absolute inset-0 flex flex-col justify-end gap-4 px-8 pb-7 pt-[30%] sm:px-9 sm:pb-8 lg:max-w-[min(100%,28rem)]"
        delay={0.14}
      >
        <div className="flex flex-col gap-2">
          {meta}
          <h3
            className={`text-white ${titleShade} ${titleClass}`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`${subtitleBase} text-[13px] leading-[1.45] sm:text-[14px] ${subtitleClass}`}
          style={{ color: "var(--featured-body)" }}
        >
          {subtitle}
        </p>
      </RevealCopy>
      {cursor.bubble}
    </Link>
  );
}
