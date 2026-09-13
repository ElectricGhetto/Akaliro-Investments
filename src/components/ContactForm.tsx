import { MapPin, Phone, Mail, Facebook, Linkedin, X as XIcon } from 'lucide-react';

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative w-full bg-fixed bg-cover bg-center py-20 md:py-28 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments.jpg')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[#0f3400]/40 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white tracking-tight">
          Contact Us
        </h2>
        <form className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6 border border-gray-100">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
              rows={4}
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#298600] text-white py-4 rounded-xl text-lg font-bold hover:bg-[#206a00] transition-colors shadow-md"
          >
            Send message
          </button>

          {/* Contact Details */}
          <div className="mt-6 pt-8 border-t border-gray-200 flex flex-col gap-5 text-gray-700">
            <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#298600] pl-3">Contact Information</h3>
            
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#298600]/10 text-[#298600] mt-0.5 flex-none">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Location</p>
                <p className="text-base font-semibold text-gray-800">NAMUGONGO SONDE ROAD, MUKONO UGANDA</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#298600]/10 text-[#298600] mt-0.5 flex-none">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Phone Numbers</p>
                <p className="text-base font-semibold text-gray-800">+256-394-860-468 / 0752-373-372 / 0779-486-373</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#298600]/10 text-[#298600] mt-0.5 flex-none">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Email Address</p>
                <a href="mailto:akaliroinvestments@gmail.com" className="text-base font-semibold text-[#298600] hover:underline">
                  akaliroinvestments@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm font-semibold text-gray-500">Connect with us:</span>
              <div className="flex items-center gap-2 text-[#298600]">
                <span className="p-2 rounded-full bg-gray-100 hover:bg-[#298600] hover:text-white transition-colors cursor-pointer">
                  <Facebook size={18} />
                </span>
                <span className="p-2 rounded-full bg-gray-100 hover:bg-[#298600] hover:text-white transition-colors cursor-pointer">
                  <XIcon size={18} />
                </span>
                <span className="p-2 rounded-full bg-gray-100 hover:bg-[#298600] hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={18} />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
