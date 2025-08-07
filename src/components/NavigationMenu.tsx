import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-brand-blue/10 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('benefits')}
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10' 
                : 'text-white hover:text-white hover:bg-white/20'
            }`}
          >
            Beneficios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('services')}
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10' 
                : 'text-white hover:text-white hover:bg-white/20'
            }`}
          >
            Productos y Servicios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('customers')}
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10' 
                : 'text-white hover:text-white hover:bg-white/20'
            }`}
          >
            Clientes
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;