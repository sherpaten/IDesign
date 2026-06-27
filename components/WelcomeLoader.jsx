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

    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex === phrases.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1200);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((err) => {
        console.log("Audio pipeline capture failed:", err);
      });
    }
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
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
