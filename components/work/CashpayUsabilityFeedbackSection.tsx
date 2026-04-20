import Image from "next/image";
import { cashpayBlockGap, cashpayBlockGapL, cashpayInsetX, cashpayTitleToBody } from "@/lib/cashpaySpacing";

/** 183:5056 — left column */
const imgHeaderCheck = "https://www.figma.com/api/mcp/asset/dc8b7ba7-ec6f-47c0-9ab5-034e0a4b84c1";
const imgPillEnvelope = "https://www.figma.com/api/mcp/asset/9f8cbacd-e454-4a91-a0d0-9b7574e31a93";
const imgCardCheck = "https://www.figma.com/api/mcp/asset/1d69d1d4-304f-4b95-91e2-234c912d4920";

/** Narrow stack — visually aligned with positive-feedback card scale (~content width) */
const STACK_MAX = "max-w-[340px]";

/** Stacked email cards */
const EMAIL_CARDS = [
  {
    rotateLg: "lg:rotate-[4deg]",
    positionLg: "lg:absolute lg:inset-x-0 lg:top-0 lg:z-40 lg:origin-top",
    initialBg: "bg-[var(--sample-avatar-ink)]",
    initialsColor: "text-[var(--cashpay-on-accent-badge)]",
    initials: "KL",
    name: "Kyle Li",
    meta: "to me • 7:17 PM",
    star: "https://www.figma.com/api/mcp/asset/c62a46be-6410-4240-810d-9a9892ce6c45",
    paperclip: "https://www.figma.com/api/mcp/asset/5accdd0a-34e9-4d0e-ab61-a83555db5de1",
    greeting: "Hi Nhi,",
    paragraphs: [
      "Thanks for the prototype — flows felt smooth and the hierarchy was easy to follow.",
      "Secondary actions could be a bit clearer; happy to share more notes if useful.",
    ],
    closing: "Best regards,",
    signature: "Kyle Li",
    titleLine: "Product Design · State University",
  },
  {
    rotateLg: "lg:-rotate-[5deg]",
    positionLg: "lg:absolute lg:inset-x-0 lg:top-[168px] lg:z-30 lg:origin-top",
    initialBg: "bg-[var(--link-bright)]",
    initialsColor: "text-[var(--cashpay-on-accent-badge)]",
    initials: "KC",
    name: "Kyven Chan",
    meta: "to me • 3:34 PM",
    star: "https://www.figma.com/api/mcp/asset/4c496efb-5d4a-414b-83c3-c423f0b774eb",
    paperclip: "https://www.figma.com/api/mcp/asset/49852c83-f831-454d-9c20-298bb0c95308",
    greeting: "Hi Nhi,",
    paragraphs: [
      "Finished the tasks today — navigation felt straightforward and cohesive.",
      "Empty states could spell out the next step a bit more for first-time users.",
    ],
    closing: "Thanks,",
    signature: "Kyven Chan",
    titleLine: "Finance · Participant",
  },
  {
    rotateLg: "lg:rotate-[3deg]",
    positionLg: "lg:absolute lg:inset-x-0 lg:top-[336px] lg:z-20 lg:origin-top",
    initialBg: "bg-[var(--sample-avatar-red)]",
    initialsColor: "text-[var(--cashpay-on-accent-badge)]",
    initials: "AL",
    name: "Alan Le",
    meta: "to me • 7:17 PM",
    star: "https://www.figma.com/api/mcp/asset/e032c69d-cff6-4006-a9f4-c9931d1f8b56",
    paperclip: "https://www.figma.com/api/mcp/asset/01d2ddb8-6ec8-4eff-8905-3559165254ed",
    greeting: "Hi Nhi,",
    paragraphs: [
      "Liked how cash flow summarizes weekly and monthly spend — matches how I budget.",
      "Jumping between cards felt easy without losing context. Nice transitions.",
    ],
    closing: "Best,",
    signature: "Alan Le",
    titleLine: "Participant",
  },
  {
    rotateLg: "lg:-rotate-[4deg]",
    positionLg: "lg:absolute lg:inset-x-0 lg:top-[504px] lg:z-10 lg:origin-top",
    initialBg: "bg-[var(--sample-avatar-yellow)]",
    initialsColor: "text-[var(--on-bright-avatar)]",
    initials: "HV",
    name: "Han Vo",
    meta: "to me • 3:34 PM",
    star: "https://www.figma.com/api/mcp/asset/a0717f60-e90f-4bd6-b0e9-738b6026b01a",
    paperclip: "https://www.figma.com/api/mcp/asset/b34d9469-2dc1-48e5-aa58-d10493357323",
    greeting: "Hi Nhi,",
    paragraphs: [
      "As a newer user, tasks were quick to pick up; labels and icons felt consistent.",
      "Notes from the session are attached — ping me if anything needs clarification.",
    ],
    closing: "Regards,",
    signature: "Han Vo",
    titleLine: "Participant",
  },
] as const;

const QUOTES = [
  `"Smooth operation"`,
  `"It's good design"`,
  `"The app looks great, i really like the design and the navigation of the app prototype is straight forward."`,
  `"As a new user of this app, most of the app was quick and easy to understand"`,
  `"Navigating and using the app really helped me understand"`,
  `"The cash flow pages are well designed and really address the common use cases of a financial management app"`,
];

const innerBodyClass =
  "text-[9px] sm:text-[10px] leading-[1.45] tracking-[0.01em] text-[var(--text-secondary)]";

function FeedbackEmailCard({
  initialBg,
  initialsColor,
  initials,
  name,
  meta,
  starSrc,
  paperclipSrc,
  greeting,
  paragraphs,
  closing,
  signature,
  titleLine,
}: {
  initialBg: string;
  initialsColor: string;
  initials: string;
  name: string;
  meta: string;
  starSrc: string;
  paperclipSrc: string;
  greeting: string;
  paragraphs: readonly string[];
  closing: string;
  signature: string;
  titleLine: string;
}) {
  return (
    <div
      className={`relative w-full ${STACK_MAX} rounded-[18px] border border-solid p-3.5 sm:p-4`}
      style={{
        borderColor: "var(--card-border)",
        background: "var(--bg-elevated)",
        boxShadow: "var(--email-card-shadow)",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <div
            className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold leading-none ${initialBg} ${initialsColor}`}
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold leading-tight text-[var(--text-primary)]">{name}</p>
            <p className="text-[9px] leading-3 text-[var(--text-secondary)]">{meta}</p>
          </div>
        </div>
        <div className="relative h-3.5 w-[15px] shrink-0 opacity-70">
          <Image src={starSrc} alt="" fill className="object-contain"sizes="20px" />
        </div>
      </div>

      <div
        className="mt-2.5 rounded-lg border border-solid p-2.5"
        style={{
          borderColor: "var(--border-subtle)",
          background: "var(--bg-footer)",
        }}
      >
        <p className={`${innerBodyClass} font-medium text-[var(--text-primary)]`}>{greeting}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className={`${innerBodyClass} mt-3`}>
            {p}
          </p>
        ))}
        <p className={`${innerBodyClass} mt-4`}>{closing}</p>
        <p className={`${innerBodyClass} mt-0.5 font-semibold text-[var(--text-primary)]`}>{signature}</p>
        <p className={`${innerBodyClass} mt-0.5 text-[8px] text-[var(--text-secondary)] sm:text-[9px]`}>{titleLine}</p>
        <div className="mt-2 flex justify-start">
          <button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full border text-[10px] leading-none text-[var(--text-muted)]"
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-elevated)",
            }}
            aria-label="More"
          >
            …
          </button>
        </div>
      </div>

      <div
        className="mt-2.5 flex items-center gap-1.5 border-t border-solid pt-2"
        style={{ borderColor: "var(--border-default)" }}
      >
        <div className="relative h-2.5 w-3 shrink-0">
          <Image src={paperclipSrc} alt="" fill className="object-contain"sizes="16px" />
        </div>
        <p className="text-[8px] font-medium uppercase tracking-[0.06em] text-[var(--text-secondary)] sm:text-[9px]">
          USABILITY_FEEDBACK.pdf
        </p>
      </div>
    </div>
  );
}

export function CashpayUsabilityFeedbackSection() {
  return (
    <div className={`mx-auto flex w-full max-w-[1080px] flex-col ${cashpayBlockGapL} ${cashpayInsetX}`}>
      <div className={`flex flex-col ${cashpayBlockGap}`}>
        <h2 className="text-[36px] font-semibold tracking-[-0.9px] leading-[40px] text-[var(--text-primary)]">
          Usability test and feedback
        </h2>
        <p className="max-w-[961px] text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
          I created 5 tasks for users to try using the app. I sent these tasks to some users via email and received
          feedback from them.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
        <div className="flex min-w-0 flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-[37px] shrink-0">
              <Image src={imgHeaderCheck} alt="" fill className="object-contain"sizes="40px" />
            </div>
            <h3 className="text-[20px] font-semibold leading-7 text-[var(--text-primary)]">What Users Loved</h3>
          </div>
          <p className="text-[14px] font-normal uppercase leading-5 tracking-[1.4px] text-[var(--text-secondary)]">
            Positive feedback
          </p>
          <div
            className="relative rounded-[32px] border border-solid p-10 sm:p-11"
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-elevated)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 rounded-xl p-2" style={{ background: "var(--pill-link-bg)" }}>
                <div className="relative h-[15px] w-[19px] shrink-0">
                  <Image src={imgPillEnvelope} alt="" fill className="object-contain"sizes="20px" />
                </div>
                <span className="text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.45px] text-[var(--link-bright)]">
                  Email Feedback
                </span>
              </div>
              <div className="relative size-[19px] shrink-0">
                <Image src={imgCardCheck} alt="" width={19} height={19} className="object-contain"/>
              </div>
            </div>
            <div className={`${cashpayTitleToBody} text-[18px] font-normal leading-7 text-[var(--text-primary)]`}>
              {QUOTES.map((line) => (
                <p key={line} className="mb-6 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`relative mx-auto min-h-[480px] w-full min-w-0 ${STACK_MAX} lg:mx-auto lg:min-h-[520px]`}
          data-cashpay-debug-email-stack
        >
          <div className="flex flex-col gap-10 lg:absolute lg:inset-0 lg:block">
            {EMAIL_CARDS.map((card) => (
              <div key={card.initials} className={`mx-auto w-full ${STACK_MAX} ${card.positionLg} ${card.rotateLg}`}>
                <FeedbackEmailCard
                  initialBg={card.initialBg}
                  initialsColor={card.initialsColor}
                  initials={card.initials}
                  name={card.name}
                  meta={card.meta}
                  starSrc={card.star}
                  paperclipSrc={card.paperclip}
                  greeting={card.greeting}
                  paragraphs={card.paragraphs}
                  closing={card.closing}
                  signature={card.signature}
                  titleLine={card.titleLine}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
