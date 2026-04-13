"use client";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks";

export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9990] h-1 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #F2A7B0, #A8D8C8)",
      }}
    />
  );
}
