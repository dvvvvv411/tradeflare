import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Zap, 
  Shield, 
  Clock, 
  BarChart3, 
  Smartphone, 
  Lock, 
  RefreshCw, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Non-Stop Trading',
    description: 'Die KI handelt auch nachts, am Wochenende und an Feiertagen – ohne Pause.',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Blitzschnelle Ausführung',
    description: 'Trades werden in Millisekunden ausgeführt – schneller als jeder Mensch.',
  },
  {
    icon: Shield,
    title: 'Risikomanagement',
    description: 'Automatische Stop-Loss und Take-Profit Strategien schützen dein Kapital.',
  },
  {
    icon: BarChart3,
    title: 'Multi-Market Analyse',
    description: 'Überwacht gleichzeitig hunderte Kryptowährungen und erkennt Chancen.',
  },
  {
    icon: RefreshCw,
    title: 'Selbstoptimierend',
    description: 'Die KI lernt kontinuierlich und verbessert ihre Strategien automatisch.',
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: 'Emotionsloses Trading',
    description: 'Keine Panikverkäufe, keine Gier – nur datenbasierte Entscheidungen.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Verfolge deine Performance jederzeit und überall auf deinem Smartphone.',
  },
  {
    icon: Lock,
    title: 'Bank-Level Sicherheit',
    description: '256-bit SSL Verschlüsselung und 2-Faktor-Authentifizierung schützen dich.',
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-medium mb-4">
            Leistungsstarke Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Alles, was du für{' '}
            <span className="text-gradient-premium">profitables Trading</span> brauchst
          </h2>
          <p className="text-lg text-muted-foreground">
            Modernste Technologie, vereint in einer intuitiven Plattform. 
            Entwickelt von Experten, gebaut für jeden.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative h-full rounded-2xl p-6 transition-all duration-300 ${
                feature.highlight 
                  ? 'glass-strong border-primary/20 hover:border-primary/40' 
                  : 'glass-card hover:bg-white/80'
              } hover-lift`}>
                {/* Highlight Glow */}
                {feature.highlight && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    feature.highlight 
                      ? 'bg-gradient-to-br from-primary to-accent' 
                      : 'bg-primary/10'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.highlight ? 'text-white' : 'text-primary'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>

                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-medium">
                      Premium
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
