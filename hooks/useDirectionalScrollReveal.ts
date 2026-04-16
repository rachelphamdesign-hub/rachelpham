"use client";

import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef } from "react";
import { APPLE_EASE, SCROLL_REVEAL_DURATION, SCROLL_VIEWPORT } from "@/lib/motionPresets";
import {
  ensureScrollDirectionListener,
  getVerticalScrollDirection,
} from "@/lib/scrollDirectionStore";

type Variant = "text" | "media";

const textScale = 0.98;
const mediaScale = 0.985;

function initialForVariant(variant: Variant) {
  return {
    opacity: 0,
    y: 20,
    scale: variant === "media" ? mediaScale : textScale,
  } as const;
}

/**
 * Scroll-triggered reveal (once) with entry offset from scroll direction:
 * scrolling down → enter from below (+y); scrolling up → enter from above (-y).
 */
export function useDirectionalScrollReveal(options: {
  variant: Variant;
  delay?: number;
}) {
  const { variant, delay = 0 } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, SCROLL_VIEWPORT);
  const controls = useAnimation();
  const played = useRef(false);
  const reduceMotion = useReducedMotion();

  const duration =
    variant === "media" ? SCROLL_REVEAL_DURATION.media : SCROLL_REVEAL_DURATION.text;
  const scale = variant === "media" ? mediaScale : textScale;
  const initialHidden = useMemo(() => initialForVariant(variant), [variant]);

  useLayoutEffect(() => {
    ensureScrollDirectionListener();
  }, []);

  useLayoutEffect(() => {
    if (!inView || played.current) return;
    played.current = true;

    if (reduceMotion) {
      void controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.2 },
      });
      return;
    }

    const fromY = getVerticalScrollDirection() === "down" ? 20 : -20;
    controls.set({ opacity: 0, y: fromY, scale });
    void controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: APPLE_EASE },
    });
  }, [inView, controls, reduceMotion, duration, delay, scale]);

  return {
    ref,
    controls,
    /** Placeholder before controls run; keeps first paint hidden. */
    initialHidden,
  };
}
