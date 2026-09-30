import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData, assets } from '../data/portfolio';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 bg-[#0B111E] border-t border-white/10 overflow-hidden flex flex-col justify-between"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 contact-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#0284C7]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#BE123C]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Pill Navigation Indicator (Screen 4 of Reference) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#132A42]/60 border border-[#0284C7]/40 backdrop-blur-sm shadow-md">
            <span className="px-3 py-0.5 text-[#94A3B8] hover:text-white font-body text-xs uppercase tracking-cinematic transition-colors">
              PROFILE
            </span>
            <span className="px-3 py-0.5 text-[#94A3B8] hover:text-white font-body text-xs uppercase tracking-cinematic transition-colors">
              PROJECTS
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#0284C7] text-white font-body text-xs uppercase tracking-cinematic font-semibold shadow-[0_0_12px_rgba(2,132,199,0.8)]">
              CONTACT PERSON
            </span>
          </div>
        </div>

        {/* Main 2-Column Split directly from Screen 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Circular Portrait Frame + Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Circular Framed Character Portrait (Inspired by Reference) */}
            <div className="relative mb-8">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#0E1A2B] border-2 border-[#0284C7] p-2 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(2,132,199,0.3)] relative group">
                {/* Portrait Image */}
                <img
                  src={assets.anime[1]}
                  alt={`${portfolioData.name} Avatar`}
                  className="w-full h-full object-cover object-[center_20%] rounded-full filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/adarsh-face.jpeg';
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accent ring glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0284C7] to-[#BE123C] blur-xl opacity-30 -z-10" />
            </div>

            {/* CONTACT ME Heading */}
            <h3 className="font-display text-5xl sm:text-6xl text-white tracking-wide leading-none mb-1">
              CONTACT ME
            </h3>
            <span className="font-body text-xs tracking-[0.25em] text-[#BE123C] uppercase font-semibold mb-6 block">
              VIDEO EDITOR • FREELANCE
            </span>

            {/* Contact Channels */}
            <div className="flex flex-col gap-4 w-full max-w-sm">

              {/* Email */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#132A42]/50 border border-[#0284C7]/40 hover:border-[#0284C7] transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(2,132,199,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#0B111E]/70 text-[#F8FAFC]">
                    <Mail size={18} className="group-hover:text-[#BE123C] transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="font-body text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium block">
                      DIRECT EMAIL
                    </span>
                    <span className="font-body text-sm font-semibold text-white group-hover:text-white">
                      {portfolioData.email}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-[#94A3B8] group-hover:text-white transition-colors mr-2" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.phone}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#132A42]/50 border border-[#0284C7]/40 hover:border-[#0284C7] transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(2,132,199,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#0B111E]/70 text-[#F8FAFC]">
                    <Phone size={18} className="group-hover:text-[#BE123C] transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="font-body text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium block">
                      PHONE / WHATSAPP
                    </span>
                    <span className="font-body text-sm font-semibold text-white group-hover:text-white">
                      +91 {portfolioData.phone}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-[#94A3B8] group-hover:text-white transition-colors mr-2" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#132A42]/30 border border-white/10">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#0B111E]/70 text-[#94A3B8]">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <span className="font-body text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium block">
                    LOCATION
                  </span>
                  <span className="font-body text-sm font-semibold text-white uppercase tracking-wide">
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
              <h2 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] text-white tracking-wide leading-none select-none drop-shadow-md">
                THANK YOU
              </h2>
              <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#CBD5E1] tracking-wider block mt-2 leading-none">
                {portfolioData.year}
              </span>

              {/* Sub-label */}
              <p className="font-body text-xs sm:text-sm text-[#CBD5E1] uppercase tracking-[0.3em] mt-6 font-medium">
                FOR WATCHING & EXPLORING MY WORK
              </p>

              {/* Filmstrip / Creative Visual Decorative Accent from Reference */}
              <div className="mt-8 flex items-center justify-center lg:justify-end gap-3 opacity-80">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#BE123C]" />
                <span className="w-2 h-2 rounded-full bg-[#BE123C]" />
                <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] font-medium">
                  {portfolioData.name.toUpperCase()} • {portfolioData.year}
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Cinematic Footer Bar */}
      <div className="max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] font-body tracking-wider z-10 font-medium">
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Logo" className="w-6 h-6 object-contain opacity-80" />
          <span className="uppercase text-white/90">{portfolioData.name.toUpperCase()} — VIDEO EDITOR</span>
        </div>
        <div className="mt-4 sm:mt-0 font-mono text-[11px] text-white/60">
          DESIGNED FOR CINEMATIC IMMERSION
        </div>
      </div>
    </section>
  );
}
