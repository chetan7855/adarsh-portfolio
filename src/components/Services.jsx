import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Services() {
  return (
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wider">
          WHAT I DO
        </h3>
        <span className="font-body text-[10px] tracking-widest text-[#94A3B8] font-medium uppercase hidden sm:inline-block">
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
            className="group relative p-3 rounded-lg bg-[#132A42]/40 border border-[#0284C7]/30 hover:border-[#BE123C]/70 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_0_15px_rgba(2,132,199,0.25)]"
          >
            <span className="font-body text-[10px] font-mono text-[#94A3B8] group-hover:text-[#BE123C] font-semibold transition-colors">
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
