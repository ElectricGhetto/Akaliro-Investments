export default function ServicesPage() {
  const services = [
    { title: "HUMAN RESOURCE", description: "Providing skilled personnel and comprehensive management for your projects.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" },
    { title: "MACHINES AND MATERIALS", description: "Supplying top-tier machinery and quality construction materials.", image: "https://images.unsplash.com/photo-1504917595217-d4f5ebe612b0?auto=format&fit=crop&q=80&w=800" },
    { title: "WORK EXPERIENCE", description: "Leveraging years of expertise to deliver exceptional results.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { title: "QUALITY ASSURANCE SYSTEMS", description: "Ensuring all deliverables meet the highest standards.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { title: "INSURANCE", description: "Comprehensive coverage solutions for peace of mind.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
    { title: "SECURITY", description: "Robust protection services for your assets and personnel.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-16 text-center text-gray-900">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <button className="w-full bg-[#298600] text-white py-2 rounded-lg font-semibold hover:bg-[#206a00] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
