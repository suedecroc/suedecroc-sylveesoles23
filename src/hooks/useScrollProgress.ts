"use client";
import { useScroll, useSpring, MotionValue } from "framer-motion";

export function useScrollProgress(): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
}
