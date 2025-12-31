import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", label: "Home" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="font-extrabold text-lg tracking-wide text-white">
          code<span className="text-purple-400">withu</span>
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-8">
          {menu.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`text-sm font-semibold transition-colors duration-300
                  ${
                    active === item.id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item.label}

                {/* underline animation */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-purple-400 transition-all duration-300
                    ${
                      active === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
