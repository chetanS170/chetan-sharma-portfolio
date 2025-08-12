import { useState } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowLeft, Maximize2, X, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  useScrollReveal();

  const thumbnails = [
    // New featured thumbnails at the top
    {
      id: 1,
      image: "/lovable-uploads/04c84261-f48d-4c79-a088-a12ca0109316.png",
      category: "Comedy"
    },
    {
      id: 2,
      image: "/lovable-uploads/c944a8bc-9cb2-469a-9db3-3bf0f1d7ae09.png",
      category: "Comedy"
    },
    {
      id: 3,
      image: "/lovable-uploads/ab46723d-0e51-4091-ab43-87c13e6b77a4.png",
      category: "News"
    },
    {
      id: 4,
      image: "/lovable-uploads/b9893999-6bc0-4228-a277-545d3b0155a7.png",
      category: "Comedy"
    },
    {
      id: 5,
      image: "/lovable-uploads/9d7928e7-1896-4956-a94d-c76a7c9b30d5.png",
      category: "Tech"
    },
    {
      id: 6,
      image: "/lovable-uploads/8a083741-40b8-4d83-8e87-4613d9d59eda.png",
      category: "Finance"
    },
    {
      id: 7,
      image: "/lovable-uploads/ad5f59da-961c-4a3e-bf03-85941c87cf7e.png",
      category: "Tech"
    },
    {
      id: 8,
      image: "/lovable-uploads/3dc16463-9a74-490c-b7c4-9f3c8d33d6b0.png",
      category: "Entertainment"
    },
    // Previous featured thumbnails
    {
      id: 9,
      image: "/lovable-uploads/f67a2ea1-3098-496a-800e-c2fe7cc5062d.png",
      category: "Music"
    },
    {
      id: 10,
      image: "/lovable-uploads/01058e33-6a13-4cef-a456-973de11f733d.png",
      category: "Entertainment"
    },
    {
      id: 11,
      image: "/lovable-uploads/97d85109-7c99-4096-b299-9cbae2004ea7.png",
      category: "Education"
    },
    {
      id: 12,
      image: "/lovable-uploads/355df305-c794-4d86-b4ce-f5a8b3dd0954.png",
      category: "Music"
    },
    // Additional portfolio thumbnails
    {
      id: 13,
      image: "/lovable-uploads/86330dd7-9fb6-444d-ae6e-22730a35c50a.png",
      category: "Comedy"
    },
    {
      id: 14,
      image: "/lovable-uploads/8b7cac6f-22f0-41ec-8f66-5a251cca3415.png",
      category: "Tech"
    },
    {
      id: 15,
      image: "/lovable-uploads/b4d503f4-0ebc-4c8e-a5d9-597bb81df823.png",
      category: "Music"
    },
    {
      id: 16,
      image: "/lovable-uploads/681285fb-bbd7-40cf-9a23-8b607dd2c350.png",
      category: "News"
    },
    {
      id: 17,
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
          <GradientButton
            onClick={() => navigate('/')}
            className="text-foreground hover:text-primary text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </GradientButton>
          <div className="text-lg sm:text-xl font-bold gradient-text">
            Chetan Sharma
          </div>
          <div className="flex gap-1 sm:gap-2">
            <GradientButton
              onClick={handleEmailClick}
              className="hidden md:flex text-xs md:text-sm px-3 md:px-4 py-2"
            >
              <Mail className="mr-1 md:mr-2 h-3 md:h-4 w-3 md:w-4" />
              Email
            </GradientButton>
            <GradientButton
              variant="variant"
              onClick={handleWhatsAppClick}
              className="hidden md:flex text-xs md:text-sm px-3 md:px-4 py-2"
            >
              <Phone className="mr-1 md:mr-2 h-3 md:h-4 w-3 md:w-4" />
              WhatsApp
            </GradientButton>
            {/* Mobile contact buttons */}
            <GradientButton
              onClick={handleEmailClick}
              className="md:hidden p-1.5 sm:p-2"
            >
              <Mail className="h-3 sm:h-4 w-3 sm:w-4" />
            </GradientButton>
            <GradientButton
              variant="variant"
              onClick={handleWhatsAppClick}
              className="md:hidden p-1.5 sm:p-2"
            >
              <Phone className="h-3 sm:h-4 w-3 sm:w-4" />
            </GradientButton>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-12">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={thumbnail.id}
                className="glass-card p-1.5 sm:p-2 hover-lift group scroll-reveal"
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
                <GradientButton
                  onClick={handleEmailClick}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Mail className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                  <span className="hidden sm:inline">Email: chetansharma44170@gmail.com</span>
                  <span className="sm:hidden">Email Me</span>
                </GradientButton>
                <GradientButton
                  variant="variant"
                  onClick={handleWhatsAppClick}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Phone className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                  <span className="hidden sm:inline">WhatsApp: +91 9870859103</span>
                  <span className="sm:hidden">WhatsApp</span>
                </GradientButton>
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