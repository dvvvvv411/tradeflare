import { Shield, Users, AlertTriangle, ArrowRight, Lock, TrendingUp, Target, BarChart3, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

export function UrgencyCtaSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.2 });

  const activeUsers = useCountUp({ end: 20000, duration: 2000, enabled: leftVisible, separator: '.' });
  const monthlyReturn = useCountUp({ end: 30, duration: 1500, enabled: rightVisible });
  const successRate = useCountUp({ end: 90, duration: 1500, enabled: rightVisible });
  const tradesCount = useCountUp({ end: 1.46, duration: 2000, enabled: rightVisible, decimals: 2 });

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Urgency Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Exklusiver Zugang
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Limitierte Plätze{' '}
              <span className="text-primary">verfügbar</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">
              Unser KI Trading Bot ist nur für 200 Neuanmeldungen täglich verfügbar, 
              um optimale Performance für alle Nutzer zu gewährleisten.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2.5 rounded-xl border border-border">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-bold">{activeUsers}+</span>
                <span className="text-muted-foreground text-sm">aktive Nutzer</span>
              </div>
              <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 px-4 py-2.5 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-bold text-destructive">Unter 20</span>
                <span className="text-muted-foreground text-sm">Plätze frei</span>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-8">
              <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                <strong className="font-semibold">Wichtig:</strong> Um die Qualität unserer KI-Prognosen und optimale 
                Performance für alle Nutzer zu gewährleisten, begrenzen wir die täglichen 
                Neuanmeldungen auf 200. Sobald alle Plätze vergeben sind, schließt die 
                Registrierung für heute.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-xl font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-pulse-glow"
              asChild
            >
              <a href="#register">
                Jetzt deinen Platz sichern
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Side - Why We Limit */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Warum wir limitieren</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Unser KI-Algorithmus arbeitet am besten mit einer begrenzten Anzahl 
                von gleichzeitigen Nutzern, um optimale Renditen zu erzielen und 
                konstant hohe Performance für alle zu gewährleisten.
              </p>

              {/* Stats Grid 2x2 */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center hover:bg-primary/10 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">bis zu {monthlyReturn}%</p>
                  <p className="text-sm text-muted-foreground">monatliche Rendite</p>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center hover:bg-primary/10 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">über {successRate}%</p>
                  <p className="text-sm text-muted-foreground">Erfolgsrate</p>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center hover:bg-primary/10 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{tradesCount}M+</p>
                  <p className="text-sm text-muted-foreground">Trades pro Monat</p>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center hover:bg-primary/10 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">200€</p>
                  <p className="text-sm text-muted-foreground">Mindesteinlage</p>
                </div>
              </div>

              {/* Transparency Note */}
              <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4 border border-border">
                <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">Transparente Strategie:</strong>{' '}
                  Unser Bot nutzt bewährte Handelsalgorithmen mit regelmäßigen 
                  Performance-Berichten, damit Sie Ihre Investitionen stets 
                  nachvollziehen können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
