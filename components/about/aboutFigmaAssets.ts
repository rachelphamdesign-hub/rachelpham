/**
 * Figma MCP exports — pose toolbar icons (node 443:1562).
 * @see https://www.figma.com/design/3nqXahGKoQ1fzhwllD8YbP/porfolio?node-id=443-1562
 */
import type { AboutPose } from "@/components/about/aboutModelUrls";

export const ABOUT_POSE_ICON: Record<AboutPose, string> = {
  stand: "https://www.figma.com/api/mcp/asset/4cee6a0b-d6e5-48af-b19f-93fc69f3a00e",
  hiking: "https://www.figma.com/api/mcp/asset/7f941ce0-e1c4-4570-8ad8-50b4979d8685",
  matcha: "https://www.figma.com/api/mcp/asset/df895ebd-0d78-4fac-a87a-c924078d9cba",
  travel: "https://www.figma.com/api/mcp/asset/af646d07-880f-4cf9-8e1c-2e8f5fcfcc28",
};

/** Figma toolbar label text (exact casing per frame). */
export const ABOUT_POSE_FIGMA_LABEL: Record<AboutPose, string> = {
  stand: "stand",
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

/** Icon slot size in px (Figma asset varies slightly per icon). */
export const ABOUT_POSE_ICON_BOX: Record<AboutPose, number> = {
  stand: 18.5,
  hiking: 21.75,
  matcha: 18.5,
  travel: 24,
};
