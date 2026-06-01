"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const storyBarItems = ["Cappuccino", "Expresso", "Moca", "Latte", "Americano"];

export default function OurStory() {
  const marqueeItems = storyBarItems.concat(storyBarItems, storyBarItems);

  return (
    <section
      id="story"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#180d0a] via-[#140b08] to-[#120906] pt-12 sm:scroll-mt-28 sm:pt-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_35%,rgba(93,46,31,0.2),transparent_26%),radial-gradient(circle_at_82%_70%,rgba(123,74,53,0.12),transparent_30%)] pointer-events-none" />

      <div className="relative overflow-hidden">
        <div className="absolute left-4 top-10 h-12 w-32 rounded-full bg-gradient-to-r from-[#6d2c1c] via-[#bb7a55] to-transparent opacity-75 blur-sm sm:left-10 sm:top-14 sm:h-16 sm:w-44 lg:left-0 lg:top-16 lg:h-20 lg:w-64" />
        <div className="absolute left-8 top-14 h-px w-20 bg-gradient-to-r from-[#d48a5a] to-transparent sm:left-16 sm:top-18 sm:w-28 lg:left-12 lg:top-24 lg:w-48" />
        <div className="absolute right-0 top-8 h-px w-36 rotate-[36deg] bg-gradient-to-r from-transparent via-[#9e542f] to-transparent opacity-70 sm:w-48 lg:right-8 lg:top-12 lg:w-72" />

        <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-5 pb-8 sm:px-8 md:gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(640px,1.18fr)] lg:px-12 xl:px-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-[34rem] overflow-hidden rounded-[2rem] py-8 text-center sm:py-10 lg:mx-0 lg:overflow-visible lg:rounded-none lg:py-12 lg:pl-4 lg:text-left"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 rounded-[2rem] bg-gradient-to-b from-transparent via-[#2a1710]/24 to-[#120906]/95 lg:hidden" />
            <div className="pointer-events-none absolute inset-x-0 top-[12.5rem] h-[19rem] opacity-28 lg:hidden">
              <Image
                src="/images/about.png"
                alt="Illustrated coffee story visual"
                fill
                sizes="100vw"
                className="object-contain object-center drop-shadow-[0_18px_40px_rgba(0,0,0,0.24)] scale-[1.08]"
              />
            </div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              Our Story
            </h2>

            <p className="relative mt-4 text-sm font-semibold text-cream-100 sm:text-base">
              From Passion to Perfection: The Journey of Cafe Aura
            </p>

            <p className="relative mx-auto mt-5 max-w-[27rem] text-sm leading-8 text-cream-200 sm:text-base lg:mx-0 lg:max-w-[27rem] lg:text-cream-300">
              At Cafe Aura, coffee isn&apos;t just a drink, it&apos;s a passion,
              a ritual, and an experience. Our journey began in 1954, when a
              group of coffee lovers came together with a simple mission: to
              create exceptional coffee that people could truly enjoy, share,
              and savor every day.
              <span className="mt-2 inline-block text-cream-100 sm:mt-0 sm:ml-1">
                Read more...
              </span>
            </p>

            <div className="relative mt-[18.5rem] sm:mt-60 lg:mt-20">
              <p className="mx-auto max-w-[18rem] text-2xl font-medium leading-relaxed text-white sm:max-w-[21rem] sm:text-[2.05rem] lg:mx-0">
                Want to experience the quality and care behind every cup?
              </p>

              <Link
                href="#coffee"
                className="mt-6 inline-flex items-center rounded-lg bg-gradient-to-b from-[#c89155] to-[#8d5729] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_25px_rgba(141,87,41,0.35)] transition-all duration-300 hover:brightness-110"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative hidden min-h-[300px] items-end justify-end overflow-visible sm:min-h-[460px] lg:flex lg:min-h-[720px]"
          >
            <div className="absolute inset-x-[8%] bottom-6 h-16 rounded-full bg-[#5d301f]/30 blur-[56px] sm:h-20 lg:inset-x-[16%]" />
            <div className="relative h-[320px] w-full overflow-visible sm:h-[520px] lg:h-[820px] lg:translate-x-10">
              <Image
                src="/images/about.png"
                alt="Illustrated coffee story visual"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="origin-bottom-right scale-[1.02] object-contain object-bottom-right drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:scale-[1.04] lg:scale-[1.1]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 overflow-hidden border-t border-coffee-900/70 bg-[#060403]">
        <div className="absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#060403] to-transparent sm:w-16" />
        <div className="absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#060403] to-transparent sm:w-16" />

        <div className="flex w-max animate-marquee items-center py-4 sm:py-5">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-5 flex shrink-0 items-center gap-8 text-lg font-medium tracking-tight text-cream-100 sm:mx-6 sm:text-[1.4rem]"
            >
              <div className="relative h-5 w-12 shrink-0 opacity-85 sm:h-7 sm:w-10">
                <Image
                  src="/images/beanIcon-removebg-preview.png"
                  alt=""
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
