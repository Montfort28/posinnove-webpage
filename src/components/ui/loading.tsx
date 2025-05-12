"use client";
import { motion } from "framer-motion";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "white";
}

export function Loading({ size = "md", color = "blue" }: LoadingProps) {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorMap = {
    blue: "border-blue-600 border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`${sizeMap[size]} ${colorMap[color]} border-2 rounded-full animate-spin`}
    />
  );
}

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Loading size="lg" />
    </div>
  );
}