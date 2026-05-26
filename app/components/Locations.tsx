"use client";

import { motion } from "framer-motion";

type Location = {
  name: string;
  address: string;
  hours: string;
  lateNight?: string;
  rating: string;
  reviews: string;
  uberEatsUrl: string;
  mapQuery: string;
};

const locations: Location[] = [
  {
    name: "Mountain View",
    address: "1414 West El Camino Real, Mountain View, CA 94040",
    hours: "Sun–Sat 11AM–1AM",
    rating: "4.7",
    reviews: "1,000+",
    uberEatsUrl:
      "https://www.ubereats.com/store/chicken-gs-mountain-view/eIxZ4x0pVkidzkgVQCdyzQ",
    mapQuery: "1414+W+El+Camino+Real+Mountain+View+CA+94040",
  },
  {
    name: "Fremont",
    address: "40839 Fremont Blvd, Fremont, CA 94538",
    hours: "Sun–Sat 10:30AM–1AM",
    rating: "4.4",
    reviews: "280+",
    uberEatsUrl:
      "https://www.ubereats.com/store/chicken-gs-mountain-view/eIxZ4x0pVkidzkgVQCdyzQ",
    mapQuery: "40839+Fremont+Blvd+Fremont+CA+94538",
  },
  {
    name: "San Francisco",
    address: "346 Kearny Street, San Francisco, CA 94108",
    hours: "Sun–Sat 11AM–12AM",
    rating: "4.6",
    reviews: "330+",
    uberEatsUrl:
      "https://www.ubereats.com/store/chicken-gs-san-francisco/MxP0VMnDWsGmcRNSRJ-Z6w",
    mapQuery: "346+Kearny+St+San+Francisco+CA+94108",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-text-primary mb-3 sm:mb-4 tracking-wide">
            FIND <span className="text-red">US</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Three Bay Area locations serving up the best halal fried chicken.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-red/40 transition-all group"
            >
              <div className="relative h-40 sm:h-48 bg-bg-secondary">
                <iframe
                  title={`Chicken G's ${loc.name} location`}
                  src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="font-heading text-2xl sm:text-3xl text-text-primary tracking-wide">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-1.5 bg-yellow/10 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                    <span className="text-yellow text-xs sm:text-sm">&#9733;</span>
                    <span className="text-yellow text-xs sm:text-sm font-bold">
                      {loc.rating}
                    </span>
                    <span className="text-text-muted text-xs hidden sm:inline">
                      ({loc.reviews})
                    </span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-text-secondary text-xs sm:text-sm">
                      {loc.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="text-text-secondary text-xs sm:text-sm block">
                        {loc.hours}
                      </span>
                      {loc.lateNight && (
                        <span className="text-red text-xs font-medium">
                          {loc.lateNight}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+16509187777"
                      className="text-text-secondary hover:text-red text-xs sm:text-sm transition-colors"
                    >
                      (650) 918-7777
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white py-3 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all active:scale-95 hover:scale-[1.02]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Directions
                  </a>
                  <a
                    href="tel:+16509187777"
                    className="flex items-center justify-center gap-2 bg-bg-secondary border border-border hover:border-red/40 text-text-primary py-3 px-5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all active:scale-95"
                  >
                    <svg
                      className="w-4 h-4 text-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
