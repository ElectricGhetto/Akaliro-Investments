import { motion } from 'motion/react';

export default function RelatedServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 border-l-8 border-[#298600] pl-6">Related Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 flex flex-col justify-center">
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro%20Investments%20Team%20(2).webp" alt="Our Team" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
                <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro%20Investments%20About%20Us.webp" alt="Service Delivery" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8 flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Support & Maintenance</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Our support services include compound maintenance, interior designing, façade cleaning, and dedicated maid services (about 5 per week). We provide bespoke property maintenance and design solutions to enhance the functionality and aesthetic appeal of your residential or commercial space.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Personnel & Training</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We supply professional human resource support staff and offer free hygiene and pest-management training for client staff as part of our after-sales service. Empowering your team with professional support and expert training ensures consistent standards and long-term operational success.</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <h3 className="text-2xl font-bold text-[#298600] mb-2">Community & Perks</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We offer perks such as free vehicle cleaning for select clients and are committed to CSR by providing free pest and infection control for orphanages and underprivileged homes. We are dedicated to giving back and adding tangible value to our loyal clients through community impact initiatives.</p>
                </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
