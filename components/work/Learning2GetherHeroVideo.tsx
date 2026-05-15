type Props = {
  videoSrc: string;
};

/** Hero video — rounded card with soft shadow (FHIR North layout). */
export function Learning2GetherHeroVideo({ videoSrc }: Props) {
  return (
    <div className="relative z-10 overflow-hidden rounded-[56px] bg-[var(--bg-surface)] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1),0px_10px_30px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.45),0px_10px_30px_0px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-[980/470] w-full">
        <video
          src={videoSrc}
          className="pointer-events-none absolute inset-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Learning 2Gether promotional materials showcase"
        />
      </div>
    </div>
  );
}
