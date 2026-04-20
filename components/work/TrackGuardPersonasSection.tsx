import Image from "next/image";

const imgZainy = "https://www.figma.com/api/mcp/asset/b9549995-0109-46e2-96f9-d91a3e92dd3d";
const imgEric = "https://www.figma.com/api/mcp/asset/3bee738d-e8a3-4cc0-ae57-afec4b76761d";

type Motivation = { label: string; fillPct: number };

type Persona = {
  name: string;
  role: string;
  image: string;
  age: string;
  location: string;
  techLiteracy: string;
  bio: string;
  motivations: Motivation[];
  goals: string[];
  frustrations: string[];
  personality: string[];
  interests: string[];
};

const PERSONAS: Persona[] = [
  {
    name: "Zainy",
    role: "Student",
    image: imgZainy,
    age: "21",
    location: "Hamilton",
    techLiteracy: "Moderate",
    bio: "Zainy, a 21-year-old graphic designer and videographer, is a graphic designer inspired by great designs and loves to create new ones. She is also a talented videographer, taking photos and videos.",
    motivations: [
      { label: "Comfort", fillPct: 81.67 },
      { label: "Convenience", fillPct: 42.92 },
      { label: "Price", fillPct: 85 },
    ],
    goals: ["Instant visual access", "Secure transfers"],
    frustrations: ["Someone lies or scams her", "Someone being rude to her"],
    personality: ["Supportive", "Independent", "Artistic"],
    interests: ["Art Curation", "Minimalism", "Tech-Integrated Fashion"],
  },
  {
    name: "Eric",
    role: "Engineer",
    image: imgEric,
    age: "30",
    location: "Hamilton",
    techLiteracy: "Expert",
    bio: "Eric, a 30-year-old engineer and car enthusiast, enjoys car shows, racetracks, and DIY projects. He dreams of owning a classic Porsche and loves the thrill of driving.",
    motivations: [
      { label: "Passionate", fillPct: 22.92 },
      { label: "Community and Connection", fillPct: 53.75 },
      { label: "Personal Achievement", fillPct: 85 },
    ],
    goals: ["Loves car upgrades but fears theft.", "Avoids events due to security concerns."],
    frustrations: ["Hesitant to invest due to theft.", "Limited time and security concerns."],
    personality: ["Passionate about cars and DIY projects.", "Enjoys connecting with enthusiasts."],
    interests: ["Muscle cars", "Sports cars", "Electric vehicles"],
  },
];

const FRICTION = [
  {
    title: "Limited Control",
    pill: "Low friction",
    pillClass: "bg-[#dcfce7] text-[#28c840] dark:bg-green-500/15 dark:text-[#4ade80]",
    pillWeight: "font-bold",
  },
  {
    title: "False Alarms",
    pill: "Medium friction",
    pillClass: "bg-[#fefce8] text-[#ca8a04] dark:bg-amber-500/12 dark:text-[#fbbf24]",
    pillWeight: "font-semibold",
  },
  {
    title: "Delayed Alerts",
    pill: "High friction",
    pillClass: "bg-[#fef2f2] text-[#dc2626] dark:bg-red-500/12 dark:text-[#f87171]",
    pillWeight: "font-normal",
  },
];

function MotivationBar({ label, fillPct }: Motivation) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[11px] font-normal uppercase tracking-[-0.55px] text-[rgba(134,134,139,0.6)] dark:text-[var(--text-secondary)]">
        {label}
      </p>
      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-[rgba(210,210,215,0.2)] dark:bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[rgba(29,29,31,0.4)] dark:bg-white/45"
          style={{ width: `${fillPct}%` }}
        />
      </div>
    </div>
  );
}

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article
      className="w-full overflow-hidden rounded-[40px] border border-[var(--border-default)]"
      style={{
        background: "var(--bg-surface)",
        boxShadow: "var(--shadow-card-deep)",
      }}
    >
      <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[260px_1fr] lg:gap-10 lg:p-14">
        {/* Left profile */}
        <div className="flex flex-col items-center lg:items-stretch">
          <div className="mb-8 flex justify-center lg:justify-start">
            <div
              className="size-[160px] overflow-hidden rounded-[24px] p-1 shadow-[0px_0px_0px_1px_rgba(210,210,215,0.3)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.12)]"
              style={{ background: "rgba(251,251,253,0.5)" }}
            >
              <div className="relative size-full overflow-hidden rounded-[16px]">
                <Image
                  src={persona.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>
          <div className="mb-8 text-center lg:text-left">
            <h3 className="text-[24px] font-bold tracking-[-0.6px] text-[var(--text-primary)]">{persona.name}</h3>
            <p className="text-[13px] font-normal uppercase tracking-[0.325px] text-[var(--text-secondary)]">
              {persona.role}
            </p>
          </div>
          <div className="w-full border-t border-[rgba(210,210,215,0.2)] pt-8 dark:border-white/10">
            <DemographicRow label="Age" value={persona.age} />
            <DemographicRow label="Location" value={persona.location} />
            <div className="flex items-start justify-between py-1">
              <span className="text-[12px] text-[var(--text-secondary)]">Tech Literacy</span>
              <span className="text-[12px] text-[var(--text-primary)]">{persona.techLiteracy}</span>
            </div>
          </div>
        </div>

        {/* Right detail */}
        <div className="flex min-w-0 flex-col gap-10 lg:gap-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h4 className="border-b border-[var(--border-default)] pb-[13px] text-[11px] font-normal uppercase tracking-[2.2px] text-[var(--text-primary)]">
                Bio
              </h4>
              <p className="pt-6 text-[15px] font-normal leading-[24.38px] text-[var(--text-secondary)]">{persona.bio}</p>
            </div>
            <div>
              <h4 className="border-b border-[var(--border-default)] pb-[13px] text-[11px] font-normal uppercase tracking-[2.2px] text-[var(--text-primary)]">
                Motivation
              </h4>
              <div className="flex flex-col gap-5 pt-6">
                {persona.motivations.map((m) => (
                  <MotivationBar key={m.label} {...m} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[2.2px] text-[var(--link-bright)]">Goals</p>
              <ul className="flex flex-col gap-[11px]">
                {persona.goals.map((g) => (
                  <li key={g} className="text-[13px] font-normal leading-[17.88px] text-[var(--text-primary)]">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[2.2px] text-[#ef4444]">Frustrations</p>
              <ul className="flex flex-col gap-[11px]">
                {persona.frustrations.map((f) => (
                  <li key={f} className="text-[13px] font-normal leading-[17.88px] text-[var(--text-primary)]">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[2.2px] text-[var(--text-secondary)]">
                Personality
              </p>
              <ul className="flex flex-col gap-[11px]">
                {persona.personality.map((p) => (
                  <li key={p} className="text-[13px] font-normal leading-[17.88px] text-[var(--text-primary)]">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[2.2px] text-[var(--text-secondary)]">
                Interests
              </p>
              <ul className="flex flex-col gap-[11px]">
                {persona.interests.map((i) => (
                  <li key={i} className="text-[13px] font-normal leading-[17.88px] text-[var(--text-primary)]">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function DemographicRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between border-b border-[rgba(210,210,215,0.1)] py-1 dark:border-white/8">
      <span className="text-[12px] text-[var(--text-secondary)]">{label}</span>
      <span className="text-[12px] text-[var(--text-primary)]">{value}</span>
    </div>
  );
}

/**
 * Figma 235:15153 — User Personas & Pain Points + User Journey Friction Points.
 */
export function TrackGuardPersonasSection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-16 md:gap-20">
        <h2 className="w-full text-left text-[40px] font-semibold leading-[1.1] tracking-[-0.9px] text-[var(--text-primary)] sm:text-[48px]">
          User Personas &amp; Pain Points
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {PERSONAS.map((p) => (
            <PersonaCard key={p.name} persona={p} />
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-[896px] flex-col items-center gap-8 pt-2 md:pt-8">
          <h3 className="text-center text-[16px] font-semibold leading-6 text-[var(--text-primary)]">
            User Journey Friction Points
          </h3>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {FRICTION.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center justify-between rounded-[24px] border border-[var(--border-default)] px-6 py-6"
                style={{
                  background: "var(--bg-surface)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <p className="pb-4 text-center text-[14px] font-normal leading-5 text-[var(--text-primary)]">{f.title}</p>
                <span
                  className={`rounded-full px-3 py-1 text-[9px] tracking-[0.9px] ${f.pillClass} ${f.pillWeight}`}
                >
                  {f.pill.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
