import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Clock, Globe, Shield, Sparkles } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenHireModal: (service?: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenHireModal }) => {
  const [projectScale, setProjectScale] = useState<'single' | 'core' | 'custom'>('core');
  const [needDomainSetup, setNeedDomainSetup] = useState(true);
  const [needHostingSetup, setNeedHostingSetup] = useState(true);
  const [needSeoSetup, setNeedSeoSetup] = useState(true);
  const [needRedesign, setNeedRedesign] = useState(false);

  // Configuration map
  const scaleDetails = {
    single: {
      title: 'High-Impact Landing Page',
      pages: '1 Single Dynamic Page',
      idealFor: 'Product launches, lead generation, personal portfolios & single offers',
      timelineDays: '4 – 6 Business Days',
      revisions: 'Unlimited design iterations',
      deliverablesCount: 5,
    },
    core: {
      title: 'Complete Core Business Website',
      pages: '3 to 5 Custom Pages',
      idealFor: 'Local businesses, agencies, gym brands, luxury stores & real estate',
      timelineDays: '7 – 10 Business Days',
      revisions: 'Unlimited design iterations',
      deliverablesCount: 8,
    },
    custom: {
      title: 'Bespoke Multi-Section Platform',
      pages: '6+ Pages & Dynamic Modules',
      idealFor: 'Growing brands, extensive catalogues, booking flows & custom needs',
      timelineDays: '12 – 16 Business Days',
      revisions: 'Unlimited design iterations',
      deliverablesCount: 12,
    },
  };

  const currentScale = scaleDetails[projectScale];

  const handleStartInquiry = () => {
    const serviceName = `${currentScale.title} (${currentScale.pages})`;
    onOpenHireModal(serviceName);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#e8e5dd] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <span className="ml-1">Project Scope Tool</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight mb-3">
            Plan your website scope &{' '}
            <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 decoration-2">
              estimated timeline.
            </span>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Select your project requirements to see expected turnaround times, included deliverables, and launch readiness.
          </p>
        </div>

        {/* Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Website Scale */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs">
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-neutral-800 mb-3">
                1. Select Website Scale
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectScale('single')}
                  className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                    projectScale === 'single'
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                  }`}
                >
                  <div className="text-xs font-mono font-bold mb-1">Landing Page</div>
                  <div className={`text-[11px] ${projectScale === 'single' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    1 High-converting page
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectScale('core')}
                  className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer relative ${
                    projectScale === 'core'
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                  }`}
                >
                  <span className="absolute -top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600 text-white font-semibold">
                    Popular
                  </span>
                  <div className="text-xs font-mono font-bold mb-1">Core Business</div>
                  <div className={`text-[11px] ${projectScale === 'core' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    3 – 5 Custom pages
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectScale('custom')}
                  className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                    projectScale === 'custom'
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                  }`}
                >
                  <div className="text-xs font-mono font-bold mb-1">Custom Platform</div>
                  <div className={`text-[11px] ${projectScale === 'custom' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    6+ Pages & features
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Included Technical Services */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs">
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-neutral-800 mb-3">
                2. Technical Infrastructure Handled by Aditya
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setNeedDomainSetup(!needDomainSetup)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    needDomainSetup
                      ? 'bg-blue-50/60 border-blue-200 text-neutral-900'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                    needDomainSetup ? 'bg-blue-600 text-white' : 'border border-neutral-300'
                  }`}>
                    {needDomainSetup && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-950">Domain Setup & DNS</div>
                    <div className="text-[11px] text-neutral-500 leading-snug">Connecting your custom .com or .site</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedHostingSetup(!needHostingSetup)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    needHostingSetup
                      ? 'bg-emerald-50/60 border-emerald-200 text-neutral-900'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                    needHostingSetup ? 'bg-emerald-600 text-white' : 'border border-neutral-300'
                  }`}>
                    {needHostingSetup && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-950">Cloud Hosting & SSL</div>
                    <div className="text-[11px] text-neutral-500 leading-snug">High-speed Edge deployment & HTTPS</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedSeoSetup(!needSeoSetup)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    needSeoSetup
                      ? 'bg-amber-50/60 border-amber-200 text-neutral-900'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                    needSeoSetup ? 'bg-amber-500 text-white' : 'border border-neutral-300'
                  }`}>
                    {needSeoSetup && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-950">SEO & Social Meta Cards</div>
                    <div className="text-[11px] text-neutral-500 leading-snug">Optimized for Google & preview links</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedRedesign(!needRedesign)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    needRedesign
                      ? 'bg-rose-50/60 border-rose-200 text-neutral-900'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                    needRedesign ? 'bg-rose-500 text-white' : 'border border-neutral-300'
                  }`}>
                    {needRedesign && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-950">Existing Site Redesign</div>
                    <div className="text-[11px] text-neutral-500 leading-snug">Modernizing an outdated website</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Real-Time Summary Output Card */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-500">
                Scope Summary
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                Available to Start
              </span>
            </div>

            {/* Scope Title */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">
                {currentScale.title}
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                {currentScale.pages}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Turnaround</span>
                </div>
                <div className="text-sm font-bold text-neutral-950">
                  {currentScale.timelineDays}
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1">
                  <Globe className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Go-Live</span>
                </div>
                <div className="text-sm font-bold text-neutral-950">
                  100% Handled
                </div>
              </div>
            </div>

            {/* What is included list */}
            <div className="space-y-2 mb-8 pt-4 border-t border-neutral-100">
              <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                What’s Included in this Scope:
              </div>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Custom modern UI/UX design (desktop + mobile)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Zero bloat, fast clean code & performance optimization</span>
                </li>
                {needDomainSetup && (
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Domain setup, DNS configuration & HTTPS SSL</span>
                  </li>
                )}
                {needHostingSetup && (
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Global CDN hosting deployment & live verification</span>
                  </li>
                )}
                {needSeoSetup && (
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Google SEO tags, sitemap.xml & social share cards</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleStartInquiry}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
            >
              <span>Inquire With This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-neutral-400 mt-2 font-mono">
              Opens quick pre-filled inquiry to iamspyrit@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
