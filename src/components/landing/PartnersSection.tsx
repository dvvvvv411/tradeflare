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
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Dezentes Hintergrund-Muster */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Unsere Partner
          </h2>
        </div>

        <div
          className={`flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-white/80 dark:bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/30"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
