import Image from "next/image";

/** Local storefront / social post band under Sweet Sunset hero */
const SOCIAL_POST_IMAGE_SRC = "/media/Social-Post-Section.webp";

/**
 * Full-bleed image band under the case study hero.
 */
export function SweetSunsetSocialPostSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: "clamp(260px, 52vw, 720px)" }}>
        <Image
          alt="Sweet Sunset storefront and signage on College Street, Toronto"
          src={SOCIAL_POST_IMAGE_SRC}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
