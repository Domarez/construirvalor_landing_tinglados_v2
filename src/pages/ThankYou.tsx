import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 flex items-center justify-center px-6">
      <Card className="max-w-2xl w-full p-12 text-center shadow-2xl">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-inter font-light text-brand-gray-dark mb-4">
            ¡Gracias por contactarnos!
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed mb-8">
            Tu solicitud ha sido enviada exitosamente. Nuestro equipo revisará tu proyecto 
            y se pondrá en contacto contigo dentro de las próximas 24 horas para brindarte 
            una propuesta personalizada.
          </p>
        </div>

        <div className="bg-brand-blue/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-medium text-brand-gray-dark mb-3">
            ¿Qué sigue ahora?
          </h2>
          <ul className="text-left text-brand-gray space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-brand-blue font-bold">1.</span>
              Analizaremos los detalles de tu proyecto
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-blue font-bold">2.</span>
              Prepararemos una propuesta técnica y económica
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-blue font-bold">3.</span>
              Te contactaremos para coordinar una reunión
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Volver al inicio
            </Button>
          </Link>
        
        </div>

  
      </Card>
    </div>
  );
};

export default ThankYou;
