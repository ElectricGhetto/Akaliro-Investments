export default function Team() {
  const team = [
    { name: "John Doe", role: "CEO", bio: "With over 20 years of experience in finance." },
    { name: "Jane Smith", role: "CTO", bio: "Expert in financial technology and innovation." },
    { name: "Mike Johnson", role: "Lead Analyst", bio: "Specialist in global market trends." },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{member.name}</h3>
            <p className="text-[#298600] font-medium mb-4">{member.role}</p>
            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
