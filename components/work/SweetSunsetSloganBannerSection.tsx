/** Figma 376:25245 — slogan lockup on orange */
const SLOGAN_IMAGE_SRC =
  "https://www.figma.com/api/mcp/asset/e0fb7489-daf0-4a1d-acab-28be60b5e549";

/**
 * Figma 376:25240 — #FBB040 band, centered slogan graphic (592×174).
 */
export function SweetSunsetSloganBannerSection() {
  return (
    <section
      className="flex flex-col items-center justify-center border-y border-[var(--border-default)] px-6 py-16 sm:px-12 sm:py-20 lg:px-12 lg:py-[160px]"
      style={{ background: "#fbb040" }}
    >
      <div className="relative h-[120px] w-full max-w-[592px] shrink-0 sm:h-[150px] lg:h-[174px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Good Food Makes Good Mood"
          src={SLOGAN_IMAGE_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
