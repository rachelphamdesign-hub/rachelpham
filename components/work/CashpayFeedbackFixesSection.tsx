import Image from "next/image";
import { cashpayBlockGap, cashpayBlockGapL, cashpayInsetX } from "@/lib/cashpaySpacing";
import { cashpayIcon } from "@/lib/cashpayIcons";

/** Figma 193:7025 — design system board (paired with 193:7024 heading) */
const imgDesignProcessBoard = "/media/image/cashpay%20image/Screenshot%202024-06-20%20173954%202.png";

const OUTCOME_TAKEAWAYS = [
  "Different age groups use tech differently—design must bridge those gaps.",
  "It's essential to clearly show what makes CashPay better than other finance apps.",
  "Visual clarity is key, especially for users less familiar with digital tools.",
] as const;

const OUTCOME_NEXT_STEPS = [
  { icon: cashpayIcon.designOutcomeStep1, text: "Learn how to integrate AI to offer smart tips and personalized insights." },
  { icon: cashpayIcon.designOutcomeStep2, text: "Test with a broader age range to refine usability across generations." },
] as const;

const outcomeCardClass =
  "relative flex flex-col gap-10 rounded-[40px] border border-solid p-11 sm:p-12";

const ISSUES = [
  {
    issueLabel: "Issue 01:",
    title: "Sign-Up Location",
    oldImage: "/media/image/cashpay%20image/Background+Border+Shadow-4.png",
    newImage: "/media/image/cashpay%20image/Background+Border+Shadow-5.png",
    oldImageClassName: "object-contain object-top scale-[1.08]",
    newImageClassName: "object-contain object-top scale-[1.08]",
    quotes: [
      `"It took a few seconds to find the sign-up because I was looking near the sign-in section, which is small."`,
      `"The password box on the sign-in page should be empty, with clear white text for the email."`,
    ],
    fixes: [
      "Move the sign-up link near the sign-in link and do the same on the sign-up page.",
      "Change the password box to be empty with gray text.",
    ],
  },
  {
    issueLabel: "Issue 02:",
    title: "Viewing All Cards and Transactions",
    oldImage: "/media/image/cashpay%20image/Background+Border+Shadow-2.png",
    newImage: "/media/image/cashpay%20image/Background+Border+Shadow-3.png",
    oldImageClassName: "object-contain object-top scale-[1.07]",
    newImageClassName: "object-contain object-top scale-[1.07]",
    quotes: [
      `"Adding a new card was confusing. It was hard to figure out which section was for cards; a 'Card' title might help."`,
      `"When viewing all cards, it opens a new component which can be complicated."`,
      `"The cards page needs more privacy."`,
      `"Add transactions should be accessible from the homepage."`,
    ],
    fixes: [
      `Add a "Card" title for easier identification.`,
      "Cover the cards numbers for more privacy.",
      "Add a return button on the cards page to make it easy for users to return to the home page.",
      `Create an "Add" button on the left side of the home page to add transactions.`,
    ],
  },
  {
    issueLabel: "Issue 03:",
    title: "Yearly Cash Flow Page",
    oldImage: "/media/image/cashpay%20image/Background+Border+Shadow-1.png",
    newImage: "/media/image/cashpay%20image/Background+Border+Shadow.png",
    oldImageClassName: "object-contain object-top scale-[1.09]",
    newImageClassName: "object-contain object-top scale-[1.09]",
    quotes: [
      `"The yearly cash flow page is hard to read "`,
      `"The yearly cash flow page should showcase only the current year with a filter to change the year."`,
      `"Include yearly totals for cash in and cash out, and add a legend."`,
    ],
    fixes: [
      "Change the buttons for daily, monthly, and yearly to make them easier for customers to click on.",
      "Add a chart for the year to make it easier to track cash in and cash out,",
      "Allow for year-to-year comparisons.",
    ],
  },
] as const;

function MockFrame({
  variant,
  src,
  alt,
  imageClassName,
}: {
  variant: "old" | "new";
  src: string;
  alt: string;
  imageClassName?: string;
}) {
  const isOld = variant === "old";
  return (
    <div
      className="relative h-[286px] w-full overflow-hidden rounded-[40px] border border-solid"
      style={{
        borderColor: "var(--border-default)",
        background: isOld ? "transparent" : "var(--bg-elevated)",
        boxShadow: isOld ? "var(--shadow-sm)" : "var(--shadow-card-soft)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName ?? "object-contain object-center scale-[1.02]"}
        sizes="(min-width: 1024px) 480px, 100vw"
      />
      <div
        className="absolute left-4 top-4 rounded-full border border-solid px-[13px] py-[5px]"
        style={{
          borderColor: isOld ? "var(--mock-old-border)" : "var(--mock-new-border)",
          background: isOld ? "var(--mock-old-bg)" : "var(--mock-new-bg)",
        }}
      >
        <span
          className="text-[10px] font-normal uppercase leading-[15px] tracking-[1px]"
          style={{ color: isOld ? "var(--tag-risk-text)" : "var(--tag-success-text)" }}
        >
          {isOld ? "Old Design" : "New Design"}
        </span>
      </div>
    </div>
  );
}

export function CashpayFeedbackFixesSection() {
  return (
    <div className={`mx-auto flex w-full max-w-[1080px] flex-col ${cashpayBlockGapL} ${cashpayInsetX}`}>
      <div className="flex w-full flex-col items-center">
        <h2 className="max-w-[663px] text-center text-[30px] font-semibold leading-9 tracking-[-0.6px] text-[var(--text-primary)]">
          Feedback and Fixes for Interface Improvements
        </h2>
      </div>

      <div className={`flex flex-col ${cashpayBlockGap}`}>
        <div className="flex items-center gap-3">
          <div className="relative size-[33px] shrink-0">
            <Image src={cashpayIcon.criticalFriction} alt="" fill className="object-contain" sizes="33px" />
          </div>
          <h3 className="text-[20px] font-normal leading-7 text-[var(--text-primary)]">Critical Friction Points</h3>
        </div>
        <p className="text-[14px] font-normal uppercase leading-5 tracking-[1.4px] text-[var(--text-secondary)] opacity-80">
          Areas for Improvement
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {ISSUES.map((issue) => (
          <section key={issue.title} className={`flex flex-col ${cashpayBlockGapL}`}>
            <div className="flex w-full flex-col gap-2 border-b border-solid border-[var(--border-default)] pb-5">
              <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-[var(--link-bright)]">
                {issue.issueLabel}
              </p>
              <h4 className="text-[24px] font-bold leading-8 text-[var(--text-primary)]">{issue.title}</h4>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-10">
                <MockFrame
                  variant="old"
                  src={issue.oldImage}
                  alt={`${issue.title} — previous design`}
                  imageClassName={issue.oldImageClassName}
                />
                <div className="flex flex-col gap-4 text-[12px] italic leading-[19.2px] text-[var(--text-secondary)]">
                  {issue.quotes.map((q, i) => (
                    <p key={i}>{q}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <MockFrame
                  variant="new"
                  src={issue.newImage}
                  alt={`${issue.title} — revised design`}
                  imageClassName={issue.newImageClassName}
                />
                <ul className="list-disc space-y-3 pl-[18px] text-[12px] leading-[19.2px] text-[var(--text-primary)] marker:text-[var(--text-primary)]">
                  {issue.fixes.map((item) => (
                    <li key={item} className="ps-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Figma 193:7024 + 193:7025 — directly under Feedback and Fixes content */}
      <div className={`flex w-full flex-col ${cashpayBlockGapL}`}>
        <h3 className="w-full text-[36px] font-semibold leading-10 tracking-[-0.9px] text-[var(--text-primary)]">
          Design process
        </h3>
        <div className="relative w-full max-w-[940px] overflow-hidden rounded-[40px] sm:rounded-[56px] lg:rounded-[73px]">
          <div className="relative aspect-[940/667] w-full">
            <Image
              src={imgDesignProcessBoard}
              alt="CashPay design system — colors, typography, icons, and UI components"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 940px, 100vw"
            />
          </div>
        </div>
      </div>

      {/* Figma 50:7948 — under Design process */}
      <div className="w-full border-t border-solid border-[var(--border-subtle)] pt-12 sm:pt-16">
        <h3 className="mb-10 w-full text-[36px] font-semibold leading-10 tracking-[-0.9px] text-[var(--text-primary)]">
          Design Outcome
        </h3>

        <div className="grid max-w-[980px] grid-cols-1 gap-10 lg:grid-cols-2">
          <div
            className={outcomeCardClass}
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-elevated)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-4 w-[22px] shrink-0">
                <Image src={cashpayIcon.designOutcomeTakeaways} alt="" fill className="object-contain" sizes="24px" />
              </div>
              <p className="text-[20px] font-normal leading-7 text-[var(--text-primary)]">My Key Takeaways</p>
            </div>
            <ul className="flex flex-col gap-8">
              {OUTCOME_TAKEAWAYS.map((line, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-7 shrink-0 text-[16px] font-normal leading-6 text-[var(--link-bright)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-[14px] font-normal leading-[22.75px] text-[var(--text-primary)]">{line}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={outcomeCardClass}
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-elevated)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative size-[19px] shrink-0">
                <Image src={cashpayIcon.designOutcomeNextSteps} alt="" fill className="object-contain" sizes="24px" />
              </div>
              <p className="text-[20px] font-normal leading-7 text-[var(--text-primary)]">Next Steps</p>
            </div>
            <ul className="flex flex-col gap-8">
              {OUTCOME_NEXT_STEPS.map((row) => (
                <li key={row.text} className="flex gap-4">
                  <div className="relative mt-0.5 size-[19px] shrink-0">
                    <Image src={row.icon} alt="" fill className="object-contain" sizes="24px" />
                  </div>
                  <p className="min-w-0 text-[14px] font-normal leading-[22.75px] text-[var(--text-primary)]">{row.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
