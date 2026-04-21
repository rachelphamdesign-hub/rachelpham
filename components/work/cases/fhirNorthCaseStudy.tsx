import type { ProjectMeta } from "@/lib/projects";
import { FhirNorthRefinedHero } from "@/components/work/FhirNorthRefinedHero";
import { FhirNorthOverviewSection } from "@/components/work/FhirNorthOverviewSection";
import { FhirNorthMetricsSection } from "@/components/work/FhirNorthMetricsSection";
import { FhirNorthWebsiteSection } from "@/components/work/FhirNorthWebsiteSection";
import { FhirNorthEventSignageSection } from "@/components/work/FhirNorthEventSignageSection";
import { FhirNorthSocialMediaDesignSection } from "@/components/work/FhirNorthSocialMediaDesignSection";
import { FhirNorthEventGallerySection } from "@/components/work/FhirNorthEventGallerySection";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";

export default function FhirNorthCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <section className="px-0 pb-10 pt-32 sm:pb-14">
        <FhirNorthRefinedHero project={project} />
      </section>
      <FhirNorthOverviewSection />
      <FhirNorthMetricsSection />
      <FhirNorthWebsiteSection />
      <FhirNorthEventSignageSection />
      <FhirNorthSocialMediaDesignSection />
      <FhirNorthEventGallerySection />
      <WorkBackToWork variant="surface" />
    </>
  );
}
