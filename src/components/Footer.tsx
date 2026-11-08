import React from 'react';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#d8d4c7] bg-[#dedad0] py-12 text-xs text-neutral-600">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <img
                src={PERSONAL_INFO.logo}
                alt="Better Designs Logo"
                className="w-7 h-7 rounded-md object-contain bg-white border border-neutral-200 p-0.5 shadow-2xs"
              />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
              <span className="font-bold text-neutral-900 tracking-tight text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-neutral-500 font-normal hidden sm:inline">
                ({PERSONAL_INFO.brandName})
              </span>
            </div>
            <span className="hidden sm:inline text-neutral-300">·</span>
            <span className="text-neutral-600">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-neutral-600 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.instagramHandle}</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-black text-neutral-600 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-neutral-500">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
              <span>Clean Web Design & Development</span>
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-black transition-colors cursor-pointer"
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
