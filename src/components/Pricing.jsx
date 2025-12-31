export default () => (
  <section
    id="pricing"
    className="py-20 bg-gray-900 text-white"
    data-aos="fade-up"
  >
    <div className="max-w-6xl mx-auto text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Pricing Plan
      </h2>
      <p className="text-gray-400 mb-12">
        Flexible pricing for side-job & freelance projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BASIC */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Basic</h3>

          <div className="mb-4">
            <span className="line-through text-gray-500 text-sm mr-2">
              $149
            </span>
            <span className="text-3xl font-extrabold text-white">
              $99
            </span>
            <span className="text-gray-400 text-sm"> / project</span>
          </div>

          <ul className="text-gray-300 space-y-3 mb-8 text-sm">
            <li>✔ Simple landing page</li>
            <li>✔ Responsive design</li>
            <li>✔ Basic SEO</li>
            <li>✔ Email support</li>
          </ul>

          <a
            href="https://wa.me/6281234567890?text=Hi,%20I'm%20interested%20in%20Basic%20Plan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Contact WhatsApp
          </a>
        </div>

        {/* PRO - BEST VALUE */}
        <div className="relative bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-purple-500 flex flex-col scale-105">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 text-xs font-bold rounded-full">
            BEST VALUE
          </span>

          <h3 className="text-xl font-bold mb-2">Pro</h3>

          <div className="mb-4">
            <span className="line-through text-gray-500 text-sm mr-2">
              $249
            </span>
            <span className="text-3xl font-extrabold text-purple-400">
              $199
            </span>
            <span className="text-gray-400 text-sm"> / project</span>
          </div>

          <ul className="text-gray-300 space-y-3 mb-8 text-sm">
            <li>✔ Web application</li>
            <li>✔ React / Tailwind</li>
            <li>✔ API integration</li>
            <li>✔ Priority support</li>
          </ul>

          <a
            href="https://wa.me/6281234567890?text=Hi,%20I'm%20interested%20in%20Pro%20Plan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            Contact WhatsApp
          </a>
        </div>

        {/* PREMIUM */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Premium</h3>

          <div className="mb-4">
            <span className="line-through text-gray-500 text-sm mr-2">
              $399
            </span>
            <span className="text-3xl font-extrabold text-white">
              $299
            </span>
            <span className="text-gray-400 text-sm"> / project</span>
          </div>

          <ul className="text-gray-300 space-y-3 mb-8 text-sm">
            <li>✔ Full custom web app</li>
            <li>✔ Dashboard & CMS</li>
            <li>✔ Performance optimization</li>
            <li>✔ 24/7 support</li>
          </ul>

          <a
            href="https://wa.me/6281234567890?text=Hi,%20I'm%20interested%20in%20Premium%20Plan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Contact WhatsApp
          </a>
        </div>

      </div>
    </div>
  </section>
);
