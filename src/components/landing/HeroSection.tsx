import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';
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

          {/* Right Content - Futuristic Trading Terminal */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative" style={{ transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)', transformStyle: 'preserve-3d' }}>
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 blur-md animate-border-glow" />
              <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl glow-ring" />
              
              {/* Main Dashboard Card - Futuristic Glass */}
              <div className="glass-futuristic rounded-2xl overflow-hidden relative">
                {/* Scan Line Effect */}
                <div className="absolute inset-0 scan-line overflow-hidden pointer-events-none" />
                
                {/* Dashboard Header - Futuristic */}
                <div className="px-6 py-4 border-b border-white/20 flex items-center justify-between relative">
                  <div className="flex items-center gap-3">
                    {/* Hexagon-style Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center rotate-3 shadow-lg shadow-primary/30">
                      <TrendingUp className="w-5 h-5 text-white -rotate-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-tight">CryptoAI Terminal</h3>
                      <p className="text-xs text-primary flex items-center gap-1.5 font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        System aktiv
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 rounded-full bg-primary/30" />
                  </div>
                </div>

                {/* Stats Row - Glassmorphic Cards */}
                <div className="p-4 grid grid-cols-2 gap-3">
                  <div className="glass-inner p-4 text-center hover:bg-white/60 transition-colors">
                    <p className="text-2xl font-bold text-green-500 tabular-nums">+{todayProfit}%</p>
                    <p className="text-lg font-semibold tabular-nums">€{accountBalance.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">Kontostand</p>
                  </div>
                  <div className="glass-inner p-4 text-center hover:bg-white/60 transition-colors">
                    <p className="text-2xl font-bold text-green-500 tabular-nums">{successRate}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Win Rate</p>
                    {/* Mini Progress Bar */}
                    <div className="mt-2 h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000" 
                        style={{ width: isVisible ? '87%' : '0%' }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Live Trades - Futuristic Container */}
                <div className="p-4">
                  <div className="glass-inner p-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Aktive Positionen
                      </p>
                      <span className="text-xs text-green-500 font-medium flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        Live
                      </span>
                    </div>
                    <div className="space-y-2 min-h-[168px]">
                      {trades.map((trade, index) => (
                        <div 
                          key={trade.id}
                          className={`flex items-center justify-between p-3 rounded-lg h-14 transition-all duration-300 ${
                            animatingTrade === trade.id 
                              ? 'bg-green-500/15 shadow-sm shadow-green-500/20' 
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img 
                                src={CRYPTO_ICONS[trade.symbol]} 
                                alt={trade.crypto}
                                className="w-9 h-9 rounded-full ring-2 ring-white/50 shadow-sm"
                              />
                              {animatingTrade === trade.id && (
                                <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{trade.crypto}</p>
                              <p className="text-xs text-green-500 font-bold tracking-wide">{trade.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-sm text-green-500 tabular-nums">+€{trade.profit}</p>
                            <p className="text-xs text-green-500/80 tabular-nums font-medium">+{trade.percent}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Market Overview - Futuristic Ticker */}
                <div className="p-4 border-t border-white/20">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Live Markets
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {cryptoConfig.map((crypto) => {
                      const priceData = cryptoPrices[crypto.id] || fallbackPrices[crypto.id as keyof typeof fallbackPrices];
                      const change = priceData.eur_24h_change;
                      const isPositive = change >= 0;
                      
                      return (
                        <div 
                          key={crypto.symbol} 
                          className="glass-inner text-center p-3 hover:bg-white/60 transition-all group"
                        >
                          <div className="flex items-center justify-center gap-1.5 mb-2">
                            <img 
                              src={CRYPTO_ICONS[crypto.symbol as keyof typeof CRYPTO_ICONS]} 
                              alt={crypto.name}
                              className="w-5 h-5 rounded-full ring-1 ring-white/50"
                            />
                            <p className="text-xs font-bold text-foreground">{crypto.symbol}</p>
                          </div>
                          <p className="font-bold text-sm tabular-nums group-hover:text-primary transition-colors">
                            €{priceData.eur.toLocaleString('de-DE')}
                          </p>
                          <div className={`flex items-center justify-center gap-0.5 text-xs font-semibold mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            <ArrowUpRight className={`w-3 h-3 ${!isPositive ? 'rotate-90' : ''}`} />
                            <span className="tabular-nums">{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
