import { Link } from 'react-router-dom';

export default function HeavyMachineryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Heavy Machinery</h1>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Heavy Plant & Machinery</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At AKaliro Investments, we maintain a robust inventory of modern heavy machinery and plant equipment suited for large-scale earthmoving, site development, industrial maintenance, and agricultural infrastructure. Our machinery fleet is engineered for maximum uptime, fuel efficiency, and operational endurance.
            </p>
          </div>
          <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
            Image Placeholder
          </div>
        </div>
      </div>

      {/* Fleet Capability & Certified Operators */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Fleet Capability</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            From heavy excavators to industrial graders and compaction rollers, our equipment inventory accommodates high-demand infrastructural and site preparation requirements with absolute precision.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Certified Operators</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every piece of heavy equipment is piloted by licensed, highly experienced operators trained under strict health, safety, and environmental protocols to guarantee zero-harm site execution.
          </p>
        </div>
      </div>

      {/* Core Machinery Classes */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 border-l-4 border-[#298600] pl-4">Machinery Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Excavators & Loaders', 'Rollers & Compactors', 'Haulage & Dump Trucks', 'Heavy Agricultural Tractors'].map((category) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl font-bold text-center text-[#298600] text-xl">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance & Reliability Section */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 h-64 md:h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl">
          Image Placeholder
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Preventive Maintenance</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our dedicated mechanical engineering team enforces rigorous daily servicing and preventive maintenance schedules. This proactive regime avoids downtime, ensures safety compliance, and preservespeak equipment performance throughout project durations.
          </p>
        </div>
      </div>

      {/* Operational Deployment */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Turnkey Equipment Solutions</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether your project requires short-term machinery hire, long-term fleet leasing, or comprehensive project contracting with full operational management, AKaliro Investments provides dependable, cost-effective equipment deployment across Uganda.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Need Heavy Machinery for Your Project?</h2>
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
