import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-workspace.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, hsl(0, 0%, 15%) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(0, 0%, 10%) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, hsl(0, 84%, 60%, 0.1) 0%, transparent 40%)
            `,
            animation: 'mesh-flow 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(45deg, transparent 40%, hsl(0, 0%, 8%) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, hsl(0, 0%, 12%) 50%, transparent 60%)
            `,
            animation: 'mesh-flow 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">


          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-sparkle px-4">
            I design thumbnails that{' '}
            <span className="gradient-text">turn your views</span>{' '}
            into clicks
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance px-4">
            Eye-catching thumbnail designs that boost your click-through rates and grow your audience. 
            Ready to transform your content performance?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <GradientButton className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              Get in Touch
              <ArrowRight className="ml-2 h-4 sm:h-6 w-4 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
            <GradientButton 
              variant="variant"
              className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-4 sm:h-6 w-4 sm:w-6" />
              See My Work
            </GradientButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;