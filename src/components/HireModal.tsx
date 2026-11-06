import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Copy, ArrowUpRight, Send, ArrowLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [projectType, setProjectType] = useState('Business Website');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['Website Design', 'Website Development']
  );
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  const [projectDetails, setProjectDetails] = useState('');
  const [copied, setCopied] = useState(false);

  // Allow ESC key to return to previous screen
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectTypes = [
    'Business Website',
    'E-Commerce Store',
    'Personal Portfolio',
    'Landing Page',
    'Website Redesign',
  ];

  const serviceOptions = [
    'Website Design',
    'Website Development',
    'Responsive Optimization',
    'Domain Setup',
    'Website Hosting',
    'Full End-to-End Launch',
  ];

  const timelineOptions = ['As soon as possible', 'Within 2-4 weeks', 'Within 1-2 months', 'Flexible'];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const constructMailto = () => {
    const subject = encodeURIComponent(
      `Website Inquiry: ${projectType} from ${clientName || 'Prospective Client'}`
    );
    const bodyText = `Hi Aditya,

My Name: ${clientName || 'Not specified'}
My Email: ${clientEmail || 'Not specified'}
Project Type: ${projectType}
Services Needed: ${selectedServices.join(', ')}
Timeline: ${timeline}

Project Details:
${projectDetails || 'Let’s discuss my website requirements.'}

Looking forward to hearing from you!`;

    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0f1218] border border-[#282f3e] rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 text-[#c7ccd9] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation / Return Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#202532] mb-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-[#161a22] hover:bg-[#202532] border border-[#2a3140] rounded-md transition-all cursor-pointer group shadow-xs active:scale-95"
            aria-label="Return to previous screen"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-[#7d8495] font-mono">ESC to return</span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8a91a3] hover:text-white bg-[#161a22] hover:bg-[#202532] rounded-md transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9da3b4] font-medium mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfbd69]" />
            <span>Start A Project</span>
            <span aria-hidden="true" className="text-[#3b4252]">·</span>
            <span>Direct Inquiry</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Hire Aditya
          </h3>
          <p className="text-xs text-[#8a91a3] mt-1">
            Fill in your project basics to open a pre-formatted email or copy contact info.
          </p>
        </div>

        {/* Form Body */}
        <div className="space-y-5 text-xs">
          {/* Your Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#9da3b4] font-medium mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#0a0c10] border border-[#232835] rounded-md px-3 py-2 text-white placeholder-[#586073] focus:outline-none focus:border-[#dfbd69]"
              />
            </div>
            <div>
              <label className="block text-[#9da3b4] font-medium mb-1.5">Your Email</label>
              <input
                type="email"
                placeholder="e.g. name@company.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full bg-[#0a0c10] border border-[#232835] rounded-md px-3 py-2 text-white placeholder-[#586073] focus:outline-none focus:border-[#dfbd69]"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-[#9da3b4] font-medium mb-2">Project Type</label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    projectType === type
                      ? 'bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] text-neutral-950 font-bold shadow-xs'
                      : 'bg-[#0a0c10] text-[#8a91a3] border border-[#232835] hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Services Needed */}
          <div>
            <label className="block text-[#9da3b4] font-medium mb-2">Services Needed</label>
            <div className="grid grid-cols-2 gap-2">
              {serviceOptions.map((opt) => {
                const isSelected = selectedServices.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => toggleService(opt)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-left transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#181c26] border-[#dfbd69]/40 text-white'
                        : 'bg-[#0a0c10] border-[#232835] text-[#8a91a3] hover:text-[#c7ccd9]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#dfbd69] text-neutral-950 font-bold' : 'border border-[#384154]'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                    <span className="truncate">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-[#9da3b4] font-medium mb-2">Timeline</label>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTimeline(t)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    timeline === t
                      ? 'bg-[#181c26] text-white border border-[#dfbd69]/40'
                      : 'bg-[#0a0c10] text-[#7d8495] border border-[#232835] hover:text-[#c7ccd9]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-[#9da3b4] font-medium mb-1.5">
              Project Details & Goals
            </label>
            <textarea
              rows={3}
              placeholder="Tell me a bit about your business, current website (if any), and what you want to achieve..."
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="w-full bg-[#0a0c10] border border-[#232835] rounded-md p-3 text-white placeholder-[#586073] focus:outline-none focus:border-[#dfbd69] leading-relaxed"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-5 border-t border-[#202532] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#c7ccd9] hover:text-white bg-[#141720] hover:bg-[#1c212d] border border-[#262c3b] rounded-md transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#c7ccd9] hover:text-white bg-[#141720] hover:bg-[#1c212d] border border-[#262c3b] rounded-md transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#dfbd69]" />
                  <span className="text-[#dfbd69]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <a
            href={constructMailto()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#dfbd69] to-[#c89e4b] hover:from-[#e8cb7b] hover:to-[#dfbd69] rounded-md transition-all active:scale-95 shadow-[0_2px_14px_rgba(212,175,55,0.22)]"
          >
            <span>Send Email to Aditya</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
};
