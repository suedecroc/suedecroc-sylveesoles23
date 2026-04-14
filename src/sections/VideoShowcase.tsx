"use client";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4">
        <motion.h2
          className="mb-12 text-center text-3xl tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#8C4A5A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Behind the Scenes
        </motion.h2>

        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          style={{ aspectRatio: "9/16" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/showcase.mov" type="video/quicktime" />
            <source src="/video/showcase.mov" type="video/mp4" />
          </video>

          {/* Subtle vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]" />
        </motion.div>
      </div>
    </section>
  );
}
