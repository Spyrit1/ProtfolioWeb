import React from 'react';
import { motion } from 'motion/react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#1c202a] bg-[#090b0e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
            <span>Why Work With Me</span>
            <span aria-hidden="true" className="text-[#3b4252]">·</span>
            <span>The Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            A frictionless, single-partner experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbd69] to-[#c89e4b]">
              from concept to launch.
            </span>
          </h2>
          <p className="text-sm text-[#9da3b4] leading-relaxed">
            I don&apos;t just hand over static designs and disappear. I build the complete digital asset, ensuring it runs reliably on the web.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="luxury-card p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#dfbd69] font-bold">
                    0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#272d3b]" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#dfbd69] transition-colors">
                  {reason.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8a91a3] leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1e232e]">
                <span className="text-[11px] font-mono text-[#7d8495] uppercase tracking-wider">
                  Guaranteed Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
