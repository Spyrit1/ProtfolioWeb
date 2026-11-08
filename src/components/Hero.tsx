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
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      activeBg: 'bg-blue-600 text-white',
      icon: <Layers className="w-4 h-4 text-blue-600" />,
    },
    {
      num: '02',
      label: 'Development',
      detail: 'Clean, Fast Code',
      info: 'Lightweight modern stack engineered for instant load times and zero unnecessary bloat.',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      activeBg: 'bg-amber-500 text-white',
      icon: <Code2 className="w-4 h-4 text-amber-600" />,
    },
    {
      num: '03',
      label: 'Domain Setup',
      detail: 'DNS & SSL Secure',
      info: 'Full DNS records configuration, email routing, and HTTPS security without headaches.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      activeBg: 'bg-emerald-600 text-white',
      icon: <Globe className="w-4 h-4 text-emerald-600" />,
    },
    {
      num: '04',
      label: 'Cloud Hosting',
      detail: '99.9% Uptime CDN',
      info: 'Fast edge distribution ensuring high reliability and rapid page delivery worldwide.',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      activeBg: 'bg-blue-600 text-white',
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
    },
    {
      num: '05',
      label: 'Live Website',
      detail: 'Ready for Clients',
      info: 'Production launch with Google indexing readiness, ready to impress your customers.',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      activeBg: 'bg-rose-600 text-white',
      icon: <Sparkles className="w-4 h-4 text-rose-600" />,
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#d8d4c7] bg-[#e8e5dd] overflow-hidden">
      {/* Subtle architectural hairline grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c4bfb0 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean kicker badge with Better Designs Logo & 4-color dots */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs uppercase tracking-widest text-neutral-600 font-medium mb-6 w-fit shadow-2xs">
              <img
                src={PERSONAL_INFO.logo}
                alt="Better Designs Logo"
                className="w-4 h-4 rounded object-contain bg-white"
              />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" title="Blue" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Yellow" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Green" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" title="Red" />
              </div>
              <span className="text-neutral-900 font-semibold">{PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-600">{PERSONAL_INFO.brandName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-neutral-950 tracking-tight leading-[1.14] mb-6 text-balance">
              I design, build and launch websites that make businesses look{' '}
              <span className="text-neutral-900 underline decoration-amber-400 underline-offset-4 decoration-2">
                professional online.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenHireModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-neutral-900 hover:bg-black rounded-md transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-700 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-md transition-all whitespace-nowrap shadow-2xs"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Short Quote Callout with 4-color vertical strip */}
            <div className="pt-6 border-t border-neutral-200 flex items-center gap-3">
              <div className="flex flex-col gap-0.5 shrink-0">
                <span className="w-1 h-2 rounded-full bg-blue-600" />
                <span className="w-1 h-2 rounded-full bg-amber-400" />
                <span className="w-1 h-2 rounded-full bg-emerald-500" />
                <span className="w-1 h-2 rounded-full bg-rose-500" />
              </div>
              <blockquote className="text-sm italic text-neutral-600">
                &ldquo;{PERSONAL_INFO.heroQuote}&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column: Interactive Lifecycle Pipeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="editorial-card rounded-2xl p-6 sm:p-7 relative transition-all duration-300">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={PERSONAL_INFO.logo}
                    alt="Better Designs"
                    className="w-5 h-5 rounded object-contain bg-white border border-neutral-200 p-0.5"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    Full-Cycle Website Delivery
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                  Turnkey
                </span>
              </div>

              <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                Click each phase to explore how your project is handled from zero to launch:
              </p>

              {/* Vertical Process Timeline */}
              <div className="space-y-2.5 relative">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <motion.div
                      key={step.label}
                      whileHover={{ x: 2 }}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex flex-col p-3 rounded-lg border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                          : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${
                              isCurrent
                                ? 'bg-white text-neutral-900 shadow-2xs'
                                : step.color
                            }`}
                          >
                            {step.num}
                          </span>
                          <span className={`text-xs font-semibold ${isCurrent ? 'text-white' : 'text-neutral-800'}`}>
                            {step.label}
                          </span>
                        </div>
                        <span className={`text-[11px] font-mono ${isCurrent ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {step.detail}
                        </span>
                      </div>

                      {isCurrent && (
                        <p className="mt-2.5 pt-2 text-[11px] text-neutral-300 leading-relaxed border-t border-neutral-800 animate-in fade-in duration-150">
                          {step.info}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Quick Indicator */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1.5 text-neutral-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Turnkey & ready for business
                </span>
                <span className="text-neutral-900 font-mono font-semibold text-[11px]">100% Handled</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Metric Strip Below Hero with Blue, Yellow, Green, Red Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Blue: 100% Handled */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-200/80 shadow-2xs hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display flex items-baseline gap-1">
                <span>100</span>
                <span className="text-xs text-blue-600 font-mono font-bold">%</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-blue-500" title="Blue" />
            </div>
            <div className="text-xs text-neutral-600 leading-snug">
              Complete Delivery from Design to Live URL
            </div>
          </div>

          {/* Yellow: < 1 sec Speed */}
          <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/80 shadow-2xs hover:border-amber-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display flex items-baseline gap-1">
                <span>&lt; 1</span>
                <span className="text-xs text-amber-600 font-mono font-bold">sec</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-400" title="Yellow" />
            </div>
            <div className="text-xs text-neutral-600 leading-snug">
              Optimized Core Web Vitals & Load Speed
            </div>
          </div>

          {/* Green: 0 Bloat */}
          <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display flex items-baseline gap-1">
                <span>0</span>
                <span className="text-xs text-emerald-600 font-mono font-bold">Bloat</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500" title="Green" />
            </div>
            <div className="text-xs text-neutral-600 leading-snug">
              Clean Semantic Code without Heavy Plugins
            </div>
          </div>

          {/* Red: 24/7 Uptime */}
          <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200/80 shadow-2xs hover:border-rose-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display flex items-baseline gap-1">
                <span>24/7</span>
                <span className="text-xs text-rose-600 font-mono font-bold">Uptime</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-rose-500" title="Red" />
            </div>
            <div className="text-xs text-neutral-600 leading-snug">
              Global Cloud CDN & Free SSL Certificates
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
