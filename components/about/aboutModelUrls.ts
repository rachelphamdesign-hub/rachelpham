export const ABOUT_POSES = ["stand", "hiking", "matcha", "travel"] as const;

export type AboutPose = (typeof ABOUT_POSES)[number];

export const ABOUT_MODEL_URL: Record<AboutPose, string> = {
  stand: "/models/about/stand.glb",
  hiking: "/models/about/hiking.glb",
  matcha: "/models/about/matcha.glb",
  travel: "/models/about/travel.glb",
};

export const ABOUT_POSE_LABEL: Record<AboutPose, string> = {
  stand: "Stand",
  hiking: "Hiking",
  matcha: "Matcha",
  travel: "Travel",
};
