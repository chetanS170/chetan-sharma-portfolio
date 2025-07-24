import { Button } from '@/components/ui/button';
import { Gift, Video, Star, Clock } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "3 Months Canva Pro",
      value: "$45 Value",
      description: "Complete access to Canva Pro with all premium features and templates for thumbnail creation",
      features: ["Premium templates", "Brand kit access", "Background remover", "Unlimited storage"]
    },
    {
      icon: Video,
      title: "Thumbnail Mastery Course",
      value: "$199 Value", 
      description: "Comprehensive thumbnail design course covering psychology, trends, and optimization techniques",
      features: ["12+ hours content", "Design psychology", "Platform optimization", "Analytics tracking"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-2 rounded-full text-white font-medium mb-6">
            <Gift className="h-5 w-5" />
            Limited Time Bonus
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exclusive <span className="gradient-text">Bonuses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get these premium bonuses when you order your thumbnail pack this month
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div 
                key={bonus.title}
                className="glass-card p-8 hover-lift group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Worth</div>
                      <div className="text-2xl font-bold gradient-text">{bonus.value}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{bonus.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {bonus.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Offer expires in 7 days</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Total Bonus Value: <span className="gradient-text">$244</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              These bonuses are included free when you order your thumbnail pack this month
            </p>
            <Button variant="premium" size="lg">
              Claim Your Bonuses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;