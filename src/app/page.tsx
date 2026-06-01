import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureCoffees from "@/components/SignatureCoffees";
import OurStory from "@/components/OurStory";
import FarmToCup from "@/components/FarmToCup";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SignatureCoffees />
        <OurStory />
        <FarmToCup />
        <Testimonials />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
