import Link from "next/link";

const navLinks = ["Work", "About", "Play", "Contact"];
const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com/rachelphamdesign" },
  { label: "Behance", href: "https://www.behance.net/nhipham96" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nhiphamdesign/" },
  { label: "GitHub", href: "https://github.com/rachelphamdesign-hub" },
];

type FooterProps = {
  /** Omit the top border (e.g. case study pages where the last section is already white). */
  hideTopBorder?: boolean;
};

export function Footer({ hideTopBorder }: FooterProps = {}) {
  return (
    <footer
      className={`w-full py-20 transition-colors ${hideTopBorder ? "" : "border-t"}`}
      style={{
        background: "var(--bg-footer)",
        ...(hideTopBorder ? {} : { borderColor: "var(--border-default)" }),
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Brand col */}
          <div className="md:col-span-2 flex flex-col gap-[22.75px]">
            <p
              className="font-bold text-[20px] tracking-[-0.025em] leading-[1.4]"
              style={{ color: "var(--text-primary)" }}
            >
              Rachel Pham
            </p>
            <p
              className="text-[14px] leading-[22.75px] max-w-[320px]"
              style={{ color: "var(--text-muted)" }}
            >
              A designer passionate about creating designs centered around
              thoughtful user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <p
              className="font-bold text-[11px] tracking-[1.1px] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Work"
                        ? "/#work"
                        : `/${item.toLowerCase()}`
                    }
                    className="text-[13px] leading-[19.5px] transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <p
              className="font-bold text-[11px] tracking-[1.1px] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              Socials
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] leading-[19.5px] transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <p
              className="font-bold text-[11px] tracking-[1.1px] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <span
                  className="text-[13px] leading-[19.5px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Email
                </span>
              </li>
              <li>
                <a
                  href="mailto:rachelphamdesign@gmail.com"
                  className="text-[13px] leading-[19.5px] underline transition-opacity hover:opacity-70"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  rachelphamdesign@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex items-center justify-between pt-8 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-[12px] leading-[18px]" style={{ color: "var(--text-secondary)" }}>
            Copyright © 2026 Rachel Pham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
