import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Brain, Clock, TrendingDown, AlertCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Emotionales Trading',
    description: 'Angst und Gier führen zu Fehlentscheidungen – und kosten dich bares Geld.',
  },
  {
    icon: Clock,
    title: 'Keine Zeit für Analyse',
    description: 'Der Markt schläft nie. Du schon. Und verpasst die besten Gelegenheiten.',
  },
  {
    icon: TrendingDown,
    title: 'Überforderung & Stress',
    description: 'Hunderte Coins, tausende Charts, endlose Nachrichten. Wer behält da den Überblick?',
  },
];

const solutions = [
  {
    icon: Brain,
    title: 'KI trifft rationale Entscheidungen',
    description: 'Keine Emotionen, keine Panik, keine Gier. Nur datenbasierte Präzision.',
  },
  {
    icon: Clock,
    title: '24/7 automatisiertes Trading',
    description: 'Während du schläfst, arbeitet die KI für dich – rund um die Uhr, 365 Tage.',
  },
  {
    icon: Sparkles,
    title: 'Komplexität wird Einfachheit',
    description: 'Du lehnst dich zurück. Die KI analysiert, entscheidet und handelt für dich.',
  },
];

export function ProblemSolutionSection() {
  const { ref: problemRef, isVisible: problemVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trading ist <span className="text-destructive">stressig</span>.{' '}
            <span className="text-gradient-premium">War</span> es zumindest.
          </h2>
          <p className="text-lg text-muted-foreground">
            Die meisten Trader verlieren – nicht wegen schlechter Strategien, 
            sondern wegen menschlicher Schwächen.
          </p>
        </div>

        {/* Problem Section */}
        <div ref={problemRef} className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`relative group p-6 rounded-2xl bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/10 transition-all duration-700 ${
                  problemVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-destructive via-primary to-success blur-xl opacity-30" />
            <div className="relative glass-card rounded-full p-4">
              <ArrowRight className="w-8 h-8 text-primary rotate-90" />
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div ref={solutionRef}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Die Lösung: <span className="text-gradient-premium">Künstliche Intelligenz</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`relative group p-6 rounded-2xl glass-card hover-lift transition-all duration-700 ${
                  solutionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
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
