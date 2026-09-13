import { motion } from 'motion/react';

export default function SuppliesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Supplies</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col gap-6 h-full">
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-2.jpg" alt="Cleaning Supplies" className="w-full flex-1 object-cover rounded-2xl shadow-lg" />
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-2.jpg" alt="Industrial Supplies" className="w-full flex-1 object-cover rounded-2xl shadow-lg" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Essential Cleaning Supplies</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">We offer a wide selection of essential supplies including refuse bags, biohazard bags, safety boxes, gloves, and other dedicated cleaning and pest-control related products. We provide a comprehensive inventory to help you maintain rigorous hygiene standards in high-traffic or clinical environments.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Detergents & Chemicals</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">Our inventory includes liquid soaps, polish emulsions, floor maintainers, strippers, and specialized glass/marble cleaners. These cleaning agents are formulated for superior efficacy and surface safety, ensuring optimal results for every application type, from industrial floors to delicate surfaces.</p>
                </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
