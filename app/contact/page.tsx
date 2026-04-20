import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const socialLinks = [
  {
    platform: "LinkedIn",
    handle: "Nhi (Rachel) Pham",
    href: "https://www.linkedin.com/in/nhiphamdesign/",
  },
  {
    platform: "Dribbble",
    handle: "rachelphamdesign",
    href: "https://dribbble.com/rachelphamdesign",
  },
  {
    platform: "GitHub",
    handle: "rachelphamdesign-hub",
    href: "https://github.com/rachelphamdesign-hub",
  },
  {
    platform: "Behance",
    handle: "nhipham96",
    href: "https://www.behance.net/nhipham96",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main
        className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32 sm:pb-24 lg:pb-28"
        style={{ background: "var(--bg-page)" }}
      >
        {/* Decorative blurs */}
        <div
          className="fixed top-[20%] left-[10%] w-96 h-96 rounded-full opacity-30 pointer-events-none blur-[80px]"
          style={{ background: "rgba(0,88,188,0.08)" }}
          aria-hidden="true"
        />
        <div
          className="fixed bottom-[20%] right-[10%] w-96 h-96 rounded-full opacity-30 pointer-events-none blur-[80px]"
          style={{ background: "rgba(76,74,202,0.08)" }}
          aria-hidden="true"
        />

        {/* macOS Window Card */}
        <ScrollReveal variant="media" className="relative z-10 w-full max-w-[896px]">
          {/* Card wrapper */}
          <div
            className="contact-card relative rounded-[39px] overflow-hidden border transition-colors"
            style={{
              background: "var(--bg-surface)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "var(--border-strong)",
              boxShadow:
                "0px 50px 100px -20px rgba(0,0,0,0.08), 0px 30px 60px -30px rgba(0,0,0,0.1)",
            }}
          >
            {/* Window title bar */}
            <div
              className="window-bar flex items-center justify-between px-5 py-4 border-b transition-colors"
              style={{
                background: "var(--bg-footer)",
                borderColor: "var(--border-default)",
              }}
            >
              {/* Traffic lights */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              {/* Title */}
              <span
                className="text-[11px] tracking-[0.55px] uppercase"
                style={{ color: "var(--text-subtle)" }}
              >
                Contact.app
              </span>
              <div className="w-[40px]" />
            </div>

            {/* Window content */}
            <div className="p-16 sm:p-20 flex flex-col gap-12">
              {/* Availability badge */}
              <ScrollReveal className="self-start">
                <div
                  className="inline-flex items-center gap-3 px-[17px] py-[7px] rounded-full border shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                  style={{
                    background: "var(--bg-page)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span
                    className="text-[12px] tracking-[-0.3px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Available for Job
                  </span>
                </div>
              </ScrollReveal>

              {/* Heading */}
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-6">
                  <h1
                    className="text-[64px] sm:text-[72px] font-normal leading-[1] tracking-[-0.05em]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Let&apos;s connect.
                  </h1>
                  <p
                    className="text-[20px] leading-[1.4]"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Whether you have a project in mind or just want to
                    <br className="hidden sm:block" />
                    say hi, my inbox is always open.
                  </p>
                </div>
              </ScrollReveal>

              {/* Email CTA */}
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[16px] tracking-[3.2px] uppercase"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    Direct Email
                  </p>
                  <a
                    href="mailto:rachelphamdesign@gmail.com"
                    className="text-[28px] sm:text-[36px] font-medium underline leading-[1.1] transition-opacity hover:opacity-70"
                    style={{
                      color: "var(--accent-blue)",
                      textDecorationColor: "rgba(0,88,188,0.2)",
                    }}
                  >
                    rachelphamdesign@gmail.com
                  </a>
                </div>
              </ScrollReveal>

              {/* Social links grid */}
              <ScrollReveal delay={0.3}>
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  {socialLinks.map((link) => (
                    <div key={link.platform} className="flex flex-col gap-4">
                      <p
                        className="text-[12px] tracking-[1.2px] uppercase"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.platform}
                      </p>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[16px] transition-opacity hover:opacity-70 group"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.handle}
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 8L8 1M8 1H3M8 1V6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
