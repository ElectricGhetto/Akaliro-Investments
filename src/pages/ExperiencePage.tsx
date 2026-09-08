export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#298600] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Experience</h1>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Experience" className="rounded-xl mb-6 w-full h-64 object-cover" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-l-4 border-[#298600] pl-4">Financial Advisory</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Over the past decade, we have provided tailored financial advisory services to individuals and corporations, ensuring robust growth and long-term stability.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Strategy" className="rounded-xl mb-6 w-full h-64 object-cover" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-l-4 border-[#298600] pl-4">Strategic Planning</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our strategic planning sessions help businesses identify key opportunities, mitigate risks, and optimize operational efficiency for sustainable success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
