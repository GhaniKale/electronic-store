import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="text-2xl font-bold text-blue-600 mb-3 hover:opacity-80 transition">
                codewithu
              </h2>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              We build modern, responsive, and SEO-friendly websites that help
              businesses grow online with high-quality design and performance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

        {/* SOCIAL MEDIA */}
<div>
  <h3 className="font-semibold mb-4">Social Media</h3>
  <ul className="space-y-2 text-sm text-gray-600">
    <li>
      <a
        href="https://instagram.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[6px] hover:text-blue-600 transition"
      >
        <FaInstagram className="text-sm" />
        <span>Instagram</span>
      </a>
    </li>

    <li>
      <a
        href="https://facebook.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[6px] hover:text-blue-600 transition"
      >
        <FaFacebookF className="text-sm" />
        <span>Facebook</span>
      </a>
    </li>

    <li>
      <a
        href="https://twitter.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[6px] hover:text-blue-600 transition"
      >
        <FaXTwitter className="text-sm" />
        <span>Twitter / X</span>
      </a>
    </li>

    <li>
      <a
        href="https://tiktok.com/@username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[6px] hover:text-blue-600 transition"
      >
        <FaTiktok className="text-sm" />
        <span>TikTok</span>
      </a>
    </li>

    <li>
      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[6px] hover:text-blue-600 transition"
      >
        <FaLinkedinIn className="text-sm" />
        <span>LinkedIn</span>
      </a>
    </li>
  </ul>
</div>


          {/* GET IN TOUCH */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Remote – Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:codewithu@gmail.com" className="hover:text-blue-600">
                  codewithu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+6285183219010" className="hover:text-blue-600">
                  +62 859-7284-2784
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock />
                <span>Mon–Sun: 8AM – 9PM (UTC+7)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t mt-12 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Softver House. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
