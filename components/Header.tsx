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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 pt-4 pointer-events-none">
      <div className="w-full max-w-[1100px] flex items-center justify-between pointer-events-auto">
        {/* Logo + Nav pill */}
        <div
          className="flex items-center gap-6 h-12 px-[25px] py-0.5 rounded-full border backdrop-blur-[6px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors"
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
          <nav className="flex items-center gap-6" aria-label="Main navigation">
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

        {/* Let's talk CTA */}
        <a
          href="mailto:rachelphamdesign@gmail.com"
          className="flex items-center gap-2 h-12 px-6 rounded-full font-semibold text-[14px] tracking-[-0.025em] transition-opacity hover:opacity-90 shrink-0"
          style={{
            background: "var(--btn-primary-bg)",
            color: "var(--btn-primary-text)",
            boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          Let&apos;s talk
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
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
