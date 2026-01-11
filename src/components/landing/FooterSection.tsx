import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react';

const REGISTER_URL = '#register';

export function FooterSection() {
  return (
    <>
      {/* Final CTA */}
      <section id="kontakt" className="section-padding relative overflow-hidden bg-gradient-to-b from-primary/3 via-primary/5 to-background">
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
      <footer className="py-12 border-t border-border bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-foreground">CryptoAI</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
              <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-foreground transition-colors">AGB</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 CryptoAI. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
