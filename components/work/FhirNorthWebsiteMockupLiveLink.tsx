"use client";

import { useCallback, useState } from "react";

const FHIR_NORTH_LIVE_URL = "https://fhirnorth.mohawkcollege.ca/" as const;
const BUBBLE_OFFSET_X = 18;

type Props = {
  imageSrc: string;
  imageAlt: string;
};

/**
 * Laptop website mockup — opens the live FHIR North site with a “View Live Website” hover bubble.
 */
export function FhirNorthWebsiteMockupLiveLink({ imageSrc, imageAlt }: Props) {
  const [bubble, setBubble] = useState({ show: false, x: 0, y: 0 });

  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    setBubble({ show: true, x: e.clientX, y: e.clientY });
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    setBubble((prev) =>
      prev.show ? { show: true, x: e.clientX, y: e.clientY } : prev,
    );
  }, []);

  const onMouseLeave = useCallback(() => {
    setBubble((prev) => ({ ...prev, show: false }));
  }, []);

  return (
    <div className="relative z-10">
      <a
        href={FHIR_NORTH_LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`block overflow-hidden rounded-[24px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0px_24px_56px_0px_rgba(0,0,0,0.12)] dark:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.35)] dark:hover:shadow-[0px_24px_56px_0px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-action)] ${
          bubble.show ? "cursor-none" : "cursor-pointer"
        }`}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        aria-label="Open the FHIR North live conference website in a new tab"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Figma MCP export */}
        <img
          alt={imageAlt}
          src={imageSrc}
          className="pointer-events-none block h-auto w-full select-none"
          draggable={false}
        />
      </a>
      {bubble.show ? (
        <span
          aria-hidden
          className="pointer-events-none fixed z-[10000] select-none whitespace-nowrap rounded-full px-[18px] py-[10px] text-[13px] font-medium shadow-[0_8px_28px_rgba(0,0,0,0.2)]"
          style={{
            left: bubble.x + BUBBLE_OFFSET_X,
            top: bubble.y,
            transform: "translateY(-50%)",
            background: "var(--btn-primary-bg)",
            color: "var(--btn-primary-text)",
          }}
        >
          View Live Website
        </span>
      ) : null}
    </div>
  );
}
