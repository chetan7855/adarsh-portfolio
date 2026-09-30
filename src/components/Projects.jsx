import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectVideo from './ProjectVideo';

export default function Projects() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted with sound

  const handlePlay = (id) => {
    setActiveVideoId(id);
  };

  const handlePause = (id) => {
    if (activeVideoId === id) {
      setActiveVideoId(null);
    }
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0A3A55]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#8E001F]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Pill Navigation Indicator (Screen 3 of Reference) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071D2A]/70 border border-[#0A3A55]/50 backdrop-blur-sm">
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              PROFILE
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#0A3A55] text-white font-body text-xs uppercase tracking-cinematic font-semibold shadow-[0_0_12px_rgba(10,58,85,0.8)]">
              PROJECTS
            </span>
            <span className="px-3 py-0.5 text-[#777777] font-body text-xs uppercase tracking-cinematic">
              CONTACT
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[#8E001F] font-semibold block mb-2">
            SELECTED EDITS & MOTION
          </span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none">
            RECAP PROJECT 2026
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#AAAAAA] uppercase tracking-widest mt-2">
            HOVER OR CLICK ANY REEL TO PREVIEW WITH FULL MUSIC & SOUND
          </p>

          {/* Quick Sound Control Pill */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-md ${
                !isMuted
                  ? 'bg-[#0A3A55]/40 border-[#0A3A55] text-white hover:border-[#8E001F] hover:bg-[#8E001F]/20'
                  : 'bg-black/60 border-white/15 text-[#777777] hover:text-white hover:border-white/30'
              }`}
            >
              {!isMuted ? (
                <>
                  <Volume2 size={14} className="text-emerald-400 animate-pulse" />
                  <span>REEL AUDIO ACTIVE • CLICK TO MUTE</span>
                </>
              ) : (
                <>
                  <VolumeX size={14} className="text-[#8E001F]" />
                  <span>REEL AUDIO MUTED • CLICK TO UNMUTE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 9:16 Vertical Reels Grid (Centered 3-column layout for 3 reels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {projects.map((proj) => (
            <ProjectVideo
              key={proj.id}
              project={proj}
              activeVideoId={activeVideoId}
              onPlay={handlePlay}
              onPause={handlePause}
              isMuted={isMuted}
              onToggleSound={toggleSound}
            />
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-16 text-center border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-body text-[#777777] tracking-wider uppercase">
          <span>ALL VIDEOS CUT & COLOR GRADED PERSONALLY</span>
          <span className="mt-2 sm:mt-0 font-mono text-[11px] text-white/50">
            CONTINUOUSLY UPDATING WITH NEW PROJECTS
          </span>
        </div>

      </div>
    </section>
  );
}
