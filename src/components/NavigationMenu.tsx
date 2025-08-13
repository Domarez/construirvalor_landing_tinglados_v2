import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-brand-blue/10 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('benefits')}
            className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Beneficios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('services')}
            className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Productos y Servicios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('customers')}
            className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Clientes
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('benefits')}
              className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10 text-left justify-start"
            >
              Beneficios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('services')}
              className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10 text-left justify-start"
            >
              Productos y Servicios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('customers')}
              className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10 text-left justify-start"
            >
              Clientes
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;