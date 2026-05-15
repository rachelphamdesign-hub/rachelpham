import Image from "next/image";

export type MediaStackItem = {
  src: string;
  alt: string;
};

type MediaStackSectionProps = {
  heading?: string;
  subheading?: string;
  items: MediaStackItem[];
  headingLink?: { label: string; href: string };
  /** Edge-to-edge images (viewport width), no card frame — used on Applied Research 101 @ CiCan. */
  fullBleed?: boolean;
};

const headingBaseClass =
  "mb-4 text-[30px] font-semibold leading-tight tracking-[-0.025em] sm:text-[34px] lg:text-[36px]";

function MediaStackHeading({
  heading,
  headingLink,
}: {
  heading: string;
  headingLink?: { label: string; href: string };
}) {
  const style = { color: "var(--text-primary)" } as const;
  const linkClass =
    "text-[var(--text-primary)] underline decoration-[var(--border-subtle)] underline-offset-[3px] transition-opacity hover:opacity-80";

  if (!headingLink || !heading.includes(headingLink.label)) {
    return (
      <h2 className={headingBaseClass} style={style}>
        {heading}
      </h2>
    );
  }

  const [before, ...afterParts] = heading.split(headingLink.label);
  const after = afterParts.join(headingLink.label);

  return (
    <h2 className={headingBaseClass} style={style}>
      {before}
      <a href={headingLink.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {headingLink.label}
      </a>
      {after}
    </h2>
  );
}

/** Vertical stack of case study images; optional full-bleed layout without boxed containers. */
export function MediaStackSection({ heading, subheading, items, headingLink, fullBleed }: MediaStackSectionProps) {
  if (fullBleed) {
    return (
      <div className="flex w-full flex-col">
        {(heading || subheading) && (
          <div className="mx-auto w-full max-w-[920px] px-6 pb-10 pt-2 text-center sm:pb-12 sm:pt-4">
            {heading ? <MediaStackHeading heading={heading} headingLink={headingLink} /> : null}
            {subheading ? (
              <div className="flex w-full justify-center overflow-x-auto [-webkit-overflow-scrolling:touch]">
                <p className="whitespace-nowrap text-[15px] leading-relaxed text-[var(--text-secondary)] sm:text-[17px] lg:text-[18px] lg:leading-[1.65]">
                  {subheading}
                </p>
              </div>
            ) : null}
          </div>
        )}

        <div className="flex w-full flex-col gap-0 overflow-x-clip">
          {items.map((item) => (
            <div
              key={item.src}
              className="relative left-1/2 right-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--bg-surface)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1200}
                className="mx-auto block h-auto w-full object-contain object-center"
                sizes="100vw"
                priority={item.src.endsWith("video.gif")}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
      {heading ? <MediaStackHeading heading={heading} headingLink={headingLink} /> : null}
      {subheading ? (
        <p className="mb-12 max-w-[640px] text-[16px] leading-relaxed text-[var(--text-secondary)] sm:mb-14 sm:text-[18px] sm:leading-[1.65]">
          {subheading}
        </p>
      ) : null}

      <div className="flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-14">
        {items.map((item) => (
          <div
            key={item.src}
            className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-sm sm:rounded-[28px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1600}
              height={1200}
              className="mx-auto block h-auto w-full max-w-full object-contain object-center"
              sizes="(min-width: 1024px) 920px, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
