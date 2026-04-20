/** Figma 495:2108 — Instagram profile + tiles collage */
const SOCIAL_CAMPAIGN_SRC =
  "https://www.figma.com/api/mcp/asset/22d52852-4c6b-4a47-9799-a4bad0693f15";

/**
 * Figma 495:2108 — Instagram profile + tile grid. Intrinsic aspect ratio (no cover crop / no stretch).
 */
export function SweetSunsetSocialCampaignSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)]"
      style={{ background: "#FEF9EF" }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-[75px] leading-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Sweet Sunset Instagram profile mockup and social media post tiles"
          src={SOCIAL_CAMPAIGN_SRC}
          className="pointer-events-none mx-auto block h-auto w-full max-w-full select-none object-contain"
          draggable={false}
          decoding="async"
        />
      </div>
    </section>
  );
}
