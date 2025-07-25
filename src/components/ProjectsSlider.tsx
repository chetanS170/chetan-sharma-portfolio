import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';

const ProjectsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Gaming Channel Pack",
      category: "YouTube Thumbnails",
      description: "High-energy gaming thumbnails that increased CTR by 45%",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
      rating: 4,
      tags: ["Gaming", "YouTube", "Photoshop"],
    },
    {
      id: 2,
      title: "Tech Review Series",
      category: "Tech Thumbnails",
      description: "Clean and professional thumbnails for tech content",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop",
      rating: 4,
      tags: ["Tech", "Reviews", "Minimalist"],
    },
    {
      id: 3,
      title: "Lifestyle Vlog Pack",
      category: "Lifestyle Content",
      description: "Vibrant and engaging thumbnails for lifestyle vlogs",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
      rating: 4,
      tags: ["Lifestyle", "Vlogs", "Colorful"],
    },
    {
      id: 4,
      title: "Educational Series",
      category: "Educational Content",
      description: "Clear and informative thumbnails for learning content",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",
      rating: 4,
      tags: ["Education", "Tutorials", "Clean"],
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        {/* Featured Projects Slideshow */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sparkle">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my latest high-converting thumbnail designs
            </p>
          </div>

          {/* Slideshow Container */}
          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="glass-card hover-lift group relative overflow-hidden bg-gradient-glass backdrop-blur-xl border border-glass-border">
                      <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-2">
                              <Button variant="glass" size="sm" className="backdrop-blur-md">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="flex flex-col justify-center space-y-6">
                          <div>
                            <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                            <h3 className="text-3xl font-bold mb-4 text-sparkle">{project.title}</h3>
                            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-3 mb-6">
                            <span className="text-sm font-medium">Client Rating:</span>
                            {renderStars(project.rating)}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary shadow-glow' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 text-sparkle">All Projects</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through my complete portfolio of thumbnail designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={`grid-${project.id}`} 
              className="glass-card p-6 hover-lift group backdrop-blur-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glass" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {renderStars(project.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;