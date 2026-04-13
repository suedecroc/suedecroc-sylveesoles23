"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallax, useTextScramble, useMagneticButton } from "@/hooks";

export default function Hero() {
  const y = useParallax([0, 1], [0, -60]);
  const { display: tagline } = useTextScramble("pretty feet, prettier attitude");
  const { ref: cta1Ref, x: cta1X, y: cta1Y, handleMouseMove: cta1Move, handleMouseLeave: cta1Leave } = useMagneticButton(0.25);
  const { ref: cta2Ref, x: cta2X, y: cta2Y, handleMouseMove: cta2Move, handleMouseLeave: cta2Leave } = useMagneticButton(0.25);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hero background image with parallax */}
      <motion.div className="absolute -inset-y-16 inset-x-0" style={{ y }}>
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Light pink tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F5]/70 via-[#F2A7B0]/40 to-[#A8D8C8]/50" />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />

      {/* Content */}
      <div className="relative z-10 mx-4 text-center">
        <motion.h1
          className="mb-4 text-6xl md:text-8xl drop-shadow-lg"
          style={{
            fontFamily: "'Pinyon Script', cursive",
            color: "#D4707A",
            textShadow: "0 2px 12px rgba(255,255,255,0.6)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          SylveonSoles23
        </motion.h1>

        <motion.p
          className="mb-10 font-mono text-sm tracking-widest md:text-base"
          style={{
            color: "#4A4A4A",
            textShadow: "0 1px 8px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            ref={cta1Ref as React.Ref<HTMLAnchorElement>}
            href="#links"
            className="rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #F2A7B0, #D4707A)",
              x: cta1X,
              y: cta1Y,
            }}
            onMouseMove={cta1Move}
            onMouseLeave={cta1Leave}
          >
            Find Me
          </motion.a>
          <motion.a
            ref={cta2Ref as React.Ref<HTMLAnchorElement>}
            href="#gallery"
            className="rounded-full border-2 px-8 py-3 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
            style={{
              borderColor: "#A8D8C8",
              color: "#A8D8C8",
              x: cta2X,
              y: cta2Y,
            }}
            onMouseMove={cta2Move}
            onMouseLeave={cta2Leave}
          >
            Preview
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
