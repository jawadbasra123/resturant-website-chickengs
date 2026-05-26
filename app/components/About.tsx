"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Locations", value: "3", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { label: "Halal Certified", value: "100%", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Rating", value: "4.7★", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { label: "Happy Customers", value: "10000+", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-text-primary mb-4 sm:mb-6 tracking-wide">
            BOLD FLAVOR.{" "}
            <span className="text-red">REAL HALAL.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed px-2">
            Premium quality ingredients. Hand-slaughtered Halal chicken. Made
            with love every single time. Born in the Bay Area, Chicken G&apos;s
            is where bold flavors meet uncompromising quality. Every piece of
            chicken is hand-prepared, marinated to perfection, and fried to a
            golden crisp.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card border border-border rounded-2xl p-4 sm:p-6 text-center hover:border-red/40 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 bg-red/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
              <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-xs sm:text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
