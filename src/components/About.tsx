import React from 'react';
import { ArrowUpRight, Check, Code2, Cpu, Globe, Layers, ShieldCheck, Sparkles } from 'lucide-react';
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
    <section id="about" className="py-20 md:py-28 border-b border-[#1c202a] bg-[#0a0c10]/60 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
            <span>About Me</span>
            <span aria-hidden="true" className="text-[#3b4252]">·</span>
            <span>Philosophy & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Design with intention.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbd69] to-[#c89e4b]">
              Code with precision.
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Editorial Image + Core Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Visual Workspace Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group overflow-hidden rounded-2xl border border-[#242936] bg-[#12151c] shadow-2xl">
              <img
                src="/src/assets/images/aditya_workspace_desk_1793958586390.jpg"
                alt="Aditya's studio desk workspace with design wireframes and clean development code on screen"
                className="w-full h-80 sm:h-96 object-cover brightness-[0.95] group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-[#08090b]/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#f5f6f8] font-semibold bg-[#12151c]/90 px-2.5 py-1 rounded border border-[#272d3b] backdrop-blur-sm">
                  Aditya · Workspace
                </span>
                <span className="text-[11px] text-[#dfbd69] font-mono">
                  Design → Code → Launch
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Direct User Quote Statement */}
            <div className="p-6 bg-[#11141b] border border-[#232834] rounded-xl mb-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#dfbd69]" />
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed pl-2">
                &ldquo;{PERSONAL_INFO.aboutBio}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed mb-6">
              {PERSONAL_INFO.aboutExtended}
            </p>

            <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed mb-8">
              I believe in direct collaboration and clear communication. When you partner with me, you speak directly with the designer and developer responsible for your project. No layers of account managers, no miscommunication.
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-wider text-[#7e8597] font-semibold mb-3">
                Core Stack & Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#12151c] text-[#c7ccd9] border border-[#222733] hover:border-[#dfbd69]/40 hover:text-white transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all cursor-pointer shadow-[0_2px_12px_rgba(212,175,55,0.2)]"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9da3b4] hover:text-[#dfbd69] transition-colors"
              >
                <span>Explore my services</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Who I Help Cards */}
        <div className="pt-10 border-t border-[#1a1e27]">
          <h3 className="text-xs uppercase tracking-wider text-[#7e8597] font-semibold mb-6">
            Who I Build Websites For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whoIHelp.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-[#202531] bg-[#101319] hover:border-[#dfbd69]/30 transition-all shadow-sm group"
              >
                <div className="text-xs font-mono text-[#dfbd69] mb-2 font-semibold">0{idx + 1}</div>
                <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-[#dfbd69] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8a91a3] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
