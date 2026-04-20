/** Figma 312:24052 — Conference website (MacBook mockup). */
const WEBSITE_MOCKUP_SRC =
  "https://www.figma.com/api/mcp/asset/3c600aee-168b-4187-b078-d01ce7798a38";

export function FhirNorthWebsiteSection() {
  return (
    <section className="bg-[var(--bg-surface)] px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="sr-only">Conference website</h2>
        <div className="overflow-hidden rounded-[24px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.35)]">
          {/* eslint-disable-next-line @next/next/no-img-element -- Figma MCP export */}
          <img
            alt="FHIR North conference website mockup on a laptop — homepage with navigation and hero"
            src={WEBSITE_MOCKUP_SRC}
            className="pointer-events-none block h-auto w-full select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
