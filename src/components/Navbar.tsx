import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process Roadmap', href: '#process' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Scope Estimator', href: '#estimator' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#e8e5dd]/95 backdrop-blur-md border-b border-[#d8d4c7] py-3.5 shadow-2xs'
          : 'bg-[#e8e5dd]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with official Better Designs Logo and 4-color signature dots */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-semibold tracking-tight text-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded"
            aria-label="Aditya · Better Designs"
          >
            <img
              src={PERSONAL_INFO.logo}
              alt="Better Designs Logo"
              className="w-8 h-8 rounded-lg object-contain bg-white border border-neutral-200 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-900 font-bold group-hover:text-black transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-normal text-neutral-500 tracking-normal hidden sm:inline">
                · {PERSONAL_INFO.brandName}
              </span>
            </div>

            {/* Blue, Yellow, Green, Red accent dots */}
            <div className="flex items-center gap-1 ml-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" title="Blue" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Green" />
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" title="Red" />
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors relative py-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-950 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Availability Indicator + Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Subtle Availability Marker */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-medium">Available for projects</span>
            </div>

            <button
              onClick={onOpenHireModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-neutral-900 hover:bg-black rounded-md transition-all shadow-xs hover:shadow-sm active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-[#d8d4c7] bg-[#e8e5dd]/98 backdrop-blur-xl px-3 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-150 shadow-md">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-100 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Available for new projects
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-black hover:bg-neutral-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
