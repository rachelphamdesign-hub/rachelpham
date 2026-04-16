"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useDirectionalScrollReveal } from "@/hooks/useDirectionalScrollReveal";

export function RevealMedia({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const { ref, controls, initialHidden } = useDirectionalScrollReveal({
    variant: "media",
    delay,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialHidden}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export function RevealCopy({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const { ref, controls, initialHidden } = useDirectionalScrollReveal({
    variant: "text",
    delay,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialHidden}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
