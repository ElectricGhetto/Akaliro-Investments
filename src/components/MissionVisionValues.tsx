import { Target, Compass } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards, transparency, and trust in all our partnerships and commercial dealings.',
  },
  {
    title: 'Excellence',
    description: 'We deliver superior performance, unmatched precision, and rigorous quality standards across all projects.',
  },
  {
    title: 'Accountability',
    description: 'We take complete ownership of outcomes, ensuring reliable execution, safety compliance, and client satisfaction.',
  },
];

export default function MissionVisionValues() {
  return (
    <section className="pb-16 px-6 max-w-7xl mx-auto">
      {/* Mission & Vision Row */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Mission Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-[#298600] flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-[#298600]/10 text-[#298600]">
                <Target size={26} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide exceptional facility management and sustainable agricultural solutions that foster growth, safety, and operational excellence for our clients and communities across Uganda.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-yellow-400 flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-yellow-400/20 text-yellow-700">
                <Compass size={26} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading partner in integrated environmental and sustainable resource solutions, recognized for our innovation, reliability, and steadfast commitment to a greener, industrialized future.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h3>
          <p className="text-gray-600 text-base md:text-lg">
            The foundational principles that guide every machine we deploy, every facility we manage, and every client relationship we build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200/70 hover:border-[#298600]/40 transition-colors flex flex-col"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2.5">{val.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
