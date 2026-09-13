import { motion } from 'motion/react';

export default function AdjacentBusinessLinesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Adjacent Business Lines</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 flex flex-col justify-center">
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akairo-Investments-Plantations.jpg" alt="Horticulture" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Ground-Levelling.jpg" alt="Construction Adjacent" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8 flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Horticulture & Farming</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Our horticulture services focus on the sustainable farming of crops including tomatoes, bananas, onions, cocoa, coffee, and cassava. Leveraging our agricultural expertise, we manage sustainable farming projects that produce high-quality yields while ensuring environmentally responsible land practices.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Construction-Adjacent Work</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We complement major construction projects by providing essential site preparation and restoration services, such as site greening and clearing. We partner with firms like KAPS Engineers and Consult to ensure your development transitions seamlessly to a finished, aesthetic state.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Architecture & Engineering</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Our technical capacity in architecture, civil engineering, and quantity surveying enables us to offer integrated support for complex construction projects. We assist in every stage of planning and development to ensure successful project delivery.</p>
                </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
