import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenHireModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenHireModal }) => {
  const whoIHelp = [
    {
      title: 'Growing Businesses & Brands',
      desc: 'Looking to replace outdated websites with high-converting, professional online presences that instill trust.',
    },
    {
      title: 'Creators & Independent Founders',
      desc: 'Needing custom-built, distinctive websites that showcase portfolios, sell products, and engage an audience.',
    },
    {
      title: 'Entrepreneurs & Individuals',
      desc: 'Starting with a raw concept and wanting a single trusted partner to turn it into a live, functioning website.',
    },
  ];

  const techStack = [
    'Figma UI/UX',
    'HTML5 & Semantic SEO',
    'Modern TypeScript',
    'React & Next.js',
    'Tailwind CSS',
    'Vercel & Cloud Edge',
    'Custom DNS & Domains',
    'Automated SSL & CDN',
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#dedad0]/50 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <span className="ml-1">About Me</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Philosophy & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
            Design with intention.{' '}
            <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 decoration-2">
              Code with precision.
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Editorial Image + Core Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Visual Workspace Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md">
              <img
                src="/assets/images/aditya_workspace_desk_1793958586390.jpg"
                alt="Aditya's studio desk workspace with design wireframes and clean development code on screen"
                className="w-full h-80 sm:h-96 object-cover brightness-[1] group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[11px] font-semibold bg-neutral-900/90 px-2.5 py-1 rounded border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                  <img
                    src={PERSONAL_INFO.logo}
                    alt="Better Designs"
                    className="w-3.5 h-3.5 rounded object-contain bg-white"
                  />
                  <span>Aditya · Better Designs</span>
                </span>
                <span className="text-[11px] font-mono text-white/90">
                  Design → Code → Launch
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Direct User Quote Statement */}
            <div className="p-6 bg-white border border-neutral-200 rounded-xl mb-6 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-neutral-900" />
              <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed pl-2">
                &ldquo;{PERSONAL_INFO.aboutBio}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              {PERSONAL_INFO.aboutExtended}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              I believe in direct collaboration and clear communication. When you partner with me, you speak directly with the designer and developer responsible for your project. No layers of account managers, no miscommunication.
            </p>

            {/* Tech Stack Pills (Clean Monochrome Neutral) */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                Core Stack & Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white text-neutral-700 border border-neutral-200 shadow-2xs hover:border-neutral-400 hover:text-black transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenHireModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-md transition-all cursor-pointer shadow-xs"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                <span>Explore my services</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Who I Help Cards */}
        <div className="pt-10 border-t border-neutral-200">
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-6">
            Who I Build Websites For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whoIHelp.map((item, idx) => {
              const cardAccents = [
                { num: 'text-blue-700 bg-blue-50 border-blue-200', dot: 'bg-blue-600' },
                { num: 'text-amber-800 bg-amber-50 border-amber-200', dot: 'bg-amber-400' },
                { num: 'text-emerald-700 bg-emerald-50 border-emerald-200', dot: 'bg-emerald-500' },
              ];
              const accent = cardAccents[idx % cardAccents.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all shadow-xs group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${accent.num}`}>
                      0{idx + 1}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-2 group-hover:text-black transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
