import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Globe, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenHireModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      num: '01',
      label: 'Designing',
      detail: 'Figma & Custom UI/UX',
      info: 'Clean, brand-aligned visual architecture built to engage visitors and drive action.',
      icon: <Layers className="w-4 h-4 text-[#dfbd69]" />,
    },
    {
      num: '02',
      label: 'Development',
      detail: 'Clean, Fast Code',
      info: 'Lightweight modern stack engineered for instant load times and zero unnecessary bloat.',
      icon: <Code2 className="w-4 h-4 text-[#dfbd69]" />,
    },
    {
      num: '03',
      label: 'Domain Setup',
      detail: 'DNS & SSL Secure',
      info: 'Full DNS records configuration, email routing, and HTTPS security without headaches.',
      icon: <Globe className="w-4 h-4 text-[#dfbd69]" />,
    },
    {
      num: '04',
      label: 'Cloud Hosting',
      detail: '99.9% Uptime CDN',
      info: 'Fast edge distribution ensuring high reliability and rapid page delivery worldwide.',
      icon: <ShieldCheck className="w-4 h-4 text-[#dfbd69]" />,
    },
    {
      num: '05',
      label: 'Live Website',
      detail: 'Ready for Clients',
      info: 'Production launch with Google indexing readiness, ready to impress your customers.',
      icon: <Sparkles className="w-4 h-4 text-[#dfbd69]" />,
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-42 md:pb-28 border-b border-[#1c202a] overflow-hidden">
      {/* Subtle luxury ambient glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] pointer-events-none opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle hairline blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Kicker with Champagne Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-[#242935] text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-6 w-fit shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
              <span className="text-[#f5f6f8] font-semibold">{PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-[#3b4252]">·</span>
              <span className="text-[#c7ccd9]">{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-white tracking-tight leading-[1.14] mb-6 text-balance">
              I design, build and launch websites that make businesses look{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d697] via-[#dfbd69] to-[#c89e4b]">
                professional online.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#9da3b4] font-normal leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenHireModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#dfbd69] via-[#d4af37] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_26px_rgba(212,175,55,0.4)] cursor-pointer whitespace-nowrap"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#c7ccd9] hover:text-white bg-[#101217] hover:bg-[#161a22] border border-[#232834] hover:border-[#384154] rounded-md transition-all whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Short Quote Callout */}
            <div className="pt-6 border-t border-[#1a1e27] flex items-center gap-3">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#dfbd69] to-transparent shrink-0" />
              <blockquote className="text-sm italic text-[#8a91a3]">
                &ldquo;{PERSONAL_INFO.heroQuote}&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column: Interactive Lifecycle Pipeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="luxury-card rounded-2xl p-6 sm:p-7 relative transition-all duration-300">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#202530]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#dfbd69]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e6e8ee]">
                    Interactive Delivery Pipeline
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#dfbd69] bg-[#dfbd69]/10 px-2 py-0.5 rounded border border-[#dfbd69]/20">
                  Turnkey
                </span>
              </div>

              <p className="text-xs text-[#8a91a3] mb-5 leading-relaxed">
                Click any stage to see what is handled during your project:
              </p>

              {/* Vertical Process Timeline */}
              <div className="space-y-2.5 relative">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={step.label}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex flex-col p-3 rounded-lg border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#181c25] border-[#dfbd69]/40 shadow-[0_2px_12px_rgba(212,175,55,0.08)]'
                          : 'bg-[#0f1116] border-[#1e232e] hover:border-[#2d3445]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${
                              isCurrent
                                ? 'bg-[#dfbd69] text-neutral-950'
                                : 'bg-[#151820] text-[#7d8495] border border-[#242936]'
                            }`}
                          >
                            {step.num}
                          </span>
                          <span className={`text-xs font-semibold ${isCurrent ? 'text-white' : 'text-[#c7ccd9]'}`}>
                            {step.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#8a91a3]">{step.detail}</span>
                      </div>

                      {isCurrent && (
                        <p className="mt-2.5 pt-2 text-[11px] text-[#9da3b4] leading-relaxed border-t border-[#262c3a] animate-in fade-in duration-150">
                          {step.info}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Indicator */}
              <div className="mt-5 pt-4 border-t border-[#1e232e] flex items-center justify-between text-xs text-[#8a91a3]">
                <span className="flex items-center gap-1.5 text-[#b0b6c6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dfbd69]" />
                  Zero middle-men or handoffs
                </span>
                <span className="text-[#dfbd69] font-mono font-medium text-[11px]">Direct with Aditya</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Metric Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-[#1a1e27] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#0f1217] border border-[#1e232e]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1 flex items-baseline gap-1">
              <span>100</span>
              <span className="text-xs text-[#dfbd69] font-mono font-normal">%</span>
            </div>
            <div className="text-xs text-[#8a91a3] leading-snug">
              Complete Delivery from Design to Live URL
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1217] border border-[#1e232e]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1 flex items-baseline gap-1">
              <span>&lt; 1</span>
              <span className="text-xs text-[#dfbd69] font-mono font-normal">sec</span>
            </div>
            <div className="text-xs text-[#8a91a3] leading-snug">
              Optimized Core Web Vitals & Load Speed
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1217] border border-[#1e232e]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1 flex items-baseline gap-1">
              <span>0</span>
              <span className="text-xs text-[#dfbd69] font-mono font-normal">Bloat</span>
            </div>
            <div className="text-xs text-[#8a91a3] leading-snug">
              Clean Semantic Code without Heavy Plugins
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1217] border border-[#1e232e]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1 flex items-baseline gap-1">
              <span>24/7</span>
              <span className="text-xs text-[#dfbd69] font-mono font-normal">Uptime</span>
            </div>
            <div className="text-xs text-[#8a91a3] leading-snug">
              Global Cloud CDN & Free SSL Certificates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
