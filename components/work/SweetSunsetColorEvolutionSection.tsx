/**
 * Figma 353:24925 — full-width color evolution row (four equal swatches, hex labels bottom-left).
 */
const SWATCHES = [
  { hex: "#F8B7C7", code: "#F8B7C7", ink: "#1d1d1f" },
  { hex: "#FFF8EC", code: "#FFF8EC", ink: "#18181b" },
  { hex: "#FBB040", code: "#FBB040", ink: "#18181b" },
  { hex: "#21409A", code: "#21409A", ink: "#ffffff" },
] as const;

export function SweetSunsetColorEvolutionSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-y border-[var(--border-default)] bg-white"
    >
      <div className="flex min-h-[min(56vh,520px)] w-full flex-col sm:min-h-[480px] sm:flex-row">
        {SWATCHES.map((swatch) => (
          <div
            key={swatch.hex}
            className="flex min-h-[140px] flex-1 flex-col justify-end p-10 sm:min-h-0 sm:p-12"
            style={{ backgroundColor: swatch.hex }}
          >
            <p
              className="w-full text-[20px] font-bold leading-7 tracking-[-0.5px]"
              style={{ color: swatch.ink }}
            >
              {swatch.code}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
