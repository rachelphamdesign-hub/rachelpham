/** Figma 291:23879 — Roll-up banner artwork and on-site photography. */
const ROLLUP_ART_SRC =
  "https://www.figma.com/api/mcp/asset/ab7d358e-4e77-4ebd-bc0e-3d0bb14ec1d5";
const VENUE_PHOTO_SRC =
  "https://www.figma.com/api/mcp/asset/b16be7bf-9cfd-400c-9d7e-d1c308723d62";

export function FhirNorthEventSignageSection() {
  return (
    <section className="bg-[var(--pill-badge-bg)] px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-24 xl:gap-x-[96px]">
        <h2 className="sr-only">Event signage</h2>

        <div className="flex w-full justify-center lg:col-span-7 lg:justify-start">
          <div className="w-full max-w-[686px] overflow-hidden shadow-[0px_40px_60px_-20px_rgba(43,52,55,0.04)] dark:shadow-[0px_40px_60px_-20px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[686/867] w-full min-h-[420px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="FHIR North 2025 vertical roll-up banner design with reception messaging and QR code"
                src={ROLLUP_ART_SRC}
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:col-span-5">
          <div
            className="relative h-[min(420px,78vw)] w-full max-w-[458px] overflow-hidden rounded-[32px] border border-[var(--border-subtle)] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] sm:h-[480px] lg:h-[549px] dark:shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.35),0px_2px_8px_-1px_rgba(0,0,0,0.2)]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="FHIR North roll-up banner displayed in a workplace hallway"
                src={VENUE_PHOTO_SRC}
                className="pointer-events-none absolute max-w-none select-none"
                style={{
                  height: "107.99%",
                  width: "100%",
                  left: "0.17%",
                  top: "-8.04%",
                }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
