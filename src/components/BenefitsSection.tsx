import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
interface BenefitsSectionProps {
  onCTAClick: () => void;
}
const BenefitsSection = ({
  onCTAClick
}: BenefitsSectionProps) => {
  const benefits = [{
    icon: Zap,
    title: "Inicio inmediato",
    description: "Ejecutamos obras sin demoras, gracias a capital propio."
  }, {
    icon: Settings,
    title: "Obras llave en mano",
    description: "No te preocupés por la gestión, nosotros nos encargamos de todo."
  }, {
    icon: CheckCircle,
    title: "Sin interrupciones",
    description: "Trabajamos en contraturno sin frenar tu producción."
  }];
  return <section className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Background squares */}
      <div className="absolute top-20 left-20 square opacity-10"></div>
      <div className="absolute bottom-10 right-10 square-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-inter font-light text-white mb-8 text-gray-50 md:text-5xl">
            Beneficios destacados
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => <Card key={index} className="p-8 bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon size={36} className="text-brand-gray" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-dark mb-4">
                  ✅ {benefit.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>)}
        </div>
        
        <div className="text-center">
          <Button onClick={onCTAClick} size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Solicitar asesoramiento
          </Button>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;