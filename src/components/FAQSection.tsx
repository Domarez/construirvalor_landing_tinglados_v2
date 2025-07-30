import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Trabajan en todo el país?",
      answer: "Sí, ejecutamos proyectos en distintas provincias."
    },
    {
      question: "¿Pueden adaptar el diseño a mi necesidad?",
      answer: "Por supuesto. Nos especializamos en soluciones a medida."
    },
    {
      question: "¿Qué necesito para comenzar?",
      answer: "Solo completar el formulario. Un asesor técnico te contactará para avanzar."
    }
  ];

  return (
    <section className="py-20 bg-brand-gray-light relative overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute top-10 left-10 hexagon opacity-10"></div>
      <div className="absolute bottom-20 right-10 hexagon-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-8">
            Preguntas frecuentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-regular font-inter text-brand-gray-dark hover:text-brand-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;