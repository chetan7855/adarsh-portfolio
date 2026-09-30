import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData, assets } from '../data/portfolio';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 bg-black border-t border-white/5 overflow-hidden flex flex-col justify-between"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 contact-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#0A3A55]/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#8E001F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Pill Navigation Indicator (Screen 4 of Reference) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071D2A]/70 border border-[#0A3A55]/50 backdrop-blur-sm">
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              PROFILE
            </span>
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              PROJECTS
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#0A3A55] text-white font-body text-xs uppercase tracking-cinematic font-semibold shadow-[0_0_12px_rgba(10,58,85,0.8)]">
              CONTACT PERSON
            </span>
          </div>
        </div>

        {/* Main 2-Column Split directly from Screen 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Circular Anime Frame + Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Circular Framed Character Portrait (Inspired by Reference) */}
            <div className="relative mb-8">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#071D2A] border-2 border-[#0A3A55] p-2 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(10,58,85,0.4)] relative group">
                {/* Second Anime Character visual (full.png) */}
                <img
                  src={assets.anime[1]}
                  alt="Chetan Avatar Character"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/animeimages/full.png';
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accent ring glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0A3A55] to-[#8E001F] blur-xl opacity-30 -z-10" />
            </div>

            {/* CONTACT ME Heading */}
            <h3 className="font-display text-5xl sm:text-6xl text-white tracking-wide leading-none mb-1">
              CONTACT ME
            </h3>
            <span className="font-body text-xs tracking-[0.25em] text-[#8E001F] uppercase font-semibold mb-6 block">
              VIDEO EDITOR • FREELANCE
            </span>

            {/* Contact Channels */}
            <div className="flex flex-col gap-4 w-full max-w-sm">

              {/* Email */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#061521]/80 border border-[#0A3A55]/40 hover:border-[#0A3A55] transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(10,58,85,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black/50 text-[#F2F2F2]">
                    <Mail size={18} className="group-hover:text-[#8E001F] transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="font-body text-[10px] uppercase tracking-wider text-[#777777] block">
                      DIRECT EMAIL
                    </span>
                    <span className="font-body text-sm font-semibold text-white group-hover:text-[#F2F2F2]">
                      {portfolioData.email}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-[#777777] group-hover:text-white transition-colors mr-2" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#061521]/40 border border-white/5">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black/50 text-[#777777]">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <span className="font-body text-[10px] uppercase tracking-wider text-[#777777] block">
                    LOCATION
                  </span>
                  <span className="font-body text-sm font-semibold text-white/90 uppercase tracking-wide">
                    {portfolioData.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Giant THANK YOU 2026 Display (Screen 4 of Reference) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <div className="relative">
              {/* Giant Display Typography */}
              <h2 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] text-white tracking-wide leading-none select-none">
                THANK YOU
              </h2>
              <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#777777] tracking-wider block mt-2 leading-none">
                {portfolioData.year}
              </span>

              {/* Sub-label */}
              <p className="font-body text-xs sm:text-sm text-[#777777] uppercase tracking-[0.3em] mt-6">
                FOR WATCHING & EXPLORING MY WORK
              </p>

              {/* Filmstrip / Creative Visual Decorative Accent from Reference */}
              <div className="mt-8 flex items-center justify-center lg:justify-end gap-3 opacity-60">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#8E001F]" />
                <span className="w-2 h-2 rounded-full bg-[#8E001F]" />
                <span className="font-mono text-[10px] tracking-widest text-[#777777]">
                  CHETAN CHOUDHARY • 2026
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Cinematic Footer Bar */}
      <div className="max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] font-body tracking-wider z-10">
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Logo" className="w-6 h-6 object-contain opacity-70" />
          <span className="uppercase">CHETAN CHOUDHARY — VIDEO EDITOR</span>
        </div>
        <div className="mt-4 sm:mt-0 font-mono text-[11px] text-white/40">
          DESIGNED FOR CINEMATIC IMMERSION
        </div>
      </div>
    </section>
  );
}
