import type { ProjectMeta } from "@/lib/projects";
import { Learning2GetherRefinedHero } from "@/components/work/Learning2GetherRefinedHero";
import { Learning2GetherPortfolioSection } from "@/components/work/Learning2GetherPortfolioSection";
import { WorkProjectSections } from "@/components/work/cases/workProjectSections";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

export default function Learning2GetherCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <section className="px-0 pb-10 pt-32 sm:pb-14">
        <Learning2GetherRefinedHero project={project} />
      </section>
      <WorkProjectSections project={project} />
      <Learning2GetherPortfolioSection />
      <WorkBackToWork />
    </>
  );
}
