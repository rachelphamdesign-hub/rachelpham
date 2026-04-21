import { LazyVideo } from "@/components/LazyVideo";

const TIKTOK_VIDEOS = [
  "/media/sweet-sunset/5536485244504.mp4",
  "/media/sweet-sunset/5536485260554.mp4",
  "/media/sweet-sunset/5536485720483.mp4",
] as const;

const TIKTOK_LABELS = [
  "TikTok clip: Vietnamese egg coffee with latte art and Sweet Sunset branding",
  "TikTok clip: neighbourhood street exterior",
  "TikTok clip: pouring egg coffee foam, Vietnamese coffee in Toronto",
] as const;

/**
 * Figma 401:715 — three TikTok-style portrait cards on brand navy (#21409A).
 */
export function SweetSunsetTikTokCardsSection() {
  return (
    <section
      className="border-y border-[var(--border-default)] px-6 py-16 sm:px-10 sm:py-20 lg:px-[75px] lg:py-[160px]"
      style={{ background: "#21409A" }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {TIKTOK_VIDEOS.map((src, i) => (
          <div
            key={src}
            className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-[40px] border border-[rgba(29,29,31,0.05)] bg-[#183a8c] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.04),0px_1px_4px_0px_rgba(0,0,0,0.02)] sm:max-w-[274px]"
          >
            <LazyVideo
              src={src}
              className="absolute inset-0 size-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
              aria-label={TIKTOK_LABELS[i]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
