"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";

interface RevealOnScrollProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, variants = fadeUp, className, delay = 0 }: RevealOnScrollProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
