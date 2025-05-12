"use client";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/utils/constants";
import { ReactNode } from "react";

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const directionVariants = {
  up: { initial: { y: 20 }, animate: { y: 0 } },
  down: { initial: { y: -20 }, animate: { y: 0 } },
  left: { initial: { x: 20 }, animate: { x: 0 } },
  right: { initial: { x: -20 }, animate: { x: 0 } },
};

export function FadeSection({
  children,
  className,
  direction = "up",
  delay = 0
}: FadeSectionProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...variants.initial }}
      whileInView={{ opacity: 1, ...variants.animate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        ...ANIMATION_CONFIG,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.95,
        },
      }}
    >
      {children}
    </motion.div>
  );
}