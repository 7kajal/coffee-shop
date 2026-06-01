'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Hot Coffee', 'Cold Brews', 'Sweet Blends'];

const coffees = [
  {
    id: 1,
    name: 'Classic Espresso',
    category: 'Hot Coffee',
    description: 'Rich, bold, and concentrated single origin espresso shot.',
    price: '$4.50',
    rating: 4.9,
    reviews: 120,
    image: '/images/Hot-Coffee.png',
    tag: 'Bold & Rich',
  },
  {
    id: 2,
    name: 'Creamy Cappuccino',
    category: 'Hot Coffee',
    description: 'Perfect balance of rich espresso, steamed milk, and velvety foam.',
    price: '$5.50',
    rating: 4.8,
    reviews: 245,
    image: '/images/8624835-how-to-make-a-cappuccino-beauty-4x3-0301-13d55eaad60b42058f24369c292d4ccb.jpg',
    tag: 'Velvety Foam',
  },
  {
    id: 3,
    name: 'Caramel Macchiato',
    category: 'Sweet Blends',
    description: 'Fresh espresso combined with vanilla syrup, milk, and caramel drizzle.',
    price: '$6.50',
    rating: 4.9,
    reviews: 310,
    image: '/images/Partners-Cappuccino-FT-BLOG0523-d2eed8fcd48d464282176339908662f7.jpg',
    tag: 'Sweet & Creamy',
  },
  {
    id: 4,
    name: 'Signature Iced Coffee',
    category: 'Cold Brews',
    description: 'Slow-steeped cold brew served over ice with a splash of cream.',
    price: '$5.00',
    rating: 4.7,
    reviews: 185,
    image: '/images/coffee2.webp',
    tag: 'Smooth & Sweet',
  },
  {
    id: 5,
    name: 'Coffee Smoothie Blend',
    category: 'Cold Brews',
    description: 'Blended espresso with fresh milk, vanilla ice cream, and whipped cream.',
    price: '$6.00',
    rating: 4.8,
    reviews: 156,
    image: '/images/coffee-smoothie.jpg',
    tag: 'Blended Ice',
  },
  {
    id: 6,
    name: 'Aura Special Latte',
    category: 'Sweet Blends',
    description: 'House special blend infused with warm hints of hazelnut and gold dust.',
    price: '$7.00',
    rating: 5.0,
    reviews: 420,
    image: '/images/best-coffee-shop-in-gurgaon.jpg',
    tag: 'Premium House',
  },
];

export default function SignatureCoffees() {
  const [activeTab, setActiveTab] = useState('All');
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const filteredCoffees = activeTab === 'All' 
    ? coffees 
    : coffees.filter(coffee => coffee.category === activeTab);

  const toggleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  return (
    <section id="coffee" className="py-24 bg-gradient-to-b from-[#0d0806] via-[#120a07] to-[#160e0b] relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-coffee-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-accent-gold font-bold">
              Expertly Handcrafted
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-cream-100">
              Our Signature Coffees
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full mb-6" />
            <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
              Indulge in our carefully selected house blends, crafted by our expert baristas to deliver perfection in every cup. From rich espresso to cold brews.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3 mt-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? 'text-coffee-950 font-bold'
                    : 'text-cream-300 hover:text-accent-gold border border-coffee-800/40 bg-coffee-950/20'
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-accent-amber to-accent-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Coffee Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCoffees.map((coffee) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={coffee.id}
                className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#1c120f] to-[#120a07] border border-coffee-800/40 overflow-hidden shadow-xl hover:border-accent-amber/20 hover:shadow-2xl hover:shadow-coffee-950/40 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-coffee-950/80">
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Tag */}
                  <span className="absolute top-4 left-4 bg-coffee-950/80 border border-accent-gold/30 backdrop-blur-md text-[10px] tracking-widest uppercase font-bold text-accent-gold px-3 py-1 rounded-full">
                    {coffee.tag}
                  </span>

                  {/* Heart / Like Button */}
                  <button
                    onClick={() => toggleLike(coffee.id)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-coffee-950/80 border border-coffee-800/40 backdrop-blur-md flex items-center justify-center text-cream-200 hover:text-red-500 hover:border-red-500/30 transition-colors"
                  >
                    <Heart className={`w-4.5 h-4.5 ${likedItems.includes(coffee.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  {/* Shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= Math.floor(coffee.rating)
                                ? 'fill-accent-gold text-accent-gold'
                                : 'text-coffee-700'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-cream-200 mt-0.5">{coffee.rating}</span>
                      <span className="text-xs text-cream-400 mt-0.5">({coffee.reviews})</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-accent-gold transition-colors duration-300 mb-2">
                      {coffee.name}
                    </h3>

                    {/* Description */}
                    <p className="text-cream-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {coffee.description}
                    </p>
                  </div>

                  {/* Pricing and Cart */}
                  <div className="flex items-center justify-between border-t border-coffee-800/30 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-cream-400 font-medium">Price</span>
                      <span className="text-lg font-bold text-accent-gold">{coffee.price}</span>
                    </div>

                    <button className="flex items-center gap-2 bg-coffee-850 border border-coffee-700 text-cream-100 font-bold px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-accent-amber hover:to-accent-gold hover:text-coffee-950 hover:border-accent-gold transition-all duration-300 group/btn">
                      <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-xs tracking-widest uppercase">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
