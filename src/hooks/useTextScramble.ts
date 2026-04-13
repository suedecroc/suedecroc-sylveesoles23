"use client";
import { useState, useEffect, useCallback } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function useTextScramble(finalText: string, speed = 40) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    setDone(false);
    const interval = setInterval(() => {
      setDisplay(
        finalText
          .split("")
          .map((char, i) => {
            if (i < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 3;
      if (iteration >= finalText.length) {
        clearInterval(interval);
        setDisplay(finalText);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [finalText, speed]);

  useEffect(() => {
    const cleanup = scramble();
    return cleanup;
  }, [scramble]);

  return { display, done };
}
