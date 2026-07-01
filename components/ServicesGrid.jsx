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
    <section id="services" className="bg-white py-24 px-6 text-slate-900 relative z-20 border-t border-slate-100 overflow-hidden">
      
      {/* Absolute Background Image Layer - Direct Link with explicit Tailwind layout tags */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop" 
          alt="Services Background Pattern" 
          className="w-full h-full object-cover opacity-[0.12] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-900">
            High-Impact Capabilities
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Professional digital engineering suites built from the ground up to empower scaling enterprises.
          </p>
        </div>

        {/* Crisp Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              className="group bg-white/60 backdrop-blur-md border border-slate-200 hover:border-blue-500/30 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                  {svc.num}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
              </div>

              {/* Typography Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-base sm:text-sm text-slate-600 leading-relaxed font-normal">
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
