import React, { useState, useEffect } from 'react';
import { X, Check, Copy, ArrowUpRight, ArrowLeft } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 text-slate-800 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation / Return Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 rounded-md transition-all cursor-pointer group shadow-2xs active:scale-95"
            aria-label="Return to previous screen"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-neutral-400 font-mono">ESC to return</span>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Title with Logo & Quad-Color Indicator */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium mb-1">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <span className="ml-0.5">Start A Project</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Direct Inquiry</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
              Hire Aditya <span className="text-sm font-normal text-neutral-500">({PERSONAL_INFO.brandName})</span>
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Fill in your project basics to open a pre-formatted email or copy contact info.
            </p>
          </div>
          <img
            src={PERSONAL_INFO.logo}
            alt="Better Designs Logo"
            className="w-10 h-10 rounded-lg object-contain bg-white border border-neutral-200 p-0.5 shadow-2xs shrink-0"
          />
        </div>

        {/* Form Body */}
        <div className="space-y-5 text-xs">
          {/* Your Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-medium mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1.5">Your Email</label>
              <input
                type="email"
                placeholder="e.g. name@company.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-slate-700 font-medium mb-2">Project Type</label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    projectType === type
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Services Needed */}
          <div>
            <label className="block text-slate-700 font-medium mb-2">Services Needed</label>
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
                        ? 'bg-slate-900 border-slate-900 text-white font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-white text-slate-900 font-bold' : 'border border-slate-300'
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
            <label className="block text-slate-700 font-medium mb-2">Timeline</label>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTimeline(t)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    timeline === t
                      ? 'bg-slate-900 text-white border border-slate-900 font-medium'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-slate-700 font-medium mb-1.5">
              Project Details & Goals
            </label>
            <textarea
              rows={3}
              placeholder="Tell me a bit about your business, current website (if any), and what you want to achieve..."
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white leading-relaxed"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-md transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-black rounded-md transition-all active:scale-95 shadow-xs"
          >
            <span>Send Email to Aditya</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
};
