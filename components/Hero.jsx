'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#030712] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side text content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
              Digital Solutions That Drive Results
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
            Designing Ideas.<br />
            <span className="text-blue-600">Building Impact.</span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            We craft digital experiences, powerful brands, and intelligent solutions that help businesses grow, scale, and lead in the digital era.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20">
              Explore Our Services <span>?</span>
            </button>
            <button className="px-6 py-4 border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer">
              View Our Work <span className="text-[10px]">?</span>
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-900 w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                  U{i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <span>?</span><span>?</span><span>?</span><span>?</span><span>?</span>
                <span className="text-white font-bold ml-1 text-xs font-mono">4.9/5</span>
              </div>
              <p className="text-slate-500 text-xs">from 120+ global reviews</p>
            </div>
          </div>
        </div>

        {/* Right Side Upgraded Image Mockup */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-blue-950/50 shadow-2xl shadow-blue-500/5">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
              alt="iDesign Platform Interface Showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
