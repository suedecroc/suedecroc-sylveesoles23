"use client";
import { motion } from "framer-motion";

interface RibbonDecorProps {
  className?: string;
}

export default function RibbonDecor({ className = "" }: RibbonDecorProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none text-4xl opacity-30 ${className}`}
      animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      🎀
    </motion.div>
  );
}
