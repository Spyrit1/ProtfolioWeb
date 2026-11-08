import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WorkflowProcess } from './components/WorkflowProcess';
import { Projects } from './components/Projects';
import { QuoteSection } from './components/QuoteSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HireModal } from './components/HireModal';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>(undefined);

  // Smooth, minimal solid scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenHireModal = (serviceTitle?: string) => {
    setModalDefaultService(serviceTitle);
    setIsHireModalOpen(true);
    if (window.location.hash !== '#hire') {
      window.history.pushState({ modal: 'hire' }, '', '#hire');
    }
  };

  const handleCloseHireModal = () => {
    setIsHireModalOpen(false);
    setModalDefaultService(undefined);
    if (window.location.hash === '#hire') {
      window.history.back();
    }
  };

  React.useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash !== '#hire') {
        setIsHireModalOpen(false);
        setModalDefaultService(undefined);
      } else {
        setIsHireModalOpen(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e5dd] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white relative overflow-x-hidden">
      {/* Sleek Blue, Yellow, Green, Red Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-amber-400 via-emerald-500 to-rose-500 z-[60] origin-left shadow-[0_1px_8px_rgba(37,99,235,0.3)]"
        style={{ scaleX }}
      />

      {/* Sticky Top Navigation */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* Main Content Sections */}
      <main className="flex-1 relative">
        <Hero onOpenHireModal={() => handleOpenHireModal()} />
        <About onOpenHireModal={() => handleOpenHireModal()} />
        <Services onOpenHireModal={(service) => handleOpenHireModal(service)} />
        <WorkflowProcess onOpenHireModal={(service) => handleOpenHireModal(service)} />
        <Projects />
        <QuoteSection />
        <ProjectEstimator onOpenHireModal={(service) => handleOpenHireModal(service)} />
        <WhyWorkWithMe />
        <FaqSection onOpenHireModal={() => handleOpenHireModal()} />
        <Contact onOpenHireModal={() => handleOpenHireModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Hire Me / Project Inquiry Modal */}
      <HireModal
        isOpen={isHireModalOpen}
        onClose={handleCloseHireModal}
        defaultService={modalDefaultService}
      />
    </div>
  );
}
