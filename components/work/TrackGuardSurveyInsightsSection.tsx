import type { ReactNode } from "react";
import Image from "next/image";

/** Figma 244:16395 — card header / row icons */
const iconConcerns = "https://www.figma.com/api/mcp/asset/5a1c9a52-ddbf-457b-a9db-24f797f093cd";
const iconPrevention = "https://www.figma.com/api/mcp/asset/c6200946-0de5-4d2f-8a91-ac9abe374177";
const iconAlarm = "https://www.figma.com/api/mcp/asset/cde94ce3-105e-4059-a3d5-0ec0cd29348f";
const iconGps = "https://www.figma.com/api/mcp/asset/9a958f81-780b-4333-8214-34f7fd7166cb";
const iconLock = "https://www.figma.com/api/mcp/asset/eccf388a-cb52-4e07-a376-91d0cbc2f6cd";
const iconFeature = "https://www.figma.com/api/mcp/asset/b7d2eb08-867c-43e3-b97e-cede1c260e0a";

function InsightCardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-[40px] border border-[var(--border-default)] p-10 sm:p-12 ${className}`}
      style={{
        background: "var(--bg-surface)",
        boxShadow: "var(--shadow-card-soft)",
      }}
    >
      {children}
    </div>
  );
}

function SmallIcon({ src, w, h }: { src: string; w: number; h: number }) {
  return (
    <div className="relative shrink-0" style={{ width: w, height: h }}>
      <Image src={src} alt="" fill className="object-contain" unoptimized />
    </div>
  );
}

/**
 * Figma 244:16395 — Survey insights grid (four data cards).
 */
export function TrackGuardSurveyInsightsSection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-8 md:gap-10">
        <div className="w-full text-center">
          <h2 className="text-[32px] font-semibold leading-[46px] tracking-[-0.9px] text-[var(--text-primary)] sm:text-[36px]">
            Survey Insights
            <br />
            Car Theft Concerns and App Features
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-4 lg:grid-cols-2 lg:gap-8 lg:pt-16">
          {/*01 Concerns */}
          <InsightCardShell className="justify-between gap-10">
            <div className="flex w-full items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-normal uppercase tracking-[1.4px] text-[var(--text-primary)]">
                  01. Concerns &amp; Awareness
                </p>
                <p className="mt-1 max-w-[280px] text-[11px] leading-[17.6px] text-[var(--text-secondary)]">
                  User perception of theft risk in urban environments.
                </p>
              </div>
              <SmallIcon src={iconConcerns} w={18} h={17} />
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              <div>
                <p className="text-[36px] font-normal leading-10 tracking-[-1.8px] text-[var(--text-primary)]">25%</p>
                <p className="mt-1 text-[9px] font-normal uppercase tracking-[0.9px] text-[var(--text-secondary)]">
                  Very Concerned
                </p>
              </div>
              <div>
                <p className="text-[36px] font-normal leading-10 tracking-[-1.8px] text-[var(--text-primary)]/40">
                  25%
                </p>
                <p className="mt-1 text-[9px] font-normal uppercase tracking-[0.9px] text-[var(--text-secondary)]">
                  Neutral
                </p>
              </div>
              <div>
                <p className="text-[36px] font-normal leading-10 tracking-[-1.8px] text-[var(--text-primary)]/60">
                  25%
                </p>
                <p className="mt-1 text-[9px] font-normal uppercase tracking-[0.9px] text-[var(--text-secondary)]">
                  Somewhat
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--border-default)] pt-8">
              <p className="text-[10px] font-normal uppercase tracking-[1px] text-[var(--text-primary)]">
                Security Awareness Frequency
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <div className="mb-2 flex justify-between text-[10px] uppercase">
                    <span className="text-[var(--text-secondary)]">Rarely</span>
                    <span className="text-[var(--text-primary)]">50%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[rgba(29,29,31,0.05)] dark:bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-[var(--text-primary)]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-[10px] uppercase">
                    <span className="text-[var(--text-secondary)]">Monthly</span>
                    <span className="text-[var(--text-primary)]">25%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[rgba(29,29,31,0.05)] dark:bg-white/10">
                    <div className="h-full w-1/4 rounded-full bg-[var(--text-primary)]/30" />
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-[var(--text-primary)]/10 pl-6 text-[13px] font-normal italic leading-[21.13px] text-[var(--text-secondary)]">
              &ldquo;Qualitative data indicates that users with personal history of theft show 2x higher engagement with
              security protocols.&rdquo;
            </blockquote>
          </InsightCardShell>

          {/* 02 Prevention */}
          <InsightCardShell className="justify-between gap-10">
            <div className="flex w-full items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-normal uppercase tracking-[1.4px] text-[var(--text-primary)]">
                  02. Prevention Tools
                </p>
                <p className="mt-1 max-w-[320px] text-[11px] leading-[17.6px] text-[var(--text-secondary)]">
                  Currently utilized anti-theft measures among participants.
                </p>
              </div>
              <SmallIcon src={iconPrevention} w={15} h={19} />
            </div>

            <div className="flex flex-col gap-10">
              {[
                { icon: iconAlarm, label: "Alarms", pct: 66.7, w: 19, h: 19 },
                { icon: iconGps, label: "GPS Trackers", pct: 33.3, w: 15, h: 19 },
                { icon: iconLock, label: "Steering Locks", pct: 16.7, w: 15, h: 20 },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <SmallIcon src={row.icon} w={row.w} h={row.h} />
                      <span className="text-[12px] font-normal uppercase tracking-[0.3px] text-[var(--text-primary)]">
                        {row.label}
                      </span>
                    </div>
                    <span className="text-[13px] text-[var(--text-primary)]">{row.pct}%</span>
                  </div>
                  <div className="h-0.5 w-full overflow-hidden rounded-full bg-[rgba(29,29,31,0.05)] dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-[var(--text-primary)]"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[var(--text-primary)]/10 px-[17px] py-[9px]"
                style={{ background: "rgba(29,29,31,0.05)" }}
              >
                <span className="size-1.5 rounded-full bg-[var(--text-primary)]" aria-hidden />
                <span className="text-[10px] font-normal uppercase tracking-[1px] text-[var(--text-primary)]">
                  Market Saturation: Low
                </span>
              </div>
            </div>
          </InsightCardShell>
        </div>

        {/* Row 2: dark card + feature prioritization */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div
            className="relative overflow-hidden rounded-[40px] px-10 py-12 sm:px-12 lg:col-span-4"
            style={{
              background: "#1d1d1f",
              boxShadow: "var(--shadow-card-soft)",
            }}
          >
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-white/[0.05] blur-[32px]"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-col gap-10">
              <div>
                <p className="text-[14px] font-normal uppercase tracking-[1.4px] text-white">03. Willingness</p>
                <p className="mt-1 text-[11px] leading-[17.6px] text-white/50">Monetization and adoption intent.</p>
              </div>
              <div>
                <p className="text-[9px] font-normal uppercase tracking-[1.8px] text-white/40">Intent to Use</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-[48px] font-normal leading-none tracking-[-2.4px] text-white">25%</span>
                  <span className="text-[10px] font-normal uppercase tracking-[1px] text-white/60">Very Likely</span>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-normal uppercase tracking-[1.8px] text-white/40">Monthly SaaS Value</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-3">
                  <span className="text-[48px] font-normal leading-none tracking-[-2.4px] text-white">50%</span>
                  <div className="text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-white/60">
                    <p>$3—$5</p>
                    <p>Range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InsightCardShell className="lg:col-span-8">
            <div className="flex w-full items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-normal uppercase tracking-[1.4px] text-[var(--text-primary)]">
                  04. Feature Prioritization
                </p>
                <p className="mt-1 text-[11px] leading-[17.6px] text-[var(--text-secondary)]">
                  Stack-ranking functional requirements.
                </p>
              </div>
              <SmallIcon src={iconFeature} w={3} h={16} />
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
              <div>
                <p className="border-b border-[var(--border-default)] pb-4 text-[10px] font-normal uppercase tracking-[2px] text-[var(--text-primary)]">
                  Most Useful
                </p>
                <ul className="mt-8 flex flex-col gap-6">
                  {[
                    ["GPS Tracking", "83.3%"],
                    ["Real-time Alerts", "75.0%"],
                    ["Security Tips", "41.7%"],
                  ].map(([label, pct]) => (
                    <li key={label} className="flex items-center justify-between gap-4">
                      <span className="text-[13px] text-[var(--text-primary)]">{label}</span>
                      <span
                        className="rounded-full px-3 py-1.5 text-[10px] text-[var(--text-primary)]"
                        style={{ background: "rgba(29,29,31,0.05)" }}
                      >
                        {pct}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="border-b border-[var(--border-default)] pb-4 text-[10px] font-normal uppercase tracking-[2px] text-[var(--text-secondary)]/50">
                  Secondary Interests
                </p>
                <ul className="mt-8 flex flex-col gap-6">
                  {[
                    ["Reporting Activity", "66.7%"],
                    ["Law Enforcement Hub", "50.0%"],
                  ].map(([label, pct]) => (
                    <li key={label} className="flex items-center justify-between gap-4">
                      <span className="text-[13px] text-[var(--text-secondary)]">{label}</span>
                      <span
                        className="rounded-full px-3 py-1.5 text-[10px] text-[var(--text-secondary)]/40"
                        style={{ background: "rgba(134,134,139,0.05)" }}
                      >
                        {pct}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InsightCardShell>
        </div>
      </div>
    </section>
  );
}
