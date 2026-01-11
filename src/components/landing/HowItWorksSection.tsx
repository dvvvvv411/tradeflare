import { useScrollReveal } from '@/hooks/useScrollReveal';
import { UserPlus, Wallet, Bot, TrendingUp, ArrowRight, Phone, ShieldCheck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REGISTER_URL = '#register';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Kostenlos anmelden',
    description: 'Erstelle in 2 Minuten dein Konto. Keine Kreditkarte erforderlich.',
  },
  {
    icon: Wallet,
    number: '02',
    title: 'Kapital einzahlen',
    description: 'Starte bereits ab 200€. Du behältst die volle Kontrolle über dein Investment.',
  },
  {
    icon: Bot,
    number: '03',
    title: 'KI aktivieren',
    description: 'Ein Klick genügt. Die KI beginnt sofort mit der Marktanalyse.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Ergebnisse verfolgen',
    description: 'Beobachte in Echtzeit, wie die KI für dich arbeitet – 24/7.',
  },
];

const features = [
  {
    icon: Phone,
    title: 'Persönlicher Berater',
    description: 'Dein 1:1 Ansprechpartner für alle Fragen rund um dein Investment.',
  },
  {
    icon: ShieldCheck,
    title: 'Volle Kontrolle',
    description: 'Dein Kapital bleibt auf deinem eigenen Exchange-Konto.',
  },
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Schnelle Hilfe per Telefon, E-Mail oder Chat.',
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="funktionen" className="section-padding relative overflow-hidden bg-muted/30">
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
            <span className="text-primary">automatisierten Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Keine technischen Vorkenntnisse nötig. In wenigen Minuten bist du startklar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
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
                <div className="relative group h-full">
                  <div className="relative bg-white border border-border rounded-2xl p-6 h-full hover-lift">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Premium <span className="text-primary">Service</span> inklusive
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-xl bg-white border border-border hover-lift transition-all duration-700 ${
                  featuresVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center transition-all duration-700 delay-700 ${
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
