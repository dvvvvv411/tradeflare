import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react';

const REGISTER_URL = '#register';

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const navigationLinks = [
  { label: 'Funktionen', href: '#funktionen' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Erfahrungen', href: '#testimonials' },
  { label: 'Kontakt', href: '#kontakt' },
];

const productLinks = [
  { label: "So funktioniert's", href: '#' },
  { label: 'Preise', href: '#' },
  { label: 'Partnerprogramm', href: '#' },
  { label: 'API Dokumentation', href: '#' },
];

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutzerklärung', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Widerrufsbelehrung', href: '/widerruf' },
  { label: 'Risikohinweis', href: '/risikohinweis' },
];

export function FooterSection() {
  return (
    <>
      {/* Final CTA */}
      <section id="kontakt" className="section-padding relative overflow-hidden">
        {/* Enhanced Background - wie Hero Section */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-hero-enhanced" />
        <div className="absolute inset-0 bg-grid-hero opacity-50" />
        
        {/* Animierte Glow Orbs */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-float-pulse" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-primary/8 rounded-full blur-[80px] animate-float-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Diagonal Shimmer Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-bg" />
        </div>
        
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
      <footer className="py-16 bg-muted/50 border-t border-border">
        <div className="container-custom">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Column 1: Logo & Description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-foreground">CryptoAI</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                KI-gestütztes Trading für digitale Assets. Automatisiert, sicher und profitabel – rund um die Uhr.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Made in Germany</span>
              </div>
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

            {/* Column 3: Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produkt</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} CryptoAI. Alle Rechte vorbehalten.
              </p>
              <p className="text-xs text-muted-foreground max-w-2xl text-center lg:text-right leading-relaxed">
                <strong>Risikohinweis:</strong> Der Handel mit Kryptowährungen birgt erhebliche Risiken und kann zum Totalverlust des eingesetzten Kapitals führen. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Handeln Sie nur mit Kapital, dessen Verlust Sie verkraften können.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
