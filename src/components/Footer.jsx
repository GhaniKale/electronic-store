import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/code.withu",
    },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/username" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/username" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/username",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-14">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* BRAND */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold text-blue-500 mb-3">codewithu</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Building modern, responsive websites that help businesses grow
              online.
            </p>
          </motion.div>

          {/* NAV */}
          <motion.div variants={item}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-gray-400 relative
                      hover:text-blue-400 transition
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0 after:bg-blue-400
                      after:transition-all hover:after:w-full
                    ">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="grid grid-cols-[20px_1fr] items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:codewithu@gmail.com"
                  className="hover:text-blue-400 transition">
                  withucode@email.com
                </a>
              </li>

              <li className="grid grid-cols-[20px_1fr] items-center gap-3">
                <Phone size={18} />
                <a
                  href="tel:+6285972842784"
                  className="hover:text-blue-400 transition">
                  +62 859-7284-2784
                </a>
              </li>

              <li className="grid grid-cols-[20px_1fr] items-center gap-3">
                <MapPin size={18} />
                <span>Remote · Jakarta, Indonesia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          variants={item}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Code With U. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    grid place-items-center
                    w-9 h-9 rounded-full
                    bg-gray-800 text-gray-400
                    hover:bg-blue-600 hover:text-white
                    transition-colors
                  ">
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
