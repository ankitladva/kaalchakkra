"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  whatsapp?: boolean;
  customMessage?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  whatsapp = false,
  customMessage,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-none";

  const variants = {
    primary:
      "bg-foreground text-background hover:opacity-90 transition-all",
    secondary:
      "bg-foreground/10 text-foreground hover:bg-foreground/20 border border-border",
    outline:
      "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {whatsapp && <MessageCircle size={size === "lg" ? 22 : 18} />}
      {children}
    </>
  );

  const buttonLink = whatsapp ? getWhatsAppLink(customMessage) : href;

  if (buttonLink) {
    return (
      <motion.a
        href={buttonLink}
        target={whatsapp ? "_blank" : undefined}
        rel={whatsapp ? "noopener noreferrer" : undefined}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

