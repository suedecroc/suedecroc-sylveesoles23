"use client";
import { useMousePosition } from "@/hooks";
import { motion } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function getIsDesktop() {
  return !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
}

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const visible = useSyncExternalStore(emptySubscribe, getIsDesktop, () => false);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("custom-cursor-active");
      return () => document.body.classList.remove("custom-cursor-active");
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full"
        style={{
          background: "#F2A7B0",
          x: x - 6,
          y: y - 6,
        }}
      />
      {/* Outer ring — trails with spring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border-2"
        style={{
          borderColor: "#A8D8C8",
        }}
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      />
    </>
  );
}
