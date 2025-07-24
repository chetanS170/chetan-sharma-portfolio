import { Button } from '@/components/ui/button';
import { Check, ExternalLink, ShoppingCart } from 'lucide-react';

const HighlightedProject = () => {
  const features = [
    "Eye-catching design that stands out",
    "Optimized for maximum click-through rates",
    "Custom typography and color schemes",
    "Multiple format variations included", 
    "Source files provided (PSD/AI)",
    "Complete style guide included"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Featured Project - E-commerce Platform"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center neon-glow floating">
                <span className="text-white font-bold text-lg">NEW</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium mb-2">FEATURED PACK</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Gaming Thumbnail Pack
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A complete gaming thumbnail collection with 20+ high-converting designs. 
                  Perfect for gaming content creators ready to boost their CTR and grow their 
                  channel with professional-grade thumbnails.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" size="lg" className="group">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Pack
                </Button>
                <Button variant="glass" size="lg" className="group">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Samples
                </Button>
              </div>

              {/* Pricing */}
              <div className="glass-card p-6 border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pack price</p>
                    <p className="text-2xl font-bold">
                      <span className="gradient-text">$49</span>
                      <span className="text-sm text-muted-foreground ml-2">one-time</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Save 40%</p>
                    <p className="text-sm line-through text-muted-foreground">$99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;