import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react';

const REGISTER_URL = '#register';

export function CtaSection() {
  return (
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
  );
}
