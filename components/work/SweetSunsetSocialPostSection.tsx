/** Figma 339:24686 — Social post / storefront photography (full-bleed crop) */
const SOCIAL_POST_IMAGE_SRC =
  "https://www.figma.com/api/mcp/asset/bdcd74a0-76cc-4095-8307-69cc35b768f5";

/**
 * Figma 339:24686 — full-bleed image band with exact Dev Mode crop percentages.
 */
export function SweetSunsetSocialPostSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: "clamp(260px, 52vw, 720px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Figma-exact % positioning */}
        <img
          alt="Sweet Sunset storefront and signage on College Street, Toronto"
          src={SOCIAL_POST_IMAGE_SRC}
          className="pointer-events-none absolute max-w-none select-none"
          style={{
            height: "244.87%",
            width: "101.29%",
            left: "-0.65%",
            top: "-65.54%",
          }}
          draggable={false}
        />
      </div>
    </section>
  );
}
