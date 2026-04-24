"use client";

import Image from "next/image";
import { cashpayInsetX } from "@/lib/cashpaySpacing";
import { trackguardIcon } from "@/lib/trackguardIcons";

type HowItWorksCard = {
  title: string;
  items: string[];
  iconSrc: string;
  iconAlt: string;
};

const HOW_IT_WORKS_CARDS: HowItWorksCard[] = [
  {
    title: "Smart Theft Alerts",
    items: ["Smart Theft Alerts", "Location-Based Notifications", "Automatic Picture Capture"],
    iconSrc: trackguardIcon.howSmartAlerts,
    iconAlt: "Location pin icon",
  },
  {
    title: "Automatic Theft Defense",
    items: ["Automatic Theft Defense", "Secure Ownership with Blockchain", "Community Alerts"],
    iconSrc: trackguardIcon.howAutoDefense,
    iconAlt: "Shield icon",
  },
  {
    title: "Prevention & Monitoring",
    items: ["Biometric Car Locking", "Interior Monitoring", "Theft Prevention Tips"],
    iconSrc: trackguardIcon.howPrevention,
    iconAlt: "Eye icon",
  },
];

export function TrackGuardHowItWorksSection() {
  return (
    <section
      className="relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className={`mx-auto w-full max-w-[1120px] ${cashpayInsetX}`}>
        <h3
          className="text-center text-[38px] font-semibold tracking-[-1px] text-[var(--text-primary)] sm:text-[44px] lg:text-[48px]"
        >
          How TrackGuard Works?
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {HOW_IT_WORKS_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[40px] border p-8 pb-7 text-center shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.04),0px_2px_8px_-1px_rgba(0,0,0,0.02)]"
              style={{
                background: "var(--bg-page)",
                borderColor: "rgba(210, 210, 215, 0.4)",
              }}
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,29,31,0.05)]">
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </div>

              <h4 className="text-[18px] font-semibold tracking-[-0.45px] text-[var(--text-primary)]">
                <span className="inline-block max-w-[260px] leading-[28px]">{card.title}</span>
              </h4>

              <ul className="mt-3 flex flex-col">
                {card.items.map((item, idx) => (
                  <li
                    key={item}
                    className={`py-[10px] text-[13px] leading-[19.5px] text-[var(--text-secondary)] ${
                      idx < card.items.length - 1 ? "border-b" : ""
                    }`}
                    style={{ borderColor: "rgba(210, 210, 215, 0.2)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
