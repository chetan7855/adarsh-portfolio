import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { assets } from '../data/portfolio';

const navItems = [
  { id: 'hero', label: 'START' },
  { id: 'about', label: 'PROFILE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/85 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E001F] rounded-md transition-transform duration-300 hover:scale-105"
            aria-label="Chetan Choudhary Portfolio Home"
          >
            <div className="w-9 h-9 md:w-11 md:h-11 relative flex items-center justify-center p-0.5">
              <img
                src={assets.logo}
                alt="Chetan Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(248,77,158,0.4)]"
                onError={(e) => {
                  e.target.src = '/logo/Print.svg';
                }}
              />
            </div>
            <span className="font-display text-2xl tracking-wider text-white hidden sm:inline-block opacity-90 group-hover:opacity-100 transition-opacity">
              CHETAN
            </span>
          </button>

          {/* Desktop Pill Navigation (Inspired directly by Reference Image) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#071D2A]/60 border border-[#0A3A55]/60 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-5 py-1.5 rounded-full font-body text-xs uppercase tracking-cinematic transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                    isActive
                      ? 'text-white font-semibold shadow-inner'
                      : 'text-[#777777] hover:text-[#F2F2F2] hover:tracking-[0.28em]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A3A55] to-[#061521] border border-[#0A3A55] -z-10 shadow-[0_0_15px_rgba(10,58,85,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Status */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8E001F] animate-pulse" />
            <span className="font-body text-[11px] uppercase tracking-widest text-[#777777]">
              AVAILABLE FOR COMMISSIONS
            </span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-[#071D2A]/60 border border-[#0A3A55]/40 text-[#F2F2F2] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center px-8"
          >
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <img src={assets.logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="font-display text-2xl tracking-wider text-white">CHETAN</span>
            </div>

            <nav className="flex flex-col items-center gap-7">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => scrollTo(item.id)}
                  className={`font-display text-5xl uppercase tracking-wider transition-colors ${
                    activeSection === item.id ? 'text-[#F2F2F2] border-b-2 border-[#8E001F]' : 'text-[#777777] hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-12 text-center">
              <p className="font-body text-xs tracking-widest text-[#777777] uppercase">
                Indore, India • Freelance Video Editor
              </p>
              <p className="font-body text-xs text-[#777777]/80 mt-1">
                chetan72006@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
