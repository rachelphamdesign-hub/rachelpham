import type { ProjectMeta } from "@/lib/projects";
import { IdeasToImpactRefinedHero } from "@/components/work/IdeasToImpactRefinedHero";
import { IdeasToImpactOverviewSection } from "@/components/work/IdeasToImpactOverviewSection";
import { IdeasToImpactSocialGraphicSection } from "@/components/work/IdeasToImpactSocialGraphicSection";
import { IdeasToImpactTalkTheatersSection } from "@/components/work/IdeasToImpactTalkTheatersSection";
import { IdeasToImpactRobotPhotoboothSection } from "@/components/work/IdeasToImpactRobotPhotoboothSection";
import { IdeasToImpactAdditionalBrandApplicationsSection } from "@/components/work/IdeasToImpactAdditionalBrandApplicationsSection";
import { IdeasToImpactAgendaSection } from "@/components/work/IdeasToImpactAgendaSection";
import { IdeasToImpactSocialMediaDesignSection } from "@/components/work/IdeasToImpactSocialMediaDesignSection";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

export default function IdeasToImpactCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <section className="px-0 pb-10 pt-32 sm:pb-14">
        <IdeasToImpactRefinedHero project={project} />
      </section>
      <IdeasToImpactOverviewSection />
      <IdeasToImpactSocialGraphicSection />
      <IdeasToImpactTalkTheatersSection />
      <IdeasToImpactRobotPhotoboothSection />
      <IdeasToImpactAdditionalBrandApplicationsSection />
      <IdeasToImpactAgendaSection />
      <IdeasToImpactSocialMediaDesignSection />
      <WorkBackToWork variant="surface" />
    </>
  );
}
