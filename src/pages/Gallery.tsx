import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Maximize2, X, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import logoImage from '@/assets/logo.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  useScrollReveal();

  const thumbnails = [
    // Featured slideshow thumbnails
    {
      id: 1,
      image: "/lovable-uploads/f67a2ea1-3098-496a-800e-c2fe7cc5062d.png",
      category: "Music"
    },
    {
      id: 2,
      image: "/lovable-uploads/01058e33-6a13-4cef-a456-973de11f733d.png",
      category: "Entertainment"
    },
    {
      id: 3,
      image: "/lovable-uploads/97d85109-7c99-4096-b299-9cbae2004ea7.png",
      category: "Education"
    },
    {
      id: 4,
      image: "/lovable-uploads/355df305-c794-4d86-b4ce-f5a8b3dd0954.png",
      category: "Music"
    },
    // Additional portfolio thumbnails
    {
      id: 5,
      image: "/lovable-uploads/86330dd7-9fb6-444d-ae6e-22730a35c50a.png",
      category: "Comedy"
    },
    {
      id: 6,
      image: "/lovable-uploads/8b7cac6f-22f0-41ec-8f66-5a251cca3415.png",
      category: "Tech"
    },
    {
      id: 7,
      image: "/lovable-uploads/b4d503f4-0ebc-4c8e-a5d9-597bb81df823.png",
      category: "Music"
    },
    {
      id: 8,
      image: "/lovable-uploads/681285fb-bbd7-40cf-9a23-8b607dd2c350.png",
      category: "News"
    },
    {
      id: 9,
      image: "/lovable-uploads/7fe6fbf5-08cf-4874-a482-35e09e9d5090.png",
      category: "Entertainment"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:chetansharma44170@gmail.com?subject=Thumbnail Design Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919870859103?text=Hi%20Chetan,%20I%27m%20interested%20in%20your%20thumbnail%20design%20services', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header py-4">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-foreground hover:text-primary text-sm sm:text-base"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src={logoImage} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
            <div className="text-lg sm:text-xl font-bold gradient-text">
              Chetan Sharma
            </div>
          </div>
          <div className="flex gap-1 sm:gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailClick}
              className="hidden md:flex"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              className="hidden md:flex"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            {/* Mobile contact buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailClick}
              className="md:hidden p-2"
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              className="md:hidden p-2"
            >
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Title Section */}
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-sparkle">
              Thumbnail <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              A showcase of high-converting thumbnail designs across various niches
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={thumbnail.id}
                className="glass-card p-3 sm:p-4 hover-lift group scroll-reveal"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(thumbnail.image)}
                  style={{ aspectRatio: '16/9' }}
                >
                  <img
                    src={thumbnail.image}
                    alt={`${thumbnail.category} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Maximize2 className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm animate-circle-outline">
                      {thumbnail.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto scroll-reveal">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Ready to Create Your Own Stunning Thumbnails?
              </h3>
              <p className="text-muted-foreground mb-6 px-4">
                Let's work together to create thumbnails that will boost your click-through rates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email: chetansharma44170@gmail.com
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="border-primary/30 hover:border-primary/50"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp: +91 9870859103
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

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
  );
};

export default Gallery;