'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-main-grid">
        
        {/* Left Column: Communication Info Vectors */}
        <div className="contact-info-col">
          <div>
            <span className="contact-section-tag">Get In Touch</span>
            <h2 className="contact-main-title">Let's build something legendary.</h2>
            <p className="contact-main-subtitle">Reach out through our official operating channels. Our strategy desk is standing by.</p>
          </div>
          
          <div className="contact-info-stack">
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

        {/* Right Column: Interactive Form with Service Selector */}
        <div className="contact-form-wrapper bg-[#070b19]/40 border border-blue-950/30 rounded-3xl p-8 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#030712] border border-blue-950/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#030712] border border-blue-950/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                />
              </div>
            </div>

            {/* NEW: Core Service Dropdown Vector Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Select Core Service</label>
              <select 
                className="w-full bg-[#030712] border border-blue-950/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm cursor-pointer appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3e%3cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                defaultValue=""
              >
                <option value="" disabled hidden>Choose an ecosystem track...</option>
                <option value="web-dev" className="bg-[#030712] text-white">Next-Gen Web Development</option>
                <option value="ui-ux" className="bg-[#030712] text-white">Fluid UI / UX Design Architectures</option>
                <option value="mobile-apps" className="bg-[#030712] text-white">Cross-Platform Native Apps</option>
                <option value="branding" className="bg-[#030712] text-white">Digital Brand Identity Strategy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Project Scope Description</label>
              <textarea 
                rows="4" 
                placeholder="Describe what you need built under this service track..." 
                className="w-full bg-[#030712] border border-blue-950/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl transition-colors cursor-pointer shadow-lg shadow-blue-600/10"
            >
              Submit Proposal
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
