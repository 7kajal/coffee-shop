'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Food Blogger & Journalist',
    text: 'The atmosphere at Café Aura is incredible, but the coffee is what keeps me coming back. The Aura Special Latte is out of this world! Smooth, sweet, and perfectly balanced. A true 10/10.',
    rating: 5,
    avatar: '/images/71hc7cKNDZL._AC_UF350,350_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'App Developer & Remote Worker',
    text: 'As someone who works remotely, finding a cafe with fast Wi-Fi and excellent cold brews is a jackpot. Café Aura has both. The cold brew is steeped to perfection, with zero bitterness. Highly recommend.',
    rating: 5,
    avatar: '/images/51YsQcbjSfL.jpg',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Coffee Connoisseur & Roaster',
    text: 'Their single origin espresso is spectacular. You can taste the volcanic soil and floral notes from the beans. The staff is exceptionally knowledgeable about extraction ratios. Outstanding coffee quality!',
    rating: 5,
    avatar: '/images/71hc7cKNDZL._AC_UF350,350_QL80_.jpg',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#160e0b] via-[#120a07] to-[#0d0806] py-16 sm:scroll-mt-28 sm:py-20 lg:py-24">
      {/* Background lights and shapes */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-coffee-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-accent-gold font-bold">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-cream-100">
              Join Thousands of Happy Coffee Lovers!
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full mb-6" />
            <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
              Read reviews from our lovely customers who make Café Aura their daily sanctuary.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-0 sm:px-12">
          
          {/* Main Card */}
          <div className="relative flex min-h-[360px] w-full items-center justify-center sm:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative flex w-full flex-col justify-between rounded-3xl border border-coffee-800/40 bg-gradient-to-b from-[#1c120f] to-[#120a07] p-6 shadow-2xl sm:p-12"
              >
                {/* Quote Icon */}
                <Quote className="pointer-events-none absolute right-6 top-6 h-12 w-12 text-coffee-800/10 sm:right-8 sm:h-16 sm:w-16" />

                {/* Testimonial Text */}
                <p className="font-light text-cream-200 text-base sm:text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 text-center sm:text-left">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                {/* Profile Details */}
                <div className="flex flex-col gap-4 border-t border-coffee-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold/40">
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-cream-100 text-base">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-xs text-cream-400">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex w-full max-w-xs items-center justify-between gap-3 sm:w-auto sm:max-w-none sm:gap-4">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-800 bg-coffee-900 text-cream-200 transition-all active:scale-95 hover:border-accent-amber/50 hover:bg-coffee-800 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Pagination Bullets */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-6 bg-accent-gold' : 'w-2.5 bg-coffee-800 hover:bg-coffee-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-800 bg-coffee-900 text-cream-200 transition-all active:scale-95 hover:border-accent-amber/50 hover:bg-coffee-800 sm:h-12 sm:w-12"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
