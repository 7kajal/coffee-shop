"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Coffee", href: "#coffee" },
  { name: "Gift", href: "#gift" },
  { name: "Story", href: "#story" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = 0;

  // Monitor scroll for navbar transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-coffee-800/40 bg-coffee-950/90 py-3 shadow-xl backdrop-blur-md sm:py-4"
            : "border-b border-transparent bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-xs tracking-[0.2em] text-cream-300 hover:text-accent-gold transition-colors duration-300 py-1 group uppercase font-normal"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Actions: Search, Cart, Login, Register */}
            <div className="hidden md:flex items-center gap-5">
              {/* Search */}
              <button
                aria-label="Search"
                className="text-cream-300 hover:text-accent-gold transition-colors duration-300 p-2 hover:bg-coffee-900/50 rounded-full"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Cart */}
              <button
                aria-label="Cart"
                className="relative text-cream-300 hover:text-accent-gold transition-colors duration-300 p-2 hover:bg-coffee-900/50 rounded-full"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-accent-amber text-coffee-950 text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 ml-2">
                <button className="text-xs uppercase tracking-widest text-cream-200 hover:text-accent-gold transition-colors duration-300 py-1 px-2 font-normal">
                  Login
                </button>
                <button className="text-xs uppercase tracking-[0.15em] bg-transparent hover:bg-accent-gold/10 text-accent-gold font-normal px-5 py-2 rounded-full border border-accent-gold/40 hover:border-accent-gold transition-all duration-300 active:scale-95">
                  Register
                </button>
              </div>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <button
                aria-label="Cart"
                className="relative rounded-full p-2 text-cream-300 transition-colors duration-300 hover:bg-coffee-900/50 hover:text-accent-gold"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-accent-amber text-coffee-950 text-[8px] font-bold rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                className="rounded-md p-2 text-cream-200 hover:bg-coffee-900/50 hover:text-accent-gold"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-coffee-900/95 backdrop-blur-lg border-b border-coffee-800/40"
            >
              <div className="space-y-3 px-4 pt-2 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm tracking-widest uppercase text-cream-200 transition-colors hover:bg-coffee-800/40 hover:text-accent-gold"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 border-t border-coffee-800/50 pt-4">
                  <button className="w-full rounded-full border border-coffee-700/60 px-4 py-2.5 text-center text-xs uppercase tracking-widest text-cream-200">
                    Login
                  </button>
                  <button className="w-full rounded-full border border-accent-gold/45 bg-transparent py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-accent-gold">
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
