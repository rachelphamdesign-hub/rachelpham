"use client";

import dynamic from "next/dynamic";

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"), {
  ssr: false,
});

/**
 * Client-only lazy mount for below-the-fold home content so Featured Projects
 * never run on the server or hydrate before the hero shell is on the page.
 */
export function HomeBelowFoldLoader() {
  return <HomeBelowFold />;
}
