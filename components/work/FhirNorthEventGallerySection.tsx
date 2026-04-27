/** Figma 291:23819 — Event photography grid (primary + two-up). */
const PRIMARY_SRC =
  "/media/image/fhir/4.png";
const FACTOR_2_SRC =
  "/media/image/fhir/5.png";
const FACTOR_3_SRC =
  "/media/image/fhir/6.png";

const cardShadow =
  "shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] dark:shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.35),0px_2px_8px_-1px_rgba(0,0,0,0.2)]";

export function FhirNorthEventGallerySection() {
  return (
    <section className="bg-[var(--bg-surface)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 xl:px-[150px] xl:pb-[129px] xl:pt-[151px]">
      <div className="mx-auto max-w-[980px] px-0 sm:px-3 lg:px-5">
        <h2 className="sr-only">FHIR North 2025 event photography</h2>

        <div className="flex flex-col gap-6">
          <div
            className={`relative aspect-[980/455] w-full overflow-hidden rounded-[40px] border border-[var(--border-subtle)] ${cardShadow}`}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="FHIR North 2025 reception — group photo with conference banner"
                src={PRIMARY_SRC}
                className="pointer-events-none absolute max-w-none select-none"
                style={{
                  height: "157.35%",
                  width: "100%",
                  left: 0,
                  top: "-16.07%",
                }}
                draggable={false}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            <div
              className={`relative aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-[32px] border border-[var(--border-subtle)] md:aspect-auto md:min-h-[299px] ${cardShadow}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="FHIR North working session — team at tables with laptops"
                src={FACTOR_2_SRC}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover select-none"
                draggable={false}
              />
            </div>

            <div
              className={`relative aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-[32px] border border-[var(--border-subtle)] md:aspect-auto md:min-h-[299px] ${cardShadow}`}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="FHIR North 2025 reception — small group in front of event banner"
                  src={FACTOR_3_SRC}
                  className="pointer-events-none absolute max-w-none select-none"
                  style={{
                    height: "172.04%",
                    width: "100%",
                    left: 0,
                    top: "-31.42%",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
