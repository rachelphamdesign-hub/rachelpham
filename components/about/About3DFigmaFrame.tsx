"use client";

import Image from "next/image";
import type { AboutPose } from "@/components/about/aboutModelUrls";
import { ABOUT_POSES } from "@/components/about/aboutModelUrls";
import {
  ABOUT_POSE_CHIP_LABEL,
  ABOUT_POSE_FIGMA_LABEL,
  ABOUT_POSE_ICON,
  ABOUT_POSE_ICON_BOX,
} from "@/components/about/aboutFigmaAssets";

type About3DFigmaFrameProps = {
  selectedPose: AboutPose;
  onSelectPose: (pose: AboutPose) => void;
};

const ABOUT_POSE_PREVIEW_IMAGE: Record<AboutPose, string> = {
  stand: "/media/standing.png",
  hiking: "/media/hiking.png",
  matcha: "/media/matcha.png",
  travel: "/media/travel.png",
};

/**
 * Left column — Figma 443:1562: macOS header, 3D viewport, pose chip, icon toolbar.
 */
export function About3DFigmaFrame({
  selectedPose,
  onSelectPose,
}: About3DFigmaFrameProps) {
  const chipLabel = ABOUT_POSE_CHIP_LABEL[selectedPose];

  return (
    <div
      className="isolate flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-[var(--border-default)] shadow-[0px_20px_50px_rgba(0,0,0,0.04)] backdrop-blur-[15px] dark:border-white/10 dark:shadow-[0px_20px_50px_rgba(0,0,0,0.35)]"
      style={{
        background: "color-mix(in oklab, var(--pill-badge-bg) 96%, transparent)",
      }}
    >
      {/* macOS header — Figma I443:1562;87:9692 */}
      <div
        className="flex shrink-0 items-center justify-between border-b border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_55%,transparent)] px-5 pb-[17px] pt-4 dark:border-white/10"
      >
        <div className="flex gap-2">
          <span className="size-3 shrink-0 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="size-3 shrink-0 rounded-full bg-[#ffbd2e]" aria-hidden />
          <span className="size-3 shrink-0 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <span className="text-[10px] font-semibold uppercase leading-[15px] tracking-[1px] text-[var(--text-secondary)]">
          Preview
        </span>
      </div>

      {/* Viewport — clip canvas; toolbar stays interactive below (z-20) */}
      <div
        className="relative flex min-h-[260px] flex-1 flex-col overflow-hidden bg-[linear-gradient(to_bottom,var(--bg-surface)_0%,var(--pill-badge-bg)_100%)] sm:min-h-[300px]"
      >
        <div className="relative box-border min-h-0 flex-1 px-10 pb-[80px] pt-[70px] sm:px-12 sm:pb-[86px] sm:pt-[80px]">
          <div className="relative mx-auto h-full min-h-[220px] w-full max-w-[302px]">
            <Image
              src={ABOUT_POSE_PREVIEW_IMAGE[selectedPose]}
              alt={`Rachel character in ${chipLabel} pose`}
              fill
              sizes="302px"
              draggable={false}
              className="pointer-events-none select-none object-contain"
            />
          </div>
        </div>

        {/* Pose chip — Figma I443:1562;87:9728 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4 sm:bottom-7">
          <div className="rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_82%,transparent)] px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[4px] dark:border-white/15 dark:bg-zinc-900/85">
            <span className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-[var(--text-primary)]">
              Pose: {chipLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Icon toolbar — above canvas stacking; pointer-events on images none so clicks hit <button> */}
      <div
        className="relative z-20 grid shrink-0 grid-cols-4 gap-4 bg-[var(--bg-surface)] px-6 py-6 dark:bg-zinc-950 dark:ring-1 dark:ring-white/10"
        role="tablist"
        aria-label="Character pose"
      >
        {ABOUT_POSES.map((pose) => {
          const active = pose === selectedPose;
          const iconSrc = ABOUT_POSE_ICON[pose];
          const iconPx = ABOUT_POSE_ICON_BOX[pose];
          return (
            <button
              key={pose}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelectPose(pose)}
              className="relative z-10 flex flex-col items-center gap-[7.75px] px-[10px] transition-transform duration-200 hover:opacity-90 active:scale-[0.98] sm:px-[16.75px]"
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-[20px] transition-colors duration-200 ${
                  active
                    ? "bg-[var(--text-primary)] dark:bg-zinc-700 dark:ring-1 dark:ring-white/25"
                    : "bg-[var(--pill-badge-bg)] dark:bg-zinc-800"
                }`}
              >
                <span
                  className="relative flex items-center justify-center"
                  style={{ width: iconPx, height: iconPx }}
                >
                  <Image
                    src={iconSrc}
                    alt=""
                    width={Math.round(iconPx * 2)}
                    height={Math.round(iconPx * 2)}
                    draggable={false}
                    className={`pointer-events-none select-none object-contain opacity-100 ${
                      active
                        ? "[filter:brightness(0)_invert(1)] dark:[filter:brightness(0)]"
                        : "[filter:brightness(0)] opacity-90 dark:[filter:brightness(0)_invert(1)] dark:opacity-100"
                    }`}
                  />
                </span>
              </span>
              <span
                className={`text-center text-[9px] font-bold uppercase leading-[13.5px] tracking-[-0.45px] ${
                  active ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {ABOUT_POSE_FIGMA_LABEL[pose]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
