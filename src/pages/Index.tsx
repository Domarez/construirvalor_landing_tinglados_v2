import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import NavigationMenu from "@/components/NavigationMenu";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const handleCTAClick = () => {
    window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-5333/6LQB6BJUAPBT7HMMXO', '_blank');
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={handleCTAClick} />
      <NavigationMenu />
      <ProblemSolutionSection onCTAClick={handleCTAClick} />
      <div id="benefits">
        <BenefitsSection onCTAClick={handleCTAClick} />
      </div>
      <div id="services">
        <ServicesSection onCTAClick={handleCTAClick} />
      </div>
      <div id="customers">
        <TestimonialsSection />
      </div>
      <WhyChooseUsSection onCTAClick={handleCTAClick} />
      <FAQSection />
      <FinalCTASection onCTAClick={handleCTAClick} />
      <ContactForm />
    </div>
  );
};

export default Index;
