/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderSlider from './components/HeaderSlider';
import SectionSeparator from './components/SectionSeparator';
import AboutUs from './components/AboutUs';
import ServicesPage from './pages/ServicesPage';
import Equipment from './components/Equipment';
import Labor from './components/Labor';
import ContactForm from './components/ContactForm';
import AboutUsPage from './pages/AboutUsPage';
import ExperiencePage from './pages/ExperiencePage';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <HeaderSlider />
      <SectionSeparator title="Who We are" />
      <AboutUs />
      <SectionSeparator title="What we do." />
      <SectionSeparator title="Our tools." />
      <Equipment />
      <SectionSeparator title="Our team." />
      <Labor />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
