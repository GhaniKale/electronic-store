export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT - INFO */}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-black border border-gray-700 text-white text-xs font-bold tracking-widest uppercase mb-4">
            Contact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mb-8">
            Tertarik kerja sama, side-job, atau project?  
            Silakan hubungi saya melalui form atau kontak di bawah.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              yourname@email.com
            </li>
            <li>
              <span className="font-semibold text-white">WhatsApp:</span>{" "}
              +62 812-xxxx-xxxx
            </li>
            <li>
              <span className="font-semibold text-white">Location:</span>{" "}
              Indonesia
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form
          action="https://formspree.io/f/xxxxxx"
          method="POST"
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
