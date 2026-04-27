/** Figma 366:25150 — three tote bags hero art */
const TOTE_BAGS_IMAGE_SRC =
  "/media/image/sweet%20sunset/Untitled%20design%20%281%29.png";

/**
 * Figma 366:25150 — white band, centered wide tote lineup, aspect 3095:1241.
 */
export function SweetSunsetToteBagsSection() {
  return (
    <section
      className="flex flex-col items-center justify-center border-y border-[var(--border-default)] px-6 py-16 sm:px-12 sm:py-20 lg:px-12 lg:py-[160px]"
      style={{ background: "#ffffff" }}
    >
      <div
        className="relative w-full max-w-[min(100%,1240px)] shrink-0 overflow-hidden"
        style={{ aspectRatio: "3095 / 1241" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset canvas tote bags with mascot and Good Food Makes Good Mood graphics"
          src={TOTE_BAGS_IMAGE_SRC}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
