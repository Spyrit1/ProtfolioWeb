import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenHireModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenHireModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    'Website Project Inquiry for Aditya'
  )}&body=${encodeURIComponent(
    'Hi Aditya,\n\nI came across your portfolio and would like to discuss building a website.\n\nProject details:\n\nLooking forward to hearing from you!'
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#e8e5dd] overflow-hidden border-b border-[#d8d4c7]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Kicker with Better Designs Logo & Quad-Color Palette */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs uppercase tracking-widest text-neutral-600 font-medium mb-5 shadow-2xs">
            <img
              src={PERSONAL_INFO.logo}
              alt="Better Designs"
              className="w-4 h-4 rounded object-contain bg-white"
            />
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            </div>
            <span className="ml-0.5">Contact</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{PERSONAL_INFO.brandName}</span>
          </div>

          {/* Strong Final CTA */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight leading-tight mb-4 text-balance">
            Have an idea for a website?
          </h2>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto font-normal mb-10 leading-relaxed text-balance">
            Let&apos;s turn it into a{' '}
            <span className="text-neutral-950 font-semibold underline decoration-neutral-300 underline-offset-4 decoration-2">
              professional online presence.
            </span>
          </p>

          {/* 3 Core Contact Buttons: Hire Me, Instagram, Email Me */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            {/* Hire Me Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenHireModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-neutral-900 hover:bg-black rounded-md transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            {/* Instagram Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-md transition-all active:scale-95 whitespace-nowrap shadow-2xs"
            >
              <Instagram className="w-4 h-4 text-neutral-700" />
              <span>Instagram</span>
              <span className="text-xs text-neutral-500 font-mono">({PERSONAL_INFO.instagramHandle})</span>
            </motion.a>

            {/* Email Me Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-md transition-all active:scale-95 whitespace-nowrap shadow-2xs"
            >
              <Mail className="w-4 h-4 text-neutral-700" />
              <span>Email Me</span>
            </motion.a>
          </div>

          {/* Direct Email Display with 1-Click Copy */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-600 shadow-2xs">
            <span className="text-neutral-400 font-mono">Direct Email:</span>
            <a
              href={mailtoHref}
              className="text-neutral-900 hover:text-black font-mono font-medium hover:underline transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email address"
              className="p-1 hover:text-black text-neutral-500 rounded transition-colors cursor-pointer"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-sans font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
