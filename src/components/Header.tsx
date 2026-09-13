import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X as CloseIcon, Phone, Mail, MapPin, Facebook, Linkedin, X as XIcon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Experience', href: '/experience' },
  ];

  const serviceSubLinks = [
    { name: 'Core Services', href: '/services/core' },
    { name: 'Supplies', href: '/services/supplies' },
    { name: 'Related Services', href: '/services/related' },
    { name: 'Adjacent Business Lines', href: '/services/adjacent' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href.startsWith('/services/')) {
        return location.pathname.startsWith('/services/');
    }
    return location.pathname === href;
  };

  const isServicesActive = location.pathname.startsWith('/services/');
  const isContactActive = location.pathname === '/contact';

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="bg-[#298600] text-white py-2 text-sm font-sans font-bold hidden md:block">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><MapPin size={18}/><span>NAMUGONGO SONDE ROAD, MUKONO UGANDA</span></div>
            <div className="flex items-center gap-2"><Phone size={18}/><span>+256-394-860-468/ 0752-373-372/0779-486-373</span></div>
            <a
              href="mailto:akaliroinvestments@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              title="Send email to akaliroinvestments@gmail.com"
            >
              <Mail size={18} />
              <span>akaliroinvestments@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-white/20"><Facebook size={16}/></div>
            <div className="p-1 rounded-full bg-white/20"><XIcon size={16}/></div>
            <div className="p-1 rounded-full bg-white/20"><Linkedin size={16}/></div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center flex-none">
          <img
            src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro%20Investments.png"
            alt="Akaliro Logo"
            className="h-16 w-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-2 lg:gap-3">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-[17px] font-semibold transition-all duration-200 rounded-xl flex items-center ${
                  isActive
                    ? 'text-[#298600] font-bold bg-[#298600]/8 shadow-sm'
                    : 'text-gray-600 hover:text-[#298600] hover:bg-gray-50'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-2 left-3 right-3 h-[3px] bg-[#298600] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
                className={`relative px-4 py-2 text-[17px] font-semibold transition-all duration-200 rounded-xl flex items-center gap-1 ${
                    isServicesActive
                      ? 'text-[#298600] font-bold bg-[#298600]/8 shadow-sm'
                      : 'text-gray-600 hover:text-[#298600] hover:bg-gray-50'
                  }`}
            >
                <span>Our Services</span>
                <ChevronDown size={16} />
                {isServicesActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-2 left-3 right-3 h-[3px] bg-[#298600] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
            </button>
            <AnimatePresence>
                {servicesOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        {serviceSubLinks.map(subLink => (
                            <Link key={subLink.name} to={subLink.href} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#298600]">
                                {subLink.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex flex-none">
          <Link
            to="/contact"
            className={`rounded-full px-8 py-3.5 text-base font-bold transition-all shadow-sm ${
              isContactActive
                ? 'bg-yellow-400 text-green-950 ring-4 ring-[#298600]/30 font-extrabold shadow-md'
                : 'bg-yellow-400 text-green-900 hover:bg-yellow-500 hover:shadow'
            }`}
          >
            Contact
          </Link>
        </div>

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
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-medium transition-all px-4 py-2.5 rounded-xl flex items-center justify-between ${
                      isActive
                        ? 'bg-[#298600]/10 text-[#298600] font-bold border-l-4 border-[#298600]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#298600]" />
                    )}
                  </Link>
                );
              })}
              
              <div className="border-t border-gray-100 pt-2">
                <button className="text-lg font-medium text-gray-600 w-full text-left px-4 py-2.5 flex items-center justify-between" onClick={() => setServicesOpen(!servicesOpen)}>
                    Our Services <ChevronDown size={18} />
                </button>
                {servicesOpen && serviceSubLinks.map(subLink => (
                    <Link key={subLink.name} to={subLink.href} className="block px-8 py-2 text-gray-600 hover:text-[#298600]" onClick={() => setIsOpen(false)}>
                        {subLink.name}
                    </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full rounded-full px-6 py-3.5 text-center text-lg font-bold transition-all ${
                  isContactActive
                    ? 'bg-yellow-400 text-green-950 ring-4 ring-[#298600]/30 font-extrabold shadow-md'
                    : 'bg-yellow-400 text-green-800 hover:bg-yellow-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="mailto:akaliroinvestments@gmail.com"
                  className="flex items-center gap-2 text-sm text-[#298600] font-semibold hover:underline"
                >
                  <Mail size={16} />
                  <span>akaliroinvestments@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
