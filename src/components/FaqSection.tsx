import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  onOpenHireModal: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
  colorName: 'blue' | 'yellow' | 'green' | 'red';
  dotColor: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenHireModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What does "Domain Setup & Website Hosting" actually include?',
      answer:
        'I manage the full technical foundation so you don’t have to deal with complex settings. This means registering or linking your custom domain (like yourbrand.com), setting up DNS A and CNAME records, securing the website with an SSL certificate for HTTPS encryption, and deploying the files to high-performance global cloud hosting (Vercel/Edge CDN).',
      colorName: 'blue',
      dotColor: 'bg-blue-600',
    },
    {
      question: 'Will my website work properly on mobile phones and tablets?',
      answer:
        'Yes, absolutely. Over 65% of website visitors use mobile devices. Every website I build is designed and tested for seamless responsiveness across iPhones, Android devices, iPads, and large desktop screens. Touch targets, font readability, image compression, and layout fluidity are guaranteed.',
      colorName: 'yellow',
      dotColor: 'bg-amber-400',
    },
    {
      question: 'How fast can my website be designed, built, and launched?',
      answer:
        'Turnaround depends on project scope: single-page landing pages typically launch in 4 to 6 business days, while comprehensive 3–5 page business websites take roughly 7 to 12 business days. Because I handle both design and development directly, there are no handoff delays or miscommunications.',
      colorName: 'green',
      dotColor: 'bg-emerald-500',
    },
    {
      question: 'Can you redesign or improve my current outdated website?',
      answer:
        'Yes! Many clients come to me with websites that look dated or load slowly. I can evaluate your current structure, preserve what works, and build a completely refreshed, high-speed, modern website from the ground up.',
      colorName: 'red',
      dotColor: 'bg-rose-500',
    },
    {
      question: 'What do you need from me before we get started?',
      answer:
        'Just a brief overview of your business or project, any inspiration websites you admire, your preferred logo or brand assets (if you have them), and what primary action you want visitors to take (like calling, booking, or buying). I guide you through the rest.',
      colorName: 'blue',
      dotColor: 'bg-blue-600',
    },
    {
      question: 'How do revisions and feedback work during design?',
      answer:
        'We work iteratively. During the design phase in Figma, you review full interactive mockups and share your thoughts. I make adjustments until you are completely confident in the look and feel before coding begins.',
      colorName: 'green',
      dotColor: 'bg-emerald-500',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#e8e5dd] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs uppercase tracking-widest text-neutral-600 font-medium mb-3 shadow-2xs">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <span className="ml-1">Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Clarity First</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight mb-3">
            Clear answers before we start building.
          </h2>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Everything you need to know about the process, timelines, hosting setup, and working directly with Aditya.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="editorial-card rounded-xl border border-neutral-200 bg-neutral-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`w-2 h-2 rounded-full ${faq.dotColor} shrink-0`} />
                    <span className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-neutral-200 bg-white transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-neutral-900 text-white border-neutral-900' : 'text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question Fallback Box */}
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-neutral-950 mb-0.5">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-neutral-500">
              Send me a message directly and I’ll respond within a few hours.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-black rounded-lg transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
          >
            <span>Ask Aditya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
