import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue/80 relative overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute top-10 left-10 hexagon opacity-20"></div>
      <div className="absolute bottom-10 right-10 hexagon-small opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hexagon opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Listo para optimizar tus espacios y aumentar tu productividad?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Cotizá hoy mismo tu tinglado.
          </p>
          
          <Button 
            onClick={onCTAClick}
            size="lg"
            variant="secondary"
            className="bg-white text-brand-blue hover:bg-white/90 px-12 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold"
          >
            Solicitar cotización gratuita
          </Button>
          
          {/* Additional trust elements */}
          <div className="mt-12 flex justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Sin anticipos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Inicio en 24 hs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Cotización gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;