/** Figma 495:1987 — circular logo pattern + large sticker mockup */
const LOGO_PATTERN_SRC =
  "https://www.figma.com/api/mcp/asset/81aa60a7-01e3-4864-8fb5-d4eed74626bf";

/**
 * Figma 495:1987 — full-bleed brand art (same crop recipe as 495:1974).
 */
export function SweetSunsetLogoPatternSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)] bg-white"
    >
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: "clamp(340px, 52vw, 760px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset circular logo pattern and large sticker mockup"
          src={LOGO_PATTERN_SRC}
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
