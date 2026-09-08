export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Contact us</h2>
      <form className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] outline-none" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] outline-none" placeholder="Your email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] outline-none" rows={4} placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="w-full bg-[#298600] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#206a00] transition-colors">
          Send message
        </button>
      </form>
    </section>
  );
}
