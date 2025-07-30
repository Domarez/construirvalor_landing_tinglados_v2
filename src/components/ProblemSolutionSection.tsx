
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import shed1 from "@/assets/shed-1.jpg";

interface ProblemSolutionSectionProps {
  onCTAClick: () => void;
}

const ProblemSolutionSection = ({ onCTAClick }: ProblemSolutionSectionProps) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 hexagon opacity-10"></div>
      <div className="absolute bottom-20 left-10 hexagon-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-regular font-inter text-brand-gray-dark mb-8">
            ¿Espacio limitado o estructura deteriorada?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem side */}
          <Card className="p-8 bg-card shadow-lg border-l-4 border-l-destructive">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-gray-dark mb-4">El problema:</h3>
              <div className="space-y-3 text-brand-gray">
                <p>❌ Productividad limitada por falta de espacio</p>
                <p>❌ Estructuras deterioradas que generan riesgos</p>
                <p>❌ Tiempos logísticos ineficientes</p>
                <p>❌ Pérdida de oportunidades de crecimiento</p>
              </div>
            </div>
          </Card>
          
          {/* Solution side */}
          <Card className="p-8 bg-card shadow-lg border-l-4 border-l-brand-blue">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-gray-dark mb-4">La solución:</h3>
              <div className="space-y-3 text-brand-gray">
                <p>✅ Amplía tu área operativa efectivamente</p>
                <p>✅ Protege tu producción con estructuras seguras</p>
                <p>✅ Reduce tiempos logísticos optimizando espacios</p>
                <p>✅ Impulsa el crecimiento de tu negocio</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text and CTA on the left */}
            <div className="space-y-6">
              <p className="text-lg text-brand-gray leading-relaxed">
                Muchas industrias y empresas pierden productividad por no contar con la estructura adecuada. 
                Un tinglado bien diseñado puede ampliar tu área operativa, proteger tu producción y reducir tiempos logísticos.
              </p>
              
              <p className="text-lg text-brand-gray leading-relaxed">
                En Construir Valor diseñamos y ejecutamos tinglados a medida, optimizados para cada tipo de operación 
                industrial o comercial. Cumplimos con todos los requisitos legales y comenzamos rápido, sin complicarte.
              </p>
              
              <Button 
                onClick={onCTAClick}
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar ahora
              </Button>
            </div>
            
            {/* Image on the right */}
            <div>
              <img 
                src={shed1} 
                alt="Tinglado industrial construido" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
