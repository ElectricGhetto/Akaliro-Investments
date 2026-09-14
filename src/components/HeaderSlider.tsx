import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProfilePdfViewer, { PROFILE_PDF_URL } from './ProfilePdfViewer';

const slides = [
  {
    image: 'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments.jpg',
    title: 'Work Experience',
    description: 'Empowering your wealth with data-driven insights.',
  },
  {
    image: 'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Tomatoes,-Banana-Plantations.jpg',
    title: 'Agriculture',
    description: 'Unlocking new markets for sustainable returns.',
  },
  {
    image: 'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-Services.jpg',
    title: 'Cleaning & Maintenance',
    description: 'Investing in the innovation that defines tomorrow.',
  },
];

export default function HeaderSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    // Preload all slider images into browser memory immediately
    slides.forEach((slide) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = slide.image;
    });

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-full w-full object-cover"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-12 flex justify-center px-6">
              <div className="max-w-4xl px-8 py-10 text-center text-white bg-black/60 rounded-3xl">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl mb-6">
                  {slides[currentSlide].description}
                </p>
                <div>
                  <a
                    href={PROFILE_PDF_URL}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalOpen(true);
                    }}
                    className="inline-block bg-yellow-400 text-green-800 font-bold py-4 px-10 text-xl rounded-full hover:bg-yellow-500 transition-colors shadow-lg cursor-pointer"
                  >
                    OUR PROFILE
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full text-white hover:bg-white/50 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full text-white hover:bg-white/50 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Online PDF Reader Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl h-full sm:h-[92vh] flex flex-col rounded-none sm:rounded-2xl overflow-hidden shadow-2xl"
            >
              <ProfilePdfViewer isModal={true} onClose={() => setIsModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
