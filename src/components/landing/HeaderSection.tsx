import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const REGISTER_URL = '#register';

const navItems = [
  { label: 'Funktionen', href: '#funktionen' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 items-center h-16 md:h-20">
          {/* Linke Spalte: Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-foreground">
              CryptoAI
            </a>
          </div>

          {/* Mittlere Spalte: Navigation ZENTRIERT */}
          <nav className="hidden lg:flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-semibold text-foreground 
                           bg-muted/50 hover:bg-primary/10 hover:text-primary
                           border border-transparent hover:border-primary/20
                           rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Rechte Spalte: CTA Button */}
          <div className="hidden lg:flex justify-end">
            <Button
              onClick={() => window.location.href = REGISTER_URL}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            >
              Jetzt starten
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-3 px-4 text-foreground font-medium
                             hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = REGISTER_URL;
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Jetzt starten
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
