import { motion } from 'motion/react';

const clientLogos = [
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/uhmg-logo-144x72-1.png',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Thbn52rmFRdpnBcRLRkFsr3qaxe1sLrnP7KqUzy34ilrnHbl0e1cLG7cE7_Pn1dngfqXwDqCY3GxPV3pOEN5S2BcN0yzg_S1bnpE9NQdyxLuI4FCe7gbIIMqSld3vmmA0ip2CI2dcihMKIvnBfzkB-YElfb9wjGTI6fCIBITW0aFxtDX4SqfhsSgSsl0TyEb.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/images%20(27).jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/iklBad3KCfuE_awcNe4UtsjU3HOpv7PFmaxotQ10PwRMWkZc3ygSdi9fnF0MOFuXsWHrLgnAGvLUaO07ahUJ5qg1fiLVg-_13dQ1pezCQ8XeiNRHZNmACAHh6tGQ1wO5ueGG0t3N18YHpaiUc-vInrzGS1TKIslX2GKl21VHWp0nzOi06Aeqt2vP_spLUvGf.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/EDiC-logo-new.png',
];

export default function ClientLogos() {
  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Clients</h2>
      <div className="relative flex w-full">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
