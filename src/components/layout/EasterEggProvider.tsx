"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import MatrixRain from "@/components/layout/MatrixRain";

export default function EasterEggProvider() {
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const { playSwoosh } = useSoundEffects();

  useKonamiCode(() => {
    setIsMatrixMode(true);
    playSwoosh();
    // Optional: Force dark theme if not already
    document.documentElement.classList.add('dark');
  });

  return (
    <AnimatePresence>
      {isMatrixMode && (
        <MatrixRain onClose={() => {
          setIsMatrixMode(false);
          playSwoosh();
        }} />
      )}
    </AnimatePresence>
  );
}
