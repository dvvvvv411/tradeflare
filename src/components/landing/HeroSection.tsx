import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

const REGISTER_URL = '#register';

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  const usersCount = useCountUp({ end: 19847, duration: 2500, enabled: isVisible });
  const totalLimit = useCountUp({ end: 20000, duration: 2500, enabled: isVisible });
  const tradingVolume = useCountUp({ end: 847, duration: 2000, enabled: isVisible });
  const successRate = useCountUp({ end: 94, duration: 2000, enabled: isVisible, decimals: 1 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-bounce-subtle" />

      <div ref={ref} className="container-custom relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
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
              Dein Vermögen.{' '}
              <span className="text-gradient-premium">KI-gesteuert.</span>
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
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl glow-primary hover-lift"
                onClick={() => window.location.href = REGISTER_URL}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Early Access sichern
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group glass-card hover:bg-white/80 px-8 py-6 text-lg font-semibold rounded-xl hover-lift border-primary/20"
                onClick={() => window.location.href = REGISTER_URL}
              >
                <Play className="w-5 h-5 mr-2 text-primary" />
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
                <Shield className="w-4 h-4 text-success" />
                <span>SSL-verschlüsselt</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Trading</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-warning" />
                <span>Ab 200€ starten</span>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Dashboard */}
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">KI Trading Bot</h3>
                      <p className="text-xs text-success flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                        Aktiv
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-success">+{successRate}%</p>
                    <p className="text-xs text-muted-foreground">Erfolgsquote</p>
                  </div>
                </div>

                {/* Animated Chart Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-end justify-between p-4 gap-1 overflow-hidden">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t transition-all duration-500"
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
                    <p className="text-lg font-bold tabular-nums">{tradingVolume}K€</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                    <p className="text-lg font-bold text-success tabular-nums">89.2%</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">+12.4% ETH</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 animate-float-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center">
                    <span className="text-xs">₿</span>
                  </div>
                  <span className="text-sm font-medium">Trade ausgeführt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
