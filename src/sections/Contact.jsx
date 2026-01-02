import { useState } from "react";
import { CheckCircle, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const reasons = [
    "Fast response time within 24 hours",
    "Free consultation and project estimation",
    "Experienced team of professionals",
    "Clear timeline and on-time delivery",
    "Secure and reliable payment process",
    "Ongoing support after project completion",
    "100% satisfaction guaranteed",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xxxxxx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Interested in collaborating, side-project, or hiring for a project?
            Reach out and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            {/* CONTACT INFO */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="grid grid-cols-[48px_1fr] items-center gap-4 bg-gray-800/60 border border-gray-700/50 p-5 rounded-xl hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-green-500/10">
                  <Phone className="w-5 h-5 text-green-500 translate-y-[1px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-1">
                    Phone
                  </span>
                  <p className="text-white font-medium text-sm leading-tight">
                    +62 812 xxxx xxxx
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-[48px_1fr] items-center gap-4 bg-gray-800/60 border border-gray-700/50 p-5 rounded-xl hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-500 translate-y-[1px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-1">
                    Email
                  </span>
                  <p className="text-white font-medium text-sm leading-tight">
                    withucode@email.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-[48px_1fr] items-center gap-4 bg-gray-800/60 border border-gray-700/50 p-5 rounded-xl hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-500 translate-y-[1px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22s8-4.438 8-11a8 8 0 10-16 0c0 6.562 8 11 8 11z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-1">
                    Location
                  </span>
                  <p className="text-white font-medium text-sm leading-snug">
                    <span className="block">Remote</span>
                    <span className="text-gray-400 text-xs">
                      Jakarta, Indonesia
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] items-center gap-4 bg-gray-800/60 border border-gray-700/50 p-5 rounded-xl">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-purple-500/10">
                  <Clock className="w-5 h-5 text-purple-500 translate-y-[1px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-1">
                    Working Hours
                  </span>
                  <p className="text-white font-medium text-sm leading-snug">
                    <span className="block">Mon – Fri</span>
                    <span className="text-gray-400 text-xs">
                      09:00 – 18:00 WIB
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* WHY CHOOSE US */}
            <div className="bg-gray-800/60 border border-gray-700/50 p-6 rounded-2xl">
              <h3
                className="text-2xl font-bold mb-5"
                style={{ fontFamily: "'Patrick Hand', cursive" }}>
                Why Choose Us?
              </h3>

              <ul className="space-y-3.5">
                {reasons.map((reason, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[20px_1fr] gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {reason}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/60 border border-gray-700/50 p-8 rounded-2xl flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Send a Message</h3>
              <p className="text-gray-400 text-sm mb-2">
                Fill out the form below and we'll get back to you soon.
              </p>

              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <input
                type="email"
                required
                placeholder="withucode@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <textarea
                rows={5}
                required
                placeholder="Tell me about your project or inquiry..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="
    w-full
    h-[52px]
    bg-blue-600
    rounded-lg
    font-semibold
    hover:bg-blue-700
    transition-all
    duration-200
    shadow-lg
    hover:shadow-xl
    hover:scale-[1.02]
    disabled:opacity-50
    disabled:cursor-not-allowed
    grid
    place-items-center
  ">
                {status === "sending" ? (
                  <span className="leading-none">Sending...</span>
                ) : (
                  <span className="inline-flex items-center gap-2 leading-none">
                    <Send className="w-5 h-5 block" />
                    <span>Send Message</span>
                  </span>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                  ✓ Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                  ✗ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
