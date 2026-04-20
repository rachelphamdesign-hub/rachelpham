/** Figma 271:20657 — event key art / social poster (full-bleed). */
const SOCIAL_POST_SRC =
  "https://www.figma.com/api/mcp/asset/d09be256-e1d3-452d-94dc-b3ab97a7e95b";

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
