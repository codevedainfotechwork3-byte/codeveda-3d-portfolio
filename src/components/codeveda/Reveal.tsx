import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const presets: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)" },
    show: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "scale" | "blur";
}) {
  return (
    <motion.div
      className={className}
      variants={presets[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}