import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { ScheduleVisitModal } from './components/common/ScheduleVisitModal';
import { BrochureModal } from './components/common/BrochureModal';
import { Lightbox } from './components/common/Lightbox';
import type { LightboxImage } from './components/common/Lightbox';
import { HomePage } from './pages/HomePage';
import { KashiHillsPage } from './pages/KashiHillsPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { kashiHillsProject } from './config/projects';

// Scroll to top component on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);

  // Open Lightbox for single image or gallery item
  const handleOpenLightbox = (src: string, title: string) => {
    const galleryItems: LightboxImage[] = kashiHillsProject.gallery.map((g) => ({
      src: g.image,
      title: g.title,
      caption: g.caption,
      category: g.category
    }));

    const foundIndex = galleryItems.findIndex((g) => g.src === src);
    if (foundIndex >= 0) {
      setLightboxImages(galleryItems);
      setLightboxIndex(foundIndex);
    } else {
      setLightboxImages([{ src, title, caption: 'K.S. Developers Architectural Asset' }]);
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenScheduleModal={() => setScheduleModalOpen(true)} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenScheduleModal={() => setScheduleModalOpen(true)}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/projects/kashi-hills"
              element={
                <KashiHillsPage
                  onOpenScheduleModal={() => setScheduleModalOpen(true)}
                  onOpenBrochureModal={() => setBrochureModalOpen(true)}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenScheduleModal={() => setScheduleModalOpen(true)} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onOpenScheduleModal={() => setScheduleModalOpen(true)} />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <MobileStickyBar onOpenScheduleModal={() => setScheduleModalOpen(true)} />

        <ScheduleVisitModal
          isOpen={scheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
        />

        <BrochureModal
          isOpen={brochureModalOpen}
          onClose={() => setBrochureModalOpen(false)}
        />

        <Lightbox
          isOpen={lightboxOpen}
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
