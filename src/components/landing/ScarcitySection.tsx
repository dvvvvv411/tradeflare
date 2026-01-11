import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const REGISTER_URL = '#register';

export function ScarcitySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const spotsUsed = useCountUp({ end: 19847, duration: 2000, enabled: isVisible });
  const totalSpots = 20000;
  const percentage = (19847 / totalSpots) * 100;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Limitierte Verfügbarkeit
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Nur noch <span className="text-primary">{(totalSpots - 19847).toLocaleString('de-DE')}</span> Plätze verfügbar
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Um Serverkapazität und Servicequalität zu gewährleisten, ist die Teilnehmeranzahl 
            auf 20.000 limitiert. Sichere dir jetzt deinen exklusiven Zugang.
          </p>

          {/* Progress Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium tabular-nums">{spotsUsed}</span> Nutzer
              </span>
              <span className="text-muted-foreground">Limit: {totalSpots.toLocaleString('de-DE')}</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-2000 ease-out"
                style={{ width: isVisible ? `${percentage}%` : '0%' }}
              />
            </div>
            <p className="text-sm text-primary font-medium mt-2">{percentage.toFixed(1)}% bereits vergeben</p>
          </div>

          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white px-10 py-7 text-xl font-bold rounded-xl animate-pulse-glow"
            onClick={() => window.location.href = REGISTER_URL}
          >
            Jetzt Early Access sichern
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
