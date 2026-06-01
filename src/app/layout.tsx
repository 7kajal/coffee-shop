import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Café Aura | Awaken Your Senses With Every Sip",
  description: "Indulge in our carefully selected house blends, crafted by our expert baristas to deliver perfection in every cup. Taste the luxury of premium roasted coffee beans.",
  keywords: ["coffee", "cafe", "espresso", "cappuccino", "café aura", "barista", "organic coffee", "specialty coffee"],
  openGraph: {
    title: "Café Aura | Awaken Your Senses With Every Sip",
    description: "Indulge in our carefully selected house blends, crafted by our expert baristas to deliver perfection in every cup.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-coffee-950 text-cream-100 font-sans selection:bg-accent-amber selection:text-coffee-950">
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
