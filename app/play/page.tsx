"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

type PlayCard = {
  nodeId: string;
  title: string;
  image?: string;
  video?: string;
  overlay?: "soft" | "dark";
  background?: string;
  /** Landscape editorial spreads — wider snap card in the horizontal gallery */
  variant?: "wide";
};

const PLAY_HEADER_SHELL = "mx-auto w-full max-w-[1160px] px-6";

const playItems: PlayCard[] = [
  {
    nodeId: "local-learning-together",
    title: "Learning Together",
    video: "/media/learning-together.mp4",
    overlay: "soft",
    variant: "wide",
  },
  {
    nodeId: "local-akira-spread",
    title: "Anime Magazine — Akira spread",
    image: "/media/play-akira-magazine-spread.gif",
    overlay: "soft",
    variant: "wide",
  },
  { nodeId: "107:255", title: "BeatSync App", overlay: "soft", video: "/media/showreel-mobile-screens-remix-copy.mp4" },
  { nodeId: "107:396", title: "Uynique Studio", image: "https://www.figma.com/api/mcp/asset/b8f2cac7-de7a-4ac3-8a24-a14cd028d79b" },
  { nodeId: "107:297", title: "Sports News Website", image: "https://www.figma.com/api/mcp/asset/a7ca40d1-6ed7-4225-a95b-b8e79033391b" },
  { nodeId: "107:285", title: "Weather or Not", image: "https://www.figma.com/api/mcp/asset/6c074106-3fba-4b2e-9639-9a09506879a8" },
  { nodeId: "107:279", title: "Kicks App", image: "https://www.figma.com/api/mcp/asset/364d23a4-92d6-4b85-9979-cf2c4b981c15" },
  { nodeId: "107:273", title: "LoveLink - Dating App", image: "https://www.figma.com/api/mcp/asset/c197658e-7d34-4b73-8de9-072e382ffa36" },
  { nodeId: "150:686", title: "", image: "https://www.figma.com/api/mcp/asset/9c140bc8-2925-46f3-a12d-0db62ee40dec", overlay: "dark" },
  { nodeId: "150:662", title: "", image: "https://www.figma.com/api/mcp/asset/9e116780-c77f-4dd8-8314-53fbc0f31d9d", overlay: "dark" },
  { nodeId: "150:486", title: "", image: "https://www.figma.com/api/mcp/asset/0ec5878d-ac5f-40ef-9c22-e053f1230f70", overlay: "dark" },
  { nodeId: "150:674", title: "", image: "https://www.figma.com/api/mcp/asset/7a46b024-9d82-4bce-899f-2404adcad54a", overlay: "dark" },
  { nodeId: "141:450", title: "BeatSync App", image: "https://www.figma.com/api/mcp/asset/2132ba5e-a00f-417a-8de9-8d2340b202b0" },
  { nodeId: "107:414", title: "BeatSync App", image: "https://www.figma.com/api/mcp/asset/f1e724a7-e7cf-442e-a4d3-895b5dc9c85e" },
  { nodeId: "150:668", title: "", image: "https://www.figma.com/api/mcp/asset/af506eda-6d34-4dbd-9cee-cd10c412ba50", overlay: "dark" },
  { nodeId: "141:468", title: "Icon Magazine", image: "https://www.figma.com/api/mcp/asset/b7c6241c-adfc-45ae-80ce-342aff4b7dea" },
  { nodeId: "150:504", title: "", image: "https://www.figma.com/api/mcp/asset/9c1153f3-368b-4e23-b4eb-5d29d649446f", overlay: "dark" },
  { nodeId: "107:291", title: "City Housing Hamilton – Ad Campaign", image: "https://www.figma.com/api/mcp/asset/2c15e025-c2d2-4db6-84ff-b83bf27f8916" },
  { nodeId: "107:402", title: "541 Eatery & Exchange - Case For Support", image: "https://www.figma.com/api/mcp/asset/cd07e9bb-d915-4bdc-8394-4090b68a254c" },
  { nodeId: "107:261", title: "City Housing Hamilton – Annual Report 2024", image: "https://www.figma.com/api/mcp/asset/c197658e-7d34-4b73-8de9-072e382ffa36" },
  { nodeId: "150:492", title: "", image: "https://www.figma.com/api/mcp/asset/08d6bb01-88df-4f04-bd69-50074a1e9d83", overlay: "dark" },
  { nodeId: "141:438", title: "Ideaworks - Social Posts", image: "https://www.figma.com/api/mcp/asset/a783b397-0356-44b7-bdb2-d3d593d32c3f" },
  { nodeId: "107:408", title: "Zara App - Redesign", image: "https://www.figma.com/api/mcp/asset/82626467-08d4-478b-bab3-a2a30de45072" },
  { nodeId: "129:420", title: "Font Poster", image: "https://www.figma.com/api/mcp/asset/ec6146d9-6f45-4b29-9ad5-c67b282548ba" },
  { nodeId: "141:462", title: "RoJo Restaurant - Menu", image: "https://www.figma.com/api/mcp/asset/38ab1b00-943d-4034-963e-76c2a93d1dc7" },
  { nodeId: "150:680", title: "", image: "https://www.figma.com/api/mcp/asset/6ba403a9-721a-4110-92f4-74b31c0e4eb6", overlay: "dark" },
  { nodeId: "150:498", title: "", image: "https://www.figma.com/api/mcp/asset/b72322eb-6829-4144-b507-051fe087dadd", overlay: "dark" },
  { nodeId: "107:267", title: "Ideaworks - Notebook", image: "https://www.figma.com/api/mcp/asset/737e1051-afa1-4796-b19e-89415a55adf5" },
  { nodeId: "141:444", title: "Uynique Studio - Poster", image: "https://www.figma.com/api/mcp/asset/142a1650-aa13-4127-b426-d3d669d971e6" },
];

function PlayCardFigure({ item }: { item: PlayCard }) {
  const overlayGradient =
    item.overlay === "dark"
      ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.52) 30%, rgba(0,0,0,0) 64%)"
      : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 60%)";

  const shellClass =
    "relative h-[360px] w-auto overflow-hidden rounded-[21.615px] border border-[var(--border-default)] bg-[var(--card-bg)] sm:h-[400px] lg:h-[440px]";
  const mediaClass = "block h-full w-auto object-contain object-center";

  if (item.video) {
    return (
      <div className={shellClass}>
        <video
          src={item.video}
          className={mediaClass}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
          style={{ background: overlayGradient }}
        >
          <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  if (item.image) {
    return (
      <div className={shellClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className={mediaClass}
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
          style={{ background: overlayGradient }}
        >
          <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-[360px] overflow-hidden rounded-[21.615px] border border-[var(--border-default)] sm:h-[400px] lg:h-[440px] dark:border-white/10"
      style={{
        aspectRatio: "3 / 4",
        background: item.background ?? "var(--pill-badge-bg)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
        style={{ background: overlayGradient }}
      >
        <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
          {item.title}
        </p>
      </div>
    </div>
  );
}

const CURSOR_OFFSET_X = 20;
const CURSOR_OFFSET_Y = -12;

export default function PlayPage() {
  const playSectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [dragCursorActive, setDragCursorActive] = useState(false);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.8, 320);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const target = useMemo(() => ({ x: 0, y: 0 }), []);
  const pos = useMemo(() => ({ x: 0, y: 0 }), []);

  useEffect(() => {
    const el = playSectionRef.current;
    if (!el) return;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      const bubble = el.querySelector<HTMLElement>("[data-play-drag-cursor]");
      if (bubble) {
        bubble.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onEnter = () => {
      setDragCursorActive(true);
      pos.x = target.x;
      pos.y = target.y;
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onLeave = () => {
      setDragCursorActive(false);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX + CURSOR_OFFSET_X;
      target.y = e.clientY + CURSOR_OFFSET_Y;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pos, target]);

  return (
    <>
      <Header />
      <main
        className="flex min-h-[100svh] flex-col overflow-x-hidden pt-32 lg:min-h-[100dvh]"
        style={{ background: "var(--bg-page)" }}
      >
        <section className={`${PLAY_HEADER_SHELL} shrink-0 pb-4 pt-2 text-center sm:pb-6`}>
          <ScrollReveal>
            <div className="pb-4 sm:pb-5">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-nav)] bg-[var(--pill-badge-bg)] px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] dark:border-white/10 dark:shadow-[0px_1px_2px_rgba(0,0,0,0.35)]"
            >
              <span className="size-2 rounded-full bg-[var(--accent-action)]" aria-hidden />
              <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[var(--text-primary)]">
                Creative Fun 2026
              </span>
            </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-3 text-[44px] font-bold tracking-[-1.4px] text-[var(--text-primary)] sm:mb-4 sm:text-[56px] sm:tracking-[-1.92px] lg:text-[64px]">
            Playground
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-[564px] text-[16px] leading-[1.6] tracking-[-0.45px] text-[var(--text-secondary)] sm:text-[18px] sm:leading-[29.25px] sm:tracking-[-0.54px]">
            Side projects that let me experiment, play, and explore new ideas.
            </p>
          </ScrollReveal>
        </section>

        {/* Horizontal gallery + drag hint cursor (desktop pointer only) */}
        <section
          ref={playSectionRef}
          aria-label="Play projects"
          className={`relative flex min-h-0 min-w-0 flex-1 flex-col ${dragCursorActive ? "cursor-none" : ""}`}
        >
          <div
            data-play-drag-cursor
            className={`pointer-events-none fixed left-0 top-0 z-[60] will-change-transform ${dragCursorActive ? "opacity-100" : "opacity-0"}`}
            style={{ transform: "translate3d(0px, 0px, 0)", transition: "opacity 140ms ease" }}
            aria-hidden
          >
            <div className="rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_88%,transparent)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-[10px] dark:border-white/12 dark:bg-[color-mix(in_oklab,var(--bg-elevated)_82%,transparent)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              drag to view more
            </div>
          </div>
          <ScrollReveal variant="media" className="min-h-0 flex-1">
            <div className="relative min-h-0 flex-1">
              <div
                ref={scrollRef}
                className="flex min-h-0 flex-1 items-start gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-6 pb-8 pt-2 [scrollbar-color:var(--border-default)_transparent] [scrollbar-width:thin] [scroll-padding-inline:1.5rem] snap-x snap-mandatory sm:gap-5 lg:gap-6"
                style={{ paddingInlineEnd: "max(1.5rem, env(safe-area-inset-right))" }}
              >
                {playItems.map((item, i) => (
                  <article
                    key={`${item.nodeId}-${i}`}
                    className="flex shrink-0 snap-start snap-always flex-col items-stretch"
                  >
                    <PlayCardFigure item={item} />
                  </article>
                ))}
              </div>

              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByAmount(-1)}
                className="absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_88%,transparent)] text-[var(--text-primary)] shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur-[8px] transition-opacity hover:opacity-80 sm:flex dark:border-white/12 dark:bg-[color-mix(in_oklab,var(--bg-elevated)_78%,transparent)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByAmount(1)}
                className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_88%,transparent)] text-[var(--text-primary)] shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur-[8px] transition-opacity hover:opacity-80 sm:flex dark:border-white/12 dark:bg-[color-mix(in_oklab,var(--bg-elevated)_78%,transparent)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
