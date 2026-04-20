import Image from "next/image";
import { cashpayBlockGap, cashpayBlockGapL, cashpayCardPad } from "@/lib/cashpaySpacing";

/** 165:3428 — Competitive Analysis */
const imgIcon = "https://www.figma.com/api/mcp/asset/65b149f2-eef3-4290-b354-8ba9901e1a7f";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/801eb8ed-45d4-494e-b605-f0f3caa45da3";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/ecee3245-7ab0-492a-b902-bdd7675d90e9";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/e98a62da-da02-49fc-bdb3-461342b92b46";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/834d4ad0-96c2-4f9f-a125-dd5e09404c51";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/d554d8bb-68d0-46aa-bb8c-000c229b69e6";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/61da6ae2-f964-423a-bf2c-b756b7998495";
const imgBulletGap = "https://www.figma.com/api/mcp/asset/aba407b8-65bd-450b-929c-1e4aecf724e3";
const imgBulletCashpay = "https://www.figma.com/api/mcp/asset/72394324-7f7b-453f-96a5-52441a9c9faf";

/** 165:4404 — Information Architecture diagram */
const imgIaDiagram = "https://www.figma.com/api/mcp/asset/6a1025ee-9772-4c6b-8b28-e94476f43ed3";

function TableHeaderCell({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div
      className={`min-w-[140px] shrink-0 flex-1 border-b p-6 sm:min-w-[160px] lg:min-w-[180px] ${
        align === "center" ? "text-center" : "text-left"
      }`}
      style={{
        borderColor: "var(--border-default)",
        background: "var(--table-header-bg)",
      }}
    >
      <div className="text-[10px] font-normal uppercase leading-none tracking-[1px] text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}

function DimCell({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="min-w-[140px] shrink-0 flex-1 border-t p-6 sm:min-w-[160px] lg:min-w-[180px]"
      style={{ borderColor: "var(--border-default)" }}
    >
      <p className="text-[13px] font-normal leading-normal text-[var(--text-primary)]">{title}</p>
      <p className="mt-1 text-[11px] font-normal leading-normal text-[var(--text-secondary)]">{subtitle}</p>
    </div>
  );
}

function TextCell({ lines }: { lines: [string, string] | string }) {
  const arr = typeof lines === "string" ? [lines] : lines;
  return (
    <div
      className="flex min-w-[140px] shrink-0 flex-1 flex-col items-center justify-center border-t px-6 py-6 text-center sm:min-w-[160px] lg:min-w-[180px]"
      style={{ borderColor: "var(--border-default)" }}
    >
      {arr.map((line, i) => (
        <p key={i} className="text-[12px] leading-[16.5px] text-[var(--text-body-muted)]">
          {line}
        </p>
      ))}
    </div>
  );
}

function IconCell({ src, w, h, label }: { src: string; w: number; h: number; label: string }) {
  return (
    <div
      className="flex min-w-[140px] shrink-0 flex-1 flex-col items-center justify-center gap-[3px] border-t px-6 py-6 sm:min-w-[160px] lg:min-w-[180px]"
      style={{ borderColor: "var(--border-default)" }}
    >
      <div className="relative shrink-0" style={{ width: w, height: h }}>
        <Image src={src} alt="" fill sizes="32px" className="object-contain"/>
      </div>
      <p className="text-center text-[11px] leading-[17.6px] text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}

function ItalicCell({ text }: { text: string }) {
  return (
    <div
      className="flex min-w-[140px] shrink-0 flex-1 items-center justify-center border-t px-6 py-8 text-center sm:min-w-[160px] lg:min-w-[180px]"
      style={{ borderColor: "var(--border-default)" }}
    >
      <p className="text-[12px] italic leading-normal text-[var(--text-body-muted)]">{text}</p>
    </div>
  );
}

export function CashpayPostPersonasFigmaBlocks() {
  return (
    <div
      className={`mt-10 flex w-full flex-col border-t pt-10 lg:mt-12 lg:pt-12 ${cashpayBlockGapL}`}
      style={{ borderColor: "var(--border-subtle)" }}
    >
      {/* 165:3428 */}
      <div className={`flex flex-col ${cashpayBlockGapL}`}>
        <h2 className="text-[36px] font-semibold tracking-[-0.9px] leading-[40px] text-[var(--text-primary)]">
          Competitive Analysis
        </h2>
        <p className="max-w-[961px] text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
          I explored various financial apps to analyze their approaches and learn from their pros and cons in how they
          present their products.
        </p>

        <div
          className="overflow-x-auto rounded-[40px] border px-2 pt-6 sm:px-4"
          style={{
            borderColor: "var(--border-default)",
            background: "var(--bg-surface)",
            boxShadow: "var(--shadow-card-soft)",
          }}
        >
          <div className="min-w-[720px]">
            <div className="flex w-full">
              <TableHeaderCell>Dimension</TableHeaderCell>
              <TableHeaderCell align="center">YNAB</TableHeaderCell>
              <TableHeaderCell align="center">Goodbudget</TableHeaderCell>
              <TableHeaderCell align="center">PocketGuard</TableHeaderCell>
              <TableHeaderCell align="center">Money Manager</TableHeaderCell>
            </div>

            <div className="flex w-full">
              <DimCell title="Core Value Prop" subtitle="Strategic intent" />
              <TextCell lines={["Zero-based intentional", "budgeting."]} />
              <TextCell lines={["Envelope-based digital", "tracking."]} />
              <TextCell lines={["Automated “In My", "Pocket” calculation."]} />
              <TextCell lines={["Basic expense", "categorization."]} />
            </div>

            <div className="flex w-full">
              <DimCell title="Onboarding" subtitle="User friction" />
              <IconCell src={imgIcon} w={17} h={15} label="Steep curve" />
              <IconCell src={imgIcon1} w={16} h={16} label="Moderate" />
              <IconCell src={imgIcon2} w={17} h={16} label="Fluid" />
              <IconCell src={imgIcon1} w={16} h={16} label="Instant" />
            </div>

            <div className="flex w-full">
              <DimCell title="Automation" subtitle="Connectivity" />
              <IconCell src={imgIcon3} w={13} h={13} label="Full Sync" />
              <IconCell src={imgIcon4} w={14} h={14} label="Manual Focus" />
              <IconCell src={imgIcon5} w={17} h={17} label="Aggressive" />
              <IconCell src={imgIcon6} w={11} h={11} label="None" />
            </div>

            <div className="flex w-full">
              <DimCell title="Positioning" subtitle="Audience segment" />
              <ItalicCell text="“Pro-active Planner”" />
              <ItalicCell text="“Traditionalist”" />
              <ItalicCell text="“Visual Executive”" />
              <ItalicCell text="“Utility User”" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <article
            className={`relative flex flex-col gap-8 rounded-[40px] border ${cashpayCardPad}`}
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border-default)",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[20px] font-bold leading-7 text-[var(--text-primary)]">The Technical Gap</h3>
              <span
                className="shrink-0 rounded-full px-2 py-1 text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.9px]"
                style={{ background: "var(--tag-risk-bg)", color: "var(--tag-risk-text)" }}
              >
                Utilitarian
              </span>
            </div>
            <p className="text-[14px] leading-[22.75px] text-[var(--text-secondary)]">
              Most financial apps either feel too basic or overly complex. Users often have to jump between accounts,
              manually input transactions, and make sense of cluttered data on their own turning something that should
              feel simple into a frustrating experience.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative size-[10px] shrink-0">
                  <Image src={imgBulletGap} alt="" width={10} height={10} className="object-contain"/>
                </div>
                <p className="text-[12px] leading-4 text-[var(--text-body-soft)]">Scattered account management</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative size-[10px] shrink-0">
                  <Image src={imgBulletGap} alt="" width={10} height={10} className="object-contain"/>
                </div>
                <p className="text-[12px] leading-4 text-[var(--text-body-soft)]">Time-consuming manual tracking</p>
              </div>
            </div>
          </article>

          <article
            className="relative flex flex-col gap-8 rounded-[40px] px-11 pb-12 pt-11 sm:px-12 sm:pb-14 sm:pt-12"
            style={{
              background: "var(--cashpay-advantage-bg)",
              boxShadow: "var(--shadow-card-deep)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[20px] font-bold leading-7 text-[var(--cashpay-advantage-heading)]">
                The CashPay Advantage
              </h3>
              <span
                className="shrink-0 rounded-full px-2 py-1 text-[9px] font-normal uppercase leading-[13.5px] tracking-[0.9px]"
                style={{
                  background: "var(--cashpay-badge-solid)",
                  color: "var(--cashpay-on-accent-badge)",
                }}
              >
                Lifestyle
              </span>
            </div>
            <p className="text-[14px] leading-[22.75px] text-[var(--text-primary)]">
              CashPay is designed to feel effortless and intuitive, fitting naturally into everyday life. It brings
              everything into one clear view, automates the busy work, and helps users stay on top of their finances
              without feeling overwhelmed.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative size-[14px] shrink-0">
                  <Image src={imgBulletCashpay} alt="" width={14} height={14} className="object-contain"/>
                </div>
                <p className="text-[12px] leading-4 text-[var(--text-primary)]">All-in-one financial overview</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative size-[14px] shrink-0">
                  <Image src={imgBulletCashpay} alt="" width={14} height={14} className="object-contain"/>
                </div>
                <p className="text-[12px] leading-4 text-[var(--text-primary)]">Smart, automated tracking</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* 165:4402 + 165:4404 */}
      <div className={`flex flex-col ${cashpayBlockGap}`}>
        <h2 className="text-[36px] font-semibold tracking-[-0.9px] leading-[40px] text-[var(--text-primary)]">
          Information Architecture
        </h2>
        <div className="overflow-hidden rounded-[40px] sm:rounded-[56px] lg:rounded-[73px]">
          <Image
            src={imgIaDiagram}
            alt="CashPay information architecture diagram"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
