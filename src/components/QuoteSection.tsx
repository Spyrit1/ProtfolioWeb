import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#1c202a] bg-[#07080a] relative overflow-hidden">
      {/* Subtle ambient gold radial center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] pointer-events-none opacity-25 blur-[90px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#dfbd69] bg-[#dfbd69]/10 px-3 py-1 rounded-full border border-[#dfbd69]/20">
              Core Design Principle
            </span>
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug sm:leading-tight mb-6 text-balance">
            &ldquo;{PERSONAL_INFO.portfolioQuote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3 text-xs text-[#7e8597]">
            <div className="w-8 h-[1px] bg-[#272d3b]" />
            <span className="text-[#c7ccd9] font-semibold">{PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>{PERSONAL_INFO.title}</span>
            <div className="w-8 h-[1px] bg-[#272d3b]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
