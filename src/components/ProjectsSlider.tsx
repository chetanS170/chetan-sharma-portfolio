import { useState, useEffect } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { ExternalLink, ArrowRight, X, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const ProjectsSlider = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Slideshow projects (4 images)
  const slideshowProjects = [
    {
      id: 1,
      title: "Kohram - Music Album",
      image: "/lovable-uploads/f67a2ea1-3098-496a-800e-c2fe7cc5062d.png",
    },
    {
      id: 2,
      title: "Fazilpuria Firing",
      image: "/lovable-uploads/01058e33-6a13-4cef-a456-973de11f733d.png",
    },
    {
      id: 3,
      title: "Teachers vs Students",
      image: "/lovable-uploads/97d85109-7c99-4096-b299-9cbae2004ea7.png",
    },
    {
      id: 4,
      title: "Sumit x Karan x Aujla",
      image: "/lovable-uploads/355df305-c794-4d86-b4ce-f5a8b3dd0954.png",
    },
  ];

  // All projects grid (remaining images)
  const allProjects = [
    {
      id: 5,
      title: "Types of Monitors",
      image: "/lovable-uploads/86330dd7-9fb6-444d-ae6e-22730a35c50a.png",
    },
    {
      id: 6,
      title: "YouTube Channel Closure",
      image: "/lovable-uploads/8b7cac6f-22f0-41ec-8f66-5a251cca3415.png",
    },
    {
      id: 7,
      title: "Gaane Delete",
      image: "/lovable-uploads/b4d503f4-0ebc-4c8e-a5d9-597bb81df823.png",
    },
    {
      id: 8,
      title: "Controversy Explained",
      image: "/lovable-uploads/681285fb-bbd7-40cf-9a23-8b607dd2c350.png",
    },
    {
      id: 9,
      title: "Bigg Boss Collab",
      image: "/lovable-uploads/7fe6fbf5-08cf-4874-a482-35e09e9d5090.png",
    },
  ];

  // Create duplicated slideshow projects for infinite scroll
  const duplicatedSlideshowProjects = [...slideshowProjects, ...slideshowProjects];


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
            {/* Enhanced fade edges - improved responsive coverage */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-56 xl:w-64 bg-gradient-to-r from-background via-background/95 via-background/80 via-background/50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-56 xl:w-64 bg-gradient-to-l from-background via-background/95 via-background/80 via-background/50 to-transparent z-20 pointer-events-none" />
            
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 animate-scroll-smooth"
                style={{
                  width: `${duplicatedSlideshowProjects.length * 320}px`,
                }}
              >
                {duplicatedSlideshowProjects.map((project, index) => (
                  <div key={`${project.id}-${index}`} className="flex-shrink-0 w-64 sm:w-72 md:w-80">
                    <div 
                      className="relative overflow-hidden rounded-xl cursor-pointer group hover-lift"
                      onClick={() => setSelectedImage(project.image)}
                      style={{ aspectRatio: '16/9' }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
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
          {allProjects.map((project, index) => (
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
                  alt={project.title}
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
          <GradientButton 
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
          </GradientButton>
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