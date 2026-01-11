import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Brain, Clock, TrendingDown, AlertCircle, CheckCircle, Sparkles, ArrowDown } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Emotionales Krypto-Trading',
    description: 'Bitcoin fällt 10%? Panikverkauf. Bitcoin steigt? FOMO-Käufe. Emotionen kosten dich bares Geld.',
  },
  {
    icon: Clock,
    title: 'Der Krypto-Markt schläft nie',
    description: 'Während du schläfst, bewegt sich Bitcoin. Die besten Trades passieren oft nachts.',
  },
  {
    icon: TrendingDown,
    title: 'Überforderung im Altcoin-Dschungel',
    description: 'Hunderte Coins, volatile Märkte, endlose Charts. Ethereum, Solana, Cardano – wer behält den Überblick?',
  },
];

const solutions = [
  {
    icon: Brain,
    title: 'KI tradet Bitcoin ohne Emotionen',
    description: 'Keine Panik bei Dips, keine FOMO bei Pumps. Nur datenbasierte Krypto-Entscheidungen.',
  },
  {
    icon: Clock,
    title: '24/7 Krypto-Trading automatisiert',
    description: 'Die KI tradet Bitcoin, Ethereum & Altcoins rund um die Uhr – auch wenn du schläfst.',
  },
  {
    icon: Sparkles,
    title: 'Professionelle Marktanalyse',
    description: 'Die KI analysiert den gesamten Krypto-Markt und findet die besten Trading-Chancen.',
  },
];

export function ProblemSolutionSection() {
  const { ref: problemRef, isVisible: problemVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vorteile" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Krypto-Trading ist stressig.{' '}
            <span className="text-primary">War</span> es zumindest.
          </h2>
          <p className="text-lg text-muted-foreground">
            Die meisten Krypto-Trader verlieren – nicht wegen schlechter Strategien, 
            sondern wegen menschlicher Schwächen.
          </p>
        </div>

        {/* Problem Section */}
        <div ref={problemRef} className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`relative group p-6 rounded-2xl bg-muted/50 border border-border transition-all duration-700 ${
                  problemVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center mb-16">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Solution Section */}
        <div ref={solutionRef}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Die Lösung: <span className="text-primary">KI-gestütztes Krypto-Trading</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`relative group p-6 rounded-2xl bg-white border border-border hover-lift transition-all duration-700 ${
                  solutionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground pl-7">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
