import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function HomeContactCTA() {
  return (
    <section
      className="relative w-full bg-fixed bg-cover bg-center py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments.jpg')`,
      }}
    >
      {/* Black base overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Red opacity overlay */}
      <div className="absolute inset-0 bg-red-700/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-red-900/25" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Partner With <span className="text-yellow-400">AKaliro Investments</span>?
        </h3>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
          From large-scale facility management and heavy machinery deployment to commercial cleaning and sustainable agricultural operations, we deliver turnkey solutions with guaranteed reliability, speed, and safety compliance.
        </p>


        {/* Quick Contact Details Banner */}
        <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-sm md:text-base font-semibold">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400 flex-none" />
              <span>Namugongo Sonde Road, Mukono</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-400 flex-none" />
              <a href="tel:+256394860468" className="hover:text-yellow-400">+256-394-860-468</a> / <a href="tel:+256752373372" className="hover:text-yellow-400">0752-373-372</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400 flex-none" />
              <a href="mailto:akaliroinvestments@gmail.com" className="hover:text-yellow-400">akaliroinvestments@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Contact Action Button */}
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-12 py-5 text-xl font-bold text-green-950 shadow-2xl transition-all duration-200 hover:bg-yellow-500 hover:scale-105"
          >
            Contact Us Today
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}
