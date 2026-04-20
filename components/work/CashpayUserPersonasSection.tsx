import Image from "next/image";
import { CashpayPostPersonasFigmaBlocks } from "@/components/work/CashpayPostPersonasFigmaBlocks";
import { cashpayBlockGap, cashpayBlockGapL, cashpayCardPad, cashpayInsetX } from "@/lib/cashpaySpacing";

const imgEmily = "https://www.figma.com/api/mcp/asset/507d58af-bfaa-4c09-b60e-74a16be4fe9d";
const imgDavid = "https://www.figma.com/api/mcp/asset/c13a41b6-96b7-4554-b8e4-4520968a864a";

function PersonaCard({
  avatarSrc,
  avatarClassName,
  name,
  roleLine,
  background,
  goals,
  painPoints,
  quotes,
}: {
  avatarSrc: string;
  avatarClassName?: string;
  name: string;
  roleLine: string;
  background: string;
  goals: string[];
  painPoints: string[];
  quotes: [string, string];
}) {
  return (
    <article
      className={`relative flex flex-col rounded-[40px] border ${cashpayCardPad}`}
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border-default)",
        boxShadow: "var(--shadow-card-soft)",
      }}
    >
      <div className="flex items-center gap-6 pb-10">
        <div
          className="relative size-20 shrink-0 overflow-hidden rounded-full border-2"
          style={{
            borderColor: "var(--bg-surface)",
            boxShadow: "0px 0px 0px 1px var(--border-default), var(--shadow-sm)",
          }}
        >
          <Image
            src={avatarSrc}
            alt=""
            width={160}
            height={160}
            className={avatarClassName ?? "h-full w-full object-cover"}
          />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-[20px] font-semibold leading-7 text-[var(--text-primary)]">{name}</h3>
          <p className="text-[10px] font-bold uppercase leading-4 tracking-[1px] text-[var(--link-bright)]">{roleLine}</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-normal uppercase leading-[16.5px] tracking-[1.1px] text-[var(--text-secondary)]">
            Background
          </p>
          <p className="text-[14px] leading-[22.75px] text-[var(--text-body-muted)]">{background}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-normal uppercase leading-[16.5px] tracking-[1.1px] text-[var(--text-secondary)]">
              Goals
            </p>
            <ul className="flex flex-col gap-3">
              {goals.map((g) => (
                <li key={g} className="flex gap-2 text-[13px] leading-[19.5px] text-[var(--text-primary)]">
                  <span className="shrink-0 text-[16px] leading-6 text-[var(--link-bright)]">•</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-normal uppercase leading-[16.5px] tracking-[1.1px] text-[var(--text-secondary)]">
              Pain Points
            </p>
            <ul className="flex flex-col gap-3">
              {painPoints.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] leading-[17px] text-[var(--text-primary)]">
                  <span className="shrink-0 text-[16px] leading-6 text-[var(--tag-risk-text)]">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border-default)] pt-8">
          <p className="text-[11px] font-normal uppercase leading-[16.5px] tracking-[1.1px] text-[var(--text-secondary)]">
            Needs & Motivations
          </p>
          <div className="flex flex-col gap-4 text-[14px] italic leading-5 text-[var(--text-primary)]">
            <p>{quotes[0]}</p>
            <p>{quotes[1]}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

const frictionCardClass =
  "flex flex-col items-center justify-between rounded-[24px] border p-6 shadow-[var(--shadow-sm)]";

export function CashpayUserPersonasSection() {
  return (
    <div
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 pb-2 pt-10 text-[var(--text-primary)] sm:pt-12 sm:pb-3 lg:pt-14 lg:pb-3"
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto flex w-full max-w-[980px] flex-col ${cashpayBlockGapL} ${cashpayInsetX}`}>
        <h2 className="text-[36px] font-semibold tracking-[-0.9px] leading-[40px] text-[var(--text-primary)]">
          User Personas & Pain Points
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <PersonaCard
            avatarSrc={imgEmily}
            name="Emily Parker"
            roleLine="College Student /  Hamilton, On"
            background="Emily, 20, a sophomore studying journalism, balances part-time work and some parental support while living in a shared apartment and learning to manage her finances independently."
            goals={["Graduate debt-free", "Save for a summer internship abroad.", "Build an emergency fund"]}
            painPoints={[
              "Balancing work and studies",
              "Budgeting with a limited income",
              "Understanding student loans.",
            ]}
            quotes={[
              "“I need simple, clear tools to manage my money, track my budgets, and savings.”",
              "“I want financial independence, practical money skills, and freedom to explore career and travel.”",
            ]}
          />
          <PersonaCard
            avatarSrc={imgDavid}
            avatarClassName="absolute left-0 top-[0.2%] h-[150%] w-full object-cover"
            name="David Lee"
            roleLine="Software Engineer /  Toronto, On"
            background="David, 30, is a software engineer at a tech startup who lives downtown, enjoys a busy social life, and earns a good salary but struggles to balance spending and savings with his financial goals."
            goals={[
              "Save for a house down payment",
              "Build an emergency fund",
              "Invest in stocks and retirement funds",
            ]}
            painPoints={[
              "Managing fluctuating expenses",
              "Balancing spending and savings",
              "Tracking multiple accounts and investments",
            ]}
            quotes={[
              "“I want a clear overview of my finances, with automated savings and smart budgeting.”",
              "“I’m working toward financial security, owning a home, and growing my wealth.”",
            ]}
          />
        </div>

        <div className={`flex max-w-[896px] flex-col ${cashpayBlockGap} pt-8`}>
          <h3 className="text-center text-[16px] font-semibold leading-6 text-[var(--text-primary)]">
            User Journey Friction Points
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-8">
            <div
              className={frictionCardClass}
              style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
            >
              <p className="pb-4 text-center text-[14px] leading-5 text-[var(--text-primary)]">Account fragmentation</p>
              <span
                className="rounded-full px-3 py-1 text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.9px]"
                style={{ background: "var(--tag-risk-bg)", color: "var(--tag-risk-text)" }}
              >
                High friction
              </span>
            </div>
            <div
              className={frictionCardClass}
              style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
            >
              <p className="pb-4 text-center text-[14px] leading-5 text-[var(--text-primary)]">Insight clarity</p>
              <span
                className="rounded-full px-3 py-1 text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.9px]"
                style={{ background: "var(--tag-caution-bg)", color: "var(--tag-caution-text)" }}
              >
                Medium friction
              </span>
            </div>
            <div
              className={frictionCardClass}
              style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
            >
              <p className="pb-4 text-center text-[14px] leading-5 text-[var(--text-primary)]">Expense tracking</p>
              <span
                className="rounded-full px-3 py-1 text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.9px]"
                style={{ background: "var(--tag-risk-bg)", color: "var(--tag-risk-text)" }}
              >
                High friction
              </span>
            </div>
          </div>
        </div>

        <CashpayPostPersonasFigmaBlocks />
      </div>
    </div>
  );
}
