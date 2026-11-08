import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#d8d4c7] bg-[#dedad0]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-700 bg-neutral-100 px-3.5 py-1 rounded-full border border-neutral-200 font-medium">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </span>
              <span>Core Design Principle</span>
            </span>
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 leading-snug sm:leading-tight mb-6 text-balance">
            &ldquo;{PERSONAL_INFO.portfolioQuote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3 text-xs text-neutral-500">
            <div className="w-8 h-[1px] bg-neutral-200" />
            <span className="text-neutral-900 font-semibold">{PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>{PERSONAL_INFO.title}</span>
            <div className="w-8 h-[1px] bg-neutral-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
