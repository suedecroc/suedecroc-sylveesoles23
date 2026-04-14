"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCurtainReveal } from "@/hooks";

interface SampleItem {
  image?: string;
  className?: string;
}

const samples: SampleItem[] = [
  { image: "/samples/1.jpg", className: "md:row-span-2" },
  { image: "/samples/2.jpg" },
  { image: "/samples/3.jpg" },
  { image: "/samples/4.jpg", className: "md:col-span-2 md:aspect-[3/2]" },
  { image: "/samples/5.jpg" },
  { image: "/samples/6.jpg" },
  { image: "/samples/7.jpg", className: "md:row-span-2" },
  { image: "/samples/8.jpg" },
  { image: "/samples/9.jpg" },
  { image: "/samples/10.jpg", className: "md:col-span-2 md:aspect-[3/2]" },
  { image: "/samples/11.jpg" },
];

function SampleCard({ index, image, className }: { index: number; image?: string; className?: string }) {
  const { ref, isInView } = useCurtainReveal(0.2);
  const [revealed, setRevealed] = useState(false);
  const isWide = className?.includes("col-span-2");

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl shadow-lg ${className ?? ""} ${!isWide ? "aspect-[3/4]" : ""}`}
      onClick={() => image && setRevealed((r) => !r)}
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(135deg, #FDDDE6, #F2A7B0)"
            : "linear-gradient(135deg, #D4F0E7, #A8D8C8)",
      }}
    >
      {/* Curtain overlay */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,245,245,0.95), rgba(242,167,176,0.9))",
        }}
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={
          isInView
            ? { clipPath: "inset(0 0 100% 0)" }
            : { clipPath: "inset(0 0 0 0)" }
        }
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        <span className="text-3xl">🎀</span>
      </motion.div>

      {/* Card content */}
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center p-6">
          <div className="mb-3 text-4xl opacity-40">🎀</div>
          <p
            className="text-lg font-medium"
            style={{ color: index % 2 === 0 ? "#D4707A" : "#6BB5A0" }}
          >
            Coming Soon
          </p>
          <p className="mt-1 text-xs text-gray-400">Sample {index + 1}</p>
        </div>
      )}

      {/* Blur overlay — blurred by default, clears on hover or tap */}
      {image && !revealed && (
        <div className="absolute inset-0 backdrop-blur-md transition-all duration-500 group-hover:backdrop-blur-0" />
      )}
    </motion.div>
  );
}

export default function SampleGrid() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          className="mb-12 text-center text-3xl tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#8C4A5A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Preview
        </motion.h2>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-3 md:gap-6">
          {samples.map((item, i) => (
            <SampleCard key={i} index={i} image={item.image} className={item.className} />
          ))}
        </div>
      </div>
    </section>
  );
}
