import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';
import tradeFlareLogo from '@/assets/tradeflare-logo.png';

const REGISTER_URL = '#register';

const navItems = [
  { label: 'Trading Bot', href: '#trading-bot' },
  { label: 'Erfahrungen', href: '#erfahrungen' },
  { label: 'Exklusiver Zugang', href: '#exklusiver-zugang' },
];

export function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <button onClick={handleLogoClick} className="flex items-center">
              <img src={tradeFlareLogo} alt="TradeFlare" className="h-12 md:h-16 w-auto" />
            </button>
          </div>

          {/* Mittlere Spalte: Navigation ZENTRIERT */}
          <nav className="hidden lg:flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2.5 text-base font-semibold text-foreground 
                           hover:bg-primary/10 hover:text-primary
                           border border-transparent hover:border-primary/20
                           rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Rechte Spalte: CTA Button */}
          <div className="hidden lg:flex justify-end">
            <Button
              onClick={() => window.location.href = REGISTER_URL}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 animate-button-pulse"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Anmelden
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
                  className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-button-pulse"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Anmelden
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
