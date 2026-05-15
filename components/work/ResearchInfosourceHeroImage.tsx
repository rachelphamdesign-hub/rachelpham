import Image from "next/image";

type Props = {
  imageSrc: string;
  alt: string;
};

/** Hero graphic card — matches FHIR North hero shadow and rounded frame. */
export function ResearchInfosourceHeroImage({ imageSrc, alt }: Props) {
  return (
    <div
      className="relative z-10 overflow-hidden rounded-[56px] bg-white shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1),0px_10px_30px_0px_rgba(0,0,0,0.05)] dark:bg-[var(--bg-surface)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.45),0px_10px_30px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="relative aspect-[980/520] w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain object-center p-6 sm:p-10"
          sizes="(min-width: 1024px) 980px, 100vw"
          priority
        />
      </div>
    </div>
  );
}
