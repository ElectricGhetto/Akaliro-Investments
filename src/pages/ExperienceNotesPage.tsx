import { motion } from 'motion/react';

export default function ExperienceNotesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Other Experience Notes</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <ul className="space-y-4 text-xl text-gray-700 list-disc pl-6">
            <li>Partnerships with construction firms (e.g., KAPS Engineers and Consult) for post-construction site cleaning/greening.</li>
            <li>Ministry of Gender and Bank of Africa-Arua also mentioned as past clients (in the intro section, without contract details).</li>
            <li>Managing Director alone has 10 years of relevant experience; other key staff range from 2-18 years.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
