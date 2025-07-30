import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, Hammer, Wrench } from "lucide-react";

interface ServicesSectionProps {
  onCTAClick: () => void;
}

const ServicesSection = ({ onCTAClick }: ServicesSectionProps) => {
  const services = [
    {
      icon: Building,
      title: "Armado de Cero",
      description: "Diseñamos y construimos tinglados metálicos desde la base, adaptados a las necesidades de tu industria o emprendimiento.",
      ctaText: "Solicitar cotización",
      gradient: "from-brand-blue/10 to-brand-blue/20"
    },
    {
      icon: Hammer,
      title: "Ampliaciones",
      description: "Expandí tu estructura actual con soluciones rápidas, seguras y sin frenar tu producción.",
      ctaText: "Quiero ampliar mi tinglado",
      gradient: "from-brand-gray/10 to-brand-gray/20"
    },
    {
      icon: Wrench,
      title: "Reparaciones",
      description: "Resolvemos filtraciones, refuerzos estructurales y renovaciones en tinglados existentes, sin interrumpir tus operaciones.",
      ctaText: "Solicitar reparación",
      gradient: "from-brand-blue/10 to-brand-gray/20"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-1/4 square opacity-10"></div>
      <div className="absolute bottom-20 right-1/4 square-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-brand-gray-dark mb-8">
            Productos / Servicios
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 bg-gradient-to-br ${service.gradient} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-brand-blue/20`}>
              <div className="text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <service.icon size={36} className="text-brand-gray" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-gray-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-gray mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Button 
                  onClick={onCTAClick}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  {service.ctaText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;