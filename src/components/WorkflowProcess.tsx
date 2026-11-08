import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Palette, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WorkflowProcessProps {
  onOpenHireModal: (service?: string) => void;
}

interface Step {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  timeframe: string;
  colorName: 'blue' | 'yellow' | 'green' | 'red';
  dotColor: string;
  badgeColor: string;
  borderAccent: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  whatYouDo: string;
  whatAdityaDoes: string;
}

export const WorkflowProcess: React.FC<WorkflowProcessProps> = ({ onOpenHireModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      number: '01',
      id: 'discovery',
      title: 'Discovery & Architecture',
      subtitle: 'Blueprint & Strategy',
      timeframe: 'Days 1 – 3',
      colorName: 'blue',
      dotColor: 'bg-blue-600',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      borderAccent: 'border-blue-500',
      icon: Layers,
      description:
        'We define the project goals, target audience, page structure, content flow, and the key actions you want visitors to take.',
      deliverables: [
        'Site architecture & hierarchy plan',
        'Wireframe flow for desktop & mobile',
        'Content & typography direction',
        'Competitor & reference analysis',
      ],
      whatYouDo: 'Share your vision, reference links, and business goals.',
      whatAdityaDoes: 'Structures the pages, plans the user journey, and prepares the design blueprint.',
    },
    {
      number: '02',
      id: 'design',
      title: 'UI/UX Visual Design',
      subtitle: 'High-Fidelity Interface',
      timeframe: 'Days 4 – 7',
      colorName: 'yellow',
      dotColor: 'bg-amber-400',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      borderAccent: 'border-amber-400',
      icon: Palette,
      description:
        'Transforming the blueprint into modern, clean, and distinctive visual screens with refined typography, balanced spacing, and purposeful contrast.',
      deliverables: [
        'Interactive Figma design mockups',
        'Mobile, tablet & desktop screen layouts',
        'Color palette & typographic system',
        'Visual assets, hero composition & mockups',
      ],
      whatYouDo: 'Review the visual screens and give direct feedback.',
      whatAdityaDoes: 'Refines the design until you are completely satisfied with the look and feel.',
    },
    {
      number: '03',
      id: 'development',
      title: 'Clean Code Development',
      subtitle: 'Responsive Engineering',
      timeframe: 'Days 8 – 11',
      colorName: 'green',
      dotColor: 'bg-emerald-500',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      borderAccent: 'border-emerald-500',
      icon: Code2,
      description:
        'Coding the approved designs into lightweight, semantic, and ultra-fast web pages optimized for mobile touchscreens and search engines.',
      deliverables: [
        'Semantic, accessible HTML5/CSS/TypeScript',
        'Fluid responsive layout for all screen sizes',
        'Technical SEO: meta tags, OpenGraph, Schema.org',
        'Micro-interactions and smooth scroll motion',
      ],
      whatYouDo: 'Test the live preview staging link on your phone and laptop.',
      whatAdityaDoes: 'Builds clean, bug-free code with zero bloat and sub-second load times.',
    },
    {
      number: '04',
      id: 'deployment',
      title: 'Domain, Hosting & Launch',
      subtitle: 'Going Live to the World',
      timeframe: 'Days 12 – 14',
      colorName: 'red',
      dotColor: 'bg-rose-500',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      borderAccent: 'border-rose-500',
      icon: Rocket,
      description:
        'Connecting your custom domain, configuring DNS records, deploying to high-speed global cloud hosting, and making your website officially live.',
      deliverables: [
        'Custom domain DNS setup (A & CNAME records)',
        'Automatic SSL certificate (HTTPS security)',
        'Vercel / Cloud CDN hosting deployment',
        'Google Search Console indexing & sitemap',
      ],
      whatYouDo: 'Celebrate your brand’s new live online presence.',
      whatAdityaDoes: 'Handles 100% of the technical domain and hosting configurations.',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="process" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#dedad0]/40 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <span className="ml-1">The Roadmap</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Step-by-Step Delivery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight mb-3">
              How we take your website from{' '}
              <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 decoration-2">
                initial idea to live URL.
              </span>
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              No guesswork or technical headaches. I lead you through an organized 4-phase process with direct communication at every step.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>Average turnaround:</span>
            <span className="font-semibold text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
              5 – 14 Days Total
            </span>
          </div>
        </div>

        {/* 4-Step Interactive Pipeline Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-neutral-900 shadow-md'
                    : 'bg-neutral-50/70 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                }`}
              >
                {/* Active Indicator Top Stripe */}
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-1 ${step.dotColor}`} />
                )}

                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    Phase {step.number}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${step.dotColor}`} />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-white' : 'text-neutral-700'
                    }`}
                  />
                  <h3 className="text-xs sm:text-sm font-bold truncate">
                    {step.title.split('&')[0]}
                  </h3>
                </div>

                <p
                  className={`text-[11px] font-mono ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-500'
                  }`}
                >
                  {step.timeframe}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-card rounded-2xl p-6 sm:p-10 border border-neutral-200 bg-white shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Phase Summary */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${current.badgeColor}`}>
                      Phase {current.number}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {current.timeframe}
                    </span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-600 font-medium">
                      {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Dual Roles Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
                    <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                        Your Role
                      </div>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {current.whatYouDo}
                      </p>
                    </div>

                    <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                        Aditya&apos;s Role
                      </div>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {current.whatAdityaDoes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenHireModal(current.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-lg transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Start with {current.title.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-neutral-500">
                    Direct 1-on-1 communication via Email or Instagram
                  </span>
                </div>
              </div>

              {/* Right Column: Concrete Deliverables Checklist */}
              <div className="lg:col-span-5 bg-neutral-50/80 p-6 sm:p-7 rounded-xl border border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-800">
                    Phase Deliverables
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {current.deliverables.length} Key Milestones
                  </span>
                </div>

                <ul className="space-y-3">
                  {current.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                        current.colorName === 'blue'
                          ? 'text-blue-600'
                          : current.colorName === 'yellow'
                          ? 'text-amber-500'
                          : current.colorName === 'green'
                          ? 'text-emerald-600'
                          : 'text-rose-600'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-neutral-200/80 text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Standard Guarantee</span>
                  <span className="font-semibold text-neutral-800">Clean Code & Zero Bloat</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
