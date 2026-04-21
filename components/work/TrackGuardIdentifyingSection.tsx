import Image from "next/image";
import { LazyVideo } from "@/components/LazyVideo";

/** Figma 226:11886 — “Who does it affect” icon */
const imgWhoIcon = "https://www.figma.com/api/mcp/asset/cc5b2796-aad7-40d5-8710-b31e7f8f9a89";
/** Key challenges row (L→R) */
const imgChallenge1 = "https://www.figma.com/api/mcp/asset/2dfa6600-acc6-4433-9b8a-b08058347d41";
const imgChallenge2 = "https://www.figma.com/api/mcp/asset/d74888b1-ef9d-4411-af63-0b8dc1a7980f";
const imgChallenge3 = "https://www.figma.com/api/mcp/asset/450bbe65-ea2e-4550-8835-71300cb8375e";
const imgChallenge4 = "https://www.figma.com/api/mcp/asset/267d95b2-4158-4ed7-afc0-cb6f79a98a77";

/** User-provided process video shown under TrackGuard process section */
const TRACKGUARD_PROCESS_VIDEO = "/media/trackguard-process.mp4";

const KEY_CHALLENGES = [
  {
    icon: imgChallenge1,
    title: "Rising Theft Rates",
    body: "Increasing prevalence of vehicle theft across major urban centers in Canada.",
    iconH: 11,
  },
  {
    icon: imgChallenge2,
    title: "Limited Access",
    body: "Ineffective and limited access to current professional anti-theft measures.",
    iconH: 19.5,
  },
  {
    icon: imgChallenge3,
    title: "Delayed Recovery",
    body: "Persistently delayed or unsuccessful vehicle recovery efforts after a theft occurs.",
    iconH: 20.735,
  },
  {
    icon: imgChallenge4,
    title: "Lack of Awareness",
    body: "Minimal knowledge among car owners about simple, effective preventive steps.",
    iconH: 19,
  },
] as const;

/**
 * Figma 222:11043 — Hero billboard (dark frame + wide image) +
 * Figma 226:11886 — Identifying Problems (research framing).
 */
export function TrackGuardIdentifyingSection() {
  return (
    <>
      {/* 222:11043 — Section Hero Billboard */}
      <section
        className="border-b border-[var(--border-default)] px-5 py-10 sm:px-6 sm:py-12"
        style={{ background: "var(--bg-page)" }}
      >
        <div className="mx-auto max-w-[980px]">
          <div
            className="overflow-hidden rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.45)]"
            style={{ background: "#1d1d1f" }}
          >
            <div className="relative aspect-[651/344] w-full">
              <LazyVideo
                src={TRACKGUARD_PROCESS_VIDEO}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* 226:11886 — Identifying Problems */}
      <section
        className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-24"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-16 md:gap-24">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
            <h2 className="text-center text-[40px] font-semibold leading-none tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
              Identifying Problems
            </h2>
            <p className="text-center text-[20px] font-normal leading-8 text-[var(--text-primary)] sm:text-[24px] sm:leading-8">
              What is the Problem?
            </p>
            <p className="text-center text-[18px] font-normal leading-[32.5px] text-[var(--text-secondary)] sm:text-[20px]">
              Car theft is a growing issue in Canada, impacting thousands of vehicles each year. This leads to
              financial loss for owners and lowers trust in public safety.
            </p>
          </div>

          <div className="flex w-full flex-col gap-12 lg:max-w-[940px]">
            <SubsectionHeader left="Who Does It Affect?" right="Safety & Security Impact" />

            <div className="flex flex-col items-center gap-4 rounded-[40px] border border-[var(--border-subtle)] bg-[rgba(29,29,31,0.05)] px-6 pb-10 pt-8 sm:px-12 dark:border-white/10 dark:bg-white/[0.06]">
              <div className="flex size-16 items-center justify-center rounded-[40px] bg-[var(--pill-badge-bg)] dark:bg-white/10">
                <div className="relative h-[11px] w-[23px] shrink-0">
                  <Image src={imgWhoIcon} alt="" width={23} height={11} className="object-contain"/>
                </div>
              </div>
              <p className="pt-4 text-center text-[22px] font-normal tracking-[-0.6px] text-[var(--text-primary)] sm:text-[24px] sm:leading-8">
                EVERYONE
              </p>
              <p className="max-w-[672px] text-center text-[16px] font-normal leading-[29.25px] text-[var(--text-secondary)] sm:text-[18px]">
                The safety and security of vehicles impact car owners, their families, and the broader community.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-12 lg:max-w-[940px]">
            <SubsectionHeader left="Key Challenges" right="Systemic Obstacles" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {KEY_CHALLENGES.map((c) => (
                <article
                  key={c.title}
                  className="flex flex-col rounded-[40px] border border-white/50 bg-white/70 p-8 backdrop-blur-[5px] dark:border-white/10 dark:bg-[var(--bg-elevated)]/85"
                  style={{ boxShadow: "var(--shadow-card-soft)" }}
                >
                  <div
                    className="relative mb-6 w-full shrink-0"
                    style={{ height: `${Math.max(c.iconH, 24)}px`, minHeight: `${Math.max(c.iconH, 24)}px` }}
                  >
                    <Image src={c.icon} alt="" fill className="object-contain object-left"/>
                  </div>
                  <h3 className="mb-3 text-[14px] font-normal leading-5 text-[var(--text-primary)]">{c.title}</h3>
                  <p className="text-[13px] font-normal leading-[21.13px] text-[var(--text-secondary)]">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SubsectionHeader({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="flex w-full flex-col gap-3 border-b border-[var(--border-default)] pb-6 sm:flex-row sm:items-end sm:justify-between sm:pb-[25px]"
    >
      <p className="text-[12px] font-normal uppercase tracking-[2.4px] text-[var(--text-primary)]">{left}</p>
      <p className="text-[11px] font-normal italic leading-[16.5px] text-[var(--text-secondary)]">{right}</p>
    </div>
  );
}
