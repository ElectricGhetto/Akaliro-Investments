import { Link } from 'react-router-dom';

export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Cleaning-Header.jpg"
          alt="Cleaning Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Cleaning & Maintenance</h1>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Professional Cleaning & Maintenance Services</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Akaliro Investments delivers comprehensive cleaning and maintenance solutions for homes, offices, hospitals, schools, hotels, and commercial buildings across Uganda. Our teams handle everything from routine floor and upholstery cleaning to vertical and exterior surfaces — walls, rooftops, and high-rise facades — giving clients a single provider for both everyday upkeep and larger maintenance jobs.
            </p>
          </div>
          <img
            src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Mainteinance.jpg"
            alt="Maintenance Services"
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Fleet Capabilities & Timely Transit */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Professional Equipment & Mobilization</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We bring our own fleet of professional-grade equipment to every site, including floor scrubbing machines, industrial vacuum and suction cleaners, upholstery extraction machines, and scaffolding for exterior work — so we mobilize fast without relying on rented gear. Every job uses vetted cleaning chemicals and consumables matched to the surface being treated.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Quality Control & Process</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Quality isn't a single inspection — it's built into the process: staff are trained on our Standard Operating Procedures, supervisors run scheduled checklist-based quality checks, and we issue a completion certificate at the end of every job.
          </p>
        </div>
      </div>


      {/* Fleet Safety & Standards */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Slashing.jpg"
          alt="Cleaning Services"
          className="w-full h-64 md:h-96 object-cover rounded-2xl"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Our Track Record</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our track record spans institutional and healthcare clients including International Hospital Kampala, the Infectious Diseases Institute (Mulago & Makerere), International Medical Centre (Mbale, Jinja, Entebbe), and the Uganda Health Marketing Group — environments where cleanliness is a formal, audited performance requirement.
          </p>
        </div>
      </div>


      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Book Professional Cleaning?</h2>
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
