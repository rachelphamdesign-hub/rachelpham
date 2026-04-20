/** Figma 495:1983 — packaging and merch tabletop mockup */
const PACKAGING_HERO_SRC =
  "https://www.figma.com/api/mcp/asset/fac3cdd3-af9d-4670-a5f4-6c0fdc31d553";

/**
 * Figma 495:1983 — full-bleed photographic hero (object-cover).
 */
export function SweetSunsetPackagingMockupSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="relative aspect-[16/10] w-full min-h-[320px] sm:min-h-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset branded bags, boxes, and packaging mockups"
          src={PACKAGING_HERO_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
