/** Figma 495:1974 — espresso + phin composite (single full-bleed crop) */
const COFFEE_SPREAD_SRC =
  "https://www.figma.com/api/mcp/asset/5b541adb-5265-4895-8ab0-9c16ecde9a78";

/**
 * Figma 495:1974 — wide lifestyle strip with Dev Mode crop.
 */
export function SweetSunsetCoffeeSpreadSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)] bg-white"
    >
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: "clamp(340px, 52vw, 760px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset espresso pour and Vietnamese phin coffee setup"
          src={COFFEE_SPREAD_SRC}
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
