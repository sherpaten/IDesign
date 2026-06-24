'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto relative z-10 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Left Side: Communication Info Vectors */}
        <div className="lg:col-span-5 space-y-8 w-full">
          <div>
            <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-400 font-mono uppercase tracking-widest inline-block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Let's build something legendary.
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Reach out through our official operating channels. Our strategy desk is standing by.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#070b19]/30 border border-blue-950/40 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400/80">Official Communication Vector</h4>
              <a href="mailto:idesign4269@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors block mt-2">
                idesign4269@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#070b19]/30 border border-blue-950/40 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400/80">Primary Vector</h4>
                <a href="https://wa.me/9779747457986" target="_blank" rel="noreferrer" className="text-white hover:text-green-400 transition-colors block mt-2 font-medium">
                  +977 9747457986
                </a>
              </div>
              <div className="bg-[#070b19]/30 border border-blue-950/40 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400/80">Secondary Vector</h4>
                <a href="https://wa.me/9779818778998" target="_blank" rel="noreferrer" className="text-white hover:text-green-400 transition-colors block mt-2 font-medium">
                  +977 9818778998
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Proposal Input Form Component with Matched Studio Services */}
        <div className="lg:col-span-7 bg-[#070b19]/40 border border-blue-950/50 rounded-3xl p-8 backdrop-blur-md w-full">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#030712] border border-blue-950/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                />
              </div>
              <div className="w-full">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#030712] border border-blue-950/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Select Requested Capability</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#030712] border border-blue-950/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm cursor-pointer appearance-none relative z-10"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Choose a service channel...</option>
                  <option value="web-architecture" className="bg-[#030712] text-white">Custom Web Architecture</option>
                  <option value="ui-ux" className="bg-[#030712] text-white">User Interface (UI/UX) Design</option>
                  <option value="software-engineering" className="bg-[#030712] text-white">Custom Software Engineering</option>
                  <option value="graphic-design" className="bg-[#030712] text-white">Professional Graphic Design</option>
                  <option value="video-editing" className="bg-[#030712] text-white">Cinematic Video Editing</option>
                  <option value="digital-marketing" className="bg-[#030712] text-white">Digital Marketing & Brand Growth</option>
                  <option value="seo-analytics" className="bg-[#030712] text-white">SEO Strategy & Core Analytics</option>
                  <option value="cloud-devops" className="bg-[#030712] text-white">Cloud Optimization & DevOps</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 z-20">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Project Scope Description</label>
              <textarea 
                rows="5" 
                placeholder="Describe what you need built under this service track..." 
                className="w-full bg-[#030712] border border-blue-950/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/10 active:scale-[0.99]"
            >
              Submit Proposal
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
