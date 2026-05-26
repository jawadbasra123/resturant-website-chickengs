"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PHONE_URL = "tel:+16509187777";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Featured",
    items: [
      {
        name: "The Big G",
        price: "$19.49",
        description:
          "Hand battered fried chicken served on a sesame bun with Swiss cheese, lettuce, tomato, red onions & our tangy garlic sauce.",
        image: "/menu/big-g.jpeg",
        tag: "Most Popular",
      },
      {
        name: "Naughty-Chick",
        price: "$19.49",
        description:
          "Hand battered fried chicken served with pepper jack cheese, serrano chili, lettuce & the G sauce on a toasted sesame bun.",
        image: "/menu/naughty-chick.jpg",
        tag: "Spicy",
      },
      {
        name: "The G Meal",
        price: "$22.99",
        description:
          "4 pc chicken with 2 sides, 2 Texas Toasts & house sauces (2 Thigh 2 drum).",
        image: "/menu/g-meal.jpeg",
        tag: "Best Value",
      },
      {
        name: "Loaded G-Fries",
        price: "$15.99",
        description:
          "Seasoned fries topped with our premium crispy chicken, cheddar cheese, drizzled with house sauces, onions & serrano peppers.",
        image: "/menu/loaded-g-fries.jpg",
        tag: "Loaded",
      },
      {
        name: "Crispy Wings (6 pc)",
        price: "$12.99",
        description:
          "Crispy chicken wings with our crowd favorite G-sauce (6 pieces).",
        image: "/menu/wings.jpeg",
      },
      {
        name: "Tender Meal (2 pc)",
        price: "$12.99",
        description:
          "2 pc chicken tenders with a side & house sauces.",
        image: "/menu/tender-meal.jpeg",
      },
    ],
  },
  {
    name: "Sandwiches & Combos",
    items: [
      {
        name: "Chick-licious",
        price: "$14.29",
        description:
          "Hand battered fried chicken served on a sesame bun with premium mayonnaise.",
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
      },
      {
        name: "The Big G",
        price: "$19.49",
        description:
          "Hand battered fried chicken served on a sesame bun with Swiss cheese, lettuce, tomato, red onions & our tangy garlic sauce.",
        image: "/menu/big-g.jpeg",
        tag: "Most Popular",
      },
      {
        name: "Naughty-Chick",
        price: "$19.49",
        description:
          "Hand battered fried chicken served with pepper jack cheese, serrano chili, lettuce & the G sauce on a toasted sesame bun.",
        image: "/menu/naughty-chick.jpg",
        tag: "Spicy",
      },
      {
        name: "Bad Boy!",
        price: "$19.36",
        description:
          "Hand battered fried chicken served on a sesame bun with mild cheddar, lettuce & our G-Sauce.",
        image: "/menu/bad-boy.jpeg",
        tag: "Bold",
      },
      {
        name: "My Veg G",
        price: "$13.99",
        description:
          "House made potato and chickpea patty served in a sesame bun with cheddar cheese, lettuce, tomato, red onions & tangy garlic sauce.",
        image: "/menu/my-veg.jpg",
        tag: "Veggie",
      },
      {
        name: "Combo 1",
        price: "$13.99",
        description:
          "2 pc chicken with a side, Texas Toast & house sauces (1 Thigh 1 drum).",
        image: "/menu/combo-1.jpeg",
      },
      {
        name: "The G Meal",
        price: "$22.99",
        description:
          "4 pc chicken with 2 sides, 2 Texas Toasts & house sauces (2 Thigh 2 drum).",
        image: "/menu/g-meal.jpeg",
      },
      {
        name: "Friend's Meal",
        price: "$38.99",
        description:
          "8 pc chicken with 3 sides, 3 Texas Toasts & house sauces (4 Thigh 4 drum).",
        image: "/menu/g-meal.jpeg",
        tag: "Best Value",
      },
      {
        name: "Tender Meal (2 pc)",
        price: "$12.99",
        description:
          "2 pc chicken tenders with a side & house sauces.",
        image: "/menu/tender-meal.jpeg",
      },
      {
        name: "Tender Basket (5 pc)",
        price: "$21.99",
        description:
          "5 pc chicken tenders with our house sauces.",
        image: "/menu/tender-basket.webp",
      },
      {
        name: "Crispy Wings (6 pc)",
        price: "$12.99",
        description:
          "Crispy chicken wings with our crowd favorite G-sauce (6 pieces).",
        image: "/menu/wings.jpeg",
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "Seasoned Fries",
        price: "$4.49",
        description:
          "Our house-seasoned fries — crispy, golden, and addictive.",
        image: "/menu/seasoned-fries.jpeg",
      },
      {
        name: "French Fries",
        price: "$4.49",
        description:
          "Classic golden french fries. Simple, crispy, and always a hit.",
        image: "/menu/french-fries.webp",
      },
      {
        name: "Mac & Cheese",
        price: "$4.49",
        description:
          "Rich, creamy mac and cheese. The ultimate comfort side.",
        image: "/menu/mac-cheese.avif",
      },
      {
        name: "Coleslaw",
        price: "$4.49",
        description: "Creamy, fresh coleslaw — the perfect cool sidekick.",
        image: "/menu/coleslaw.jpg",
      },
    ],
  },
  {
    name: "Kids Menu",
    items: [
      {
        name: "Mini G's (1 Pc) + Toast + Juice",
        price: "$12.99",
        description:
          "1 pc tender with a side of plain fries, Texas toast & organic kids juice.",
        image: "/menu/mini-gs.webp",
        tag: "Kids",
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Housemade Lemonade",
        price: "$4.99",
        description:
          "Fresh-squeezed lemonade made in-house daily. Sweet, tangy, refreshing.",
        image: "/menu/lemonade.webp",
      },
      {
        name: "Strawberry Lemonade",
        price: "$4.99",
        description:
          "Our classic lemonade with a sweet strawberry twist. Made fresh daily.",
        image: "/menu/strawberry-lemonade.webp",
      },
      {
        name: "Pineapple Refresher",
        price: "$4.99",
        description:
          "Made from freshly squeezed pineapple. Tropical and refreshing.",
        image: "/menu/pineapple-refresher.webp",
      },
      {
        name: "Masala Chai",
        price: "$3.99",
        description:
          "Warm, spiced masala chai. The perfect pick-me-up.",
        image: "/menu/masala-chai.webp",
      },
      {
        name: "Salaam Cola",
        price: "$2.99",
        description:
          "Refreshing cola. A classic pairing for fried chicken.",
        image: "/menu/salaam-cola.webp",
      },
      {
        name: "Jarritos Multi-Flavor",
        price: "$3.49",
        description:
          "Classic Mexican soda available in multiple flavors — Mandarin, Lime, Pineapple, Mango & Fruit Punch.",
        image: "/menu/jarritos.avif",
      },
      {
        name: "Kids Organic Juice",
        price: "$2.49",
        description:
          "Organic juice for the little ones. Healthy and delicious.",
        image: "/menu/kids-juice.webp",
      },
      {
        name: "Water",
        price: "$2.00",
        description:
          "Bottled water. Stay hydrated.",
        image: "/menu/water.webp",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-text-primary mb-3 sm:mb-4 tracking-wide">
            OUR <span className="text-red">MENU</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Hand-crafted. Bold flavors. Made fresh to order.
          </p>
        </motion.div>

        <div
          className="flex overflow-x-auto gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`shrink-0 px-5 sm:px-5 py-3 sm:py-2.5 rounded-full text-sm sm:text-sm font-bold uppercase tracking-wider transition-all active:scale-95 ${
                activeCategory === i
                  ? "bg-red text-white shadow-[0_2px_12px_rgba(214,40,40,0.3)]"
                  : "bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-red/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {menuData[activeCategory].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-red/40 transition-all hover:-translate-y-1"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-lg sm:text-2xl text-text-primary tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-heading text-lg sm:text-2xl text-yellow shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-1">
                    {item.description}
                  </p>
                  <p className="text-text-muted text-[10px] sm:text-xs italic mb-3 sm:mb-4">
                    Prices may vary by location
                  </p>
                  <a
                    href={PHONE_URL}
                    className="flex sm:inline-flex items-center justify-center gap-2 bg-red/10 hover:bg-red text-red hover:text-white px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all active:scale-95"
                  >
                    Order Now
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
