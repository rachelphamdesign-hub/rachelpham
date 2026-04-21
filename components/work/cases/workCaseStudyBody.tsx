import dynamic from "next/dynamic";
import type { ProjectMeta } from "@/lib/projects";

/** CashPay shares the same layout as Social Robots / Applied Research (hero + CMS sections). */
const DefaultDataCaseStudy = dynamic(() => import("@/components/work/cases/defaultDataCaseStudy"));
const TrackguardCaseStudy = dynamic(() => import("@/components/work/cases/trackguardCaseStudy"));
const SweetSunsetCaseStudy = dynamic(() => import("@/components/work/cases/sweetSunsetCaseStudy"));
const IdeasToImpactCaseStudy = dynamic(() => import("@/components/work/cases/ideasToImpactCaseStudy"));
const FhirNorthCaseStudy = dynamic(() => import("@/components/work/cases/fhirNorthCaseStudy"));
const VotCoffeeCaseStudy = dynamic(() => import("@/components/work/cases/votCoffeeCaseStudy"));

export function WorkCaseStudyBody({ slug, project }: { slug: string; project: ProjectMeta }) {
  switch (slug) {
    case "social-robots":
    case "applied-research-101":
    case "cashpay":
      return <DefaultDataCaseStudy project={project} />;
    case "trackguard":
      return <TrackguardCaseStudy project={project} />;
    case "sweet-sunset":
      return <SweetSunsetCaseStudy project={project} />;
    case "ideas-to-impact":
      return <IdeasToImpactCaseStudy project={project} />;
    case "fhir-north":
      return <FhirNorthCaseStudy project={project} />;
    case "vot-coffee":
      return <VotCoffeeCaseStudy project={project} />;
    default:
      return <DefaultDataCaseStudy project={project} />;
  }
}
