import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, assets } from '../data/portfolio';
import Skills from './Skills';
import Services from './Services';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Ambient atmospheric lighting */}
      <div className="absolute inset-0 about-glow pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0A3A55]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Pill Indicator (Matching Reference Screen 2) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071D2A]/70 border border-[#0A3A55]/50 backdrop-blur-sm">
            <span className="px-3 py-0.5 rounded-full bg-[#0A3A55] text-white font-body text-xs uppercase tracking-cinematic font-semibold shadow-[0_0_12px_rgba(10,58,85,0.8)]">
              PROFILE
            </span>
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              PROJECTS
            </span>
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              CONTACT
            </span>
          </div>
        </div>

        {/* 2-Column Editorial Layout from Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Character Visual with Blue Spotlight & Name Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:text-left lg:items-start"
          >
            {/* Title Above Character */}
            <div className="mb-6">
              <span className="font-body text-xs tracking-cinematic text-[#777777] uppercase block mb-1">
                HELLO, I AM
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none">
                {portfolioData.name}
              </h2>
              <span className="font-body text-xs uppercase tracking-widest text-[#8E001F] font-semibold mt-1 inline-block">
                FREELANCE VIDEO EDITOR
              </span>
            </div>

            {/* Character in Spotlight Aura (Directly inspired by Reference Screen 2) */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#0A3A55]/50 bg-gradient-to-b from-[#061521] via-black to-black p-4 flex items-end justify-center shadow-[0_0_50px_rgba(10,58,85,0.35)] group">
              {/* Circular Cyan/Blue Spotlight Aura Behind Character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#0A3A55] via-[#071D2A] to-transparent blur-[60px] opacity-75 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              
              {/* Anime Character Image */}
              <img
                src={assets.anime[0]}
                alt="Chetan Portrait"
                className="relative z-10 w-full h-full object-contain object-bottom filter contrast-105 brightness-95 group-hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/animeimages/face.png';
                }}
              />

              {/* Edge Gradient & Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#777777] uppercase border-t border-white/10 pt-2">
                <span>INDORE, INDIA</span>
                <span className="text-white/70">DEV & CUT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Experience, Skills, Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* ABOUT ME Heading */}
            <div className="mb-6">
              <h2 className="font-display text-6xl sm:text-7xl text-white tracking-wide leading-none mb-3">
                ABOUT ME
              </h2>
              <p className="font-body text-sm sm:text-base text-[#F2F2F2]/90 leading-relaxed font-normal">
                {portfolioData.about}
              </p>
            </div>

            {/* Experience (Honest Starter Freelance) */}
            <div className="mt-4 pt-5 border-t border-white/10">
              <span className="font-body text-xs tracking-cinematic text-[#777777] uppercase block mb-1">
                EXPERIENCE
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-none">
                  {portfolioData.experience.title}
                </h4>
                <span className="font-body text-xs uppercase tracking-widest text-[#8E001F] font-semibold">
                  {portfolioData.experience.period}
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#777777] mt-2 leading-relaxed">
                {portfolioData.experience.description}
              </p>
            </div>

            {/* Software Skills */}
            <Skills />

            {/* What I Do / Services */}
            <Services />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
