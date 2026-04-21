import Image from "next/image";
import type { ProjectMeta } from "@/lib/projects";
import { ThreeDPlaceholder } from "@/components/ThreeDPlaceholder";

export function WorkStandardHero({ project }: { project: ProjectMeta }) {
  const slug = project.slug;
  const isCashpay = slug === "cashpay";
  const isTrackguard = slug === "trackguard";
  const isAppliedResearch101 = slug === "applied-research-101";
  const isSweetSunset = slug === "sweet-sunset";

  const sectionPad = isCashpay
    ? "pt-28 pb-10 sm:pb-14"
    : isTrackguard || isSweetSunset
      ? "pt-32 pb-10 sm:pb-14"
      : "pt-32 pb-0";

  return (
    <section
      className={`px-0 ${sectionPad}`}
      {...(isCashpay ? { "data-cashpay-debug-hero": "1" } : {})}
    >
      <div className="mx-auto max-w-[980px] px-6">
        <div
          className={`flex flex-col items-center text-center ${
            isCashpay ? "mb-8 gap-6 pt-4 sm:mb-10" : isSweetSunset ? "mb-12 gap-10 pt-8" : "mb-12 gap-8 pt-8"
          }`}
        >
          <div
            className="flex items-center gap-2 rounded-full border px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            style={{
              background: isCashpay || isSweetSunset ? "var(--pill-badge-bg)" : "var(--bg-surface)",
              borderColor: "var(--border-nav)",
            }}
          >
            <div className="h-2 w-2 rounded-full bg-[var(--accent-action)]" />
            <span
              className="text-center text-[12px] font-bold uppercase tracking-[1.2px]"
              style={{ color: "var(--text-primary)" }}
            >
              {project.label}
            </span>
          </div>

          <div className={`${isCashpay || isSweetSunset ? "flex flex-col gap-2" : "flex flex-col gap-3"}`}>
            <h1
              className={`${
                isCashpay || isSweetSunset
                  ? "text-[40px] font-bold leading-[1.1] tracking-[-1.8px] sm:text-[54px]"
                  : "text-[40px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[54px]"
              }`}
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

        <div
          className="relative overflow-hidden rounded-[56px]"
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
              <Image
                src={project.heroImage}
                alt={`${project.title} — brand packaging and identity mockups`}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 980px"
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

        <div
          className={`${
            isCashpay
              ? "flex justify-center gap-8 pb-2 pt-6 sm:gap-14 sm:pb-3 sm:pt-8"
              : isSweetSunset
                ? "flex flex-wrap justify-center gap-10 pb-3 pt-10 sm:gap-12 sm:pb-4 lg:gap-16 xl:gap-[80px]"
                : "flex flex-wrap justify-center gap-12 pb-3 pt-10 sm:pb-4"
          }`}
        >
          <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
            <p className="text-[12px] font-bold uppercase tracking-[2px]" style={{ color: "var(--text-primary)" }}>
              Role
            </p>
            {project.role.map((r) => (
              <p key={r} className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
                {r}
              </p>
            ))}
          </div>

          <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
            <p className="text-[12px] font-bold uppercase tracking-[2px]" style={{ color: "var(--text-primary)" }}>
              Team
            </p>
            <p className="max-w-[180px] text-[15px]" style={{ color: "var(--text-secondary)" }}>
              {project.team}
            </p>
          </div>

          <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
            <p className="text-[12px] font-bold uppercase tracking-[2px]" style={{ color: "var(--text-primary)" }}>
              Timeline
            </p>
            <p className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
              {project.timeline}
            </p>
          </div>

          <div className={`flex flex-col ${isSweetSunset ? "gap-[7px]" : "gap-2"}`}>
            <p className="text-[12px] font-bold uppercase tracking-[2px]" style={{ color: "var(--text-primary)" }}>
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
    </section>
  );
}
