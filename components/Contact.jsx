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
            {/* Email Vector Block updated with native mailto anchor system link */}
            <div className="contact-block">
              <h4 className="contact-label-small">Official Communication Vector</h4>
              <a href="mailto:idesign4269@gmail.com" className="contact-text-value hover:text-blue-400 transition-colors block mt-1">
                idesign4269@gmail.com
              </a>
            </div>

            <div className="contact-block double">
              <div>
                <h4 className="contact-label-small">Primary Vector</h4>
                <a href="https://wa.me/9779747457986" target="_blank" rel="noreferrer" className="contact-link-whatsapp">
                  +977 9747457986
                </a>
              </div>
              <div>
                <h4 className="contact-label-small">Secondary Vector</h4>
                <a href="https://wa.me/9779818778998" target="_blank" rel="noreferrer" className="contact-link-whatsapp">
                  +977 9818778998
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
