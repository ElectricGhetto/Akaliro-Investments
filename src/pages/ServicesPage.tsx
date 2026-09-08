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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Our Services</h1>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-[#298600] pl-4">{service.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
