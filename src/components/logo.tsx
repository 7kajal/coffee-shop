import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#home"
      className={`flex items-center gap-2 sm:gap-3 ${className ?? ""}`}
    >
      <Image
        src="/images/coffee-icon.png"
        width={34}
        height={34}
        alt="Cafe Aura logo"
        className="h-8 w-8 sm:h-[34px] sm:w-[34px]"
      />
      <span className="font-serif text-base font-bold tracking-[0.14em] text-accent-gold transition-colors duration-300 sm:text-lg sm:tracking-[0.18em]">
        Café Aura
      </span>
    </Link>
  );
}
