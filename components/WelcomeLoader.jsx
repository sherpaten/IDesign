
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WelcomeLoader({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["WELCOME TO", "THE NEW WORLD", "OF TECHNOLOGY", "iDESIGN STUDIO"];

  useEffect(() => {
    if (textIndex < phrases.length - 1) {
      const timer = setTimeout(() => setTextIndex(prev => prev + 1), 1350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => onComplete(), 1800);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <motion.h1 key={textIndex} initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 1.01 }} transition={{ duration: 0.7, ease: "easeInOut" }} className="loader-text">
          {phrases[textIndex]}
        </motion.h1>
      </div>
    </div>
  );
}
