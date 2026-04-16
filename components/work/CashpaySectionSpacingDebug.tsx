"use client";

import { useEffect } from "react";

// #region agent log
const INGEST = "http://127.0.0.1:7566/ingest/e302d3ad-8da4-4a7a-ae30-fc14e8ed0b9f";
const SESSION = "bc26f9";

function send(payload: Record<string, unknown>) {
  fetch(INGEST, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": SESSION },
    body: JSON.stringify({ sessionId: SESSION, timestamp: Date.now(), ...payload }),
  }).catch(() => {});
}
// #endregion

/**
 * One-shot layout probe for CashPay /work/cashpay — measures vertical gaps between
 * hero and case-study sections (hypotheses H1–H2) and between consecutive sections (H1).
 */
export function CashpaySectionSpacingDebug() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-cashpay-debug-hero]");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-cashpay-debug-section]"));
    const emailStack = document.querySelector<HTMLElement>("[data-cashpay-debug-email-stack]");

    const heroRect = hero?.getBoundingClientRect();
    const firstSec = sections[0]?.getBoundingClientRect();

    const sectionRects = sections.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        heading: el.getAttribute("data-cashpay-section-heading") ?? "?",
        top: Math.round(r.top),
        bottom: Math.round(r.bottom),
        height: Math.round(r.height),
      };
    });

    const interSectionGaps: { from: string; to: string; gapPx: number }[] = [];
    for (let i = 1; i < sections.length; i++) {
      const prev = sections[i - 1]!.getBoundingClientRect();
      const next = sections[i]!.getBoundingClientRect();
      interSectionGaps.push({
        from: sections[i - 1]!.getAttribute("data-cashpay-section-heading") ?? "?",
        to: sections[i]!.getAttribute("data-cashpay-section-heading") ?? "?",
        gapPx: Math.round(next.top - prev.bottom),
      });
    }

    const heroToFirst =
      heroRect && firstSec ? Math.round(firstSec.top - heroRect.bottom) : null;

    const emailStackRect = emailStack?.getBoundingClientRect();
    const emailStackH = emailStackRect ? Math.round(emailStackRect.height) : null;

    send({
      hypothesisId: "H1-H2",
      location: "CashpaySectionSpacingDebug.tsx:measure",
      message: "cashpay vertical spacing probe",
      data: {
        heroToFirstSectionGapPx: heroToFirst,
        interSectionGaps,
        sectionRects,
        emailStackHeightPx: emailStackH,
        sectionCount: sections.length,
        path: typeof window !== "undefined" ? window.location.pathname : "",
      },
      runId: "post-fix",
    });
  }, []);

  return null;
}
