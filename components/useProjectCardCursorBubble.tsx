"use client";

import { useCallback } from "react";
import { motion, useSpring } from "framer-motion";

/** Fixed offset from cursor (px): to the right; bubble vertically centered on cursor. */
const OFFSET_X = 18;
const POSITION_SPRING = { stiffness: 280, damping: 32, mass: 0.28 };
const OPACITY_SPRING = { stiffness: 260, damping: 30 };

export type ProjectCardCursorBubbleApi = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  bubble: React.ReactNode;
};

export type ProjectCardCursorBubbleOptions = {
  /** Bubble text (default: featured-card copy). */
  label?: string;
};

export function useProjectCardCursorBubble(
  options?: ProjectCardCursorBubbleOptions,
): ProjectCardCursorBubbleApi {
  const label = options?.label ?? "View Project";
  const x = useSpring(0, POSITION_SPRING);
  const y = useSpring(0, POSITION_SPRING);
  const opacity = useSpring(0, OPACITY_SPRING);

  const moveTo = useCallback(
    (clientX: number, clientY: number) => {
      x.set(clientX + OFFSET_X);
      y.set(clientY);
    },
    [x, y],
  );

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      opacity.set(1);
      moveTo(e.clientX, e.clientY);
    },
    [moveTo, opacity],
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      moveTo(e.clientX, e.clientY);
    },
    [moveTo],
  );

  const onMouseLeave = useCallback(() => {
    opacity.set(0);
  }, [opacity]);

  const bubble = (
    <motion.span
      aria-hidden
      className="pointer-events-none fixed z-[200] -translate-y-1/2 select-none whitespace-nowrap rounded-full px-[18px] py-[10px] text-[13px] font-medium shadow-[0_8px_28px_rgba(0,0,0,0.2)] will-change-[transform,opacity]"
      style={{
        left: x,
        top: y,
        opacity,
        background: "var(--btn-primary-bg)",
        color: "var(--btn-primary-text)",
      }}
    >
      {label}
    </motion.span>
  );

  return {
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    bubble,
  };
}
