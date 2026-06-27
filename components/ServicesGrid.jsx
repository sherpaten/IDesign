'use client';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    { num: '01', title: 'Custom Web Architecture', desc: 'Scalable, secure, and high-performance websites built with modern technologies tailored to your business goals.' },
    { num: '02', title: 'User Interface Architecture', desc: 'Intuitive, engaging, and conversion-focused UI designs that deliver seamless experiences across all devices.' },
    { num: '03', title: 'Premium Graphic Design', desc: 'Eye-catching visuals and brand identities that communicate your message and make your brand unforgettable.' },
    { num: '04', title: 'High-End Video Editing', desc: 'Cinematic, compelling, and story-driven videos that captivate your audience and elevate your brand presence.' },
    { num: '05', title: 'Custom Software Engineering', desc: 'Robust, scalable, and future-ready software solutions engineered to solve complex business challenges.' },
    { num: '06', title: 'Digital Marketing & Brand Growth', desc: 'Data-driven marketing strategies that boost visibility, generate leads, and accelerate your business growth.' },
    { num: '07', title: 'Cloud Optimization & DevOps', desc: 'Optimized cloud infrastructure and DevOps solutions for speed, security, and seamless deployments.' },
    { num: '08', title: 'SEO Strategy & Core Analytics', desc: 'Advanced SEO strategies and analytics that drive organic growth and measurable business results.' },
  ];

  return (
    <section className="bg-white py-24 px-6 text-slate-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            Premium Services, Powerful Results
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            End-to-end digital solutions tailored to elevate your brand, optimize performance, and accelerate growth.
          </p>
        </div>

        {/* 01-08 Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.num}
              className="border border-slate-100 rounded-2xl p-6 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-blue-600 font-mono font-bold tracking-wider block text-sm">
                  {service.num}
                </span>
                
                {/* Visual Accent placeholder slot */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  ?
                </div>

                <h3 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.num === '02' ? 'User Interface Architecture' : service.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 text-blue-600 font-mono text-sm opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                ?
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
