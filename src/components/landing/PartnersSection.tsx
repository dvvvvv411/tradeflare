import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: 'Binance', logo: '/partners/binance.png' },
  { name: 'Kraken', logo: '/partners/kraken.jpeg' },
  { name: 'Coinbase', logo: '/partners/coinbase.png' },
  { name: 'KuCoin', logo: '/partners/kucoin.png' },
  { name: 'Bitfinex', logo: '/partners/bitfinex.png' },
  { name: 'OKX', logo: '/partners/okx.png' },
];

export function PartnersSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Kompatibel mit führenden Börsen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Verbinde deinen Bot mit den größten Krypto-Exchanges weltweit
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/30"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
