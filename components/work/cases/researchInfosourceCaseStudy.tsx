import type { ProjectMeta } from "@/lib/projects";
import { ResearchInfosourceRefinedHero } from "@/components/work/ResearchInfosourceRefinedHero";
import { ResearchInfosourceOverviewSection } from "@/components/work/ResearchInfosourceOverviewSection";
import { ResearchInfosourcePortfolioSection } from "@/components/work/ResearchInfosourcePortfolioSection";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

export default function ResearchInfosourceCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <section className="px-0 pb-10 pt-32 sm:pb-14">
        <ResearchInfosourceRefinedHero project={project} />
      </section>
      <ResearchInfosourceOverviewSection />
      <ResearchInfosourcePortfolioSection />
      <WorkBackToWork variant="surface" />
    </>
  );
}
