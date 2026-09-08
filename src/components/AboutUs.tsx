import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section id="about" className="pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Akaliro Investment is a dedicated financial partner providing sustainable growth, tailored wealth management, and strategic market expertise. We leverage deep analytical insights to identify global opportunities, ensuring long-term prosperity through robust partnerships and innovative financial planning solutions.
          </p>
          <Link
            to="/about"
            className="inline-block rounded-full bg-[#298600] px-8 py-3 font-semibold text-white transition-all hover:bg-[#206a00]"
          >
            Learn more
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-About-Us.jpg" alt="About Us" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
