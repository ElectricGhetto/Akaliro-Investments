import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as CloseIcon, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Our Services', href: '/services' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="bg-[#298600] text-white py-2 text-sm font-sans font-bold hidden md:block">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><MapPin size={18}/><span>NAMUGONGO SONDE ROAD, MUKONO UGANDA</span></div>
            <div className="flex items-center gap-2"><Phone size={18}/><span>+256-394-860-468/ 0752-373-372/0779-486-373</span></div>
            <div className="flex items-center gap-2"><Mail size={18}/><span>akaliroinvestments@gmail.com</span></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-white/20"><Facebook size={16}/></div>
            <div className="p-1 rounded-full bg-white/20"><XIcon size={16}/></div>
            <div className="p-1 rounded-full bg-white/20"><Linkedin size={16}/></div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro%20Investments.png" alt="Akaliro Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-[#298600] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#206a00]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full rounded-full bg-[#298600] px-6 py-3.5 text-center text-lg font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
