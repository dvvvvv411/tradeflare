import { useScrollReveal } from '@/hooks/useScrollReveal';
import { UserPlus, Wallet, Bot, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REGISTER_URL = '#register';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Kostenlos anmelden',
    description: 'Erstelle in 2 Minuten dein Konto. Keine Kreditkarte erforderlich.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: Wallet,
    number: '02',
    title: 'Kapital einzahlen',
    description: 'Starte bereits ab 200€. Du behältst die volle Kontrolle über dein Geld.',
    color: 'from-accent to-accent/70',
  },
  {
    icon: Bot,
    number: '03',
    title: 'KI aktivieren',
    description: 'Ein Klick genügt. Die KI beginnt sofort mit der Marktanalyse.',
    color: 'from-success to-success/70',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Gewinne verfolgen',
    description: 'Beobachte in Echtzeit, wie die KI für dich arbeitet – 24/7.',
    color: 'from-warning to-warning/70',
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Einfach starten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            In 4 Schritten zum{' '}
            <span className="text-gradient-premium">automatisierten Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Keine technischen Vorkenntnisse nötig. In wenigen Minuten bist du startklar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2 opacity-20" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative group h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                  
                  <div className="relative glass-card rounded-2xl p-6 h-full hover-lift">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl glow-primary hover-lift"
            onClick={() => window.location.href = REGISTER_URL}
          >
            Jetzt starten – Platz reservieren
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Keine Kreditkarte erforderlich • Kostenlose Erstberatung
          </p>
        </div>
      </div>
    </section>
  );
}
