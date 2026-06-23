
'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-main-grid">
        <div className="contact-info-col">
          <div>
            <span className="contact-section-tag">Get In Touch</span>
            <h2 className="contact-main-title">Let's build something legendary.</h2>
            <p className="contact-main-subtitle">Reach out through our official operating channels. Our strategy desk is standing by.</p>
          </div>
          <div className="contact-info-stack">
            <div className="contact-block">
              <h4 className="contact-label-small">Official Communication Vector</h4>
              <p className="contact-text-value">idesign4269@gmail.com</p>
            </div>
            <div className="contact-block-double">
              <div>
                <h4 className="contact-label-small">Primary Vector</h4>
                <a href="https://wa.me/9779747457986" target="_blank" rel="noreferrer" className="contact-link-whatsapp">+977 9747457986</a>
              </div>
              <div>
                <h4 className="contact-label-small">Secondary Vector</h4>
                <a href="https://wa.me/9779818778998" target="_blank" rel="noreferrer" className="contact-link-whatsapp">+977 9818778998</a>
              </div>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="contact-input-col">
          <div className="space-y-6 w-full">
            <div className="contact-inputs-grid">
              <div className="contact-field-group">
                <label className="contact-field-label">Name</label>
                <input type="text" placeholder="Your Name" className="contact-input-element" />
              </div>
              <div className="contact-field-group">
                <label className="contact-field-label">Email</label>
                <input type="email" placeholder="name@company.com" className="contact-input-element" />
              </div>
            </div>
            <div className="contact-field-group">
              <label className="contact-field-label">Project Scope</label>
              <textarea rows={4} placeholder="Describe the digital asset requirements..." className="contact-textarea-element" />
            </div>
          </div>
          <button className="contact-submit-btn">Submit Proposal</button>
        </motion.div>
      </div>
    </section>
  );
}
