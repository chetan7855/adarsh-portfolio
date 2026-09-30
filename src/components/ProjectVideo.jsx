import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

export default function ProjectVideo({
  project,
  activeVideoId,
  onPlay,
  onPause,
  isMuted = false,
  onToggleSound
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync external active ID: if another video becomes active, pause and reset this one!
  useEffect(() => {
    if (activeVideoId !== project.id && isPlaying) {
      handlePause();
    }
  }, [activeVideoId]);

  // Keep video element muted state synchronized with isMuted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handlePlay = () => {
    if (!videoRef.current) return;
    onPlay(project.id);
    videoRef.current.muted = isMuted;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Playback gesture needed, falling back to muted preview:', err);
        // If unmuted playback was blocked by browser autoplay policy before user gesture,
        // start playback muted so user still gets the visual preview
        if (videoRef.current && !isMuted) {
          videoRef.current.muted = true;
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((e) => console.warn('Muted play also blocked:', e));
        }
      });
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset to first frame!
    setIsPlaying(false);
    onPause(project.id);
  };

  const handleMouseEnter = () => {
    handlePlay();
  };

  const handleMouseLeave = () => {
    handlePause();
  };

  const handleTouchToggle = () => {
    // A click/tap is a direct user activation gesture — immediately enable sound!
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleSoundBtnClick = (e) => {
    e.stopPropagation(); // Don't trigger card play/pause toggle
    const nextMuted = !isMuted;
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      // If currently playing, ensure audio is immediately audible
      if (isPlaying && !nextMuted) {
        videoRef.current.volume = 1;
      }
    }
    if (onToggleSound) {
      onToggleSound();
    }
  };

  // 9:16 Vertical Reel Aspect Ratio
  const getAspectClass = () => {
    return 'aspect-[9/16]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative group rounded-2xl overflow-hidden bg-[#061521] border border-[#0A3A55]/40 hover:border-[#8E001F]/80 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(10,58,85,0.45)] w-full max-w-[340px] sm:max-w-none mx-auto flex flex-col cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchToggle}
      role="region"
      aria-label={`${project.title} reel`}
    >
      {/* Video Container - Strict 9:16 Vertical Format */}
      <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-black flex items-center justify-center`}>
        
        {/* Video Element: playsInline, loop, audio enabled */}
        <video
          ref={videoRef}
          src={project.video}
          preload="metadata"
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90 contrast-105'
          }`}
        />

        {/* Ambient Overlay Gradient for cinematic depth and readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-50' : 'opacity-80'
          }`}
        />

        {/* 9:16 Reel Badge on top left */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10px] font-mono text-white/80 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8E001F] shadow-[0_0_6px_#8E001F]" />
          9:16 REEL
        </div>

        {/* Top Right Controls: Status indicator & Audio Toggle */}
        <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-2">
          {isPlaying && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8E001F] text-white font-body text-[10px] tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(142,0,31,0.7)]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              PLAYING
            </span>
          )}

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={handleSoundBtnClick}
            aria-label={isMuted ? "Unmute reel music" : "Mute reel music"}
            title={isMuted ? "Sound Muted • Click to turn sound ON" : "Music ON • Click to mute"}
            className={`p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 ${
              !isMuted
                ? 'bg-[#8E001F]/90 border-[#8E001F] text-white shadow-[0_0_12px_rgba(142,0,31,0.8)] hover:scale-110'
                : 'bg-black/70 border-white/20 text-[#888888] hover:text-white hover:border-[#8E001F]'
            }`}
          >
            {!isMuted ? (
              <Volume2 size={15} className="animate-pulse text-white" />
            ) : (
              <VolumeX size={15} />
            )}
          </button>
        </div>

        {/* Centered Subtle Play Indicator (Fades out when playing) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
            isPlaying ? 'opacity-0 scale-90' : 'opacity-85 scale-100 group-hover:scale-110'
          }`}
        >
          <div className="w-13 h-13 p-3.5 rounded-full bg-black/75 border border-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-2xl group-hover:border-[#8E001F] group-hover:bg-[#8E001F]/30 transition-all">
            <Play size={22} className="ml-1 text-white fill-white" />
          </div>
        </div>

        {/* Mobile touch hint */}
        <div className="sm:hidden absolute top-12 left-3.5 z-20 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white/70 uppercase">
          TAP TO PLAY / SOUND
        </div>

        {/* Bottom Details Overlay (Project Title, Tag, Label) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-14 pointer-events-none">
          <span className="font-body text-[10px] uppercase tracking-cinematic text-[#E63956] font-semibold block mb-1">
            {project.tag || 'SHORT FORM'}
          </span>
          <h4 className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none drop-shadow-md">
            {project.title}
          </h4>
          {project.label && (
            <p className="font-body text-xs text-[#CCCCCC] mt-1.5 tracking-wider uppercase line-clamp-1">
              {project.label}
            </p>
          )}

          <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-[#AAAAAA]">
            <span className="tracking-widest uppercase flex items-center gap-1.5">
              {!isMuted && isPlaying ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400">MUSIC AUDIO ON</span>
                </>
              ) : isMuted ? (
                'MUTED'
              ) : (
                'SOUND READY'
              )}
            </span>
            <span className="text-white/80 group-hover:text-white transition-colors">
              {isPlaying ? 'PAUSE' : 'CLICK / HOVER'}
            </span>
          </div>
        </div>

        {/* Subtle Frame Border */}
        <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-2xl" />
      </div>
    </motion.div>
  );
}
