
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import WelcomeLoader from "@/components/WelcomeLoader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "unset";
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <WelcomeLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main className="min-h-screen relative overflow-hidden">
            
            {/* Ambient Background Glow Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-[110vh] left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none z-0" />
            <div className="absolute top-[220vh] right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none z-0" />

            <div id="home"><Hero /></div>
            <div id="about" className="border-t border-blue-950/40"><About /></div>
            <div id="services" className="border-t border-blue-950/40"><ServicesGrid /></div>
            <div id="team" className="border-t border-blue-950/40"><Team /></div>
            <div id="contact" className="border-t border-blue-950/40"><Contact /></div>

          </main>
        </>
      )}
    </>
  );
}
