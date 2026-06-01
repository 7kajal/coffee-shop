"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const featuredCoffees = [
  {
    name: "Espresso Macchiato",
    rating: "4.9",
    price: "$12.50",
    image: "/images/Hot-Coffee.png",
  },
  {
    name: "Iced Coffee",
    rating: "4.8",
    price: "$14.00",
    image: "/images/coffee-smoothie.jpg",
  },
  {
    name: "Americano",
    rating: "4.7",
    price: "$11.00",
    image:
      "/images/8624835-how-to-make-a-cappuccino-beauty-4x3-0301-13d55eaad60b42058f24369c292d4ccb.jpg",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Create subtle parallax scroll transformations
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yCup = useTransform(scrollY, [0, 500], [0, -40]);
  const rotateCup = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0d0806] via-[#160e0b] to-[#0d0806]"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-coffee-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* Hero Content Left */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-8 text-left"
          >
            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-wide text-cream-100">
              Awaken Your <br />
              <span className="bg-gradient-to-r from-accent-amber via-accent-gold to-cream-100 bg-clip-text text-transparent filter drop-shadow-sm">
                Senses With
              </span>{" "}
              <br />
              Every Sip
            </h1>

            {/* Subtext */}
            <p className="text-cream-300 max-w-xl text-base sm:text-lg leading-relaxed font-light">
              Experience the rich aroma and exquisite taste of hand-crafted
              coffees sourced from the world's finest beans. Roasted to
              perfection, brewed with love.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link href="#coffee">
                <button className="group relative flex items-center gap-3 bg-gradient-to-r from-accent-amber to-accent-gold text-coffee-950 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-accent-gold/20 transition-all duration-300 transform active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-sm">
                    Explore Menu
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </Link>
              <Link href="#story">
                <button className="text-cream-100 hover:text-accent-gold transition-colors duration-300 border border-coffee-800 hover:border-accent-amber/50 px-8 py-4 rounded-full text-sm uppercase tracking-widest bg-coffee-950/20 backdrop-blur-sm">
                  Our Story
                </button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-coffee-800/40">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-coffee-950 bg-coffee-900 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`/images/71hc7cKNDZL._AC_UF350,350_QL80_.jpg`}
                      alt="Customer Avatar"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-accent-gold text-accent-gold"
                    />
                  ))}
                  <span className="text-sm font-bold text-cream-100 ml-1">
                    5.0
                  </span>
                </div>
                <span className="text-xs text-cream-400">
                  Loved by 10,000+ Coffee Lovers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero Splashing Coffee Cup Right */}
          <motion.div
            style={{ y: yCup, rotate: rotateCup }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] lg:h-[500px]"
          >
            {/* Background spinning circle */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border border-accent-gold/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] border border-dashed border-accent-amber/15 rounded-full animate-spin-slow reverse-spin pointer-events-none" />

            {/* Splash cup of coffee */}
            <div className="relative w-full h-full max-w-[450px] hover:scale-105 transition-transform duration-500 cursor-grab active:cursor-grabbing">
              <Image
                src="/images/wmremove-transformed-removebg-preview.png"
                alt="Café Aura Flying Splash Cup"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                priority
                className="object-contain animate-float drop-shadow-[0_20px_50px_rgba(13,8,6,0.8)] filter brightness-125"
              />
            </div>
          </motion.div>
        </div>

        {/* Quick Selection Cards Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-coffee-800/30 pt-12 relative z-30"
        >
          {featuredCoffees.map((coffee, index) => (
            <motion.div
              key={coffee.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-coffee-900/60 to-coffee-800/40 border border-coffee-800/40 backdrop-blur-md hover:border-accent-amber/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Soft card glow */}
              <div className="absolute inset-0 bg-accent-gold/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-coffee-700/50 bg-coffee-950 flex-shrink-0">
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-cream-100 group-hover:text-accent-gold transition-colors duration-300">
                    {coffee.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-accent-gold text-accent-gold" />
                    <span className="text-xs font-bold text-cream-200">
                      {coffee.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-accent-gold">
                  {coffee.price}
                </span>
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-coffee-800 border border-coffee-700 text-cream-200 group-hover:bg-accent-gold group-hover:text-coffee-950 group-hover:border-accent-gold transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
