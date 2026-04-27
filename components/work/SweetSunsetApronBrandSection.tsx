/** Figma 342:24694 — apron / wordmark lockup */
const APRON_IMAGE_SRC =
  "/media/image/sweet%20sunset/apron.png";

/**
 * Figma 342:24694 — cream band with centered brand graphic (628×252).
 */
export function SweetSunsetApronBrandSection() {
  return (
    <section
      className="flex flex-col items-center justify-center border-y border-[var(--border-default)] px-6 py-16 sm:px-12 sm:py-20 lg:px-12 lg:py-[160px]"
      style={{ background: "#fff8ec" }}
    >
      <div className="relative h-[252px] w-full max-w-[628px] shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- remote Figma MCP asset */}
        <img
          alt="Sweet Sunset wordmark and mascot on branded apron"
          src={APRON_IMAGE_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
