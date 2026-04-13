"use client";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useParallax(
  range: [number, number] = [0, 1],
  output: [number, number] = [0, -80]
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, range, output);
}
