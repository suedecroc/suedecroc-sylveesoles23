"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMagneticButton } from "@/hooks";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sylveesoles23",
    image: "/samples/7.jpg",
  },
  {
    label: "FeetFinder",
    href: "https://feetfinder.com",
    image: "/samples/9.jpg",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/SylveonSoles23/",
    image: "/samples/3.jpg",
  },
];

function LinkCard({
  label,
  href,
  image,
  index,
}: {
  label: string;
  href: string;
  image: string;
  index: number;
}) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagneticButton(0.15);

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl border border-[#F2A7B0] shadow-lg transition-colors duration-300 hover:border-[#D4707A]"
      style={{ aspectRatio: "16/7", x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Background image with zoom */}
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ objectFit: "cover" }}
      />

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      {/* Label */}
      <div className="absolute inset-0 flex items-end justify-center pb-5">
        <span
          className="text-lg tracking-[0.2em] uppercase text-white drop-shadow-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {label}
        </span>
      </div>
    </motion.a>
  );
}

export default function LinkHub() {
  return (
    <section id="links" className="relative py-24">
      <div className="mx-auto max-w-lg px-4">
        <motion.h2
          className="mb-12 text-center text-3xl tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#D4707A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Find Me
        </motion.h2>
        <div className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <LinkCard key={link.label} {...link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
