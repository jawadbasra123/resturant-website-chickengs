"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHONE_URL = "tel:+16509187777";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1920&q=80"
        alt="Crispy fried chicken"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-bg-primary" />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl mx-auto pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-[2.75rem] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wide text-text-primary mb-4 sm:mb-4"
        >
          THE GOAT OF
          <br />
          <span className="text-red">FRIED CHICKEN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-text-secondary text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 tracking-wide"
        >
          Hand-Slaughtered Halal &bull; Bay Area&apos;s Finest
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href={PHONE_URL}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(214,40,40,0.4)] text-center active:scale-95"
          >
            <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Order Now
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 text-text-primary px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold uppercase tracking-wider transition-all hover:bg-white/10 text-center active:scale-95"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="block animate-bounce">
          <svg
            className="w-6 h-6 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
