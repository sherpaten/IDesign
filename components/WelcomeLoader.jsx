
'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function WelcomeLoader({ onComplete }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["WELCOME TO", "THE NEW WORLD", "OF TECHNOLOGY", "iDESIGN STUDIO"];
  const audioRef = useRef(null);

  // Initialize the audio track blueprint early
  useEffect(() => {
    const audio = new Audio('/welcome-ambient.wav');
    audio.volume = 0.5;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Control text rotation loop ONLY after user clicks start
  useEffect(() => {
    if (!hasStarted) return;

    if (textIndex < phrases.length - 1) {
      const timer = setTimeout(() => setTextIndex(prev => prev + 1), 1350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => onComplete(), 1800);
      return () => clearTimeout(timer);
    }
  }, [textIndex, hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Audio play blocked:", err);
      });
    }
  };

  return (
    <div className="loader-container bg-[#030712] fixed inset-0 z-50 flex items-center justify-center">
      {!hasStarted ? (
        /* Pristine Gateway Interaction Button */
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onClick={handleStart}
          className="px-8 py-4 bg-transparent border border-blue-500/30 text-blue-400 font-mono text-xs uppercase tracking-[0.3em] rounded-full hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/5 cursor-pointer"
        >
          ENTER STUDIO
        </motion.button>
      ) : (
        /* Cinematic Phrasing Sequence Matrix */
        <div className="loader-wrapper">
          <motion.h1 
            key={textIndex} 
            initial={{ opacity: 0, y: 10, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -10, scale: 1.01 }} 
            transition={{ duration: 0.7, ease: "easeInOut" }} 
            className="loader-text text-5xl md:text-7xl font-black tracking-widest text-center text-white select-none"
          >
            {phrases[textIndex]}
          </motion.h1>
        </div>
      )}
    </div>
  );
}

