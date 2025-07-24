import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSlider = () => {
  const projects = [
    {
      id: 1,
      title: "Gaming Channel Pack",
      category: "YouTube Thumbnails",
      description: "High-energy gaming thumbnails that increased CTR by 45%",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      tags: ["Gaming", "YouTube", "Photoshop"],
    },
    {
      id: 2,
      title: "Tech Review Series",
      category: "Tech Thumbnails",
      description: "Clean and professional thumbnails for tech content",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tags: ["Tech", "Reviews", "Minimalist"],
    },
    {
      id: 3,
      title: "Lifestyle Vlog Pack",
      category: "Lifestyle Content",
      description: "Vibrant and engaging thumbnails for lifestyle vlogs",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Lifestyle", "Vlogs", "Colorful"],
    },
    {
      id: 4,
      title: "Educational Series",
      category: "Educational Content",
      description: "Clear and informative thumbnails for learning content",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tags: ["Education", "Tutorials", "Clean"],
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest thumbnail designs across gaming, tech, lifestyle, and educational content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card p-6 hover-lift group"
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
                  <Button variant="glass" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
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