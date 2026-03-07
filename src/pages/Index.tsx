import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ConditionsSection from "@/components/ConditionsSection";
import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/AboutSection";
import PraxisSection from "@/components/PraxisSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ConditionsSection />
      <QuoteSection />
      <AboutSection />
      <PraxisSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
