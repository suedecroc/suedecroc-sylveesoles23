"use client";
import { motion } from "framer-motion";
import { useParallax, useTextScramble, useMagneticButton } from "@/hooks";

export default function Hero() {
  const y = useParallax([0, 1], [0, -60]);
  const { display: tagline } = useTextScramble("pretty feet, prettier attitude");
  const cta1 = useMagneticButton(0.25);
  const cta2 = useMagneticButton(0.25);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          background:
            "linear-gradient(135deg, #FFF5F5 0%, #FDDDE6 20%, #F2A7B0 40%, #A8D8C8 65%, #FFF5F5 100%)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />

      {/* Content */}
      <div className="relative z-10 mx-4 text-center">
        <motion.h1
          className="mb-4 text-6xl md:text-8xl"
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#D4707A" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          SylveonSoles23
        </motion.h1>

        <motion.p
          className="mb-10 font-mono text-sm tracking-widest text-gray-500 md:text-base"
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
            ref={cta1.ref as React.Ref<HTMLAnchorElement>}
            href="#links"
            className="rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #F2A7B0, #D4707A)",
              x: cta1.offset.x,
              y: cta1.offset.y,
            }}
            onMouseMove={cta1.handleMouseMove}
            onMouseLeave={cta1.handleMouseLeave}
          >
            Find Me
          </motion.a>
          <motion.a
            ref={cta2.ref as React.Ref<HTMLAnchorElement>}
            href="#gallery"
            className="rounded-full border-2 px-8 py-3 text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
            style={{
              borderColor: "#A8D8C8",
              color: "#A8D8C8",
              x: cta2.offset.x,
              y: cta2.offset.y,
            }}
            onMouseMove={cta2.handleMouseMove}
            onMouseLeave={cta2.handleMouseLeave}
          >
            Preview
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
