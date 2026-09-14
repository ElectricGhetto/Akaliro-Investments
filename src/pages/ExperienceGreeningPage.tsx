import { motion } from 'motion/react';

export default function ExperienceGreeningPage() {
  const contracts = [
    { name: 'Essella Country Hotel', description: '1.8-acre garden development/maintenance' },
    { name: 'Fairway Hotel and Spa', description: 'landscape design' },
    { name: 'Capital Outdoor Advertising Co.', description: 'landscape design' },
    { name: 'Seven Trees Bridal Gardens', description: '4.5-acre bridal garden design/maintenance' },
    { name: 'IDI', description: '2-acre green space/compound alteration at Makerere & Mulago' },
    { name: 'USAID-IRS', description: 'compound/roadside design and maintenance' },
    { name: 'UHMG', description: 'green space design/development' },
    { name: 'Jinja Municipal Council', description: '"Painting the City Bright" beautification project' },
    { name: 'Private Properties', description: 'Over 50 private homes: compound design and maintenance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-About-Us.jpg"
          alt="Greening & Beautification"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center px-4">Open Space Greening & Beautification</h1>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 border-l-4 border-[#298600] pl-4">Our Projects</h2>
        <div className="grid gap-6">
          {contracts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#298600] mb-1">{c.name}</h3>
                <p className="text-gray-700 text-lg">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
