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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Key Clients and Contracts</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-left text-xl">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-2">Client</th>
                <th className="py-4 px-2">Work Performed</th>
                <th className="py-4 px-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-2">{c.client}</td>
                  <td className="py-4 px-2">{c.work}</td>
                  <td className="py-4 px-2">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
