'use client';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    { num: '01', title: 'Web Development', desc: 'Engineering high-performance, responsive custom applications built from scratch with modern technology stacks.' },
    { num: '02', title: 'UI/UX Design', desc: 'Crafting user-centric digital products, layout architectures, and intuitive wireframes that scale brands.' },
    { num: '03', title: 'E-Commerce Solutions', desc: 'Building secure digital stores, dynamic checkout workflows, and streamlined conversion systems.' },
    { num: '04', title: 'Brand Identity Strategy', desc: 'Developing powerful visual directions, clean logomarks, and premium vector graphics.' },
    { num: '05', title: 'Mobile App Engineering', desc: 'Designing native-feel custom cross-platform applications tracking rich interface architectures.' },
    { num: '06', title: 'SEO Optimization', desc: 'Structuring clean site maps, technical site metrics, and speed configurations to scale visibility.' },
    { num: '07', title: 'Cloud Integration', desc: 'Deploying secure backend frameworks and setting up clean production pipelines on modern servers.' },
    { num: '08', title: 'Video Transformation', desc: 'Editing premium corporate animations, marketing assets, and dynamic creative clips.' }
  ];

  return (
    <section id="services" className="bg-[#030712] py-24 px-6 text-white relative z-20 border-t border-slate-900/60 overflow-hidden">
      
      {/* 1. Permanent Local Background Image - Scaled perfectly for mobile and web */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/services-bg.jpg" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-15 mix-blend-screen"
        />
        {/* Dark overlay mask to keep text hyper-readable */}
        <div className="absolute inset-0 bg-[#030712]/40" />
      </div>

      {/* 2. Code-Based Ambient Glow Layer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 font-bold bg-blue-950/40 border border-blue-900/30 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            High-Impact Capabilities
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm">
            Professional digital engineering suites built from the ground up to empower scaling enterprises.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900/20 border border-slate-900/80 hover:border-blue-500/20 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/[0.01]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-500 bg-blue-950/40 border border-blue-900/30 px-2 py-0.5 rounded">
                  {svc.num}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors" />
              </div>

              {/* Typography Content - Perfectly Scaled for Mobile/Web */}
              <div className="space-y-2">
                <h3 className="text-lg font-black tracking-tight text-white group-hover:text-blue-500 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-base sm:text-xs text-slate-400 leading-relaxed font-normal transition-colors group-hover:text-slate-300">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
