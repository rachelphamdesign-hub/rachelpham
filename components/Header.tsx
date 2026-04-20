"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { clsx } from "clsx";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/play", label: "Play" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      <div className="pointer-events-auto flex w-full max-w-[1100px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        {/* Logo + Nav pill — full width on small screens so CTA can sit on its own row with a proper tap target */}
        <div
          className="flex h-12 min-h-12 w-full min-w-0 items-center gap-3 overflow-x-auto rounded-full border px-3 py-0.5 backdrop-blur-[6px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors sm:w-auto sm:gap-6 sm:overflow-visible sm:px-[25px]"
          style={{
            background: "var(--nav-bg)",
            borderColor: "var(--border-nav)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="bg-black dark:bg-white flex items-center justify-center w-8 h-8 rounded-xl shrink-0 transition-transform hover:scale-105"
            aria-label="Rachel Pham home"
          >
            <span className="font-rubik-glitch text-[13px] text-white dark:text-black leading-none tracking-[-0.13px]">
              RP
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex shrink-0 items-center gap-3 sm:gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/about"
                  ? pathname === "/about"
                  : link.href === "/play"
                  ? pathname === "/play"
                  : link.href === "/contact"
                  ? pathname === "/contact"
                  : pathname === "/" || pathname.startsWith("/work");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-[13px] font-medium tracking-[-0.13px] transition-opacity hover:opacity-100",
                    "text-[var(--text-primary)]",
                    isActive ? "opacity-100" : "opacity-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div
            className="h-4 w-px shrink-0"
            style={{ background: "var(--border-divider)" }}
          />

          {/* Theme toggle */}
          <ThemeToggle />
        </div>

        {/* Let's talk — mobile: fixed side bubble; sm+: inline pill in header row */}
        <a
          href="mailto:rachelphamdesign@gmail.com"
          className={clsx(
            "flex shrink-0 touch-manipulation items-center justify-center gap-2 font-semibold tracking-[-0.025em] transition-opacity hover:opacity-90 active:opacity-90",
            "text-[12px] sm:text-[14px]",
            /* Side bubble — fixed on viewport right, vertically centered */
            "fixed top-1/2 z-[60] min-h-12 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.16)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]",
            "right-[max(0.75rem,env(safe-area-inset-right,0px))]",
            /* sm+: inline with nav */
            "sm:static sm:right-auto sm:top-auto sm:z-auto sm:h-12 sm:min-h-12 sm:w-auto sm:translate-y-0 sm:px-6 sm:py-0 sm:shadow-[0px_1px_2px_rgba(0,0,0,0.05)] sm:dark:shadow-[0px_1px_2px_rgba(0,0,0,0.2)]",
          )}
          style={{
            background: "var(--btn-primary-bg)",
            color: "var(--btn-primary-text)",
          }}
        >
          Let&apos;s talk
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="shrink-0 sm:h-2.5 sm:w-2.5"
            aria-hidden="true"
          >
            <path
              d="M1 9L9 1M9 1H3M9 1V7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
