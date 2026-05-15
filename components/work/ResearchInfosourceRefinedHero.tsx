import type { ProjectMeta } from "@/lib/projects";
import { ResearchInfosourceHeroImage } from "@/components/work/ResearchInfosourceHeroImage";

/** Hero — badge, title, graphic card, Role / Team / Timeline / Platform (FHIR North layout). */
export function ResearchInfosourceRefinedHero({ project }: { project: ProjectMeta }) {
  const imageSrc = project.heroImage || "/media/ranking_event_port/title.png";

  return (
    <div className="mx-auto max-w-[980px] px-6">
      <div className="flex flex-col items-center gap-[39px] pt-8 pb-12 text-center">
        <div className="flex items-center gap-2 rounded-full border border-[var(--border-nav)] bg-[var(--pill-badge-bg)] px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_2px_rgba(0,0,0,0.35)]">
          <span className="block size-2 shrink-0 rounded-full bg-[var(--accent-action)]" aria-hidden />
          <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[var(--text-primary)]">
            {project.label}
          </span>
        </div>

        <h1 className="max-w-[992px] text-[40px] font-bold tracking-[-1.8px] text-[var(--text-primary)] sm:text-[54px] sm:leading-[72px]">
          Research Infosource
          <br />
          Rankings Celebration
        </h1>
      </div>

      <ResearchInfosourceHeroImage
        imageSrc={imageSrc}
        alt={`${project.title} — Mohawk IDEAWORKS #1 applied research colleges graphic`}
      />

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

        <div className="flex max-w-[240px] flex-col gap-[7px]">
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
            Platform
          </p>
          <p className="text-left text-[15px] leading-[19.5px] text-[var(--text-secondary)]">
            {project.platform ?? "In-person"}
          </p>
        </div>
      </div>
    </div>
  );
}
