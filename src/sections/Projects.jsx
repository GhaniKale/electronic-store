import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "e-commerce", label: "E-Commerce" },
  { key: "landing-page", label: "Landing Page" },
  { key: "company-profile", label: "Company Profile" },
  { key: "education", label: "Education" },
  { key: "rental", label: "Rental" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const data =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 text-center">
            Website Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-center">
            Examples of websites I’ve delivered to help businesses increase
            trust and conversions.
          </p>
        </div>

        {/* FILTER NAVBAR */}
        <div className="mb-12 w-full flex justify-center sm:justify-center relative">
          {/* Desktop Buttons - Center */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 bg-gray-800/80 p-2 rounded-full mx-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 text-xs sm:text-sm rounded-full transition
                  ${
                    active === cat.key
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown - Right Side */}
          <div className="sm:hidden absolute right-0 w-28">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="w-full p-1 text-xs rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {categories.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((p) => (
            <div
              key={p.id}
              className="
                bg-gray-800/60
                rounded-md
                border border-gray-700
                overflow-hidden
                flex flex-col
                transition-all duration-300
                hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:border-blue-500/50
              ">
              {/* IMAGE LANDSCAPE */}
              <div className="w-full aspect-[16/9] overflow-hidden rounded-t-md">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-xs font-medium truncate">
                    {p.title}
                  </h3>
                  <p className="text-[10px] sm:text-[9px] text-gray-400 line-clamp-2 mt-1 mb-2">
                    {p.description}
                  </p>
                </div>

                <a
                  href={p.vercelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-1
                    px-2 py-1
                    text-[10px] sm:text-[9px] font-medium
                    rounded
                    bg-blue-500/10 text-blue-400
                    border border-blue-500/20
                    hover:bg-blue-500/20 hover:text-blue-300
                    transition
                  ">
                  <ExternalLink size={10} />
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>

        {data.length === 0 && (
          <p className="text-center text-gray-400 mt-12 text-sm">
            No projects available.
          </p>
        )}
      </div>
    </section>
  );
}
