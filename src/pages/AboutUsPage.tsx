import { Link } from 'react-router-dom';
import HomeContactCTA from '../components/HomeContactCTA';
import SectionSeparator from '../components/SectionSeparator';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center overflow-hidden">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Investments-About-Us.jpg"
          alt="Akaliro Investments Trucks"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
          About Us
        </h1>
      </div>

      {/* Our Story */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Our Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Established with a vision to redefine facility management, AKaliro Investments has grown from a humble beginning into a trusted partner for numerous clients. Driven by the need for reliable, high-quality services, we have evolved by constantly adapting to industry demands and technological advancements.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro%20Investments%20Team%20(2).webp"
              alt="AKaliro Investments Team"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#298600]">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Mission</h3>
          <p className="text-xl text-gray-700">To provide exceptional facility management and sustainable agricultural solutions that foster growth, safety, and operational excellence for our clients and communities.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#298600]">
          <h3 className="text-3xl font-bold mb-4 text-[#298600]">Vision</h3>
          <p className="text-xl text-gray-700">To be the leading partner in integrated environmental and sustainable resource solutions, recognized for our innovation, reliability, and commitment to a greener future.</p>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro%20Investments%20About%20Us.webp"
            alt="What We Do - AKaliro Investments"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">What We Do</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            AKaliro Investments provides comprehensive facility management and environmental services, 
            including professional cleaning for residential, office, hospital, and commercial spaces. 
            We specialize in large-scale fumigation, pest control, and landscaping, while also 
            supplying essential sanitation and safety products. We also contribute to sustainable 
            development through diversified agricultural operations.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">Our Approach</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We prioritize a client-centered approach, blending analytical insights with practical, hands-on solutions. Our collaborative process ensures that every project is tailored to specific needs, fostering strong relationships with our clients and stakeholders.
          </p>
        </div>
      </div>

      {/* Get in Touch CTA from Homepage */}
      <SectionSeparator title="Get in touch." />
      <HomeContactCTA />
    </div>
  );
}
