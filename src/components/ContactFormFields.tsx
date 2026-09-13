import { useState } from 'react';

export default function ContactFormFields() {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-gray-100">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#298600] focus:border-transparent outline-none transition-all"
          rows={3}
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#298600] text-white py-3 rounded-lg font-bold hover:bg-[#206a00] transition-colors shadow-md"
      >
        Send
      </button>
    </form>
  );
}
