"use client";
import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

function getIsVerified() {
  return localStorage.getItem("sylvee-age-verified") === "true";
}

export default function AgeGate({ onVerified }: { onVerified: () => void }) {
  const alreadyVerified = useSyncExternalStore(emptySubscribe, getIsVerified, () => false);
  const [dismissed, setDismissed] = useState(false);
  const show = !alreadyVerified && !dismissed;

  useEffect(() => {
    if (alreadyVerified) {
      onVerified();
    }
  }, [alreadyVerified, onVerified]);

  const handleYes = () => {
    localStorage.setItem("sylvee-age-verified", "true");
    setDismissed(true);
    onVerified();
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #FFF5F5 0%, #F2A7B0 40%, #A8D8C8 70%, #FFF5F5 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mx-4 max-w-md rounded-3xl border border-white/40 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 20 }}
          >
            <div className="mb-4 text-5xl">🎀</div>
            <h1
              className="mb-2 text-3xl"
              style={{ fontFamily: "'Pinyon Script', cursive", color: "#D4707A" }}
            >
              SylveonSoles23
            </h1>
            <p className="mb-6 text-sm text-gray-600">
              This site contains content intended for adults only.
              <br />
              You must be 18 or older to enter.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleYes}
                className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #F2A7B0, #D4707A)" }}
              >
                Yes, I&apos;m 18+
              </button>
              <button
                onClick={handleNo}
                className="rounded-full border-2 px-8 py-3 text-sm font-semibold transition-all hover:scale-105"
                style={{ borderColor: "#A8D8C8", color: "#A8D8C8" }}
              >
                No
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
