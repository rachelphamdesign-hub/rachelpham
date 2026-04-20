"use client";

import { useEffect, useRef, useState } from "react";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SWEET_SUNSET_FEATURED_CARD_IMAGE } from "@/lib/homeFeaturedAssets";
import { testimonials } from "@/lib/projects";

function FeaturedProjects() {
  const featuredCards = [
    {
      slug: "social-robots",
      layout: "hero" as const,
      title: "Social Robots",
      subtitle:
        "Design a UI/UX concept for an AI robot–based solution to loneliness, developed by the MEDIC team at Mohawk IDEAWORKS.",
      label: "2025 • PROJECT 01",
      image: "/media/social-robots.mp4",
      mediaType: "video" as const,
      area: "lg:col-span-8 lg:col-start-1 lg:row-start-1",
      height: "min-h-[320px] h-[380px] lg:h-[480px]",
      titleClass: "text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "cashpay",
      layout: "cashpay" as const,
      title: "CashPay",
      subtitle:
        "CashPay is a summer project — a financial app that makes managing money simple and effortless",
      label: "2023 • PROJECT 02",
      image: "https://www.figma.com/api/mcp/asset/641a1932-7c35-409b-8c87-9bf660231f42",
      mediaType: "image" as const,
      area: "lg:col-span-4 lg:col-start-9 lg:row-start-1",
      height: "min-h-[320px] h-[380px] lg:h-[480px]",
      titleClass: "text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "trackguard",
      layout: "trackguard" as const,
      title: "TrackGuard",
      subtitle: "A UI/UX class project — real-time protection for your vehicle.",
      label: "2024 • PROJECT 03",
      image: "https://www.figma.com/api/mcp/asset/50896fc0-8b2f-4dd2-beed-a98af826b809",
      mediaType: "image" as const,
      area: "lg:col-span-4 lg:col-start-1 lg:row-start-2",
      height: "min-h-[240px] h-[260px] lg:h-[260px]",
      titleClass: "text-[20px] sm:text-[22px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "applied-research-101",
      layout: "applied" as const,
      title: "Applied Research 101",
      subtitle:
        "UX-focused visuals and course graphics that help students grasp applied research faster—with clear templates and practical tools.",
      label: "2024 • PROJECT 04",
      image: "https://www.figma.com/api/mcp/asset/3222ce83-4692-44e7-9aa1-c15a6ed7ff35",
      mediaType: "image" as const,
      area: "lg:col-span-8 lg:col-start-5 lg:row-start-2",
      height: "min-h-[240px] h-[260px] lg:h-[260px]",
      titleClass: "text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
  ];

  return (
    <section
      id="work"
      className="scroll-mt-28 px-6 pb-[56px] pt-12 sm:scroll-mt-32 sm:pb-[72px] sm:pt-16 lg:pb-[88px] lg:pt-20"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 flex flex-col items-center gap-4 sm:mb-12">
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-solid px-[17px] py-[7px] shadow-[var(--nav-shadow)]"
              style={{
                background: "var(--pill-badge-bg)",
                borderColor: "var(--border-nav)",
              }}
            >
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ background: "var(--accent-action)" }}
                aria-hidden
              />
              <span
                className="text-[12px] font-bold uppercase leading-[18px] tracking-[1.2px]"
                style={{ color: "var(--text-primary)" }}
              >
                Selected Archive 2026
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h2
              className="text-center text-[44px] font-bold leading-none tracking-[-1.8px] sm:text-[56px] lg:text-[72px] lg:leading-[72px]"
              style={{ color: "var(--text-primary)" }}
            >
              Featured Projects
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <p
              className="max-w-[640px] text-center text-[18px] leading-[29.25px] tracking-[-0.54px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Designs that solve problems and delight users.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 lg:grid-rows-[minmax(0,480px)_minmax(0,260px)]">
          {featuredCards.map((card) => (
            <FeaturedProject
              key={card.slug}
              slug={card.slug}
              title={card.title}
              subtitle={card.subtitle}
              label={card.label}
              layout={card.layout}
              areaClass={card.area}
              heightClass={card.height}
              titleClass={card.titleClass}
              subtitleClass={card.subtitleClass}
              mediaSrc={card.image}
              mediaType={card.mediaType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const eventCards = [
    {
      slug: "sweet-sunset",
      layout: "cashpayCenter" as const,
      title: "Sweet Sunset",
      subtitle:
        "A freelance project for a new Toronto coffee shop, created with a modern vibe for younger customers.",
      label: "2023 • freelance 01",
      image: SWEET_SUNSET_FEATURED_CARD_IMAGE,
      mediaType: "image" as const,
      area: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
      height: "min-h-[320px] h-[380px] lg:h-[480px]",
      titleClass: "text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "ideas-to-impact",
      layout: "ideasVideo" as const,
      title: "Ideas to Impact",
      subtitle:
        "I was responsible for designing the visual identity for Ideas to Impact 2026, including social media content, environmental design, and presentation materials.",
      label: "2026 • event 01",
      image: "/media/ideas-to-impact-hero.mp4",
      mediaType: "video" as const,
      area: "lg:col-span-8 lg:col-start-5 lg:row-start-1",
      height: "min-h-[320px] h-[380px] lg:h-[480px]",
      titleClass: "text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-[-0.03em]",
      subtitleClass:
        "text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "fhir-north",
      layout: "fhirVideo" as const,
      title: "FHIR North",
      subtitle:
        "I designed graphics and web experiences for FHIR North 2025, a leading digital health conference in Canada.",
      label: "2025 • EVENT 02",
      image: "/media/fhir-north-hero.mp4",
      mediaType: "video" as const,
      area: "lg:col-span-8 lg:col-start-1 lg:row-start-2",
      height: "min-h-[240px] h-[260px] lg:h-[260px]",
      titleClass: "text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
    {
      slug: "vot-coffee",
      layout: "votPhoto" as const,
      title: "Vot Coffee",
      subtitle: "a freelance project creating a fresh identity for a new coffee brand and shop.",
      label: "2023 • FREELANCE 02",
      image: "/media/vot-coffee-box-bag-mockup.png",
      mediaType: "image" as const,
      area: "lg:col-span-4 lg:col-start-9 lg:row-start-2",
      height: "min-h-[240px] h-[260px] lg:h-[260px]",
      titleClass: "text-[20px] sm:text-[22px] font-extrabold tracking-[-0.03em]",
      subtitleClass: "text-[13px] sm:text-[14px] font-light leading-[1.5] tracking-[0.01em]",
    },
  ];

  return (
    <section id="events" className="px-6 py-[88px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 flex flex-col items-center gap-2 sm:mb-12">
          <ScrollReveal>
            <h2
              className="text-center text-[42px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[48px]"
              style={{ color: "var(--text-primary)" }}
            >
              Events &amp; Freelance Projects
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p
              className="max-w-[520px] text-center text-[13px] sm:text-[14px]"
              style={{ color: "var(--text-secondary)" }}
            >
              From event spaces, creative side design.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 lg:grid-rows-[minmax(0,480px)_minmax(0,260px)]">
          {eventCards.map((card) => (
            <FeaturedProject
              key={card.slug}
              slug={card.slug}
              title={card.title}
              subtitle={card.subtitle}
              label={card.label}
              layout={card.layout}
              areaClass={card.area}
              heightClass={card.height}
              titleClass={card.titleClass}
              subtitleClass={card.subtitleClass}
              mediaSrc={card.image}
              mediaType={card.mediaType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const desktopCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeCard === null) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!desktopCardsRef.current?.contains(target)) {
        setActiveCard(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [activeCard]);

  const cards = [
    { left: "7.4%", top: "10.6%", rotate: "-6deg", z: 20 },
    { left: "36.0%", top: "2.6%", rotate: "4deg", z: 30 },
    { left: "63.9%", top: "13.6%", rotate: "8deg", z: 10 },
    { left: "22.8%", top: "42.6%", rotate: "-2deg", z: 40 },
    { left: "50.7%", top: "40.0%", rotate: "5deg", z: 50 },
  ] as const;

  return (
    <section className="overflow-hidden px-6 py-[96px]">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-10 flex flex-col items-center gap-2">
          <ScrollReveal>
            <p
              className="text-[14px] font-normal tracking-[-0.025em]"
              style={{ color: "var(--text-secondary)" }}
            >
              Rating &amp; Reviews
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h2
              className="text-center text-[48px] font-bold leading-[0.98] tracking-[-0.03em] sm:text-[56px] lg:text-[60px]"
              style={{ color: "var(--text-primary)" }}
            >
              Trusted by people
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="media"
          delay={0.08}
          className="relative mx-auto hidden h-[500px] w-full max-w-[1060px] lg:block"
        >
          <div ref={desktopCardsRef} className="relative h-full w-full">
          {testimonials.map((t, i) => {
            const spec = cards[i] ?? cards[cards.length - 1];
            const isDark = t.color === "#000000" || t.color === "#8B85F9";
            const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
            const textColor = isDark ? "#ffffff" : "#18181B";
            const starColor = t.color === "#8B85F9" ? "#FFFFFF" : isDark ? "#8B85F9" : "#7D77F2";
            const isActive = activeCard === i;
            const isDimmed = activeCard !== null && !isActive;
            const isHovered = hoveredCard === i;
            const liftY = isActive ? -12 : isHovered ? -8 : 0;
            const scale = isActive ? 1.04 : 1;

            return (
              <article
                key={`${t.name}-${i}`}
                className="absolute flex h-[292px] w-[320px] cursor-pointer flex-col rounded-[20px] px-8 pb-8 pt-8 transition-all duration-300 ease-out"
                style={{
                  left: spec.left,
                  top: spec.top,
                  transform: `rotate(${spec.rotate}) translateY(${liftY}px) scale(${scale})`,
                  zIndex: isActive ? 200 : spec.z,
                  background: t.color,
                  border: t.color === "#FFFFFF" ? "1px solid #F4F4F5" : "none",
                  opacity: isDimmed ? 0.55 : 1,
                  filter: isDimmed ? "blur(1px)" : "none",
                  boxShadow: isActive
                    ? "0 28px 56px -24px rgba(0,0,0,0.42)"
                    : "0 10px 40px -15px rgba(0,0,0,0.18)",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard((current) => (current === i ? null : current))}
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveCard((current) => (current === i ? null : i));
                }}
              >
                <div className="mb-[22px] flex gap-[2px]">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} width="17" height="16" viewBox="0 0 17 16" fill={starColor} aria-hidden="true">
                      <path d="M8.333 1L10.193 5.11L14.856 5.67L11.404 8.87L12.349 13.53L8.333 11.22L4.318 13.53L5.262 8.87L1.81 5.67L6.474 5.11L8.333 1Z" />
                    </svg>
                  ))}
                </div>
                <p className="min-h-[128px] text-[14px] font-medium leading-[22.75px]" style={{ color: textColor }}>
                  {i === 0 || i === 2 ? (
                    <>
                      &ldquo;
                      {t.text}
                      &rdquo;
                    </>
                  ) : (
                    t.text
                  )}
                </p>
                <div className="mt-4 border-t pt-[16px] text-[14px]" style={{ color: textColor, borderColor }}>
                  {t.name}
                </div>
              </article>
            );
          })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {testimonials.map((t, i) => {
            const isDark = t.color === "#000000" || t.color === "#8B85F9";
            const textColor = isDark ? "#ffffff" : "#18181B";
            const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
            const starColor = t.color === "#8B85F9" ? "#FFFFFF" : isDark ? "#8B85F9" : "#7D77F2";

            return (
              <article
                key={`mobile-${t.name}-${i}`}
                className="rounded-[20px] px-6 pb-6 pt-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]"
                style={{
                  background: t.color,
                  border: t.color === "#FFFFFF" ? "1px solid #F4F4F5" : "none",
                }}
              >
                <div className="mb-4 flex gap-[2px]">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} width="17" height="16" viewBox="0 0 17 16" fill={starColor} aria-hidden="true">
                      <path d="M8.333 1L10.193 5.11L14.856 5.67L11.404 8.87L12.349 13.53L8.333 11.22L4.318 13.53L5.262 8.87L1.81 5.67L6.474 5.11L8.333 1Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] font-medium leading-[1.625]" style={{ color: textColor }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 border-t pt-4 text-[14px]" style={{ color: textColor, borderColor }}>
                  {t.name}
                </div>
              </article>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-[100px]">
      <div className="mx-auto max-w-[800px] text-center">
        <ScrollReveal>
          <h2
            className="mb-4 text-[42px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[56px]"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to start something together?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <a
            href="mailto:rachelphamdesign@gmail.com"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] touch-manipulation transition-opacity duration-500 hover:opacity-90 active:opacity-90 sm:h-8 sm:min-h-0 sm:px-4 sm:py-0 sm:text-[11px]"
            style={{
              background: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Let&apos;s talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12L12 2M12 2H4M12 2V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Below-the-fold home sections — lazy-loaded so hero JS hydrates first. */
export default function HomeBelowFold() {
  return (
    <>
      <FeaturedProjects />
      <div className="h-px w-full" style={{ background: "var(--border-default)" }} />
      <EventsSection />
      <div className="h-px w-full" style={{ background: "var(--border-default)" }} />
      <TestimonialsSection />
      <div
        className="mx-auto h-px w-full max-w-[1100px]"
        style={{ background: "var(--border-default)" }}
      />
      <CTASection />
    </>
  );
}
