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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#160e0b] via-[#120a07] to-[#0d0806] relative overflow-hidden">
      {/* Background lights and shapes */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-coffee-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12 flex flex-col items-center">
          
          {/* Main Card */}
          <div className="w-full relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full rounded-3xl bg-gradient-to-b from-[#1c120f] to-[#120a07] border border-coffee-800/40 p-8 sm:p-12 relative flex flex-col justify-between shadow-2xl"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-coffee-800/10 pointer-events-none" />

                {/* Testimonial Text */}
                <p className="font-light text-cream-200 text-base sm:text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 text-center sm:text-left">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Profile Details */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-coffee-850 pt-6 gap-4">
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
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-coffee-900 border border-coffee-800 hover:border-accent-amber/50 hover:bg-coffee-850 text-cream-200 flex items-center justify-center transition-all active:scale-95 shadow-md shadow-coffee-950/20"
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
                    activeIndex === i ? 'w-6 bg-accent-gold' : 'w-2.5 bg-coffee-800 hover:bg-coffee-750'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-coffee-900 border border-coffee-800 hover:border-accent-amber/50 hover:bg-coffee-850 text-cream-200 flex items-center justify-center transition-all active:scale-95 shadow-md shadow-coffee-950/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
