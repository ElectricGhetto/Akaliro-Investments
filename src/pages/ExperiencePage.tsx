export default function ExperiencePage() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Experience</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Experience" className="rounded-xl mb-6 w-full h-64 object-cover" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Financial Advisory</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Over the past decade, we have provided tailored financial advisory services to individuals and corporations, ensuring robust growth and long-term stability.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Strategy" className="rounded-xl mb-6 w-full h-64 object-cover" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Strategic Planning</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our strategic planning sessions help businesses identify key opportunities, mitigate risks, and optimize operational efficiency for sustainable success.
          </p>
        </div>
      </div>
    </div>
  );
}
