
'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="about-tag">About Studio</span>
          <h2 className="about-heading">Engineering Speed & Aesthetic Perfection.</h2>
          <p className="about-paragraph">
            Inspired by top-tier modern agency models, we bridge the gap between heavy software performance and absolute visual balance. Every framework is written for raw speed optimization and smooth interaction.
          </p>
        </motion.div>
        <div className="about-card-stack">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-mini-card">
            <h3 className="about-card-title">Modernized Frameworks</h3>
            <p className="about-card-desc">We transform standard web presets into highly custom, responsive layout systems built to handle scale easily.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="about-mini-card">
            <h3 className="about-card-title">Clean Visual Hierarchy</h3>
            <p className="about-card-desc">Designed with meticulous spacing parameters to create a look that feels balanced, upscale, and elite.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
