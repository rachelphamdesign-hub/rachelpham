/**
 * Pose toolbar icons — Figma SVGs under `public/media/about icon/`.
 * Order matches `ABOUT_POSES`: stand, hike, matcha, travel.
 */
import type { AboutPose } from "@/components/about/aboutModelUrls";

const ABOUT_TOOLBAR_ICON_DIR = "/media/about%20icon";

export const ABOUT_POSE_ICON: Record<AboutPose, string> = {
  stand: `${ABOUT_TOOLBAR_ICON_DIR}/stand.svg`,
  hiking: `${ABOUT_TOOLBAR_ICON_DIR}/hike.svg`,
  matcha: `${ABOUT_TOOLBAR_ICON_DIR}/matcha.svg`,
  travel: `${ABOUT_TOOLBAR_ICON_DIR}/travel.svg`,
};

/** Toolbar labels — `uppercase` in UI → STAND, HIKE, MATCHA, TRAVEL. */
export const ABOUT_POSE_FIGMA_LABEL: Record<AboutPose, string> = {
  stand: "Stand",
  hiking: "Hike",
  matcha: "Matcha",
  travel: "Travel",
};

/** “Pose: …” chip — title case for display. */
export const ABOUT_POSE_CHIP_LABEL: Record<AboutPose, string> = {
  stand: "Standing",
  hiking: "Hiking",
  matcha: "Matcha",
  travel: "Travel",
};

/** Icon glyph size inside the circular well (px); SVGs are ~19px art. */
export const ABOUT_POSE_ICON_BOX: Record<AboutPose, number> = {
  stand: 22,
  hiking: 22,
  matcha: 22,
  travel: 22,
};
