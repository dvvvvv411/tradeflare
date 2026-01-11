import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Zap } from 'lucide-react';

const REGISTER_URL = '#register';

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  const usersCount = useCountUp({ end: 19847, duration: 2500, enabled: isVisible });
  const totalLimit = useCountUp({ end: 20000, duration: 2500, enabled: isVisible });
  const successRate = useCountUp({ end: 94, duration: 2000, enabled: isVisible, decimals: 1 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-muted-foreground">
                <span className="font-bold text-foreground tabular-nums">{usersCount}</span> von {totalLimit} Plätzen vergeben
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Dein Investment.{' '}
              <span className="text-primary">KI-gesteuert.</span>
              <br />
              24/7 automatisiert.
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Während du schläfst, arbeitet unsere KI für dich. Hochentwickeltes Machine Learning 
              analysiert Märkte und handelt in Sekundenbruchteilen – ohne Emotionen, ohne Pause.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl glow-primary hover-lift"
                onClick={() => window.location.href = REGISTER_URL}
              >
                <span className="flex items-center gap-2">
                  Jetzt Early Access sichern
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group bg-white hover:bg-muted/50 px-8 py-6 text-lg font-semibold rounded-xl hover-lift border-border"
                onClick={() => window.location.href = REGISTER_URL}
              >
                Kostenlose Beratung
              </Button>
            </div>

            {/* Trust Indicators */}
            <div 
              className={`flex flex-wrap gap-6 justify-center lg:justify-start pt-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>SSL-verschlüsselt</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Trading</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Ab 200€ starten</span>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Dashboard */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-strong rounded-2xl p-6 space-y-6 hover-lift">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">KI Trading Bot</h3>
                      <p className="text-xs text-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        Aktiv
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">+{successRate}%</p>
                    <p className="text-xs text-muted-foreground">Erfolgsquote</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-40 bg-muted/30 rounded-xl flex items-end justify-between p-4 gap-1 overflow-hidden">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/80 rounded-t transition-all duration-500"
                      style={{ 
                        height: isVisible ? `${height}%` : '0%',
                        transitionDelay: `${i * 50 + 800}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground">Trades heute</p>
                    <p className="text-lg font-bold tabular-nums">247</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground">Volumen</p>
                    <p className="text-lg font-bold tabular-nums">847K€</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                    <p className="text-lg font-bold text-primary tabular-nums">89.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
