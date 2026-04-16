import type { Transition } from "framer-motion";

/** Apple-like ease-out (smooth deceleration, minimal overshoot). */
export const APPLE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/** Single trigger per element; start slightly before full visibility for a soft entrance. */
export const SCROLL_VIEWPORT = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.15,
} as const;

/** Durations for scroll reveals (text vs imagery). */
export const SCROLL_REVEAL_DURATION = {
  text: 0.78,
  media: 0.84,
} as const;

const durationText = SCROLL_REVEAL_DURATION.text;
const durationMedia = SCROLL_REVEAL_DURATION.media;

export function scrollRevealTransition(delay = 0): Transition {
  return {
    duration: durationText,
    delay,
    ease: APPLE_EASE,
  };
}

export function scrollRevealMediaTransition(delay = 0): Transition {
  return {
    duration: durationMedia,
    delay,
    ease: APPLE_EASE,
  };
}

export const scrollRevealInitial = {
  opacity: 0,
  y: 20,
  scale: 0.98,
} as const;

export const scrollRevealMediaInitial = {
  opacity: 0,
  y: 20,
  scale: 0.985,
} as const;

export const scrollRevealAnimate = {
  opacity: 1,
  y: 0,
  scale: 1,
} as const;
