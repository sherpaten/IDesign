'use client';
import { motion } from 'framer-motion';

export default function Work() {
  const projects = [
    { 
      title: 'E-Commerce Platform', 
      category: 'Web Development', 
      img: 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80', 
      text: 'Next Generation Shopping Experience' 
    },
    { 
      title: 'Fintech Dashboard', 
      category: 'UI/UX Design', 
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', 
      text: 'Clean, analytical tracking screens' 
    },
    { 
      title: 'Brand Identity Design', 
      category: 'Graphic Design', 
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80', 
      text: 'Complete visual asset configuration' 
    },
    { 
      title: 'Corporate Video', 
      category: 'Video Editing', 
      img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80', 
      text: 'INNOVATION THAT INSPIRES' 
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 text-slate-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-900">
            Built For Brands That Aim Higher
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer space-y-4">
              {/* Image Frame Card Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-[11px] font-mono uppercase text-blue-400 tracking-wider font-semibold">{project.category}</p>
                  <h4 className="text-sm font-bold text-white tracking-tight mt-0.5">{project.text}</h4>
                </div>
              </div>

              {/* Lower Text Metadata */}
              <div className="pl-1">
                <h3 className="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="flex justify-center pt-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/10 active:scale-[0.99]">
            View More Work <span className="text-[10px]">?</span>
          </button>
        </div>

      </div>
    </section>
  );
}
