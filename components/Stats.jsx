'use client';

export default function Stats() {
  const statItems = [
    { value: '150+', label: 'Projects Delivered', icon: '??' },
    { value: '98%', label: 'Client Satisfaction', icon: '??' },
    { value: '8+', label: 'Years of Experience', icon: '??' },
    { value: '50+', label: 'Global Clients', icon: '??' },
  ];

  return (
    <section className="bg-blue-600 py-10 px-6 text-white border-t border-blue-700">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {statItems.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-4 w-full max-w-[240px] justify-start lg:justify-center"
          >
            {/* Minimalistic clean outline icon asset context */}
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-lg shadow-inner">
              {stat.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="text-2xl md:text-3xl font-black font-mono tracking-tight leading-none">
                {stat.value}
              </h3>
              <p className="text-[11px] font-mono uppercase tracking-wider text-blue-100/80 font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
