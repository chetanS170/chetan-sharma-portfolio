import { GradientButton } from '@/components/ui/gradient-button';
import { MessageCircle, Palette, Rocket, Mail, Phone, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Since Supabase integration is not active yet, we'll show a message
    toast({
      title: "Thank you for your interest!",
      description: "Please email me directly at chetansharma44170@gmail.com or contact via WhatsApp: 9870859103",
    });
    setIsFormOpen(false);
    setFormData({ name: '', email: '', message: '', projectType: '' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:chetansharma44170@gmail.com?subject=Thumbnail Design Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919870859103?text=Hi%20Chetan,%20I%27m%20interested%20in%20your%20thumbnail%20design%20services', '_blank');
  };

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Share Your Vision",
      description: "Tell me about your content style and target audience in a quick chat"
    },
    {
      icon: Palette,
      number: "02", 
      title: "Design Magic",
      description: "I'll create stunning thumbnails that perfectly match your brand and style"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Boost Your CTR",
      description: "Watch your click-through rates soar with eye-catching thumbnails"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From initial brief to delivering your stunning thumbnails, the process is smooth and collaborative
          </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative text-center group scroll-reveal px-4"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="glass-card p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto scroll-reveal">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Boost Your Click-Through Rate?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
                Join hundreds of successful content creators who've increased their views with 
                eye-catching thumbnail designs. Let's create thumbnails that get clicked.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <GradientButton className="group px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold w-full sm:w-auto">
                      Start Your Project Now
                      <Rocket className="ml-2 sm:ml-3 h-4 sm:h-5 md:h-7 w-4 sm:w-5 md:w-7 group-hover:translate-x-1 transition-transform" />
                    </GradientButton>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border border-glass-border">
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center gradient-text">Let's Create Amazing Thumbnails Together!</h3>
                      
                      {/* Contact Cards Only */}
                      <div className="space-y-3 sm:space-y-6">
                        {/* Email Card */}
                        <div 
                          onClick={handleEmailClick}
                          className="glass-card p-3 sm:p-6 md:p-8 cursor-pointer hover-lift group relative overflow-hidden"
                        >
                          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                            <div className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                              PREFERRED
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Email Me Directly</h3>
                              <p className="text-sm sm:text-lg md:text-xl text-primary font-semibold break-all">chetansharma44170@gmail.com</p>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Get a response within 24 hours</p>
                            </div>
                          </div>
                        </div>

                        {/* WhatsApp Card */}
                        <div 
                          onClick={handleWhatsAppClick}
                          className="glass-card p-3 sm:p-6 md:p-8 cursor-pointer hover-lift group relative overflow-hidden"
                        >
                          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                            <div className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                              INSTANT
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">WhatsApp Chat</h3>
                              <p className="text-sm sm:text-lg md:text-xl text-secondary font-semibold">+91 9870859103</p>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Quick chat for urgent projects</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Quick turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;