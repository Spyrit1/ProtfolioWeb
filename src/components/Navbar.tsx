import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090b]/85 backdrop-blur-md border-b border-[#20242e] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with subtle gold accent */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbd69] rounded transition-transform"
            aria-label="Aditya Portfolio Home"
          >
            <span className="w-7 h-7 rounded-lg bg-[#14171f] border border-[#2a2f3d] flex items-center justify-center text-xs font-mono font-bold text-[#dfbd69] group-hover:border-[#dfbd69]/50 transition-colors shadow-xs">
              A
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[#f5f6f8] font-bold group-hover:text-white transition-colors">
                Aditya
              </span>
              <span className="text-xs font-normal text-[#8a91a3] tracking-normal hidden sm:inline">
                · Designer & Developer
              </span>
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
                className="transition-colors relative py-1 text-xs uppercase tracking-wider text-[#9da3b4] hover:text-[#dfbd69] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Availability Indicator + Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Subtle Availability Marker */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#13161c] border border-[#242935] text-[11px] text-[#8a91a3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>Available for projects</span>
            </div>

            <button
              onClick={onOpenHireModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-neutral-950 bg-gradient-to-r from-[#dfbd69] via-[#d4af37] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all shadow-[0_2px_14px_rgba(212,175,55,0.22)] hover:shadow-[0_4px_18px_rgba(212,175,55,0.35)] active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9da3b4] hover:text-white hover:bg-[#14171f] border border-transparent hover:border-[#222631] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbd69]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-[#20242e] bg-[#0c0e12]/95 backdrop-blur-xl px-3 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#1c202a] text-xs text-[#8a91a3]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Available for new projects
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#9da3b4] hover:text-[#dfbd69] hover:bg-[#14171f] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#1c202a]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-colors cursor-pointer shadow-sm"
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
