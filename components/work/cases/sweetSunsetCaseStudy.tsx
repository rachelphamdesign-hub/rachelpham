import type { ProjectMeta } from "@/lib/projects";
import { WorkStandardHero } from "@/components/work/cases/workStandardHero";
import { WorkProjectSections } from "@/components/work/cases/workProjectSections";
import { WorkBackToWork } from "@/components/work/cases/workBackToWork";
import { SweetSunsetSocialPostSection } from "@/components/work/SweetSunsetSocialPostSection";
import { SweetSunsetOverviewGoalSection } from "@/components/work/SweetSunsetOverviewGoalSection";
import { SweetSunsetApronBrandSection } from "@/components/work/SweetSunsetApronBrandSection";
import { SweetSunsetFoodCollageSection } from "@/components/work/SweetSunsetFoodCollageSection";
import { SweetSunsetColorEvolutionSection } from "@/components/work/SweetSunsetColorEvolutionSection";
import { SweetSunsetBusinessCardsSection } from "@/components/work/SweetSunsetBusinessCardsSection";
import { SweetSunsetCoffeeSpreadSection } from "@/components/work/SweetSunsetCoffeeSpreadSection";
import { SweetSunsetToteBagsSection } from "@/components/work/SweetSunsetToteBagsSection";
import { SweetSunsetLogoPatternSection } from "@/components/work/SweetSunsetLogoPatternSection";
import { SweetSunsetSloganBannerSection } from "@/components/work/SweetSunsetSloganBannerSection";
import { SweetSunsetPackagingMockupSection } from "@/components/work/SweetSunsetPackagingMockupSection";
import { SweetSunsetTwinPortraitSpreadSection } from "@/components/work/SweetSunsetTwinPortraitSpreadSection";
import { SweetSunsetSocialCampaignSection } from "@/components/work/SweetSunsetSocialCampaignSection";
import { SweetSunsetTikTokCardsSection } from "@/components/work/SweetSunsetTikTokCardsSection";

export default function SweetSunsetCaseStudy({ project }: { project: ProjectMeta }) {
  return (
    <>
      <WorkStandardHero project={project} />
      <SweetSunsetSocialPostSection />
      <SweetSunsetOverviewGoalSection />
      <SweetSunsetApronBrandSection />
      <SweetSunsetFoodCollageSection />
      <SweetSunsetColorEvolutionSection />
      <SweetSunsetBusinessCardsSection />
      <SweetSunsetCoffeeSpreadSection />
      <SweetSunsetToteBagsSection />
      <SweetSunsetLogoPatternSection />
      <SweetSunsetSloganBannerSection />
      <SweetSunsetPackagingMockupSection />
      <SweetSunsetTwinPortraitSpreadSection />
      <SweetSunsetSocialCampaignSection />
      <SweetSunsetTikTokCardsSection />
      <WorkProjectSections project={project} />
      <WorkBackToWork />
    </>
  );
}
