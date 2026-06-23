
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-container">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="hero-badge"><div className="hero-badge-dot" /> Next-Gen Development Studio</div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="hero-title">
        We build elite <br /><span className="hero-gradient-text">digital realities.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-desc">
        Handcrafting high-performance web applications, fluid interactive systems, and scalable digital architectures designed to outclass your competition.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="hero-cta-group">
        <button className="hero-btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Launch Project</button>
        <button className="hero-btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Our Capabilities</button>
      </motion.div>
    </section>
  );
}
