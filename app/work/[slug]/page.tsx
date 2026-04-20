import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThreeDPlaceholder } from "@/components/ThreeDPlaceholder";
import { CashpayKeyFeatures } from "@/components/work/CashpayKeyFeatures";
import { CashpayDataCollectionAndSurvey } from "@/components/work/CashpayDataCollectionAndSurvey";
import { CashpayUserPersonasSection } from "@/components/work/CashpayUserPersonasSection";
import { CashpayUsabilityFeedbackSection } from "@/components/work/CashpayUsabilityFeedbackSection";
import { CashpayFeedbackFixesSection } from "@/components/work/CashpayFeedbackFixesSection";
import { CashpaySectionSpacingDebug } from "@/components/work/CashpaySectionSpacingDebug";
import { TrackGuardFactorsSection } from "@/components/work/TrackGuardFactorsSection";
import { TrackGuardIdentifyingSection } from "@/components/work/TrackGuardIdentifyingSection";
import { TrackGuardPersonasSection } from "@/components/work/TrackGuardPersonasSection";
import { TrackGuardProcessSection } from "@/components/work/TrackGuardProcessSection";
import { TrackGuardSurveyInsightsSection } from "@/components/work/TrackGuardSurveyInsightsSection";
import { TrackGuardSurveyResultsSection } from "@/components/work/TrackGuardSurveyResultsSection";
import { TrackGuardUserJourneySection } from "@/components/work/TrackGuardUserJourneySection";
import { TrackGuardKeyFeatures } from "@/components/work/TrackGuardKeyFeatures";
import { TrackGuardHowItWorksSection } from "@/components/work/TrackGuardHowItWorksSection";
import { TrackGuardStoryboardSection } from "@/components/work/TrackGuardStoryboardSection";
import { TrackGuardLowFidelitySection } from "@/components/work/TrackGuardLowFidelitySection";
import { TrackGuardHighFidelitySection } from "@/components/work/TrackGuardHighFidelitySection";
import { TrackGuardDesignOutcomeSection } from "@/components/work/TrackGuardDesignOutcomeSection";
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
import { IdeasToImpactRefinedHero } from "@/components/work/IdeasToImpactRefinedHero";
import { IdeasToImpactOverviewSection } from "@/components/work/IdeasToImpactOverviewSection";
import { IdeasToImpactSocialGraphicSection } from "@/components/work/IdeasToImpactSocialGraphicSection";
import { IdeasToImpactTalkTheatersSection } from "@/components/work/IdeasToImpactTalkTheatersSection";
import { IdeasToImpactRobotPhotoboothSection } from "@/components/work/IdeasToImpactRobotPhotoboothSection";
import { IdeasToImpactAdditionalBrandApplicationsSection } from "@/components/work/IdeasToImpactAdditionalBrandApplicationsSection";
import { IdeasToImpactAgendaSection } from "@/components/work/IdeasToImpactAgendaSection";
import { IdeasToImpactSocialMediaDesignSection } from "@/components/work/IdeasToImpactSocialMediaDesignSection";
import { FhirNorthRefinedHero } from "@/components/work/FhirNorthRefinedHero";
import { FhirNorthOverviewSection } from "@/components/work/FhirNorthOverviewSection";
import { FhirNorthMetricsSection } from "@/components/work/FhirNorthMetricsSection";
import { FhirNorthWebsiteSection } from "@/components/work/FhirNorthWebsiteSection";
import { FhirNorthEventSignageSection } from "@/components/work/FhirNorthEventSignageSection";
import { FhirNorthSocialMediaDesignSection } from "@/components/work/FhirNorthSocialMediaDesignSection";
import { FhirNorthEventGallerySection } from "@/components/work/FhirNorthEventGallerySection";
import { VotCoffeeRefinedHero } from "@/components/work/VotCoffeeRefinedHero";
import { VotCoffeeOverviewGoalSection } from "@/components/work/VotCoffeeOverviewGoalSection";
import {
  VotCoffeeLeadStrip,
  VotCoffeeGalleryStrips,
} from "@/components/work/VotCoffeeFullBleedSections";
import { VotCoffeePackagingMockupSection } from "@/components/work/VotCoffeePackagingMockupSection";
import { cashpayInsetX } from "@/lib/cashpaySpacing";
import { getProject, projects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} – Rachel Pham`,
    description: project.subtitle,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const isCashpay = slug === "cashpay";
  const isTrackguard = slug === "trackguard";
  const isAppliedResearch101 = slug === "applied-research-101";
  const isSweetSunset = slug === "sweet-sunset";
  const isIdeasToImpact = slug === "ideas-to-impact";
  const isFhirNorth = slug === "fhir-north";
  const isVotCoffee = slug === "vot-coffee";
  const cashpayProcessPreview = "https://www.figma.com/api/mcp/asset/8e4be111-0116-401d-b8b8-4d9ae97ffad5";
  const challengeIconFriction = "https://www.figma.com/api/mcp/asset/61fd4f3a-6836-473a-925b-1a65b21d2aa3";
  const challengeIconObjective = "https://www.figma.com/api/mcp/asset/8898d8f6-c8c5-458e-a546-d9261f6c9277";

  if (!project) notFound();

  return (
    <>
      <Header />
      <main
        className="pt-0"
        style={{ background: "var(--bg-page)" }}
      >
        {/* ── Hero Section ── */}
        <section
          className={`px-0 ${
            isCashpay
              ? "pt-28 pb-10 sm:pb-14"
              : isTrackguard ||
                  isSweetSunset ||
                  isIdeasToImpact ||
                  isFhirNorth ||
                  isVotCoffee
                ? "pt-32 pb-10 sm:pb-14"
                : "pt-32 pb-0"
          }`}
          {...(isCashpay ? { "data-cashpay-debug-hero": "1" } : {})}
        >
          {isVotCoffee ? (
            <VotCoffeeRefinedHero project={project} />
          ) : isFhirNorth ? (
            <FhirNorthRefinedHero project={project} />
          ) : isIdeasToImpact ? (
            <IdeasToImpactRefinedHero project={project} />
          ) : (
          <div className="max-w-[980px] mx-auto px-6">
            {/* Label + Title */}
            <div
              className={`flex flex-col items-center text-center ${
                isCashpay ? "gap-6 mb-8 pt-4 sm:mb-10" : isSweetSunset ? "mb-12 gap-10 pt-8" : "gap-8 mb-12 pt-8"
              }`}
            >
              <div
                className="flex items-center gap-2 px-[17px] py-[7px] rounded-full border shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                style={{
                  background: isCashpay || isSweetSunset ? "var(--pill-badge-bg)" : "var(--bg-surface)",
                  borderColor: "var(--border-nav)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent-action)]" />
                <span
                  className="text-[12px] font-bold tracking-[1.2px] uppercase text-center"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.label}
                </span>
              </div>

              <div className={`${isCashpay || isSweetSunset ? "flex flex-col gap-2" : "flex flex-col gap-3"}`}>
                <h1
                  className={`${
                    isCashpay || isSweetSunset
                      ? "text-[40px] sm:text-[54px] tracking-[-1.8px] leading-[1.1]"
                      : "text-[40px] sm:text-[54px] tracking-[-0.03em] leading-[1.1]"
                  } font-bold`}
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h1>
                <p
                  className={`${isCashpay || isSweetSunset ? "text-[18px] leading-[32px]" : "text-[18px] leading-[1.7]"}`}
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Hero image / placeholder */}
            <div
              className={`relative overflow-hidden ${isCashpay ? "rounded-[56px]" : "rounded-[56px]"}`}
              style={{
                background: isAppliedResearch101 ? "var(--bg-page)" : "var(--bg-surface)",
                boxShadow: "var(--shadow-hero-media)",
              }}
            >
              {project.heroVideo && isCashpay ? (
                <div className="relative w-full" style={{ paddingBottom: "47%" }}>
                  <video
                    src={project.heroVideo}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : project.heroVideo ? (
                <div className="relative w-full" style={{ paddingBottom: "47%" }}>
                  <video
                    src={project.heroVideo}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : project.heroImage && isSweetSunset ? (
                <div className="relative h-[min(420px,58vw)] w-full overflow-hidden sm:h-[470px]">
                  {/* Figma 337:24571 — mockup frame h 470, image h 142.24% top -12.66% */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- Figma-exact % crop */}
                  <img
                    src={project.heroImage}
                    alt={`${project.title} — brand packaging and identity mockups`}
                    className="pointer-events-none absolute left-0 w-full max-w-none select-none"
                    style={{
                      height: "142.24%",
                      top: "-12.66%",
                    }}
                    draggable={false}
                  />
                </div>
              ) : project.heroImage && isAppliedResearch101 ? (
                <div className="flex w-full justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} — laptop mockup showing the course interface in Thinkific`}
                    width={1024}
                    height={608}
                    className="h-auto w-full max-w-[min(100%,920px)] object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 920px"
                  />
                </div>
              ) : project.heroImage ? (
                <div className="relative w-full" style={{ paddingBottom: "47%" }}>
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} hero`}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              ) : (
                <ThreeDPlaceholder
                  aspectRatio="16/9"
                  label={`${project.title} — Visual Coming Soon`}
                  className="rounded-[56px] border-none"
                />
              )}
            </div>

            {/* Project meta */}
            <div
              className={`${
                isCashpay
                  ? "flex justify-center gap-8 pt-6 pb-2 sm:gap-14 sm:pt-8 sm:pb-3"
                  : isSweetSunset
                    ? "flex flex-wrap justify-center gap-10 pt-10 pb-3 sm:gap-12 sm:pb-4 lg:gap-16 xl:gap-[80px]"
                    : "flex flex-wrap justify-center gap-12 pt-10 pb-3 sm:pb-4"
              }`}
            >
              <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
                <p
                  className="text-[12px] font-bold tracking-[2px] uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  Role
                </p>
                {project.role.map((r) => (
                  <p
                    key={r}
                    className="text-[15px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {r}
                  </p>
                ))}
              </div>

              <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
                <p
                  className="text-[12px] font-bold tracking-[2px] uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  Team
                </p>
                <p className="text-[15px] max-w-[180px]" style={{ color: "var(--text-secondary)" }}>
                  {project.team}
                </p>
              </div>

              <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
                <p
                  className="text-[12px] font-bold tracking-[2px] uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  Timeline
                </p>
                <p className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
                  {project.timeline}
                </p>
              </div>

              <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
                <p
                  className="text-[12px] font-bold tracking-[2px] uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  Tools
                </p>
                {project.tools.map((t) => (
                  <p key={t} className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
          )}
        </section>

        {isVotCoffee ? <VotCoffeeLeadStrip /> : null}
        {isVotCoffee ? (
          <VotCoffeeOverviewGoalSection overview={project.overview} />
        ) : null}
        {isVotCoffee ? <VotCoffeePackagingMockupSection /> : null}
        {isVotCoffee ? <VotCoffeeGalleryStrips /> : null}

        {isFhirNorth ? <FhirNorthOverviewSection /> : null}
        {isFhirNorth ? <FhirNorthMetricsSection /> : null}
        {isFhirNorth ? <FhirNorthWebsiteSection /> : null}
        {isFhirNorth ? <FhirNorthEventSignageSection /> : null}
        {isFhirNorth ? <FhirNorthSocialMediaDesignSection /> : null}
        {isFhirNorth ? <FhirNorthEventGallerySection /> : null}

        {isIdeasToImpact ? <IdeasToImpactOverviewSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactSocialGraphicSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactTalkTheatersSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactRobotPhotoboothSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactAdditionalBrandApplicationsSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactAgendaSection /> : null}
        {isIdeasToImpact ? <IdeasToImpactSocialMediaDesignSection /> : null}

        {isSweetSunset ? <SweetSunsetSocialPostSection /> : null}
        {isSweetSunset ? <SweetSunsetOverviewGoalSection /> : null}
        {isSweetSunset ? <SweetSunsetApronBrandSection /> : null}
        {isSweetSunset ? <SweetSunsetFoodCollageSection /> : null}
        {isSweetSunset ? <SweetSunsetColorEvolutionSection /> : null}
        {isSweetSunset ? <SweetSunsetBusinessCardsSection /> : null}
        {isSweetSunset ? <SweetSunsetCoffeeSpreadSection /> : null}
        {isSweetSunset ? <SweetSunsetToteBagsSection /> : null}
        {isSweetSunset ? <SweetSunsetLogoPatternSection /> : null}
        {isSweetSunset ? <SweetSunsetSloganBannerSection /> : null}
        {isSweetSunset ? <SweetSunsetPackagingMockupSection /> : null}
        {isSweetSunset ? <SweetSunsetTwinPortraitSpreadSection /> : null}
        {isSweetSunset ? <SweetSunsetSocialCampaignSection /> : null}
        {isSweetSunset ? <SweetSunsetTikTokCardsSection /> : null}

        {isTrackguard ? <TrackGuardProcessSection /> : null}
        {isTrackguard ? <TrackGuardIdentifyingSection /> : null}
        {isTrackguard ? <TrackGuardFactorsSection /> : null}
        {isTrackguard ? <TrackGuardPersonasSection /> : null}
        {isTrackguard ? <TrackGuardSurveyResultsSection /> : null}
        {isTrackguard ? <TrackGuardSurveyInsightsSection /> : null}
        {isTrackguard ? <TrackGuardUserJourneySection /> : null}
        {isTrackguard ? <TrackGuardKeyFeatures /> : null}
        {isTrackguard ? <TrackGuardHowItWorksSection /> : null}
        {isTrackguard ? <TrackGuardStoryboardSection /> : null}
        {isTrackguard ? <TrackGuardLowFidelitySection /> : null}
        {isTrackguard ? <TrackGuardHighFidelitySection /> : null}
        {isTrackguard ? <TrackGuardDesignOutcomeSection /> : null}

        {/* ── Content Sections ── */}
        {project.sections?.map((section, i) => (
          (() => {
            const isSocialExperience =
              (project.slug === "social-robots" || project.slug === "applied-research-101") &&
              section.type === "text" &&
              section.heading === "Experience & Impact";
            const cashpayVerticalPadding = (() => {
              if (i === 0) return "pt-0 sm:pt-1 pb-12 sm:pb-16";
              // Survey ends inside this section — avoid stacking section pb with next section pt.
              if (section.heading === "Design Process") return "pt-12 sm:pt-16 pb-0 sm:pb-0";
              // Tight join to survey (previous section has pb-0).
              if (section.heading === "User Personas & Pain Points") return "pt-6 sm:pt-8 pb-0 sm:pb-0";
              // IA diagram ends in previous section — avoid triple stack with gray band + next section pt.
              if (section.heading === "Usability Test & Feedback") return "pt-4 sm:pt-6 pb-12 sm:pb-16";
              return "py-12 sm:py-16";
            })();
            const sectionSpacingClass = isSocialExperience
              ? `py-10 sm:py-12 px-4 sm:px-5 ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`
              : isCashpay
                ? `${cashpayVerticalPadding} ${cashpayInsetX} ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`
                : i === 0
                  ? `${isTrackguard ? "pt-10 sm:pt-12" : "pt-4 sm:pt-6"} pb-20 sm:pb-24 px-6 ${
                      i % 2 === 0
                        ? isTrackguard
                          ? "border-b"
                          : "border-t border-b"
                        : ""
                    } transition-colors`
                  : `py-24 px-6 ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`;
            const textBlockWrapClass = isSocialExperience
              ? "mx-auto w-full max-w-[1040px]"
              : "max-w-[980px] mx-auto";
            const readableTextClass = isSocialExperience
              ? "w-full text-[14px] leading-[1.62] sm:text-[15px] sm:leading-[1.65] lg:text-[16px]"
              : "text-[20px] leading-[32.5px]";
            const readableParagraphClass = isSocialExperience
              ? "w-full text-[14px] leading-[1.62] sm:text-[15px] sm:leading-[1.65] lg:text-[16px]"
              : "text-[20px] leading-[1.65]";

            if (
              isCashpay &&
              section.type === "image" &&
              section.heading === "Competitive Analysis"
            ) {
              return null;
            }

            return (
          <section
            key={i}
            className={sectionSpacingClass}
            style={{
              background: i % 2 === 0 ? "var(--bg-surface)" : "transparent",
              borderColor: "var(--border-default)",
            }}
            {...(isCashpay
              ? {
                  "data-cashpay-debug-section": String(i),
                  "data-cashpay-section-heading": section.heading ?? "",
                }
              : {})}
          >
            <div className="max-w-[1080px] mx-auto">
              {/* Text section */}
              {section.type === "text" && (
                <div className={textBlockWrapClass}>
                  {section.heading && (
                    <h2
                      className={`${isSocialExperience ? "mb-5 text-[30px] sm:text-[32px]" : "mb-8 text-[36px]"} font-semibold tracking-[-0.025em]`}
                      style={{ color: "var(--text-primary)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  {section.bodyHtml ? (
                    <div
                      className={`${readableTextClass} text-[var(--text-secondary)] [&_a]:text-[var(--text-primary)] [&_a]:underline [&_a]:decoration-[var(--border-subtle)] [&_a]:underline-offset-[3px] [&_a]:transition-opacity hover:[&_a]:opacity-85 [&_strong]:font-semibold [&_strong]:text-[var(--text-primary)]`}
                      dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                    />
                  ) : section.body && (
                    <p
                      className={readableParagraphClass}
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {section.body}
                    </p>
                  )}
                </div>
              )}

              {/* Image section */}
              {section.type === "image" && (
                <div>
                  {section.heading &&
                    !(isCashpay && section.heading === "Problem Statement") &&
                    !(isCashpay && section.heading === "User Personas & Pain Points") &&
                    !(isCashpay && section.heading === "Usability Test & Feedback") &&
                    !(isCashpay && section.heading === "Feedback and Fixes for Interface Improvements") && (
                    <h2
                      className="text-[36px] font-semibold tracking-[-0.025em] mb-8"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  {isCashpay && section.heading === "Problem Statement" ? (
                    <div className="mx-auto w-full max-w-[980px]">
                      <div className="relative left-1/2 right-1/2 mb-10 w-screen -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)] bg-[var(--bg-surface)]">
                        <Image
                          src={cashpayProcessPreview}
                          alt="CashPay process preview"
                          width={1920}
                          height={864}
                          className="h-auto w-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
                      <h3
                        className="text-[36px] font-semibold tracking-[-0.9px] leading-[40px]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        The Challenge
                      </h3>
                      <p className="mt-8 text-[20px] leading-[32.5px] text-[var(--text-secondary)] sm:mt-10">
                        Design a financial app for <span className="font-medium text-[var(--text-primary)]">users aged 18–50</span> that makes managing{" "}
                        <span className="font-medium text-[var(--text-primary)]">money simple, intuitive</span>, and{" "}
                        <span className="font-medium text-[var(--text-primary)]">stress-free</span>. The goal was to help users{" "}
                        <span className="font-medium text-[var(--text-primary)]">track multiple cards</span>, understand their{" "}
                        <span className="font-medium text-[var(--text-primary)]">spending patterns</span>, and{" "}
                        <span className="font-medium text-[var(--text-primary)]">stay motivated</span> to achieve their financial goals without feeling overwhelmed by
                        complex data or confusing interfaces.
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 sm:mt-10">
                        <article
                          className="rounded-[40px] border p-11 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] sm:p-12"
                          style={{ background: "var(--bg-footer)", borderColor: "var(--border-default)" }}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <Image src={challengeIconFriction} alt="" width={19} height={19} unoptimized />
                            <h4 className="text-[18px] font-semibold leading-7 text-[var(--text-primary)]">Friction Points</h4>
                          </div>
                          <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22.75px] text-[var(--text-secondary)]">
                            <li>Users find multi-card tracking confusing (42% report feeling overwhelmed).</li>
                            <li>Lack of clear insights leads to missed budgeting opportunities (37%).</li>
                            <li>Motivation drops without visible progress, causing early abandonment (28%).</li>
                          </ul>
                        </article>

                        <article
                          className="rounded-[40px] border p-11 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] sm:p-12"
                          style={{ background: "var(--bg-footer)", borderColor: "var(--border-default)" }}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <Image src={challengeIconObjective} alt="" width={19} height={19} unoptimized />
                            <h4 className="text-[18px] font-semibold leading-7 text-[var(--text-primary)]">Strategic Objective</h4>
                          </div>
                          <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22.75px] text-[var(--text-secondary)]">
                            <li>Simplify tracking across multiple cards to reduce confusion by 50%.</li>
                            <li>Deliver actionable weekly, monthly, and yearly insights to improve budgeting awareness by 45%.</li>
                            <li>Add motivational features to boost engagement and retention by 30%.</li>
                          </ul>
                        </article>
                      </div>
                      </div>
                    </div>
                  ) : isCashpay && section.heading === "Design Process" ? (
                    <div className="mx-auto w-full max-w-[1080px]">
                      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                        {[
                          ["01", "Research"],
                          ["02", "Test"],
                          ["03", "Design"],
                          ["04", "Analyze"],
                          ["05", "Revise"],
                          ["06", "Repeat"],
                        ].map(([step, label]) => (
                                                   <div
                            key={step}
                            className="rounded-[40px] border p-11 text-center sm:p-12"
                            style={{
                              background: "var(--cashpay-process-tile-bg)",
                              borderColor: "var(--border-default)",
                              boxShadow: "var(--shadow-card-soft)",
                            }}
                          >
                            <p
                              className="text-[33px] font-bold tracking-[-1px] leading-[60px]"
                              style={{ color: "var(--cashpay-process-tile-number)" }}
                            >
                              {step}
                            </p>
                            <p
                              className="text-[44px] font-semibold tracking-[-1px] leading-[60px]"
                              style={{ color: "var(--cashpay-process-tile-label)" }}
                            >
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <CashpayKeyFeatures />
                      <CashpayDataCollectionAndSurvey />
                    </div>
                  ) : isCashpay && section.heading === "User Personas & Pain Points" ? (
                    <CashpayUserPersonasSection />
                  ) : isCashpay && section.heading === "Usability Test & Feedback" ? (
                    <CashpayUsabilityFeedbackSection />
                  ) : isCashpay && section.heading === "Feedback and Fixes for Interface Improvements" ? (
                    <CashpayFeedbackFixesSection />
                  ) : section.image ? (
                    <div
                      className="relative w-full rounded-2xl overflow-hidden border"
                      style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
                    >
                      <Image
                        src={section.image}
                        alt={section.heading || "Project image"}
                        width={950}
                        height={600}
                        className={`w-full h-auto ${project.slug === "cashpay" ? "object-contain" : "object-cover"}`}
                        unoptimized
                      />
                    </div>
                  ) : null}
                  {project.links && section.heading === "Interconnected Magazine Feature" && (
                    <div className="mt-6">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[17px] underline transition-opacity hover:opacity-70"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Metrics section */}
              {section.type === "metrics" && section.metrics && (
                <div>
                  {section.heading && (
                    <h2
                      className="text-[36px] font-semibold tracking-[-0.025em] mb-10"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div className="flex flex-wrap gap-16">
                    {section.metrics.map((m) => (
                      <div key={m.value} className="flex flex-col gap-2">
                        <p
                          className="text-[48px] font-bold tracking-[-0.03em]"
                          style={{ color: "var(--accent-action)" }}
                        >
                          {m.value}
                        </p>
                        <p
                          className="text-[15px] max-w-[180px] leading-[1.4]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Color palette section */}
              {section.type === "color-palette" && section.colors && (
                <div>
                  {section.heading && (
                    <h2
                      className="text-[36px] font-semibold tracking-[-0.025em] mb-10"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div className="flex flex-wrap gap-0 overflow-hidden rounded-2xl">
                    {section.colors.map((c) => (
                      <div
                        key={c.hex}
                        className="flex-1 min-w-[100px] h-48 flex items-end p-5 transition-transform hover:scale-y-105 origin-bottom"
                        style={{ background: c.hex }}
                      >
                        <p
                          className="text-[14px] font-semibold"
                          style={{
                            color: isLightColor(c.hex) ? "#1a1a1a" : "#ffffff",
                          }}
                        >
                          {c.label || c.hex}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Images grid section */}
              {section.type === "images-grid" && section.images && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {section.images.map((img, j) => (
                    <div key={j} className="relative rounded-xl overflow-hidden aspect-square">
                      <Image
                        src={img}
                        alt={`Project image ${j + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
            );
          })()
        ))}

        {/* ── Back to work ── */}
        {isCashpay ? <CashpaySectionSpacingDebug /> : null}

        <section
          className="py-20 px-6 text-center"
          style={
            isIdeasToImpact || isFhirNorth || isVotCoffee
              ? { background: "var(--bg-surface)" }
              : undefined
          }
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-medium text-[14px] border transition-colors hover:opacity-80"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border-default)",
              background: "var(--bg-surface)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M14 8H2M2 8L8 2M2 8L8 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to all work
          </Link>
        </section>
      </main>
      <Footer hideTopBorder={isIdeasToImpact || isFhirNorth || isVotCoffee} />
    </>
  );
}

function isLightColor(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}
