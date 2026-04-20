"use client";

import dynamic from "next/dynamic";

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"));

/**
 * Lazy JS chunk for below-the-fold home content; SSR stays on so image URLs
 * are in the first HTML paint and the browser can fetch them in parallel with
 * the main bundle (Sweet Sunset card was blocked entirely before hydration).
 */
export function HomeBelowFoldLoader() {
  return <HomeBelowFold />;
}
