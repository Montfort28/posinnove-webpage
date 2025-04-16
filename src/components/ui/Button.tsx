"use client";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

type MotionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

interface ButtonProps extends MotionButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex items-center justify-center";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={clsx(baseStyle, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
