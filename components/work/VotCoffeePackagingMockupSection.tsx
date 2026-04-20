import { VotCoffeePackagingFullBleed } from "@/components/work/VotCoffeeFullBleedSections";

/** Case study only — readable intro, then full-bleed packaging mockup (matches other Vot strips). */
export function VotCoffeePackagingMockupSection() {
  return (
    <section data-section="vot-packaging-mockup">
      <div
        className="border-t border-[var(--border-default)] px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.6px] text-[var(--text-primary)]">
            Packaging
          </h2>
          <div aria-hidden className="h-9 w-full shrink-0" />
          <p className="max-w-[52rem] text-[20px] leading-[32.5px] text-[var(--text-secondary)]">
            Kraft carry bag and takeaway box with the maroon sleeve: wordmark on the bag, small caps &ldquo;COFFEE&rdquo;
            near the top, and line illustrations of brewing gear on the band so the brand reads clearly in person.
          </p>
        </div>
      </div>

      <VotCoffeePackagingFullBleed />

      <div className="px-6 pb-16 pt-6 sm:px-10 lg:px-16" style={{ background: "var(--bg-page)" }}>
        <p className="mx-auto max-w-[1080px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
          Product mockup — kraft, cream, and burgundy on a neutral ground.
        </p>
      </div>
    </section>
  );
}
