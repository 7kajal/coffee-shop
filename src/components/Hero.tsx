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

const customerAvatars = [
  {
    name: "Ava Carter",
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Noah Bennett",
    image: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Mia Brooks",
    image: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Ethan Reed",
    image: "https://i.pravatar.cc/80?img=15",
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
      className="relative flex min-h-screen scroll-mt-24 flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0d0806] via-[#160e0b] to-[#0d0806] pb-14 pt-28 sm:scroll-mt-28 sm:pb-16 sm:pt-28"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-coffee-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-x-0 top-[13.5rem] z-10 mx-auto h-[22rem] w-full max-w-[22rem] lg:hidden">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.12),transparent_64%)] blur-2xl" />
        <Image
          src="/images/wmremove-transformed-removebg-preview.png"
          alt="Café Aura Flying Splash Cup"
          fill
          sizes="100vw"
          priority
          className="object-contain object-center opacity-40 drop-shadow-[0_24px_50px_rgba(13,8,6,0.62)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center relative z-20">
        <div className="grid grid-cols-1 items-center gap-10 py-6 sm:gap-12 sm:py-8 lg:grid-cols-12 lg:gap-8">
          {/* Hero Content Left */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center sm:space-y-8 lg:col-span-7 lg:text-left"
          >
            {/* Headline */}
            <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-wide text-cream-100 sm:text-6xl lg:text-7xl">
              Awaken Your
              <span className="block bg-gradient-to-r from-accent-amber via-accent-gold to-cream-100 bg-clip-text text-transparent drop-shadow-sm">
                Senses With
              </span>
              <span className="block">Every Sip</span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto max-w-xl text-base leading-relaxed font-light text-cream-300 sm:text-lg lg:mx-0">
              Experience the rich aroma and exquisite taste of hand-crafted
              coffees sourced from the world&apos;s finest beans. Roasted to
              perfection, brewed with love.
            </p>

            {/* Actions */}
            <div className="flex justify-center pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 lg:justify-start">
              <Link
                href="#coffee"
                className="group relative flex w-full max-w-[13rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-amber to-accent-gold px-3 py-3 font-bold text-coffee-950 shadow-lg transition-all duration-300 active:scale-95 hover:shadow-accent-gold/20 sm:w-auto sm:max-w-none sm:flex-none sm:gap-3 sm:px-8 sm:py-4"
              >
                <span className="relative z-10 flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase sm:gap-2 sm:text-sm sm:tracking-widest">
                  Explore Menu
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5 sm:h-4 sm:w-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-amber opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              <Link
                href="#story"
                className="hidden min-w-0 flex-1 rounded-full border border-coffee-800 bg-coffee-950/20 px-3 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-cream-100 backdrop-blur-sm transition-colors duration-300 hover:border-accent-amber/50 hover:text-accent-gold sm:block sm:w-auto sm:flex-none sm:px-8 sm:py-4 sm:text-sm sm:tracking-widest"
              >
                Our Story
              </Link>
            </div>

            {/* Social Proof */}
            <div className="relative flex flex-col items-center gap-4 border-t border-coffee-800/40 pt-40 sm:pt-56 lg:pt-4 sm:flex-row sm:items-center lg:items-start">
              <div className="flex -space-x-3">
                {customerAvatars.map((customer) => (
                  <div
                    key={customer.name}
                    className="relative w-10 h-10 rounded-full border-2 border-coffee-950 bg-coffee-900 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-center sm:text-left">
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
            className="relative hidden items-center justify-center lg:col-span-5 lg:flex lg:h-[500px]"
          >
            {/* Background spinning circle */}
            <div className="absolute h-[240px] w-[240px] rounded-full border border-accent-gold/10 animate-spin-slow pointer-events-none sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]" />
            <div className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-accent-amber/15 animate-spin-slow pointer-events-none sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]" />

            {/* Splash cup of coffee */}
            <div className="relative h-full w-full max-w-[450px] transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/wmremove-transformed-removebg-preview.png"
                alt="Café Aura Flying Splash Cup"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
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
          className="relative z-30 mt-10 hidden border-t border-coffee-800/30 pt-10 md:grid md:grid-cols-3 md:gap-6 md:pt-12"
        >
          {featuredCoffees.map((coffee) => (
            <motion.div
              key={coffee.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-coffee-800/40 bg-gradient-to-r from-coffee-900/60 to-coffee-800/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-accent-amber/30 sm:flex-row sm:items-center sm:justify-between"
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

              <div className="flex items-center justify-between gap-3 sm:justify-end">
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
