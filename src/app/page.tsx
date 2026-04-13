"use client";
import { useState, useCallback } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import RibbonDecor from "@/components/RibbonDecor";
import AgeGate from "@/sections/AgeGate";
import Hero from "@/sections/Hero";
import LinkHub from "@/sections/LinkHub";
import VideoShowcase from "@/sections/VideoShowcase";
import SampleGrid from "@/sections/SampleGrid";
import Footer from "@/sections/Footer";

export default function Home() {
  const [verified, setVerified] = useState(false);

  const handleVerified = useCallback(() => {
    setVerified(true);
  }, []);

  return (
    <>
      <AgeGate onVerified={handleVerified} />

      {verified && (
        <>
          <CustomCursor />
          <ScrollProgress />

          {/* Floating ribbon decorations */}
          <RibbonDecor className="fixed top-20 left-8 z-50" />
          <RibbonDecor className="fixed top-40 right-12 z-50" />
          <RibbonDecor className="fixed bottom-32 left-16 z-50" />

          <main className="relative">
            <Hero />
            <VideoShowcase />
            <LinkHub />
            <SampleGrid />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
