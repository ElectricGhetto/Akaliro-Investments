import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Equipment() {
  const equipment = [
    {
      title: "Heavy Machinery",
      description: "Modern equipment for large-scale operations.",
      image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-2.jpg",
      link: "/heavy-machinery"
    },
    {
      title: "Agriculture",
      description: "Advanced tools for efficient cultivation.",
      image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akairo-Investments-Plantations.jpg",
      link: "/agricultural-tools"
    },
    {
      title: "Maintenance",
      description: "Professional maintenance services.",
      image: "https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Mainteinance.jpg",
      link: "/logistics"
    },
  ];

  return (
    <section id="equipment" className="pt-2 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        We utilize state-of-the-art equipment to ensure quality and efficiency across all our service areas.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipment.map((item, index) => {
          const content = (
            <div className="h-full flex flex-col justify-between">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                </div>
              </div>
              {item.link && (
                <div className="px-6 pb-6 pt-0">
                  <span className="inline-flex items-center gap-2 text-[#298600] font-bold text-base group-hover:text-[#206a00] transition-colors">
                    Explore {item.title} <ArrowRight size={18} />
                  </span>
                </div>
              )}
            </div>
          );

          if (item.link) {
            return (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg block group border border-transparent hover:border-[#298600]/30"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
