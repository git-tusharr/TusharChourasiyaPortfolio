import { motion } from "framer-motion";

export default function FeaturedStealDeals() {
  return (
    <section className="py-28 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >

          {/* PROJECT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src="/stealdeals.png"
              alt="StealDeals Project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* PROJECT CONTENT */}
          <div>

            <span className="bg-purple-600 text-sm px-3 py-1 rounded-full">
               Featured Fullstack Project
            </span>

            <h2 className="text-4xl font-bold mt-4">
              StealDeals Ecommerce Platform
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A scalable fullstack ecommerce application built using React.js,
              Spring Boot and MySQL. The platform includes secure authentication,
              role-based dashboards, payment gateway integration and complete
              shopping workflow from product browsing to order placement.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-gray-300">

              <span>✔ Razorpay Payment Gateway</span>
              <span>✔ OTP 2FA Login</span>
              <span>✔ Google OAuth Login</span>
              <span>✔ Seller Dashboard</span>
              <span>✔ Admin Dashboard</span>
              <span>✔ Wishlist System</span>
              <span>✔ Cart & Checkout Flow</span>
              <span>✔ Order Management</span>

            </div>

            {/* TECH STACK */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React",
                "Redux Toolkit",
                "Spring Boot",
                "Hibernate",
                "MySQL",
                "JWT Auth",
                "REST APIs",
                "Razorpay"
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://final-java-project-frontend.vercel.app/"
                target="_blank"
                className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/git-tusharr/FinalJavaProject-Frontend"
                target="_blank"
                className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition"
              >
                GitHub
              </a>
            </div>

            <p className="mt-6 text-yellow-400 font-semibold">
              🚧 Under Active Development
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}