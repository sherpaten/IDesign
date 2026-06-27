'use client';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    { 
      num: '01', 
      title: 'Custom Web Architecture', 
      desc: 'Scalable, secure, and high-performance websites built with modern technologies tailored to your business goals.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '02', 
      title: 'User Interface Architecture', 
      desc: 'Intuitive, engaging, and conversion-focused UI designs that deliver seamless experiences across all devices.',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '03', 
      title: 'Premium Graphic Design', 
      desc: 'Eye-catching visuals and brand identities that communicate your message and make your brand unforgettable.',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '04', 
      title: 'High-End Video Editing', 
      desc: 'Cinematic, compelling, and story-driven videos that captivate your audience and elevate your brand presence.',
      img: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '05', 
      title: 'Custom Software Engineering', 
      desc: 'Robust, scalable, and future-ready software solutions engineered to solve complex business challenges.',
      img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '06', 
      title: 'Digital Marketing & Brand Growth', 
      desc: 'Data-driven marketing strategies that boost visibility, generate leads, and accelerate your business growth.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '07', 
      title: 'Cloud Optimization & DevOps', 
      desc: 'Optimized cloud infrastructure and DevOps solutions for speed, security, and seamless deployments.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
    },
    { 
      num: '08', 
      title: 'SEO Strategy & Core Analytics', 
      desc: 'Advanced SEO strategies and analytics that drive organic growth and measurable business results.',
      img: 'https://images.unsplash.com/photo-1504868584819-f8e8b446d2e4?auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <section className="bg-white py-24 px-6 text-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-900">
            Premium Services, Powerful Results
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            End-to-end digital solutions tailored to elevate your brand, optimize performance, and accelerate growth.
          </p>
        </div>

        {/* 01-08 Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service) => (
            <div 
              key={service.num}
              className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col group relative"
            >
              {/* Card Header Image Section */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                
                {/* Fixed positioning with explicit z-index prevents header tracking collision */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white font-mono font-bold px-2.5 py-1 rounded-md text-xs shadow-md z-30">
                  {service.num}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-white relative z-20">
                <div className="space-y-2">
                  <h3 className="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors min-h-[48px] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="text-blue-600 font-mono text-xs pt-2 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                  EXPLORE TRACK ?
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
