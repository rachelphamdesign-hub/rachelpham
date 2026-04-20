import type { ProjectMeta } from "@/lib/projects";

/** Figma 291:23782 — Refined hero (badge, title, tagline, video, Role / Team / Timeline / Tools). */
export function FhirNorthRefinedHero({ project }: { project: ProjectMeta }) {
  const videoSrc = project.heroVideo ?? "/media/fhir-north-hero.mp4";
  const tagline = project.heroSubtitle ?? project.subtitle;

  return (
    <div className="mx-auto max-w-[980px] px-6">
      <div className="flex flex-col items-center gap-[39px] pt-8 pb-12 text-center">
        <div className="flex items-center gap-2 rounded-full border border-[var(--border-nav)] bg-[var(--pill-badge-bg)] px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_2px_rgba(0,0,0,0.35)]">
          <span className="block size-2 shrink-0 rounded-full bg-[var(--accent-action)]" aria-hidden />
          <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[var(--text-primary)]">
            {project.label}
          </span>
        </div>

        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="max-w-[992px] text-[40px] font-bold tracking-[-1.8px] text-[var(--text-primary)] sm:text-[54px] sm:leading-[72px]">
            {project.title}
          </h1>
          <p className="max-w-[min(100%,768px)] text-[18px] leading-8 text-[var(--text-secondary)]">{tagline}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[56px] bg-[var(--bg-surface)] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1),0px_10px_30px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.45),0px_10px_30px_0px_rgba(0,0,0,0.25)]">
        <div className="relative aspect-[980/470] w-full">
          <video
            src={videoSrc}
            className="absolute inset-0 size-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[896px] flex-wrap justify-center gap-x-10 gap-y-8 pb-4 pt-10 sm:gap-x-16 lg:justify-between lg:gap-x-20 xl:gap-[80px]">
        <div className="flex flex-col gap-[7px]">
          <p className="text-left text-[12px] font-bold uppercase tracking-[2px] text-[var(--text-primary)]">
            Role
          </p>
          {project.role.map((r) => (
            <p key={r} className="text-left text-[15px] leading-[19.5px] text-[var(--text-secondary)]">
              {r}
            </p>
          ))}
        </div>

        <div className="flex max-w-[200px] flex-col gap-[7px]">
          <p className="text-left text-[12px] font-bold uppercase tracking-[2px] text-[var(--text-primary)]">
            Team
          </p>
          <p className="text-left text-[15px] leading-[19.5px] text-[var(--text-secondary)]">{project.team}</p>
        </div>

        <div className="flex flex-col gap-[7px]">
          <p className="text-left text-[12px] font-bold uppercase tracking-[2px] text-[var(--text-primary)]">
            Timeline
          </p>
          <p className="text-left text-[15px] leading-[19.5px] text-[var(--text-secondary)]">{project.timeline}</p>
        </div>

        <div className="flex flex-col gap-[7px]">
          <p className="text-left text-[12px] font-bold uppercase tracking-[2px] text-[var(--text-primary)]">
            Tools
          </p>
          {project.tools.map((t) => (
            <p key={t} className="text-left text-[15px] leading-[19.5px] text-[var(--text-secondary)]">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
