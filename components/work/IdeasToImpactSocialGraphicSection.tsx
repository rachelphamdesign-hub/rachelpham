/** Figma 271:20657 — event key art / social poster (full-bleed). */
const SOCIAL_POST_SRC =
  "/media/image/i2i/Untitled%20design%20%281%29.png";

/**
 * Figma 271:20657 — Ideas to Impact 2026 typography art on white.
 */
export function IdeasToImpactSocialGraphicSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--bg-surface)]"
    >
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element -- Figma MCP export */}
        <img
          alt="Ideas to Impact 2026 — Mohawk IDEAWORKS event branding typography"
          src={SOCIAL_POST_SRC}
          className="pointer-events-none block h-auto w-full max-w-none select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
