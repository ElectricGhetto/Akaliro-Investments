import { motion } from 'motion/react';

export default function CoreServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Core Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col justify-center">
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-Services.jpg" alt="Cleaning Services" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-2.jpg" alt="Facility Maintenance" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8 flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Cleaning</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Our residential, office, hospital, and commercial cleaning services cover upholstery, premises, and high-level exterior maintenance, including vertical surfaces and rooftops. We utilize eco-friendly agents and state-of-the-art equipment to ensure a hygienic and healthy environment for your home or business.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Fumigation / Pest control</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We provide small and large-scale pest management and fumigation, including disinfection and sterilization. Our comprehensive solutions are designed to eliminate infestations and prevent future issues, keeping your premises safe and fully compliant with health regulations.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Landscaping / Gardening</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Our landscaping services include tree planting, compound beautification, open-space greening, and comprehensive garden design and maintenance. We transform your outdoor spaces into vibrant, well-manicured sanctuaries.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Garbage/waste management</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We offer reliable and efficient waste collection and disposal services tailored to maintain cleanliness and support sustainability in your corporate or residential environment.</p>
                </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
