import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, X, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const ProjectsSlider = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 2,
      title: "Tech Review Series",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop",
      tags: ["Tech", "Reviews", "Minimalist"],
    },
    {
      id: 3,
      title: "Lifestyle Vlog Pack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
      tags: ["Lifestyle", "Vlogs", "Colorful"],
    },
    {
      id: 4,
      title: "Educational Series",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",
      tags: ["Education", "Tutorials", "Clean"],
    },
    {
      id: 5,
      title: "Fitness Channel",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
      tags: ["Fitness", "Health", "Motivational"],
    },
    {
      id: 6,
      title: "Travel Vlogs",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop",
      tags: ["Travel", "Adventure", "Cinematic"],
    },
    {
      id: 7,
      title: "Food Reviews",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=450&fit=crop",
      tags: ["Food", "Reviews", "Colorful"],
    },
  ];

  // Create duplicated projects for infinite scroll
  const duplicatedProjects = [...projects, ...projects];


  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        {/* Featured Projects Slideshow */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-sparkle">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Showcasing my latest high-converting thumbnail designs
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative w-full mx-auto overflow-hidden">
            {/* Enhanced fade edges - covers entire viewport width */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-r from-background via-background/98 via-background/90 via-background/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-l from-background via-background/98 via-background/90 via-background/60 to-transparent z-20 pointer-events-none" />
            
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 animate-scroll-smooth"
                style={{
                  width: `${duplicatedProjects.length * 320}px`,
                }}
              >
                {duplicatedProjects.map((project, index) => (
                  <div key={`${project.id}-${index}`} className="flex-shrink-0 w-64 sm:w-72 md:w-80">
                    <div 
                      className="relative overflow-hidden rounded-xl cursor-pointer group hover-lift"
                      onClick={() => setSelectedImage(project.image)}
                      style={{ aspectRatio: '16/9' }}
                    >
                      <img 
                        src={project.image} 
                        alt={`Thumbnail ${project.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <Maximize2 className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="text-center mb-16 scroll-reveal">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-sparkle">All Projects</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Browse through my complete portfolio of thumbnail designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={`grid-${project.id}`} 
              className="glass-card p-3 sm:p-4 hover-lift group backdrop-blur-xl scroll-reveal"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div 
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
                style={{ aspectRatio: '16/9' }}
              >
                <img 
                  src={project.image} 
                  alt={`Thumbnail ${project.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button 
            variant="vibrant" 
            size="lg"
            onClick={() => {
              navigate('/gallery');
              // Small delay to ensure navigation happens before scroll
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 50);
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6" />
          </Button>
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-full p-2 bg-background/95 backdrop-blur-xl border border-glass-border">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 z-50 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              {selectedImage && (
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={selectedImage} 
                    alt="Full size thumbnail"
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSlider;