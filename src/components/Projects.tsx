import React, { useState, useEffect } from 'react';
import { ExternalLink, Copy, Check, Eye, ArrowLeft, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'horizon' | 'watch' | 'gym'>('all');
  const [deviceModes, setDeviceModes] = useState<Record<string, 'desktop' | 'mobile'>>({});

  // Allow ESC key to return to previous view
  useEffect(() => {
    if (!activeProjectModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectModal]);

  const handleCopy = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'horizon') return p.id === 'horizon';
    if (filter === 'watch') return p.id === 'spyrit-india';
    if (filter === 'gym') return p.id === 'the-iron-gym';
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#e8e5dd] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <span className="ml-1">Previous Work</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Live Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
              Real websites built for{' '}
              <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 decoration-2">
                maximum impact.
              </span>
            </h2>
          </div>

          {/* Clean Filter Tabs with Quad-Color accents */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl shadow-2xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              All Work ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('horizon')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'horizon'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-blue-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Horizon</span>
            </button>
            <button
              onClick={() => setFilter('watch')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'watch'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-amber-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Spyrit</span>
            </button>
            <button
              onClick={() => setFilter('gym')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'gym'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-rose-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Iron Gym</span>
            </button>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-card rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Browser Mockup Preview */}
                  <div className="lg:col-span-7 bg-neutral-900 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200">
                    {/* Browser Window Chrome with Classic Red, Yellow, Green Traffic Lights */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-100 border-b border-neutral-200 text-xs text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-rose-600/30" title="Close" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30" title="Minimize" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-600/30" title="Fullscreen" />
                      </div>
                      
                      {/* Simulated URL Bar with Live Status */}
                      <div className="bg-white border border-neutral-200 rounded px-3 py-1 text-[11px] font-mono text-neutral-700 max-w-xs truncate flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-neutral-400">https://</span>
                        <span className="font-medium">{project.url.replace('https://', '')}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Interactive Device Viewport Switcher */}
                        <div className="flex items-center gap-0.5 bg-white border border-neutral-200 rounded p-0.5 shadow-2xs">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeviceModes((prev) => ({ ...prev, [project.id]: 'desktop' }));
                            }}
                            className={`p-1 rounded text-xs transition-colors cursor-pointer ${
                              (deviceModes[project.id] ?? 'desktop') === 'desktop'
                                ? 'bg-neutral-900 text-white'
                                : 'text-neutral-500 hover:text-black'
                            }`}
                            title="Desktop canvas view"
                            aria-label="Desktop view"
                          >
                            <Monitor className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeviceModes((prev) => ({ ...prev, [project.id]: 'mobile' }));
                            }}
                            className={`p-1 rounded text-xs transition-colors cursor-pointer ${
                              deviceModes[project.id] === 'mobile'
                                ? 'bg-neutral-900 text-white'
                                : 'text-neutral-500 hover:text-black'
                            }`}
                            title="Mobile viewport presentation"
                            aria-label="Mobile viewport view"
                          >
                            <Smartphone className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Quick Copy Link Button */}
                        <button
                          onClick={(e) => handleCopy(project.url, e)}
                          title="Copy website link"
                          className="p-1 hover:text-neutral-900 text-neutral-500 rounded transition-colors cursor-pointer"
                        >
                          {copiedUrl === project.url ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* High Fidelity Project Screenshot / Visual Render with Desktop & Mobile Mode */}
                    <div
                      className="relative group cursor-pointer overflow-hidden aspect-video bg-neutral-950 flex items-center justify-center p-0 transition-all duration-300"
                      onClick={() => setActiveProjectModal(project)}
                    >
                      {deviceModes[project.id] === 'mobile' ? (
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center p-3">
                          {/* Smartphone Device Mockup */}
                          <div className="w-44 sm:w-52 h-[92%] bg-neutral-950 rounded-2xl p-1.5 border-2 border-neutral-700 shadow-2xl flex flex-col items-center animate-in zoom-in-95 duration-200">
                            <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1" />
                            <div className="w-full flex-1 rounded-xl overflow-hidden bg-neutral-900 relative">
                              <img
                                src={project.image}
                                alt={`${project.title} mobile responsive view`}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[9px] font-mono text-neutral-400 mt-1">
                              Mobile Responsive
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={`${project.title} website design preview`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />
                        </>
                      )}

                      {/* Hover Inspect badge */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg px-3 py-1.5 text-xs text-neutral-900 font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <Eye className="w-3.5 h-3.5 text-neutral-900" />
                        <span>Inspect Case Study</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                    <div>
                      {/* Category & Project Index with color identity */}
                      <div className="flex items-center justify-between gap-2 text-xs text-neutral-500 mb-3">
                        <span
                          className={`uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border text-[11px] ${
                            project.id === 'horizon'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : project.id === 'spyrit-india'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-rose-50 text-rose-700 border-rose-200'
                          }`}
                        >
                          {project.category}
                        </span>
                        <span className="font-mono text-neutral-400">Project 0{idx + 1}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-neutral-950 mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mb-4">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        &ldquo;{project.description}&rdquo;
                      </p>

                      {/* Highlights with color-coded bullet indicators */}
                      <div className="mb-6 space-y-2">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-700">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-xs text-neutral-600">
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                  project.id === 'horizon'
                                    ? 'bg-blue-600'
                                    : project.id === 'spyrit-india'
                                    ? 'bg-amber-400'
                                    : 'bg-rose-500'
                                }`}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Scope of Delivery */}
                      <div className="pt-4 border-t border-neutral-100 mb-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.servicesDelivered.map((serv) => (
                            <span
                              key={serv}
                              className="text-[11px] font-mono text-neutral-700 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-200"
                            >
                              {serv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-lg transition-all active:scale-95 shadow-xs hover:shadow-md"
                      >
                        <span>View Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Case Overview</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="bg-white border border-neutral-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation / Return Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-5">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 rounded-md transition-all cursor-pointer group shadow-2xs active:scale-95"
                aria-label="Return to previous screen"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[11px] text-neutral-400 font-mono">ESC to return</span>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="text-neutral-400 hover:text-neutral-700 p-1.5 text-sm rounded bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border inline-block bg-neutral-100 text-neutral-800 border-neutral-200">
                {activeProjectModal.category}
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 mt-2">
                {activeProjectModal.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 mb-5 bg-neutral-900 shadow-sm">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-5">
              {activeProjectModal.description}
            </p>

            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Full Scope of Work
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                {activeProjectModal.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <div className="text-xs font-mono text-neutral-500 truncate max-w-[200px] sm:max-w-xs">
                {activeProjectModal.url}
              </div>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-lg transition-colors shadow-xs"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
