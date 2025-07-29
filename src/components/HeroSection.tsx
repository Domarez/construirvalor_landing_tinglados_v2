import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-brand-gray-light overflow-hidden">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      
      {/* Floating hexagons */}
      <div className="absolute top-20 left-20 hexagon opacity-20 animate-pulse"></div>
      <div className="absolute top-60 right-32 hexagon-small opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 hexagon opacity-15 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center pt-20">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">Construir Valor</h3>
            <div className="w-16 h-1 bg-brand-blue mx-auto"></div>
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
              <div className="hexagon-small"></div>
              <span className="text-sm font-medium">+100 empresas confiaron en nosotros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="hexagon-small"></div>
              <span className="text-sm font-medium">Inicio en 24 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;