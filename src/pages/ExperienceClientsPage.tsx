import { motion } from 'motion/react';

export default function ExperienceClientsPage() {
  const clients = [
    { client: 'Infectious Diseases Institute (IDI) Mulago & Makerere Faculty of Medicine', work: 'Cleaning (premises/upholstery), waste management, supplies, fumigation, garden redevelopment', duration: 'Feb 2019 – completed' },
    { client: 'Uganda Health Marketing Group (UHMG)', work: 'General cleaning, waste management, refuse bag supply, fumigation', duration: 'Feb 2022 – completed' },
    { client: 'Engineering Development and Innovation Center, Rwebitete-Kiruhura', work: 'Cleaning/maintenance, fumigation, landscaping', duration: 'Ongoing' },
    { client: 'International Medical Centre (Mbale, Jinja, Entebbe branches)', work: 'Cleaning & general maintenance', duration: 'Jan 2020 – completed' },
    { client: 'International Hospital Kampala (IHK)', work: 'Supply of sundries, refuse bags, maintenance products, safety boxes', duration: 'Feb 2023 – ongoing' },
    { client: 'St. Catherine Junior School, Namugongo', work: 'Cleaning, supplies, fumigation', duration: 'May 2017 – ongoing' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-Services.jpg"
          alt="Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Key Clients & Contracts</h1>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 border-l-4 border-[#298600] pl-4">Our Trusted Partners</h2>
        <div className="grid gap-6">
          {clients.map((c, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#298600] mb-2">{c.client}</h3>
                  <p className="text-gray-700 text-lg mb-2"><span className="font-semibold text-gray-900">Work Performed:</span> {c.work}</p>
                  <p className="text-[#298600] font-semibold">{c.duration}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
