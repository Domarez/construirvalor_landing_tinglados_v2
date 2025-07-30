import { Button } from "@/components/ui/button";
import warehouseBackground from "@/assets/warehouse-background.jpg";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-brand-gray-light overflow-hidden">
      {/* Warehouse background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${warehouseBackground})` }}
      ></div>
      
      {/* Square pattern background */}
      <div className="absolute inset-0 square-pattern opacity-30"></div>
      
      {/* Floating squares */}
      <div className="absolute top-20 left-20 square opacity-20 animate-pulse"></div>
      <div className="absolute top-60 right-32 square-small opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 square opacity-15 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center pt-20">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="text-center">
              <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg mb-4">
                <img 
                  src="/lovable-uploads/7b6c504c-84dd-45e1-8d0f-25ae78a5da55.png" 
                  alt="Construir Valor" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-light text-brand-gray-dark mb-8 leading-tight">
            Construcción de 
            <span className="text-brand-blue">Tinglados{" "} a Medida</span> para Empresas
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brand-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Soluciones estructurales que aumentan tu productividad y optimizan tus espacios. 
            Comenzamos en 24 hs, sin anticipos.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={onCTAClick}
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quiero cotizar mi tinglado
          </Button>
          
          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-brand-gray">
            <div className="flex items-center gap-2">
              <div className="square-small"></div>
              <span className="text-sm font-medium">+100 empresas confiaron en nosotros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="square-small"></div>
              <span className="text-sm font-medium">Inicio en 24 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;