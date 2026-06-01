import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/#home" className="flex items-center gap-3 -mt-4">
      <img src={"/images/coffee-icon.png"} width={30} height={30} alt="cafe" />
      <span className="font-serif text-lg sm:text-lg font-bold tracking-[0.18em] mt-3 text-accent-gold transition-colors duration-300">
        Café Aura
      </span>
    </Link>
  );
}
