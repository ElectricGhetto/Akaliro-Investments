import { Link } from 'react-router-dom';

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Logistics Fleet</h1>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Commercial Logistics & Haulage</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              AKaliro Investments operates a modern, versatile transportation fleet delivering dependable freight solutions across Uganda. We specialize in bulk material haulage, heavy cargo transport, commercial project distribution, and agricultural harvest logistics, ensuring punctual deliveries with strict cargo integrity.
            </p>
          </div>
          <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
            Image Placeholder
          </div>
        </div>
      </div>

      {/* Fleet Capabilities & Timely Transit */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Punctual & Secure Delivery</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our route planning and logistics coordination guarantee that construction supplies, agricultural produce, and equipment arrive on schedule without loss or degradation.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Fleet Telematics & Tracking</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            All fleet vehicles feature active monitoring, vetted commercial drivers, and cargo inspection protocols that provide complete transit accountability.
          </p>
        </div>
      </div>

      {/* Core Fleet Classes */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 border-l-4 border-[#298600] pl-4">Fleet Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Heavy Cargo Haulers', 'Tipper & Dump Trucks', 'Flatbed Trailers', 'Utility Delivery Vans'].map((category) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl font-bold text-center text-[#298600] text-xl">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Safety & Standards */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
          Image Placeholder
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Safety & Vehicle Maintenance</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Each vehicle adheres to stringent roadworthiness inspections, scheduled mechanical checkups, and load-limit compliance to safeguard both the cargo and general highway safety.
          </p>
        </div>
      </div>

      {/* Logistics Contracting */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Custom Supply Chain Solutions</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether for one-off aggregate distribution, large-scale construction support, or recurring inter-district cargo routes, we structure tailored logistics contracts matched to your budget and operational timetable.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Need Dependable Logistics Support?</h2>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[#298600] px-12 py-5 font-semibold text-white text-xl transition-all hover:bg-[#206a00]"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
