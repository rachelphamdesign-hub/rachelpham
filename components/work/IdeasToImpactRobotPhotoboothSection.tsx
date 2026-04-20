/** Figma 287:22712 — Robot photobooth feature + frame trio */
const PHOTOBOOTH_HERO_SRC =
  "https://www.figma.com/api/mcp/asset/eb73fda7-e7ef-4f6f-8b03-a45b47a31af5";
const FRAME_STACK_1_SRC =
  "https://www.figma.com/api/mcp/asset/9c578a34-f600-4f83-8838-5a462d796200";
const FRAME_STACK_2_SRC =
  "https://www.figma.com/api/mcp/asset/504e7578-82c7-4040-b0df-f68d9a2a0ed7";
const FRAME_STACK_3_SRC =
  "https://www.figma.com/api/mcp/asset/8f52c253-e960-490e-aa30-c4edde469126";

const heroShadow =
  "shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)]";
const cardShadow =
  "shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)]";

/**
 * Figma 287:22712 — heading, subtitle, large interactive-robot panel + three photobooth prints.
 * lg+: right column stretches to match left height. Hero is full-bleed (object-cover); frame stack uses object-contain.
 */
export function IdeasToImpactRobotPhotoboothSection() {
  const frames = [
    { src: FRAME_STACK_1_SRC, alt: "Ideas to Impact photobooth print — frame variant one with Mohawk IDEAWORKS branding" },
    { src: FRAME_STACK_2_SRC, alt: "Ideas to Impact photobooth print — frame variant two with theme icons" },
    { src: FRAME_STACK_3_SRC, alt: "Ideas to Impact photobooth print — frame variant three with graphic patterns" },
  ] as const;

  return (
    <section className="bg-[var(--bg-footer)] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-16 lg:pb-40 lg:pl-12 lg:pr-16 lg:pt-[76px] xl:pb-[192px] xl:pl-[153px] xl:pr-[161px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:gap-14">
        <div className="flex max-w-[896px] flex-col gap-6">
          <h2 className="text-[40px] font-semibold leading-[1] tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
            Robot Photobooth Frame
          </h2>
          <p className="max-w-[894px] text-[18px] leading-[29.25px] text-[var(--text-secondary)]">
            Snap a photo and get an instant print with our interactive robot.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Large spatial panel */}
          <div
            className={`relative h-full min-h-[420px] overflow-hidden rounded-[40px] bg-[#1a1a1a] lg:col-span-7 lg:min-h-[700px] ${heroShadow}`}
          >
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element -- Figma MCP export */}
              <img
                alt="Guests beside the Ideas to Impact interactive robot photobooth"
                src={PHOTOBOOTH_HERO_SRC}
                className="pointer-events-none size-full max-w-none select-none object-cover object-center"
                draggable={false}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0)] to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-8 pb-8 pt-24 sm:px-10 sm:pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-[30px] font-bold leading-9 tracking-[-0.75px] text-white drop-shadow-md">
                  Interactive Robot
                </p>
              </div>
              <div className="pointer-events-auto flex shrink-0 items-center gap-3 rounded-[24px] border border-white/20 bg-white/10 px-[17px] py-[17px] backdrop-blur-[6px]">
                <span className="block size-2 shrink-0 rounded-full bg-[#28c840]" aria-hidden />
                <span className="text-[9px] font-bold uppercase tracking-[0.9px] text-white">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Frame trio — lg: stretches to match left column; equal thirds; object-contain */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:h-full lg:min-h-0">
            {frames.map(({ src, alt }) => (
              <div
                key={src}
                className="flex min-h-0 flex-col lg:flex-1"
              >
                <div
                  className={`relative flex aspect-video min-h-0 w-full overflow-hidden rounded-[20px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] lg:aspect-auto lg:h-full lg:flex-1 ${cardShadow}`}
                >
                  <div className="relative min-h-0 flex-1 bg-[var(--pill-badge-bg)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={alt}
                      src={src}
                      className="pointer-events-none absolute inset-0 size-full select-none object-contain object-center"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
