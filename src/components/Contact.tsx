import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-24 md:py-32 relative bg-[#07080a] overflow-hidden border-b border-[#1c202a]">
      {/* Luxury radial gold lighting */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161d] border border-[#232835] text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
            <span>Contact</span>
            <span aria-hidden="true" className="text-[#3b4252]">·</span>
            <span>Let&apos;s Build Together</span>
          </div>

          {/* Strong Final CTA */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Have an idea for a website?
          </h2>

          <p className="text-lg sm:text-xl text-[#9da3b4] max-w-2xl mx-auto font-normal mb-10 leading-relaxed text-balance">
            Let&apos;s turn it into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] font-semibold">
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#dfbd69] via-[#d4af37] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_26px_rgba(212,175,55,0.4)] cursor-pointer whitespace-nowrap"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#c7ccd9] hover:text-white bg-[#101217] hover:bg-[#151820] border border-[#232835] hover:border-[#384154] rounded-md transition-all active:scale-95 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#dfbd69]" />
              <span>Instagram</span>
              <span className="text-xs text-[#7d8495] font-mono">({PERSONAL_INFO.instagramHandle})</span>
            </motion.a>

            {/* Email Me Button (Opens email client via mailto) */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#c7ccd9] hover:text-white bg-[#101217] hover:bg-[#151820] border border-[#232835] hover:border-[#384154] rounded-md transition-all active:scale-95 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-[#dfbd69]" />
              <span>Email Me</span>
            </motion.a>
          </div>

          {/* Direct Email Display with 1-Click Copy */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#101217] border border-[#232834] rounded-xl text-xs text-[#8a91a3] shadow-inner">
            <span className="text-[#6c7486] font-mono">Direct Email:</span>
            <a
              href={mailtoHref}
              className="text-[#f5f6f8] hover:text-[#dfbd69] font-mono hover:underline transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email address"
              className="p-1 hover:text-[#dfbd69] text-[#7d8495] rounded transition-colors cursor-pointer"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-[#dfbd69] text-[11px] font-sans font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#dfbd69]" />
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
