import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { PromoBanner } from "@/components/sections/promo-banner";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <PromoBanner />
        {/* <Features /> */}
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
