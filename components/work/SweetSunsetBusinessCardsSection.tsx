/** Figma 357:25139 — business card mockup (wide art + soft shadow) */
const BUSINESS_CARDS_IMAGE_SRC =
  "https://www.figma.com/api/mcp/asset/7021474b-1f20-4228-a94d-1d50efc72713";

/**
 * Figma 357:25139 — white band, centered wide mockup, aspect 3095:1241, drop shadow + backdrop blur on image.
 */
export function SweetSunsetBusinessCardsSection() {
  return (
    <section
      className="flex flex-col items-center justify-center border-y border-[var(--border-default)] px-6 py-16 sm:px-12 sm:py-20 lg:px-12 lg:py-[160px]"
      style={{ background: "#ffffff" }}
    >
      <div
        className="relative w-full max-w-[min(100%,1240px)] shrink-0 overflow-hidden shadow-[0px_20px_50px_0px_rgba(0,0,0,0.04)]"
        style={{ aspectRatio: "3095 / 1241" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Figma blur + cover */}
        <img
          alt="Sweet Sunset business cards — front and back with logo and contact details"
          src={BUSINESS_CARDS_IMAGE_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover backdrop-blur-[15px] select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
