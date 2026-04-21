import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AboutBeyondTheScreenSection } from "@/components/about/AboutBeyondTheScreenSection";
import { AboutPageHero } from "@/components/about/AboutPageHero";

const experiences = [
  {
    company: "Mohawk College IDEAWORKS",
    logo: "https://www.figma.com/api/mcp/asset/491f1c8d-a750-436e-84c3-77462f4cab60",
    role: "Web & Graphic Designer",
    period: "November, 2024 — Present",
    description:
      "Turn complex research into clear presentations and interactive H5P modules. Apply AODA, QA testing, and AI-assisted concepting. Collaborate with Healthcare Robotics on assistive tech usability.",
  },
  {
    company: "Sunrise Creative",
    logo: "https://www.figma.com/api/mcp/asset/593438bb-2620-4eb9-a4d5-23aa40d2c1b2",
    role: "Graphic Designer ",
    period: "January — April, 2025",
    description:
      "Developed branding, marketing graphics, and editorial layouts. Redesigned the company website on WordPress and produced materials for the SYS Global Marketing Grant.",
  },
  {
    company: "Websters Shape the Web Inc.",
    logo: "https://www.figma.com/api/mcp/asset/81b4085d-3dc0-46ca-84ee-deac1232b51d",
    role: "UI/UX Designer",
    period: "July — September, 2024",
    description:
      "Created wireframes and high-fidelity interfaces in Figma. Designed UI components and banners, then partnered with developers to deliver responsive digital products.",
  },
];

const designTools = [
  {
    name: "Figma",
    subtitle: "Interface Design",
    icon: "/media/design%20tool/Figma.png",
    iconBg: "#000000",
  },
  {
    name: "Adobe Creative Suite",
    subtitle: "Visual Design",
    icon: "/media/design%20tool/Adobe%20Creative%20Suite.jpeg",
    iconBg: "transparent",
  },
  {
    name: "canva",
    subtitle: "Content Design",
    icon: "/media/design%20tool/Canva.png",
    iconBg: "transparent",
  },
  {
    name: "framer",
    subtitle: "Web Prototyping",
    icon: "/media/design%20tool/Framer.avif",
    iconBg: "#000000",
  },
  {
    name: "HTML/CSS",
    subtitle: "Front-end Styling",
    icon: "/media/design%20tool/HTML%3ACSS.jpg",
    iconBg: "transparent",
  },
  {
    name: "miro",
    subtitle: "Collaboration Boards",
    icon: "/media/design%20tool/miro.png",
    iconBg: "#f8d91a",
  },
];
const methods = [
  "Design Systems",
  "Product Strategy",
  "User Research",
  "Interactive Prototypes",
  "Information Architecture",
  "Visual Storytelling",
];
const aiTools = [
  {
    name: "Google Gemini",
    subtitle: "Idea Generation",
    icon: "/media/design%20tool/gemini.jpeg",
    iconBg: "transparent",
  },
  {
    name: "Midjourney",
    subtitle: "Visual Exploration",
    icon: "https://www.figma.com/api/mcp/asset/70eed263-d259-41c8-bcc0-42f9e4bf3074",
    iconBg: "#000000",
  },
  {
    name: "ChatGPT",
    subtitle: "Strategic Thinking",
    icon: "https://www.figma.com/api/mcp/asset/af704df8-6348-4e80-855a-0dbb94540401",
    iconBg: "transparent",
  },
  {
    name: "Claude",
    subtitle: "Creative Writing",
    icon: "https://www.figma.com/api/mcp/asset/ed9a1a87-dded-41ff-9b0a-d3e18ffeca1c",
    iconBg: "transparent",
  },
  {
    name: "Cursor",
    subtitle: "Code editing",
    icon: "https://www.figma.com/api/mcp/asset/095abf3f-3060-4ad9-8020-cfe0ff879d88",
    iconBg: "#000000",
  },
];

const sectionShell = "mx-auto w-full max-w-[1240px]";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-page)" }}>
        <AboutPageHero />

        <AboutBeyondTheScreenSection />

        {/* Journey / Experience — Figma 36:2929 */}
        <section className="px-6 py-20 sm:py-24 lg:py-28">
          <div className={`${sectionShell} grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-16`}>
            <ScrollReveal className="lg:col-span-4">
              <header className="flex flex-col gap-4 lg:pt-1">
              <span className="text-[10px] font-bold uppercase leading-[15px] tracking-[3px] text-[var(--text-secondary)]">
                Journey
              </span>
              <h2 className="text-[30px] font-semibold leading-[36px] tracking-[-0.75px] text-[var(--text-primary)]">
                Experience
              </h2>
              </header>
            </ScrollReveal>

            <div className="flex flex-col gap-0 lg:col-span-8">
              {experiences.map((exp, index) => (
                <ScrollReveal key={`${exp.company}-${exp.period}`} delay={index * 0.08}>
                  <article className="flex items-start justify-between border-t border-[var(--border-default)] pt-[33px] pb-[33px]">
                    <div className="flex max-w-[560px] items-start gap-6">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-[12px] border border-[var(--border-default)] bg-gradient-to-br from-zinc-100/90 to-zinc-300/45 p-px dark:from-zinc-700/55 dark:to-zinc-900/65">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[20px] font-bold leading-[28px] text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-[14px] font-medium leading-[21px] text-[var(--text-secondary)]">
                          {exp.company}
                        </p>
                        <p className="mt-[11px] max-w-[544px] text-[15px] leading-[24.38px] text-[var(--text-secondary)]">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <span className="pt-1 text-[11px] font-bold leading-[16.5px] tracking-[1.1px] text-[var(--text-secondary)]">
                      {exp.period}
                    </span>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Toolkit — Figma 36:3225 */}
        <section className="px-6 pb-24 pt-6 sm:pb-28 sm:pt-8 lg:pb-32">
          <ScrollReveal
            className={`${sectionShell} rounded-[32px] border border-[var(--border-default)] bg-[var(--pill-badge-bg)] px-6 pb-[96px] pt-[72px] sm:px-8 sm:pt-[88px] lg:px-10 lg:pb-[120px] lg:pt-[97px]`}
            variant="media"
          >
            <header className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase leading-[15px] tracking-[3px] text-[var(--text-secondary)]">
                Abilities
              </span>
              <h2 className="text-[36px] font-semibold leading-[40px] tracking-[-0.9px] text-[var(--text-primary)]">
                Skills &amp; Toolkit
              </h2>
            </header>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-20">
              <div className="flex flex-col gap-8">
                <p className="text-[12px] font-bold uppercase leading-[18px] tracking-[1.2px] text-[var(--text-primary)]">
                  Design Tools
                </p>
                <div className="flex flex-col gap-3">
                  {designTools.map((tool, index) => (
                    <ScrollReveal key={tool.name} delay={index * 0.08}>
                      <div className="flex items-center gap-4 rounded-[16px] border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_72%,transparent)] px-[21px] py-[13px] backdrop-blur-[6px] dark:bg-[color-mix(in_oklab,var(--bg-elevated)_55%,transparent)]">
                        <div
                          className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-[12px]"
                          style={{ background: tool.iconBg }}
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={22}
                            height={22}
                            className="size-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold leading-[13px] text-[var(--text-primary)]">
                            {tool.name}
                          </p>
                          <p className="mt-1 text-[11px] leading-[16.5px] text-[var(--text-secondary)]">
                            {tool.subtitle}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <p className="text-[12px] font-bold uppercase leading-[18px] tracking-[1.2px] text-[var(--text-primary)]">
                  Methods &amp; Competencies
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {methods.map((m) => (
                    <span
                      key={m}
                      className="inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[17px] pb-[9.5px] pt-[8px] text-[13px] font-medium leading-[19.5px] text-[var(--text-secondary)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <p className="text-[12px] font-bold uppercase leading-[18px] tracking-[1.2px] text-[var(--text-primary)]">
                  AI Toolkit
                </p>
                <div className="flex flex-col gap-3">
                  {aiTools.map((tool, index) => (
                    <ScrollReveal key={tool.name} delay={index * 0.08}>
                      <div className="flex items-center gap-4 rounded-[16px] border border-[var(--border-default)] bg-[color-mix(in_oklab,var(--bg-surface)_72%,transparent)] px-[21px] py-[13px] backdrop-blur-[6px] dark:bg-[color-mix(in_oklab,var(--bg-elevated)_55%,transparent)]">
                        <div
                          className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-[12px]"
                          style={{ background: tool.iconBg }}
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={32}
                            height={32}
                            className="size-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold leading-[13px] text-[var(--text-primary)]">
                            {tool.name}
                          </p>
                          <p className="mt-1 text-[11px] leading-[16.5px] text-[var(--text-secondary)]">
                            {tool.subtitle}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
