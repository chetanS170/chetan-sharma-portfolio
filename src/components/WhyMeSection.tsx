import { Zap, Smartphone, DollarSign, Clock, Star, Users } from 'lucide-react';

const WhyMeSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Click-Focused",
      description: "Every thumbnail is designed to maximize click-through rates and audience engagement",
    },
    {
      icon: Smartphone,
      title: "Platform Optimized",
      description: "Perfect visibility across YouTube, Instagram, TikTok, and all social platforms",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Premium quality thumbnail designs at competitive rates that fit your budget",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Quick turnaround times to keep your content schedule on track",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Eye-catching designs that stand out in crowded feeds and search results",
    },
    {
      icon: Users,
      title: "Effortless Process",
      description: "Smooth collaboration with unlimited revisions until you're 100% satisfied",
    },
  ];

  return (
    <section id="why-me" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Me?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I combine creative design with strategic thinking to create thumbnails that not only look amazing but drive real engagement and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="glass-card p-8 text-center hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;