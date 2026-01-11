import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const REGISTER_URL = '#register';

// Crypto data for the dashboard
const cryptos = [
  { symbol: 'BTC', name: 'Bitcoin', price: 77908, change: 2.34, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 2660, change: 1.87, icon: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', price: 116, change: 3.21, icon: '◎' },
];

const initialTrades = [
  { id: 1, crypto: 'Bitcoin', symbol: 'BTC', type: 'LONG', profit: 2340, percent: 1.8, icon: '₿' },
  { id: 2, crypto: 'Ethereum', symbol: 'ETH', type: 'LONG', profit: 892, percent: 2.1, icon: 'Ξ' },
  { id: 3, crypto: 'Solana', symbol: 'SOL', type: 'LONG', profit: 156, percent: 0.9, icon: '◎' },
];

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [trades, setTrades] = useState(initialTrades);
  const [animatingTrade, setAnimatingTrade] = useState<number | null>(null);
  
  const accountBalance = useCountUp({ end: 12847, duration: 2500, enabled: isVisible });
  const todayProfit = useCountUp({ end: 4.2, duration: 2000, enabled: isVisible, decimals: 1 });
  const successRate = useCountUp({ end: 87.2, duration: 2000, enabled: isVisible, decimals: 1 });
  const tradesCount = useCountUp({ end: 156, duration: 2000, enabled: isVisible });

  // Simulate new trades coming in
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      const newTrade = {
        id: Date.now(),
        crypto: cryptos[Math.floor(Math.random() * cryptos.length)].name,
        symbol: cryptos[Math.floor(Math.random() * cryptos.length)].symbol,
        type: 'LONG' as const,
        profit: Math.floor(Math.random() * 500) + 100,
        percent: Math.round((Math.random() * 2 + 0.5) * 10) / 10,
        icon: cryptos[Math.floor(Math.random() * cryptos.length)].icon,
      };
      
      setAnimatingTrade(newTrade.id);
      setTrades(prev => [newTrade, ...prev.slice(0, 2)]);
      
      setTimeout(() => setAnimatingTrade(null), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
                Bitcoin, Ethereum, Solana & mehr
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Krypto-Trading.{' '}
              <span className="text-primary">Automatisiert.</span>
              <br />
              24/7 für dich aktiv.
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Unsere KI analysiert Bitcoin, Ethereum und Altcoins in Echtzeit – 
              und handelt professionell für dich. Keine Emotionen. Keine verpassten Chancen.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl glow-primary hover-lift"
                onClick={() => window.location.href = REGISTER_URL}
              >
                <span className="flex items-center gap-2">
                  Jetzt kostenlos starten
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group bg-white hover:bg-muted/50 px-8 py-6 text-lg font-semibold rounded-xl hover-lift border-border"
                onClick={() => document.getElementById('funktionen')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Mehr erfahren
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
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>24/7 Trading</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Ab 200€ starten</span>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Trading Dashboard */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-strong rounded-2xl overflow-hidden hover-lift">
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Live Trading Dashboard</h3>
                      <p className="text-xs text-primary flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Bot aktiv
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Erfolgsrate</p>
                    <p className="text-lg font-bold text-primary tabular-nums">{successRate}%</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 divide-x divide-border/50 bg-white/50">
                  <div className="px-4 py-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Kontostand</p>
                    <p className="text-lg font-bold tabular-nums">€{accountBalance.toLocaleString()}</p>
                    <p className="text-xs text-primary font-medium">+{todayProfit}% heute</p>
                  </div>
                  <div className="px-4 py-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Trades heute</p>
                    <p className="text-lg font-bold tabular-nums">{tradesCount}</p>
                    <p className="text-xs text-muted-foreground">automatisiert</p>
                  </div>
                  <div className="px-4 py-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Erfolgsrate</p>
                    <p className="text-lg font-bold text-primary tabular-nums">{successRate}%</p>
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                  </div>
                </div>

                {/* Live Trades */}
                <div className="p-4 border-t border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Aktuelle Trades</p>
                    <span className="text-xs text-primary">Live</span>
                  </div>
                  <div className="space-y-2">
                    {trades.map((trade) => (
                      <div 
                        key={trade.id}
                        className={`flex items-center justify-between p-3 rounded-lg bg-muted/30 transition-all duration-500 ${
                          animatingTrade === trade.id ? 'bg-primary/10 scale-[1.02]' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {trade.icon}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{trade.crypto}</p>
                            <p className="text-xs text-primary">{trade.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm text-primary tabular-nums">+€{trade.profit}</p>
                          <p className="text-xs text-primary/80 tabular-nums">+{trade.percent}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Overview */}
                <div className="p-4 border-t border-border/50 bg-muted/20">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Marktübersicht</p>
                  <div className="grid grid-cols-3 gap-3">
                    {cryptos.map((crypto) => (
                      <div key={crypto.symbol} className="text-center p-2 rounded-lg bg-white/50">
                        <p className="text-xs font-medium text-muted-foreground">{crypto.symbol}</p>
                        <p className="font-semibold text-sm tabular-nums">€{crypto.price.toLocaleString('de-DE')}</p>
                        <div className="flex items-center justify-center gap-0.5 text-primary text-xs">
                          <ArrowUpRight className="w-3 h-3" />
                          <span className="tabular-nums">+{crypto.change}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
