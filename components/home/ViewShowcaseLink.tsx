"use client";

import type { CSSProperties, ReactNode } from "react";

const FEATURED_PROJECTS_ID = "work";

/**
 * Hero CTA → Featured Projects (`#work`). On the home page, smooth-scroll instead
 * of relying on Next/link hash behavior (often no scroll on same-route + hash).
 */
export function ViewShowcaseLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a
      href={`/#${FEATURED_PROJECTS_ID}`}
      className={className}
      style={style}
      onClick={(e) => {
        const path = window.location.pathname;
        if (path !== "/" && path !== "") return;

        e.preventDefault();
        document.getElementById(FEATURED_PROJECTS_ID)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.replaceState(null, "", `#${FEATURED_PROJECTS_ID}`);
      }}
    >
      {children}
    </a>
  );
}
