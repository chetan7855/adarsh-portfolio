import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, assets } from '../data/portfolio';

export default function FinalScreen() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-[#0B111E] overflow-hidden border-t border-white/10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B111E] via-[#0E1A2B]/40 to-[#0B111E] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Subtle decorative mark */}
        <div className="w-8 h-8 mb-6 opacity-80">
          <img src={assets.logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Big Thank You */}
        <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-white tracking-wide leading-none drop-shadow-md">
          THANK YOU
        </h2>
        <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#CBD5E1] tracking-wider leading-none mt-2">
          FOR WATCHING
        </span>

        {/* Back to top button */}
        <button
          onClick={() => scrollTo('hero')}
          className="mt-10 px-8 py-3 rounded-full bg-[#132A42] border border-[#0284C7] text-white font-body text-xs uppercase tracking-cinematic hover:bg-[#0284C7] transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.35)] hover:scale-105 font-medium"
        >
          BACK TO START
        </button>

        {/* Year and Credits */}
        <div className="mt-16 text-center">
          <span className="font-body text-[11px] text-[#94A3B8] uppercase tracking-widest block font-medium">
            {portfolioData.name} • {portfolioData.role} • {portfolioData.location}
          </span>
          <span className="font-mono text-[10px] text-white/50 tracking-widest block mt-1">
            © {portfolioData.year} ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </section>
  );
}
