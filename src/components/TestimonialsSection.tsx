import { Card } from "@/components/ui/card";
import shed1 from "@/assets/shed-1.jpg";
import shed2 from "@/assets/shed-2.jpg";
import shed3 from "@/assets/shed-3.jpg";
const TestimonialsSection = () => {
  const testimonials = [{
    text: "Necesitábamos construir un tinglado de 300m2 en el Parque Industrial de Ezeiza lo antes posible y en 60 días lo resolvieron.",
    author: "Cliente Industrial",
    project: "300m² - Parque Industrial Ezeiza",
    logo: "🏭",
    image: shed1
  }, {
    text: "Nuestro gimnasio del campo de deportes de San Justo nos quedó chico y necesitábamos una ampliación. Contactamos a Construir Valor y en tan solo 15 días nos agregaron 150m2 de cubierta.",
    author: "Colegio Nuestra Señora de la Misericordia",
    project: "Ampliación 150m² - San Justo",
    logo: "🏫",
    image: shed2
  }, {
    text: "Necesitábamos un gimnasio nuevo y rápido, nos construyeron un tinglado de 670 m2 en 2 meses.",
    author: "Club Atlético San Isidro (CASI)",
    project: "670m² - Nuevo Gimnasio",
    logo: "/lovable-uploads/82689102-e97b-4e02-b623-561bd30a4f11.png",
    image: shed3
  }];
  return <section className="py-20 bg-brand-gray-light relative overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute top-10 right-20 hexagon opacity-10"></div>
      <div className="absolute bottom-10 left-20 hexagon-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-brand-gray-dark mb-8">
            Nuestros clientes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-8 bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
              {/* Shed image */}
              <div className="mb-6">
                <img src={testimonial.image} alt="Shed project" className="w-full h-48 object-cover rounded-lg" />
              </div>
              
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-brand-blue/20 font-serif">"</div>
              
              <div className="relative z-10">
                <p className="text-brand-gray mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-brand-blue/20 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    {testimonial.logo.startsWith('/') ? (
                      <img src={testimonial.logo} alt={testimonial.author} className="w-8 h-8 object-contain" />
                    ) : (
                      <span className="text-2xl">{testimonial.logo}</span>
                    )}
                    <p className="font-bold text-brand-gray-dark">
                      {testimonial.author}
                    </p>
                  </div>
                  <p className="text-sm text-brand-blue font-medium">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
        
        {/* Trust indicator */}
        <div className="text-center bg-gradient-to-r from-brand-blue/10 to-brand-blue/20 p-8 rounded-2xl shadow-lg bg-slate-600">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="hexagon-small"></div>
            
            <div className="hexagon-small"></div>
          </div>
          <p className="text-brand-gray-dark text-slate-50 font-normal text-2xl">
            Ya ayudamos a +100 empresas a construir estructuras que potencian su operación.
          </p>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;