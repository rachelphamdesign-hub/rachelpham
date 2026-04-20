import { FhirNorthWebsiteMockupLiveLink } from "@/components/work/FhirNorthWebsiteMockupLiveLink";

/** Figma 312:24052 — Conference website (MacBook mockup). */
const WEBSITE_MOCKUP_SRC =
  "https://www.figma.com/api/mcp/asset/3c600aee-168b-4187-b078-d01ce7798a38";

const WEBSITE_MOCKUP_ALT =
  "FHIR North conference website mockup on a laptop — homepage with navigation and hero";

export function FhirNorthWebsiteSection() {
  return (
    <section className="bg-[var(--bg-surface)] px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="sr-only">Conference website</h2>
        <FhirNorthWebsiteMockupLiveLink imageSrc={WEBSITE_MOCKUP_SRC} imageAlt={WEBSITE_MOCKUP_ALT} />
      </div>
    </section>
  );
}
