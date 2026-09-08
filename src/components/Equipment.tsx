export default function Equipment() {
  const equipment = [
    { title: "Heavy Machinery", description: "Modern equipment for large-scale operations.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-2.jpg" },
    { title: "Agricultural Tools", description: "Advanced tools for efficient cultivation.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-3.jpg" },
    { title: "Logistics Fleet", description: "Reliable transport for timely delivery.", image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery.jpg" },
  ];

  return (
    <section id="equipment" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Equipment and machinery</h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
        We utilize state-of-the-art equipment to ensure quality and efficiency across all our service areas.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipment.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
