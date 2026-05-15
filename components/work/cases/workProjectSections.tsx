import Image from "next/image";
import { MediaStackSection } from "@/components/work/MediaStackSection";
import { CashpayKeyFeatures } from "@/components/work/CashpayKeyFeatures";
import { CashpayDataCollectionAndSurvey } from "@/components/work/CashpayDataCollectionAndSurvey";
import { CashpayUserPersonasSection } from "@/components/work/CashpayUserPersonasSection";
import { CashpayUsabilityFeedbackSection } from "@/components/work/CashpayUsabilityFeedbackSection";
import { CashpayFeedbackFixesSection } from "@/components/work/CashpayFeedbackFixesSection";
import { cashpayInsetX } from "@/lib/cashpaySpacing";
import { cashpayIcon } from "@/lib/cashpayIcons";
import type { ProjectMeta } from "@/lib/projects";

const CASHPAY_PROCESS_PREVIEW =
  "/media/image/cashpay%20image/Section%20-%20Process%20Bento%20Grid.png" as const;

function isLightColor(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

export function WorkProjectSections({ project }: { project: ProjectMeta }) {
  const slug = project.slug;
  const isCashpay = slug === "cashpay";
  const isTrackguard = slug === "trackguard";

  if (!project.sections?.length) return null;

  return (
    <>
      {project.sections.map((section, i) => {
        const isSocialExperience =
          (slug === "social-robots" || slug === "applied-research-101" || slug === "learning-2gether") &&
          section.type === "text" &&
          section.heading === "Experience & Impact";

        const isAppliedResearchMediaStack =
          slug === "applied-research-101" && section.type === "media-stack";

        const isAr101FullBleedMediaStack =
          slug === "applied-research-101" &&
          section.type === "media-stack" &&
          Boolean(section.mediaStack?.length);

        const cashpayVerticalPadding = (() => {
          if (!isCashpay) return "";
          if (i === 0) return "pt-0 sm:pt-1 pb-12 sm:pb-16";
          if (section.heading === "Design Process") return "pt-12 sm:pt-16 pb-0 sm:pb-0";
          if (section.heading === "User Personas & Pain Points") return "pt-6 sm:pt-8 pb-0 sm:pb-0";
          if (section.heading === "Usability Test & Feedback") return "pt-4 sm:pt-6 pb-12 sm:pb-16";
          return "py-12 sm:py-16";
        })();

        const sectionSpacingClass = isAppliedResearchMediaStack
          ? `py-10 sm:py-14 px-0 ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`
          : isSocialExperience
          ? `py-10 sm:py-12 px-4 sm:px-5 ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`
          : isCashpay
            ? `${cashpayVerticalPadding} ${cashpayInsetX} ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`
            : i === 0
              ? `${isTrackguard ? "pt-10 sm:pt-12" : "pt-4 sm:pt-6"} pb-20 sm:pb-24 px-6 ${
                  i % 2 === 0 ? (isTrackguard ? "border-b" : "border-t border-b") : ""
                } transition-colors`
              : `py-24 px-6 ${i % 2 === 0 ? "border-t border-b" : ""} transition-colors`;

        const textBlockWrapClass = isSocialExperience ? "mx-auto w-full max-w-[1040px]" : "max-w-[980px] mx-auto";
        const readableTextClass = isSocialExperience
          ? "w-full text-[14px] leading-[1.62] sm:text-[15px] sm:leading-[1.65] lg:text-[16px]"
          : "text-[20px] leading-[32.5px]";
        const readableParagraphClass = isSocialExperience
          ? "w-full text-[14px] leading-[1.62] sm:text-[15px] sm:leading-[1.65] lg:text-[16px]"
          : "text-[20px] leading-[1.65]";

        if (isCashpay && section.type === "image" && section.heading === "Competitive Analysis") {
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
            {isAr101FullBleedMediaStack ? (
              <MediaStackSection
                fullBleed
                heading={section.heading}
                subheading={section.subheading}
                headingLink={section.headingLink}
                items={section.mediaStack!}
              />
            ) : (
            <div className="mx-auto max-w-[1080px]">
              {section.type === "media-stack" && section.mediaStack?.length && !isAr101FullBleedMediaStack ? (
                <MediaStackSection
                  heading={section.heading}
                  subheading={section.subheading}
                  headingLink={section.headingLink}
                  items={section.mediaStack}
                />
              ) : null}

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
                  ) : (
                    section.body && (
                      <p className={readableParagraphClass} style={{ color: "var(--text-secondary)" }}>
                        {section.body}
                      </p>
                    )
                  )}
                </div>
              )}

              {section.type === "image" && (
                <div>
                  {section.heading &&
                    !(isCashpay && section.heading === "Problem Statement") &&
                    !(isCashpay && section.heading === "User Personas & Pain Points") &&
                    !(isCashpay && section.heading === "Usability Test & Feedback") &&
                    !(isCashpay && section.heading === "Feedback and Fixes for Interface Improvements") && (
                      <h2
                        className="mb-8 text-[36px] font-semibold tracking-[-0.025em]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {section.heading}
                      </h2>
                    )}
                  {isCashpay && section.heading === "Problem Statement" ? (
                    <div className="mx-auto w-full max-w-[980px]">
                      <div className="relative left-1/2 right-1/2 mb-10 w-screen -translate-x-1/2 overflow-hidden border-y border-[var(--border-default)] bg-[var(--bg-surface)]">
                        <Image
                          src={CASHPAY_PROCESS_PREVIEW}
                          alt="CashPay process preview"
                          width={1920}
                          height={864}
                          className="h-auto w-full object-cover object-center lg:object-[center_42%]"
                        />
                      </div>
                      <div className="pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
                        <h3
                          className="text-[36px] font-semibold leading-[40px] tracking-[-0.9px]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          The Challenge
                        </h3>
                        <p className="mt-8 text-[20px] leading-[32.5px] text-[var(--text-secondary)] sm:mt-10">
                          Design a financial app for{" "}
                          <span className="font-medium text-[var(--text-primary)]">users aged 18–50</span> that makes
                          managing{" "}
                          <span className="font-medium text-[var(--text-primary)]">money simple, intuitive</span>, and{" "}
                          <span className="font-medium text-[var(--text-primary)]">stress-free</span>. The goal was to
                          help users{" "}
                          <span className="font-medium text-[var(--text-primary)]">track multiple cards</span>,
                          understand their{" "}
                          <span className="font-medium text-[var(--text-primary)]">spending patterns</span>, and{" "}
                          <span className="font-medium text-[var(--text-primary)]">stay motivated</span> to achieve their
                          financial goals without feeling overwhelmed by complex data or confusing interfaces.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:grid-cols-2 md:gap-12">
                          <article
                            className="rounded-[40px] border p-11 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)] sm:p-12"
                            style={{ background: "var(--bg-footer)", borderColor: "var(--border-default)" }}
                          >
                            <div className="mb-4 flex items-center gap-3">
                              <Image src={cashpayIcon.challengeFriction} alt="" width={19} height={19} />
                              <h4 className="text-[18px] font-semibold leading-7 text-[var(--text-primary)]">
                                Friction Points
                              </h4>
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
                              <Image src={cashpayIcon.challengeObjective} alt="" width={19} height={19} />
                              <h4 className="text-[18px] font-semibold leading-7 text-[var(--text-primary)]">
                                Strategic Objective
                              </h4>
                            </div>
                            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22.75px] text-[var(--text-secondary)]">
                              <li>Simplify tracking across multiple cards to reduce confusion by 50%.</li>
                              <li>
                                Deliver actionable weekly, monthly, and yearly insights to improve budgeting awareness by
                                45%.
                              </li>
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
                              className="text-[33px] font-bold leading-[60px] tracking-[-1px]"
                              style={{ color: "var(--cashpay-process-tile-number)" }}
                            >
                              {step}
                            </p>
                            <p
                              className="text-[44px] font-semibold leading-[60px] tracking-[-1px]"
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
                      className="relative w-full overflow-hidden rounded-2xl border"
                      style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
                    >
                      <Image
                        src={section.image}
                        alt={section.heading || "Project image"}
                        width={950}
                        height={600}
                        className={`h-auto w-full ${slug === "cashpay" ? "object-contain" : "object-cover"}`}
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

              {section.type === "metrics" && section.metrics && (
                <div>
                  {section.heading && (
                    <h2
                      className="mb-10 text-[36px] font-semibold tracking-[-0.025em]"
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
                        <p className="max-w-[180px] text-[15px] leading-[1.4]" style={{ color: "var(--text-secondary)" }}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "color-palette" && section.colors && (
                <div>
                  {section.heading && (
                    <h2
                      className="mb-10 text-[36px] font-semibold tracking-[-0.025em]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div className="flex flex-wrap gap-0 overflow-hidden rounded-2xl">
                    {section.colors.map((c) => (
                      <div
                        key={c.hex}
                        className="flex h-48 min-w-[100px] flex-1 origin-bottom items-end p-5 transition-transform hover:scale-y-105"
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

              {section.type === "images-grid" && section.images && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {section.images.map((img, j) => (
                    <div key={j} className="relative aspect-square overflow-hidden rounded-xl">
                      <Image src={img} alt={`Project image ${j + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            )}
          </section>
        );
      })}
    </>
  );
}
