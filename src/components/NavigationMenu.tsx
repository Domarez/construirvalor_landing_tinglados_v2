import { Button } from "@/components/ui/button";

const NavigationMenu = () => {
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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-blue/10 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('benefits')}
            className="text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Beneficios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('services')}
            className="text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Productos y Servicios
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('customers')}
            className="text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10"
          >
            Clientes
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;