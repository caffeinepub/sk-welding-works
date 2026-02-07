import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-welding-modern-bg.dim_1920x1080.png)' }}
      />
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <img
              src="/assets/generated/logo-sk-welding-works.dim_512x512.png"
              alt="SK Welding Works Logo"
              className="h-24 w-24 mx-auto mb-6 animate-fade-in rounded-full object-cover ring-4 ring-accent-orange/40 shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Welding & Metal Fabrication Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            From MIG & ARC Welding to Custom Metal Work – We Handle All Welding Jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Free Quote
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-accent/10"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Projects Done', value: '500+' },
              { label: 'Happy Clients', value: '300+' },
              { label: 'Services', value: '10+' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-accent/5 border border-border backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
