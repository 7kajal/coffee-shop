"use client";

import { motion } from "framer-motion";

const coffees = [
  {
    image: "/images/coffee2.webp",

    className: "row-span-2",
  },
  {
    image:
      "/images/8624835-how-to-make-a-cappuccino-beauty-4x3-0301-13d55eaad60b42058f24369c292d4ccb.jpg",
    className: "row-span-1",
  },
  {
    image: "/images/Hot-Coffee.png",
    className: "row-span-1",
  },
  {
    image: "/images/coffee-smoothie.jpg",

    className: "row-span-2",
  },
  {
    image:
      "/images/Partners-Cappuccino-FT-BLOG0523-d2eed8fcd48d464282176339908662f7.jpg",
    className: "row-span-1",
  },
  {
    image: "/images/best-coffee-shop-in-gurgaon.jpg",
    className: "row-span-1",
  },
];

export default function CoffeeGallery() {
  return (
    <section
      id="gallery"
      className="bg-coffee-950 py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-bold">
              The Journey of Passion
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
              Explore the Journey of Coffee
            </h2>

            <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6" />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Every cup tells a story of care, precision, and dedication — from
              high-altitude farms to the perfect pour.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {coffees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl group ${item.className} border border-white/5 shadow-2xl transition-all duration-500 hover:border-accent-amber/30`}
            >
              <img
                src={item.image}
                alt={`Coffee ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-accent-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <button className="text-gray-400 hover:text-amber-400 text-sm transition-colors border-b border-gray-700 hover:border-amber-400">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
