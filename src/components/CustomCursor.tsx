"use client";
import { useMousePosition } from "@/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function getIsDesktop() {
  return !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

let sparkleId = 0;

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const visible = useSyncExternalStore(emptySubscribe, getIsDesktop, () => false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSparkle = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (visible) {
      document.body.classList.add("custom-cursor-active");
      return () => document.body.classList.remove("custom-cursor-active");
    }
  }, [visible]);

  // Spawn sparkles as the cursor moves
  useEffect(() => {
    if (!visible) return;
    const dx = x - lastSparkle.current.x;
    const dy = y - lastSparkle.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 24) return;

    lastSparkle.current = { x, y };
    const id = ++sparkleId;
    // Offset sparkles randomly around cursor
    const spread = 12;
    const sx = x + (Math.random() - 0.5) * spread;
    const sy = y + (Math.random() - 0.5) * spread;
    setSparkles((prev) => [...prev.slice(-12), { id, x: sx, y: sy }]);
  }, [x, y, visible]);

  // Auto-remove sparkles after their animation
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [sparkles]);

  if (!visible) return null;

  return (
    <>
      {/* Ribbon emoji cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] text-xl"
        style={{
          x: x - 12,
          y: y - 12,
        }}
      >
        🎀
      </motion.div>

      {/* Sparkle trail */}
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="pointer-events-none fixed top-0 left-0 z-[9998] text-sm"
            style={{ x: s.x - 6, y: s.y - 6 }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3, y: s.y - 6 + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
