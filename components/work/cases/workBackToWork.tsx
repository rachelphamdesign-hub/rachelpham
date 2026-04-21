import Link from "next/link";

export function WorkBackToWork({
  variant = "default",
}: {
  /** Surface background for Ideas / FHIR / Vot footer alignment */
  variant?: "default" | "surface";
}) {
  return (
    <section
      className="py-20 px-6 text-center"
      style={variant === "surface" ? { background: "var(--bg-surface)" } : undefined}
    >
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-medium text-[14px] border transition-colors hover:opacity-80"
        style={{
          color: "var(--text-primary)",
          borderColor: "var(--border-default)",
          background: "var(--bg-surface)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M14 8H2M2 8L8 2M2 8L8 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to all work
      </Link>
    </section>
  );
}
