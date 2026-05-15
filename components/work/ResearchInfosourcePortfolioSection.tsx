import type { ReactNode } from "react";

/** Research Infosource — portfolio gallery (Figma layout below Overview). */

const BASE = "/media/ranking_event_port";

const MEDIA = {
  eventPrimary: `${BASE}/ResearchRankings-4.jpg`,
  eventSecondary: `${BASE}/ResearchRankings.web-17.jpg`,
  eventTertiary: `${BASE}/ResearchRankings-19.jpg`,
  presentation: `${BASE}/presentation.png`,
  temi: `${BASE}/temi%20frame.png`,
  instantPhoto: `${BASE}/IMG_9135.png`,
  banner: `${BASE}/banner.png`,
  digitalComms: `${BASE}/email.png`,
  notebooks: `${BASE}/Notebook%20Mockup.png`,
  socialPrimary: `${BASE}/social.png`,
  socialSecondary: `${BASE}/social%201.png`,
} as const;

const cardShadow =
  "shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] dark:shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.35),0px_2px_8px_-1px_rgba(0,0,0,0.2)]";

/** Temi robot + instant photo — one section, side-by-side on light gray (Figma). */
function DigitalDisplaysSection() {
  return (
    <div className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--pill-badge-bg)]">
      <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
        <div className="relative min-h-[min(72vw,420px)] w-full overflow-hidden md:min-h-[min(52vw,640px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MEDIA.temi}
            alt="Temi robot screen displaying Mohawk IDEAWORKS rankings celebration branding"
            className="pointer-events-none absolute inset-0 size-full scale-[1.22] object-cover object-[center_38%] select-none"
            draggable={false}
          />
        </div>
        <div className="flex min-h-0 w-full items-center justify-center px-6 py-10 sm:px-10 sm:py-14 md:px-10 md:py-16 lg:px-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MEDIA.instantPhoto}
            alt="Instant photo print with IDEAWORKS rankings graphic and event group photo"
            className="pointer-events-none block h-auto w-full max-w-[560px] select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function FullBleedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="pointer-events-none block h-auto w-full max-w-none select-none"
        draggable={false}
      />
    </div>
  );
}

function Frame({
  src,
  alt,
  className = "",
  rounded = "rounded-[32px]",
  imgClassName = "h-auto w-full",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-[var(--border-subtle)] ${rounded} ${cardShadow} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`pointer-events-none block select-none ${imgClassName}`}
        draggable={false}
      />
    </div>
  );
}

function SectionShell({
  children,
  className = "",
  innerClassName = "max-w-[980px]",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={`px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-[150px] ${className}`}>
      <div className={`mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function ResearchInfosourcePortfolioSection() {
  return (
    <>
      <SectionShell className="bg-[var(--bg-page)]">
        <h2 className="mb-8 text-[36px] font-bold leading-10 tracking-[-0.9px] text-[var(--text-primary)] sm:mb-10">
          Event Photography
        </h2>
        <div className="flex flex-col gap-6">
          <div
            className={`relative aspect-[980/455] w-full overflow-hidden rounded-[40px] border border-[var(--border-subtle)] ${cardShadow}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MEDIA.eventPrimary}
              alt="Speaker at podium during Mohawk IDEAWORKS Research Infosource Rankings Celebration"
              className="pointer-events-none absolute inset-0 size-full object-cover select-none"
              draggable={false}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Frame
              src={MEDIA.eventSecondary}
              alt="Attendees in front of rankings presentation screen at the celebration event"
            />
            <Frame
              src={MEDIA.eventTertiary}
              alt="Celebration cupcake cake and refreshments at the rankings event"
            />
          </div>
        </div>
      </SectionShell>

      <div className="flex w-full flex-col gap-0 overflow-x-clip">
        <FullBleedImage
          src={MEDIA.presentation}
          alt="Collage of Research Infosource Rankings Celebration presentation slides"
          className="bg-[var(--bg-surface)]"
        />
        <DigitalDisplaysSection />
        <FullBleedImage
          src={MEDIA.banner}
          alt="Research Infosource Rankings Celebration roll-up banner — #1 Applied Research College in Ontario"
          className="bg-[var(--pill-badge-bg)]"
        />
        <FullBleedImage
          src={MEDIA.digitalComms}
          alt="LinkedIn banner and email signature mockups for Mohawk IDEAWORKS rankings celebration"
          className="bg-[var(--bg-page)]"
        />
        <FullBleedImage
          src={MEDIA.notebooks}
          alt="Mohawk IDEAWORKS branded notebook mockups with icon grid artwork"
          className="bg-[var(--pill-badge-bg)]"
        />
      </div>

      <SectionShell className="bg-[var(--bg-surface)] pb-24 sm:pb-28 lg:pb-32">
        <h2 className="mb-8 text-[36px] font-bold leading-10 tracking-[-0.9px] text-[var(--text-primary)] sm:mb-10">
          Social Media Design
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Frame
            src={MEDIA.socialPrimary}
            alt="LinkedIn post — A Proud Moment Worth Celebrating with event photography collage"
          />
          <Frame
            src={MEDIA.socialSecondary}
            alt="Social graphic celebrating #1 Applied Research College in Ontario ranking"
          />
        </div>
      </SectionShell>
    </>
  );
}
