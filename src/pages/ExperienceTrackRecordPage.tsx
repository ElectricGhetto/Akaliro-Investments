import { motion } from 'motion/react';

export default function ExperienceTrackRecordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <img
          src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-About-Us.jpg"
          alt="Track Record"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Our Track Record</h1>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-[#298600] pl-4">7 Years of Excellence</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              For over 7 years, AKaliro Investments has been a trusted partner in providing professional environmental, cleaning, and logistics services. From our humble beginnings, we have grown to successfully manage large-scale operations for major institutions, consistently delivering quality and reliability.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro%20Investments%20Team%20(2).webp"
            alt="Our Team"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </section>

        {/* Milestone Section */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold mb-8 text-[#298600]">Key Milestones</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Founding', text: 'Started with a vision to revolutionize local environmental services.' },
              { title: 'Operational Expansion', text: 'Scaled our fleet and equipment to meet growing demand.' },
              { title: 'Institutional Partnerships', text: 'Secured long-term contracts with major healthcare providers.' },
              { title: 'Quality Standards', text: 'Implemented rigorous SOP-driven training for all staff.' },
            ].map((milestone, idx) => (
              <div key={idx} className="border-l-2 border-gray-200 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
