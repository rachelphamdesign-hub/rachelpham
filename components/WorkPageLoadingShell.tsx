import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type WorkPageLoadingShellProps = {
  title: string;
  subtitle?: string;
};

export function WorkPageLoadingShell({ title, subtitle }: WorkPageLoadingShellProps) {
  return (
    <>
      <Header />
      <main className="pt-32" style={{ background: "var(--bg-page)" }} aria-busy="true" aria-live="polite">
        <section className="px-6 pb-14">
          <div className="mx-auto w-full max-w-[980px]">
            <div className="flex animate-pulse flex-col items-center gap-8 text-center">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-[17px] py-[7px] shadow-[var(--nav-shadow)]"
                style={{
                  background: "var(--pill-badge-bg)",
                  borderColor: "var(--border-nav)",
                }}
              >
                <span className="size-2 rounded-full" style={{ background: "var(--accent-action)" }} aria-hidden />
                <span className="text-[12px] font-bold uppercase tracking-[1.2px]" style={{ color: "var(--text-primary)" }}>
                  Loading
                </span>
              </div>

              <div className="space-y-3">
                <h1
                  className="text-[40px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[54px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h1>
                <p className="text-[18px] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                  {subtitle ?? "Preparing content..."}
                </p>
              </div>
            </div>

            <div
              className="mt-10 h-[min(47vw,460px)] w-full animate-pulse rounded-[56px]"
              style={{
                background: "var(--bg-surface)",
                boxShadow: "var(--shadow-hero-media)",
              }}
            />

            <div className="mx-auto mt-10 grid max-w-[860px] grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-16 animate-pulse rounded-2xl"
                  style={{ background: "var(--pill-badge-bg)" }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
