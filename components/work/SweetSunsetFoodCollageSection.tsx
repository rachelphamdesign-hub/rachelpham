/** Figma 347:24709 — food photography + illustrated sun characters */
const FOOD_COLLAGE_SRC =
  "/media/image/sweet%20sunset/Untitled%20design%20%281%29.gif";

/**
 * Figma 347:24709 — full-bleed hero-style food collage (object-cover).
 */
export function SweetSunsetFoodCollageSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="relative aspect-video w-full min-h-[280px] sm:min-h-[360px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed cover strip */}
        <img
          alt="Sweet Sunset menu spread with illustrated sun characters over Vietnamese-inspired dishes"
          src={FOOD_COLLAGE_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
