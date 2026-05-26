"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

type Review = {
  text: string;
  author: string;
  location?: string;
};

const reviews: Review[] = [
  {
    text: "THE SPECIAL REQUEST THEY ALWAYS LISTEN!! THEY ARE THE GOAT NO MATTER HOW MANY ORDER CONSISTENTLY DELIVER",
    author: "Ivan V.",
  },
  {
    text: "The sandwiches are huge! Mine came out crispy and delicious. I'm definitely ordering again.",
    author: "Julio",
  },
  {
    text: "Always amazing chicken, fries, coleslaw and lemonade",
    author: "Tim S.",
  },
  {
    text: "the chicken is why I've ordered over 10 orders. enough said. whatever you get from here is made with quality and love",
    author: "Joshua D.",
  },
  {
    text: "Best chicken sandwich ever",
    author: "Betty C.",
  },
  {
    text: "Chicken was so crispy!",
    author: "Denise M.",
  },
  {
    text: "Getting chicken in San Francisco has been like Russian roulette. This place made me feel like I'll be able to eat chicken again",
    author: "Dante D.",
    location: "San Francisco",
  },
  {
    text: "Fantastic! 1st choice when in town.",
    author: "Manuel C.",
    location: "San Francisco",
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-text-primary mb-3 sm:mb-4 tracking-wide">
            WHAT PEOPLE <span className="text-red">SAY</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Don&apos;t take our word for it — hear from the people.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-bg-card border border-border rounded-full text-text-secondary hover:text-red hover:border-red/40 transition-all"
            aria-label="Scroll reviews left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-none w-[280px] sm:w-[340px] bg-bg-card border border-border rounded-2xl p-4 sm:p-6 snap-start hover:border-red/40 transition-colors"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="text-yellow text-base sm:text-lg"
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-text-primary text-sm leading-relaxed mb-3 sm:mb-4 min-h-[50px] sm:min-h-[60px]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red/15 flex items-center justify-center shrink-0">
                    <span className="text-red font-bold text-xs sm:text-sm">
                      {review.author[0]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-text-primary text-sm font-medium block truncate">
                      {review.author}
                    </span>
                    {review.location && (
                      <span className="text-text-muted text-xs">
                        {review.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-bg-card border border-border rounded-full text-text-secondary hover:text-red hover:border-red/40 transition-all"
            aria-label="Scroll reviews right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
