import { Wrench, Shield, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">About Us</h2>
            <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
          </div>
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border border-border">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              We are experienced welding professionals providing high-quality welding and fabrication services. We
              handle small repairs to large industrial projects. Our focus is strong finishing, accurate work,
              affordable pricing, and customer satisfaction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <Wrench className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Expert Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">Precision and quality in every weld</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <Shield className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">Following industry standards</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <Award className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Trusted Service</h3>
                <p className="text-sm text-muted-foreground">Building lasting relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
