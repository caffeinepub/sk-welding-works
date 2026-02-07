import { Check } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    'Skilled Workers',
    'Modern Machines',
    'Strong & Clean Finishing',
    'On-Time Delivery',
    'Reasonable Pricing',
    'All Welding Work Under One Roof'
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Us</h2>
            <div className="w-24 h-1 bg-accent-orange mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for all welding and fabrication needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border hover:border-accent-orange/50 transition-all hover:shadow-lg group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-accent-orange/20 flex items-center justify-center group-hover:bg-accent-orange/30 transition-colors">
                    <Check className="h-5 w-5 text-accent-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{reason}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
