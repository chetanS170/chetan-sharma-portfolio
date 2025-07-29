import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Why me?", href: "#why-me" },
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
  ];

  const services = [
    "YouTube Thumbnails",
    "Instagram Graphics", 
    "TikTok Covers",
    "Gaming Thumbnails",
    "Educational Content",
    "Brand Consistency"
  ];

  return (
    <footer className="relative py-20 mt-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="glass-card p-6 sm:p-8 lg:p-12 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold gradient-text mb-4">
                Chetan Sharma
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                Creating eye-catching thumbnails that boost click-through rates and grow your audience. 
                Let's make your content stand out together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
              <div className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="text-sm sm:text-base text-muted-foreground"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <button 
                    onClick={() => window.location.href = 'mailto:chetansharma44170@gmail.com?subject=Thumbnail Design Inquiry'}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer break-all"
                  >
                    chetansharma44170@gmail.com
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <button 
                    onClick={() => window.open('https://wa.me/919870859103?text=Hi%20Chetan,%20I%27m%20interested%20in%20your%20thumbnail%20design%20services', '_blank')}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    +91 9870859103
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm sm:text-base text-muted-foreground">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 Chetan Sharma. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;