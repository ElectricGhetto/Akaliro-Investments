import { motion } from 'motion/react';

export default function ExperienceTrackRecordPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Overall Track Record</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <ul className="space-y-4 text-xl text-gray-700 list-disc pl-6">
            <li>Over 7 years providing professional environmental/cleaning services.</li>
            <li>Started small, grew to handle "huge enterprises" over time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
