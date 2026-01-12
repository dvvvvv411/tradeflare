import { Users, ArrowRight, Lock, AlertCircle } from 'lucide-react';
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

  // Progress bar calculation: 182 of 200 spots taken = 91%
  const spotsTaken = 182;
  const totalSpots = 200;
  const spotsRemaining = totalSpots - spotsTaken;
  const progressPercentage = (spotsTaken / totalSpots) * 100;

  return (
    <section id="trading-bot" className="py-20 lg:py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Urgency Content in White Card */}
          {/* Left Side - Urgency Content in White Card */}
          <div
            ref={leftRef}
            className={`h-full transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl h-full flex flex-col">
              {/* Headline - komplett blau, kleinere Font Size */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary">
                Limitierte Plätze verfügbar
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6">
                Unser KI Trading Bot ist nur für 200 Neuanmeldungen täglich verfügbar, 
                um optimale Performance für alle Nutzer zu gewährleisten.
              </p>

              {/* Active Users Stat - dezenter */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                <Users className="w-4 h-4 text-primary/60" />
                <span className="font-medium text-foreground">{activeUsers}+</span>
                <span>aktive Nutzer</span>
              </div>

              {/* Progress Bar für verfügbare Plätze - nur blau */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Verfügbare Plätze heute</span>
                  <span className="font-bold text-primary">Unter 20</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: leftVisible ? `${progressPercentage}%` : '0%' }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{Math.round(progressPercentage)}% der täglichen Plätze bereits vergeben</p>
              </div>

              {/* Info Box - Blau mit Warnung-Icon */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-primary leading-relaxed">
                    <strong className="font-semibold">Wichtig:</strong> Um die Qualität unserer KI-Prognosen und optimale 
                    Performance für alle Nutzer zu gewährleisten, begrenzen wir die täglichen 
                    Neuanmeldungen auf 200. Sobald alle Plätze vergeben sind, schließt die 
                    Registrierung für heute.
                  </p>
                </div>
              </div>

              {/* CTA Button - Full Width, mt-auto für gleiche Höhe */}
              <Button 
                size="lg"
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-xl font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-button-pulse mt-auto"
                asChild
              >
                <a href="https://web.tradeflare.de/auth">
                  Jetzt deinen Platz sichern
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Why We Limit (Transparent, no card) */}
          <div
            ref={rightRef}
            className={`h-full flex flex-col justify-between transition-all duration-700 delay-200 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Title with blue vertical line */}
            <div className="flex gap-4 mb-8">
              <div className="w-1 bg-primary rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Warum wir limitieren</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unser KI-Algorithmus arbeitet am besten mit einer begrenzten Anzahl 
                  von gleichzeitigen Nutzern, um optimale Renditen zu erzielen und 
                  konstant hohe Performance für alle zu gewährleisten.
                </p>
              </div>
            </div>

            {/* Stats Grid 2x2 - Left aligned, no icons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-left hover:bg-primary/10 transition-colors">
                <p className="text-3xl font-bold text-primary">bis zu {monthlyReturn}%</p>
                <p className="text-sm text-muted-foreground">monatliche Rendite</p>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-left hover:bg-primary/10 transition-colors">
                <p className="text-3xl font-bold text-primary">über {successRate}%</p>
                <p className="text-sm text-muted-foreground">Erfolgsrate</p>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-left hover:bg-primary/10 transition-colors">
                <p className="text-3xl font-bold text-primary">{tradesCount}M+</p>
                <p className="text-sm text-muted-foreground">Trades pro Monat</p>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-left hover:bg-primary/10 transition-colors">
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
    </section>
  );
}
