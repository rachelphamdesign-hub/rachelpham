import type { ProjectMeta } from "@/lib/projects";
import { WorkStandardHero } from "@/components/work/cases/workStandardHero";
import { WorkProjectSections } from "@/components/work/cases/workProjectSections";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";
import { TrackGuardProcessSection } from "@/components/work/TrackGuardProcessSection";
import { TrackGuardIdentifyingSection } from "@/components/work/TrackGuardIdentifyingSection";
import { TrackGuardFactorsSection } from "@/components/work/TrackGuardFactorsSection";
import { TrackGuardPersonasSection } from "@/components/work/TrackGuardPersonasSection";
import { TrackGuardSurveyResultsSection } from "@/components/work/TrackGuardSurveyResultsSection";
import { TrackGuardSurveyInsightsSection } from "@/components/work/TrackGuardSurveyInsightsSection";
import { TrackGuardUserJourneySection } from "@/components/work/TrackGuardUserJourneySection";
import { TrackGuardKeyFeatures } from "@/components/work/TrackGuardKeyFeatures";
import { TrackGuardHowItWorksSection } from "@/components/work/TrackGuardHowItWorksSection";
import { TrackGuardStoryboardSection } from "@/components/work/TrackGuardStoryboardSection";
import { TrackGuardLowFidelitySection } from "@/components/work/TrackGuardLowFidelitySection";
import { TrackGuardHighFidelitySection } from "@/components/work/TrackGuardHighFidelitySection";
import { TrackGuardDesignOutcomeSection } from "@/components/work/TrackGuardDesignOutcomeSection";

export default function TrackguardCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <WorkStandardHero project={project} />
      <TrackGuardProcessSection />
      <TrackGuardIdentifyingSection />
      <TrackGuardFactorsSection />
      <TrackGuardPersonasSection />
      <TrackGuardSurveyResultsSection />
      <TrackGuardSurveyInsightsSection />
      <TrackGuardUserJourneySection />
      <TrackGuardKeyFeatures />
      <TrackGuardHowItWorksSection />
      <TrackGuardStoryboardSection />
      <TrackGuardLowFidelitySection />
      <TrackGuardHighFidelitySection />
      <TrackGuardDesignOutcomeSection />
      <WorkProjectSections project={project} />
      <WorkBackToWork />
    </>
  );
}
