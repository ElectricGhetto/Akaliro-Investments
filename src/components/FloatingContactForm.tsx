import { useState } from 'react';
import { Mail, X } from 'lucide-react';
import ContactFormFields from './ContactFormFields';

export default function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Contact Us</h3>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <ContactFormFields />
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#298600] text-white p-4 rounded-full shadow-lg hover:bg-[#206a00] transition-colors"
        >
          <Mail size={24} />
        </button>
      </div>
    </>
  );
}
