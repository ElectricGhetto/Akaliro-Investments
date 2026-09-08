export default function Footer() {
  return (
    <footer className="bg-[#1d6000] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Company */}
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">Akaliro investment</span>
          <p className="text-sm opacity-80 leading-relaxed">
            Dedicated to delivering sustainable growth and strategic wealth management solutions for a secure financial future.
          </p>
        </div>

        {/* Quick Links Placeholder */}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lg">Resources</span>
          <span className="text-sm opacity-80">About us</span>
          <span className="text-sm opacity-80">Our services</span>
          <span className="text-sm opacity-80">Privacy policy</span>
          <span className="text-sm opacity-80">Terms of service</span>
        </div>

        {/* Contact Placeholder */}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lg">Contact</span>
          <span className="text-sm opacity-80">Namugongo sonde road, Mukono Uganda</span>
          <span className="text-sm opacity-80">P.o. box 107356 Kampala</span>
          <span className="text-sm opacity-80">+256-394-860-468/ 0752-373-372/0779-486-373</span>
          <span className="text-sm opacity-80">Akaliroinvestments@gmail.com</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-70">
        © 2026 Akaliro Investment. All rights reserved.
      </div>
    </footer>
  );
}
