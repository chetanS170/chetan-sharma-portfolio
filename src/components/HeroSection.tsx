import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-workspace.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Designer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 neon-glow floating">
                <img 
                  src={profilePhoto} 
                  alt="Creative Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I design thumbnails that{' '}
            <span className="gradient-text">turn your views</span>{' '}
            into clicks
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Eye-catching thumbnail designs that boost your click-through rates and grow your audience. 
            Ready to transform your content performance?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="premium" size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              See My Work
            </Button>
          </div>

          {/* Client Logos */}
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by innovative companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {['Paltiminati', 'Haryanvi old Skool', 'Harsh Haryanvi', 'Vague Cinema'].map((brand, index) => (
                <div 
                  key={brand} 
                  className="text-lg font-semibold hover:opacity-100 transition-opacity duration-300 hover:text-primary cursor-pointer floating"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;