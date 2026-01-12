import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Zap, Bot } from 'lucide-react';
import tradeFlareLogo from '@/assets/tradeflare-logo.png';

const REGISTER_URL = '#register';

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

  return (
    <>
      {/* Final CTA */}
      <section id="exklusiver-zugang" className="section-padding relative overflow-hidden">
        {/* Fließender Gradient von oben (transparent) nach unten (primary) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/4 to-primary/10" />
        
        {/* Dezentes Grid */}
        <div className="absolute inset-0 bg-grid-hero opacity-50" />
        
        {/* Zentraler Glow für CTA-Fokus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[150px]" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Bereit, dein Trading zu <span className="text-primary">automatisieren</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schließe dich tausenden erfolgreichen Nutzern an. Sichere dir jetzt deinen exklusiven Zugang.
          </p>
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white px-10 py-7 text-xl font-bold rounded-xl glow-primary animate-pulse-glow"
            onClick={() => window.location.href = REGISTER_URL}
          >
            Exklusiven Zugang anfragen
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />SSL gesichert</span>
            <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" />DSGVO konform</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" />Sofortiger Zugang</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative overflow-hidden">
        {/* Fließender Übergang - nimmt Gradient der CTA nahtlos auf */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background" />
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
    </>
  );
}
