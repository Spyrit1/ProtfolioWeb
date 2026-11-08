import React from 'react';
import { Palette, Code2, Smartphone, Globe, Server, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

interface ServiceTheme {
  icon: React.ReactNode;
  iconBg: string;
  dotColor: string;
  badgeBorder: string;
  accentText: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  // 01: Blue
  'web-design': {
    icon: <Palette className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-200',
    dotColor: 'bg-blue-600',
    badgeBorder: 'hover:border-blue-300',
    accentText: 'text-blue-600',
  },
  // 02: Yellow
  'web-dev': {
    icon: <Code2 className="w-5 h-5 text-amber-600" />,
    iconBg: 'bg-amber-50 border-amber-200',
    dotColor: 'bg-amber-500',
    badgeBorder: 'hover:border-amber-300',
    accentText: 'text-amber-600',
  },
  // 03: Green
  'responsive-design': {
    icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-200',
    dotColor: 'bg-emerald-500',
    badgeBorder: 'hover:border-emerald-300',
    accentText: 'text-emerald-600',
  },
  // 04: Blue
  'domain-setup': {
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-200',
    dotColor: 'bg-blue-600',
    badgeBorder: 'hover:border-blue-300',
    accentText: 'text-blue-600',
  },
  // 05: Green
  'website-hosting': {
    icon: <Server className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-200',
    dotColor: 'bg-emerald-500',
    badgeBorder: 'hover:border-emerald-300',
    accentText: 'text-emerald-600',
  },
  // 06: Red
  'website-deployment': {
    icon: <Rocket className="w-5 h-5 text-rose-600" />,
    iconBg: 'bg-rose-50 border-rose-200',
    dotColor: 'bg-rose-500',
    badgeBorder: 'hover:border-rose-300',
    accentText: 'text-rose-600',
  },
};

interface ServicesProps {
  onOpenHireModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenHireModal }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#d8d4c7] bg-[#e8e5dd] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
              <span>Services</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
              Everything needed to take your website{' '}
              <span className="text-neutral-900 underline decoration-amber-400 underline-offset-4 decoration-2">
                live to the world.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            From the initial blank canvas to a globally distributed, high-speed website, I take care of every layer of the stack.
          </p>
        </div>

        {/* 6 Services Grid with Blue, Yellow, Green, Red Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const theme = serviceThemes[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`editorial-card group p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 ${theme.badgeBorder}`}
              >
                <div>
                  {/* Header row with icon and editorial numbering */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${theme.iconBg}`}
                    >
                      {theme.icon}
                    </div>
                    <span className="font-mono text-xs text-neutral-400 font-bold">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-neutral-100 mb-4">
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-neutral-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenHireModal(service.title)}
                    className="w-full text-left text-xs font-semibold text-neutral-700 hover:text-black flex items-center justify-between pt-2 group/btn cursor-pointer transition-colors"
                  >
                    <span>Inquire about {service.title}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform text-neutral-900">
                      &rarr;
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
