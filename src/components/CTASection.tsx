import { Button } from '@/components/ui/button';
import { MessageCircle, Palette, Rocket } from 'lucide-react';

const CTASection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Share Your Vision",
      description: "Tell me about your content style and target audience in a quick chat"
    },
    {
      icon: Palette,
      number: "02", 
      title: "Design Magic",
      description: "I'll create stunning thumbnails that perfectly match your brand and style"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Boost Your CTR",
      description: "Watch your click-through rates soar with eye-catching thumbnails"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial brief to delivering your stunning thumbnails, the process is smooth and collaborative
          </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative text-center group"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Boost Your Click-Through Rate?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful content creators who've increased their views with 
                eye-catching thumbnail designs. Let's create thumbnails that get clicked.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="premium" size="lg" className="group">
                  Order Thumbnails
                </Button>
                <Button variant="glass" size="lg">
                  View Portfolio
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Quick turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;