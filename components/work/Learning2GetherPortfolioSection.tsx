/** Learning 2Gether — portfolio gallery below Experience & Impact (Figma layout). */

import { Learning2GetherSocialMediaDesignSection } from "@/components/work/Learning2GetherSocialMediaDesignSection";

const BASE = "/media/l2t_port";

const MEDIA = {
  heroBanner: `${BASE}/Untitled%20design%20copy.jpg`,
  tandemPanels: `${BASE}/Frame%201.png`,
  tableTent: `${BASE}/Free_Table_Tent_Mockup_4.png`,
  printMockups: `${BASE}/Container.png`,
  eventBooth: `${BASE}/1761155376577.jpeg`,
  photoGroup: `${BASE}/938b6d57-b89c-4a7f-a59b-6a88533de123.jpeg`,
  digitalDisplay: `${BASE}/IMG_8757.JPG`,
  celebrationCake: `${BASE}/IMG_8836.jpg`,
} as const;

const cardShadow =
  "shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] dark:shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.35),0px_2px_8px_-1px_rgba(0,0,0,0.2)]";

function FullBleedImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden ${className}`}>
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

function FramedImage({
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

export function Learning2GetherPortfolioSection() {
  return (
    <div className="flex w-full flex-col gap-0 overflow-x-clip bg-[var(--bg-page)]">
      {/* Hero banner */}
      <FullBleedImage
        src={MEDIA.heroBanner}
        alt="Learning 2Gether program banner with family illustration and partner logos"
        className="bg-[var(--bg-surface)]"
      />

      {/* Tandem education panels */}
      <section className="bg-[var(--bg-page)] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <FramedImage
            src={MEDIA.tandemPanels}
            alt="Learning 2Gether tandem education program panels — student-caregiver support and program details"
            rounded="rounded-[24px]"
          />
        </div>
      </section>

      {/* Table tent mockup */}
      <FullBleedImage
        src={MEDIA.tableTent}
        alt="Learning 2Gether table tent mockup"
        className="bg-[var(--pill-badge-bg)]"
      />

      {/* Program guide + A-frame */}
      <FullBleedImage
        src={MEDIA.printMockups}
        alt="Learning 2Gether program guide flyer and A-frame sidewalk sign mockups"
        className="bg-[var(--bg-surface)]"
      />

      {/* Event booth */}
      <FullBleedImage
        src={MEDIA.eventBooth}
        alt="Learning 2Gether promotional booth at Mohawk College with team members"
        className="bg-[var(--bg-page)]"
      />

      <Learning2GetherSocialMediaDesignSection />

      {/* Event photography */}
      <section className="bg-[var(--bg-page)] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-[150px]">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col gap-6">
            <div
              className={`relative aspect-[980/455] w-full overflow-hidden rounded-[40px] border border-[var(--border-subtle)] ${cardShadow}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MEDIA.photoGroup}
                alt="Learning 2Gether team and participants in front of thank-you presentation screen"
                className="pointer-events-none absolute inset-0 size-full object-cover object-center select-none"
                draggable={false}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FramedImage
                src={MEDIA.digitalDisplay}
                alt="Learning 2Gether presentation on wall-mounted digital display"
                rounded="rounded-[32px]"
                className="aspect-[4/3] min-h-[220px] md:min-h-[299px] [&_img]:size-full [&_img]:object-cover"
                imgClassName="size-full object-cover"
              />
              <FramedImage
                src={MEDIA.celebrationCake}
                alt="Learning 2Gether celebration cake with program branding"
                rounded="rounded-[32px]"
                className="aspect-[4/3] min-h-[220px] md:min-h-[299px] [&_img]:size-full [&_img]:object-cover"
                imgClassName="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
