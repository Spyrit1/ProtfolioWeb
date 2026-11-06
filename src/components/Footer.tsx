import React from 'react';
import { ArrowUp, Instagram, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1c202a] bg-[#07080a] py-12 text-xs text-[#8a91a3]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1c202a]">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#141720] border border-[#272d3b] flex items-center justify-center text-[10px] font-mono font-bold text-[#dfbd69]">
                A
              </span>
              <span className="font-bold text-white tracking-tight text-sm">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <span className="hidden sm:inline text-[#3a4153]">·</span>
            <span className="text-[#9da3b4]">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dfbd69] text-[#9da3b4] transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.instagramHandle}</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#dfbd69] text-[#9da3b4] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#757d90]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
              Bespoke Web Design & Engineering
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#9da3b4] hover:text-[#dfbd69] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
