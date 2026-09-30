import React from 'react';

export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* 35mm Film Grain Simulation */}
      <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay" />
      
      {/* Edge Vignette */}
      <div className="absolute inset-0 cinematic-vignette" />
      
      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-[#0A3A55]/15 blur-[140px]" />
      <div className="absolute bottom-1/4 left-0 w-[45vw] h-[45vw] rounded-full bg-[#071D2A]/25 blur-[160px]" />
    </div>
  );
}
