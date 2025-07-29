import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clientType: "",
    serviceType: "",
    sector: "",
    location: "",
    size: "",
    role: "",
    name: "",
    phone: "",
    email: "",
    contactPreference: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "¡Formulario enviado!",
      description: "Nos contactaremos contigo en las próximas horas.",
    });
    
    // Reset form
    setFormData({
      clientType: "",
      serviceType: "",
      sector: "",
      location: "",
      size: "",
      role: "",
      name: "",
      phone: "",
      email: "",
      contactPreference: ""
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 hexagon opacity-10"></div>
      <div className="absolute bottom-10 left-10 hexagon-small opacity-15"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-8">
              Solicitar cotización
            </h2>
            <p className="text-xl text-brand-gray">
              Completa el formulario y nos contactaremos contigo en las próximas horas.
            </p>
          </div>
          
          <Card className="p-8 bg-card shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Client Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿Para quién estás solicitando este servicio? *
                </Label>
                <RadioGroup 
                  value={formData.clientType} 
                  onValueChange={(value) => setFormData({...formData, clientType: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="empresa" id="empresa" />
                    <Label htmlFor="empresa">Mi empresa / institución</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="particular" id="particular" />
                    <Label htmlFor="particular">Soy particular (vivienda)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro" id="otro" />
                    <Label htmlFor="otro">Otro (especificar)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Service Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿Qué tipo de servicio necesitás? *
                </Label>
                <RadioGroup 
                  value={formData.serviceType} 
                  onValueChange={(value) => setFormData({...formData, serviceType: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mantenimiento" id="mantenimiento" />
                    <Label htmlFor="mantenimiento">Mantenimiento edilicio general</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reparacion" id="reparacion" />
                    <Label htmlFor="reparacion">Reparación puntual urgente (ej: filtración, ascensor, plomería)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reforma" id="reforma" />
                    <Label htmlFor="reforma">Reforma de oficinas o áreas internas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tinglado" id="tinglado" />
                    <Label htmlFor="tinglado">Construcción o techado de galpón / tinglado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro-servicio" id="otro-servicio" />
                    <Label htmlFor="otro-servicio">Otro (especificar)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Sector */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿De qué rubro es tu organización?
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, sector: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu rubro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistica">Logística</SelectItem>
                    <SelectItem value="alimentos">Alimentos</SelectItem>
                    <SelectItem value="agro">Agro</SelectItem>
                    <SelectItem value="educacion">Educación</SelectItem>
                    <SelectItem value="salud">Salud</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <Label htmlFor="location" className="text-lg font-semibold text-brand-gray-dark">
                  ¿En qué zona se ubica el edificio donde se realizaría la obra?
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Ej: AMBA, Provincia de Buenos Aires, etc."
                />
              </div>

              {/* Size */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿Aproximadamente cuántos m² o cuántos ambientes están involucrados?
                </Label>
                <RadioGroup 
                  value={formData.size} 
                  onValueChange={(value) => setFormData({...formData, size: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-100" id="menos-100" />
                    <Label htmlFor="menos-100">Menos de 100 m²</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="100-500" id="100-500" />
                    <Label htmlFor="100-500">100–500 m²</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mas-500" id="mas-500" />
                    <Label htmlFor="mas-500">Más de 500 m²</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-se" id="no-se" />
                    <Label htmlFor="no-se">No lo sé</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Role */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿Cuál es tu rol en la empresa?
                </Label>
                <RadioGroup 
                  value={formData.role} 
                  onValueChange={(value) => setFormData({...formData, role: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dueno" id="dueno" />
                    <Label htmlFor="dueno">Dueño / Socio</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="director" id="director" />
                    <Label htmlFor="director">Director / Gerente de operaciones</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mantenimiento" id="mantenimiento-role" />
                    <Label htmlFor="mantenimiento-role">Responsable de mantenimiento / infraestructura</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">Administración / Compras</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro-role" id="otro-role" />
                    <Label htmlFor="otro-role">Otro</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-brand-gray-dark">
                    Nombre y Apellido *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-semibold text-brand-gray-dark">
                    Teléfono / WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold text-brand-gray-dark">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Contact Preference */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-brand-gray-dark">
                  ¿Querés que te llamemos o preferís que te contactemos por mail primero?
                </Label>
                <RadioGroup 
                  value={formData.contactPreference} 
                  onValueChange={(value) => setFormData({...formData, contactPreference: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="llamada" id="llamada" />
                    <Label htmlFor="llamada">Prefiero que me llamen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-pref" />
                    <Label htmlFor="email-pref">Prefiero contacto por email primero</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar solicitud
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;