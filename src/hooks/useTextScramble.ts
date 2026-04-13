"use client";
import { useState, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function useTextScramble(finalText: string, speed = 40) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      const next = finalText
        .split("")
        .map((char, i) => {
          if (i < iteration) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(next);
      iteration += 1 / 3;
      if (iteration >= finalText.length) {
        clearInterval(interval);
        setDisplay(finalText);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [finalText, speed]);

  return { display, done: display === finalText };
}
