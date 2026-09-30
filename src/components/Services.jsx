import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Services() {
  return (
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-3xl sm:text-4xl text-[#F2F2F2] tracking-wider">
          WHAT I DO
        </h3>
        <span className="font-body text-[10px] tracking-widest text-[#777777] uppercase hidden sm:inline-block">
          CORE FOCUS
        </span>
      </div>

      {/* Editorial Cinematic Services List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {portfolioData.services.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="group relative p-3 rounded-lg bg-[#071D2A]/40 border border-[#0A3A55]/30 hover:border-[#8E001F]/60 transition-all duration-300 flex flex-col justify-between"
          >
            <span className="font-body text-[10px] font-mono text-[#777777] group-hover:text-[#8E001F] transition-colors">
              0{index + 1}
            </span>
            <span className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none mt-2 group-hover:text-white transition-colors">
              {service}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
