import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, assets } from '../data/portfolio';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'START', target: 'hero' },
    { label: 'ABOUT', target: 'about' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'CONTACT', target: 'contact' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-16 overflow-hidden bg-[#0B111E]"
    >
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-[#BE123C]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center z-10">
        
        {/* Title & Character Composition (Directly Recreating Screen 1 of Reference) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 my-8"
        >
          {/* Character visual framed by rounded crimson shape */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            {/* The Crimson Circular Frame */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#BE123C] via-[#881337] to-[#4C0519] p-2 flex items-center justify-center shadow-[0_0_40px_rgba(190,18,60,0.35)] overflow-hidden border border-[#BE123C]/50">
              {/* Portrait Image */}
              <motion.img
                src={assets.anime[0]}
                alt={`${portfolioData.name} Portrait`}
                className="w-full h-full object-cover object-[center_20%] rounded-full filter brightness-95 contrast-105"
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                onError={(e) => {
                  e.target.src = '/adarsh-face.jpeg';
                }}
              />
              {/* Inner ambient shadow & dark blue rim lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E]/70 via-transparent to-transparent pointer-events-none rounded-full" />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
            </div>

            {/* Subtle blue accent glow behind the character */}
            <div className="absolute -inset-4 bg-[#0284C7]/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Major Display Typography: PORTFOLIO 2026 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-3 sm:gap-5">
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-wide text-white leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
                PORTFOLIO
              </h1>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-[#CBD5E1] font-medium leading-none drop-shadow-sm">
                {portfolioData.year}
              </span>
            </div>

            {/* Subtitle with small square bullet from reference */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex items-center gap-3 mt-4 text-[#F8FAFC]"
            >
              <span className="w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] flex-shrink-0" />
              <span className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-white">
                {portfolioData.role}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Interactive Menu (From Reference Screen 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="group relative px-6 py-1.5 font-body text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#94A3B8] hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:tracking-[0.36em]">
                {link.label}
              </span>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#BE123C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_6px_#BE123C]" />
            </button>
          ))}
        </motion.div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="font-body text-[10px] uppercase tracking-widest text-[#94A3B8] font-medium">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-[#94A3B8]/60 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-[#BE123C]"
          />
        </div>
      </motion.div>
    </section>
  );
}
