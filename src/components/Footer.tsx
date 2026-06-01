"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";

const socialIcons = [
  {
    name: "Facebook",
    href: "#",
    svg: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    svg: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.008 3.74.051 1.08.049 1.666.23 2.057.382a4.854 4.854 0 011.666 1.083 4.853 4.853 0 011.083 1.666c.152.391.333.977.382 2.057.043.956.051 1.31.051 3.74 0 2.43-.008 2.784-.051 3.74-.049 1.08-.23 1.666-.382 2.057a4.853 4.853 0 01-1.083 1.666 4.854 4.854 0 01-1.666 1.083c-.391.152-.977.333-2.057.382-.956.043-1.31.051-3.74.051-2.43 0-2.784-.008-3.74-.051-1.08-.049-1.666-.23-2.057-.382a4.854 4.854 0 01-1.666-1.083 4.853 4.853 0 01-1.083-1.666c-.152-.391-.333-.977-.382-2.057C2.008 14.784 2 14.43 2 12c0-2.43.008-2.784.051-3.74.049-1.08.23-1.666.382-2.057a4.854 4.854 0 011.083-1.666 4.854 4.854 0 011.666-1.083c.391-.152.977-.333 2.057-.382C9.216 2.008 9.57 2 12 2zm-.008 4.757a5.243 5.243 0 100 10.486 5.243 5.243 0 000-10.486zM12 14.757a2.757 2.757 0 110-5.514 2.757 2.757 0 010 5.514zm5.887-8.102a.861.861 0 100-1.722.861.861 0 000 1.722z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    svg: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const footerLinks = {
  about: ["Menu", "Features", "News & Blogs", "Help & Supports"],
  company: ["How we work", "Terms of service", "Pricing", "FAQ"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#0b0705] sm:scroll-mt-28"
    >
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden border-t border-coffee-800/40 bg-gradient-to-r from-[#4c311d] via-[#583821] to-[#4c311d]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_34%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9a643a]/50 to-transparent" />

        <div className="relative mx-auto grid min-h-[250px] max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-[220px_1fr_220px] lg:min-h-[290px] lg:px-10">
          <div className="pointer-events-none relative hidden h-full md:block">
            <div className="absolute bottom-[-18px] left-0 h-[170px] w-[130px] lg:h-[220px] lg:w-[160px]">
              <Image
                src="/images/Footer%20Img.svg"
                alt="Vintage coffee grinder illustration"
                fill
                unoptimized
                sizes="160px"
                className="object-contain object-bottom-left opacity-95 drop-shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
              Ready to Experience the
              <br />
              Best Coffee?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-cream-200/90 sm:text-base">
              Take the first step towards discovering your new favorite brew.
            </p>
            <Link
              href="#coffee"
              className="mt-6 inline-flex items-center rounded-lg bg-gradient-to-b from-[#d3a167] to-[#8d5729] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(54,28,15,0.35)] transition-all duration-300 hover:brightness-110"
            >
              Shop Now
            </Link>
          </div>

          <div className="pointer-events-none relative hidden h-full md:block">
            <div className="absolute bottom-[-26px] right-0 h-[180px] w-[180px] lg:h-[240px] lg:w-[240px]">
              <Image
                src="/images/Cup1.png"
                alt="Signature chocolate coffee cup"
                fill
                sizes="240px"
                className="object-contain object-bottom-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.32)]"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden border-t border-coffee-800/30">
        <div
          className="absolute inset-0 opacity-[0.14] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Coffee-Beans-in-Bulk.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0806]/92 to-[#080503]/96" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left xl:grid-cols-[1.45fr_0.8fr_0.8fr_1fr]">
            <div className="space-y-5 sm:col-span-2 xl:col-span-1">
              <Logo className="justify-center sm:justify-start" />

              <p className="mx-auto max-w-sm text-sm leading-7 text-cream-300 sm:mx-0">
                Café Aura offers premium, expertly crafted coffee that delivers
                rich flavors and an unforgettable experience in every cup.
              </p>

              <div className="space-y-3">
                <p className="text-sm font-medium text-cream-200">
                  Join Our Coffee Community
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  {socialIcons.map((icon) => (
                    <a
                      key={icon.name}
                      href={icon.href}
                      aria-label={icon.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-coffee-700/70 bg-coffee-950/40 text-cream-200 transition-colors duration-300 hover:border-accent-gold/40 hover:text-accent-gold"
                    >
                      {icon.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-cream-100 underline underline-offset-4">
                About
              </h4>
              <div className="flex flex-col gap-2.5 text-sm text-cream-300">
                {footerLinks.about.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors duration-300 hover:text-accent-gold"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-cream-100 underline underline-offset-4">
                Company
              </h4>
              <div className="flex flex-col gap-2.5 text-sm text-cream-300">
                {footerLinks.company.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors duration-300 hover:text-accent-gold"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-cream-100 underline underline-offset-4">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm text-cream-300">
                <div className="flex items-start justify-center gap-3 sm:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  <span>
                    1234 Coffee Lane, Suite 100 Seattle, United States
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <Mail className="h-4 w-4 shrink-0 text-accent-gold" />
                  <span>cafeaura@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <Phone className="h-4 w-4 shrink-0 text-accent-gold" />
                  <span>+91 xxxxxxxxx</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-coffee-800/30 pt-5 text-center text-xs text-cream-400">
            © {new Date().getFullYear()} Café Aura. All Rights Reserved.
          </div>
        </div>
      </section>
    </footer>
  );
}
