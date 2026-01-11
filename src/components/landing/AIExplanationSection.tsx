import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Brain, Network, LineChart, Cpu, Sparkles } from 'lucide-react';

export function AIExplanationSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - AI Visualization */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Brain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-success" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-warning" />
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-8 border-2 border-dashed border-primary/20 rounded-full" />
              <div className="absolute inset-16 border border-accent/20 rounded-full" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Künstliche Intelligenz
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold">
              Wie unsere <span className="text-gradient-premium">KI</span> für dich arbeitet
            </h2>

            <div className="space-y-4">
              {[
                { title: 'Machine Learning', desc: 'Lernt aus Millionen historischer Trades und optimiert Strategien in Echtzeit.' },
                { title: 'Pattern Recognition', desc: 'Erkennt Chartmuster und Trends, bevor sie für Menschen sichtbar werden.' },
                { title: 'Sentiment Analysis', desc: 'Analysiert News, Social Media und Marktdaten für präzise Prognosen.' },
                { title: 'Adaptive Strategien', desc: 'Passt sich automatisch an veränderte Marktbedingungen an.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl glass-card hover-lift">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
