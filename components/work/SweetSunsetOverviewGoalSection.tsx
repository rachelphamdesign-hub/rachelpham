/**
 * Figma 337:24595 — Overview + Goal (bordered band, centered column).
 */
export function SweetSunsetOverviewGoalSection() {
  return (
    <section
      className="border-y border-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-[100px] lg:pb-[161px] lg:pt-[131px]"
      style={{
        background: "var(--bg-surface)",
        borderColor: "rgba(210, 210, 215, 0.3)",
      }}
    >
      <div className="mx-auto w-full max-w-[1080px] text-left">
        <h2 className="text-[36px] font-semibold leading-9 tracking-[-0.6px] text-[var(--text-primary)]">
          Overview
        </h2>
        <div className="h-9 shrink-0" aria-hidden />
        <p className="text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
          Sweet Sunset is a fresh take on the café experience in Toronto, bringing together the bold, familiar
          taste of Vietnamese coffee with the soft, comforting breakfast culture of Da Lat. The space is designed
          to feel warm and inviting, but still modern and visually appealing—something that naturally draws in a
          younger crowd. It&apos;s a place where people can slow down, enjoy something different, and feel
          connected to both culture and community without it feeling too traditional or formal.
        </p>

        <div className="h-12 shrink-0 sm:h-16" aria-hidden />

        <h2 className="text-[36px] font-semibold leading-9 tracking-[-0.6px] text-[var(--text-primary)]">Goal</h2>
        <div className="h-9 shrink-0" aria-hidden />
        <p className="text-[20px] font-normal leading-[32.5px] text-[var(--text-secondary)]">
          The goal is to shape Sweet Sunset into more than just a coffee shop—it&apos;s about building a brand
          people remember and want to come back to. By focusing on strong visuals, a clear identity, and a unique
          menu, the aim is to create a space that stands out in Toronto&apos;s café scene while still feeling
          approachable, relatable, and easy to love.
        </p>
      </div>
    </section>
  );
}
