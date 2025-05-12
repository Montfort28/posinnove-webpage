"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useResponsive } from "@/hooks/useResponsive";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "filled";
  animate?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className, 
  variant = "default",
  animate = true,
  href,
  onClick 
}: CardProps) => {
  const { isBelow } = useResponsive();
  const isMobile = isBelow('md');

  const variantStyles = {
    default: "bg-white shadow-md",
    outline: "bg-white border border-gray-200",
    filled: "bg-gray-50",
  };

  const Component = href ? 'a' : onClick ? 'button' : 'div';
  const interactiveProps = href 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : onClick 
    ? { onClick, type: "button" as "button", } 
    : {};

  const content = (
    <Component
      className={clsx(
        "rounded-xl p-4 md:p-6 transition-all duration-300",
        variantStyles[variant],
        isMobile ? "hover:shadow-lg" : "hover:scale-[1.02] hover:shadow-lg",
        className
      )}
      {...interactiveProps}
    >
      {children}
    </Component>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {content}
    </motion.div>
  );
};