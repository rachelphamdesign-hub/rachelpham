"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyVideo } from "@/components/LazyVideo";

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
    { nodeId: "playground-1", title: "", image: "/media/image/playground/4-3.gif" },
    { nodeId: "playground-2", title: "", image: "/media/image/playground/download.gif" },
    { nodeId: "playground-3", title: "", video: "/media/image/playground/Hello.mp4" },
    { nodeId: "playground-4", title: "", image: "/media/image/playground/Menu%20Mock%20Up.jpg" },
    { nodeId: "playground-6", title: "", image: "/media/image/playground/Poster%20Mockup%20%283%29.jpg" },
    { nodeId: "playground-7", title: "", image: "/media/image/playground/Scene.gif" },
    { nodeId: "playground-8", title: "", video: "/media/image/playground/Scene.mp4" },
    { nodeId: "playground-9", title: "", image: "/media/image/playground/Untitled%20design%20copy%202.gif" },
    { nodeId: "playground-10", title: "", image: "/media/image/playground/Untitled%20design%20copy%203.gif" },
    { nodeId: "playground-11", title: "", image: "/media/image/playground/Untitled%20design%20copy%204.gif" },
    { nodeId: "playground-12", title: "", image: "/media/image/playground/Untitled%20design%20copy%205.gif" },
    { nodeId: "playground-13", title: "", image: "/media/image/playground/Untitled%20design%20copy.gif" },
    { nodeId: "playground-14", title: "", image: "/media/image/playground/Untitled%20design.gif" },
    {
        nodeId: "playground-15",
        title: "",
        image: "/media/image/playground/z3768104784095_461f13f138df485be339f141df2d0ce9.jpg",
    },
    {
        nodeId: "playground-16",
        title: "",
        image: "/media/image/playground/z3768104816973_621fecce3595a2f0173160d7f805fb5d.jpg",
    },
    {
        nodeId: "playground-17",
        title: "",
        image: "/media/image/playground/z3768104817761_2bc831c8e5d37bb50e4a2fda629ac8d4.jpg",
    },
    {
        nodeId: "playground-18",
        title: "",
        image: "/media/image/playground/z3768104842834_20bea8c1e654d637b5bf7bee6048ed56.jpg",
    },
    {
        nodeId: "playground-19",
        title: "",
        image: "/media/image/playground/z3768104855699_344ddcdcb075d0da0ee4e4d16f1a3157.jpg",
    },
    {
        nodeId: "playground-20",
        title: "",
        image: "/media/image/playground/z3768104871399_08764d0a516a4438b98de9c8df887f79.jpg",
    },
    {
        nodeId: "playground-21",
        title: "",
        image: "/media/image/playground/z3768104888280_171d38b30c66c1301152a74aa4954c07.jpg",
    },
    {
        nodeId: "playground-22",
        title: "",
        image: "/media/image/playground/z3768104902410_bd9552178546357194544f1d8bfa2371.jpg",
    },
    {
        nodeId: "playground-23",
        title: "",
        image: "/media/image/playground/z3768112632770_b31a2486347710edd448725a47df8584.jpg",
    },
    { nodeId: "playground-24", title: "", image: "/media/image/playground/Untitled%20design%20copy%206.gif" },
    { nodeId: "playground-25", title: "", image: "/media/image/playground/Untitled%20design%20copy%207.gif" },
    { nodeId: "playground-26", title: "", image: "/media/image/playground/Untitled%20design%20copy%208.gif" },
];

function PlayCardFigure({ item }: { item: PlayCard }) {
    const hasTitle = item.title.trim().length > 0;
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
                <LazyVideo
                    src={item.video}
                    className={mediaClass}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {hasTitle ? (
                    <div
                        className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
                        style={{ background: overlayGradient }}
                    >
                        <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
                            {item.title}
                        </p>
                    </div>
                ) : null}
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
                {hasTitle ? (
                    <div
                        className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
                        style={{ background: overlayGradient }}
                    >
                        <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
                            {item.title}
                        </p>
                    </div>
                ) : null}
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
            {hasTitle ? (
                <div
                    className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6"
                    style={{ background: overlayGradient }}
                >
                    <p className="line-clamp-2 text-left text-[14px] font-semibold leading-[18px] text-white sm:text-[15px]">
                        {item.title}
                    </p>
                </div>
            ) : null}
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
                            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-nav)] bg-[var(--pill-badge-bg)] px-[17px] py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] dark:border-white/10 dark:shadow-[0px_1px_2px_rgba(0,0,0,0.35)]">
                                <span
                                    className="size-2 rounded-full bg-[var(--accent-action)]"
                                    aria-hidden
                                />
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
                        style={{
                            transform: "translate3d(0px, 0px, 0)",
                            transition: "opacity 140ms ease",
                        }}
                        aria-hidden
                    >
                        <div className="rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_88%,transparent)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-[10px] dark:border-white/12 dark:bg-[color-mix(in_oklab,var(--bg-elevated)_82%,transparent)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                            Swipe for more →
                        </div>
                    </div>
                    <ScrollReveal variant="media" className="min-h-0 flex-1">
                        <div className="relative min-h-0 flex-1">
                            <div
                                ref={scrollRef}
                                className="flex min-h-0 flex-1 items-start gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-6 pb-8 pt-2 [scrollbar-color:var(--border-default)_transparent] [scrollbar-width:thin] [scroll-padding-inline:1.5rem] snap-x snap-mandatory sm:gap-5 lg:gap-6"
                                style={{
                                    paddingInlineEnd: "max(1.5rem, env(safe-area-inset-right))",
                                }}
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
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden
                                >
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                onClick={() => scrollByAmount(1)}
                                className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_88%,transparent)] text-[var(--text-primary)] shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur-[8px] transition-opacity hover:opacity-80 sm:flex dark:border-white/12 dark:bg-[color-mix(in_oklab,var(--bg-elevated)_78%,transparent)]"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden
                                >
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
