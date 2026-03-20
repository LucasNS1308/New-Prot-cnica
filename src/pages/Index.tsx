import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BrandsCarousel from "@/components/BrandsCarousel";
import FlipCards from "@/components/FlipCards";
import VideosSection from "@/components/VideosSection";
import InteractiveCards from "@/components/InteractiveCards";
import TechSection from "@/components/TechSection";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BrandsCarousel />
      <FlipCards />
      <VideosSection />
      <InteractiveCards />
      <TechSection />
      <Calculator />
      <Footer />
    </div>
  );
};

export default Index;
