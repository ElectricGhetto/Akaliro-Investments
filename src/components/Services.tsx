export default function Services() {
  const services = [
    { title: "Wealth Management", description: "Comprehensive strategies to protect and grow your assets.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akairo-Investments-Plantations.jpg" },
    { title: "Strategic Planning", description: "Tailored long-term financial roadmaps to secure your future.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-2.jpg" },
    { title: "Market Analysis", description: "Data-driven insights to navigate complex global markets.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Flowers.jpg" },
    { title: "Global Investments", description: "Accessing diverse international opportunities for growth.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Ground-Levelling.jpg" },
  ];

  return (
    <section id="services" className="pb-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Our Services</h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
        We offer a range of specialized financial services tailored to help you navigate the complexities of wealth management, investment strategy, and long-term financial planning.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
