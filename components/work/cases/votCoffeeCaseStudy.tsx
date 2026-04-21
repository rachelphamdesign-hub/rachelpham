import type { ProjectMeta } from "@/lib/projects";
import { VotCoffeeRefinedHero } from "@/components/work/VotCoffeeRefinedHero";
import { VotCoffeeOverviewGoalSection } from "@/components/work/VotCoffeeOverviewGoalSection";
import { VotCoffeeLeadStrip, VotCoffeeGalleryStrips } from "@/components/work/VotCoffeeFullBleedSections";
import { VotCoffeePackagingMockupSection } from "@/components/work/VotCoffeePackagingMockupSection";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

export default function VotCoffeeCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <section className="px-0 pb-10 pt-32 sm:pb-14">
        <VotCoffeeRefinedHero project={project} />
      </section>
      <VotCoffeeLeadStrip />
      <VotCoffeeOverviewGoalSection overview={project.overview} />
      <VotCoffeePackagingMockupSection />
      <VotCoffeeGalleryStrips />
      <WorkBackToWork variant="surface" />
    </>
  );
}
