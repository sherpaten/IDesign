import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-hidden bg-[#030712]">
        
        {/* Ambient Background Glow Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none z-0" />
        
        <div id="home"><Hero /></div>
        <Brands />
        <div id="about"><About /></div>
        <div id="services"><ServicesGrid /></div>
        <div id="team"><Team /></div>
        <div id="contact"><Contact /></div>
        
      </main>
    </>
  );
}
