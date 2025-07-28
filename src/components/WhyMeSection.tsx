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
        <div className="text-center mb-16 scroll-reveal">
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
                className="glass-card p-8 text-center hover-lift group scroll-reveal relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-primary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="h-9 w-9 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-300" />
                    
                    {/* Rotating border effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                  
                  {/* Bottom accent line */}
                  <div className="w-0 h-1 bg-gradient-primary mx-auto mt-6 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;