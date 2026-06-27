'use client';

export default function Brands() {
  const brandLogos = ['visionary', 'PULSE', 'NEXORA', 'avenue', 'Quantum', 'Vertex', 'Sitemaprk'];

  return (
    <section className="bg-white py-10 border-b border-slate-100 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold whitespace-nowrap">
          Trusted By Ambitious Brands Around The World
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brandLogos.map((brand) => (
            <span key={brand} className="text-slate-400 font-mono font-bold tracking-tight text-sm hover:text-slate-600 transition-colors cursor-default">
              {brand.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
