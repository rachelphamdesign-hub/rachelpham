/** Figma 495:1989 — dual portrait lifestyle strip (same crop recipe as coffee spread) */
const TWIN_PORTRAIT_SRC =
  "https://www.figma.com/api/mcp/asset/29a76f7f-5b8a-46ef-8702-e3e31e61ad96";

/**
 * Figma 495:1989 — full-bleed lifestyle photography with Dev Mode crop.
 */
export function SweetSunsetTwinPortraitSpreadSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)] bg-white">
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: "clamp(340px, 52vw, 760px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset branded t-shirts — pocket logo and large back graphic in a café setting"
          src={TWIN_PORTRAIT_SRC}
          className="pointer-events-none absolute left-0 top-0 max-w-none select-none"
          style={{
            height: "112.23%",
            width: "112.83%",
            left: "-6.41%",
            top: 0,
          }}
          draggable={false}
        />
      </div>
    </section>
  );
}
