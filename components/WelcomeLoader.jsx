'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeLoader({ onComplete }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["WELCOME TO", "THE NEW WORLD", "OF TECHNOLOGY", "I DESIGN STUDIO"];
  const audioRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;

    // High-energy fast text cycle matching shorter audio waves
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex === phrases.length - 1) {
          clearInterval(interval);
          // Clean exit sequence right after the final brand phrase highlights
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 850); // Snappy tempo (~850ms per phrase)

    return () => clearInterval(interval);
  }, [hasStarted]);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((err) => {
        console.log("Audio play blocked:", err);
      });
    }
    
    // Tiny delay to align text fade initialization precisely with the sound blast
    setTimeout(() => {
      setHasStarted(true);
    }, 150);
  };

  return (
    <div className="bg-[#030712] fixed inset-0 z-50 flex items-center justify-center select-none overflow-hidden">
      <audio ref={audioRef} src="/welcome-ambient.wav" preload="auto" />

      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.button
            key="start-btn"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={handleStart}
            className="px-8 py-4 bg-transparent border border-blue-500/30 text-blue-400 font-mono text-xs uppercase tracking-[0.3em] rounded-full hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/5 cursor-pointer relative z-10"
          >
            ENTER STUDIO
          </motion.button>
        ) : (
          <motion.div 
            key="text-stream"
            className="w-full flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, scale: 0.93, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-widest text-center text-white font-sans uppercase max-w-4xl leading-tight"
              >
                {phrases[textIndex]}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
