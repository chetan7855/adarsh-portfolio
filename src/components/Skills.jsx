import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  return (
    <div className="mt-8 pt-6 border-t border-white/10">
      <h3 className="font-display text-3xl sm:text-4xl text-[#F2F2F2] tracking-wider mb-4">
        SOFTWARE SKILLS
      </h3>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#061521]/80 border border-[#0A3A55]/50 hover:border-[#0A3A55] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(10,58,85,0.45)]"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0A3A55]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-black/40 border border-white/5 flex-shrink-0">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if mirrored path differs
                  if (skill.name.includes('After')) e.target.src = '/icon logo/adobe-after-effect-logo-icon-free-vector.webp';
                  if (skill.name.includes('Premiere')) e.target.src = '/assets/software/pr pro logo.png';
                  if (skill.name.includes('CapCut')) e.target.src = '/icon logo/capcut-transparent-icon-free-png.webp';
                  if (skill.name.includes('Photo')) e.target.src = '/icon logo/adobe-photoshop-logo-icon-free-vector.webp';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl text-white tracking-wide leading-none group-hover:text-white transition-colors">
                {skill.shortName}
              </span>
              <span className="font-body text-[9px] uppercase tracking-wider text-[#777777]">
                WORKFLOW TOOL
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
