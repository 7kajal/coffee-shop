'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Compass, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Premium Quality',
    description: 'We source only certified organic Arabica and Robusta beans grown in volcanic mountain soils.',
    image: '/images/สายพันธุ์กาแฟ-มีอะไรบ้าง.jpg',
  },
  {
    id: 2,
    icon: Flame,
    title: 'Expert Roasting',
    description: 'Roasting profiles calibrated for each bean type to unlock maximum sweetness and rich body.',
    image: '/images/roasted-coffee-beans-pack-size-kg20231026071240.jpg',
  },
  {
    id: 3,
    icon: Compass,
    title: 'Freshly Brewed',
    description: 'Ground and extracted fresh to order by certified baristas using top-tier La Marzocco machines.',
    image: '/images/best-coffee-shop-in-gurgaon.jpg',
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: 'Fair Trade Sourcing',
    description: 'Direct relationships with farms to ensure organic methods and premium livelihood compensation.',
    image: '/images/Exploring-the-Different-Types-of-Coffee-Beans-A-Complete-Guide.jpg',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0d0806] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[10%] w-96 h-96 bg-coffee-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

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
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-cream-100">
              Why Choose Café Aura?
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full mb-6" />
            <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
              We are committed to delivering the ultimate coffee experience by optimizing every step of the process.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#1c120f] to-[#120a07] border border-coffee-800/40 overflow-hidden shadow-xl hover:border-accent-amber/20 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Card Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-coffee-950/80">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                
                {/* Icon Circle overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-coffee-950/90 border border-accent-gold/40 backdrop-blur-md flex items-center justify-center text-accent-gold group-hover:text-coffee-950 group-hover:bg-gradient-to-r group-hover:from-accent-amber group-hover:to-accent-gold group-hover:border-accent-gold transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-accent-gold transition-colors duration-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream-300 text-xs sm:text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* Bottom highlights line */}
              <div className="h-1 w-0 bg-gradient-to-r from-accent-amber to-accent-gold transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
