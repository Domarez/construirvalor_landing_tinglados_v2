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
                <div className="text-2xl font-bold">
                  <span className="text-gray-800">CONSTRUIR</span>
                  <br />
                  <span className="text-gray-800">VALOR</span>
                  <div className="flex items-center justify-center mt-1">
                    <div className="w-8 h-1 bg-orange-500 mr-1"></div>
                    <div className="w-0 h-0 border-l-8 border-l-gray-600 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    <div className="text-orange-500 font-bold text-lg ml-1">V</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-brand-gray-dark mb-8 leading-tight">
            Construcción de Tinglados{" "}
            <span className="text-brand-blue">a Medida</span> para Empresas
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