
'use client';
import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    { 
      name: "Tenzing Norkay Sherpa", 
      role: "CEO / Founder & Developer", 
      img: "/Tenzing.jpg" 
    },
    { 
      name: "Dawa Theeng", 
      role: "COO / President & Developer", 
      img: "/Dawa.jpeg" 
    }
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto relative z-10">
      <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 w-fit">
        Our Members
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white mt-6 tracking-tight leading-tight">
        The Mind Behind The Studio
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
        {members.map((member, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-blue-950/40 bg-slate-900/40 backdrop-blur-sm">
              <motion.img 
                src={member.img} 
                alt={member.name}
                className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 group-active:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-6 pl-2">
              <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-blue-400 group-active:text-blue-400">
                {member.name}
              </h3>
              <p className="text-sm font-light text-slate-400 mt-1">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
