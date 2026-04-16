"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useDirectionalScrollReveal } from "@/hooks/useDirectionalScrollReveal";

export type ScrollRevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "animate" | "transition" | "ref"
> & {
  /** Extra delay after scroll trigger (seconds). Use ~0.12 between grouped siblings. */
  delay?: number;
  /** Slightly longer motion + gentler scale for imagery. */
  variant?: "text" | "media";
};

/**
 * Section / block scroll reveal — Apple-like, once per element, with entry offset
 * from scroll direction (down: from below, up: from above).
 */
export function ScrollReveal({
  delay = 0,
  variant = "text",
  children,
  className,
  ...rest
}: ScrollRevealProps) {
  const { ref, controls, initialHidden } = useDirectionalScrollReveal({
    variant,
    delay,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialHidden}
      animate={controls}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
