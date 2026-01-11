import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, ArrowUpRight, Clock, Wallet } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

const REGISTER_URL = '#register';

// CoinGecko icon URLs
const CRYPTO_ICONS = {
  BTC: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
  ETH: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  SOL: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
};

// Crypto config
const cryptoConfig = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
];

// Initial fallback prices
const fallbackPrices = {
  bitcoin: { eur: 77908, eur_24h_change: 2.34 },
  ethereum: { eur: 2660, eur_24h_change: 1.87 },
  solana: { eur: 116, eur_24h_change: 3.21 },
};

interface CryptoPrices {
  [key: string]: { eur: number; eur_24h_change: number };
}

const initialTrades = [
  { id: 1, crypto: 'Bitcoin', symbol: 'BTC' as keyof typeof CRYPTO_ICONS, type: 'LONG', profit: 2340, percent: 1.8 },
  { id: 2, crypto: 'Ethereum', symbol: 'ETH' as keyof typeof CRYPTO_ICONS, type: 'LONG', profit: 892, percent: 2.1 },
  { id: 3, crypto: 'Solana', symbol: 'SOL' as keyof typeof CRYPTO_ICONS, type: 'LONG', profit: 156, percent: 0.9 },
];

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [trades, setTrades] = useState(initialTrades);
  const [animatingTrade, setAnimatingTrade] = useState<number | null>(null);
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>(fallbackPrices);
  
  const accountBalance = useCountUp({ end: 12847, duration: 2500, enabled: isVisible });
  const todayProfit = useCountUp({ end: 4.2, duration: 2000, enabled: isVisible, decimals: 1 });
  const successRate = useCountUp({ end: 87.2, duration: 2000, enabled: isVisible, decimals: 1 });

  // Fetch real crypto prices from CoinGecko
  const fetchPrices = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=eur&include_24hr_change=true'
      );
      if (response.ok) {
        const data = await response.json();
        setCryptoPrices(data);
      }
    } catch (error) {
      // Silent fail - keep using fallback/last known prices
      console.log('CoinGecko API unavailable, using cached prices');
    }
  }, []);

  // Fetch prices on mount and every 60 seconds
  useEffect(() => {
    fetchPrices();
    const priceInterval = setInterval(fetchPrices, 60000);
    return () => clearInterval(priceInterval);
  }, [fetchPrices]);

  // Simulate new trades coming in
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      const randomCrypto = cryptoConfig[Math.floor(Math.random() * cryptoConfig.length)];
      const newTrade = {
        id: Date.now(),
        crypto: randomCrypto.name,
        symbol: randomCrypto.symbol as keyof typeof CRYPTO_ICONS,
        type: 'LONG' as const,
        profit: Math.floor(Math.random() * 500) + 100,
        percent: Math.round((Math.random() * 2 + 0.5) * 10) / 10,
      };
      
      setAnimatingTrade(newTrade.id);
      setTrades(prev => [newTrade, ...prev.slice(0, 2)]);
      
      setTimeout(() => setAnimatingTrade(null), 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Enhanced Background Elements */}
      
      {/* Top Gradient Glow - Stronger Primary accent */}
      <div className="absolute inset-0 bg-gradient-hero-enhanced" />
      
      {/* Improved Grid */}
      <div className="absolute inset-0 bg-grid-hero opacity-50" />
      
      {/* Animated Glow Orbs - Float + Pulse */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float-pulse" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px] animate-float-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      {/* Diagonal Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-bg" />
      </div>
      
      {/* Bottom Fade - Clear section separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div ref={ref} className="container-custom relative z-10 py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-12 items-center">
          {/* Left Content - Professional & Confident */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Headline - Dominant */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-gradient-animated font-light lg:block">KI-gestütztes Trading</span>{' '}
              <span className="text-primary lg:block">für digitale Assets</span>
            </h1>

            {/* Subheadline - Consumer-friendly */}
            <p 
              className={`text-lg sm:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Unsere KI erkennt profitable Trades und handelt automatisch für dich – 
              auch wenn du schläfst.
            </p>

            {/* CTAs - Clean & Serious */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-xl animate-button-pulse"
                onClick={() => window.location.href = REGISTER_URL}
              >
                <span className="flex items-center gap-2">
                  Jetzt anmelden
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost"
                className="text-muted-foreground hover:text-foreground px-8 py-6 text-base font-medium"
                onClick={() => document.getElementById('funktionen')?.scrollIntoView({ behavior: 'smooth' })}
              >
                So funktioniert's
              </Button>
            </div>

            {/* Mini Stats - Visual Pill Badges */}
            <div 
              className={`flex flex-wrap gap-3 justify-center lg:justify-start pt-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>92% profitable Trades</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Handelt 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Wallet className="w-4 h-4" />
                <span>Ab €200 starten</span>
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

                {/* Stats Row - 2 columns */}
                <div className="grid grid-cols-2 divide-x divide-border/50 bg-white/50">
                  <div className="px-6 py-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Kontostand</p>
                    <p className="text-xl font-bold tabular-nums">€{accountBalance.toLocaleString()}</p>
                    <p className="text-xs text-green-500 font-medium">+{todayProfit}% heute</p>
                  </div>
                  <div className="px-6 py-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Erfolgsrate</p>
                    <p className="text-xl font-bold text-green-500 tabular-nums">{successRate}%</p>
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                  </div>
                </div>

                {/* Live Trades - Fixed height container */}
                <div className="p-4 border-t border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Aktuelle Trades</p>
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      Live
                    </span>
                  </div>
                  <div className="space-y-2 min-h-[168px]">
                    {trades.map((trade) => (
                      <div 
                        key={trade.id}
                        className={`flex items-center justify-between p-3 rounded-lg h-14 transition-colors duration-300 ${
                          animatingTrade === trade.id ? 'bg-green-500/10' : 'bg-muted/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={CRYPTO_ICONS[trade.symbol]} 
                            alt={trade.crypto}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="font-medium text-sm">{trade.crypto}</p>
                            <p className="text-xs text-green-500 font-medium">{trade.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm text-green-500 tabular-nums">+€{trade.profit}</p>
                          <p className="text-xs text-green-500/80 tabular-nums">+{trade.percent}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Overview - Real CoinGecko Prices */}
                <div className="p-4 border-t border-border/50 bg-muted/20">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Marktübersicht</p>
                  <div className="grid grid-cols-3 gap-3">
                    {cryptoConfig.map((crypto) => {
                      const priceData = cryptoPrices[crypto.id] || fallbackPrices[crypto.id as keyof typeof fallbackPrices];
                      const change = priceData.eur_24h_change;
                      const isPositive = change >= 0;
                      
                      return (
                        <div key={crypto.symbol} className="text-center p-2 rounded-lg bg-white/50">
                          <div className="flex items-center justify-center gap-1.5 mb-1">
                            <img 
                              src={CRYPTO_ICONS[crypto.symbol as keyof typeof CRYPTO_ICONS]} 
                              alt={crypto.name}
                              className="w-4 h-4 rounded-full"
                            />
                            <p className="text-xs font-medium text-muted-foreground">{crypto.symbol}</p>
                          </div>
                          <p className="font-semibold text-sm tabular-nums">€{priceData.eur.toLocaleString('de-DE')}</p>
                          <div className={`flex items-center justify-center gap-0.5 text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            <ArrowUpRight className={`w-3 h-3 ${!isPositive ? 'rotate-90' : ''}`} />
                            <span className="tabular-nums">{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
                          </div>
                        </div>
                      );
                    })}
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
