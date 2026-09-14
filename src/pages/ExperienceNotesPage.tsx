import { motion } from 'motion/react';

export default function ExperienceNotesPage() {
  const notes = [
    { title: 'Industry Partnerships', description: 'Collaborations with construction firms like KAPS Engineers and Consult for post-construction site cleaning and greening.' },
    { title: 'Past Clients', description: 'The Ministry of Gender and Bank of Africa-Arua are valued past clients.' },
    { title: 'Expert Team', description: 'Our Managing Director brings 10 years of experience, with key staff expertise ranging from 2 to 18 years.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-Services.jpg"
          alt="Experience Notes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center px-4">Other Experience Notes</h1>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 border-l-4 border-[#298600] pl-4">Insights & Details</h2>
        <div className="grid gap-6">
          {notes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#298600] mb-2">{note.title}</h3>
              <p className="text-gray-700 text-lg">{note.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
