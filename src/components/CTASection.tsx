import { Button } from '@/components/ui/button';
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial brief to delivering your stunning thumbnails, the process is smooth and collaborative
          </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative text-center group"
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
            <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Boost Your Click-Through Rate?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful content creators who've increased their views with 
                eye-catching thumbnail designs. Let's create thumbnails that get clicked.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="electric" 
                      size="lg" 
                      className="group px-12 py-6 text-xl font-bold"
                    >
                      Start Your Project Now
                      <Rocket className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border border-glass-border">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Let's Create Amazing Thumbnails Together!</h3>
                      
                      {/* Quick Contact Options */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <Button 
                          variant="outline" 
                          onClick={handleEmailClick}
                          className="h-auto p-4 flex flex-col items-center gap-2 bg-primary/5 hover:bg-primary/10 border-primary/30"
                        >
                          <Mail className="h-6 w-6 text-primary" />
                          <span className="text-sm">Email Me Directly</span>
                          <span className="text-xs text-muted-foreground">chetansharma44170@gmail.com</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={handleWhatsAppClick}
                          className="h-auto p-4 flex flex-col items-center gap-2 bg-secondary/5 hover:bg-secondary/10 border-secondary/30"
                        >
                          <Phone className="h-6 w-6 text-secondary" />
                          <span className="text-sm">WhatsApp Chat</span>
                          <span className="text-xs text-muted-foreground">+91 9870859103</span>
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-muted-foreground/20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">Or fill the form below</span>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="bg-background/50"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-background/50"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="projectType">Project Type</Label>
                          <Input
                            id="projectType"
                            name="projectType"
                            placeholder="e.g., YouTube thumbnails, podcast covers, etc."
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="bg-background/50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Project Details</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project, style preferences, timeline, etc."
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="bg-background/50"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Now
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
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