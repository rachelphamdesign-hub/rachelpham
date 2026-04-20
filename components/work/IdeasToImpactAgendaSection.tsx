/** Figma 279:21894 — Agenda document (left) + title / venue photo (right) */
const POSTER_SRC =
  "https://www.figma.com/api/mcp/asset/f7b464c9-eca9-4158-b9a0-1a2d4801b87a";
const VENUE_SRC =
  "https://www.figma.com/api/mcp/asset/c5dcf640-8015-4b0f-b105-9bacef256233";

export function IdeasToImpactAgendaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:py-20" style={{ background: "var(--pill-badge-bg)" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-24 lg:gap-y-0 xl:gap-x-[96px]">
        {/* Left — agenda poster (paper + shadow) */}
        <div className="flex w-full justify-center lg:col-span-7 lg:justify-start">
          <div
            className="w-full max-w-[686px] overflow-hidden rounded-[20px] shadow-[0px_40px_60px_-20px_rgba(43,52,55,0.04)] lg:rounded-[24px] dark:shadow-[0px_40px_60px_-20px_rgba(0,0,0,0.35)]"
            style={{
              background: "color-mix(in oklab, var(--pill-badge-bg) 72%, var(--border-default))",
            }}
          >
            <div className="relative aspect-[686/867] w-full min-h-[420px] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[var(--bg-surface)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Ideas to Impact 2026 event agenda — schedule, times, and locations"
                  src={POSTER_SRC}
                  className="pointer-events-none absolute max-w-none select-none"
                  style={{
                    height: "123.94%",
                    width: "128.79%",
                    left: "-14.43%",
                    top: "-11.97%",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right — heading + venue (Figma: 458×250, rounded cards) */}
        <div className="flex w-full flex-col items-center gap-10 lg:col-span-5 lg:items-start lg:gap-[47px]">
          <h2 className="w-full max-w-[458px] shrink-0 text-center text-[48px] font-semibold leading-none tracking-[-3.6px] text-[var(--text-primary)] sm:text-[56px] lg:text-left lg:text-[72px] lg:leading-[72px]">
            Agenda
          </h2>
          <div
            className="relative h-[220px] w-full max-w-[458px] overflow-hidden rounded-[40px] border border-[var(--border-subtle)] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] sm:h-[250px] lg:rounded-[48px] dark:shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.35),0px_2px_8px_-1px_rgba(0,0,0,0.2)]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px] lg:rounded-[48px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Event venue with round tables and staging"
                src={VENUE_SRC}
                className="pointer-events-none absolute max-w-none select-none"
                style={{
                  height: "288.72%",
                  width: "100%",
                  left: "0.18%",
                  top: "-110.16%",
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
