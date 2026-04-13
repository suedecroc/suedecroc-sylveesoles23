"use client";
import { motion } from "framer-motion";
import { useMagneticButton } from "@/hooks";

const links = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    gradient: "linear-gradient(135deg, #F2A7B0, #D4707A)",
    textColor: "#fff",
  },
  {
    label: "FeetFinder",
    href: "https://feetfinder.com",
    gradient: "linear-gradient(135deg, #A8D8C8, #6BB5A0)",
    textColor: "#fff",
  },
  {
    label: "Reddit",
    href: "https://reddit.com",
    gradient: "linear-gradient(135deg, #FDDDE6, #F2A7B0)",
    textColor: "#D4707A",
  },
];

function MagneticLink({
  label,
  href,
  gradient,
  textColor,
  index,
}: {
  label: string;
  href: string;
  gradient: string;
  textColor: string;
  index: number;
}) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagneticButton(0.3);

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-xs rounded-2xl px-8 py-4 text-center text-lg font-semibold shadow-lg transition-shadow hover:shadow-xl"
      style={{
        background: gradient,
        color: textColor,
        x,
        y,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {label}
    </motion.a>
  );
}

export default function LinkHub() {
  return (
    <section id="links" className="relative py-24">
      <div className="mx-auto max-w-md px-4">
        <motion.h2
          className="mb-12 text-center text-4xl"
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#D4707A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Find Me
        </motion.h2>
        <div className="flex flex-col items-center gap-5">
          {links.map((link, i) => (
            <MagneticLink key={link.label} {...link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
