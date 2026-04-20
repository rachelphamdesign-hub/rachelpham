"use client";

const FHIR_NORTH_LIVE_URL = "https://fhirnorth.mohawkcollege.ca/" as const;

type Props = {
  videoSrc: string;
};

/**
 * Hero laptop / video mockup — opens the live conference site in a new tab (no custom cursor; that lives on the home featured card).
 */
export function FhirNorthHeroLiveLink({ videoSrc }: Props) {
  return (
    <a
      href={FHIR_NORTH_LIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 block cursor-pointer overflow-hidden rounded-[56px] bg-[var(--bg-surface)] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1),0px_10px_30px_0px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0px_24px_56px_0px_rgba(0,0,0,0.14)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.45),0px_10px_30px_0px_rgba(0,0,0,0.25)] dark:hover:shadow-[0px_24px_56px_0px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-action)]"
      aria-label="Open the FHIR North live conference website in a new tab"
    >
      <div className="relative aspect-[980/470] w-full">
        <video
          src={videoSrc}
          className="pointer-events-none absolute inset-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
        />
      </div>
    </a>
  );
}
