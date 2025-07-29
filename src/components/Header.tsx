import { useState, useEffect } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Why me?', href: '#why-me' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-header py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="https://i.imgur.com/your-logo-url.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="text-xl font-bold gradient-text">
            Chetan Sharma
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GradientButton className="text-sm px-6 py-2">
            Get in Touch
          </GradientButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-6 p-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <GradientButton className="mt-4">
              Get in Touch
            </GradientButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;