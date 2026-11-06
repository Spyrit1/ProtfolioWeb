import React from 'react';
import { Palette, Code2, Smartphone, Globe, Server, Rocket, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  'web-design': <Palette className="w-5 h-5 text-[#dfbd69]" />,
  'web-dev': <Code2 className="w-5 h-5 text-[#dfbd69]" />,
  'responsive-design': <Smartphone className="w-5 h-5 text-[#dfbd69]" />,
  'domain-setup': <Globe className="w-5 h-5 text-[#dfbd69]" />,
  'website-hosting': <Server className="w-5 h-5 text-[#dfbd69]" />,
  'website-deployment': <Rocket className="w-5 h-5 text-[#dfbd69]" />,
};

interface ServicesProps {
  onOpenHireModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenHireModal }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#1c202a] bg-[#08090b]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
              <span>Services</span>
              <span aria-hidden="true" className="text-[#3b4252]">·</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Everything needed to take your website{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbd69] to-[#c89e4b]">
                live to the world.
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#9da3b4] max-w-md leading-relaxed">
            From the initial blank canvas to a globally distributed, high-speed website, I take care of every layer of the stack.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="luxury-card group p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header row with icon and editorial numbering */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#141720] border border-[#272d3b] group-hover:border-[#dfbd69]/40 flex items-center justify-center transition-colors">
                    {iconMap[service.id]}
                  </div>
                  <span className="font-mono text-xs text-[#dfbd69] font-bold">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#dfbd69] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8a91a3] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#1e232e] mb-4">
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[#9da3b4]">
                        <span className="w-1 h-1 rounded-full bg-[#dfbd69]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenHireModal(service.title)}
                  className="w-full text-left text-xs font-semibold text-[#8a91a3] hover:text-[#dfbd69] flex items-center justify-between pt-2 group/btn cursor-pointer transition-colors"
                >
                  <span>Inquire about {service.title}</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform text-[#dfbd69]">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
