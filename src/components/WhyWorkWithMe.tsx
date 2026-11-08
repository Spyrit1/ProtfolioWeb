import React from 'react';
import { motion } from 'motion/react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

const COLOR_ACCENTS = [
  { dot: 'bg-blue-600', num: 'text-blue-700 bg-blue-50 border-blue-200', tag: 'bg-blue-500' },
  { dot: 'bg-amber-400', num: 'text-amber-800 bg-amber-50 border-amber-200', tag: 'bg-amber-400' },
  { dot: 'bg-emerald-500', num: 'text-emerald-700 bg-emerald-50 border-emerald-200', tag: 'bg-emerald-500' },
  { dot: 'bg-rose-500', num: 'text-rose-700 bg-rose-50 border-rose-200', tag: 'bg-rose-500' },
  { dot: 'bg-blue-600', num: 'text-blue-700 bg-blue-50 border-blue-200', tag: 'bg-blue-500' },
  { dot: 'bg-emerald-500', num: 'text-emerald-700 bg-emerald-50 border-emerald-200', tag: 'bg-emerald-500' },
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#dedad0]/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <span className="ml-1">Why Work With Me</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>The Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight mb-4">
            A frictionless, single-partner experience{' '}
            <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 decoration-2">
              from concept to launch.
            </span>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            I don&apos;t just hand over static designs and disappear. I build the complete digital asset, ensuring it runs reliably on the web.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((reason, idx) => {
            const accent = COLOR_ACCENTS[idx % COLOR_ACCENTS.length];
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-card p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${accent.num}`}>
                      0{idx + 1}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 mb-2 group-hover:text-black transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-medium">
                    Guaranteed Standard
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${accent.tag}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
