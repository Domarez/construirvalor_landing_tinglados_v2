import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={scrollToForm} />
      <ProblemSolutionSection onCTAClick={scrollToForm} />
      <BenefitsSection onCTAClick={scrollToForm} />
      <ServicesSection onCTAClick={scrollToForm} />
      <TestimonialsSection />
      <WhyChooseUsSection onCTAClick={scrollToForm} />
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToForm} />
      <ContactForm />
    </div>
  );
};

export default Index;
