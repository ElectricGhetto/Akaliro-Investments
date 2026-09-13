import { Link } from 'react-router-dom';

export default function AgriculturalToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Agricultural Tools</h1>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Modern Agricultural Solutions</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              AKaliro Investments equips farmers and agribusinesses with high-efficiency cultivation machinery, harvesting implements, and precision irrigation tools. We bridge traditional agriculture with modern mechanized techniques to increase yields, reduce labor overhead, and build sustainable crop systems across Uganda.
            </p>
          </div>
          <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
            Image Placeholder
          </div>
        </div>
      </div>

      {/* Productivity & Sustainable Farming */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Enhanced Crop Yields</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our mechanized tillage, seed-drilling, and fertilization tools ensure optimal soil penetration, uniform planting density, and higher post-harvest recovery rates.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Sustainable Farming</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We champion fuel-efficient tractors, drip-irrigation systems, and precision sprayers that minimize chemical runoff and conserve vital water resources.
          </p>
        </div>
      </div>

      {/* Core Tool Categories */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 border-l-4 border-[#298600] pl-4">Agricultural Tool Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Tractors & Plows', 'Irrigation Systems', 'Planters & Seeders', 'Motorized Sprayers'].map((category) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl font-bold text-center text-[#298600] text-xl">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modernization & Equipment Support */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
          Image Placeholder
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Operator Guidance & Support</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every equipment dispatch includes operational walkthroughs, safety compliance guidance, and preventative troubleshooting to maximize tool lifespan and safeguard farm operators.
          </p>
        </div>
      </div>

      {/* Commercial Agricultural Services */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Turnkey Agribusiness Equipment</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            From seasonal cultivation equipment rentals to commercial farm planning and plantation irrigation setups, AKaliro Investments is your dependable agricultural mechanization partner.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Mechanize Your Agricultural Operations?</h2>
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
