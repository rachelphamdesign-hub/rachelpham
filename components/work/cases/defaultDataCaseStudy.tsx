import type { ProjectMeta } from "@/lib/projects";
import { WorkStandardHero } from "@/components/work/cases/workStandardHero";
import { WorkProjectSections } from "@/components/work/cases/workProjectSections";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

/** Social Robots, Applied Research 101 & CashPay — standard hero + data-driven sections. */
export default function DefaultDataCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <WorkStandardHero project={project} />
      <WorkProjectSections project={project} />
      <WorkBackToWork />
    </>
  );
}
