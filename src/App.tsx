import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { QuoteSection } from './components/QuoteSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HireModal } from './components/HireModal';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>(undefined);

  const handleOpenHireModal = (serviceTitle?: string) => {
    setModalDefaultService(serviceTitle);
    setIsHireModalOpen(true);
    // Push history entry so browser back button returns to previous screen
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

  // Sync with browser back button / popstate events
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
    <div className="min-h-screen bg-[#08090b] text-[#f5f6f8] flex flex-col font-sans selection:bg-[#dfbd69]/20 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenHireModal={() => handleOpenHireModal()} />
        <About onOpenHireModal={() => handleOpenHireModal()} />
        <Services onOpenHireModal={(service) => handleOpenHireModal(service)} />
        <Projects />
        <QuoteSection />
        <WhyWorkWithMe />
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
