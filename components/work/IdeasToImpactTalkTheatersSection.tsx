/** Figma 279:21826 — Talk Theaters imagery (primary + two-up grid) */
const PRIMARY_SRC =
  "/media/image/i2i/1774969859650.jpeg";
const THEATER_A_SRC =
  "/media/image/i2i/mockup.png";
const THEATER_B_SRC =
  "/media/image/i2i/Untitled%20design%20%281%29%20copy.png";

const cardShadow =
  "shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)]";

/**
 * Figma 279:21826 — heading + large featured photo + two supporting photos.
 */
export function IdeasToImpactTalkTheatersSection() {
  return (
    <section className="bg-[var(--bg-surface)] px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[896px] flex-col items-start gap-24">
        <h2 className="w-full text-[40px] font-semibold leading-[1] tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
          Ideas to Impact Talk Theaters
        </h2>

        <div className="flex w-full flex-col gap-6">
          <div
            className={`relative aspect-[896/455] w-full overflow-hidden rounded-[40px] border border-[var(--border-subtle)] ${cardShadow}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- Figma MCP export */}
            <img
              alt="Speaker at Mohawk College Ideas to Impact 2026 welcome stage with dual screens"
              src={PRIMARY_SRC}
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[40px] object-cover select-none"
              draggable={false}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            <div
              className={`relative aspect-[436/250] w-full overflow-hidden rounded-[32px] border border-[var(--border-subtle)] ${cardShadow}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Audience seated in a lecture theater during Ideas to Impact"
                src={THEATER_A_SRC}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover select-none"
                draggable={false}
              />
            </div>
            <div
              className={`relative aspect-[436/250] w-full overflow-hidden rounded-[32px] border border-[var(--border-subtle)] ${cardShadow}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modern auditorium with presentation on screen"
                src={THEATER_B_SRC}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
