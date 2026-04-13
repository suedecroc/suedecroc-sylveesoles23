"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCurtainReveal } from "@/hooks";

interface SampleItem {
  image?: string;
}

const samples: SampleItem[] = [
  { image: "/samples/1.jpg" },
  { image: "/samples/2.jpg" },
  { image: "/samples/3.jpg" },
  { image: "/samples/4.jpg" },
  { image: "/samples/5.jpg" },
  { image: "/samples/6.jpg" },
];

function SampleCard({ index, image }: { index: number; image?: string }) {
  const { ref, isInView } = useCurtainReveal(0.2);

  return (
    <motion.div
      ref={ref}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
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
          sizes="(max-width: 768px) 50vw, 33vw"
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

      {/* Frosted hover overlay */}
      <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm" />
    </motion.div>
  );
}

export default function SampleGrid() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          className="mb-12 text-center text-4xl"
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#D4707A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Preview
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {samples.map((item, i) => (
            <SampleCard key={i} index={i} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
