import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Hammer, Repeat, Grid3x3, Box, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: 'MIG Welding',
      description:
        'Metal Inert Gas welding for clean and strong welds. Perfect for automotive, construction, and general fabrication work with excellent finish quality.'
    },
    {
      icon: Hammer,
      title: 'ARC Welding',
      description:
        'Heavy-duty structural welding using Shielded Metal Arc Welding. Ideal for thick materials, outdoor projects, and industrial applications requiring maximum strength.'
    },
    {
      icon: Repeat,
      title: 'Pipe Bending',
      description:
        'Precise pipe bending using advanced machinery. We handle various pipe sizes and materials for plumbing, HVAC, and industrial piping systems with accurate angles.'
    },
    {
      icon: Grid3x3,
      title: 'Gate & Grill Work',
      description:
        'Custom design and fabrication of security gates, window grills, and decorative metalwork. Combining functionality with aesthetic appeal for residential and commercial properties.'
    },
    {
      icon: Box,
      title: 'Metal Fabrication',
      description:
        'Complete metal fabrication services including cutting, bending, and assembly. From structural steel to custom metal components for any industrial or commercial application.'
    },
    {
      icon: Wrench,
      title: 'Custom Welding Projects',
      description:
        'Specialized welding for unique requirements. We work with you to bring custom designs to life, from artistic metalwork to specialized industrial equipment and repairs.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional welding and fabrication services for all your metal work needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent-orange/50"
              >
                <CardHeader>
                  <div className="mb-4 inline-block p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent-orange" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
