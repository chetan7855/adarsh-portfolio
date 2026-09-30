import React from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FinalScreen from './components/FinalScreen';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#F2F2F2] selection:bg-[#8E001F] selection:text-white">
      {/* 35mm Grain & Atmosphere overlay */}
      <GrainOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Screen 1: Cinematic Hero Landing */}
        <Hero />

        {/* Screen 2: Profile, Bio, Skills & Services */}
        <About />

        {/* Screen 3: Editorial Asymmetric Video Gallery */}
        <Projects />

        {/* Screen 4: Contact & Social Channels */}
        <Contact />

        {/* Cinematic Final Screen */}
        <FinalScreen />
      </main>
    </div>
  );
}
