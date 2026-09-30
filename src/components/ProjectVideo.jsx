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
      className="relative group rounded-2xl overflow-hidden bg-[#0E1A2B] border border-[#0284C7]/40 hover:border-[#BE123C] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(2,132,199,0.35)] w-full max-w-[340px] sm:max-w-none mx-auto flex flex-col cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchToggle}
      role="region"
      aria-label={`${project.title} reel`}
    >
      {/* Video Container - Strict 9:16 Vertical Format */}
      <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#0B111E] flex items-center justify-center`}>
        
        {/* Video Element: playsInline, loop, audio enabled */}
        <video
          ref={videoRef}
          src={project.video}
          preload="metadata"
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onError={(e) => {
            // Graceful fallback to demo video if source is unavailable
            if (!e.target.src.includes('video-04.mp4')) {
              e.target.src = '/assets/projects/video-04.mp4';
              e.target.load();
            }
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-95 contrast-105'
          }`}
        />

        {/* Ambient Overlay Gradient for cinematic depth and readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#0B111E] via-[#0B111E]/40 to-transparent transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-40' : 'opacity-75'
          }`}
        />

        {/* 9:16 Reel Badge on top left */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B111E]/80 border border-white/15 backdrop-blur-md text-[10px] font-mono text-white uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] shadow-[0_0_6px_#BE123C]" />
          9:16 REEL
        </div>

        {/* Top Right Controls: Status indicator & Audio Toggle */}
        <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-2">
          {isPlaying && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#BE123C] text-white font-body text-[10px] tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(190,18,60,0.7)] font-medium">
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
                ? 'bg-[#BE123C] border-[#BE123C] text-white shadow-[0_0_12px_rgba(190,18,60,0.8)] hover:scale-110'
                : 'bg-[#0B111E]/85 border-white/25 text-[#94A3B8] hover:text-white hover:border-[#BE123C]'
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
            isPlaying ? 'opacity-0 scale-90' : 'opacity-90 scale-100 group-hover:scale-110'
          }`}
        >
          <div className="w-13 h-13 p-3.5 rounded-full bg-[#0B111E]/80 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl group-hover:border-[#BE123C] group-hover:bg-[#BE123C]/40 transition-all">
            <Play size={22} className="ml-1 text-white fill-white" />
          </div>
        </div>

        {/* Mobile touch hint */}
        <div className="sm:hidden absolute top-12 left-3.5 z-20 px-2 py-0.5 rounded bg-[#0B111E]/80 text-[9px] font-mono text-white/90 uppercase border border-white/10">
          TAP TO PLAY / SOUND
        </div>

        {/* Bottom Details Overlay (Only Video Number and SHORT FORM) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-[#0B111E] via-[#0B111E]/90 to-transparent pt-14 pointer-events-none">
          <span className="font-body text-[10px] uppercase tracking-cinematic text-[#FB7185] font-semibold block mb-1">
            SHORT FORM
          </span>
          <h4 className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none drop-shadow-md">
            {project.title}
          </h4>

          <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-[#CBD5E1]">
            <span className="tracking-widest uppercase flex items-center gap-1.5 font-medium">
              {!isMuted && isPlaying ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-semibold">MUSIC AUDIO ON</span>
                </>
              ) : isMuted ? (
                'MUTED'
              ) : (
                'SOUND READY'
              )}
            </span>
            <span className="text-white font-medium group-hover:text-white transition-colors">
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
