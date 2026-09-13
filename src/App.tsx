/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderSlider from './components/HeaderSlider';
import SectionSeparator from './components/SectionSeparator';
import AboutUs from './components/AboutUs';
import MissionVisionValues from './components/MissionVisionValues';
import ServicesPage from './pages/ServicesPage';
import Equipment from './components/Equipment';
import HomeContactCTA from './components/HomeContactCTA';
import ContactForm from './components/ContactForm';
import ClientLogos from './components/ClientLogos';
import AboutUsPage from './pages/AboutUsPage';
import ExperiencePage from './pages/ExperiencePage';
import ExperienceTrackRecordPage from './pages/ExperienceTrackRecordPage';
import ExperienceClientsPage from './pages/ExperienceClientsPage';
import ExperienceGreeningPage from './pages/ExperienceGreeningPage';
import ExperienceNotesPage from './pages/ExperienceNotesPage';
import HeavyMachineryPage from './pages/HeavyMachineryPage';
import AgriculturalToolsPage from './pages/AgriculturalToolsPage';
import LogisticsPage from './pages/LogisticsPage';
import CoreServicesPage from './pages/CoreServicesPage';
import SuppliesPage from './pages/SuppliesPage';
import RelatedServicesPage from './pages/RelatedServicesPage';
import AdjacentBusinessLinesPage from './pages/AdjacentBusinessLinesPage';
import ProfileReaderPage from './pages/ProfileReaderPage';
import Footer from './components/Footer';
import FloatingContactForm from './components/FloatingContactForm';
import ScrollToTop from './components/ScrollToTop';
import { preloadImages, APP_IMAGES } from './utils/imageOptimizer';
import { initWebsiteProtection } from './utils/security';

function Home() {
  return (
    <>
      <div className="pt-4">
        <HeaderSlider />
      </div>
      <ClientLogos />
      <SectionSeparator title="Who We are" />
      <AboutUs />
      <MissionVisionValues />
      <SectionSeparator title="What we do." className="pt-6 pb-2" />
      <Equipment />
      <SectionSeparator title="Get in touch." />
      <HomeContactCTA />
    </>
  );
}

export default function App() {
  useEffect(() => {
    preloadImages(APP_IMAGES);
    const cleanupSecurity = initWebsiteProtection();
    return () => {
      cleanupSecurity?.();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <FloatingContactForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/profile" element={<ProfileReaderPage />} />
          <Route path="/heavy-machinery" element={<HeavyMachineryPage />} />
          <Route path="/agricultural-tools" element={<AgriculturalToolsPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/services/core" element={<CoreServicesPage />} />
          <Route path="/services/supplies" element={<SuppliesPage />} />
          <Route path="/services/related" element={<RelatedServicesPage />} />
          <Route path="/services/adjacent" element={<AdjacentBusinessLinesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experience/track-record" element={<ExperienceTrackRecordPage />} />
          <Route path="/experience/clients" element={<ExperienceClientsPage />} />
          <Route path="/experience/greening" element={<ExperienceGreeningPage />} />
          <Route path="/experience/notes" element={<ExperienceNotesPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
