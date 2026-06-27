'use client';
import { motion } from 'framer-motion';

export default function Work() {
  const projects = [
    { 
      title: 'E-Learn Platform', 
      category: 'E-Commerce & Education', 
      img: '/E-learn.png', 
      text: 'Next-Generation Digital Learning Experience',
      status: 'Live on Vercel'
    },
    { 
      title: 'Plumbing Kathmandu', 
      category: 'On-Demand Service Web App', 
      img: '/plumbing-Kathmandu.png', 
      text: 'Local Home Maintenance Booking Architecture',
      status: 'Live on Vercel'
    },
    { 
      title: 'Shamu Cap Store', 
      category: 'E-Commerce Storefront', 
      img: '/Shamu.png', 
      text: 'Premium Custom Headwear Apparel Shop',
      status: 'Live on Vercel'
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 text-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-900">
            Built For Brands That Aim Higher
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xs md:text-sm font-medium">
            Discover our real, high-performance custom applications engineered from scratch.
          </p>
        </div>

        {/* 3-Column Grid matching local files */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer space-y-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-500/10 transition-all duration-300">
              
              {/* Image Frame Card Container */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner border border-slate-100">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent z-10" />
                
                {/* Vercel Status Badge */}
                <span className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-sm text-white font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold shadow-sm z-20 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  {project.status}
                </span>
                
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-[10px] font-mono uppercase text-blue-400 tracking-wider font-bold">{project.category}</p>
                  <h4 className="text-sm font-bold text-white tracking-tight mt-0.5 leading-tight">{project.text}</h4>
                </div>
              </div>

              {/* Lower Details Block */}
              <div className="pl-1 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{project.category}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <span className="text-xs font-bold font-mono">?</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
