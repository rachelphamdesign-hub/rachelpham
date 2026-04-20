import { VOT_COFFEE_BOX_BAG_MOCKUP, VOT_COFFEE_FULL_BLEEDS } from "@/lib/votCoffeeMedia";

function FullBleedStrip({
  node,
  src,
  alt,
}: {
  node: string;
  src: string;
  alt: string;
}) {
  return (
    <section
      data-figma-node={node}
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--bg-surface)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        src={src}
        className="pointer-events-none block h-auto w-full max-w-none select-none"
        draggable={false}
      />
    </section>
  );
}

/** Kraft bag + takeaway box — local mockup (case study). */
export function VotCoffeePackagingFullBleed() {
  return (
    <FullBleedStrip
      node="vot-packaging-box-bag"
      src={VOT_COFFEE_BOX_BAG_MOCKUP}
      alt="Vot Coffee kraft bag with burgundy logo and cream takeaway box with maroon patterned sleeve"
    />
  );
}

/** Figma 401:773 — logo mark strip directly under hero. */
export function VotCoffeeLeadStrip() {
  const item = VOT_COFFEE_FULL_BLEEDS[0];
  return <FullBleedStrip node={item.node} src={item.src} alt={item.alt} />;
}

/** Remaining full-bleed imagery (401:784 … 401:816). */
export function VotCoffeeGalleryStrips() {
  return (
    <>
      {VOT_COFFEE_FULL_BLEEDS.slice(1).map(({ node, src, alt }) => (
        <FullBleedStrip key={node} node={node} src={src} alt={alt} />
      ))}
    </>
  );
}
