const HEADERS = ["Stage", "User Action", "Thoughts/Feelings", "Touchpoints", "Opportunities"] as const;

type JourneyRow = {
  stage: string;
  userAction: string;
  thoughts: string;
  touchpoints: string;
  opportunities: string;
};

const JOURNEY_ROWS: JourneyRow[] = [
  {
    stage: "Awareness",
    userAction:
      "User hears about TrackGuard from a friend, online ad, or news about increasing car theft.",
    thoughts: '"This sounds like something I need for my car\'s safety."',
    touchpoints: "Social media posts, ads, app store search.",
    opportunities: "Leverage targeted ads, testimonials, and real success stories to build trust.",
  },
  {
    stage: "Download",
    userAction: "User visits the App Store, reads reviews, and downloads TrackGuard.",
    thoughts: '"Looks like this app has great features. Let me try it."',
    touchpoints: "App Store listing, reviews, ratings, and screenshots.",
    opportunities: "Optimize App Store page with engaging descriptions and screenshots.",
  },
  {
    stage: "Onboarding",
    userAction:
      "User goes through onboarding to understand features and set up their profile.",
    thoughts: '"Okay, this app is easy to understand. It seems useful!"',
    touchpoints: "Get Started screen, onboarding slides, CTAs.",
    opportunities: "Ensure onboarding flows are simple, clear, and visually appealing.",
  },
  {
    stage: "Registration",
    userAction: "User signs up with email or logs in with an existing account.",
    thoughts: '"This was quick and easy to set up."',
    touchpoints: "Login/Sign Up screen with clear forms and social login.",
    opportunities: "Provide password recovery and autofill options to simplify registration.",
  },
  {
    stage: "Setup",
    userAction:
      "User enters car details (make, model, VIN, license plate) and connects GPS tracking.",
    thoughts: '"I feel more secure knowing my car is now being tracked."',
    touchpoints: "Home page, Setup Wizard, Car Details page.",
    opportunities:
      'Provide visual confirmation (e.g., "Setup Complete!") to reassure the user.',
  },
  {
    stage: "Daily\nMonitoring",
    userAction:
      "User regularly checks the app for updates or uses the live tracking feature.",
    thoughts: '"It\'s great to see where my car is anytime. I feel in control."',
    touchpoints: "Home page, live GPS tracking feature.",
    opportunities: "Show daily/weekly car activity summaries to keep the user engaged.",
  },
  {
    stage: "Alert\nNotification",
    userAction:
      "User receives a theft alert from the app (e.g., suspicious activity detected).",
    thoughts: '"Thank goodness I have this app! I can act immediately."',
    touchpoints: "Push notifications, in-app alert screen, contact options.",
    opportunities:
      "Provide direct links to call authorities or insurance companies from the app.",
  },
  {
    stage: "Resolution",
    userAction:
      "User uses the app to recover the stolen car or prevent theft with real-time alerts.",
    thoughts: '"This app saved my car. I\'m so glad I downloaded it."',
    touchpoints: "Incident report form, GPS tracking to locate the car.",
    opportunities: "Include features to share success stories to build social proof and trust.",
  },
  {
    stage: "Retention",
    userAction: "User continues using the app and recommends it to friends and family.",
    thoughts: '"This app is amazing. I want others to know about it."',
    touchpoints: "In-app referral feature, social media sharing.",
    opportunities: "Offer incentives for referrals or leaving positive reviews.",
  },
];

/**
 * Figma 244:17734 (heading) + 244:17737 (intro) + 244:18295 (journey map grid).
 */
export function TrackGuardUserJourneySection() {
  return (
    <section
      className="border-b border-[var(--border-default)] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-[40px] font-semibold leading-none tracking-[-1.2px] text-[var(--text-primary)] sm:text-[48px] sm:leading-[48px]">
          User Journey
        </h2>
        <p className="mt-6 text-[18px] font-normal leading-[29.25px] text-[var(--text-secondary)]">
          The journey map shows how users discover TrackGuard, set up their vehicle, and monitor it through
          real-time alerts. If theft occurs, they activate safety features, report the incident, and support
          recovery ending with a resolved situation and increased trust in the app.
        </p>

        <div className="mt-12 overflow-x-auto rounded-[40px] border border-[var(--border-default)] shadow-[var(--shadow-card-soft)] [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[800px] table-fixed border-collapse text-left md:min-w-0">
            <colgroup>
              <col className="w-[14%]" />
              <col className="w-[21.5%]" />
              <col className="w-[21.5%]" />
              <col className="w-[21.5%]" />
              <col className="w-[21.5%]" />
            </colgroup>
            <thead>
              <tr>
                {HEADERS.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border border-[var(--border-default)] bg-black px-6 py-6 align-middle text-center text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {JOURNEY_ROWS.map((row) => (
                <tr key={row.stage}>
                  <td className="border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-6 align-top">
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex max-w-[9rem] items-center justify-center rounded-[40px] bg-[#638ef9] px-3 py-2 text-center text-[11px] font-normal uppercase leading-[16.5px] text-white ${
                          row.stage.includes("\n") ? "whitespace-pre-line" : ""
                        }`}
                      >
                        {row.stage}
                      </span>
                    </div>
                  </td>
                  <td className="border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-6 align-top text-[13px] font-normal leading-[21px] text-[var(--text-secondary)]">
                    {row.userAction}
                  </td>
                  <td className="border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-6 align-top text-[13px] font-normal italic leading-[21px] text-[var(--text-primary)]">
                    {row.thoughts}
                  </td>
                  <td className="border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-6 align-top text-[13px] font-normal leading-[21px] text-[var(--text-secondary)]">
                    {row.touchpoints}
                  </td>
                  <td className="border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-6 align-top text-[13px] font-normal leading-[21px] text-[var(--text-secondary)]">
                    {row.opportunities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
