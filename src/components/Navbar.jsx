import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData, assets } from '../data/portfolio';

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
          scrolled ? 'py-4 bg-[#0B111E]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE123C] rounded-md transition-transform duration-300 hover:scale-105"
            aria-label={`${portfolioData.name} Portfolio Home`}
          >
            <div className="w-9 h-9 md:w-11 md:h-11 relative flex items-center justify-center p-0.5">
              <img
                src={assets.logo}
                alt={`${portfolioData.name} Logo`}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(248,77,158,0.4)]"
                onError={(e) => {
                  e.target.src = '/logo/Print.svg';
                }}
              />
            </div>
            <span className="font-display text-2xl tracking-wider text-white hidden sm:inline-block opacity-90 group-hover:opacity-100 transition-opacity">
              {portfolioData.name.toUpperCase()}
            </span>
          </button>

          {/* Desktop Pill Navigation (Inspired directly by Reference Image) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#132A42]/60 border border-[#0284C7]/40 backdrop-blur-sm shadow-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-5 py-1.5 rounded-full font-body text-xs uppercase tracking-cinematic transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 font-medium ${
                    isActive
                      ? 'text-white font-semibold shadow-inner'
                      : 'text-[#94A3B8] hover:text-white hover:tracking-[0.28em]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0E1A2B] border border-[#0284C7] -z-10 shadow-[0_0_15px_rgba(2,132,199,0.7)]"
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
            <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-pulse shadow-[0_0_6px_#BE123C]" />
            <span className="font-body text-[11px] uppercase tracking-widest text-[#94A3B8] font-medium">
              AVAILABLE FOR COMMISSIONS
            </span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-[#132A42]/60 border border-[#0284C7]/40 text-[#F8FAFC] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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
            className="fixed inset-0 z-30 md:hidden bg-[#0B111E]/95 backdrop-blur-xl flex flex-col justify-center items-center px-8"
          >
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <img src={assets.logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="font-display text-2xl tracking-wider text-white">{portfolioData.name.toUpperCase()}</span>
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
                    activeSection === item.id ? 'text-white border-b-2 border-[#BE123C]' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-12 text-center">
              <p className="font-body text-xs tracking-widest text-[#94A3B8] uppercase font-medium">
                {portfolioData.location} • {portfolioData.status} {portfolioData.role}
              </p>
              <p className="font-body text-xs text-[#CBD5E1] mt-1 font-medium">
                {portfolioData.email} • +91 {portfolioData.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
