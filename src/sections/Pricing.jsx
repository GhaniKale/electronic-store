const plans = [
  {
    name: "Basic",
    price: "Rp750.000",
    oldPrice: "Rp1.000.000",
    accent: "from-blue-500 to-cyan-400",
    border: "border-blue-500/40",
    features: [
      "Landing page 1 halaman",
      "Responsive (Mobile friendly)",
      "Basic SEO",
      "Free revisi 1x",
    ],
    wa: "Paket Basic",
  },
  {
    name: "Pro",
    price: "Rp1.500.000",
    oldPrice: "Rp2.000.000",
    accent: "from-purple-500 to-pink-500",
    border: "border-purple-500/50",
    best: true,
    features: [
      "Website multi halaman",
      "React + Tailwind",
      "Integrasi API / Form",
      "Free revisi 3x",
    ],
    wa: "Paket Pro",
  },
  {
    name: "Premium",
    price: "Rp2.500.000",
    oldPrice: "Rp3.500.000",
    accent: "from-indigo-500 to-blue-500",
    border: "border-blue-500/40",
    features: [
      "Custom web app",
      "Dashboard / CMS ringan",
      "Optimasi performa",
      "Support prioritas",
    ],
    wa: "Paket Premium",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        bg-gray-900 text-white
        py-28
        scroll-mt-4
      ">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plan</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Flexible pricing for side-job & freelance projects
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative group
                bg-gray-800/80 backdrop-blur
                rounded-2xl border ${plan.border}
                flex flex-col p-8
                transition-all duration-500
                hover:-translate-y-4 hover:scale-[1.03]
              `}>
              {/* AURA */}
              <div
                className={`
                  absolute -top-28 left-1/2 -translate-x-1/2
                  w-44 h-44 rounded-full
                  bg-gradient-to-br ${plan.accent}
                  blur-3xl opacity-30
                `}
              />

              {/* BADGE */}
              {plan.best && (
                <span
                  className="
                  absolute -top-4 left-1/2 -translate-x-1/2
                  bg-gradient-to-r from-purple-500 to-pink-500
                  px-6 py-1 text-xs font-bold rounded-full
                ">
                  BEST VALUE
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-4 text-center z-10">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="text-center mb-8 z-10">
                <span className="line-through text-gray-500 text-sm block">
                  {plan.oldPrice}
                </span>
                <span className="text-4xl font-extrabold block">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm">per project</span>
              </div>

              {/* FEATURES */}
              <ul className="flex-1 text-gray-300 space-y-4 mb-10 text-sm z-10">
                {plan.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-400">✔</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <a
                href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                  plan.wa
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex justify-center items-center
                  px-6 py-3 rounded-xl font-semibold
                  bg-gradient-to-r ${plan.accent}
                `}>
                Hubungi WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
