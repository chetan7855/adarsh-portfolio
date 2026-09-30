import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectVideo from './ProjectVideo';

export default function Projects() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted with sound
  const [visibleCount, setVisibleCount] = useState(6); // Show initial 6 reels, easily expandable

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

  const displayedProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, projects.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    const el = document.getElementById('projects-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 bg-[#0B111E] border-t border-white/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0284C7]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#BE123C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Pill Navigation Indicator (Screen 3 of Reference) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#132A42]/60 border border-[#0284C7]/40 backdrop-blur-sm shadow-md">
            <span className="px-3 py-0.5 text-[#94A3B8] hover:text-white font-body text-xs uppercase tracking-cinematic transition-colors">
              PROFILE
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#0284C7] text-white font-body text-xs uppercase tracking-cinematic font-semibold shadow-[0_0_12px_rgba(2,132,199,0.8)]">
              PROJECTS
            </span>
            <span className="px-3 py-0.5 text-[#94A3B8] hover:text-white font-body text-xs uppercase tracking-cinematic transition-colors">
              CONTACT
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BE123C]/15 border border-[#BE123C]/30 mb-3.5">
            <Sparkles size={12} className="text-[#FB7185]" />
            <span className="font-mono text-[10px] tracking-widest text-[#FB7185] uppercase font-semibold">
              18 SHORT FORM REELS • 9:16 VERTICAL
            </span>
          </div>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none">
            RECAP PROJECT 2026
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#CBD5E1] uppercase tracking-widest mt-2 font-medium">
            HOVER OR CLICK ANY REEL TO PREVIEW WITH FULL MUSIC & SOUND
          </p>

          {/* Quick Sound Control Pill */}
          <div className="flex justify-center mt-5">
            <button
              type="button"
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-md ${
                !isMuted
                  ? 'bg-[#0284C7]/30 border-[#0284C7] text-white hover:border-[#BE123C] hover:bg-[#BE123C]/20'
                  : 'bg-[#0B111E]/80 border-white/20 text-[#94A3B8] hover:text-white hover:border-[#0284C7]'
              }`}
            >
              {!isMuted ? (
                <>
                  <Volume2 size={14} className="text-emerald-400 animate-pulse" />
                  <span>REEL AUDIO ACTIVE • CLICK TO MUTE</span>
                </>
              ) : (
                <>
                  <VolumeX size={14} className="text-[#BE123C]" />
                  <span>REEL AUDIO MUTED • CLICK TO UNMUTE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 9:16 Vertical Reels Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((proj) => (
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
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Controls */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="text-center font-mono text-xs text-[#94A3B8]">
            SHOWING <span className="text-white font-bold">{displayedProjects.length}</span> OF <span className="text-white font-bold">{projects.length}</span> SHORT FORM VIDEOS
          </div>

          <div className="flex items-center gap-4">
            {hasMore ? (
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#132A42] hover:bg-[#0284C7] text-white font-body text-xs uppercase tracking-cinematic transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] hover:scale-105 border border-[#0284C7]/60 font-semibold"
              >
                <span>LOAD MORE VIDEOS (+{Math.min(6, projects.length - visibleCount)})</span>
                <ChevronDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            ) : projects.length > 6 ? (
              <button
                onClick={handleShowLess}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#132A42]/50 hover:bg-[#132A42] text-[#CBD5E1] hover:text-white font-body text-xs uppercase tracking-cinematic transition-all duration-300 border border-white/10"
              >
                <span>SHOW LESS</span>
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-16 text-center border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-body text-[#94A3B8] tracking-wider uppercase font-medium">
          <span>ALL 18 REELS • 9:16 SHORT FORM FORMAT</span>
          <span className="mt-2 sm:mt-0 font-mono text-[11px] text-white/70">
            CONTINUOUSLY UPDATING WITH NEW PROJECTS
          </span>
        </div>

      </div>
    </section>
  );
}
