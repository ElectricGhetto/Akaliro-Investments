export default function Labor() {
  const labor = [
    { title: "Skilled Technicians", description: "Expert professionals for precise operations." },
    { title: "General Labor", description: "Efficient support for daily site activities." },
    { title: "Safety Personnel", description: "Dedicated staff ensuring workplace security." },
  ];

  return (
    <section id="labor" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Labor services</h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
        Our dedicated labor team ensures that every project is executed with precision, safety, and efficiency.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labor.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md transition-transform hover:scale-105">
            <h3 className="font-semibold text-xl mb-4 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
