'use client';
import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    {
      name: 'Tenzing',
      role: 'Founding Owner & Technical Lead',
      img: '/Tenzing.jpg',
      bio: 'Full-stack software architect directing core system architecture and deployment vectors.'
    },
    {
      name: 'Dawa',
      role: 'Co-Founder & UI/UX Director',
      img: '/Dawa.jpeg',
      bio: 'Visual experience designer shaping beautiful premium frontend user interfaces.'
    },
    {
      name: 'Lenzing',
      role: 'Lead Developer & Operations',
      img: '/lenzing.jpg',
      bio: 'Specialist in custom software engineering and scalable client dashboard configurations.'
    }
  ];

  return (
    <section id="team" className="bg-[#030712] py-24 px-6 text-white relative z-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 font-bold bg-blue-950/40 border border-blue-900/30 px-3 py-1 rounded-full">
            Expert Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            Meet The Core Engineers
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm">
            The technical team driving custom product design and software transformation at IDesign Studio.
          </p>
        </div>

        {/* Dynamic Balanced Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900/20 border border-slate-900 hover:border-blue-500/20 rounded-2xl p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/[0.02]"
            >
              {/* Profile Image Viewport */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10" />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-900/40 px-2 py-0.5 rounded font-bold">
                    IDesign Core
                  </span>
                </div>
              </div>

              {/* Text Meta Content Details */}
              <div className="space-y-1.5 px-1">
                <h3 className="text-lg font-black tracking-tight text-white group-hover:text-blue-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono font-semibold">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
