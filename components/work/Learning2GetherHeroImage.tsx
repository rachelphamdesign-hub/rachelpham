import Image from "next/image";

type Props = {
  imageSrc: string;
  alt: string;
};

/** Hero — three-panel L2G graphics in rounded card. */
export function Learning2GetherHeroImage({ imageSrc, alt }: Props) {
  return (
    <div className="relative z-10 overflow-hidden rounded-[56px] bg-[var(--bg-surface)] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1),0px_10px_30px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.45),0px_10px_30px_0px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-[4496/1575] w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain object-center p-5 sm:p-8"
          sizes="(min-width: 1024px) 980px, 100vw"
          priority
        />
      </div>
    </div>
  );
}
