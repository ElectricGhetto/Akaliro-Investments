import { motion } from 'motion/react';

export default function ExperienceGreeningPage() {
  const contracts = [
    'Essella Country Hotel – 1.8-acre garden development/maintenance',
    'Fairway Hotel and Spa – landscape design',
    'Capital Outdoor Advertising Co. – landscape design',
    'Seven Trees Bridal Gardens – 4.5-acre bridal garden design/maintenance',
    'IDI – 2-acre green space/compound alteration at Makerere & Mulago',
    'USAID-IRS – compound/roadside design and maintenance',
    'UHMG – green space design/development',
    'Jinja Municipal Council – "Painting the City Bright" beautification project',
    'Over 50 private homes and properties – compound design and maintenance',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Open Space Greening & Beautification Contracts</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <ul className="space-y-4 text-xl text-gray-700 list-disc pl-6">
            {contracts.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
