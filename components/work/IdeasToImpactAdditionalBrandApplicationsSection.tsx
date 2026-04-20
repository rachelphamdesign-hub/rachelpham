/** Figma 291:23732 — Additional Brand Applications (3-up) */
const IMG_CAKE =
  "https://www.figma.com/api/mcp/asset/780e144a-8e62-452e-b1cc-96bd041816e5";
const IMG_THANK_YOU =
  "https://www.figma.com/api/mcp/asset/d70fa288-0c68-4ca7-962e-a4599427ee3a";
const IMG_PRESENTATION =
  "https://www.figma.com/api/mcp/asset/dee9824c-fb79-414d-90a7-43e7d02a1588";

const cardSurface =
  "rounded-[40px] border border-[var(--border-default)] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] dark:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.35),0px_1px_4px_0px_rgba(0,0,0,0.15)]";

const cardHeight = "clamp(320px, 42vw, 482px)";

export function IdeasToImpactAdditionalBrandApplicationsSection() {
  return (
    <section className="bg-[var(--bg-surface)] px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 lg:gap-24">
        <h2 className="text-[36px] font-semibold leading-10 tracking-[-0.9px] text-[var(--text-primary)]">
          Additional Brand Applications
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* 01 — Cake */}
          <div className="flex flex-col items-center gap-8">
            <div
              className={`relative w-full overflow-hidden ${cardSurface}`}
              style={{ height: cardHeight }}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Ideas to Impact branded celebration cake and cupcakes"
                  src={IMG_CAKE}
                  className="pointer-events-none absolute max-w-none select-none"
                  style={{
                    height: "100%",
                    width: "177.94%",
                    left: "-34.89%",
                    top: 0,
                  }}
                  draggable={false}
                />
              </div>
            </div>
            <p className="w-full max-w-[347px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.65px] text-[var(--text-secondary)]">
              01 — Cake Design
            </p>
          </div>

          {/* 02 — Thank you */}
          <div className="flex flex-col items-center gap-8">
            <div
              className={`relative w-full overflow-hidden ${cardSurface}`}
              style={{ height: cardHeight }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Thank you cards and Ideas to Impact printed collateral"
                src={IMG_THANK_YOU}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[40px] object-cover select-none"
                draggable={false}
              />
            </div>
            <p className="w-full max-w-[347px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.65px] text-[var(--text-secondary)]">
              02 — Thank You Card
            </p>
          </div>

          {/* 03 — Presentation */}
          <div className="flex flex-col items-center gap-8">
            <div
              className={`relative w-full overflow-hidden ${cardSurface}`}
              style={{ height: cardHeight }}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Presentation slide with Mohawk and partner branding"
                  src={IMG_PRESENTATION}
                  className="pointer-events-none absolute max-w-none select-none"
                  style={{
                    height: "100%",
                    width: "177.77%",
                    left: "-58.69%",
                    top: 0,
                  }}
                  draggable={false}
                />
              </div>
            </div>
            <p className="w-full max-w-[347px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.65px] text-[var(--text-secondary)]">
              03 — Presentation Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
