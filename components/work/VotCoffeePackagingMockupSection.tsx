import { VotCoffeePackagingFullBleed } from "@/components/work/VotCoffeeFullBleedSections";

/** Case study only — readable intro, then full-bleed packaging mockup (matches other Vot strips). */
export function VotCoffeePackagingMockupSection() {
    return (
        <section data-section="vot-packaging-mockup">
            <div style={{ background: "var(--bg-surface)" }}></div>

            <VotCoffeePackagingFullBleed />
        </section>
    );
}
