import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import tradeFlareLogo from '@/assets/tradeflare-logo.png';

const navigationLinks = [
  { label: 'Trading Bot', href: '#trading-bot' },
  { label: 'Erfahrungen', href: '#erfahrungen' },
  { label: 'Exklusiver Zugang', href: '#exklusiver-zugang' },
];

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutzerklärung', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Widerrufsbelehrung', href: '/widerruf' },
];

export function FooterSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
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

  const handleLegalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Dezenter Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute inset-0 bg-grid-hero opacity-15" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <button onClick={handleLogoClick}>
              <img src={tradeFlareLogo} alt="TradeFlare" className="h-[4.5rem] w-auto" />
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Die Zukunft des Krypto-Tradings mit KI-Unterstützung. Maximiere deine Renditen durch unseren fortschrittlichen Algorithmus.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Powered by */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4">Powered by</h4>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <Bot className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">TradeFlare Engine</p>
                <p className="text-xs text-muted-foreground">v3.2 Neural Network</p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={handleLegalLinkClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TradeFlare. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
