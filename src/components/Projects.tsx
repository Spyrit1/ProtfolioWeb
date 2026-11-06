import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Copy, Check, Eye, ArrowLeft, Sparkles, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'watch' | 'gym'>('all');

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
    if (filter === 'watch') return p.id === 'spyrit-india';
    if (filter === 'gym') return p.id === 'the-iron-gym';
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#1c202a] bg-[#0a0c10]/40 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
              <span>Previous Work</span>
              <span aria-hidden="true" className="text-[#3b4252]">·</span>
              <span>Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Real websites built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbd69] to-[#c89e4b]">
                maximum impact.
              </span>
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#12151c] border border-[#222734] rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] text-neutral-950 shadow-xs'
                  : 'text-[#8a91a3] hover:text-white'
              }`}
            >
              All Projects (2)
            </button>
            <button
              onClick={() => setFilter('watch')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'watch'
                  ? 'bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] text-neutral-950 shadow-xs'
                  : 'text-[#8a91a3] hover:text-white'
              }`}
            >
              Spyrit Watches
            </button>
            <button
              onClick={() => setFilter('gym')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'gym'
                  ? 'bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] text-neutral-950 shadow-xs'
                  : 'text-[#8a91a3] hover:text-white'
              }`}
            >
              The Iron Gym
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="luxury-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Browser Mockup Preview */}
                  <div className="lg:col-span-7 bg-[#060709] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1f242f]">
                    {/* Browser Window Chrome */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f14] border-b border-[#1c202a] text-xs text-[#8a91a3]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#303746]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#303746]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#303746]" />
                      </div>
                      
                      {/* Simulated URL Bar */}
                      <div className="bg-[#08090c] border border-[#202532] rounded px-3 py-1 text-[11px] font-mono text-[#a5abbb] max-w-xs truncate flex items-center gap-1.5 shadow-inner">
                        <span className="text-[#596275]">https://</span>
                        <span>{project.url.replace('https://', '')}</span>
                      </div>

                      {/* Quick Copy Link Button */}
                      <button
                        onClick={(e) => handleCopy(project.url, e)}
                        title="Copy website link"
                        className="p-1 hover:text-[#dfbd69] text-[#7d8495] rounded transition-colors cursor-pointer"
                      >
                        {copiedUrl === project.url ? (
                          <Check className="w-3.5 h-3.5 text-[#dfbd69]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* High Fidelity Project Screenshot / Visual Render */}
                    <div
                      className="relative group cursor-pointer overflow-hidden aspect-video bg-[#08090c] flex items-center justify-center"
                      onClick={() => setActiveProjectModal(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} website design preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/40 via-transparent to-transparent pointer-events-none" />

                      {/* Hover Inspect badge */}
                      <div className="absolute bottom-4 right-4 bg-[#0a0c10]/90 backdrop-blur-md border border-[#2d3445] rounded-lg px-3 py-1.5 text-xs text-[#dfbd69] font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Case Study</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#0e1015]/60">
                    <div>
                      {/* Category & Project Index */}
                      <div className="flex items-center justify-between gap-2 text-xs text-[#8a91a3] mb-3">
                        <span className="uppercase tracking-wider font-semibold text-[#dfbd69]">
                          {project.category}
                        </span>
                        <span className="font-mono text-[#5f6677]">Project 0{idx + 1}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#9da3b4] font-medium mb-4">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-[#c7ccd9] leading-relaxed mb-6">
                        &ldquo;{project.description}&rdquo;
                      </p>

                      {/* Highlights */}
                      <div className="mb-6 space-y-2">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7e8597]">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-xs text-[#9da3b4]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69] mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Scope of Delivery */}
                      <div className="pt-4 border-t border-[#1e232e] mb-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.servicesDelivered.map((serv) => (
                            <span
                              key={serv}
                              className="text-[11px] font-mono text-[#9da3b4] bg-[#141720] px-2.5 py-1 rounded border border-[#242936]"
                            >
                              {serv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#1e232e]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all active:scale-95 shadow-[0_2px_12px_rgba(212,175,55,0.22)]"
                      >
                        <span>View Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#c7ccd9] hover:text-white bg-[#12151c] hover:bg-[#181c25] border border-[#232835] hover:border-[#384154] rounded-md transition-colors cursor-pointer"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="bg-[#0f1218] border border-[#282f3d] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-[#c7ccd9]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation / Return Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#202532] mb-5">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-[#161a22] hover:bg-[#202532] border border-[#2c3343] rounded-md transition-all cursor-pointer group shadow-xs active:scale-95"
                aria-label="Return to previous screen"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[11px] text-[#7d8495] font-mono">ESC to return</span>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="text-[#8a91a3] hover:text-white p-1 text-sm rounded bg-[#161a22] hover:bg-[#202532] transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#dfbd69] font-semibold">
                {activeProjectModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {activeProjectModal.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#232835] mb-5 bg-[#08090c]">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#b0b6c6] leading-relaxed mb-5">
              {activeProjectModal.description}
            </p>

            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-semibold text-[#8a91a3] uppercase tracking-wider">
                Full Scope of Work
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9da3b4]">
                {activeProjectModal.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#202532]">
              <div className="text-xs font-mono text-[#7d8495] truncate max-w-[200px] sm:max-w-xs">
                {activeProjectModal.url}
              </div>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-colors shadow-xs"
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
