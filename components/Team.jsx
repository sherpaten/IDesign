'use client';
import { useState } from 'react';

export default function Team() {
  // Track which card is clicked/active on touch devices
  const [activeMember, setActiveMember] = useState(null);

  const team = [
    {
      id: 0,
      name: 'Tenzing Norkay Sherpa',
      role: 'Founding Owner & Technical Lead',
      img: '/Tenzing.jpg',
      bio: 'Full-stack software architect directing core system development, deployment pipelines, and custom architecture.'
    },
    {
      id: 1,
      name: 'Dawa Tamang',
      role: 'Co-Founder & Creative Director',
      img: '/Dawa.jpeg',
      bio: 'Visual experience designer shaping beautiful premium frontend user interfaces and vector layouts.'
    },
    {
      id: 2,
      name: 'Pemba Gelu Sherpa',
      role: 'CTO & Advisor',
      img: '/Pemba.jpeg',
      bio: 'Strategic technical visionary overseeing engineering frameworks, infrastructure planning, and long-term tech scaling.'
    },
    {
      id: 3,
      name: 'Rekha Bhandari',
      role: 'Marketing Head / Market Analyst',
      img: '/Rekha.jpeg',
      bio: 'Data-driven brand strategist managing market analysis vectors, user acquisition channels, and conversion growth maps.'
    }
  ];

  const handleTouch = (id) => {
    // If user clicks the already active card, reset it; otherwise set the new card active
    setActiveMember(activeMember === id ? null : id);
  };

  return (
    <section id="team" className="bg-[#030712] py-24 px-6 text-white relative z-20 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 font-bold bg-blue-950/40 border border-blue-900/30 px-3 py-1 rounded-full">
            Expert Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            Meet The Brains Behind The Studio
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm">
            The creative and technical force driving custom product design and high-performance digital solutions at IDesign Studio.
          </p>
        </div>

        {/* 4-Column High-Performance Unified Animation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {team.map((member) => {
            const isSelected = activeMember === member.id;
            
            return (
              <div 
                key={member.id} 
                onClick={() => handleTouch(member.id)}
                className={`group cursor-pointer bg-slate-900/20 border rounded-2xl p-4 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/[0.02] ${
                  isSelected ? 'border-blue-500/40 scale-102 shadow-xl shadow-blue-600/[0.02]' : 'border-slate-900 hover:border-blue-500/20'
                }`}
              >
                {/* Image Viewport Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transform transition-all duration-500 ease-out lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-105 ${
                      isSelected ? 'grayscale-0 scale-105' : 'max-lg:grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85 z-10" />
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-900/40 px-2 py-0.5 rounded font-bold">
                      Core Board
                    </span>
                  </div>
                </div>

                {/* Profile Text Details */}
                <div className="space-y-1 px-1">
                  <h3 className={`text-base font-black tracking-tight text-white transition-colors ${
                    isSelected ? 'text-blue-500' : 'group-hover:text-blue-500'
                  }`}>
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono font-semibold min-h-[16px]">
                    {member.role}
                  </p>
                  <p className={`text-xs text-slate-500 leading-relaxed pt-1 transition-all duration-300 ${
                    isSelected ? 'line-clamp-none' : 'line-clamp-3 lg:group-hover:line-clamp-none'
                  }`}>
                    {member.bio}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
