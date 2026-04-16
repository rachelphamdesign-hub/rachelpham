import Image from "next/image";
import { cashpayBlockGap, cashpayBlockGapL, cashpayCardPad, cashpayInsetX } from "@/lib/cashpaySpacing";

const imgFinancialAnxietyChart =
  "https://www.figma.com/api/mcp/asset/bee1d544-e08e-4104-a765-5471827d243e";
const imgWishTheyKnewMore = "https://www.figma.com/api/mcp/asset/c98042b9-8b66-414f-a426-daa26fb31ab6";
const imgSurveyResponses = "https://www.figma.com/api/mcp/asset/f3c40f12-acde-4366-bbba-b2ab2360c16d";

const cardShellClass = `relative rounded-[40px] ${cashpayCardPad}`;

export function CashpayDataCollectionAndSurvey() {
  return (
    <>
      {/* Data Collection — page-toned band, two charts side by side */}
      <div
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-12 text-[var(--text-primary)] lg:py-14"
        style={{ background: "var(--bg-page)" }}
      >
        <div className={`mx-auto flex w-full max-w-[1080px] flex-col ${cashpayBlockGapL} ${cashpayInsetX}`}>
          <h2 className="text-[36px] font-semibold tracking-[-0.6px] text-[var(--text-primary)]">Data Collection</h2>
          <p className="max-w-[980px] text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
            Firstly, I gathered information on how many people struggle with managing their finances. Below are some
            statistics I collected to create this chart:
          </p>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
            <div className="flex min-h-0 w-full items-center justify-center">
              <Image
                src={imgFinancialAnxietyChart}
                alt="Financial anxiety and management statistics chart"
                width={520}
                height={420}
                className="h-auto w-full max-w-full object-contain"
                unoptimized
              />
            </div>
            <div className="flex min-h-0 w-full items-center justify-center">
              <Image
                src={imgWishTheyKnewMore}
                alt="49% wish they knew more about financial tools and resources"
                width={480}
                height={420}
                className="h-auto w-full max-w-full object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Survey Results — surface */}
      <div
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 pb-12 pt-12 text-[var(--text-primary)] sm:pb-14 lg:pb-16 lg:pt-14"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className={`mx-auto flex w-full max-w-[1080px] flex-col ${cashpayBlockGapL} ${cashpayInsetX}`}>
          <div className={`flex flex-col ${cashpayBlockGap}`}>
            <h2 className="text-[36px] font-semibold tracking-[-0.6px] text-[var(--text-primary)]">Survey Results</h2>
            <p className="text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
              I conducted a survey with 10 participants to understand their approaches to managing their finances.
            </p>

            <div className="mx-auto w-full max-w-[520px]">
              <Image
                src={imgSurveyResponses}
                alt="Survey responses summary"
                width={520}
                height={340}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
              <article
                className={cardShellClass}
                style={{
                  background: "var(--bg-footer)",
                  boxShadow: "var(--shadow-card-soft)",
                }}
              >
                <ol
                  className="list-decimal space-y-3 pl-5 text-[14px] leading-[22.75px] text-[var(--text-secondary)]"
                  start={1}
                >
                  <li className="ps-1">
                    <span className="font-semibold text-[var(--text-primary)]">Age Group:</span> Most were aged{" "}
                    <span className="text-[var(--cashpay-brand)]">18 to 25</span> and found managing money difficult.
                  </li>
                  <li className="ps-1">
                    <span className="font-semibold text-[var(--text-primary)]">Financial Priorities:</span>{" "}
                    <span className="text-[var(--cashpay-brand)]">62.5%</span> focus on savings contributions.
                  </li>
                  <li className="ps-1">
                    <span className="font-semibold text-[var(--text-primary)]">Challenges:</span>{" "}
                    <span className="text-[var(--cashpay-brand)]">75%</span> struggle with unexpected expenses.
                  </li>
                </ol>
              </article>

              <article
                className={cardShellClass}
                style={{
                  background: "var(--bg-footer)",
                  boxShadow: "var(--shadow-card-soft)",
                }}
              >
                <ol
                  className="list-decimal space-y-3 pl-5 text-[14px] leading-[22.75px] text-[var(--text-secondary)]"
                  start={5}
                >
                  <li className="ps-1">
                    <span className="font-semibold text-[var(--text-primary)]">Management Methods: </span>
                    Common practices include creating a{" "}
                    <span className="text-[var(--cashpay-brand)]">monthly budget, tracking expenses</span>, and{" "}
                    <span className="text-[var(--cashpay-brand)]">saving a fixed percentage of income.</span>
                  </li>
                  <li className="ps-1">
                    <span className="font-semibold text-[var(--text-primary)]">App Usability: </span>
                    Most want a <span className="text-[var(--cashpay-brand)]">simple money-tracking</span> app, as current
                    options are hard to use.
                  </li>
                </ol>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
