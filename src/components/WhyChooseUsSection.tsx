import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WhyChooseUsSectionProps {
  onCTAClick: () => void;
}

const WhyChooseUsSection = ({ onCTAClick }: WhyChooseUsSectionProps) => {
  const reasons = [
    {
      icon: "⏱️",
      title: "Comenzamos en 24 hs",
      description: "sin anticipos, con capital propio."
    },
    {
      icon: "📋",
      title: "Cumplimiento legal asegurado",
      description: "seguros, facturación y habilitaciones al día."
    },
    {
      icon: "🌙",
      title: "Ejecutamos en contraturno",
      description: "sin afectar tu ritmo interno."
    },
    {
      icon: "🎯",
      title: "Soluciones personalizadas",
      description: "según tu rubro (agro, logística, comercio, manufactura, etc.)"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 hexagon opacity-10"></div>
      <div className="absolute bottom-10 right-20 hexagon-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-8">
            ¿Por qué elegirnos?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="text-3xl mb-4">{reason.icon}</div>
              <div className="hexagon-small mx-auto mb-4 opacity-60"></div>
              <h3 className="text-lg font-bold text-brand-gray-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={onCTAClick}
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;