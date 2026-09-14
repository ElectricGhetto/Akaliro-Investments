import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-[#1d6000] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Company */}
          <div className="flex flex-col gap-4">
            <div className="w-20 h-20 bg-white p-2.5 rounded-xl flex items-center justify-center">
              <img
                src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro%20Investments.png"
                alt="Akaliro Logo"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="text-2xl font-bold">AKaliro Investments</span>
            <p className="text-[15px] md:text-base opacity-90 leading-relaxed">
              Dedicated to delivering sustainable growth and strategic wealth management solutions for a secure financial future.
            </p>
          </div>

          {/* Quick Links Placeholder */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-xl mb-1">Resources</span>
            <Link to="/about" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">About us</Link>
            <Link to="/profile" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">Our profile (PDF)</Link>
            <Link to="/services" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">Our services</Link>
            <Link to="/heavy-machinery" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">Heavy machinery</Link>
            <Link to="/agricultural-tools" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">Agricultural tools</Link>
            <Link to="/logistics" className="text-[15px] md:text-base opacity-85 hover:opacity-100 transition-opacity">Logistics fleet</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3.5">
            <span className="font-bold text-xl mb-1">Contact</span>
            <span className="text-[15px] md:text-base opacity-90">Namugongo sonde road, Mukono Uganda</span>
            <span className="text-[15px] md:text-base opacity-90">P.O. Box 107356 Kampala</span>
            <div className="text-[15px] md:text-base opacity-90 flex flex-wrap gap-x-2 gap-y-1">
              <a href="tel:+256394860468" className="hover:opacity-100 underline decoration-white/50">+256-394-860-468</a>
              <span>/</span>
              <a href="tel:+256752373372" className="hover:opacity-100 underline decoration-white/50">0752-373-372</a>
              <span>/</span>
              <a href="tel:+256779486373" className="hover:opacity-100 underline decoration-white/50">0779-486-373</a>
            </div>
            <a
              href="mailto:akaliroinvestments@gmail.com"
              className="text-[15px] md:text-base font-medium text-white/95 hover:text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
              title="Send email to akaliroinvestments@gmail.com"
            >
              akaliroinvestments@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Darker Green Copyright Bar */}
      <div className="bg-[#0f3400] py-6 px-6 border-t border-white/10 text-center text-[15px] md:text-base text-white/90">
        <div className="max-w-7xl mx-auto">
          © 2026 AKaliro Investments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
