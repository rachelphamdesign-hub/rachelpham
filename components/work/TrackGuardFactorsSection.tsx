import Image from "next/image";

/** Figma 229:13487 — primary card photo */
const imgPrimary = "https://www.figma.com/api/mcp/asset/3219df1a-3eb5-427d-af1f-5047d95a8c0a";
/** Supporting factor icons (TL → BR) */
const imgFactorEmotional = "https://www.figma.com/api/mcp/asset/64462d6e-c175-4baa-9e97-f42d86a70f3d";
const imgFactorLogistical = "https://www.figma.com/api/mcp/asset/733b4e58-879e-4d1b-986f-bc0336a06666";
const imgFactorInsurance = "https://www.figma.com/api/mcp/asset/88960415-5ad1-4b6e-b817-7de33388b142";
const imgFactorCommunity = "https://www.figma.com/api/mcp/asset/44f27f42-7ceb-4d73-8e31-0dc65334f7af";

const SUPPORTING = [
  {
    icon: imgFactorEmotional,
    iconW: 18,
    iconH: 19,
    title: "Emotional Distress",
    body: "Causes stress and disrupts daily life and mobility, as cars symbolize freedom and convenience.",
  },
  {
    icon: imgFactorLogistical,
    iconW: 19,
    iconH: 16,
    title: "Logistical Disruption",
    body: "Makes commuting and errands harder, adding delays and extra transportation costs.",
  },
  {
    icon: imgFactorCommunity,
    iconW: 15,
    iconH: 19,
    title: "Community Security",
    body: "Makes neighborhoods feel unsafe and can fuel more criminal activity, affecting community trust.",
  },
  {
    icon: imgFactorInsurance,
    iconW: 19,
    iconH: 11,
    title: "Insurance Volatility",
    body: "Persistent local car theft leads to higher insurance rates for everyone in the area.",
  },
] as const;

/**
 * Figma 229:13487 — Factors contributing to the issue (primary + 2×2 grid).
 */
export function TrackGuardFactorsSection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-24"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-16 md:gap-24">
        <div className="w-full max-w-[896px]">
          <h2 className="text-left text-[40px] font-semibold leading-[1.05] tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
            Factors contributing
            <br />
            to the issue
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {/* Primary highlight */}
          <div
            className="flex w-full flex-col overflow-hidden rounded-[40px] border border-solid p-8 sm:p-12 md:p-[65px] lg:flex-row lg:items-center lg:gap-12"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border-subtle)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(254,226,226,0.5)] px-[17px] py-[7px] dark:border-red-500/25"
                style={{ background: "var(--tag-risk-bg)" }}
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#ef4444]" aria-hidden />
                <span
                  className="text-[11px] font-bold uppercase tracking-[1.1px]"
                  style={{ color: "var(--tag-risk-text)" }}
                >
                  Primary Severity
                </span>
              </div>
              <h3 className="text-[28px] font-normal leading-[36px] tracking-[-0.9px] text-[var(--text-primary)] sm:text-[36px] sm:leading-[40px]">
                Systemic Financial Loss
              </h3>
              <p className="text-[16px] font-normal leading-[29.25px] text-[var(--text-secondary)] sm:text-[18px]">
                The economic impact of car theft goes far beyond the vehicle&apos;s market value. Unrecovered assets,
                insurance deductibles, and rising premiums create long-term costs for both owners and providers
              </p>
              <div className="flex flex-wrap items-center gap-8 pt-2 sm:gap-8">
                <div>
                  <p className="text-[24px] font-normal leading-8 text-[var(--text-primary)]">80%</p>
                  <p className="text-[11px] font-normal uppercase tracking-[0.55px] text-[var(--text-secondary)]">
                    Recovery Gap
                  </p>
                </div>
                <div className="h-10 w-px shrink-0 bg-[rgba(210,210,215,0.4)] dark:bg-white/15" aria-hidden />
                <div>
                  <p className="text-[24px] font-normal leading-8 text-[var(--text-primary)]">↑12%</p>
                  <p className="text-[11px] font-normal uppercase tracking-[0.55px] text-[var(--text-secondary)]">
                    Premiums Increased
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto mt-8 h-[240px] w-full max-w-[320px] shrink-0 overflow-hidden rounded-[40px] bg-[#fbfbfd] dark:bg-[var(--bg-elevated)] sm:h-[280px] lg:mx-0 lg:mt-0 lg:h-[311px] lg:w-[320px]">
              <Image
                src={imgPrimary}
                alt=""
                fill
                className="object-cover object-center"
                sizes="320px"
                style={{ objectPosition: "45% center" }}
              />
            </div>
          </div>

          {/* 2×2 supporting factors */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SUPPORTING.map((item) => (
              <article
                key={item.title}
                className="relative flex flex-col gap-3 rounded-[32px] border border-solid p-8 sm:p-10 md:p-[41px]"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-card-soft)",
                }}
              >
                <div className="flex size-12 items-center justify-center rounded-[24px] bg-[rgba(29,29,31,0.05)] dark:bg-white/10">
                  <div className="relative shrink-0" style={{ width: item.iconW, height: item.iconH }}>
                    <Image src={item.icon} alt="" fill className="object-contain"/>
                  </div>
                </div>
                <h4 className="pt-2 text-[18px] font-normal leading-7 text-[var(--text-primary)] sm:text-[20px] sm:leading-[28px]">
                  {item.title}
                </h4>
                <p className="text-[14px] font-normal leading-[24.38px] text-[var(--text-secondary)] sm:text-[15px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
